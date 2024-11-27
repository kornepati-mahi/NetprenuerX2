
let menubtn = document.getElementById('menu');
let closebtn = document.getElementById('close');
let items = document.querySelector('.items');
menubtn.addEventListener('click', () => {
    items.style.display = 'flex';  
    closebtn.style.display = 'block';  
    menubtn.style.display = 'none';  
});
closebtn.addEventListener('click', () => {
    items.style.display = 'none';
    closebtn.style.display = 'none';  
    menubtn.style.display = 'block';  
});
