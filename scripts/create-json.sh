#!/bin/bash

# Parse command line arguments
NAME=""
TITLE=""
DEPENDENCIES=""

# Parse named arguments
for arg in "$@"; do
  case $arg in
    --name=*)
      NAME="${arg#*=}"
      ;;
    --title=*)
      TITLE="${arg#*=}"
      ;;
    --dependencies=*)
      DEPENDENCIES="${arg#*=}"
      ;;
    *)
      # Unknown option
      ;;
  esac
done

# Check if name is provided
if [ -z "$NAME" ]; then
  echo "Error: --name parameter is required"
  exit 1
fi

# If title is not provided, use capitalized name
if [ -z "$TITLE" ]; then
  TITLE="Simple ${NAME^}"
fi

# Source file path
SOURCE_PATH="src/content/${NAME}.tsx"

# Check if source file exists
if [ ! -f "$SOURCE_PATH" ]; then
  echo "Error: Source file $SOURCE_PATH not found"
  exit 1
fi

# Create public/c directory if it doesn't exist
mkdir -p public/c

# Read the file content
FILE_CONTENT=$(cat "$SOURCE_PATH")

# Escape special characters for JSON
FILE_CONTENT_ESCAPED=$(echo "$FILE_CONTENT" | sed ':a;N;$!ba;s/\n/\\n/g' | sed 's/"/\\"/g' | sed 's/\t/\\t/g' | sed 's/\r/\\r/g')

# Create dependencies array for JSON
DEPS_JSON="[]"
if [ ! -z "$DEPENDENCIES" ]; then
  # Convert comma-separated list to JSON array
  DEPS_JSON="[$(echo "$DEPENDENCIES" | sed 's/,/","/g' | sed 's/^/"/' | sed 's/$/"/')]"
fi

# Create JSON content
JSON_CONTENT="{
  \"name\": \"$NAME\",
  \"type\": \"registry:ui\",
  \"registryDependencies\": [],
  \"title\": \"$TITLE\",
  \"author\": \"Harshit Pant\",
  \"description\": \"A shadcn/ui based $NAME but it's simple\",
  \"dependencies\": $DEPS_JSON,
  \"devDependencies\": [],
  \"tailwind\": {},
  \"cssVars\": {
    \"light\": {},
    \"dark\": {}
  },
  \"files\": [
    {
      \"path\": \"$NAME.tsx\",
      \"content\": \"$FILE_CONTENT_ESCAPED\",
      \"type\": \"registry:ui\"
    }
  ]
}"

# Write to output file
OUTPUT_PATH="public/c/${NAME}.json"
echo "$JSON_CONTENT" > "$OUTPUT_PATH"

echo "Successfully created $OUTPUT_PATH"