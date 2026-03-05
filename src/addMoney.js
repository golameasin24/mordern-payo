import { AllValueFn, AvailableBlance } from "./addMoney_mecin.js"

document.getElementById ('addMoney-btn').addEventListener ('click', ()=> {
    // select bank
     const select_bank = AllValueFn ('select-bank')
    if (select_bank === "Selec Bank") {

        alert ('Please Select any Bank')
        return
    }

    //Bank Account number 

    const bankAcc = AllValueFn ('account-number')
    if (bankAcc.length !=11) {
        alert ('Enter 11 digit number')
        return;
    }

    // add money
    const cruentBlace = AvailableBlance ('right-blance')
    const addMoney = AllValueFn ('add-money')

     const newBlance = Number (cruentBlace) + Number (addMoney)
     console.log(newBlance);
     
     //pin 
     const pin = AllValueFn ('add-pin')
     if ( pin.length !=4) {
         
         alert ('invalid pin,Enter 4 digit pin')
         
        }else {
            setBlanceFn (newBlance)

            alert('Add money sucseds')
        }
    
    function setBlanceFn (value) {
        
        document.getElementById ('right-blance').innerText = value
        
    }

    
})