from flask_cors import CORS
from json import *
from werkzeug.utils import secure_filename
from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
import pickle
import requests
import warnings
import joblib
import keras
import os
import tensorflow as tf
import cv2
warnings.filterwarnings('ignore')

UPLOAD_FOLDER = os.getcwd()+'/static/submitted'
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)
crop_recommendation_model_path = './XGB_Crop.pkl'
crop_recommendation_model_path = r'C:\RajasthanHAck backend\RajasthanITHackathon_NeuralNinjas\classifier.pkl'
crop_recommendation_model = pickle.load(
    open(crop_recommendation_model_path, 'rb'))

fertilizer_recommendation_model_path = r'C:\RajasthanHAck backend\RajasthanITHackathon_NeuralNinjas\random_forest_model.pkl'
fertilizer_recommendation_model = pickle.load(
    open(fertilizer_recommendation_model_path, 'rb'))


@app.route("/crop", methods=['POST'])
def members1():
    try:
        N = int(request.json['N'])
        P = int(request.json['P'])
        K = int(request.json['K'])
        ph = float(request.json['Ph'])
        state = request.json['state']
        district = request.json['district']
        start_month = int(request.json['start_month'])
        end_month = int(request.json['end_month'])
    except:
        return jsonify({"crop": 'Enter Valid Details', "data": request.json})

    x = requests.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + district + ' ' + state +
                     '.json?access_token=pk.eyJ1IjoiYXJ5YW5tZWh0YTc2NSIsImEiOiJjbGZna3MxdG40Zjh2M3hyMDh4dW5xYms1In0.9oZ36G4cOJOv5giSUdIBig')

    coordinates = x.json()['features'][0]['center']

    y = requests.get('https://api.openweathermap.org/data/2.5/weather?lat=' + str(
        coordinates[1]) + '&lon=' + str(coordinates[0]) + '&appid=268cc51afbd06d6ffb21c827c6289880')

    humidity = y.json()['main']['humidity']
    temprature = y.json()['main']['temp'] - 273.15

    # df = pd.read_csv("./rainfall.csv")
    # q = df.loc[(df['STATE_UT_NAME'] == state) & (df['DISTRICT'] == district)]

    total = 0
    l = 12

    if start_month <= end_month:
        l = (end_month-start_month)+1
        for i in range(start_month, end_month+1):
            try:
                total += int(q[i:i+1].value)
            except:
                total -= 1
    elif start_month > end_month:
        l = (end_month+12) - start_month + 1
        for i in range(start_month, 13):
            try:
                total += int(q[i:i+1].value)
            except:
                total -= 1
        for i in range(1, end_month+1):
            try:
                total += int(q[i:i+1].value)
            except:
                total -= 1

    avg_rainfall = total/l
    data = np.array([N, P, K, temprature, humidity,
                    ph, avg_rainfall]).reshape(1, -1)

    scaler = joblib.load("./all_scaler.gz")
    x_scaled = scaler.transform(data)
    probs = crop_recommendation_model.predict_proba(x_scaled)[0]
    top_3 = sorted(range(len(probs)), key=lambda i: probs[i])[-3:]
    print(top_3)

    final_prediction = []

    dict_crop = {'rice': 20,
                 'maize': 11,
                 'chickpea': 3,
                 'kidneybeans': 9,
                 'pigeonpeas': 18,
                 'mothbeans': 13,
                 'mungbean': 14,
                 'blackgram': 2,
                 'lentil': 10,
                 'pomegranate': 19,
                 'banana': 1,
                 'mango': 12,
                 'grapes': 7,
                 'watermelon': 21,
                 'muskmelon': 15,
                 'apple': 0,
                 'orange': 16,
                 'papaya': 17,
                 'coconut': 4,
                 'cotton': 6,
                 'jute': 8,
                 'coffee': 5}

    for top in top_3:
        for key, value in dict_crop.items():
            if value == top:
                final_prediction.append(key)

    return jsonify({"crop": final_prediction, "data": y.json()['main'], 'l': l})


