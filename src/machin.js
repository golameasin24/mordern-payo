
export const inputValueFn = (id) => {
  const phoneNumber = document.getElementById (id).value

   return phoneNumber
}


export function getBlance () {

         const currentBalance =  document.getElementById ('right-blance')
         const blance = currentBalance.innerText;
         return Number (blance)
}