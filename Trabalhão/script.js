function calculo(){
     let mes = Number(document.getElementById("mes").value);
     switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("resposta").innerHTML = "O mês possui 31 dias"
          break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("resposta").innerHTML = "O mês possui 30 dias"
          break;
        case 2:
            document.getElementById("resposta").innerHTML = "O mês possui 28 dias"
          break;     
      }
    }
    