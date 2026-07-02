from flask import Flask, render_template 
import requests

app = Flask(__name__)

def get_matches():
    try:
        headers = ('X-Auth-Token': '')
        url = 'https://api.football-data.org/v4/competitions/WC/scorers'
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        return response.json()['matches']
    except requests.exceptions.RequestException as e:
        print('API error: {e}')
        return None
    
    @app.route("/")
    def home():
        matches = get_matches
        if matches:
            return render_template("index.html", matches = matches)