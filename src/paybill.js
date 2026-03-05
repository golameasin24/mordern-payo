import { AllValueFn, AvailableBlance } from "./addMoney_mecin"

document.getElementById('payBill-btn').addEventListener('click', () => {

  // select sector
  const select_bank = AllValueFn('select-option')
  if (!select_bank || select_bank === "Select Option") {
    alert('Please Select any Sector')
    return
  }

  // bank account number
  const bankAcc = AllValueFn('payBillAccount-number')  // ✅ fixed id
  if (bankAcc.length != 11) {
    alert('Enter 11 digit number')
    return
  }

  // pay amount
  const currentBalance = Number(AvailableBlance('right-blance'))
  const payAmount = Number(AllValueFn('payBill-money'))

  if (!payAmount || payAmount <= 0) {
    alert('Enter a valid amount')
    return
  }

  if (payAmount > currentBalance) {
    alert('Insufficient balance')
    return
  }

  const newBalance = currentBalance - payAmount

  // pin
  const pin = AllValueFn('payBill-pin')
  if (pin.length != 4) {
    alert('invalid pin, Enter 4 digit pin')
    return
  }

  // set balance
  document.getElementById('right-blance').innerText = newBalance
  alert('Bill paid successfully')




// get tranaction

   const setTransID1  = (id) => {

      document.getElementById ('trans1p').innerText = id
      document.getElementById ('trans11p').innerText = id

    }
  
    setTransID1 (`Send Mone ${payAmount} Taka`)




    const setTransID2  = (id) => {
      document.getElementById ('trans2p').innerText = id
      document.getElementById ('trans22p').innerText = id
   
    }
  
    setTransID2 (` Phone: ${bankAcc} number`)


    
    
    
    const setTransID3  = (id) => {
        document.getElementById ('trans3p').innerText = id
        document.getElementById ('trans33p').innerText = id
    }
    setTransID3(`Bangladesh Time at ${new Date().toLocaleTimeString()}`)
    
    
            const setTransID4  = (id) => {
             document.getElementById ('trans4p').innerText = id
             document.getElementById ('trans44p').innerText = id
            }
      
            setTransID4 (`Crruent Blance ${newBalance} Taka`)
})