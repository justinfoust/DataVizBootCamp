import pymongo
import json

## connecting to mongodb
def load_data():
    conn = 'mongodb://localhost:27017'
    client = pymongo.MongoClient(conn)


    db = client.fitspotting_db
    db.hotels.drop()


    ## reading JSON data
    with open('data.json') as f:
        data = json.load(f)
        db.hotels.insert_many(data)
    
    client.close()


def query_data():
    conn = 'mongodb://localhost:27017'
    client = pymongo.MongoClient(conn)


    db = client.fitspotting_db
    data = db.hotels.find()
    client.close()
    return data
    