const DeleteButton = () => {
  const deleteButton = document.createElement('button')

  deleteButton.classList.add('check-button')
  deleteButton.innerText = 'deletar'

  deleteButton.addEventListener('click', deleteTask)

  return deleteButton
}

const deleteTask = (event) => {
  const deleteButton = event.target
  const deleteTask = deleteButton.parentElement

  deleteTask.remove()

  return deleteButton
}

export default DeleteButton