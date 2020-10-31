from flask import Flask, send_from_directory, redirect, render_template
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
@app.route("/index")
def index():
    return redirect('/app')


@app.route("/service-worker.js")
@app.route("/worker.js")
def old_worker():
    return render_template('service-worker.js'), 200, {'Content-Type': 'application/javascript'}


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


@app.route("/api/birthdays/<month>/<day>")
def birthdays(month, day):
    try:
        json_file = open(os.path.join(
            app.root_path, 'static', 'birthdays.json'), 'r')
        birthdays = json.load(json_file)
        json_file.close()
        return json.dumps(birthdays[month + '/' + day]), 200, {'Content-Type': 'application/json'}
    except:
        return json.dumps(-1), 200, {'Content-Type': 'application/json'}


@app.route('/api/time_table')
def time_table():
    return app.send_static_file('schedules.json'), 200, {'Content-Type': 'application/json'}


@app.route("/favicon.ico")
def favicon():
    return send_from_directory(os.path.join(app.root_path, '..', 'build'), 'logo.png'),\
        200, {'Content-Type': 'image/png'}
