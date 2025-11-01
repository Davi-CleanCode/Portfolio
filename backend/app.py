from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from datetime import datetime
import re

app = Flask(__name__)
CORS(app)

DATA_FILE = "contact_submissions.json"


def load_submissions():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            try:
                return json.load(f)
            except json.JSONDecodeError:
                return []
    return []


def save_submissions(submissions):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(submissions, f, ensure_ascii=False, indent=2)


def validate_email(email):
    pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    return re.match(pattern, email) is not None


def validate_phone(phone):
    cleaned_phone = re.sub(r"[^\d+]", "", phone)
    return len(cleaned_phone) >= 8


@app.route("/api/submit-contact", methods=["POST"])
def submit_contact():
    try:
        data = request.get_json()

        required_fields = ["nome", "email", "telefone", "disponibilidade", "detalhes"]
        for field in required_fields:
            if field not in data or not str(data[field]).strip():
                return (
                    jsonify(
                        {"success": False, "message": f"O campo {field} é obrigatório."}
                    ),
                    400,
                )

        if not validate_email(data["email"]):
            return (
                jsonify(
                    {"success": False, "message": "Por favor, insira um email válido."}
                ),
                400,
            )

        if not validate_phone(data["telefone"]):
            return (
                jsonify(
                    {
                        "success": False,
                        "message": "Por favor, insira um número de telefone válido.",
                    }
                ),
                400,
            )

        submission = {
            "id": datetime.now().strftime("%Y%m%d%H%M%S"),
            "timestamp": datetime.now().isoformat(),
            "nome": data["nome"].strip(),
            "email": data["email"].strip().lower(),
            "telefone": data["telefone"].strip(),
            "disponibilidade": data["disponibilidade"],
            "detalhes": data["detalhes"].strip(),
        }

        submissions = load_submissions()
        submissions.append(submission)
        save_submissions(submissions)

        return jsonify(
            {
                "success": True,
                "message": "Mensagem enviada com sucesso! Entrarei em contato em breve.",
            }
        )

    except Exception as e:
        return jsonify({"success": False, "message": "Erro interno do servidor."}), 500


if __name__ == "__main__":
    if not os.path.exists(DATA_FILE):
        save_submissions([])

    print("🚀 Servidor backend iniciado na porta 5000")
    app.run(debug=True, host="0.0.0.0", port=5000)