@app.route("/fertilizer", methods=['POST'])
def members2():
    try:
        N = int(request.json['N'])
        P = int(request.json['P'])
        K = int(request.json['K'])
        state = request.json['state']
        district = request.json['district']
        moisture = float(request.json['moisture'])
        soil_type = int(request.json['soil_type'])
        crop_type = int(request.json['crop_type'])
    except:
        return jsonify({"crop": 'Enter Valid Data', "data": request.json})

    x = requests.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + district + ' ' + state +
                     '.json?access_token=pk.eyJ1Ijoic2FpZ29ydGk4MSIsImEiOiJja3ZqY2M5cmYydXd2MnZwZ2VoZzl1ejNkIn0.CupGYvpb_LNtDgp7b-rZJg')

    coordinates = x.json()['features'][0]['center']

    y = requests.get('https://api.openweathermap.org/data/2.5/weather?lat=' + str(
        coordinates[1]) + '&lon=' + str(coordinates[0]) + '&appid=8d51fbf3b5ad7f3cc65ba0ea07220782')

    temperature = y.json()['main']['temp'] - 273.15

    data = np.array(
        [[temperature, moisture, soil_type, crop_type, N, K, P]]).reshape(1, -1)

    my_prediction = fertilizer_recommendation_model.predict(data)[0]
    print(my_prediction)

    dict_fert = {'10-26-26': 0,
                 '14-35-14': 1,
                 '17-17-17': 2,
                 '20-20': 3,
                 '28-28': 4,
                 'DAP': 5,
                 'Urea': 6}

    for key, value in dict_fert.items():
        if value == my_prediction:
            final_pred = key

    return jsonify({"crop": final_pred, "data": dict_fert})

@app.route("/rice", methods=['POST'])
def members3():
    print(request)
    img = request.files['image']
    if img:
        img_loc = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(img.filename))
        img.save(img_loc)
        # x = tf.io.read_file(img_loc)
        # x = tf.io.decode_image(x,channels=3) 
        # x = tf.image.resize(x,[299,299])
        test_image = cv2.imread(img_loc)
        # test_image = cv2.cvtColor(test_image, cv2.COLOR_BGR2RGB)
        test_image=cv2.resize(test_image, (299, 299))
        test_image= np.array(test_image)
        # test_image = test_image.reshape(np.nan,240,240,3)
        model = keras.models.load_model(r'C:\RajasthanHAck backend\RajasthanITHackathon_NeuralNinjas\rice.h5')
        result = model.predict(test_image.reshape(1,299,299,3))
        result=result.tolist()
    return jsonify({"disease": result})

@app.route("/wheat", methods=['POST'])
def members4():
    print(request)
    img = request.files['image']
    if img:
        img_loc = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(img.filename))
        img.save(img_loc)
        # x = tf.io.read_file(img_loc)
        # x = tf.io.decode_image(x,channels=3) 
        # x = tf.image.resize(x,[299,299])
        test_image = cv2.imread(img_loc)
        # test_image = cv2.cvtColor(test_image, cv2.COLOR_BGR2RGB)
        test_image=cv2.resize(test_image, (299, 299))
        test_image= np.array(test_image)
        # test_image = test_image.reshape(np.nan,240,240,3)
        model = keras.models.load_model(r'C:\RajasthanHAck backend\RajasthanITHackathon_NeuralNinjas\wheatdisease.h5')
        result = model.predict(test_image.reshape(1,299,299,3))
        result=result.tolist()
    return jsonify({"disease": result})

@app.route("/maize", methods=['POST'])
def members5():
    print(request)
    img = request.files['image']
    if img:
        img_loc = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(img.filename))
        img.save(img_loc)
        # x = tf.io.read_file(img_loc)
        # x = tf.io.decode_image(x,channels=3) 
        # x = tf.image.resize(x,[299,299])
        test_image = cv2.imread(img_loc)
        # test_image = cv2.cvtColor(test_image, cv2.COLOR_BGR2RGB)
        test_image=cv2.resize(test_image, (299, 299))
        test_image= np.array(test_image)
        # test_image = test_image.reshape(np.nan,240,240,3)
        model = keras.models.load_model(r'C:\RajasthanHAck backend\RajasthanITHackathon_NeuralNinjas\maize.h5')
        result = model.predict(test_image.reshape(1,299,299,3))
        result=result.tolist()
    return jsonify({"disease": result})

@app.route("/potato", methods=['POST'])
def members6():
    print(request)
    img = request.files['image']
    if img:
        img_loc = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(img.filename))
        img.save(img_loc)
        # x = tf.io.read_file(img_loc)
        # x = tf.io.decode_image(x,channels=3) 
        # x = tf.image.resize(x,[299,299])
        test_image = cv2.imread(img_loc)
        # test_image = cv2.cvtColor(test_image, cv2.COLOR_BGR2RGB)
        test_image=cv2.resize(test_image, (299, 299))
        test_image= np.array(test_image)
        # test_image = test_image.reshape(np.nan,240,240,3)
        model = keras.models.load_model(r'C:\RajasthanHAck backend\RajasthanITHackathon_NeuralNinjas\potato.h5')
        result = model.predict(test_image.reshape(1,299,299,3))
        result=result.tolist()
    return jsonify({"disease": result})


if __name__ == "__main__":
    app.run(debug=True)