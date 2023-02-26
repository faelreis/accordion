const accordion = document.querySelectorAll('.js-accordion');
console.log(accordion);

accordion.forEach(acc => {
    acc.addEventListener('click', () =>{
        acc.parentElement.classList.toggle('active');
    });
});