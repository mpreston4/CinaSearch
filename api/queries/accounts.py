from pydantic import BaseModel
from .client import Queries
from pymongo.errors import DuplicateKeyError

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

class AccountQueries(Queries):

    COLLECTION = "accounts"

    def create(self, account_in: AccountIn, hashed_password: str):
        account = account_in.dict()
        account['hashed_password'] = hashed_password
        account.pop('password')
        try:
            result = self.collection.insert_one(account)
        except DuplicateKeyError:
            raise DuplicateAccountError
        if result.inserted_id:
            result = self.get(account["email"])
        return result

    def get(self, email: str):
        result = self.collection.find_one({"email": email})
        result["id"] = str(result["_id"])
        return AccountOutWithPassword(**result)
