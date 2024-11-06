from fastapi import FastAPI
from api.services.prediction_service import PredictionService
from api.services.quiz_service import QuizService
import numpy as np
import json

app = FastAPI()
prediction_service = PredictionService()
quiz_service = QuizService()


@app.get("/api/quiz")
def get_quiz(question_count: int = 20):
    random_questions = quiz_service.get_random_questions(question_count)
    return {"questions": random_questions}

@app.post("/api/predict")
def predict(data: dict):
    # Check if data is a dictionary
    if not isinstance(data, dict):
        return {"error": "Data must be a dictionary."}

    # Convert values to numbers
    data = {key: int(value) for key, value in data.items()}

    # Predict the personality
    prediction, plot_base64 = prediction_service.predict(data)
    return {"prediction": prediction, "plot": plot_base64}
