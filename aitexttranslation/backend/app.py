from flask import Flask, request, jsonify
from flask_cors import CORS
from deep_translator import GoogleTranslator

app = Flask(__name__)
CORS(app)

@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.get_json()
    text = data.get("text", "")
    target_lang = data.get("target_lang", "fr")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    translated_text = GoogleTranslator(source='auto', target=target_lang).translate(text)
    return jsonify({"translated_text": translated_text})

if __name__ == '__main__':
    app.run(debug=True)
