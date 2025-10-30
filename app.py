from fastapi import FastAPI
from fastapi.responses import FileResponse
import os

app = FastAPI()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FILES_DIR = os.path.join(BASE_DIR, "files")  # chemin absolu vers le dossier files

@app.get("/")
def root():
    return {"message": "API ESP32 prête à servir des fichiers 🎉"}

@app.get("/download/{file_path:path}")
def download_file(file_path: str):
    full_path = os.path.join(FILES_DIR, file_path)
    if os.path.exists(full_path):
        return FileResponse(full_path, filename=os.path.basename(full_path), media_type="application/octet-stream")
    return {"error": "Fichier introuvable"}
