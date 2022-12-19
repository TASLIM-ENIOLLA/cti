import Link from 'next/link'
import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'

export default function Header({...className}){
	const headerComponent = useRef()
	const [transparencyIndex, setTransparencyIndex] = useState(0)

	useEffect(() => {
		const headerHeight = Math.ceil(
			headerComponent
			.current
			.getBoundingClientRect()
			.height
		)

		window.addEventListener('scroll', () => {
			const {scrollY} = window
			
			if(scrollY <= headerHeight) setTransparencyIndex(scrollY / headerHeight)
			else setTransparencyIndex(1)
		})
	}, [])

	return (
		<header ref = {headerComponent} className = {`position-sticky transit top-0 left-0 bg-white-lucent z-index-10 ${className}`}>
			<div className = 'container'>
				<div className = 'row a-i-c j-c-space-between py-3'>
					<div className = 'col-auto'>
						<Link href = '#home'>
							<Image src = '/vercel.svg' width = '90' height = '20' />
						</Link>	
					</div>
					<div className = 'col-d-none col-lg-d-block col-auto'>
						<Link href = '#home' className = 'mx-4 text-capitalize d-inline-block'>home</Link>
						<Link href = '#about' className = 'mx-4 text-capitalize d-inline-block'>about</Link>
						<Link href = '#services' className = 'mx-4 text-capitalize d-inline-block'>services</Link>
						<Link href = '#courses' className = 'mx-4 text-capitalize d-inline-block'>courses</Link>
						<Link href = '#contact' className = 'mx-4 text-capitalize d-inline-block'>contact</Link>
					</div>
					<div className = 'col-d-none col-lg-d-block col-auto'>
						<Link href = '/courses' className = 'btn py-2 px-3 bg-teal rounded-2x text-capitalize text-white bold'>view courses</Link>
					</div>
					<div className = 'col-lg-d-none col-auto'>
						<button className = 'border-0 bg-clear'>
							<span className = 'bi-border-width fa-2x'></span>
						</button>
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
