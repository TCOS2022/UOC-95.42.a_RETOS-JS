/* **************************************************************************************************************
Crear un programa que demani 2 números num1 i num2 de l'1 al 50 i imprimiu:

La suma de tots dos.

Si tots dos números són primers o no.

Si tots dos números són parells o no.

Si num1 és menor que num2, imprimiu només els números parells en el rang entre num1 i num2 ascendent.

Si num1 és més gran que num2, imprimeix només els nombres senars en el rang entre num1 i num2 descendent.

Si num1 és igual a num2, imprimeix només una vegada si és primer o parell, imprimeix el rang només un número.

Si els números no compleixen la condició, cal notificar-ho a l'usuari.

SOLUCIO 

Reduint el problema a 3  parts facils 

    Entrada de dades

    calculs

    presentacio

**************************************************************************************************************** */

/* ENTRADA */
function entradaDades(){
    /* Funcio que reb un numero entre 1 i 50 */
    /* Recordem que el que rebem al prompt es UNA CADENA */
        let entrada = prompt("Entra un numero entre 1 i 50")
    return entrada
}

function validaDades(a){
    /* NOTA: Recordem que es van evaluant de esquerra a dreta i quant falli un ja no es miraran la resta,
             per tant si no es integer, ja no mirara si es positiu i dintre de [1,50]
             validarem doncs de mes generic a menys, tal que sigui:
                 <> de cadena buida, 
                 enter, 
                 >=1,
                 <=50 

    if((a != "") && (a==parseInt(a)) && (parseInt(a)>=1) && (parseInt(a)>=50)){
        return true

    NOTA: parseInt(a) retorna un integer o un NaN si no pot convertir-lo
    NOTA: A partir de ES6 podem fer servir la funcio Number.isInteger() 
    */

    /* Definim el valor per defecte */
    let resultat = false;
    /* Ho podem fer tambe amb una serie de ifs anidats tal que: */
    if(a!=""){
        // Si a no es una cadena buida .....
        console.log(`El valor ${a} NO es una cadena buida!!!`)
        if(parseInt(a)!=NaN){
            // Si a es un nº enter .....
            console.log(`El valor ${a} ES un nº ENTER!!!`)
            a=parseInt(a);
            if(a>=1){
                // Si es un enter >=1 ......
                console.log(`El valor ${a} Es un enter >=1 !!!`)
                if(a<=50){
                    console.log(`El valor ${a} es un enter >=1 i <=50 !!!`)
                    // Si compleix TOTS els requisits canviarem el valor per defecte a TRUE ....
                    resultat = true
                }else{console.log("EL VALOR NUMERIC ENTER NO ES <=50 !!!!!")}
            }else{console.log("EL VALOR NUMERIC ENTER NO ES >=1 !!!")}
        }else{console.log("EL VALOR NUMERIC NO ES UN ENTER!!!")}
    } else {console.log("NO HA POSAT CAP VALOR!!!")}
    
    /* I finalment retornem el valor obtingut */
    return resultat
}

function avisarEntradaDolenta(){
    /* Funcio que retorna un alert indicant que els valors no son valids */
    alert("Atencio els valors NO son valids. introdueixi un NUMERO, ENTER, POSITIU entre 1 i 50")
}

/* CALCULS */
function suma(a,b){
    /* Funcio qeu retorna la suma de dos valors  */
    let resultat = +a + +b;
    return resultat
}

function esPar(a){
    /* Funcio que mira si el valor pasat es PAR */
    /* NOTA: Per saver si un valor es PAR, farem servir la operacio MODUL */
    let resultat = "";
    let operacio = a % 2;

    if (operacio == 0){
        /* Si el resultat de MOD es 0 vol dir que el numero es PAR */
        resultat = true;
    } else {
        /* Si el resultat de MOD es <> de 0 vol dir que es SENAR */
        resultat = false;
    }

    /* i retornem el resultat */
    console.log ("El valor [" + a + "] es PAR? [" + resultat + " ]");
    return resultat;
}

function esPrimer1(a){
    /* Funcio que mira si el valor pasar es un numero PRIMER */
    
    /* NOTA: Com els numeros primers son coneguts, podem obtenir una llista dels primerss entre 1 i 50 .... */
    let primers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43];
    let resultat = false;

    /* i ara tant sols que anem mirant .... */
    llarg_del_array = primers.length;

    for (let x=0; x<llarg_del_array; x++){
        if (a == primers[x]){
            /* Si resulta que esta al array, llavors es primer i acabem la funcio */
            resultat = true
        }
    }
    /* Si no ha coincidit amb cap valors, llavors es que No ho es .... */
    resultat = false

    /* i retornem el resultat */
    console.log ("El valor [" + a + "] es PRIMER? [" + resultat + " ]");
    return resultat
}

function esPrimer2(a){
    /* Funcio que mira si el valor pasar es un numero PRIMER */
    /* NOTA: Apliquem la definicio */
    /* NOTA: NO cal dividor per tots els numeros anteriors, sols per la primera meitat */

    /* Casos especials */
    if (a == 0 || a == 1 || a == 4) return false;

    /* Mirem a veure si es pot dividir amb resultat 0 per algun valor */
	for (let x = 2; x < a / 2; x++) {
		if (a % x == 0) {
            /* Si el resultat es zero, es divisible i per tant no es primer */
            return false;
	    }
    }
	// Si no em trobat cap divisor, llavors es primer
	return true;
}

