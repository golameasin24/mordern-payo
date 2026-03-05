import { AllValueFn } from "./addMoney_mecin"

document.getElementById ('get-bonus').addEventListener ('click', ()=> {
 document.getElementById ('sec1').classList.add ('hidden')
  document.getElementById ('sec2').classList.add ('hidden')
  document.getElementById ('sec3').classList.add ('hidden')
  document.getElementById ('sec4').classList.add ('hidden')
 document.getElementById ('sec5').classList.add ('hidden')
 document.getElementById ('sec6').classList.remove ('hidden')


     
})


document.getElementById ('get_bonus').addEventListener ('click' , () => {
    
const copun = AllValueFn ('copun')
        const blacne = document.getElementById('right-blance').innerText
        const bonus = 100;
        if (!copun) {
             
            alert ('No Copun, please Enter copun')
            return;
        }
        const newBlance =   Number (bonus) + Number (blacne)
        if (copun === 'Developer Easin'){

            alert ('You have got Bonus 100 Taka')
            
        }else {
            
            alert ('Invalid copun')
        }
        
        const setBlance = (id) => {
            
           document.getElementById ('right-blance').innerText = id
        }
        setBlance (newBlance)
})

document.getElementById ('icon').addEventListener ('click', ()=> {
     const copunId= document.getElementById ('easin')
     const id = copunId.classList.contains ('hidden')
     if(id){

        copunId.classList.remove ('hidden')
     }else {
        copunId.classList.add('hidden')

     }
})

//  with draw history 


document.getElementById ('history1').addEventListener ('click', ()=> {
   const deatails = document.getElementById ('details1')
   const id = deatails.classList.contains ('hidden')
   if (!id) {

      deatails.classList.add ('hidden')
   }else {

       deatails.classList.remove ('hidden')
   }
})


//  transfer hestory

document.getElementById ('history2').addEventListener ('click', ()=> {
   const deatails = document.getElementById ('details2')
   const id = deatails.classList.contains ('hidden')
   if (!id) {

      deatails.classList.add ('hidden')
   }else {

       deatails.classList.remove ('hidden')
   }
})


// paybill hestory 


document.getElementById ('history3').addEventListener ('click', ()=> {
   const deatails = document.getElementById ('details3')
   const id = deatails.classList.contains ('hidden')
   if (!id) {

      deatails.classList.add ('hidden')
   }else {

       deatails.classList.remove ('hidden')
   }
})

// time seting

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('time1').innerText = new Date().toLocaleDateString(undefined, options);

document.getElementById('time2').innerText = new Date().toLocaleDateString(undefined, options);

document.getElementById('time3').innerText = new Date().toLocaleDateString(undefined, options);