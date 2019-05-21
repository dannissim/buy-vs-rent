from flask import Flask, render_template
# import config

def create_app():
    app = Flask(__name__)
    # app.config.from_pyfile('config.py')
    return app

app = create_app()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def show_form(path):
    print('igethere')
    return render_template('index.html')
