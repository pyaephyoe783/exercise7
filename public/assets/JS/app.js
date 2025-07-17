const listBtn=document.getElementById('listBtn');
const list=document.getElementById('list');
const doTitle=document.getElementById('doTitle')
const doBody=document.getElementById('doBody');
const capital=document.querySelectorAll('dt');




capital.forEach(item => {
    item.addEventListener('click', () => {
        item.nextElementSibling.classList.toggle('hidden');
    });
});



listBtn.addEventListener('click',() => {
    // alert('Are You Ready Bro!!!!');
    list.classList.toggle('hidden'); 
})

// for (let i=0; i < capital.length; i++){
//     capital[i].classList.add('uppercase');
// }




console.log('Hello World');

// alert('Are you Ready!!!')