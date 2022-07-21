const valorCusto= 10 ;
const valorVenda= 20;
let valorCustoTotal="";
let lucro="";
let imposto= valorCusto * 0.2;

if (valorCusto >= 0 && valorVenda >= 0){
    valorCustoTotal = valorCusto + imposto;
    console.log("O custo total é:" + valorCustoTotal);
    
    lucro = valorVenda - valorCustoTotal;
    console.log("O lucro total é:" + lucro);
    
    variasUnidades=1000*lucro;
    console.log("A venda de mil unidades dará um lucro de: "+variasUnidades)
}else{

    console.log("Alguns dos valores de entrada foram menor que 0!")
}
