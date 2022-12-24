import {API} from '/api'
import Image from 'next/image'
import Header from '/components/pages/Header'
import Footer from '/components/pages/Footer'
import Loaddeer from '/components/utils/Loaddeer'
import {Fragment, useState, useEffect, useRef} from 'react'
import {useComponentVisible} from '/my_modules/component-visible'

export default function Courses(){
	return (
		<Fragment>
			<Header />
			<CoursesComponent />
			<Footer />
		</Fragment>
	)
}

function VisibleComponent({children, className, ...otherProps}){
	const childrenComponentRef = useRef()
	const ChildrenComponent = () => children

	useComponentVisible((isVisible, element) => (
		isVisible
		? element.classList.add('animated') || element.classList.add('slideInUp')
		: element.classList.remove('animated') || element.classList.remove('slideInUp')
	), childrenComponentRef, .4)

	return (
		<div ref = {childrenComponentRef} {...otherProps}>
			{children}
		</div>
	)
}

function CoursesComponent(){
	const [coursesList, setCoursesList] = useState()

	useEffect(() => {
		fetch(API.COURSES)
		.then(e => e.json())
		.then(data => setCoursesList(data))
	}, [])

	return (
		<section className = 'bg-white pb-5'>
			<div className = 'container'>
				<div className = 'row'>
					<div className = 'col-12 my-5 text-center'>
						<h1 className = 'text-capitalize text-dark bold'>our courses</h1>
						<div className = 'text-sentence fo-s-15 text-muted col-lg-6 mx-auto p-0'>
							free certificates and flexible lesson sessions
						</div>
					</div>
					<div className = 'col-12 mb-5'>{
						typeof coursesList === 'undefined'
						? <Loaddeer />
						: (
							<div className = 'row'>{coursesList.map(({title, subtitle, icon, query}, index) => (
								<div className = 'col-12 col-md-6 col-lg-4 mb-5' key = {query}>
									<VisibleComponent>
										<div title = {title} className = {`animated fadeIn py-5 px-4 shadow rounded-2x h-100`}>
											<Image alt = {title} src = {icon} className = 'mb-4' height = '55' width = '55' />
											<div className = 'fo-s-15 mb-4 bold text-capitalize one-line'>
												{title}
											</div>
											<div className = 'card-subtitle-height text-sentence mb-4'>
												{subtitle}
											</div>
											<div className = ''>
												<a href = {`./register/${query}`} className = 'bg-teal d-inline-block py-2 px-5 rounded-2x text-capitalize bold text-white btn'>
													register
												</a>
											</div>
										</div>
									</VisibleComponent>
								</div>
							))}</div>
						)
					}</div>
				</div>
			</div>
		</section>
	)
}