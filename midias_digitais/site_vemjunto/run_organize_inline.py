import os
import shutil
from pathlib import Path
import re
import sys

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
        elif file not in ['organize_files.py', 'organize_final.py', 'DESIGN.md', 'melhorias.txt', 'run_organize.py', 'execute_organize.py', 'final_execute.py']:
            other_files.append(file)

print(f"  HTML files in root: {len(html_files)}")
print(f"  Image files in root: {len(img_files)}")
print(f"  JS files in root: {len(js_files)}")
print(f"  PowerShell scripts in root: {len(ps1_files)}")

# Step 3: Move HTML files (except index.html)
print("\nStep 3: Moving HTML files...")
html_dir = os.path.join(base_dir, 'html')
for file in html_files:
    src = os.path.join(base_dir, file)
    dst = os.path.join(html_dir, file)
    if file != 'index.html':
        try:
            if os.path.exists(dst):
                os.remove(dst)
            shutil.move(src, dst)
            print(f"  Moved: {file} -> html/")
        except Exception as e:
            print(f"  Error moving {file}: {e}")

# Step 4: Move JS files from root to js folder
print("\nStep 4: Moving JS files...")
js_dir = os.path.join(base_dir, 'js')
for file in js_files:
    src = os.path.join(base_dir, file)
    dst = os.path.join(js_dir, file)
    try:
        if os.path.exists(dst):
            os.remove(dst)
        shutil.move(src, dst)
        print(f"  Moved: {file} -> js/")
    except Exception as e:
        print(f"  Error moving {file}: {e}")

# Step 5: Move images from root
print("\nStep 5: Moving images...")
imagens_dir = os.path.join(base_dir, 'imagens')
for file in img_files:
    src = os.path.join(base_dir, file)
    dst = os.path.join(imagens_dir, file)
    try:
        if os.path.exists(dst):
            os.remove(dst)
        shutil.move(src, dst)
        print(f"  Moved: {file} -> imagens/")
    except Exception as e:
        print(f"  Error moving {file}: {e}")

# Step 6: Move images from imgs folder
print("\nStep 6: Moving images from imgs/ folder...")
imgs_folder = os.path.join(base_dir, 'imgs')
if os.path.exists(imgs_folder):
    for file in os.listdir(imgs_folder):
        src = os.path.join(imgs_folder, file)
        dst = os.path.join(imagens_dir, file)
        if os.path.isfile(src):
            try:
                if os.path.exists(dst):
                    os.remove(dst)
                shutil.move(src, dst)
                print(f"  Moved: imgs/{file} -> imagens/")
            except Exception as e:
                print(f"  Error moving {file}: {e}")
    # Remove empty imgs folder
    try:
        os.rmdir(imgs_folder)
        print("  Removed empty imgs/ folder")
    except:
        print("  Note: imgs/ folder could not be removed (may not be empty)")

# Step 7: Move PowerShell scripts from html folder to analizar
print("\nStep 7: Moving PowerShell scripts from html/...")
analizar_dir = os.path.join(base_dir, 'analizar')
if os.path.exists(html_dir):
    for file in os.listdir(html_dir):
        if file.endswith('.ps1'):
            src = os.path.join(html_dir, file)
            dst = os.path.join(analizar_dir, file)
            try:
                shutil.move(src, dst)
                print(f"  Moved: html/{file} -> analizar/")
            except Exception as e:
                print(f"  Error moving {file}: {e}")

# Step 8: Move PowerShell scripts from root
print("\nStep 8: Moving PowerShell scripts from root...")
for file in ps1_files:
    src = os.path.join(base_dir, file)
    dst = os.path.join(analizar_dir, file)
    try:
        shutil.move(src, dst)
        print(f"  Moved: {file} -> analizar/")
    except Exception as e:
        print(f"  Error moving {file}: {e}")

# Step 9: Update links in HTML files
print("\nStep 9: Updating file references in HTML...")
for html_file in os.listdir(html_dir):
    if html_file.endswith('.html'):
        file_path = os.path.join(html_dir, html_file)
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Update image paths - handle various formats
            # Replace imgs/ with ../imagens/
            content = re.sub(r'src=["\']imgs/', r'src="../imagens/', content, flags=re.IGNORECASE)
            # Replace image files referenced without folder prefix
            content = re.sub(r'src=["\']([^"\']+\.(?:png|jpg|jpeg|gif))', 
                           lambda m: f'src="../imagens/{m.group(1)}' if not '../' in m.group(1) and not 'http' in m.group(1) else m.group(0), 
                           content, flags=re.IGNORECASE)
            
            # Update CSS paths - add ../css/ if not already present and not external
            content = re.sub(r'href=["\'](?!(?:https?:|\.\.\/|/))([^"\']+\.css)', r'href="../css/\1', content)
            
            # Update JS paths - add ../js/ if not already present and not external
            content = re.sub(r'src=["\'](?!(?:https?:|\.\.\/|/))([^"\']+\.js)', r'src="../js/\1', content)
            
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"  Updated links in: {html_file}")
        except Exception as e:
            print(f"  Error updating {html_file}: {e}")

print("\n✅ Organization complete!")
print("\nFinal folder structure:")
print("site_vemjunto/")
print("├── html/              (HTML pages)")
print("├── css/               (CSS stylesheets)")
print("├── js/                (JavaScript files)")
print("├── imagens/           (Images)")
print("├── analizar/          (PowerShell scripts)")
print("├── index.html         (Root index)")
print("├── DESIGN.md          (Design system)")
print("└── melhorias.txt      (Notes)")
