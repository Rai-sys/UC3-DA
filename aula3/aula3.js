// ============ QUESTÃO 01 ======================================
/*
function verificarIdade() {
    let idades = [ 15, 18, 19, 34, 20];
    for (let i = 0; i < idades.length; i++) {
        if (idades[i] >= 18) {
            console.log('Todos podem entrar')
        }
        else {
            console.log('Alguem nao pode entrar')
        };
    };
}

verificarIdade();
*/
// ============ QUESTÃO 02 ======================================
/*
function contadorPares() {
    let i = 0;
    while(i <= 50) {
        if (i % 2 === 0) {
            console.log(i);
        }
    i++;
    };
}

contadorPares();
*/
// ============ QUESTÃO 03 ======================================
/*
let cor = 1;

switch (cor) {
    case 1:
        console.log('Cor Clara.')
        break;
    case 2:
        console.log('Cor Média.')
        break;
    case 3:
        console.log('Cor Escura.')
        break;
    default:
        console.log('Cor desconhecida')
        break;
};
*/
// ============ QUESTÃO 04 ======================================
function seguranca() {
    let senha = [12345678111]
    switch (senha) {
        case senha:
            if (senha.length > 12) {
                console.log('Senha Forte')
            }
            break;
        case senha:
            if (senha.length <= 8 && senha.length >= 12) {
                console.log('Senha Média')
            }
            break;
        case senha:
            if (senha.length < 8) {
                console.log('Senha Fraca')
            }
            break;
    
        default:
            break;
    }
}
seguranca();