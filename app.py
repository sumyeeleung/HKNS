from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

app.secret_key = '45653537'

if __name__ == "__main__":
    app.run()
