import {API} from '/api'
import Image from 'next/image'
import Header from '/components/pages/Header'
import Banner from '/components/pages/Banner'
import Footer from '/components/pages/Footer'
import {Fragment, useState, useEffect} from 'react'

export default function Courses(){
	return (
		<Fragment>
			<Header />
			<CoursesComponent />
			<Footer />
		</Fragment>
	)
}

function CoursesComponent(){
	const [coursesList, setCoursesList] = useState([])

	useEffect(() => {
		fetch(API.COURSES)
		.then(e => e.json())
		.then(data => setCoursesList(data))
	}, [])

	return (
		<section className = 'bg-white py-5'>
			<div className = 'container'>
				<div className = 'row'>
					<div className = 'col-12 my-5 text-center'>
						<h1 className = 'text-capitalize text-dark bold'>our courses</h1>
						<div className = 'text-sentence fo-s-15 text-muted col-lg-6 mx-auto p-0'>
							free certificates and flexible lesson sessions
						</div>
					</div>
					<div className = 'col-12 mb-5'>
						<div className = 'row'>{coursesList.map(({title, subtitle, icon, query}, index) => (
							<div className = 'col-12 col-md-6 col-lg-4 mb-5' key = {query}>
								<div title = {title} className = {`py-4 px-4 shadow rounded-2x h-100`}>
									<Image alt = {title} src = {icon} className = 'my-4' height = '55' width = '55' />
									<div className = 'fo-s-15 mb-4 bold text-capitalize one-line'>
										{title}
									</div>
									<div className = 'card-subtitle-height text-sentence mb-4'>
										{subtitle}
									</div>
								</div>
							</div>
						))}</div>
					</div>
				</div>
			</div>
		</section>
	)
}