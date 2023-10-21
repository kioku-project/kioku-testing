from locust import HttpUser, task
import random
import string
import json

def genString():
    return ''.join(random.choice(string.ascii_letters) for _ in range(16))
def generateCredentials():
    return (genString() + "@gmail.com", genString(), genString())

class NormalUser(HttpUser):
    @task
    def landing_page(self):
        self.client.get("/")
    @task
    def register(self):
        email, name, password = generateCredentials()
        data = {
            "userEmail": email,
            "userName": name,
            "userPassword": password
        }

        self.client.post("/api/register", json=data)