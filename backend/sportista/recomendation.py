import tensorflow as tf
import numpy as np
from django.forms.models import model_to_dict
from sportista.models import UserGradesFieldTemp, SportistaUser, Renter, Sport, Field


def create_user_field_model():
    fields = list(Field.objects.values('id', 'has_teams', 'grades').order_by('id'))
    print(fields)
    users = list(SportistaUser.objects.values('id', 'plays_sports'))
    print(users)
    sports = list(Sport.objects.values('id'))
    print(sports)
    new_model = tf.keras.Sequential([
        tf.keras.layers.Dense(100, activation='relu', input_shape=(len(fields) + len(sports),)),
        tf.keras.layers.Dense(5, activation='softmax')
    ])

    print("Hello")


def train():
    train_data = []
    data = list(UserGradesFieldTemp.objects.all())
    print(data)
    for sample in data:
        user = SportistaUser.objects.filter(id=sample['id_usera'])
        train_data.append({user['']})






