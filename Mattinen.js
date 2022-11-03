//Tekijä : Joonas Mattinen
allPrizes = []
allPersons = []
/**
 * Prints the global prizes array contents to a page
 */
function printPrizes(){
    /*Aluksi tyhjennä ul-elementin sisältö (innerHTML).
    Sitten tulosta palkintotaulukon sisältö for-toistolla
    ul-elementtiin.
    "<li>" + data_taulukosta + "</li>"
    Lopuksi tulosta myös syötettyjen palkintojen määrä sivulle.*/
    document.getElementById("prizes").innerHTML = "";
    for(let i = 0; i <= allPrizes.length-1; i++){
        document.getElementById("prizes").innerHTML += "<li>" + allPrizes[i] + "</li>";
    }

    document.getElementById("prizesAmount").innerHTML = allPrizes.length;
}
    /* Samalla tavalla kuin palkinnot*/
function printPersons(){
    document.getElementById("persons").innerHTML = "";
    for(let i = 0; i <= allPersons.length-1; i++){
        document.getElementById("persons").innerHTML += "<li>" + allPersons[i] + "</li>";
    }

    document.getElementById("personsAmount").innerHTML = allPersons.length;
}
    /*Luo satunnaislukugeneraattori */
function getRndInteger(min, max) {
    
    let rng = Math.floor(Math.random() * (max - min) ) + min;
    return(rng);
}
    /*Luo onclick-funktio palkintojen syöttöä varten */
function newPrize(){
    /*Tee tarkistukset. Jos input-elementti on tyhjä niin tulosta virheilmoitus */
    document.getElementById("prizeError").innerHTML = "";
    let prize = document.getElementById("prize").value;
    
    if( prize == ""){
        document.getElementById("prizeError").innerHTML = "Insert Prize";
    }
    else{
        allPrizes.push(prize);
    }
    
    printPrizes();
    
    document.getElementById("prize").value = "";
    document.getElementById("prize").focus();
}  
    /*Luo onclick-funktio henlkilöitä varten */
function newPerson(){
    /*Tee tarkistukset. Jos input-elementti on tyhjä niin tulosta virheilmoitus */
    document.getElementById("personError").innerHTML = "";
    let person = document.getElementById("person").value;

    if( person === ""){
        document.getElementById("personError").innerHTML = "Insert Person";
    }
    else{
        allPersons.push(person);
    }

    printPersons();
    document.getElementById("person").value = "";
    document.getElementById("person").focus();
}
    /*Tee onclick-funktio palkintojen jakoa varten */
function toPerson(){
    /*Arvo voittajat satunnaislukugeneraattorilla */
    let randomWinnerIndex = getRndInteger(0,allPersons.length);
    document.getElementById("personAndPrize").innerHTML += "<li>" + allPersons[randomWinnerIndex] + ":" + " " + allPrizes[0] + "</li>";
    /*poista palkinto ja henkilö listalta, kun ne on arvottu */   
    allPrizes.splice(0,1);
    allPersons.splice(randomWinnerIndex,1);
    /*Tulosta päivitetyt listat */
    printPersons()
    printPrizes()
    /*Tee tarkistukset. Jos palkinto- tai henkilölista on tyhjä, Ilmoita alertilla */
    if(allPrizes == ""){
        alert("No more prices.");
    }
    if(allPersons == ""){
        alert("No more persons.");
    }
}