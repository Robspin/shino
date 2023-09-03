const button = document.getElementById('showButton')
const input = document.getElementById('amount')

function showHiddenPassword() {
    input.type = input.type === 'text' ? 'password' : 'text'
    button.innerHTML = input.type === 'text' ? 'HIDE' : 'SHOW'
}

button.addEventListener('click', showHiddenPassword)
