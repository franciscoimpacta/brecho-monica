from flask import Flask,  render_template
from flask_mail import Mail

app = Flask(__name__)
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
# set gmail
app.config['MAIL_USERNAME'] = 'victorkrajnovic@gmail.com'
# set pass
app.config['MAIL_PASSWORD'] = 'Fran4459993067'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/roupas")
def roupas():
    return render_template("roupas.html")


@app.route("/calcas")
def calcas():
    return render_template("calcas.html")

@app.route("/email", methods = ['POST'])
def email():
    
    return render_template("calcas.html")

if __name__ == "__main__":
    app.run('0.0.0.0', 5000, debug = True)