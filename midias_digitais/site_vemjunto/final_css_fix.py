#!/usr/bin/env python3
"""Final comprehensive CSS replacement - handles all ampersand variations."""

from pathlib import Path
import re

HTML_DIR = Path("html")

def update_remaining_files():
    """Update all remaining HTML files with comprehensive regex patterns."""
    html_files = list(HTML_DIR.glob("*.html"))
    print(f"Processing {len(html_files)} HTML files...")
    
    updated_count = 0
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            changes_made = False
            
            # Pattern 1: Replace Plus Jakarta Sans (handles both & and &amp;)
            # More flexible pattern that matches the entire link tag
            pattern1 = r'<link\s+href="https://fonts\.googleapis\.com/css2\?family=Plus\+Jakarta\+Sans[^"]*"\s+rel="stylesheet">'
            if re.search(pattern1, content):
                content = re.sub(pattern1, '<link href="../css/fonts.css" rel="stylesheet">', content)
                changes_made = True
                print(f"  Replaced Plus Jakarta Sans in {html_file.name}")
            
            # Pattern 2: Replace Material Symbols links (handles both & and &amp;, and variations)
            pattern2 = r'<link\s+href="https://fonts\.googleapis\.com/css2\?family=Material\+Symbols[^"]*"\s+rel="stylesheet">'
            count = len(re.findall(pattern2, content))
            if count > 0:
                content = re.sub(pattern2, '', content)
                changes_made = True
                print(f"  Removed {count} Material Symbols link(s) from {html_file.name}")
            
            # Pattern 3: Replace Tailwind CDN script
            pattern3 = r'<script\s+src="https://cdn\.tailwindcss\.com[^"]*"></script>'
            if re.search(pattern3, content):
                content = re.sub(pattern3, '<link href="../css/tailwind.css" rel="stylesheet">', content)
                changes_made = True
                print(f"  Replaced Tailwind CDN in {html_file.name}")
            
            if changes_made:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                updated_count += 1
        
        except Exception as e:
            print(f"[ERROR] Error processing {html_file.name}: {e}")
    
    return updated_count

def main():
    """Main function."""
    print("=" * 60)
    print("Final CSS Replacement - Comprehensive Scan")
    print("=" * 60)
    print()
    
    updated = update_remaining_files()
    
    print()
    print("=" * 60)
    print(f"[COMPLETE] Updated {updated} files")
    print("=" * 60)

if __name__ == "__main__":
    main()
