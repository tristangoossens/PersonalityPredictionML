from keras.models import load_model
from sklearn.impute import KNNImputer
import pandas as pd
import numpy as np


class PredictionService:
    @property
    def model(self):
        return self._model
    
    @property
    def respondent_data(self):
        # Remove the personality column
        return self._respondent_data

    def __init__(self):
        self._model = load_model('../models/personality_prediction_ann.h5')
        self._respondent_data = pd.read_csv('../data/respondent_data.csv')
    
    # Converting an incomplete data dictionary to a complete DataFrame (with NaNs for missing values)
    def _convert_to_complete_df(self, data_dict):
        expanded_data = [data_dict.get(f"Q{i+1}", np.nan) for i in range(60)]
        return pd.DataFrame([expanded_data], columns=[f"Q{i+1}" for i in range(60)])

    # Rounding the imputed values to the nearest valid value
    def _round_to_nearest_valid_value(self, imputed_row):
        valid_values = np.array([3, 2, 1, 0, -1, -2, -3])
        return np.array([valid_values[np.abs(valid_values - val).argmin()] for val in imputed_row])

    # Using K-Nearest Neighbors to impute missing data for a complete prediction
    def knn_impute_missing_data(self, data_dict):
        # Step 1: Ensure that all the data is present. (NaN for missing values)
        expanded_df = self._convert_to_complete_df(data_dict)
        
        # Step 2: Combine new user's partial answers with the complete dataset for KNN imputation
        combined_data = pd.concat([self._respondent_data.drop(columns=['Personality']), expanded_df], ignore_index=True)

        # Step 3: Apply KNNImputer (you can adjust n_neighbors)
        imputer = KNNImputer(n_neighbors=5)
        imputed_row = imputer.fit_transform(combined_data)[-1]

        # Step 4: Round the imputed values to the nearest valid value
        rounded_imputed_row = self._round_to_nearest_valid_value(imputed_row)

        # Step 5: Convert the imputed data back to a dictionary
        return {f"Q{i+1}": rounded_imputed_row[i] for i in range(60)}

    def predict(self, data):
        # Impute missing data if necessary
        if len(data) != 60:
            data = self.knn_impute_missing_data(data)

        # Predict and return confidence scores
        input_data = pd.DataFrame([data])
        return self._model.predict(input_data)