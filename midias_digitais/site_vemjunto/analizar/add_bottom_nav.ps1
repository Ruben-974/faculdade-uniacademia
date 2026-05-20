$dir = "."
$files = Get-ChildItem "$dir\*.html"

$bottomNavTemplateRaw = @"
<!-- BottomNavBar (Mobile Only) -->
<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-surface shadow-2xl flex justify-around items-center py-sm z-50 border-t border-outline-variant/30">
<a class="flex flex-col items-center gap-1 {VIAGEM_CLASS}" href="minhas_viagens_vemjunto_mobility.html">
<span class="material-symbols-outlined" data-icon="directions_car">directions_car</span>
<span class="text-caption {VIAGEM_FONT}">Viagem</span>
</a>
<a class="flex flex-col items-center gap-1 {EXPLORAR_CLASS}" href="index.html">
<span class="material-symbols-outlined" data-icon="explore">explore</span>
<span class="text-caption {EXPLORAR_FONT}">Explorar</span>
</a>
<a class="flex flex-col items-center gap-1 {CHAT_CLASS}" href="chat_com_localiza_o_ao_vivo_vemjunto.html">
<span class="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
<span class="text-caption {CHAT_FONT}">Chat</span>
</a>
<a class="flex flex-col items-center gap-1 {PERFIL_CLASS}" href="perfil_do_usu_rio_vemjunto.html">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="text-caption {PERFIL_FONT}">Perfil</span>
</a>
</nav>
"@

foreach ($file in $files) {
    $content = [IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)

    # Remove existing BottomNav and padding spacer
    $content = $content -replace '(?s)<!-- BottomNavBar \(Mobile Only\).*?</nav>\s*', ''
    $content = $content -replace '(?s)<div class="pb-24 md:pb-0"></div>\s*', ''

    $viagemClass = "text-on-surface-variant hover:text-primary transition-colors"
    $viagemFont = ""
    $explorarClass = "text-on-surface-variant hover:text-primary transition-colors"
    $explorarFont = ""
    $chatClass = "text-on-surface-variant hover:text-primary transition-colors"
    $chatFont = ""
    $perfilClass = "text-on-surface-variant hover:text-primary transition-colors"
    $perfilFont = ""

    $fileName = $file.Name

    if ($fileName -match "minhas_viagens") {
        $viagemClass = "text-primary"
        $viagemFont = "font-bold"
    } elseif ($fileName -match "index.html" -or $fileName -match "resultados_de_busca") {
        $explorarClass = "text-primary"
        $explorarFont = "font-bold"
    } elseif ($fileName -match "chat" -or $fileName -match "acompanhamento") {
        $chatClass = "text-primary"
        $chatFont = "font-bold"
    } elseif ($fileName -match "perfil" -or $fileName -match "configura_es") {
        $perfilClass = "text-primary"
        $perfilFont = "font-bold"
    }

    $navInjected = $bottomNavTemplateRaw -replace '\{VIAGEM_CLASS\}', $viagemClass `
                                         -replace '\{VIAGEM_FONT\}', $viagemFont `
                                         -replace '\{EXPLORAR_CLASS\}', $explorarClass `
                                         -replace '\{EXPLORAR_FONT\}', $explorarFont `
                                         -replace '\{CHAT_CLASS\}', $chatClass `
                                         -replace '\{CHAT_FONT\}', $chatFont `
                                         -replace '\{PERFIL_CLASS\}', $perfilClass `
                                         -replace '\{PERFIL_FONT\}', $perfilFont

    # Find the closing </body> tag
    # Insert BottomNav and a spacer div before </body>
    if ($content -match '(?s)(<script>\s*function toggleMobileMenu.*?</body>)') {
        # We have the toggleMobileMenu script, put nav before it
        $content = $content -replace '(?s)(<script>\s*function toggleMobileMenu.*?</body>)', "$navInjected`n<div class=`"pb-24 md:pb-0`"></div>`n`$1"
    } else {
        $content = $content -replace '</body>', "$navInjected`n<div class=`"pb-24 md:pb-0`"></div>`n</body>"
    }

    [IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
}

Write-Output "BottomNavBar injetado em todas as paginas."
