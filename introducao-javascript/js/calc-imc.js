var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    if(peso <= 0 || peso >= 700){
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if(altura <= 0 || altura >= 3){
        alturaEhValida = false;
        tdImc.textContent = "Altura inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if((peso <= 0 || peso >= 700) && (altura <= 0 || altura >= 3)){
        pesoEhValido = false;
        alturaEhValida = false;
        tdImc.textContent = "Peso e altura inválido!";
    }
    
    if(pesoEhValido && alturaEhValida) {
        var imc = peso/(altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }

});