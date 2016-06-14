# from the app package, import the app variable class. This will grab the app variable from the __init__.py file
from flask import render_template
from app import app

@app.route('/')
def index():
    return render_template('main.html')
