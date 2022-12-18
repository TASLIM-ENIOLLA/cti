import {API} from '/api'
import {useState, useEffect} from 'react'

export default function Courses(){
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
						<div className = 'text-sentence fo-s-15 text-muted col-lg-6 mx-auto p-0'>our team of tech savvys help educated and instill good programming knowledge and ethics in our tutees</div>
					</div>
					<div className = 'col-12'>
						<div className = 'row j-c-c'>{coursesList.map(({title, icon, query}, index) => (
							<div className = 'col-6 col-sm-4 col-md-2 mb-5' style = {{maxWidth: '200px'}} key = {query}>
								<a title = {title} href = {`/courses/${query}`} className = {`d-block p-4 rounded-2x shadow flicker text-center`}>
									<img src = {icon} className = 'mb-4' width = '55' />
									<div className = 'bold text-capitalize one-line'>
										{title}
									</div>
								</a>
							</div>
						))}</div>
					</div>
				</div>
			</div>
		</section>
	)
}