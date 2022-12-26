document.querySelectorAll('#in-page-navigation').forEach(each => each.addEventListener('click', e => {
	e.preventDefault()
	const {hash} = e.target

	document.querySelector(hash).scrollIntoView({behavior: 'smooth'})
}))