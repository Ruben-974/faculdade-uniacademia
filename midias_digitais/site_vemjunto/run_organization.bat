@echo off
REM Move PowerShell scripts from html to analizar
echo Moving PowerShell scripts...
move "html\execute_melhorias.ps1" "analizar\" > nul 2>&1
move "html\apply_all_fixes.ps1" "analizar\" > nul 2>&1
move "html\add_bottom_nav.ps1" "analizar\" > nul 2>&1
move "html\link_pages.ps1" "analizar\" > nul 2>&1
move "html\fix_oferecer_carona_nav.ps1" "analizar\" > nul 2>&1
move "html\fix_alignment.ps1" "analizar\" > nul 2>&1
move "html\padroniza_sidenav.ps1" "analizar\" > nul 2>&1
move "html\revert_sidenav.ps1" "analizar\" > nul 2>&1
echo Moved PS1 files: DONE

REM Move JS files from html to js
echo Moving JavaScript files...
move "html\link_pages.js" "js\" > nul 2>&1
echo Moved JS files: DONE

python organize_final.py
echo.
echo Done!
