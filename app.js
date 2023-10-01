function checkForm() {
  var fullName = document.querySelector('input[placeholder="Full Name"]').value;
  var phoneOrEmail = document.querySelector('input[placeholder="Phone or email"]').value;
  var username = document.querySelector('#username').value;
  var password = document.querySelector('#password').value;
  var category = document.querySelector('#category').value;
  var college = document.querySelector('#college .select-btn span').innerText.trim();
  var check = document.querySelector('#pill3');

  var searchResults = document.querySelectorAll('#college .options li');
  var collegeNotFoundMessage = document.getElementById('college-not-found');

  var signupButton = document.querySelector('.sinup_button a');

  

  if (check.checked && fullName && phoneOrEmail && username && password && category !== 'Select' && college !== 'Select School/College') {
    signupButton.classList.remove('disabled');
  } else {
    signupButton.classList.add('disabled');
  }

  // new college add button ***********************
  if (searchResults.length === 0) {
    collegeNotFoundMessage.style.display = 'block';
  } else {
    collegeNotFoundMessage.style.display = 'none';
  }
}

// this function is add new college 
function addNewCollege() {
  // Handle adding a new college here
  // You can implement the logic to add a new college based on your requirements
}

// Call checkForm whenever a form input changes
var formInputs = document.querySelectorAll('input, select');
formInputs.forEach(function(input) {
  input.addEventListener('input', checkForm);
});


// search school and collehe ****************
const wrapper = document.querySelector(".wrapper");
const selectBtn = wrapper.querySelector(".select-btn");
const searchInp = wrapper.querySelector("input");
const options = wrapper.querySelector(".options");

let countries = [
  "Indian Institute of Technology Bombay (IITB)", "Indian Institute of Science (IISC)",
  "Indian Institute of Technology Kharagpur (IITKGP)", 
  "Indian Institute of Technology Madras (IITM)", 
  "Indian Institute of Technology Delhi (IITD)",
  "AVIT"
];

function addCollege(selectedCollege) {
  options.innerHTML = "";
  countries.forEach(College => {
    let isSelected = College === selectedCollege ? "selected" : "";
    let li = `<li onclick="updateName(this)" class="${isSelected}">${College}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}
addCollege();

function updateName(selectedLi) {
  searchInp.value = "";
  addCollege(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInp.value.toLowerCase();
  arr = countries.filter(data => {
    return data.toLowerCase().startsWith(searchWord);
  }).map(data => {
    let isSelected = data === selectBtn.firstElementChild.innerText ? "selected" : "";
    return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
  }).join("");
  options.innerHTML = arr ? arr : ``;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));




function openPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function saveCollege() {
  const collegeName = document.getElementById('collegeName').value;
  const city = document.getElementById('city').value;

  // Handle saving the college details (you can customize this part)
  console.log('College Name:', collegeName);
  console.log('City:', city);

  // Close the popup
  closePopup();
}
