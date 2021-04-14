import DeleteButton from './components/DeleteTask.js'
import DoneButton from './components/CompleteTask.js'

const newItem = document.querySelector('[data-form-button]')

const createTask = (event) => {
  event.preventDefault()

  const input = document.querySelector('[data-form-input]')
  const list = document.querySelector('[data-list]')
  const value = input.value

  const task = document.createElement('li')
  const content = `<p class="content">${value}</p>`

  task.classList.add('task')
  task.innerHTML = content

  task.appendChild(DoneButton())
  task.appendChild(DeleteButton())
  list.appendChild(task)

  input.value = ''
}

newItem.addEventListener('click', createTask)