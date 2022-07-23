import datetime
from flask import Flask
from flask_restful import reqparse, abort, Api, Resource, request
from flask_cors import *
import os
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, decode_token
from flask_jwt_extended import JWTManager
import base64
import json
import rsa

import re

app = Flask(__name__, static_folder='dist', static_url_path='/')
app.config["SECRET_KEY"] = "wujie!"
CORS(app, supports_credentials=True)
api = Api(app)
jwt = JWTManager(app)


@app.route('/', methods=['GET'])
def index():
    return app.send_static_file('index.html')


@app.route('/time')
def server_time():
    html = '<html><head><title>Server Time</title></head><body>'
    html += '<h1>Server Time</h1>'
    html += '<p>The current time is: %s</p>' % datetime.datetime.now()
    html += '</body></html>'
    return html

@app.route('/api/login', methods=['POST'])
def login():
    data = request.data
    data = json.loads(data)
    email = data['email']
    password = data['password']
    print(email, password)
    return  "错误"


@app.route('/api/gen_rsa')
def gen_rsa():
    (pubkey, privkey) = rsa.newkeys(1024)
    return str(pubkey)


app.run(host="0.0.0.0", port=9000)