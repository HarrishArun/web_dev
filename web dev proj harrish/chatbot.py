import random

# Define a list of predefined user queries and their corresponding responses
responses = {
    "hello": ["Hi there!", "Hello!", "Hey!"],
    "how are you": ["I'm just a chatbot, but thanks for asking!", "I don't have feelings, but I'm here to help!"],
    "goodbye": ["Goodbye!", "See you later!", "Have a great day!"],
    "default": ["I'm not sure I understand.", "Can you please rephrase that?", "Sorry, I didn't get that."],
}

# Function to get a response based on user input
def get_response(user_input):
    # Convert user input to lowercase for case-insensitive matching
    user_input = user_input.lower()

    # Check if the user input matches any predefined query
    for key in responses:
        if key in user_input:
            return random.choice(responses[key])

    # If no predefined query matches, return a default response
    return random.choice(responses["default"])

# Main loop to interact with the chatbot
print("Chatbot: Hi! How can I assist you today?")
while True:
    user_input = input("You: ")
    if user_input.lower() == "exit":
        print("Chatbot: Goodbye!")
        break
    response = get_response(user_input)
    print("Chatbot:", response)
