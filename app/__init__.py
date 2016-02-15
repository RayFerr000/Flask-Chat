'''
The __init__.py file tells the python interpreter to treat this folder as a package.
Read up on what a package is in python.
'''
#import the Flask library
from flask import Flask
#Create a variable called 'app' and set it to an instance of the Flask class.
#We have access to the Flask class because we imported it above.
app = Flask(__name__)
#import the views.py code so that our app variable has access to it
from app import views
