// ============ QUESTÃO 01 ======================================
function avaliacaoDesempenho(vendaMensal, pontualidade) {
    if (vendaMensal > 100000 && pontualidade > 95) {
        console.log( 'Seu desempenho é: excelente!');
    }
    else if (vendaMensal >= 50000 &&  vendaMensal <= 100000 && pontualidade >= 85 && pontualidade <=95) {
        console.log('Seu desempenho é: bom!');
    }
    else if (vendaMensal < 50000 || pontualidade < 85) {
        console.log('Seu desempenho é: regular!');
    }
};

avaliacaoDesempenho(150000, 100); // = excelente
avaliacaoDesempenho(70000, 91); // = bom
avaliacaoDesempenho(100000, 50); // = regular

// ============ QUESTÃO 02 ======================================
function bolsaEstudo(media, renda) {
    if (media > 8.5 && renda < 3000) {
        console.log('Bolsa: integral aprovada.');
    }
    else if (media >= 7 && media <= 8.5 && renda >= 3000 && renda <= 6000) {
        console.log('Bolsa: parcial aprovada.');
    }
    else if (media < 7 || renda > 6000) {
        console.log('Bolsa: negada.');
    }
};
bolsaEstudo(9, 2000); // = integral
bolsaEstudo(7.5, 4000); // = parcial
bolsaEstudo(3, 2000); // = negada

// ============ QUESTÃO 03 ======================================
function riscoSaude(imc, idade) {
    if (imc > 30 && idade > 60) {
        console.log('Risco de saúde: alto.');
    }
    else if (imc >= 25 && imc <= 30 && idade >= 45 && idade <= 60) {
        console.log('Risco de saúde: médio.');
    }
    else if (imc < 25 || idade < 45) {
        console.log('Risco de saúde: baixo.');
    }
};

riscoSaude(40, 75); // = alto
riscoSaude(27, 55); // = medio
riscoSaude(15, 50); // = baixo

// ============ QUESTÃO 04 ======================================
function classificarCredito(rendaAnual, historicoPag) {
    if (rendaAnual > 100000 && historicoPag == 'excelente') {
        console.log('O crédito é: prime.');
    }
    else if (rendaAnual >= 50000 && rendaAnual <= 100000 && historicoPag == 'bom') {
        console.log('O crédito é: bom.');
    }
    else if (rendaAnual < 50000 || historicoPag == 'ruim') {
        console.log('O crédito é: restrito');
    }
}

classificarCredito(150000, 'excelente'); // = prime
classificarCredito(70000, 'bom'); // = bom
classificarCredito(20000, 'bom'); // = restrito

// ============ QUESTÃO 05 ======================================
function selecaoProdutos(preco, demanda) {
    if (preco > 100 && demanda > 500) {
        console.log('Classificaçao: produto premium.');
    }
    else if (preco >= 50 && preco <= 100 && demanda >= 200 && demanda <= 500) {
        console.log('Classifcaçao: produto padrão.');
    }
    else if (preco < 50 || demanda < 200) {
        console.log('Classificação: produto economico.');
    }
}

selecaoProdutos(150, 550); // = premium
selecaoProdutos(75, 340); // = padrao
selecaoProdutos(10, 300); //economico

// ============ QUESTÃO 06 ======================================
function selecaoCanditados(experiencia, formacaoAcademica) {
    if (experiencia > 10 && formacaoAcademica == 'doutorado') {
        console.log('Canditado: posição senior.');
    }
    else if (experiencia >= 5 && experiencia <= 10 && formacaoAcademica == 'mestrado') {
        console.log('Canditado: posição plena.')
    }
    else if (experiencia < 5 || formacaoAcademica == 'graduacao') {
        console.log('Canditados: posicao junior.');
    }
}

selecaoCanditados(15, 'doutorado'); // = senior
selecaoCanditados(7, 'mestrado'); // = plena
selecaoCanditados(10, 'graduacao'); // = junior

// ============ QUESTÃO 07 ======================================
