import os
import shutil
import re

base_dir = r'c:\Users\Rúben Israel\Documents\GitHub\faculdade-uniacademia\midias_digitais\site_vemjunto'

# Move PS1 files from html to analizar
html_dir = os.path.join(base_dir, 'html')
analizar_dir = os.path.join(base_dir, 'analizar')

print("Moving PS1 files...")
for f in ['execute_melhorias.ps1', 'apply_all_fixes.ps1', 'add_bottom_nav.ps1', 'link_pages.ps1',
          'fix_oferecer_carona_nav.ps1', 'fix_alignment.ps1', 'padroniza_sidenav.ps1', 'revert_sidenav.ps1']:
    src = os.path.join(html_dir, f)
    dst = os.path.join(analizar_dir, f)
    if os.path.exists(src):
        shutil.move(src, dst)
        print(f"  {f}")

# Move JS files from html to js
print("\nMoving JS files...")
js_dir = os.path.join(base_dir, 'js')
src = os.path.join(html_dir, 'link_pages.js')
dst = os.path.join(js_dir, 'link_pages.js')
if os.path.exists(src):
    shutil.move(src, dst)
    print(f"  link_pages.js")

# Update HTML references
print("\nUpdating HTML references...")
for f in os.listdir(html_dir):
    if f.endswith('.html'):
        fpath = os.path.join(html_dir, f)
        with open(fpath, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Update image paths
        content = re.sub(r'src=["\']imgs/', r'src="../imagens/', content, flags=re.IGNORECASE)
        
        # Update CSS paths
        content = re.sub(r'href=["\'](?!(?:https?:|\.\.\/|/|data:))([^"\']+\.css)', r'href="../css/\1', content)
        
        # Update JS paths
        content = re.sub(r'src=["\'](?!(?:https?:|\.\.\/|/|data:))([^"\']+\.js)', r'src="../js/\1', content)
        
        with open(fpath, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"  {f}")

print("\nDone!")
