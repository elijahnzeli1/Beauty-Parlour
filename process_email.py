import json
import spacy
from sklearn.externals import joblib
import re

# Load Spacy model and trained ML model
nlp = spacy.load('en_core_web_sm')
model = joblib.load('email_model.pkl')
vectorizer = joblib.load('vectorizer.pkl')

# Read email from file
with open('email.txt', 'r') as file:
    email_text = file.read()

# Preprocess email
def preprocess_email(email_text):
    doc = nlp(email_text)
    tokens = [token.lemma_ for token in doc if not token.is_stop and not token.is_punct]
    return ' '.join(tokens)

preprocessed_email = preprocess_email(email_text)

# Feature extraction
X = vectorizer.transform([preprocessed_email])

# Predict email type
email_type = model.predict(X)[0]

# Extract date and time (example with regex)
date_match = re.search(r'\b(?:\d{1,2}[-/thstnd]{0,2} \w+ \d{4}|\d{1,2}[-/thstnd]{0,2} \w+|\w+ \d{1,2}, \d{4})\b', email_text)
time_match = re.search(r'\b\d{1,2}:\d{2} ?[APM]{2}\b', email_text)

date = date_match.group() if date_match else 'N/A'
time = time_match.group() if time_match else 'N/A'

# Structure the data
structured_data = {
    'type': email_type,
    'date': date,
    'time': time
}

print(json.dumps(structured_data))
