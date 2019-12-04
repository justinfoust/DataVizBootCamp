# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
# CODE GOES HERE

app = Flask(__name__)

# @TODO:  Create a route and view function that takes in a list of strings and renders index.html template
# CODE GOES HERE

@app.route("/")
def index():
    movie_list = [
    ["Independence Day", "Aliens"],
    ["LOTR", "Middle Earth"],
    ["Bad Boys","Cops"],
    ["Kung Fu Hustle","Slap-Stick Kung Fu Comedy"]
    ]
    return render_template("index.html", list=movie_list)

if __name__ == "__main__":
    app.run(debug=True)
