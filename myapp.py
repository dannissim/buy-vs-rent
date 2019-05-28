from flask import Flask, render_template, request
from algorithms.vars_module import default_vars
from algorithms.graphscreator import build_all_graphs
import json

def create_app():
    app = Flask(__name__)
    return app

app = create_app()

@app.route('/api/getimages/')
def get_api_results():
    vars = dict()
    percentages = {'Savings Rate From Net', 'House Price Growth', 'Rent Growth', 'Long Term Savings Return',
        'Mortgage Interest', 'Salary Growth'}
    thousands = {'Start Amount', 'Gross Salary', 'Rent'}
    millions = {'House Price'}
    for field in default_vars:
        get_param = request.args.get(field, type=float)
        get_param = int(get_param) if get_param.is_integer() else get_param
        if field in percentages:
            try:
                get_param /= 100
            except Exception:
                print(field)
        elif field in thousands:
            get_param *= 1000
        elif field in millions:
            get_param *= 1e6
        vars[field] = get_param
    lan = request.args.get('lan', type=str)
    encoded_images_dict = build_all_graphs(vars, lan)
    return json.dumps(list(encoded_images_dict.values()))

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def render_app(path):
    return render_template('index.html')


