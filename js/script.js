const btn = document.querySelector('.addBtn')
const input = document.querySelector('#toDoEl')
const list = document.querySelector('.list')

function addTask ()  {

    if(input.value.trim() === '') {
        return;
    }

    const newTask = document.createElement('div')
    newTask.innerText = input.value
    newTask.classList.add('list_item')

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'x'
    deleteButton.classList.add('delete_Btn')

    newTask.appendChild(deleteButton)

    deleteButton.addEventListener('click', function (){
        newTask.remove()
    })

    list.appendChild(newTask)

    input.value = ''
}

list.addEventListener('click', function (e) {
    let isTargetListItem = e.target.classList.contains('list_item');
    let isTargetChecked = e.target.classList.contains('TitleChecked');
    if (isTargetListItem && !isTargetChecked) {
        e.target.classList.add('TitleChecked')
    } else if (isTargetChecked) {
        e.target.classList.remove('TitleChecked')
    }
})

btn.addEventListener('click', addTask )

input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
       addTask()
    }
})
