import csv
import random


class QuizService:
    @property
    def questions_dict(self):
        return self._questions_dict

    def __init__(self):
        with open('data/question_data.csv', 'r') as file:
            reader = csv.reader(file)
            
            # Skip the header
            next(reader)

            # Convert the csv rows to a dictionary (question_id: question_text)
            self._questions_dict = {row[0]: row[1] for row in reader}

    def get_random_questions(self, count = 20):
        return random.sample(list(self._questions_dict.items()), count)