function getDataUser(){
  const userName = document.getElementById('name').value;
  const userSurname = document.getElementById('surname').value;
  const ABOUT_ME = document.getElementById('form__area').value;
  
  // forming object
  const userData = {
    name: `${userName}`,
    surname: `${userSurname}`,
    about_me: `${ABOUT_ME}`

  }
  return userData
}

// sub = addEventListener('click', getname);

const TARGET_BTN = document.getElementById('sub');
TARGET_BTN.addEventListener('click', (e)=>{
  e.preventDefault();
  const DATA = getDataUser();
  console.log(DATA)
})




