import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useEffect, useRef, useState} from 'react'

export default function Header({...className}){
	const {asPath} = useRouter()
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
				<div className = 'row a-i-c j-c-space-between py-3 py-lg-4'>
					<div className = 'col-auto'>
						<Link href = '/'>
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
						<button className = 'border-0 btn py-0 bg-clear'>
							<span className = 'bi-border-width fa-2x'></span>
						</button>
					</div>
				</div>
			</div>
			<div className = 'container-fluid vw-100 position-fixed top-0 left-0 z-index-20 bg-dark-lucent'>
			</div>
			<style jsx>{`
				.bg-white-lucent{
					background: rgba(255, 255, 255, ${asPath === '/' ? transparencyIndex : '1'});
					box-shadow: 0px 0px ${((transparencyIndex / .9) * 9)}px gainsboro;
				}
				.z-index-10{
					z-index: 10;
				}
				.z-index-20{
					z-index: 20;
				}
				.bg-dark-lucent{
					background: rgba(0,0,0,.5);
				}
			`}</style>
		</header>
	)
}
