const DoneButton = () => {
  const doneButton = document.createElement('button')

  doneButton.classList.add('check-button')
  doneButton.innerText = 'concluir'

  doneButton.addEventListener('click', completeTask)

  return doneButton
}

const completeTask = (event) => {
  const doneButton = event.target
  const taskDone = doneButton.parentElement

  taskDone.classList.toggle('done')
}

export default DoneButton