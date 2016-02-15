# from the app package, import the app variable class. This will grab the app variable from the __init__.py file
from app import app

#@app.route() is a method of the flask class. Our app variable is an instance of the flask class, thus it has 
# a route method. A route maps a url to a function.
@app.route('/')
def home():
    return "This is the main url."
