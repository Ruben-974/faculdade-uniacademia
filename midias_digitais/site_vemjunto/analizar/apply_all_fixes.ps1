$dir = "."
$files = Get-ChildItem "$dir\*.html"

# ===========================
# STANDARD HEADER BLOCK (new - no hamburger, with notification dropdown on right)
# ===========================
$newNotifAndProfile = @'
<div class="flex items-center gap-md">
<div class="relative" id="notifications-wrapper">
<button id="notif-btn" class="text-on-surface-variant hover:text-primary transition-colors relative flex items-center p-2" aria-label="Notificações" onclick="toggleNotif(event)">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
</button>
<div id="notif-dropdown" class="hidden absolute right-0 mt-2 w-80 bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/20 z-[100] py-md">
<div class="px-md pb-sm border-b border-outline-variant/10 flex justify-between items-center">
<p class="font-display text-label-md font-bold text-on-background">Notificações</p>
<a href="notifica_es_vemjunto.html" class="text-primary font-display text-caption hover:underline">Ver todas</a>
</div>
<div class="max-h-72 overflow-y-auto divide-y divide-outline-variant/10">
<div class="px-md py-sm hover:bg-surface-container-low transition-colors cursor-pointer">
<p class="font-display text-caption text-primary mb-1">Viagem Confirmada</p>
<p class="font-display text-body-md text-on-surface-variant">Sua reserva para Campinas foi aceita por Ricardo.</p>
<span class="font-display text-[10px] text-outline">Há 5 min</span>
</div>
<div class="px-md py-sm hover:bg-surface-container-low transition-colors cursor-pointer">
<p class="font-display text-caption text-primary mb-1">Nova Mensagem</p>
<p class="font-display text-body-md text-on-surface-variant">Ricardo: "Oi! Estarei no ponto às 08:20."</p>
<span class="font-display text-[10px] text-outline">Há 1 hora</span>
</div>
<div class="px-md py-sm hover:bg-surface-container-low transition-colors cursor-pointer">
<p class="font-display text-caption text-tertiary mb-1">Carona Confirmada</p>
<p class="font-display text-body-md text-on-surface-variant">Sua carona para amanhã foi confirmada!</p>
<span class="font-display text-[10px] text-outline">Hoje, 09:15</span>
</div>
</div>
</div>
</div>
<div class="relative" id="profile-dropdown-wrapper">
<a href="perfil_do_usu_rio_vemjunto.html" class="text-on-surface-variant hover:text-primary transition-colors flex items-center p-2" aria-label="Menu de Perfil" id="profile-btn" onclick="toggleProfile(event)">
<span class="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</a>
<div id="profile-dropdown" class="hidden absolute right-0 mt-2 w-48 bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/20 z-[100] py-sm">
<a href="perfil_do_usu_rio_vemjunto.html" class="flex items-center gap-sm px-md py-sm hover:bg-surface-container-low transition-colors"><span class="material-symbols-outlined text-[20px] text-outline">person</span><span class="font-display text-body-md text-on-surface">Meu Perfil</span></a>
<a href="configura_es_e_pagamento_vemjunto_mobility.html" class="flex items-center gap-sm px-md py-sm hover:bg-surface-container-low transition-colors">
<span class="material-symbols-outlined text-[20px] text-outline">settings</span>
<span class="font-display text-body-md text-on-surface">Configurações</span>
</a>
<div class="my-sm border-t border-outline-variant/10"></div>
<a href="#" class="flex items-center gap-sm px-md py-sm hover:bg-surface-container-low transition-colors text-error">
<span class="material-symbols-outlined text-[20px]">logout</span>
<span class="font-display text-body-md">Sair</span>
</a>
</div>
</div>
</div>
'@

# ===========================
# SIDE NAV "OFERECER CARONA" LINK (add before closing </aside>)
# ===========================
$oferecarLink = @'
<a href="oferecer_carona_vemjunto_mobility_1.html" class="mt-auto bg-primary text-on-primary rounded-xl py-3 px-4 font-display text-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md">
<span class="material-symbols-outlined" data-icon="directions_car">directions_car</span>
Oferecer Carona
</a>
'@

# ===========================
# NEW BOTTOM NAV (all panel options)
# ===========================
function Get-BottomNav($fileName) {
    $viagem = "text-on-surface-variant hover:text-primary transition-colors"
    $explorar = "text-on-surface-variant hover:text-primary transition-colors"
    $chat = "text-on-surface-variant hover:text-primary transition-colors"
    $perfil = "text-on-surface-variant hover:text-primary transition-colors"
    $oferecer = "text-on-surface-variant hover:text-primary transition-colors"
    $config = "text-on-surface-variant hover:text-primary transition-colors"

    if ($fileName -match "minhas_viagens") { $viagem = "text-primary" }
    elseif ($fileName -match "index|resultados") { $explorar = "text-primary" }
    elseif ($fileName -match "chat|acompanhamento") { $chat = "text-primary" }
    elseif ($fileName -match "perfil") { $perfil = "text-primary" }
    elseif ($fileName -match "oferecer_carona") { $oferecer = "text-primary" }
    elseif ($fileName -match "configura_es") { $config = "text-primary" }

    return @"
<!-- BottomNavBar (Mobile Only) -->
<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-surface shadow-2xl flex justify-around items-center pt-sm pb-safe z-50 border-t border-outline-variant/30">
<a class="flex flex-col items-center gap-0.5 $viagem px-2 py-1" href="minhas_viagens_vemjunto_mobility.html">
<span class="material-symbols-outlined text-[22px]" data-icon="directions_car">directions_car</span>
<span class="text-[10px] font-medium">Viagem</span>
</a>
<a class="flex flex-col items-center gap-0.5 $explorar px-2 py-1" href="index.html">
<span class="material-symbols-outlined text-[22px]" data-icon="explore">explore</span>
<span class="text-[10px] font-medium">Explorar</span>
</a>
<a class="flex flex-col items-center gap-0.5 $oferecer px-2 py-1" href="oferecer_carona_vemjunto_mobility_1.html">
<span class="material-symbols-outlined text-[22px]" data-icon="add_circle">add_circle</span>
<span class="text-[10px] font-medium">Oferecer</span>
</a>
<a class="flex flex-col items-center gap-0.5 $chat px-2 py-1" href="chat_com_localiza_o_ao_vivo_vemjunto.html">
<span class="material-symbols-outlined text-[22px]" data-icon="chat_bubble">chat_bubble</span>
<span class="text-[10px] font-medium">Chat</span>
</a>
<a class="flex flex-col items-center gap-0.5 $perfil px-2 py-1" href="perfil_do_usu_rio_vemjunto.html">
<span class="material-symbols-outlined text-[22px]" data-icon="person">person</span>
<span class="text-[10px] font-medium">Perfil</span>
</a>
</nav>
<div class="pb-20 md:pb-0"></div>
"@
}

