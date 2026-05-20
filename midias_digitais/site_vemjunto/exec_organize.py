import sys
sys.path.insert(0, r'c:\Users\Rúben Israel\Documents\GitHub\faculdade-uniacademia\midias_digitais\site_vemjunto')

with open(r'c:\Users\Rúben Israel\Documents\GitHub\faculdade-uniacademia\midias_digitais\site_vemjunto\organize_final.py', 'r', encoding='utf-8') as f:
    code = f.read()
    exec(code)
