import ast
import tokenize
from io import BytesIO

def highlight_errors(user_code):
    try:
        #parsing the code into an abtract syntax tree
        parsed_code = ast.parse(user_code)
    except SyntaxError as e:
        #if there s a syntax error, give the position and the error message 
        error_message = str(e)
        error_position = e.offset - len(''.join(user_code.splitlines(True)[:e.lineno - 1]))
        highlighted_code = user_code[:error_position] + '\033[91m' + user_code[error_position: error_position + e.offset] + '\033[0m' + user_code[error_position + e.offset:]
        return f"Syntax Error: {error_message}\nHighlighted Code:\n{highlighted_code}"
    
    return "Code is syntaxically correct."


import os
import random
from grazie.api.client.gateway import AuthType, GrazieApiGatewayClient,GrazieHeaders
from grazie.api.client.chat.prompt import ChatPrompt
import os
import random
from grazie.api.client.gateway import AuthType, GrazieApiGatewayClient, GrazieHeaders
from grazie.api.client.chat.prompt import ChatPrompt
from grazie.api.client.endpoints import GrazieApiGatewayUrls
from grazie.api.client.profiles import Profile

token1 = "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJHcmF6aWUgQXV0aGVudGljYXRpb24iLCJ1aWQiOiI2ZmQ2ZWI1OC05Njg1LTRkZTctYmMwNy00NmIxYmE2NTEzN2EiLCJ0eXBlIjoiY3VzdG9tIiwibGljZW5zZSI6ImN1c3RvbV9hcHA6OThiODk4MGMtZTk3My00MWYxLWIxZGEtYTExZTRiOGI5ZWVjIiwibGljZW5zZV90eXBlIjoiamV0YnJhaW5zLWFpLmFwcGxpY2F0aW9uLnN0YW5kYXJkIiwiZXhwIjoxNzEwNDQ2MTAwfQ.hVHEt-lMtlbdoOnm0W7gZ58av0BV4RjBS8mGFsNB3gJiFrMubVDdMYHftQ46XcqcglVpY1gymi4PJkGEtcwL1AJ8kYfxDjQqTE7YdMcauN3HXNoEHbhsexwyG4fGgG_5z36oqv_6f5BKZLUNWgfcn4JBEcxbxPoh8vmxwognd-tIJZQOylu6cSWcgWSSCJDrIUJQrs587BDrbHPZc0FPJoQtxaj6jf9tjf0IcL1xS9xCLrp5M7EhzP36O2eINYPJeDRHKPGOdHmb8WyxP5T6dopI9sF7SwZ-gcLhXCR9HpMTOX6jJagMALhP3POTkZ8gg9wbAnD4BhszJgpWqZCF4Q"

# In a real application, you would have to supply the client's IP address
client_ip = "{}.{}.{}.{}".format(*[str(random.randint(0, 255)) for octet in range(4)])
client = GrazieApiGatewayClient(
    url= "https://api.app.stgn.grazie.aws.intellij.net/",
    grazie_jwt_token=token1,
    auth_type=AuthType.APPLICATION,
    )
response = client.chat(
                    chat=(
                        ChatPrompt()
                        .add_system("You are a helpful assistant.")
                        .add_user(highlight_errors("insert text here"))
                        ),
                        profile=Profile.OPENAI_GPT_4,
                        headers={
GrazieHeaders.ORIGINAL_USER_IP: client_ip,
})
print(response.content)


