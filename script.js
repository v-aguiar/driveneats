const dishesCards = document.querySelectorAll(".dishes .card")
const drinksCards = document.querySelectorAll(".drinks .card")
const dessertsCards = document.querySelectorAll(".desserts .card")
const checkoutButton = document.querySelector(".bottom-bar .btn")

function getDishCard(dishCard) {

  dishesCards.forEach(card => {
    if((card.classList.contains("--selectedCard")) === true) {
      card.classList.remove("--selectedCard")
    }

    for(let i = 0; i < card.children.length; i++) {
      if(card.children[i].classList.contains("card__icon") === true) {
        card.removeChild(card.children[i])
      }
    }
  })

  dishCard.classList.add("--selectedCard")

  addGreenIcon(dishCard)

  areAllCardsChecked()
}

function getDrinkCard(drinkCard) {

  drinksCards.forEach(card => {
    if((card.classList.contains("--selectedCard")) === true) {
      card.classList.remove("--selectedCard")
    }

    for(let i = 0; i < card.children.length; i++) {
      if(card.children[i].classList.contains("card__icon") === true) {
        card.removeChild(card.children[i])
      }
    }
  })

  drinkCard.classList.add("--selectedCard")

  addGreenIcon(drinkCard)

  areAllCardsChecked()
}

function getDessertCard(dessertCard) {

  dessertsCards.forEach(card => {
    if((card.classList.contains("--selectedCard")) === true) {
      card.classList.remove("--selectedCard")
    }

    for(let i = 0; i < card.children.length; i++) {
      if(card.children[i].classList.contains("card__icon") === true) {
        card.removeChild(card.children[i])
      }
    }
  })

  dessertCard.classList.add("--selectedCard")

  addGreenIcon(dessertCard)

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

// *************** Modal Functions *********************

const modal = document.getElementById("modal")
const modalConfirmButton = document.querySelector(".modal-card__btn--confirm")

function openModal(message) {
  modal.classList.remove("--disabled")

  modalConfirmButton.setAttribute("href", `https://wa.me/5577991468323?text=${message}`)
}

function closeModal() {
  modal.classList.add("--disabled")

  modalConfirmButton.removeAttribute("href")
}

function changeModalText(transactionData) {
  document.querySelector("#modal .--plate").innerText = transactionData.plate
  document.querySelector("#modal .--plate-price").innerText = transactionData.platePrice
  document.querySelector("#modal .--drink").innerText = transactionData.drink
  document.querySelector("#modal .--drink-price").innerText = transactionData.drinkPrice
  document.querySelector("#modal .--dessert").innerText = transactionData.dessert
  document.querySelector("#modal .--dessert-price").innerText = transactionData.dessertPrice

  document.querySelector("#modal .--total-price").innerText = `R$ ${transactionData.totalPrice}`
}

// **************** Get User Data *********************

function getUserData() {
  // Put all needed data into one array
  const data = document.querySelectorAll('.--selectedCard .card__title, .--selectedCard .card__price')

  // Separate data into each needed element
  const plate = data[0].innerHTML
  const platePrice = data[1].textContent.split(" ")[1]
  const drink = data[2].innerHTML
  const drinkPrice = data[3].textContent.split(" ")[1]
  const dessert = data[4].innerHTML
  const dessertPrice = data[5].textContent.split(" ")[1]

  // Get name and address
  let name = ''
  let address = ''
  let validateData = false
  // make sure name and address are !== null
  do {
    name = prompt("Qual o seu nome?")
    address = prompt("Qual o seu endereço?", "Rua , Nº , Bairro:")

    validateData = ((name !== null) && (name !== '') && (address !== null) && (address !== 'Rua , Nº , Bairro:'))

  } while(!validateData)

  const totalPrice = parseFloat((platePrice).replace(",", ".")) + parseFloat((drinkPrice).replace(",", ".")) + parseFloat((dessertPrice).replace(",", "."))

  const transactionData = {
    plate: plate,
    platePrice: platePrice,
    drink: drink,
    drinkPrice: drinkPrice,
    dessert: dessert,
    dessertPrice: dessertPrice,
    totalPrice: totalPrice.toFixed(2).toString().replace(".", ","),
    name: name,
    address: address
  }

  formatMessage(transactionData)
  changeModalText(transactionData)
}

// ********************* Format Message *********************

function formatMessage(transactionData) {
  const message = encodeURIComponent(`Olá, gostaria de fazer o pedido:
  - Prato: ${transactionData.plate}
  - Bebida: ${transactionData.drink}
  - Sobremesa: ${transactionData.dessert}
  Total: R$ ${transactionData.totalPrice}
  
  Nome: ${transactionData.name}
  Endereço: ${transactionData.address}
  `)

  openModal(message)
}

// ******************* Add Green icon *********************

function addGreenIcon(card) {
  const icon = document.createElement('img')
  icon.setAttribute('src', './assets/checkmark-icon.svg')
  icon.setAttribute('alt', 'Checkmark icon')
  icon.classList.add('card__icon')

  card.appendChild(icon)
}