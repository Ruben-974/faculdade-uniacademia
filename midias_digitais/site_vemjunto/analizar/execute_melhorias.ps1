$dir = "."
$files = Get-ChildItem "$dir\*.html"

$bottomNavTemplateRaw = @"
<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-surface shadow-2xl flex justify-around items-center py-sm z-50 border-t border-outline-variant/30">
<a class="flex flex-col items-center gap-1 %%NAV_VIAGEM%%" href="minhas_viagens_vemjunto_mobility.html">
<span class="material-symbols-outlined" data-icon="directions_car">directions_car</span>
<span class="text-caption %%BOLD_VIAGEM%%">Viagem</span>
</a>
<a class="flex flex-col items-center gap-1 %%NAV_EXPLORAR%% cursor-pointer" href="resultados_de_busca_organizado_vemjunto_mobility.html">
<span class="material-symbols-outlined" data-icon="explore">explore</span>
<span class="text-caption %%BOLD_EXPLORAR%%">Explorar</span>
</a>
<a class="flex flex-col items-center gap-1 %%NAV_CHAT%%" href="chat_com_localiza_o_ao_vivo_vemjunto.html">
<span class="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
<span class="text-caption %%BOLD_CHAT%%">Chat</span>
</a>
<a class="flex flex-col items-center gap-1 %%NAV_PERFIL%% cursor-pointer" href="perfil_do_usu_rio_vemjunto.html">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="text-caption %%BOLD_PERFIL%%">Perfil</span>
</a>
</nav>
"@

foreach ($file in $files) {
    $content = [IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $fileName = $file.Name

    # 1. Replace data-alt with alt
    $content = $content -replace 'data-alt="', 'alt="'

    # 2. Add aria-labels to header icons
    # Notifications button
    $content = $content -replace '<button class="text-on-surface-variant hover:text-primary transition-colors relative flex items-center p-2">', '<button class="text-on-surface-variant hover:text-primary transition-colors relative flex items-center p-2" aria-label="Notificações">'
    # Profile button
    $content = $content -replace '<button class="text-on-surface-variant hover:text-primary transition-colors flex items-center p-2">', '<button class="text-on-surface-variant hover:text-primary transition-colors flex items-center p-2" aria-label="Menu de Perfil">'

    # 3. Standardize Bottom Navigation
    if ($content -match '(?s)<nav class="md:hidden.*?</nav>') {
        $selectedText = "text-primary"
        $unselectedText = "text-on-surface-variant"
        
        $selectedBold = "font-bold"
        $unselectedBold = ""

        $cViagem = if ($fileName -eq 'minhas_viagens_vemjunto_mobility.html') { $selectedText } else { $unselectedText }
        $bViagem = if ($fileName -eq 'minhas_viagens_vemjunto_mobility.html') { $selectedBold } else { $unselectedBold }

        $cExplorar = if ($fileName -match 'busca|index') { $selectedText } else { $unselectedText }
        $bExplorar = if ($fileName -match 'busca|index') { $selectedBold } else { $unselectedBold }

        $cChat = if ($fileName -eq 'chat_com_localiza_o_ao_vivo_vemjunto.html') { $selectedText } else { $unselectedText }
        $bChat = if ($fileName -eq 'chat_com_localiza_o_ao_vivo_vemjunto.html') { $selectedBold } else { $unselectedBold }

        $cPerfil = if ($fileName -match 'perfil|configura') { $selectedText } else { $unselectedText }
        $bPerfil = if ($fileName -match 'perfil|configura') { $selectedBold } else { $unselectedBold }

        $t = $bottomNavTemplateRaw.Replace('%%NAV_VIAGEM%%', $cViagem).Replace('%%BOLD_VIAGEM%%', $bViagem)
        $t = $t.Replace('%%NAV_EXPLORAR%%', $cExplorar).Replace('%%BOLD_EXPLORAR%%', $bExplorar)
        $t = $t.Replace('%%NAV_CHAT%%', $cChat).Replace('%%BOLD_CHAT%%', $bChat)
        $t = $t.Replace('%%NAV_PERFIL%%', $cPerfil).Replace('%%BOLD_PERFIL%%', $bPerfil)

        $content = [regex]::Replace($content, '(?s)<nav class="md:hidden.*?</nav>', $t)
    }

    [IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
}

Write-Output "Melhorias aplicadas!"
