from flask import Flask, render_template, redirect
import fitspotting
from flask_pymongo import PyMongo


app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/fitspotting_db"
mongo = PyMongo(app)

@app.route("/")
def index():
    hotels = mongo.db.hotels.find()
    return render_template("index.html", hotels= hotels)


@app.route("/load")
def load():
    listing = fitspotting.load_data()
    return redirect("/", code=302)


if __name__ == "__main__":
    app.run(debug=True)