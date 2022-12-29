let mobileMenu = document.getElementById('mobile-menu');
let mobileMenuButtonOpen = document.getElementById('open-mobile-menu');
let mobileMenuButtonClose = document.getElementById('close-mobile-menu');

mobileMenuButtonOpen.addEventListener('click', function(){
    mobileMenu.classList.add('active');
    mobileMenuButtonOpen.classList.add('hidden');
});
mobileMenuButtonClose.addEventListener('click', function(){
    mobileMenu.classList.remove('active');
    mobileMenuButtonOpen.classList.remove('hidden')
})