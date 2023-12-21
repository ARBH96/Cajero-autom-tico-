var saldo = 200,
consultar,deposito, retiro;

function consultar(){
    document.getElementsByName("consultar")[0].value=saldo;
}

function depositar(){
    deposito = parseFloat(document.getElementsByName("deposito")[0].value);

    if (isNaN(deposito)){
        alert("El valor ingresado no es número válido");
        return;
    }

    saldo = saldo + deposito;
}

function alert(){
    window.alert('No puedes depositar menos de 10 o más de 990 pesos');
}

function retirar(){
    retiro = parseFloat(document.getElementsByName("retiro")[0].value);

    if (isNaN(retiro)){
        alert("Su fondo disponible no es suficiente");
        return;
    }

    if (retiro > saldo){
        alert("Su fondo disponible no es suficiente");
        return;
    }

    saldo = saldo - retiro;
}


function verificar(){
    document.getElementsByName("verificacion")[0].value = saldo;
}

function calcular(){
    document.getElementsByName("calculacion")[0].value = saldo;
}

function redireccion(){
    location.href ="principal.html"
   }