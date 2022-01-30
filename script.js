const dishesCards = document.querySelectorAll(".dishes .card")
const drinksCards = document.querySelectorAll(".drinks .card")
const dessertsCards = document.querySelectorAll(".desserts .card")
const checkoutButton = document.querySelector(".bottom-bar .btn")

function getDishCard(dishCard) {

  dishesCards.forEach(card => {
    // console.log(card.classList)
    if((card.classList.contains("--selectedCard")) === true) {
      card.classList.remove("--selectedCard")
    }
  })

  dishCard.classList.add("--selectedCard")

  areAllCardsChecked()
}

function getDrinkCard(drinkCard) {

  drinksCards.forEach(card => {
    // console.log(card.classList)
    if((card.classList.contains("--selectedCard")) === true) {
      card.classList.remove("--selectedCard")
    }
  })

  drinkCard.classList.add("--selectedCard")

  areAllCardsChecked()
}

function getDessertCard(dessertCard) {

  dessertsCards.forEach(card => {
    // console.log(card.classList)
    if((card.classList.contains("--selectedCard")) === true) {
      card.classList.remove("--selectedCard")
    }
  })

  dessertCard.classList.add("--selectedCard")

  areAllCardsChecked()
}

function areAllCardsChecked() {
  const allCheckedCards = document.querySelectorAll(".card.--selectedCard")

  if(allCheckedCards.length === 3) {
    checkoutButton.disabled = false
    checkoutButton.classList.remove("--bg-grey")
    checkoutButton.classList.add("--bg-green")

    checkoutButton.innerHTML = 'Fechar pedido'
  }

}

// *************** Modal Functions

const modal = document.getElementById("modal")

function openModal() {
  modal.classList.remove("--disabled")
}

function closeModal() {
  modal.classList.add("--disabled")
}

function changeModalText(transactionData) {
  document.querySelector("#modal .--plate").innerText = transactionData.plate
  document.querySelector("#modal .--plate-price").innerText = transactionData.platePrice
  document.querySelector("#modal .--drink").innerText = transactionData.drink
  document.querySelector("#modal .--drink-price").innerText = transactionData.drinkPrice
  document.querySelector("#modal .--dessert").innerText = transactionData.dessert
  document.querySelector("#modal .--dessert-price").innerText = transactionData.dessertPrice

  document.querySelector("#modal .--total-price").innerText = `R$ ${transactionData.totalPrice.toString().replace(",", ".")}`

}

// **************** Get user

const users = []

function getUserData(data) {
  console.log(data)
  const plate = data[0].innerHTML
  const platePrice = data[1].textContent.split(" ")[1]
  const drink = data[2].innerHTML
  const drinkPrice = data[3].textContent.split(" ")[1]
  const dessert = data[4].innerHTML
  const dessertPrice = data[5].textContent.split(" ")[1]

  const name = prompt("Qual o seu nome?")
  const address = prompt("Qual o seu endereço?")
  const totalPrice = parseFloat((platePrice).replace(",", ".")) + parseFloat((drinkPrice).replace(",", ".")) + parseFloat((dessertPrice).replace(",", "."))

  const message = encodeURIComponent(`Olá, gostaria de fazer o pedido:
  - Prato: ${plate}
  - Bebida: ${drink}
  - Sobremesa: ${dessert}
  Total: R$ ${totalPrice}
  
  Nome: ${name}
  Endereço: ${address}
  `)

  // const user = [
  //   name,
  //   address,
  //   message
  // ]

  // users.push(user)
  // // console.log(users)'

  const transactionData = {
    plate: plate,
    platePrice: platePrice,
    drink: drink,
    drinkPrice: drinkPrice,
    dessert: dessert,
    dessertPrice: dessertPrice,
    totalPrice: totalPrice.toFixed(2)
  }

  changeModalText(transactionData)
  openModal(transactionData)
}

