const tacTrigger = document.querySelector('.input-checkbox');
let tacClickCount = 0;
let tacCondition = false;
const formSubmitButton = document.querySelector('.submit-button');
const warningPanel = document.querySelector('.warning-div');
const warningSwitchButton = document.querySelector('.warning-button');

tacTrigger.addEventListener('click', () => {
  tacClickCount++;
  tacCondition = tacClickCount % 2 === 1;

  console.log(`clickcount: ${tacClickCount}, taccondition: ${tacCondition}`);
});

formSubmitButton.addEventListener('click', () => {
  const formEmail = document.querySelector('.form-email').value;
  const fNameInput = document.querySelector('.form-fname').value;
  const sNameInput = document.querySelector('.form-sname').value;
  const formPassword = document.querySelector('.form-password').value;

  if (!tacCondition) {
    warningPanel.classList.replace('inactive', 'active');
  } else if (formEmail.includes('.') && formEmail.includes('@') && isNaN(fNameInput) && isNaN(sNameInput)) {
    const userData = {
      email: formEmail,
      password: formPassword
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Registration successful');
    window.location.href = './index.html';
  } else if (!formEmail.includes('.')) {
    alert('Email format is wrong');
  } else if (!isNaN(fNameInput) || !isNaN(sNameInput)) {
    alert('Name shouldn\'t have numbers');
  } else {
    alert('Undefined Reason');
  }
});

warningSwitchButton.addEventListener('click', () => {
  warningPanel.classList.replace('active', 'inactive');
});

let check = document.querySelector('.bot-submit');
let modalInput = document.querySelector('.modal-input');
function checkIfBot() {
  // Отримуємо значення з інпуту
  let writtenText = document.getElementById("textInput").value;

  // Задаємо правильний текст для порівняння
  let rightText = '93715468';

  // Порівнюємо введений текст з правильним
  if (writtenText === rightText) {
    // Якщо текст правильний, виводимо алерт
    alert("Ви пройшли перевірку!");
    return true;
  } else {
    // Якщо текст неправильний, виводимо алерт
    alert("Повторіть спробу. Неправильний текст.");
    return false;
  }
}
