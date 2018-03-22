from flask import Flask
from flask_restful import Resource, Api
import base64
app = Flask(__name__)
api = Api(app)


class Civil(Resource):
    def get(self):
        with open("assets/fotos/"+"Simoes"+".png", 'rb') as i:
            image = base64.b64encode(i.read())

        with open("assets/ass/"+"Simoes"+".png", 'rb') as j:
            ass = base64.b64encode(j.read())
        return {'0': image.decode(),
                '1': 'Simoes', '2': 'Artur', '3': '12 12 1970 Ourem',
                '4a': '02 01 2017', '4b': '', '4c': 'IMT',
                '4d': '000000000', '5': 'LL-235363 9',
                '7': ass.decode(),
                '8': 'rua do enigma',
                '9': [{'classe': 'B', 's': '08 03 01', 'f': '17 12 42'},
                {'classe': 'B', 's': '08 03 01', 'f': '17 12 42'}]}


api.add_resource(Civil, '/user/1')


@app.route('/')
def index():
    return 'Hello'


if __name__ == "__main__":
    app.run()
