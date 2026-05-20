#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Organize website files into structured folders"""

import os
import shutil
from pathlib import Path
import re

base_dir = r'c:\Users\Rúben Israel\Documents\GitHub\faculdade-uniacademia\midias_digitais\site_vemjunto'

# Step 1: Create folder structure
print("Step 1: Creating folder structure...")
folders = ['css', 'js', 'imagens', 'analizar']
for folder in folders:
    folder_path = os.path.join(base_dir, folder)
    os.makedirs(folder_path, exist_ok=True)
    print(f'  Created: {folder}/')

# Step 2: Identify and organize files
print("\nStep 2: Identifying files...")
html_files = []
img_files = []
js_files = []
ps1_files = []
other_files = []

for file in os.listdir(base_dir):
    file_path = os.path.join(base_dir, file)
    if os.path.isfile(file_path):
        if file.endswith('.html'):
            html_files.append(file)
        elif file.endswith(('.png', '.jpg', '.jpeg', '.gif')):
            img_files.append(file)
        elif file.endswith('.js'):
            js_files.append(file)
        elif file.endswith('.ps1'):
            ps1_files.append(file)
        elif file not in ['organize_files.py', 'DESIGN.md', 'melhorias.txt']:
            other_files.append(file)

print(f"  HTML files: {len(html_files)}")
print(f"  Image files: {len(img_files)}")
print(f"  JS files: {len(js_files)}")
print(f"  PowerShell scripts: {len(ps1_files)}")

# Step 3: Move files
print("\nStep 3: Moving files...")

# Move HTML files
html_dir = os.path.join(base_dir, 'html')
for file in html_files:
    src = os.path.join(base_dir, file)
    dst = os.path.join(html_dir, file)
    if file != 'index.html':  # Keep root index.html
        try:
            shutil.move(src, dst)
            print(f"  Moved: {file} -> html/")
        except Exception as e:
            print(f"  Error moving {file}: {e}")

# Move JS files
js_dir = os.path.join(base_dir, 'js')
for file in js_files:
    src = os.path.join(base_dir, file)
    dst = os.path.join(js_dir, file)
    try:
        shutil.move(src, dst)
        print(f"  Moved: {file} -> js/")
    except Exception as e:
        print(f"  Error moving {file}: {e}")

# Move images from root and imgs folder
imagens_dir = os.path.join(base_dir, 'imagens')
for file in img_files:
    src = os.path.join(base_dir, file)
    dst = os.path.join(imagens_dir, file)
    try:
        shutil.move(src, dst)
        print(f"  Moved: {file} -> imagens/")
    except Exception as e:
        print(f"  Error moving {file}: {e}")

# Move images from imgs folder
imgs_folder = os.path.join(base_dir, 'imgs')
if os.path.exists(imgs_folder):
    for file in os.listdir(imgs_folder):
        src = os.path.join(imgs_folder, file)
        dst = os.path.join(imagens_dir, file)
        if os.path.isfile(src):
            try:
                shutil.move(src, dst)
                print(f"  Moved: imgs/{file} -> imagens/")
            except Exception as e:
                print(f"  Error moving {file}: {e}")
    # Remove empty imgs folder
    try:
        os.rmdir(imgs_folder)
        print("  Removed empty imgs/ folder")
    except:
        pass

# Move PowerShell and other scripts to analizar
analizar_dir = os.path.join(base_dir, 'analizar')
for file in ps1_files:
    src = os.path.join(base_dir, file)
    dst = os.path.join(analizar_dir, file)
    try:
        shutil.move(src, dst)
        print(f"  Moved: {file} -> analizar/")
    except Exception as e:
        print(f"  Error moving {file}: {e}")

print("\nStep 4: Updating file references in HTML...")
# Update links in HTML files
for html_file in os.listdir(html_dir):
    if html_file.endswith('.html'):
        file_path = os.path.join(html_dir, html_file)
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Update image paths
            content = re.sub(r'src=["\']([^"\']+\.(?:png|jpg|jpeg|gif))', r'src="../imagens/\1', content, flags=re.IGNORECASE)
            content = re.sub(r'src=["\']imgs/', r'src="../imagens/', content, flags=re.IGNORECASE)
            
            # Update CSS paths
            content = re.sub(r'href=["\']([^"\']+\.css)(?!.*?://)', r'href="../css/\1', content)
            
            # Update JS paths
            content = re.sub(r'src=["\']([^"\']+\.js)(?!.*?://)', r'src="../js/\1', content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  Updated links in: {html_file}")
        except Exception as e:
            print(f"  Error updating {html_file}: {e}")

print("\n✅ Organization complete!")
print("\nFolder structure:")
print("site_vemjunto/")
print("├── html/              (HTML pages)")
print("├── css/               (CSS stylesheets)")
print("├── js/                (JavaScript files)")
print("├── imagens/           (Images)")
print("├── analizar/          (Scripts and unused files)")
print("├── index.html         (Root index)")
print("├── DESIGN.md          (Design system)")
print("└── melhorias.txt      (Notes)")
