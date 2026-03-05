import { getBlance, inputValueFn } from "./machin";


document.getElementById ('withdraw-btn').addEventListener ('click', ()=> {
    const mobailNumber =  inputValueFn ("agent-number")
    if (mobailNumber.length !== 11 ) {
        alert ('Please enter 11 digit number')
        return ;
    }
   
         function setBlance (value) {
           const currentBalance =  document.getElementById ('right-blance')
           currentBalance.innerText = value
         }

     const amount = Number ( inputValueFn ('amount'))
     const blance = getBlance ()
      const newBlance = blance - amount
    

      
      if (newBlance < 0) {
          
          alert ('Insuficent Blance')
          return;
          
        }
        
        const pinNumber = inputValueFn ('pin-number')
        if (pinNumber.length >=4  && newBlance > 0 ) {
            
            setBlance (newBlance)
             alert ('Withdraw Money Succesfully')
        }  else {

            alert ('Invalid pin')
        }
        
        
    // With Draw Transction
         
    const setTransID1  = (id) => {

      document.getElementById ('trans1w1').innerText = id
      document.getElementById ('trans1w').innerText = id

    }
  
    setTransID1 (`Send Mone ${amount} Taka`)




    const setTransID2  = (id) => {
      document.getElementById ('trans2w2').innerText = id
      document.getElementById ('trans2w').innerText = id
   
    }
  
    setTransID2 (` Vai ${mobailNumber} number`)


    
    
    
    const setTransID3  = (id) => {
        document.getElementById ('trans3w3').innerText = id
        document.getElementById ('trans3w').innerText = id
    }
    setTransID3(`Bangladesh Time at ${new Date().toLocaleTimeString()}`)
    
    
            const setTransID4  = (id) => {
             document.getElementById ('trans4w4').innerText = id
             document.getElementById ('trans4w').innerText = id
            }
      
            setTransID4 (`Crruent Blance ${newBlance} Taka`)
    
})

