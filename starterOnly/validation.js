

let validation = () => {
    // On commence par récupérer le champ prénom
    let isValid = [];
    isValid.push(valPrenom());
    // ......
    console.log(isValid);


    for (let i = 0; i < isValid.length; i++){
        if (!isValid[i]){
            return false
        }
    }
    return true
};

// -------------------------------------------------

let valPrenom = () => {
    let prenom = document.getElementById("first").value;
    let isValid = false;
    if (prenom == "XX"){
        isValid = true
        // Je cache le message d'erreur
    }
    return isValid
}



//--------------------------------------------------
let valid = document.getElementById("val");
valid.addEventListener('click', (e) =>
{
    e.preventDefault();
    validation();
});

