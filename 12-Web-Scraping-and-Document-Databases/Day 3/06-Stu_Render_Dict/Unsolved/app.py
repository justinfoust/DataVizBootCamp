# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
# CODE GOES HERE

app = Flask(__name__)

# @TODO: Create a list of dictionaries
# CODE GOES HERE

@app.route("/")
def index():
    pet_dict = [
        {'name': 'Rex', 'type': 'Tyranosaurus'},
        {'name': 'Mr. Meow', 'type': 'Kitty Kat'},
        {'name': 'Beardy McBeard Face', 'type': 'Bearded Dragon'},
        {'name': 'Justin', 'type': 'Human'}
    ]
    return render_template('index.html', dict=pet_dict)

# @TODO:  Create a route and view function that takes in a dictionary and renders index.html template
# CODE GOES HERE

if __name__ == "__main__":
    app.run(debug=True)
