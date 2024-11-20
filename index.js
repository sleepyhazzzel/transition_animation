const searchInput = document.getElementById('search-input')
const searchHandle = document.getElementById('search-handle')
const searchBtnHover = document.getElementById('search-btn-hover')

searchBtnHover.addEventListener('click', () => {
  searchBtnHover.style.display = 'none'
  searchInput.focus()
})

searchInput.addEventListener('focus', () => {
  searchHandle.classList.add('hide-handle')
  searchHandle.classList.remove('show-handle')
})

searchInput.addEventListener('blur', () => {
  searchInput.value = ''
  searchHandle.classList.add('show-handle')
  searchHandle.classList.remove('hide-handle')
  searchBtnHover.style.removeProperty('display')
})