
// CALCULA O AUMENTO DE SALÁRIO DE ACORDO COM O GENERO E TEMPO DE SERVIÇO


function aumentoSal () {

    var gen = ("");   
    var tempoTra = parseInt("");
    var atualSal = parseFloat("");
    var nSal;

    gen = document.getElementById('genero').value;
    tempoTra = document.getElementById('tempo').value;
    atualSal = document.getElementById('salAtual').value;

    // CONVERTE A STRING PARA MAIUSCULA

    var string = gen.toUpperCase();

    if (string == "M") {

       if (tempoTra < 15) {

          // 1*atualSal CONVERTE PARA NUMBER

          nSal = (1*atualSal + (atualSal*0.05));

          document.getElementById('novoSal').innerHTML = nSal;
       }

       else if (tempoTra >= 15 && tempoTra <= 20) {

          nSal = (1*atualSal + (atualSal*0.12));
          
          document.getElementById('novoSal').innerHTML = nSal;
       }

       else if (tempoTra > 20) {
          nSal = (1*atualSal + (atualSal*0.23))
       }


    }

    else if (string == "H") {
        
       if (tempoTra < 20) {

          nSal = (1*atualSal + (atualSal*0.03));

          document.getElementById("novoSal").innerHTML = nSal;
       }

       else if (tempoTra >= 20 && tempoTra <= 30) {
          
         nSal = (1*atualSal + (atualSal*0.13));
         
         document.getElementById('novoSal').innerHTML = nSal;
       }

       else if (tempoTra > 30) {

         nSal = (1*atualSal + (atualSal*0.25));
         
         document.getElementById('novoSal').innerHTML = nSal;
        }

    }

}