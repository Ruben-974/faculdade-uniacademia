#!/usr/bin/env python3
"""Download external CSS files and consolidate them locally - Enhanced version."""

import os
import requests
from pathlib import Path
import re

# Base directory
BASE_DIR = Path(__file__).parent
CSS_DIR = BASE_DIR / "css"
HTML_DIR = BASE_DIR / "html"

# Create css directory if it doesn't exist
CSS_DIR.mkdir(exist_ok=True)

# URLs to download
TAILWIND_URL = "https://cdn.tailwindcss.com?plugins=forms,container-queries"
PLUS_JAKARTA_URL = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
MATERIAL_SYMBOLS_URL = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"

def download_file(url, filename):
    """Download a file from URL and save it."""
    try:
        print(f"Downloading {filename} from {url}...")
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        filepath = CSS_DIR / filename
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(response.text)
        
        print(f"[OK] Downloaded {filename} ({len(response.text)} bytes)")
        return True
    except Exception as e:
        print(f"[ERROR] Error downloading {filename}: {e}")
        return False

def create_fonts_css():
    """Create a consolidated fonts.css file."""
    fonts_css_path = CSS_DIR / "fonts.css"
    
    content = """/* Consolidated Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

:root {
  --font-plus-jakarta: 'Plus Jakarta Sans', sans-serif;
  --font-material-symbols: 'Material Symbols Outlined';
}

body {
  font-family: var(--font-plus-jakarta);
}

.material-symbols-outlined {
  font-family: var(--font-material-symbols);
}
"""
    
    try:
        with open(fonts_css_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"[OK] Created fonts.css")
        return True
    except Exception as e:
        print(f"[ERROR] Error creating fonts.css: {e}")
        return False

def update_html_files():
    """Update HTML files to use local CSS."""
    html_files = list(HTML_DIR.glob("*.html"))
    print(f"\nUpdating {len(html_files)} HTML files...")
    
    updated_count = 0
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Replace Tailwind CDN script with local CSS link (handle both cases)
            content = re.sub(
                r'<script\s+src="https://cdn\.tailwindcss\.com[^"]*"></script>',
                '<link href="../css/tailwind.css" rel="stylesheet">',
                content
            )
            
            # Replace Google Fonts Plus Jakarta Sans (with various ampersand encodings)
            # Handles both &amp; (HTML entity) and & (literal ampersand)
            content = re.sub(
                r'<link\s+href="https://fonts\.googleapis\.com/css2\?family=Plus\+Jakarta\+Sans[^"]*display=swap"[^>]*rel="stylesheet">',
                '<link href="../css/fonts.css" rel="stylesheet">',
                content,
                flags=re.IGNORECASE
            )
            
            # Remove Material Symbols font link (might be on same line or multiple lines)
            # This handles various formats with &amp; or & and different line breaks
            content = re.sub(
                r'<link[^>]*\n?\s*href="https://fonts\.googleapis\.com/css2\?family=Material\+Symbols[^"]*display=swap"[^>]*rel="stylesheet">',
                '',
                content,
                flags=re.IGNORECASE
            )
            
            # Also handle the reverse: href before rel
            content = re.sub(
                r'<link\s+href="https://fonts\.googleapis\.com/css2\?family=Material\+Symbols[^"]*display=swap"[^>]*rel="stylesheet">',
                '',
                content,
                flags=re.IGNORECASE
            )
            
            if content != original_content:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"[OK] Updated {html_file.name}")
                updated_count += 1
            else:
                print(f"  {html_file.name} (no changes needed)")
        
        except Exception as e:
            print(f"[ERROR] Error updating {html_file.name}: {e}")
    
    return updated_count

def main():
    """Main function."""
    print("=" * 60)
    print("CSS Extraction and Localization Tool (Enhanced)")
    print("=" * 60)
    
    # Download CSS files
    print("\n[1] Downloading CSS files...")
    print("-" * 60)
    
    download_file(TAILWIND_URL, "tailwind.css")
    download_file(PLUS_JAKARTA_URL, "plus-jakarta-sans.css")
    download_file(MATERIAL_SYMBOLS_URL, "material-symbols.css")
    
    # Create consolidated fonts CSS
    print("\n[2] Creating consolidated fonts.css...")
    print("-" * 60)
    create_fonts_css()
    
    # Update HTML files
    print("\n[3] Updating HTML files...")
    print("-" * 60)
    updated = update_html_files()
    
    print("\n" + "=" * 60)
    print("[COMPLETE] Process completed successfully!")
    print("=" * 60)
    print("\nSummary:")
    print("- Tailwind CSS downloaded to css/tailwind.css")
    print("- Google Fonts CSS downloaded to css/")
    print("- fonts.css created as consolidated font imports")
    print(f"- {updated} HTML files updated to use local CSS")

if __name__ == "__main__":
    main()
