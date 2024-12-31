#!/bin/bash

# Directorio donde están los posts
POSTS_DIR="./public/posts"

# Archivo de salida
OUTPUT_FILE="./public/writeups-names.json"

# Verificar si el directorio existe
if [ ! -d "$POSTS_DIR" ]; then
  echo "El directorio $POSTS_DIR no existe. Por favor, crea el directorio y coloca los archivos."
  exit 1
fi

# Iniciar el JSON
echo "[" > "$OUTPUT_FILE"

# Contador para manejar la coma final
count=0

# Leer los nombres de los archivos y convertirlos a formato JSON
for file in "$POSTS_DIR"/*; do
  if [ -f "$file" ]; then
    # Obtener el nombre base del archivo sin extensión
    filename=$(basename "$file")
    title="${filename%.*}"
    slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -d '[:punct:]')

    # Agregar una coma antes de cada entrada excepto la primera
    if [ $count -ne 0 ]; then
      echo "," >> "$OUTPUT_FILE"
    fi

    # Agregar el objeto JSON
    echo "  { \"title\": \"$title\", \"slug\": \"$slug\" }" >> "$OUTPUT_FILE"
    count=$((count + 1))
  fi
done

# Cerrar el JSON
echo "]" >> "$OUTPUT_FILE"

echo "Archivo JSON generado: $OUTPUT_FILE"
