from flask import Flask
import os

app = Flask(__name__, static_folder='../build', static_url_path='/')
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/news')
def api_news():
    return app.send_static_file('news.json'), 200, {'Content-Type': 'application/json'}
