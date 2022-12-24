import {useEffect} from 'react'

export function useComponentVisible(callback, componentRef, percentPadding = .1){
	const onScroll = e => {
		let isVisible = false

		const padding = percentPadding <= 1 && percentPadding >= 0 ? percentPadding : .1
		const windowHeight = window.screen.height
		const elementOffsetFromPageTop = componentRef.current.getBoundingClientRect().top

		if(elementOffsetFromPageTop > (windowHeight * padding) && elementOffsetFromPageTop < (windowHeight * (1 - padding))) isVisible = true
		else isVisible = false

		if(typeof callback === 'function') callback(isVisible, componentRef.current)
	}

	useEffect(() => {
		const listeners = ['load', 'scroll']

		listeners.forEach((each) => window.addEventListener(each, onScroll))

		return () => listeners.forEach((each) => window.removeEventListener(each, onScroll))
	}, [])
}

