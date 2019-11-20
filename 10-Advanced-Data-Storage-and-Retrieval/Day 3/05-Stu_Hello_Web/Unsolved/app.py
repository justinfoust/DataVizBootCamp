from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    print("Welcome Message Given :):):):)")
    return "GO AWAY, NOBODY LIKES YOU!!!!!"

@app.route("/about")
def about():
    name = "Joe Blow"
    location = "Coolsville"

@app.route("/contact")
def contact():
    