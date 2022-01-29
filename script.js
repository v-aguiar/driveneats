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


