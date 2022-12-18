import {useEffect, useRef, useState} from 'react'

export default function Header({setHeaderHeight}){
	const headerComponent = useRef()
	const [transparencyIndex, setTransparencyIndex] = useState(0)

	useEffect(() => {
		const headerHeight = Math.ceil(headerComponent.current.getBoundingClientRect().height)
		setHeaderHeight(headerHeight)

		window.onscroll = () => {
			const {scrollY: windowScrollY} = window
			
			if(windowScrollY <= headerHeight)
				setTransparencyIndex(windowScrollY / headerHeight)
			else
				setTransparencyIndex(1)
		}
	}, [])

	return (
		<header ref = {headerComponent} className = 'position-sticky transit top-0 left-0 bg-white-lucent z-index-10'>
			<div className = 'container py-1'>
				<div className = 'row a-i-c j-c-space-between py-3 py-md-4'>
					<div className = 'col-auto'>
						<div className = 'row a-i-c'>
							<div className = 'col-auto'>
								<button className = 'border-0 bg-clear'>
									<img src = '/icons/menu.png' width = '25' />
								</button>	
							</div>
							<div className = 'col-auto'>
								<a href = '#home'>
									<img src = '/vercel.svg' width = '90' />
								</a>	
							</div>
						</div>
					</div>
					<div className = 'col-auto col-d-none col-md-d-block'>
						<a href = '#home' className = 'mx-4 text-capitalize d-inline-block'>home</a>
						<a href = '#about' className = 'mx-4 text-capitalize d-inline-block'>about</a>
						<a href = '#courses' className = 'mx-4 text-capitalize d-inline-block'>courses</a>
						<a href = '#pricing' className = 'mx-4 text-capitalize d-inline-block'>pricing</a>
						<a href = '#contact' className = 'mx-4 text-capitalize d-inline-block'>contact</a>
					</div>
					<div className = 'col-auto'>
						<button className = 'btn py-2 bg-teal text-capitalize text-white'>view courses</button>
					</div>
				</div>
			</div>
			<style jsx>{`
				.bg-white-lucent{
					background: rgba(255, 255, 255, ${transparencyIndex});
					box-shadow: 0px 0px ${((transparencyIndex / .9) * 5)}px gainsboro;
				}
				.z-index-10{
					z-index: 10;
				}
			`}</style>
		</header>
	)
}
