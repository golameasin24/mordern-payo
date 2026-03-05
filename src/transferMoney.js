import { AllValueFn, AvailableBlance } from "./addMoney_mecin"

document.getElementById ('transferMoney-btn').addEventListener ('click', (e) => {
   e.preventDefault();
    // get number
    const transferNumber = AllValueFn ('transfer-number')
    const num = Number (transferNumber)
    if (  typeof num ==='string'  || transferNumber.length !== 11) {

       alert ('Invalid number')  
       return;
    }
    
    // get amount
    const  transferAmount = AllValueFn ('transfer-amount')
    const cruentBlance = AvailableBlance ('right-blance')
    const balance = Number (cruentBlance)
    const amount = Number (transferAmount)
    const newBlance = balance - amount;
    

     if (newBlance < 0) {{

          alert ("insuficent blance")
          return;
     }}


    // get pin
    const pinNumber = AllValueFn ('pin-number')
    if (pinNumber.length !== 4) {
      
        alert ('Invalid pin, please 4digit pin')
        return;
    }else {

        alert ('Send money succsessfully')
    }
    
    // meshin set blance
    const setBlance = (blance) => {
        
        document.getElementById ('right-blance').innerText = blance
            
    }
 

    setBlance (newBlance)

    // get transactions
    
    const setTransID1  = (id) => {

      document.getElementById ('trans1').innerText = id
      document.getElementById ('trans11').innerText = id

    }
  
    setTransID1 (`Send Mone ${amount} Taka`)




    const setTransID2  = (id) => {
      document.getElementById ('trans2').innerText = id
      document.getElementById ('trans22').innerText = id
   
    }
  
    setTransID2 (` Vai ${transferNumber} number`)


    
    
    
    const setTransID3  = (id) => {
        document.getElementById ('trans3').innerText = id
        document.getElementById ('trans33').innerText = id
    }
    setTransID3(`Bangladesh Time at ${new Date().toLocaleTimeString()}`)
    
    
            const setTransID4  = (id) => {
             document.getElementById ('trans4').innerText = id
             document.getElementById ('trans44').innerText = id
            }
      
            setTransID4 (`Crruent Blance ${newBlance} Taka`)

} )





const sec1 = document.getElementById('sec1')
const sec2 = document.getElementById('sec2')
const sec3 = document.getElementById('sec3')
const sec4 = document.getElementById('sec4')
const sec5 = document.getElementById('sec5')

function showSection(section) {

    sec1.classList.add('hidden')
    sec2.classList.add('hidden')
    sec3.classList.add('hidden')
    sec4.classList.add('hidden')
    sec5.classList.add('hidden')

    section.classList.remove('hidden')
}

document.getElementById('add_money').addEventListener('click', () => {
    showSection(sec1)
})

document.getElementById('with').addEventListener('click', () => {
    showSection(sec2)
})

document.getElementById('transferMoneyBtn').addEventListener('click', () => {
    showSection(sec3)
})

document.getElementById('transactions').addEventListener('click', () => {
    showSection(sec4)
})

document.getElementById('pay-bill-btn').addEventListener('click', () => {
    showSection(sec5)
})