function initializeApp(){
    /* Funcio que inicialitza la app */
    console.log("Començant la app!!!!!");
}

/* ******************************************* */
/* ********** FUNCIO PRINCIPAL *************** */
/* ******************************************* */

function main (){
    /* Funcio principal */

    /* Definim les variables que necesitarem */
    let repetirEntrada = true;
    let num_a=0;
    let num_b=0;
    let a_ok=false;
    let b_ok=false;

    /* Validem la entrada */
    /* Fem un bucle que validi les entrades i es mantingui aqui fins que siguin bones */
    while(repetirEntrada){
        num_a = entradaDades();
        num_b = entradaDades();
        a_ok = validaDades(num_a);
        b_ok = validaDades(num_b);
        if (a_ok && b_ok){          // Si els dos valors son bons, ja podem sortir del bucle
            repetirEntrada=false;
            // Com els numeros ja estan validats, podem convertir-los sense obtenir coses raretes ...
            num_a=parseInt(num_a);
            num_b=parseInt(num_b);
        }else{
            repetirEntrada = true;
            avisarEntradaDolenta()
        }
    }

    /* Validem quina opcio em de executar */
    /* NOTA: Tot i que aqui estan separats, no es gaire eficient i es podrien posar-los encadenats */
    let resultat=[];

    if(num_a < num_b){
        /* imprimiu només els números parells en el rang entre num1 i num2 ascendent. */
        for(let x=num_a; x<=num_b; x++){
            if(esPar(x)){
                /* Si el valor es PAR, l afegim a la resposta */
                /* Fem servir PUSH per afegir AL FINAL el nou valor al array */
                resultat.push(x)
            }else{
                /* Si NO es par, el saltem */
            }
        }
    }

    if(num_a == num_b){
        /* imprimeix només una vegada si és primer o parell, imprimeix el rang només un número */
        //resultat = `El valor entrat es PRIMER?[${esPrimer2(num_a)}] i SENAR?[${!esPar(num_a)}] i de valor [${num_a}]`
        resultat.push(num_a);
    }

    if(num_a > num_b){
        /* imprimeix només els nombres senars en el rang entre num1 i num2 descendent */
        for(let x=num_a; x>=num_b; x--){
            if(esPar(x)){
                /* Si el valor es PAR, NOOOO l afegim a la resposta */
            }else{
                /* Fem servir PUSH per afegir AL FINAL el nou valor al array */
                resultat.push(x);
            }
        }        
    }

    /* 
    NOTA: podem optimitzar el codi anterior escrivint els ifs aixi:

        if(a==b){
            // a=b i fem fem aixo .....
        }else{
            // a<>b, per tant reevaluarem a veure qui es mes gran
            if(a>b){
                // a>b fem .....
            }else{
                // a<b i fem ..... 
            }
        }

    i llavors em comptes de fer 3 comprovacion CADA cop, sols en fem 1 (best case) o com a molt 2 (worst case)
    */

    /* Imprimim el resultat de tot que ha de portar:
        Valors de a i b
        Suma
        Si son primers
        Si son senars
        llistat segons relacio entre a i b
    */

    /* Ho podem fer creant les linies per separat i despres ajuntant-les */

    let linia_valors        = `Els valors introduits son: [${num_a}] i [${num_b}]`;
    let linia_suma          = `La suma dels valors es: ${suma(num_a,num_b)}`;
    let linia_ambdosPrimers = "";
    let linia_ambdosSenars  = "";
    let linia_trio          = "";

    /* Valorem si son primers o no */
    if (esPrimer2(num_a) && esPrimer2(num_b)){
        /* Si els DOS valors son primers .... */
        linia_ambdosPrimers = `Els valors [${num_a}] i [${num_b}] son PRIMERS`
    }else{
        /* Si algun o cap es primer */
        linia_ambdosPrimers =""
    }

    /* Valorem si son senars o no */
    if (!esPar(num_a) && !esPar(num_b)){
        /* Si els DOS valors son NO PARS, per aixo validem com a TRUE la funcio negada amb '!' */
        linia_ambdosSenars = `Els valors [${num_a}] i [${num_b}] son SENARS`;
    }else{
        /* Si algun valor es par */
        linia_ambdosSenars="";
    }

    /* Valorem el resultat de a<b, a=b, a>b */
        linia_trio = "Resultat segons relacio a i b: " + resultat;

    /* Construim el resultat a presentar */
    /* Definim el caracter de salt de linia com a cr */
    let cr="\n";

    let missatge_complert = linia_valors + cr + linia_suma + cr + linia_ambdosPrimers + cr + linia_ambdosSenars + cr + linia_trio;

    /* Presentem el resultat en pantalla i en consola */
    console.log(missatge_complert);
    alert(missatge_complert);
    
    /* acabem */
}


/* ************************************************ */
/* EXECUTA MAIN AL ACABAR DE CARREGAR LA PAGINA WEB */
/* ************************************************ */
document.addEventListener("DOMContentLoaded", function(){
    // Un cop carregat el DOM, llançarem la pila de funcions .....
    initializeApp();
    main();
  })