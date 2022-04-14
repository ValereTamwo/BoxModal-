const ModalContainer = document.querySelector(".modal-container"); 
const ModalTrigger  = document.querySelectorAll(".modal-trigger");

// le document.querySelectorAll retourne une nodeList dont on y accede sous forme de couple 'cle'=>valeur

ModalTrigger.forEach(trigger=>trigger.addEventListener('click',TogleModal));

function TogleModal(){
    ModalContainer.classList.toggle('active');
    // cool la maintenant on peut constater que : on recupere notre modal container et on rajoute la classe 'active' si elle n'y es pas.
}