//Inicio Desafio 01 Menssagens
function Desafio01_mensagens(btn)
{
    if(btn.value == '1')
    {
        window.alert("Você clicou no 1º Botão!");
    }
    if(btn.value == '2')
    {
        window.alert("Você clicou no 2º Botão!");
    }
    if(btn.value =='3')
    {
        window.alert("Você clicou no 3º Botão!");
    }
}
//Fim Desafio 01

//Incio Desafio 02 Boas vindas
function Desafio02_Boas_vindas()
{
    let nome, idade;
    do
    {
        nome = window.prompt("Olá, tudo bem? Qual é seu nome?");
        idade = window.prompt("Prazer em te conhecer "+nome+"! Poderia agora me dizer quantos anos você tem?");
        idade = parseInt(idade);
        if(!(isNaN(nome)) || isNaN(idade))
        {
            window.alert("Os valores digitados estão incorretos\ndigite novamente");
        }
        if(idade<0)
        {
            window.alert("Erro!\nA idade é menor do que zero!\nDigite novamente.");
        }
    }while(!(isNaN(nome)) || isNaN(idade) || idade<0);
    window.alert("Muito  bom!\nEntão você é "+nome+" com "+idade+" certo?\nSeja bem vindo!");
}
//Fim Desafio 02

//Incio Desafio 03 Antes e Depois
function Desafio03_Antes_e_Depois()
{
    let valor, vlrmenos, vlrmais;

    do
    {
        valor = window.prompt("Digite um numero inteiro qualquer:");
        valor = parseInt(valor);
        vlrmenos = --valor;
        vlrmenos = parseInt(vlrmenos);
        vlrmais = ++valor+1;
        vlrmais = parseInt(vlrmais);

        if(isNaN(valor))
        {
            window.alert("Os valores digitados estão incorretos!\nDigite novamente.")
        }
    }while(isNaN(valor));

    
    window.alert("Antes de "+valor+" temos o número "+vlrmenos+"\nDepois de "+valor+", temos o número "+vlrmais);
}
//Fim Desafio 03

//Inicio Desafio 04 troco
function Desafio04_Troco()
{
    let produto, vlrproduto, vlrpago, troco;

    do
    {
        produto = window.prompt("Que produto você está comprando?");
        vlrproduto = window.prompt("Quanto custa "+produto+" Que você está comprando?");
        vlrproduto = parseFloat(vlrproduto);
        vlrpago = window.prompt("Qual o valor que você deu ao "+produto+" custando R$"+vlrproduto);
        vlrpago = parseFloat(vlrpago);
        if(!(isNaN(produto))|| isNaN(vlrproduto) || isNaN(vlrpago))
        {
            window.alert("Os valores digitados estão incorretos!\nDigite novamente.");
        }
        if(vlrproduto == 0 || vlrpago == 0)
        {
            window.alert("Tá tentando dar o golpe?\nDigita novamente caloteiro!");
        }
    }while(!(isNaN(produto))|| isNaN(vlrproduto) || isNaN(vlrpago) || vlrproduto == 0 || vlrpago == 0);
    
    troco = vlrpago - vlrproduto;
    
    if(vlrpago > vlrproduto)
    {
        window.alert("Você comprou "+produto+" que custou R$"+vlrproduto+".\nVocê deu R$"+vlrpago+" em dinheiro. Seu troco é R$"+troco+".\nVolte sempre!");
    }
    else if(vlrpago == vlrproduto)
    {
        window.alert("Você comprou "+produto+" que custou R$"+vlrproduto+".\nVocê deu R$"+vlrpago+" em dinheiro. Seu troco é R$"+troco+" otário!\nAcha que ganha dinheiro de graça?!\nSe sim, vai Reclamar com o Papa!");
    }
    else if(vlrpago<vlrproduto)
    {
        window.alert("Eu tenho cara de otário?\nSe quiser algo aqui, pode clicar e refazer novamente :)");
    }
}
//Fim Desafio 04

//Inicio Desafio 05 Converter Medidas
function Desafio05_Converter_Medidas()
{
    let teste, print, metro, km, hm, dam, dm, cm, mm;
    do
    {
        metro = window.prompt("Digite um uma ditância em metros (m):");
        metro = parseFloat(metro);
        if(isNaN(metro))
        {
            window.alert("O valor digitado é inválido\nDigite novamente");
        }
    }while(isNaN(metro));
    

    //Converter metros kilometros
    km = metro / 1000;
    
    //Converter metros em hecatrometros
    hm = metro * 0.01;

    //Converter metros em decâmetros
    dam = metro * 0.1;

    //Converter metros em decimetros
    dm = metro * 10;

    //Converter metros em centimetros
    cm = metro * 100;

    //Converter metros em milimetros
    mm = metro * 1000;

    //Imprimir resultado na tela
    print = window.document.getElementById('print');
    print.innerHTML = '<h2><strong>A distância de '+metro.toString().replace('.',',')+' metros, corresponde a...</strong></h2>'+
    '<p>'+km.toFixed(3).toString().replace('.',',')+' Quilometros (Km)</p>'+
    '<p>'+hm.toFixed(3).toString().replace('.',',')+' Hectômetros (Hm)</p>'+
    '<p>'+dam.toFixed(3).toString().replace('.',',')+' Decâmetros (Dam)</p>'+
    '<p>'+dm.toFixed(1).toString().replace('.',',')+' Decimetros (Dm)</p>'+
    '<p>'+cm.toString().replace('.',',')+' Centímetros (Cm)</p>'+
    '<p>'+mm.toString().replace('.',',')+' Milímetros (Mm)</p>';
}
//Fim Desafio 05

//Inicio Desafio 06 Converter Temperatura
function Desafio06_Converter_Temperatura()
{
    let print,c,f,k;
    do
    {
        c = window.prompt("Digite uma temperatura em ºC (Celsius): ");
        c = parseFloat(c);

        if(isNaN(c))
        {
            window.alert("O valor digitado é inválido!\nDigite novamente.");
        }
    }while(isNaN(c));
    
    k = 273.15 + (c*1);//a variável em um numero operavel ao multiplicala
    k = parseFloat(k);
    f = (c * 1.8) + 32;
    f = parseFloat(f);

    print = document.getElementById("print");
    print.innerHTML = '<p><strong>A temperatura de '+c.toString().replace('.',',')+' ºC, corresponde a...</strong></p><br>'+
    '<p>'+(k.toFixed(2)).toString().replace('.',',')+'°K (Kelvin)</p>'+
    '<p>'+(f.toFixed(2)).toString().replace('.',',')+'°F (Fahrenheit)</p>';
}
//Fim Desafio 06

//Inicio Desafio 07 Conversor de moedas
function SolicitarCotacaoDolar(ctc)
{
    do
    {
        ctc = window.prompt('Antes de mais nada, quanto está a cotação do dolar agora?');
        ctc = parseFloat(ctc);
        if(isNaN(ctc)||ctc<0)
        {
            window.alert("Valores digitados incorretamente!\nDigite novamente,");
        }
    }while(isNaN(ctc)||ctc<0);
    return ctc;
}
function Desafio07_Conversor_Moedas()
{
    let real, cotacao, dolar, print;
    cotacao = SolicitarCotacaoDolar(this);
    cotacao = parseFloat(cotacao);
    real = window.prompt('Quantos reais você tem disponíveis?');
    real = parseFloat(real);

    dolar = cotacao * real;
    dolar = parseFloat(dolar);
    
    print = window.document.getElementById("print");
    print.innerHTML = 'Seus R$'+real+' totalizam U$'+dolar+' doletas americanas :)';
}