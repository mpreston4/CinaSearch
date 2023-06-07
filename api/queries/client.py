import os
from pymongo import MongoClient

MONGO_USER = os.environ.get('MONGO_USER', '')
MONGO_PASSWORD = os.environ.get('MONGO_PASSWORD', '')
MONGO_HOST = os.environ.get('MONGO_HOST', '')
MONGO_DB = os.environ.get('MONGO_DB', '')

client = MongoClient(f'mongodb://{MONGO_USER}:{MONGO_PASSWORD}@{MONGO_HOST}')
db = client[MONGO_DB]
db['accounts'].create_index("email", unique=True)


class Queries:
    @property
    def collection(self):
        return db[self.COLLECTION]
