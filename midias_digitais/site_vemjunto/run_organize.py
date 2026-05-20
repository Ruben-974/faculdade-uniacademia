#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Temporary script to run organize_final.py and capture output"""

import subprocess
import sys

script_path = r'c:\Users\Rúben Israel\Documents\GitHub\faculdade-uniacademia\midias_digitais\site_vemjunto\organize_final.py'

try:
    result = subprocess.run([sys.executable, script_path], capture_output=True, text=True, timeout=60)
    print(result.stdout)
    if result.stderr:
        print("STDERR:", result.stderr)
    sys.exit(result.returncode)
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
