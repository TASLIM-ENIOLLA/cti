import {API} from '/api'
import {useState, useEffect} from 'react'

export default function Sevices(){
	const CardBGs = ['yellow', 'pink', 'blue']
	const [servicesList, setServicesList] = useState([])

	useEffect(() => {
		fetch(API.SERVICES)
		.then(e => e.json())
		.then(data => setServicesList(data))
	}, [])

	return (
		<section className = 'bg-white py-5'>
			<div className = 'container'>
				<div className = 'row'>
					<div className = 'col-12 my-5 text-center'>
						<h1 className = 'text-capitalize text-dark bold'>our services</h1>
						<div className = 'text-sentence fo-s-15 text-muted col-lg-6 mx-auto p-0'>our team of tech savvys help educated and instill good programming knowledge and ethics in our tutees</div>
					</div>
					<div className = 'col-12'>
						<div className = 'row'>{servicesList.map(({title, subtitle, icon, query}, index) => (
							<div className = 'col-12 col-sm-6 col-lg-4 mb-5' key = {query}>
								<div title = {title} className = {`py-5 px-4 bg-light-${CardBGs[Math.floor(Math.random() * 3)]} rounded-2x shadow`}>
									<img src = {icon} className = 'mb-4' width = '55' />
									<div className = 'fo-s-15 mb-4 bold text-capitalize one-line'>
										{title}
									</div>
									<div className = 'card-subtitle-height text-sentence mb-4'>
										{subtitle}
									</div>
									<a href = {`/learn-more/${query}`} className = 'btn py-2 bg-teal text-capitalize text-white'>learn more</a>
								</div>
							</div>
						))}</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.card-subtitle-height   {height: 60px}
				.bg-light-yellow        {background: #ffd179}
				.bg-light-pink          {background: #fad7d5}
				.bg-light-blue          {background: #d0ecf8}
			`}</style>
		</section>
	)
}