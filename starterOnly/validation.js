

let validation = () => {
    // Je lance l'ensemble des validations que je garde dans un tableau.
    let isValid = [firstName(), lastName(), email(), birthdate(),  location(), checkbox()];
    // ......
    console.log(isValid);
    // Vérifions que l'ensemble des champs sont bien à true.
    for (let i = 0; i < isValid.length; i++){
        if (!isValid[i]){
            console.log("L'un des champs n'est pas valide.")
            return false;
        }
    }
    console.log("### L'ensemble du formulaire est valide ###")
    return true;
};
// -------------------------------------------------
// Les fonctions de validation des différents champs
// -------------------------------------------------
let firstName = () => {
    let first = document.getElementById("first").value;
    return first.length > 2;
}

let lastName = () => {
    // ...
    return false;
}

let email = () => {
    return false;
}

let birthdate = () => {
    return false;
}

let location = () => {
    return false;
}

let checkbox = () => {
    return false;
}
//--------------------------------------------------
let valid = document.getElementById("val");
valid.addEventListener('click', (e) =>
{
    e.preventDefault();
    validation();
});

