const formDelete = document.querySelector('#form-delete')

formDelete.addEventListener('submit', (event) => {
  const confirmation = confirm('Deseja deletar este usuário?')

  if (!confirmation) {
    event.preventDefault()
  }
})