# ===========================
# JS BLOCK (dropdown toggles, no hamburger)
# ===========================
$scriptBlock = @'
<script>
function toggleNotif(e) {
    e.stopPropagation();
    document.getElementById('notif-dropdown').classList.toggle('hidden');
    const pd = document.getElementById('profile-dropdown');
    if (pd) pd.classList.add('hidden');
}
function toggleProfile(e) {
    e.stopPropagation();
    document.getElementById('profile-dropdown').classList.toggle('hidden');
    document.getElementById('notif-dropdown').classList.add('hidden');
}
document.addEventListener('click', function() {
    const nd = document.getElementById('notif-dropdown');
    const pd = document.getElementById('profile-dropdown');
    if (nd) nd.classList.add('hidden');
    if (pd) pd.classList.add('hidden');
});
function toggleMobileMenu() {
    const aside = document.querySelector('aside');
    if (aside) {
        aside.classList.toggle('hidden');
        aside.classList.toggle('fixed');
        aside.classList.toggle('inset-y-0');
        aside.classList.toggle('left-0');
        aside.classList.toggle('z-[100]');
        aside.classList.toggle('shadow-2xl');
        document.body.classList.toggle('overflow-hidden');
    }
}
</script>
</body>
'@

foreach ($file in $files) {
    $content = [IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $fileName = $file.Name

    # 1. Remove hamburger button from header (mobile only menu button)
    $content = $content -replace '(?s)<button class="md:hidden text-on-surface-variant hover:text-primary transition-colors flex items-center p-2" aria-label="Menu Principal" onclick="toggleMobileMenu\(\)">\s*<span class="material-symbols-outlined" data-icon="menu">menu</span>\s*</button>\s*', ''

    # 2. Replace the old notifications+profile block with new clean one (handles all variations)
    $oldNotifPattern = '(?s)<div class="flex items-center gap-md">\s*<div class="relative group">.*?</div>\s*<div class="relative group">.*?</div>\s*</div>\s*</div>\s*</div>\s*</header>'
    $newBlock = $newNotifAndProfile + "</div>`n</div>`n</div>`n</header>"
    $content = $content -replace $oldNotifPattern, $newBlock

    # 3. Remove "Nova Carona" or existing "Oferecer Carona" button from aside (to avoid duplicates)
    $content = $content -replace '(?s)\s*<a href="oferecer_carona_vemjunto_mobility_1\.html" class="mt-auto[^"]*"[^>]*>[\s\S]*?</a>\s*(?=</aside>)', "`n"

    # 4. Add "Oferecer Carona" button inside aside before </aside>
    if ($content -match '</aside>') {
        $content = $content -replace '(?s)(</nav>\s*</aside>)', "`$1" # backup
        $content = $content.Replace('</aside>', "$oferecarLink`n</aside>")
    }

    # 5. Fix footer white gap on mobile: add pb-20 to footer
    $content = $content -replace '<footer class="bg-on-background', '<footer class="mb-20 md:mb-0 bg-on-background'

    # 6. Remove footer from notificacoes page only
    if ($fileName -eq "notifica_es_vemjunto.html") {
        $content = $content -replace '(?s)<!-- Footer.*?</footer>', ''
        $content = $content -replace '(?s)<footer[^>]*>[\s\S]*?</footer>', ''
    }

    # 7. Remove old BottomNavBar and spacer, inject new one
    $content = $content -replace '(?s)\s*<!-- BottomNavBar \(Mobile Only\).*?</nav>\s*(<div class="pb-\d+ md:pb-0"></div>\s*)?', ''
    $content = $content -replace '(?s)\s*<div class="pb-\d+ md:pb-0"></div>\s*(?=</body>)', ''

    # Remove old JS block
    $content = $content -replace '(?s)<script>\s*function toggleNotif.*?</script>\s*</body>', '</body>'
    $content = $content -replace '(?s)<script>\s*function toggleMobileMenu.*?</script>\s*</body>', '</body>'

    # Inject new bottom nav and script
    $bottomNav = Get-BottomNav $fileName
    $content = $content -replace '</body>', "$bottomNav`n$scriptBlock"

    [IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
}

Write-Output "Todas as 8 melhorias aplicadas com sucesso."
