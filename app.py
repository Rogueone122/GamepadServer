from fastapi import FastAPI
from fastapi.responses import FileResponse
import os

app = FastAPI()

# Dossier où tu ranges tes fichiers à télécharger
FILES_DIR = "bin"

@app.get("/")
def root():
    return {"message": "API ESP32 prête à servir des fichiers 🎉"}

# Exemple : http://ton-service.onrender.com/download/monfichier.txt
@app.get("/download/{filename}")
def download_file(filename: str):
    file_path = os.path.join(FILES_DIR, filename)
    if os.path.exists(file_path):
        return FileResponse(path=file_path, filename=filename, media_type="application/octet-stream")
    return {"error": "Fichier introuvable"}
