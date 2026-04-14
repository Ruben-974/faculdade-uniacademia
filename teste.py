#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Script para gerar um PDF com a lista de exercícios de Cálculo Diferencial
e o respectivo gabarito.
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT, TA_CENTER
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

# Conteúdo da lista (já formatado em texto)
CONTEUDO = """
<para fontSize=12>
<strong>Nova Lista de Exercícios – Cálculo Diferencial</strong><br/>
(Baseada na lista original – 5 variações por questão)
<br/><br/>
<strong>1) Mostre que lim_{x->a} f(x) = f(a) para cada função:</strong><br/>
a) f(x) = 3x² - 2x + 1, a = 1<br/>
b) f(x) = x³ + 4x - 5, a = -2<br/>
c) f(x) = -x² + 5x - 7, a = 3<br/>
d) f(x) = 2x³ - x² + 3, a = 0<br/>
e) f(x) = 4x² + 2x - 6, a = -1<br/>
<br/>
<strong>2) Mostre que lim_{x->a} g(x) = g(a) para:</strong><br/>
a) g(x) = 5x² - 3x + 2, a = 2<br/>
b) g(x) = x³ - 2x² + 4x - 1, a = -1<br/>
c) g(x) = -3x² + 7, a = 1<br/>
d) g(x) = 2x³ + 5x - 8, a = -2<br/>
e) g(x) = x² + 4x - 9, a = 3<br/>
<br/>
<strong>3) Dada a função definida por partes, encontre o limite indicado:</strong><br/>
a) f(x) = { (x²-4)/(x-2), x≠2 ; 5, x=2 } → lim_{x->2} f(x)<br/>
b) f(x) = { (x²-1)/(x+1), x≠-1 ; 3, x=-1 } → lim_{x->-1} f(x)<br/>
c) f(x) = { (x²-9)/(x-3), x≠3 ; 0, x=3 } → lim_{x->3} f(x)<br/>
d) f(x) = { (x²-16)/(x+4), x≠-4 ; 8, x=-4 } → lim_{x->-4} f(x)<br/>
e) f(x) = { (x²-25)/(x-5), x≠5 ; 10, x=5 } → lim_{x->5} f(x)<br/>
<br/>
<strong>4) Verifique se existem os limites laterais e o limite no ponto:</strong><br/>
a) f(x) = { 3x-1, x<2 ; 5, x=2 ; -x+7, x>2 } → lim_{x->2⁻}, lim_{x->2⁺}, lim_{x->2}<br/>
b) f(x) = { x²+1, x≤0 ; 2x+1, x>0 } → lim_{x->0⁻}, lim_{x->0⁺}, lim_{x->0}<br/>
c) f(x) = { 2x+3, x<-1 ; 1, x=-1 ; 4-x, x>-1 } → lim_{x->-1⁻}, lim_{x->-1⁺}, lim_{x->-1}<br/>
d) f(x) = { 5-x, x≤3 ; 2x-4, x>3 } → lim_{x->3⁻}, lim_{x->3⁺}, lim_{x->3}<br/>
e) f(x) = { x/2+1, x<4 ; 3, x=4 ; 2x-7, x>4 } → lim_{x->4⁻}, lim_{x->4⁺}, lim_{x->4}<br/>
<br/>
<strong>5) Calcule os limites abaixo:</strong><br/>
a) lim_{x->2} (x³ - 3x² + 2x - 1)<br/>
b) lim_{x->-1} (x⁴ - 2x² + 3)/(x+2)<br/>
c) lim_{x->3} (x² - 9)/(x - 3)<br/>
d) lim_{x->9} (x - 9)/(√x - 3)<br/>
e) lim_{x->0} (√(x+1) - 1)/x<br/>
<br/>
</para>
"""

GABARITO = """
<para fontSize=12>
<strong>Gabarito</strong><br/>
<br/>
<strong>Questão 1</strong><br/>
a) 2 b) -21 c) -1 d) 3 e) -4<br/>
<br/>
<strong>Questão 2</strong><br/>
a) 16 b) -8 c) 4 d) -34 e) 12<br/>
<br/>
<strong>Questão 3</strong><br/>
a) 4 b) -2 c) 6 d) -8 e) 10<br/>
<br/>
<strong>Questão 4</strong><br/>
a) 5, 5, 5  b) 1, 1, 1  c) 1, 5, não existe  d) 2, 2, 2  e) 3, 1, não existe<br/>
<br/>
<strong>Questão 5</strong><br/>
a) -1 b) 2 c) 6 d) 6 e) 1/2<br/>
</para>
"""

def criar_pdf(nome_arquivo="Lista_Exercicios.pdf"):
    """Cria o PDF com a lista de exercícios e o gabarito."""
    doc = SimpleDocTemplate(
        nome_arquivo,
        pagesize=A4,
        rightMargin=2*cm,
        leftMargin=2*cm,
        topMargin=2*cm,
        bottomMargin=2*cm,
    )
    styles = getSampleStyleSheet()
    estilo_normal = ParagraphStyle(
        'Normal',
        parent=styles['Normal'],
        fontName='DejaVuSans',
        fontSize=11,
        leading=14,
        alignment=TA_LEFT,
        spaceAfter=6,
    )
    estilo_titulo = ParagraphStyle(
        'Titulo',
        parent=styles['Title'],
        fontName='DejaVuSans-Bold',
        fontSize=16,
        alignment=TA_CENTER,
        spaceAfter=12,
    )
    elementos = []
    # Título principal
    elementos.append(Paragraph("Lista de Exercícios – Cálculo Diferencial", estilo_titulo))
    elementos.append(Spacer(1, 0.5*cm))
    # Conteúdo da lista
    elementos.append(Paragraph(CONTEUDO, estilo_normal))
    # Quebra de página para o gabarito
    elementos.append(PageBreak())
    elementos.append(Paragraph("Gabarito", estilo_titulo))
    elementos.append(Spacer(1, 0.5*cm))
    elementos.append(Paragraph(GABARITO, estilo_normal))
    # Gera o PDF
    doc.build(elementos)
    print(f"PDF gerado com sucesso: {nome_arquivo}")

if __name__ == "__main__":
    # Verifica se a biblioteca reportlab está instalada
    try:
        import reportlab
    except ImportError:
        print("Erro: a biblioteca 'reportlab' não está instalada.")
        print("Instale com: pip install reportlab")
        exit(1)
    criar_pdf()