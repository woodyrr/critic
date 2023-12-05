from flask import Flask, render_template, url_for

from data import coffee, departments

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('home.html', departments=departments)

@app.route("/about")
def about():
    svg1 = '/templates/assets/Star_fill.svg'
    
    return render_template('main.html', coffee=coffee,svg1 = svg1)


if __name__ == '__main__':
    app.run(debug=True)