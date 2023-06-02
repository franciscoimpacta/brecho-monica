from flask import Flask,  render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index")

if __name__ == "__main__":
    app.run('0.0.0.0', 5000)