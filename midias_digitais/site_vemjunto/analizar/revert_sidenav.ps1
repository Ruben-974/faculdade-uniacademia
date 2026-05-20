$dir = "."
$files = Get-ChildItem "$dir\*.html"

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

foreach ($file in $files) {
    $content = [IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $fileName = $file.Name
    
    if ($content -match '<aside') {
        $selected = "bg-primary-container text-on-primary-container"
        $unselected = "text-on-surface-variant hover:bg-surface-variant"

        $snMinhas = if ($fileName -eq 'minhas_viagens_vemjunto_mobility.html') { $selected } else { $unselected }
        $snMsg = if ($fileName -eq 'chat_com_localiza_o_ao_vivo_vemjunto.html') { $selected } else { $unselected }
        $snConfig = if ($fileName -eq 'configura_es_e_pagamento_vemjunto_mobility.html') { $selected } else { $unselected }
        $snPerfil = if ($fileName -eq 'perfil_do_usu_rio_vemjunto.html') { $selected } else { $unselected }

        $t = $sideNavTemplateRaw.Replace('%%NAV_MINHAS%%', $snMinhas).Replace('%%NAV_MENSAGENS%%', $snMsg).Replace('%%NAV_CONFIG%%', $snConfig).Replace('%%NAV_PERFIL%%', $snPerfil)

        $content = [regex]::Replace($content, '(?s)<aside[^>]*>.*?</aside>', $t)
        [IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    }
}
Write-Output "SideNav Revertido para Dinâmico."
