const btnAdd = document.querySelector(".btn-add")
const btnCancel= document.querySelector('.cancel')
const btnAccept= document.querySelector('.accept')
const input = document.querySelector('.todo-input')
const inputPop = document.querySelector('.popup-input')
const ulList = document.querySelector('div ul')
const error = document.querySelector('.error-info')
const pop=document.querySelector('.popup')
const popInfo = document.querySelector('.popup-info')
let LI


// dodawanie zadania oraz opcji
const addNewTask = ()=>{
    if(input.value.length>0){
    // li
    const liEl = document.createElement('li')
    //div
    const divtools = document.createElement('div')
    divtools.classList.add('tools')
    //button complete
    const buttonC = document.createElement('button')
    buttonC.classList.add('complete')
    // i tick
    const iTick = document.createElement('i')
    iTick.classList.add('fas','fa-check')
    //button edit
    const btnE = document.createElement('button')
    btnE.classList.add('edit')
    btnE.textContent = "EDIT"
    //button delete
    const btnD = document.createElement('button')
    btnD.classList.add('delete')
    // i cross
    const iCross = document.createElement('i')
    iCross.classList.add('fas','fa-times')
    
    ulList.appendChild(liEl).textContent = input.value
    liEl.appendChild(divtools)
    divtools.appendChild(buttonC)
    buttonC.appendChild(iTick)
    divtools.appendChild(btnE)
    divtools.appendChild(btnD)
    btnD.appendChild(iCross)
    error.textContent=""
    input.value=''

    }
    else{
        error.textContent = "Wpisz treść zadania!"
    }
}
const closeEdit=()=>{
    pop.style.display='none'
    inputPop.value=''
}
const checkClick = (e) =>{
    if(e.target.matches('.complete')){
        const LI=e.target.closest('li')
        LI.classList.toggle('completed')
    }
    else if(e.target.matches('.edit')){
        LI=e.target.closest('li')
        pop.style.display='flex'
        inputPop.value=LI.firstChild.textContent
    }
    else if(e.target.matches('.delete')){
        ulList.removeChild(e.target.closest('li'))
        if(ulList.childElementCount==0){
            error.textContent="Brak zadań na liście"
        }
    }
}
const text=()=>{
    error.textContent=''
}
const newValueInputPop=()=>{
    if(inputPop.value!==''){
        LI.firstChild.textContent=inputPop.value
        pop.style.display='none'
        error.textContent='Zmiany zostały zapisane'
        setTimeout(text,3000)
    }
    else{
        popInfo.textContent="Wpisz treść zadania!"
    }
}
btnAdd.addEventListener('click', addNewTask)
ulList.addEventListener('click',checkClick)
btnCancel.addEventListener('click',closeEdit)
btnAccept.addEventListener('click', newValueInputPop)