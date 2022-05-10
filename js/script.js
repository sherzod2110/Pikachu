// Form elementlarni chaqirib olish
let elFormContact = $(".js-add-contact-form");
let elNameInput = $(".js-name-input", elFormContact);
let elSurnameInput = $(".js-surname-input", elFormContact);
let elRelationsSelect = $(".js-relation-select", elFormContact);
let elTelInput = $(".js-telephone-input", elFormContact);

// Natijalar
let elAddedContact = document.querySelector(".js-contacts-list");

// Contacts array
let contacts = [];

// Formdan arrayga abyektni push qilish
let createContactObject = function(name, surname, relation, telephone) {
  // Obyektni arrayga joylash
  contacts.push({
    name,
    surname,
    relation,
    telephone,
  })
} 

// Arrayni liga append qilish
let appendElementFromContacts = function() {
  for(let i = 0; i < contacts.length; i++) {

    let elNewList = createElement("li", "mb-3 d-flex flex-column p-3 border border-2 border-primary rounded-3");

    let elNewContactName = createElement("p", "", contacts[i].name);

    let elNewContactSurname = createElement("p", "", contacts[i].surname);

    let elNewContactRelation = createElement("p", "", contacts[i].relation);

    let elNewContactNumber = createElement("a", "", contacts[i].telephone);
    elNewContactNumber.href = `tel:${contacts[i].telephone}`;

    elNewList.append(elNewContactName, elNewContactSurname, elNewContactRelation, elNewContactNumber);

    elAddedContact.append(elNewList);
  }
} 

let clearInuptFields = function() {
  elNameInput.value = "";
  elSurnameInput.value = "";
  elTelInput.value = "";

  elNameInput.focus();
}
elNameInput.focus();

// Formni eshitish
elFormContact.addEventListener("submit", function(evt) {
  evt.preventDefault();
  elAddedContact.innerHTML = "";

  // Form valuelaeini olish
  let name = elNameInput.value.trim();

  if (elNameInput.value == "") {
    return;
  }

  let surname = elSurnameInput.value.trim();
  let relation = elRelationsSelect.value;
  let telephone = elTelInput.value.trim();

  createContactObject(name, surname, relation, telephone);
  appendElementFromContacts();
  clearInuptFields();
  // console.log(contacts);
})
