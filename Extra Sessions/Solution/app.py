# 1. import Flask
from flask import Flask, jsonify

# 2. Create an app, being sure to pass __name__
app = Flask(__name__)

# 3. Define what to do when a user hits the index route
@app.route("/")
def home():
    print("Server received request for 'Home' page...")
    return "Welcome to my 'Home' page!"

# 4. Define what to do when a user hits the /about route
@app.route("/about")
def about():
    print("Server received request for 'About' page...")
    return "Welcome to my 'About' page!"

@app.route("/greeting/<somename>")
def name(somename):
    print(f'hello {somename}')
    return f'''
    <h1>Hello {somename}! Welcome to my site</h1>
    <p><a href ="http://www.google.com">Click Here</a> for more information</p>
    '''

@app.route("/language/<lang>")
def coding(lang):
    return f'<h3>I am interested in learning</h3> <h2 style="color:red;">{lang}</h2>'

@app.route("/top")
def sql():
    from sqlalchemy import create_engine, func, desc, inspect
    from sqlalchemy.ext.automap import automap_base
    from sqlalchemy.orm import Session
    import sqlalchemy

    engine = create_engine("sqlite:///gitdb.sqlite")
    Base = automap_base()
    Base.prepare(engine, reflect=True)
    Git = Base.classes.gitrepos
    session = Session(engine)
    q = session.query(Git.name, Git.stargazers_count).\
                order_by(desc(Git.stargazers_count)).\
                limit(20).all()
    
    session.close()
    l = []
    for row in q:
        l.append(row._asdict())
        
    return jsonify(l)
if __name__ == "__main__":
  app.run(debug=True)