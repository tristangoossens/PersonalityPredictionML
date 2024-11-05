from fastapi import FastAPI
from api.services.prediction_service import PredictionService
from api.services.quiz_service import QuizService

app = FastAPI()
prediction_service = PredictionService()
quiz_service = QuizService()


@app.get("/api/quiz")
def get_quiz(question_count: int = 20):
    random_questions = quiz_service.get_random_questions(question_count)
    return {"questions": random_questions}

@app.get("/api/predict")
def predict():
    predictions = prediction_service.predict({
        "Q2": 2,
        "Q7": 1,
        "Q15": -2,
        "Q20": 3
    })

    print("cuhh")
    print(predictions)
    print("\n\n")
    print(predictions.argmax())