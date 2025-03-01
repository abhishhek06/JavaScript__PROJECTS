function changebackground(color) {
  document.body.style.backgroundColor = color;
}
const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', () => {
  
  const currentColor = document.body.style.backgroundColor;
  if(!currentColor || currentColor == 'white') {
    changebackground('black');
    themeButton.innerText = 'Light Mode';
    document.getElementById('main').style.color = "white";
    
  } else {
    changebackground('white');
    themeButton.innerText = 'Dark mode';
    document.getElementById('main').style.color = "black";
  }
});