param()
$htmlDir = $PSScriptRoot

$activePages = @(
    'oferecer_carona_vemjunto_mobility_1.html',
    'oferecer_carona_vemjunto_mobility_2.html'
)

$targetFiles = @(
    'minhas_viagens_vemjunto_mobility.html',
    'resultados_de_busca_organizado_vemjunto_mobility.html',
    'perfil_do_usu_rio_vemjunto.html',
    'oferecer_carona_vemjunto_mobility_1.html',
    'oferecer_carona_vemjunto_mobility_2.html',
    'detalhes_da_viagem_com_seguran_a_vemjunto.html',
    'configura_es_e_pagamento_vemjunto_mobility.html',
    'chat_com_localiza_o_ao_vivo_vemjunto.html',
    'acompanhamento_em_tempo_real_vemjunto.html'
)

$pattern = '(?s)(</nav>\s*)<a\s+href="oferecer_carona_vemjunto_mobility_1\.html"\s+class="mt-auto bg-primary[^"]*">\s*<span[^>]*>directions_car</span>\s*Oferecer Carona\s*</a>'

$navItemActive = '<a class="bg-primary-container text-on-primary-container rounded-xl px-4 py-3 flex items-center gap-3 transition-all" href="oferecer_carona_vemjunto_mobility_1.html">' + "`n" +
    '<span class="material-symbols-outlined" data-icon="add_circle">add_circle</span>' + "`n" +
    '<span class="font-display text-label-md">Oferecer Carona</span>' + "`n" +
    '</a>' + "`n" +
    '</nav>'

$navItemInactive = '<a class="text-on-surface-variant hover:bg-surface-variant rounded-xl px-4 py-3 flex items-center gap-3 transition-all" href="oferecer_carona_vemjunto_mobility_1.html">' + "`n" +
    '<span class="material-symbols-outlined" data-icon="add_circle">add_circle</span>' + "`n" +
    '<span class="font-display text-label-md">Oferecer Carona</span>' + "`n" +
    '</a>' + "`n" +
    '</nav>'

foreach ($fileName in $targetFiles) {
    $filePath = Join-Path $htmlDir $fileName

    if (-not (Test-Path $filePath)) {
        Write-Warning "File not found: $filePath"
        continue
    }

    $content = Get-Content $filePath -Raw -Encoding UTF8

    if ($content -notmatch 'class="mt-auto bg-primary') {
        Write-Host "SKIP (already fixed or no match): $fileName"
        continue
    }

    $isActive = $activePages -contains $fileName
    $replacement = if ($isActive) { $navItemActive } else { $navItemInactive }

    $newContent = [regex]::Replace($content, $pattern, $replacement)

    if ($newContent -eq $content) {
        Write-Warning "Pattern NOT matched in: $fileName"
    } else {
        [System.IO.File]::WriteAllText($filePath, $newContent, [System.Text.Encoding]::UTF8)
        Write-Host "FIXED: $fileName  (active=$isActive)"
    }
}

Write-Host ""
Write-Host "=== Done! ==="
