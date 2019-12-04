# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
# CODE GOES HERE

app = Flask(__name__)

name = 'Justin'
hobby = 'None'

# @TODO:  Create a route and view function that takes in a string and renders index.html template
# CODE GOES HERE
@app.route("/")
def home():
    return render_template("index.html", name="Hi this is Justin's page", hobby="I have no hobbies and no lyfe!!!")

@app.route("/bonus")
def bonus():
    return render_template("bonus.html", name=name, hobby=hobby)


if __name__ == "__main__":
    app.run(debug=True)
