document.querySelectorAll('#in-page-navigation').forEach(each => each.addEventListener('click', e => {
	const {hash} = e.target
	e.preventDefault()

	document.querySelector(hash).scrollIntoView({behavior: 'smooth'})
}))