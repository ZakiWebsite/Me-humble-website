from flask import Flask, render_template
import requests

app = Flask(__name__)

# Configuration
API_KEY = "YOUR_API_KEY_HERE"  # Substitute with your genuine API key
ALGERIA_TEAM_ID = 6317

@app.route('/')
def home():
    url = "https://api-sports.io"
    headers = {
        "x-apisports-key": API_KEY,
        "x-rapidapi-host": "v3.football.api-sports.io"
    }
    params = {
        "league": "1",
        "season": "2026"
    }
    
    algeria_scorers = []
    
    try:
        response = requests.get(url, headers=headers, params=params)
        data = response.json()
        
        # Loop through data and filter for Algeria
        for entry in data.get("response", []):
            player_info = entry.get("player", {})
            for stat in entry.get("statistics", []):
                if stat.get("team", {}).get("id") == ALGERIA_TEAM_ID:
                    algeria_scorers.append({
                        "name": player_info.get("name"),
                        "photo": player_info.get("photo"),
                        "goals": stat.get("goals", {}).get("total", 0),
                        "assists": stat.get("goals", {}).get("assists", 0) or 0
                    })
    except Exception as e:
        print(f"Error fetching data: {e}")
        
    # Send the filtered list to the HTML file
    return render_template('index.html', scorers=algeria_scorers)

if __name__ == '__main__':
    app.run(debug=True)