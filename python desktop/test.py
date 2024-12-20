import urllib.request
import json
with urllib.request.urlopen('http://localhost:3000/users') as response:
    body = json.loads(response.read())
    for user in body:
         print(user)
   