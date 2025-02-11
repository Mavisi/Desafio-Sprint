function exibirMensagem(texto){
    document.write(texto);
}
function quebraDeLinha(){

    document.write("<br>");
}


alert("Bem vindo ao desafio de consumo de combustivel");

var litros ;
var local; 
var media; 
let consumo_Medio;
let distancia_Percorrida;
// criar uma variavel para controlar a entrada

var controlaEntrada = false ;
while (!controlaEntrada){
distancia_Percorrida = parseFloat(prompt(`Digite a distancia percorrida em km da sua casa ao trabalho?`));
    if (isNaN(distancia_Percorrida) || distancia_Percorrida<=0){

       alert('Não é aceito caracters especiais ou numeros negativos. Digite novamente:')
    }else{
    controlaEntrada = true;
 }

}

// criar uma variavel para receber os valores 

var controlaEntrada = false ;
while(!controlaEntrada){
    consumo_Medio = parseFloat(prompt(`Digite o consumo medio do veiculo em km/l?`));
    if (isNaN(consumo_Medio) || consumo_Medio<=0){

        alert('Não é aceito caracters especiais ou numeros negativos. Digite novamente:')
     }else{
        controlaEntrada=true;
  }

}

let consumoNecessarioLitros = distancia_Percorrida/consumo_Medio;

let palavra = consumoNecessarioLitros > 1 ? 'Litros' : 'litro';

//alert(`A quantidade de litros necessaria para percorrer ${distancia_Percorrida} é ${consumoNecessarioLitros} ${palavra}`  );
var controlaEntrada=false;
while(!controlaEntrada){
    var quantidade_Postos_Pesquisados = parseInt(prompt(`Digite a quantidade de postos de combustivel no caminho`));
    if(isNaN(quantidade_Postos_Pesquisados)|| quantidade_Postos_Pesquisados<=0){
        alert("Valor invalido, digite um numero:");
    }else{
        controlaEntrada=true;
    }
}


var menor=Infinity;
var media ;
var somaTotal=0;

for (let i=0; i<quantidade_Postos_Pesquisados; i++ ){
    
    var controlaEntrada=false;

    while(!controlaEntrada){
    var soma_total_Valores_Pesquisados = parseFloat(prompt(`Digite o valor do litro do combustivel no posto ${i+1}`));

        if(isNaN(soma_total_Valores_Pesquisados) || soma_total_Valores_Pesquisados<=0){
            alert("Caracters não aceitos, digite novamente");
        }else{
            controlaEntrada=true;
            somaTotal+=soma_total_Valores_Pesquisados;
        }
    }
    
    if(soma_total_Valores_Pesquisados<menor){

        menor=soma_total_Valores_Pesquisados;
    console.log(menor);
    }
 }

 media = somaTotal/quantidade_Postos_Pesquisados;

var gasto_Diario= 2*(consumoNecessarioLitros*menor);

exibirMensagem("Resumo");

quebraDeLinha();

exibirMensagem(`O consumo necessario é de ${consumoNecessarioLitros.toFixed(2)} ${palavra}.`);

quebraDeLinha();

exibirMensagem(`Menor preço encontrado: R$${menor.toFixed(2)}`);

quebraDeLinha();

exibirMensagem(`A media dos valores Pesquisados é de R$ ${media.toFixed(2)}`);

quebraDeLinha();

exibirMensagem(`O gasto diario (ida e volta) é de R$ ${gasto_Diario.toFixed(2)}`);


