const listBtn=document.getElementById('listBtn');
const list=document.getElementById('list');
const doTitle=document.querySelectorAll('dt');




doTitle.forEach(item => {
    item.addEventListener('click', () => {
        item.nextElementSibling.classList.toggle('hidden');
    });
});



listBtn.addEventListener('click',() => {
    // alert('Are You Ready Bro!!!!');
    list.classList.toggle('hidden'); 
})

// for (let i=0; i < doTitle.length; i++){
//     doTitle[i].classList.add('uppercase');
// }




console.log('Hello World');

// alert('Are you Ready!!!')