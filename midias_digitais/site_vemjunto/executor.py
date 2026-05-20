#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Direct file organization without subprocess calls"""

import os
import shutil
import re
from pathlib import Path

def organize():
    base_dir = r'c:\Users\Rúben Israel\Documents\GitHub\faculdade-uniacademia\midias_digitais\site_vemjunto'
    
    print("=" * 60)
    print("ORGANIZING WEBSITE FILES")
    print("=" * 60)
    
    # Step 1: Move PowerShell scripts from html/ to analizar/
    print("\nStep 1: Moving PowerShell scripts from html/ to analizar/...")
    html_dir = os.path.join(base_dir, 'html')
    analizar_dir = os.path.join(base_dir, 'analizar')
    
    ps1_count = 0
    for file in os.listdir(html_dir):
        if file.endswith('.ps1'):
            src = os.path.join(html_dir, file)
            dst = os.path.join(analizar_dir, file)
            try:
                if os.path.exists(dst):
                    os.remove(dst)
                shutil.move(src, dst)
                print(f"  ✓ Moved: {file}")
                ps1_count += 1
            except Exception as e:
                print(f"  ✗ Error: {file} - {e}")
    print(f"  Total moved: {ps1_count} files")
    
    # Step 2: Move JS files from html/ to js/
    print("\nStep 2: Moving JS files from html/ to js/...")
    js_dir = os.path.join(base_dir, 'js')
    
    js_count = 0
    for file in os.listdir(html_dir):
        if file.endswith('.js'):
            src = os.path.join(html_dir, file)
            dst = os.path.join(js_dir, file)
            try:
                if os.path.exists(dst):
                    os.remove(dst)
                shutil.move(src, dst)
                print(f"  ✓ Moved: {file}")
                js_count += 1
            except Exception as e:
                print(f"  ✗ Error: {file} - {e}")
    if js_count == 0:
        print("  No JS files to move")
    
    # Step 3: Update HTML file references
    print("\nStep 3: Updating HTML file references...")
    
    update_count = 0
    for html_file in os.listdir(html_dir):
        if html_file.endswith('.html'):
            file_path = os.path.join(html_dir, html_file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                original_content = content
                
                # Update image paths
                # Replace "imgs/" with "../imagens/"
                content = re.sub(r'src=["\']imgs/', r'src="../imagens/', content, flags=re.IGNORECASE)
                
                # Update CSS paths - add "../css/" if not already present and not external
                content = re.sub(r'href=["\'](?!(?:https?:|\.\.\/|/|data:))([^"\']+\.css)', r'href="../css/\1', content)
                
                # Update JS paths - add "../js/" if not already present and not external  
                content = re.sub(r'src=["\'](?!(?:https?:|\.\.\/|/|data:))([^"\']+\.js)', r'src="../js/\1', content)
                
                if content != original_content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"  ✓ Updated: {html_file}")
                    update_count += 1
            except Exception as e:
                print(f"  ✗ Error updating {html_file}: {e}")
    
    print(f"  Total updated: {update_count} files")
    
    # Step 4: Check for imgs/ folder and remove if empty
    print("\nStep 4: Checking for old imgs/ folder...")
    imgs_folder = os.path.join(base_dir, 'imgs')
    if os.path.exists(imgs_folder):
        try:
            # Check if empty
            if not os.listdir(imgs_folder):
                os.rmdir(imgs_folder)
                print("  ✓ Removed empty imgs/ folder")
            else:
                print(f"  ⚠ imgs/ folder still contains files - cannot remove")
        except Exception as e:
            print(f"  ✗ Error: {e}")
    else:
        print("  ✓ imgs/ folder already removed")
    
    # Step 5: Final summary
    print("\n" + "=" * 60)
    print("✅ ORGANIZATION COMPLETE!")
    print("=" * 60)
    print("\nFinal folder structure:")
    print("site_vemjunto/")
    print("├── html/              (HTML pages)")
    print("├── css/               (CSS stylesheets)")
    print("├── js/                (JavaScript files)")
    print("├── imagens/           (Images)")
    print("├── analizar/          (PowerShell scripts & analysis)")
    print("├── index.html         (Root index)")
    print("├── DESIGN.md          (Design documentation)")
    print("└── melhorias.txt      (Improvement notes)")

if __name__ == '__main__':
    organize()
