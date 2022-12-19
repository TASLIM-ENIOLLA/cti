import {API} from '/api'
import Header from '/components/pages/Header'
import Banner from '/components/pages/Banner'
import Footer from '/components/pages/Footer'
import {Fragment, useState, useEffect} from 'react'

export default function Courses(){
	return (
		<Fragment>
			<Header className = 'bg-white' />
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
						<div className = 'row'>{coursesList.map(({title, icon, query}, index) => (
							<div className = 'col-12 col-md-6 col-lg-4 mb-5' key = {query}>
								<div title = {title} className = {`py-5 px-4 rounded-2x shadow`}>
									<img src = {icon} className = 'mb-4' width = '55' />
									<div className = 'fo-s-15 mb-4 bold text-capitalize one-line'>
										{title}
									</div>
									<div className = 'card-subtitle-height triple-line text-sentence mb-4'>
										lorem ipsum dolor sit amet consectuer lorem ipsum dolor sit amet consectuer lorem ipsum dolor sit amet consectuer lorem ipsum dolor sit amet consectuer
									</div>
									<div>
										<button className = 'py-3 bold text-white letter-spacing-1 border-0 bg-teal btn d-block w-100 text-capitalize'>
											register
										</button>
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
/*
<div className = 'col-12 col-md-6 col-lg-4 mb-5' key = {query}>
	<div title = {title} className = {`py-5 px-4 rounded-2x shadow`}>
		<img src = {icon} className = 'mb-4' width = '55' />
		<div className = 'fo-s-15 mb-4 bold text-capitalize one-line'>
			{title}
		</div>
		<div className = 'card-subtitle-height triple-line text-sentence'>
			{subtitle}
		</div>
	</div>
</div>
*/