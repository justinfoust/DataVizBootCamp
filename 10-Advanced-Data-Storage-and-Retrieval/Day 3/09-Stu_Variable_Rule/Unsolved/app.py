from flask import Flask, jsonify

justice_league_members = [
    {"superhero": "Aquaman", "real_name": "Arthur Curry"},
    {"superhero": "Batman", "real_name": "Bruce Wayne"},
    {"superhero": "Cyborg", "real_name": "Victor Stone"},
    {"superhero": "Flash", "real_name": "Barry Allen"},
    {"superhero": "Green Lantern", "real_name": "Hal Jordan"},
    {"superhero": "Superman", "real_name": "Clark Kent/Kal-El"},
    {"superhero": "Wonder Woman", "real_name": "Princess Diana"}
]

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/api/v1.0/justice-league")
def justice_league():
    """Return the justice league data as json"""

    return jsonify(justice_league_members)


@app.route("/")
def welcome():
    return (
        f"Welcome to the Justice League API!<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/justice-league<br/>"
        f"/api/v1.0/justice-league/superhero/batman"
    )


"""TODO: Handle API route with variable path to allow getting info
for a specific character based on their 'superhero' name """
@app.route("/api/v1.0/justice-league/superhero/<super_name>")
def hero_info(super_name):

    canonicalized = superhero.replace(" ","").lower()
    for character in justice_league_members:
        search_term = character["superhero"].replace(" ","").lower()

        if super_name == canonicalized:
            return jsonify(character)

if __name__ == "__main__":
    app.run(debug=True)
