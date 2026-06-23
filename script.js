let encerrar_cod = 'não';
var delta = 0;


const fam = document.getElementById("equação");
fam.addEventListener("submit", function(event){
event.preventDefault(); // impede recarregar a página

let num1 = document.getElementById("num").value;

function julgar_equação(){
    if(num1.includes("^2") == true && delta >= 0){
        return 'não';
    }else{
        return 'sim';
    }
}

function separ_abc(){
    var a = [];
    var b = [];
    var c = [];
    var i = 0;
    var k = 0;
    let d = true;
    let limite = 1; 


    num1 = num1.replaceAll(" ", "");    //23x^2+4-6=0
    let equa_spli = num1.split("");

    while(d != false){
        if (equa_spli[i] == 'x') {
            if (i == 0) {
                a[i] = 1;
                d = false;
            }else{
                d = false;
            }
        } else {
            a[i] = equa_spli[i];
        }

        i++;
    }
    a = Number(a.join(""));
    console.log("o a é " + a);



        i = i + 2;
        let j = i;
        d = true;

        while(d != false){
        if (equa_spli[i] == 'x') {
            if (i == j) {
                b = 1;
                d = false;
            }else{
                d = false;
                b = Number(b.join(""));
            }
        }else if(equa_spli[i] == '+'){
            if(limite == 0){
                d = false;
            } else{
            }
            limite--; 
        }else if(equa_spli[i] == '-'){
            if(limite == 0){
                d = false;
            } else{
                b[k] = equa_spli[i];
            k++;
            }
            limite--;       
        } else {
            b[k] = equa_spli[i];
            k++;
        }
        i++;
        }
    console.log("o b é " + b);



    
        if (equa_spli[i] == 'x') {
            i++;
        }else{
            i;
        }
        j = i;
        d = true;
        k = 0;


        while(d != false){
        if (equa_spli[i] == '=') {
            if (i == j) {
                c = 0;
                d = false;
            }else{
                d = false;
                c = Number(c.join(""));
            }
        } else {
            c[k] = equa_spli[i];
            k++;
        }

        i++;
    }
    console.log("o c é " + c);

    return {b, a, c};
}

function achar_delta(b,a,c){
    delta = (b * b) -4 * a * c;
}

function bhaskara(b,a){ //Math.sqrt();
let x1 = (-b - Math.sqrt(delta)) / (2 * a);
let x2 = (-b + Math.sqrt(delta)) / (2 * a);

if(x1 == x2){
    return x1;
}else{
    return[x2, x1];
}

console.log("o resultado é " + x1)
}

   

    let {a, b, c} = separ_abc();
    
    achar_delta(b,a,c);

    encerrar_cod = julgar_equação();

    if(encerrar_cod == 'sim'){
        alert("codigo errado");
        document.getElementById("resposta").innerHTML = "equação invalida";
    }else{



    let resposta = [0, 'o mesmo'];
    resposta = bhaskara(b,a);

    document.getElementById("resposta").innerHTML = "x1 é " + resposta[0] + "<br/> e x2 é " + resposta[1];


    }

});