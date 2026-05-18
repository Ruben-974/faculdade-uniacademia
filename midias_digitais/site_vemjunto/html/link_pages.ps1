$dir = "."
$files = Get-ChildItem "$dir\*.html"

$selectedClass = "font-display text-body-md text-primary border-b-2 border-primary pb-1 transition-colors"
$unselectedClass = "font-display text-body-md text-on-surface-variant hover:text-primary transition-colors"

$sideNavTemplateRaw = @"
<aside class="hidden md:flex flex-col gap-md p-md w-64 sticky top-[72px] h-[calc(100vh-72px)] bg-surface-container-low border-r border-outline-variant">
<div class="mb-lg">
<h3 class="text-h2 font-display font-bold text-primary">Meu Painel</h3>
<p class="text-on-surface-variant font-caption">Bem-vindo de volta!</p>
</div>
<nav class="flex flex-col gap-xs">
<a class="%%NAV_MINHAS%% rounded-xl px-4 py-3 flex items-center gap-3 transition-all" href="minhas_viagens_vemjunto_mobility.html">
<span class="material-symbols-outlined" data-icon="directions_car">directions_car</span>
<span class="font-display text-label-md">Minhas Viagens</span>
</a>
<a class="%%NAV_MENSAGENS%% rounded-xl px-4 py-3 flex items-center gap-3 transition-all" href="chat_com_localiza_o_ao_vivo_vemjunto.html">
<span class="material-symbols-outlined" data-icon="chat">chat</span>
<span class="font-display text-label-md">Mensagens</span>
</a>
<a class="%%NAV_CONFIG%% rounded-xl px-4 py-3 flex items-center gap-3 transition-all" href="configura_es_e_pagamento_vemjunto_mobility.html">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-display text-label-md">Configurações</span>
</a>
<a class="%%NAV_PERFIL%% rounded-xl px-4 py-3 flex items-center gap-3 transition-all" href="perfil_do_usu_rio_vemjunto.html">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="font-display text-label-md">Perfil</span>
</a>
<a class="text-on-surface-variant hover:bg-surface-variant rounded-xl px-4 py-3 flex items-center gap-3 transition-all" href="#">
<span class="material-symbols-outlined" data-icon="help">help</span>
<span class="font-display text-label-md">Ajuda</span>
</a>
</nav>
<a href="oferecer_carona_vemjunto_mobility_1.html" class="mt-auto bg-secondary text-on-secondary rounded-full py-4 px-6 font-display text-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md">
<span class="material-symbols-outlined" data-icon="add">add</span>
    Nova Carona
</a>
</aside>
"@

$evaluator = [System.Text.RegularExpressions.MatchEvaluator] {
    param([System.Text.RegularExpressions.Match]$match)
    $p1 = $match.Groups[1].Value
    $p2 = $match.Groups[2].Value
    $inner = $match.Groups[3].Value
    $text = $inner.ToLower()

    $target = $null
    if ($text -match 'buscar carona') { $target = 'index.html' }
    elseif ($text -match 'buscar|ver todas|explorar') { $target = 'resultados_de_busca_organizado_vemjunto_mobility.html' }
    elseif ($text -match 'ver detalhes|reservar') { $target = 'detalhes_da_viagem_com_seguran_a_vemjunto.html' }
    elseif ($text -match 'nova carona|oferecer') { $target = 'oferecer_carona_vemjunto_mobility_1.html' }
    elseif ($text -match 'perfil') { $target = 'perfil_do_usu_rio_vemjunto.html' }
    elseif ($text -match 'configuração|configurações') { $target = 'configura_es_e_pagamento_vemjunto_mobility.html' }
    elseif ($text -match 'mensagens|chat') { $target = 'chat_com_localiza_o_ao_vivo_vemjunto.html' }
    elseif ($text -match 'minhas viagens') { $target = 'minhas_viagens_vemjunto_mobility.html' }
    elseif ($text -match 'vem junto|vemjunto') { $target = 'index.html' }

    if ($target -ne $null -and $p1 -notmatch 'id="tailwind-config"') {
        return "<a$p1`href=""$target""$p2>$inner</a>"
    }
    return $match.Value
}

$btnEvaluator = [System.Text.RegularExpressions.MatchEvaluator] {
    param([System.Text.RegularExpressions.Match]$match)
    $p1 = $match.Groups[1].Value
    $inner = $match.Groups[2].Value
    $text = $inner.ToLower()

    $target = $null
    if ($text -match 'buscar carona') { $target = 'index.html' }
    elseif ($text -match 'buscar|ver todas|explorar') { $target = 'resultados_de_busca_organizado_vemjunto_mobility.html' }
    elseif ($text -match 'ver detalhes|reservar') { $target = 'detalhes_da_viagem_com_seguran_a_vemjunto.html' }
    elseif ($text -match 'nova carona|oferecer') { $target = 'oferecer_carona_vemjunto_mobility_1.html' }
    elseif ($text -match 'perfil') { $target = 'perfil_do_usu_rio_vemjunto.html' }
    elseif ($text -match 'configuração|configurações') { $target = 'configura_es_e_pagamento_vemjunto_mobility.html' }
    elseif ($text -match 'mensagens|chat') { $target = 'chat_com_localiza_o_ao_vivo_vemjunto.html' }
    elseif ($text -match 'vem junto|vemjunto') { $target = 'index.html' }

    if ($target -ne $null) {
        $newP1 = [regex]::Replace($p1, '(?i)onclick="[^"]*"', '')
        return "<a href=""$target""$newP1 style=""display: inline-block; text-align: center;"">$inner</a>"
    }
    return $match.Value
}

