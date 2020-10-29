from flask import Flask, send_from_directory, redirect
import os
import random
import json

app = Flask(__name__)


@app.route("/app/<path:filename>")
def react_prod_build(filename):
    return send_from_directory(os.path.join(app.root_path, '..', 'build'), filename)


@app.route("/app/")
@app.route("/app/index")
def app_index():
    return send_from_directory(os.path.join(app.root_path, '..', 'build'), 'index.html')


@app.route("/")
def index():
    return """
        <!DOCTYPE html>
        <html>
            <head>
                <script>
                caches.open('vasanimit9.github.io.2')
                    .then(cache => {
                        cache.delete('/');
                    });
                window.location = 'app';
                </script>
            </head>
            <body>
            </body>
        </html>
    """


@app.route("/api/last_quote")
def last_quote():
    quotes_list = os.listdir('./static/quotes')
    quotes_list.sort(reverse=True)
    quotes_list = filter(lambda x: x[0] != '.', quotes_list)
    url = '/static/quotes/' + next(quotes_list).split('/')[-1]
    return url


@app.route("/api/random_quote")
def random_quote_api():
    quotes_list = os.listdir('./static/quotes')
    quotes_list.sort(reverse=True)
    quotes_list = list(filter(lambda x: x[0] != '.', quotes_list))
    url = '/static/quotes/' + random.choice(quotes_list).split('/')[-1]
    return url


@app.route("/api/news")
def news():
    return app.send_static_file('news.json'), 200, {'Content-Type': 'application/json'}


@app.route("/api/install")
def install():
    return json.dumps(True), 200, {'Content-Type': 'application/json'}
