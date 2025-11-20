// // منو همبرگری
function ToggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// دارک مود
const toggleDark = document.getElementById('toggleDark');

toggleDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // تغییر آیکون
    if(document.body.classList.contains('dark-mode')){
        toggleDark.classList.remove('bi-brightness-high-fill');
        toggleDark.classList.add('bi-moon');
    } else {
        toggleDark.classList.remove('bi-moon');
        toggleDark.classList.add('bi-brightness-high-fill');
    }
});

const toggleMobile = document.getElementById('toggleDarkMobile');

toggleMobile.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
    this.classList.toggle('bi-moon');
});

