import Modal from './modal.js';
import { alertError } from './alert-error.js';
import { calculateIMC, notNumber } from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = function(event) {
    event.preventDefault();
        
    const weight = inputWeight.value;
    const height = inputHeight.value;        
    
    const weightOrheightIsNotANumber = notNumber(height) || notNumber(weight);
    const result = calculateIMC(weight, height);
    
    if (weightOrheightIsNotANumber) {
        alertError.open();
        
        setTimeout(()=> {
            alertError.close();
        }, 2500)
        return
    }    
         
    displayResultMessage(result);
 
}

function displayResultMessage(result) {
    Modal.message.innerText = `Seu IMC é de ${result}`;
    Modal.open();  
}