foreach ($file in $files) {
    $content = [IO.File]::ReadAllText($file.FullName)
    $fileName = $file.Name

    # 1. Evaluate general links first
    $content = [regex]::Replace($content, '(?s)<a([^>]*)href="[^"]*"([^>]*)>(.*?)</a>', $evaluator)
    $content = [regex]::Replace($content, '(?s)<button([^>]*)>(.*?)</button>', $btnEvaluator)

    # 2. dropdown replacements
    $content = $content -replace '(?s)<a href="[^"]*" class="flex items-center gap-sm px-md py-sm hover:bg-surface-container-low transition-colors">\s*<span class="material-symbols-outlined text-\[20px\] text-outline">person</span>\s*<span class="font-display text-body-md text-on-surface">Meu Perfil</span>\s*</a>', '<a href="perfil_do_usu_rio_vemjunto.html" class="flex items-center gap-sm px-md py-sm hover:bg-surface-container-low transition-colors"><span class="material-symbols-outlined text-[20px] text-outline">person</span><span class="font-display text-body-md text-on-surface">Meu Perfil</span></a>'

    $content = $content -replace '(?s)<a href="[^"]*" class="flex items-center gap-sm px-md py-sm hover:bg-surface-container-low transition-colors">\s*<span class="material-symbols-outlined text-\[20px\] text-outline">settings</span>\s*<span class="font-display text-body-md text-on-surface">Configurações</span>\s*</a>', '<a href="configura_es_e_pagamento_vemjunto_mobility.html" class="flex items-center gap-sm px-md py-sm hover:bg-surface-container-low transition-colors"><span class="material-symbols-outlined text-[20px] text-outline">settings</span><span class="font-display text-body-md text-on-surface">Configurações</span></a>'
    
    $content = $content -replace '(?s)<a href="[^"]*" class="block text-center pt-sm text-primary font-display text-caption hover:underline">Ver todas</a>', '<a href="notifica_es_vemjunto.html" class="block text-center pt-sm text-primary font-display text-caption hover:underline">Ver todas</a>'

    # 3. sideNav replacement (overwrites general evaluation for SideNav block)
    if ($content -match '<aside') {
        $selected = "bg-primary-container text-on-primary-container"
        $unselected = "text-on-surface-variant hover:bg-surface-variant"

        $snMinhas = if ($fileName -eq 'minhas_viagens_vemjunto_mobility.html') { $selected } else { $unselected }
        $snMsg = if ($fileName -eq 'chat_com_localiza_o_ao_vivo_vemjunto.html') { $selected } else { $unselected }
        $snConfig = if ($fileName -eq 'configura_es_e_pagamento_vemjunto_mobility.html') { $selected } else { $unselected }
        $snPerfil = if ($fileName -eq 'perfil_do_usu_rio_vemjunto.html') { $selected } else { $unselected }

        $t = $sideNavTemplateRaw.Replace('%%NAV_MINHAS%%', $snMinhas).Replace('%%NAV_MENSAGENS%%', $snMsg).Replace('%%NAV_CONFIG%%', $snConfig).Replace('%%NAV_PERFIL%%', $snPerfil)

        $content = [regex]::Replace($content, '(?s)<aside[^>]*>.*?</aside>', $t)
    }

    # 4. TopNav replacement (overwrites general evaluation for TopNav block)
    $isIndex = $fileName -eq 'index.html'
    $isOferecer = $fileName.StartsWith('oferecer_carona')
    $isMinhas = $fileName -eq 'minhas_viagens_vemjunto_mobility.html'

    $clsIndex = if ($isIndex) { $selectedClass } else { $unselectedClass }
    $clsOferecer = if ($isOferecer) { $selectedClass } else { $unselectedClass }
    $clsMinhas = if ($isMinhas) { $selectedClass } else { $unselectedClass }

    $topNavTemplate = @"
<a class="text-h2 font-display font-bold text-primary" href="index.html">VemJunto</a>
<nav class="hidden md:flex items-center gap-lg">
<a class="$clsIndex" href="index.html">Buscar Carona</a>
<a class="$clsOferecer" href="oferecer_carona_vemjunto_mobility_1.html">Oferecer Carona</a>
<a class="$clsMinhas" href="minhas_viagens_vemjunto_mobility.html">Minhas Viagens</a>
</nav>
"@

    $navRegex = '(?s)<a class="text-h2 font-display font-bold text-primary" href="[^"]*">VemJunto</a>\s*<nav class="hidden md:flex items-center gap-lg">\s*<a class="[^"]*" href="[^"]*">Buscar Carona</a>\s*<a class="[^"]*" href="[^"]*">Oferecer Carona</a>\s*<a class="[^"]*" href="[^"]*">Minhas Viagens</a>\s*</nav>'
    $content = [regex]::Replace($content, $navRegex, $topNavTemplate)

    [IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
}
Write-Output "Done"
