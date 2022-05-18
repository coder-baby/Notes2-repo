const add=document.querySelector('.add')
const note=document.querySelector('.word')
const overLay=document.querySelector('.dark')

add.addEventListener('click',()=>{
    overLay.classList.add('show')
    note.classList.add('show')

})