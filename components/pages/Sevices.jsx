import {API} from '/api'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import Loaddeer from '/components/utils/Loaddeer'

export default function Sevices(){
	const [servicesList, setServicesList] = useState()

	useEffect(() => {
		fetch(API.SERVICES)
		.then(e => e.json())
		.then(data => setServicesList(data))
	}, [])

	return (
		<section id = 'services' className = 'bg-white py-5'>
			<div className = 'container'>
				<div className = 'row'>
					<div className = 'col-12 my-5 text-center'>
						<h1 className = 'text-capitalize text-dark bold'>our services</h1>
						<div className = 'text-sentence fo-s-15 text-muted col-lg-6 mx-auto p-0'>our team of tech savvys help educated and instill good programming knowledge and ethics in our tutees</div>
					</div>
					<div className = 'col-12'>{
						typeof servicesList === 'undefined'
						? <Loaddeer title = 'loading services' className = 'pb-4' />
						: (
							<div className = 'row'>{servicesList.map(({title, subtitle, icon, query}, index) => (
								<div className = 'col-12 col-md-6 col-lg-4 mb-5' key = {query}>
									<div title = {title} className = {`py-5 px-4 rounded-2x h-100 shadow`}>
										<Image alt = {title} src = {icon} className = 'mb-4' width = '55' height = '55' />
										<div className = 'fo-s-15 mb-4 bold text-capitalize one-line'>
											{title}
										</div>
										<div className = 'text-sentence'>
											{subtitle}
										</div>
									</div>
								</div>
							))}</div>
						)
					}</div>
				</div>
			</div>
			<style jsx>{`
				.card-subtitle-height {height: 60px}
			`}</style>
		</section>
	)
}