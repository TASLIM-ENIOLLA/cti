import Link from 'next/link'
import {URL} from '/data/URL'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useEffect, useRef, useState} from 'react'

export default function Header(){
	const {asPath} = useRouter()
	const headerComponent = useRef()
	const [sideBarState, setSideBarState] = useState(false)
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
		<header ref = {headerComponent} className = {`position-sticky transit top-0 left-0 bg-white-lucent z-index-10`}>
			<div className = 'container'>
				<div className = 'row a-i-c j-c-space-between py-3'>
					<div className = 'col-auto'>
						<Link href = '/'>
							<img alt = 'logo' src = '/_codehub.png' width = '200' />
						</Link>	
					</div>
					<div className = 'col-d-none col-lg-d-block col-auto'>{URL.map(({name, path}, index) => (
						<Link key = {`${new Date().getTime()}-${index}`} href = {path} id = 'in-page-navigation' className = 'mx-4 text-capitalize d-inline-block'>
							{name}
						</Link>
					))}</div>
					<div className = 'col-d-none col-lg-d-block col-auto'>
						<Link href = '/courses' className = 'btn py-2 px-3 bg-teal rounded-2x text-capitalize text-white bold'>view courses</Link>
					</div>
					<div className = 'col-lg-d-none col-auto'>
						<button onClick = {() => setSideBarState(e => !e)} className = 'border-0 btn py-0 bg-clear'>
							<span className = 'bi-border-width fa-2x'></span>
						</button>
					</div>
				</div>
			</div>
			<div onClick = {() => setSideBarState(false)} className = {`container-fluid col-lg-d-none vw-100 position-fixed top-0 left-0 z-index-20 bg-dark-lucent ${
				sideBarState
				? 'animated fadeIn'
				: 'd-none'
			}`}>
				<div className = 'row'>
					<div className = {`col-11 bg-white vh-100 ${sideBarState ? 'animated slideInLeft' : ''}`} style = {{maxWidth: '300px'}}>
						<div className = 'row flex-column'>
							<div className = 'col-auto border-bottom py-3'>
								<div className = 'row a-i-c j-c-space-between'>
									<div className = 'col-auto'>
										<Link href = '/'>
											<Image alt = 'logo' src = '/vercel.svg' width = '90' height = '20' />
										</Link>
									</div>
									<div className = 'col-auto'>
										<button onClick = {() => setSideBarState(false)} className = 'border-0 btn py-0 bg-clear'>
											<span className = 'bi-x fa-2x'></span>
										</button>
									</div>
								</div>
							</div>
							<div className = 'col py-5'>{URL.map(({name, path}, index) => (
								<Link href = {path} key = {`${new Date().getTime()}-${index}`} className = 'fo-s-15 text-capitalize d-block w-100 mb-5 bold'>
									{name}
								</Link>
							))}
								<Link href = '/courses' className = 'btn py-2 px-3 bg-teal rounded-2x text-capitalize text-white bold'>
									view courses
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.bg-white-lucent{
					background: rgba(255, 255, 255, ${asPath === '/' ? transparencyIndex : '1'});
					box-shadow: 0px 0px ${asPath === '/' ? ((transparencyIndex / .9) * 9) : '9'}px gainsboro;
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
