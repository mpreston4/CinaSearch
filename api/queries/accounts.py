from pydantic import BaseModel
from pymongo import MongoClient
import os

MONGO_USER = os.environ.get('MONGO_USER', '')
MONGO_PASSWORD = os.environ.get('MONGO_PASSWORD', '')
MONGO_HOST = os.environ.get('MONGO_HOST', '')
MONGO_DB = os.environ.get('MONGO_DB', '')

client = MongoClient(f'mongodb://{MONGO_USER}:{MONGO_PASSWORD}@{MONGO_HOST}')
db = client[MONGO_DB]

class DuplicateAccountError(ValueError):
    pass

class AccountIn(BaseModel):
    email: str
    password: str
    full_name: str

class AccountOut(BaseModel):
    id: str
    email: str
    full_name: str

class AccountOutWithPassword(AccountOut):
    hashed_password : str

class AccountQueries():

    @property
    def collection(self):
        return db['accounts']

    def create(self, account_in: AccountIn, hashed_password: str) -> AccountOut:
        account = account_in.dict()
        account['hashed_password'] = hashed_password
        result = self.collection.insert_one(account)
        if result.inserted_id:
            result = self.get(account["email"])
        return result

    def get(self, email: str) -> AccountOut:
        result = self.collection.find_one({"email": email})
        result["id"] = str(result["_id"])
        return AccountOutWithPassword(**result)
