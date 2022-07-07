function createContact() {
  const contact = document.createElement('div')
  contact.classList.add('contact')

  const phoneNumber = document.createElement('p')
  phoneNumber.textContent = '📞 254 712 345 678'

  const address = document.createElement('p')
  address.textContent = '🏠 Chiromo Ln, Nairobi, Kenya'

  const restaurantLocation = document.createElement('img')
  restaurantLocation.src = '../dist/images/map.png'
  restaurantLocation.alt = 'Chocolate restaurant location'

  contact.appendChild(phoneNumber)
  contact.appendChild(address)
  contact.appendChild(restaurantLocation)

  return contact
}

function loadContact() {
  const main = document.getElementById('main')
  main.textContent = ''
  main.appendChild(createContact())
}

export default loadContact
