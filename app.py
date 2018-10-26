#!flask/bin/python
from flask import Flask
from flask_cors import CORS

import requests

app = Flask(__name__)
CORS(app)


url = "http://mainnet.eosnairobi.io/v1/chain/get_producers"
data = '{"limit": "21","json":"true"}'

response = requests.post(url, data)


print(response.text)


@app.route('/')
def index():
    return "Welcome to WestWorld!"


@app.route('/lookup', methods=['GET'])
def get_account():
    return "Have you ever seen anything so full of spleandor?"


@app.route('/producers', methods=['GET'])
def get_producers():
    response = requests.post(url, data)
    return response.text


if __name__ == '__main__':
    app.run(debug=True)
