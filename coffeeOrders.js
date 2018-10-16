

const COFFEE_ORDERS_URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"


function getOrders() {

    $.get(COFFEE_ORDERS_URL,function(result){
      getOrders()
   })
}
function postNewOrder(arg1, arg2){
  fetch(COFFEE_ORDERS_URL, {
    method: 'POST',
    body: JSON.stringify({
      emailAddress: arg1,
      coffee: arg2
    }),
    headers:{
      'Content-Type':'application/json'
      }
    }
  )
  .then(res=> res.json())
  .then(response => console.log(response))
}

 //  })
 //  .then(function(display) {
 //   return display.json()
 // }).then(function(e){
 //   let orders = e.COFFEE_ORDERS_URL.map(function(list) {
 //     return
 //     `
 //     <li>
 //       <span>${list.emailAddress}</span>
 //       <span>${list.coffee}</span>
 //     </li>
 //     `
 //   })

   //lists.html = orders.join('')
 //
 //   console.log(show)
 // })
 postNewOrder()
