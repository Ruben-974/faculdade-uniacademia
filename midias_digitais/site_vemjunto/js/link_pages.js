const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const selectedClass = "font-display text-body-md text-primary border-b-2 border-primary pb-1 transition-colors";
const unselectedClass = "font-display text-body-md text-on-surface-variant hover:text-primary transition-colors";

function getTopNavTemplate(fileName) {
    const isIndex = fileName === 'index.html';
    const isOferecer = fileName.startsWith('oferecer_carona');
    const isMinhas = fileName === 'minhas_viagens_vemjunto_mobility.html';

    return `
<a class="text-h2 font-display font-bold text-primary" href="index.html">VemJunto</a>
<nav class="hidden md:flex items-center gap-lg">
<a class="${isIndex ? selectedClass : unselectedClass}" href="index.html">Buscar Carona</a>
<a class="${isOferecer ? selectedClass : unselectedClass}" href="oferecer_carona_vemjunto_mobility_1.html">Oferecer Carona</a>
<a class="${isMinhas ? selectedClass : unselectedClass}" href="minhas_viagens_vemjunto_mobility.html">Minhas Viagens</a>
</nav>
    `.trim();
}

const sideNavTemplateRaw = `
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
`.trim();

function getSideNavTemplate(fileName) {
    const selected = "bg-primary-container text-on-primary-container";
    const unselected = "text-on-surface-variant hover:bg-surface-variant";
    
    let template = sideNavTemplateRaw;
    template = template.replace('%%NAV_MINHAS%%', fileName === 'minhas_viagens_vemjunto_mobility.html' ? selected : unselected);
    template = template.replace('%%NAV_MENSAGENS%%', fileName === 'chat_com_localiza_o_ao_vivo_vemjunto.html' ? selected : unselected);
    template = template.replace('%%NAV_CONFIG%%', fileName === 'configura_es_e_pagamento_vemjunto_mobility.html' ? selected : unselected);
    template = template.replace('%%NAV_PERFIL%%', fileName === 'perfil_do_usu_rio_vemjunto.html' ? selected : unselected);

    return template;
}

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // 1. Update Top Nav Selection & HREFs
    const navRegex = /<a class="text-h2 font-display font-bold text-primary" href="[^"]*">VemJunto<\/a>\s*<nav class="hidden md:flex items-center gap-lg">\s*<a class="[^"]*" href="[^"]*">Buscar Carona<\/a>\s*<a class="[^"]*" href="[^"]*">Oferecer Carona<\/a>\s*<a class="[^"]*" href="[^"]*">Minhas Viagens<\/a>\s*<\/nav>/g;
    content = content.replace(navRegex, getTopNavTemplate(file));

    // Update notification and profile dropdowns in header
    content = content.replace(
        /<a href="[^"]*" class="flex items-center gap-sm px-md py-sm hover:bg-surface-container-low transition-colors">\s*<span class="material-symbols-outlined text-\[20px\] text-outline">person<\/span>\s*<span class="font-display text-body-md text-on-surface">Meu Perfil<\/span>\s*<\/a>/g,
        '<a href="perfil_do_usu_rio_vemjunto.html" class="flex items-center gap-sm px-md py-sm hover:bg-surface-container-low transition-colors">\n<span class="material-symbols-outlined text-[20px] text-outline">person</span>\n<span class="font-display text-body-md text-on-surface">Meu Perfil</span>\n</a>'
    );
    content = content.replace(
        /<a href="[^"]*" class="flex items-center gap-sm px-md py-sm hover:bg-surface-container-low transition-colors">\s*<span class="material-symbols-outlined text-\[20px\] text-outline">settings<\/span>\s*<span class="font-display text-body-md text-on-surface">Configurações<\/span>\s*<\/a>/g,
        '<a href="configura_es_e_pagamento_vemjunto_mobility.html" class="flex items-center gap-sm px-md py-sm hover:bg-surface-container-low transition-colors">\n<span class="material-symbols-outlined text-[20px] text-outline">settings</span>\n<span class="font-display text-body-md text-on-surface">Configurações</span>\n</a>'
    );
    content = content.replace(
        /<a href="[^"]*" class="block text-center pt-sm text-primary font-display text-caption hover:underline">Ver todas<\/a>/g,
        '<a href="notifica_es_vemjunto.html" class="block text-center pt-sm text-primary font-display text-caption hover:underline">Ver todas</a>'
    );

    // 2. Standardize SideNav
    if (content.includes('<aside')) {
        const asideRegex = /<aside[^>]*>[\s\S]*?<\/aside>/;
        content = content.replace(asideRegex, getSideNavTemplate(file));
    }

    // 3. Link action buttons
    content = content.replace(/<a([^>]*)href="[^"]*"([^>]*)>(.*?)<\/a>/g, (match, p1, p2, inner) => {
        const text = inner.toLowerCase();
        let target = null;
        if (text.includes('buscar') || text.includes('ver todas') || text.includes('explorar')) target = 'resultados_de_busca_organizado_vemjunto_mobility.html';
        else if (text.includes('ver detalhes') || text.includes('reservar')) target = 'detalhes_da_viagem_com_seguran_a_vemjunto.html';
        else if (text.includes('nova carona') || text.includes('oferecer')) target = 'oferecer_carona_vemjunto_mobility_1.html';
        else if (text.includes('perfil')) target = 'perfil_do_usu_rio_vemjunto.html';
        else if (text.includes('configuração') || text.includes('configurações')) target = 'configura_es_e_pagamento_vemjunto_mobility.html';
        else if (text.includes('mensagens') || text.includes('chat')) target = 'chat_com_localiza_o_ao_vivo_vemjunto.html';
        else if (text.includes('minhas viagens')) target = 'minhas_viagens_vemjunto_mobility.html';

        if (target && !p1.includes('href') && !p2.includes('href') && !p1.includes('id="tailwind-config"')) {
            return `<a${p1}href="${target}"${p2}>${inner}</a>`;
        }
        return match;
    });

    content = content.replace(/<button([^>]*)>(.*?)<\/button>/g, (match, p1, inner) => {
        const text = inner.toLowerCase();
        let target = null;
        if (text.includes('buscar') || text.includes('ver todas') || text.includes('explorar')) target = 'resultados_de_busca_organizado_vemjunto_mobility.html';
        else if (text.includes('ver detalhes') || text.includes('reservar')) target = 'detalhes_da_viagem_com_seguran_a_vemjunto.html';
        else if (text.includes('nova carona') || text.includes('oferecer')) target = 'oferecer_carona_vemjunto_mobility_1.html';
        else if (text.includes('perfil')) target = 'perfil_do_usu_rio_vemjunto.html';
        else if (text.includes('configuração') || text.includes('configurações')) target = 'configura_es_e_pagamento_vemjunto_mobility.html';
        else if (text.includes('mensagens') || text.includes('chat')) target = 'chat_com_localiza_o_ao_vivo_vemjunto.html';

        if (target) {
            let newP1 = p1.replace(/onclick="[^"]*"/g, '');
            // keep the button visually same but change tag to anchor
            return `<a href="${target}"${newP1} style="display: inline-block; text-align: center;">${inner}</a>`;
        }
        return match;
    });

    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});
console.log('Processed all HTML files successfully.');
