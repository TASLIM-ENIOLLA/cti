import {API} from '/api'
import {useState} from 'react'
import Image from 'next/image'

export default function Contact(){
	const [formData, setFormData] = useState({
		name: '',
		subject: '',
		email: '',
		phone: '',
		message: ''
	})

	return (
		<div className = 'bg-white'>
			<section className = 'container py-5'>
				<div className = 'row'>
					<div className = 'col-12 my-5 text-center'>
						<h1 className = 'text-capitalize text-dark bold'>contact us</h1>
						<div className = 'text-sentence fo-s-15 text-muted col-lg-6 mx-auto p-0'>leave us a message and be sure to get a response!</div>
					</div>
					<div className = 'col-12'>
						<div className = 'row'>
							<div className = 'col-12 col-lg-4 mb-5 mb-lg-0'>
								<div className = 'container-fluid border-top-teal py-5'>
									<div className = 'row'>
										<div className = 'col-12 col-md-6 col-lg-12 mb-5'>
											<div className = 'container-fluid py-4 shadow rounded-2x h-100'>
												<div className = 'row flex-column j-c-c text-center'>
													<div className = 'col-12 mb-3'>
														<Image alt = 'placeholder' src = '/icons/placeholder.png' width = '25' height = '25' />
													</div>
													<div className = 'col-12'>
														<address className = 'text-sentence fo-s-15-'>No. 11, Ayedun street, Tanke Akata, Ilorin, Kwara state, Nigeria.</address>
													</div>
												</div>
											</div>
										</div>
										<div className = 'col-12 col-md-6 col-lg-12 mb-5'>
											<div className = 'container-fluid py-4 shadow rounded-2x h-100'>
												<div className = 'row flex-column j-c-c text-center'>
													<div className = 'col-12 mb-3'>
														<Image alt = 'email' src = '/icons/email.png' width = '25' height = '25' />
													</div>
													<div className = 'col-12'>
														<div>
															<a className = 'text-cyan fo-s-15-' href = 'mailto://codehubcti@gmail.com'>
																codehubcti@gmail.com
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className = 'col-12 col-md-6 col-lg-12'>
											<div className = 'container-fluid py-4 shadow rounded-2x h-100'>
												<div className = 'row flex-column j-c-c text-center'>
													<div className = 'col-12 mb-3'>
														<Image alt = 'apple' src = '/icons/apple.png' width = '25' height = '25' />
													</div>
													<div className = 'col-12'>
														<div className = 'mb-3'>
															<a className = 'text-cyan fo-s-15-' href = 'tel://+234-(0)-810-3589-869'>
																+234-(0)-810-3589-869
															</a>
														</div>
														<div>
															<a className = 'text-cyan fo-s-15-' href = 'tel://+234-(0)-708-4712-978'>
																+234-(0)-708-4712-978
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className = 'col-12 col-lg-8'>
								<div className = 'container-fluid border-top-teal py-5 px-3'>
									<form onSubmit = {(e) => {
										e.preventDefault()

										fetch(API.SEND_MAIL, {
											method: 'POST',
											body: JSON.stringify(formData),
											headers: {
												Accept: 'application/json, text/plain, */*',
												'Context-type': 'application/json'
											}
										})
										.then((res) => {
											if(res.status === 200) res.text().then(e => setFormData({
												name: '', subject: '', email: '', phone: '', message: ''
											}))
											else console.log('An error occured!')
										})
									}} className = 'row'>
										<div className = 'col-12 mb-5'>
											<h2 className = 'text-capitalize text-center text-teal bold'>quick message</h2>
										</div>
										<div className = 'col-md-6 mb-4'>
											<p className = 'text-sentence text-muted half-bold mb-2'>name</p>
											<input value = {formData.name} onChange = {(e) => setFormData({
												...formData,
												name: e.target.value
											})} type = 'name' className = 'd-block bg-light p-3 border-0 rounded-lg w-100' />
										</div>
										<div className = 'col-md-6 mb-4'>
											<p className = 'text-sentence text-muted half-bold mb-2'>subject</p>
											<input value = {formData.subject} onChange = {(e) => setFormData({
												...formData,
												subject: e.target.value
											})} type = 'subject' className = 'd-block bg-light p-3 border-0 rounded-lg w-100' />
										</div>
										<div className = 'col-md-6 mb-4'>
											<p className = 'text-sentence text-muted half-bold mb-2'>email</p>
											<input value = {formData.email} onChange = {(e) => setFormData({
												...formData,
												email: e.target.value
											})} type = 'email' className = 'd-block bg-light p-3 border-0 rounded-lg w-100' />
										</div>
										<div className = 'col-md-6 mb-4'>
											<p className = 'text-sentence text-muted half-bold mb-2'>phone</p>
											<input value = {formData.phone} onChange = {(e) => setFormData({
												...formData,
												phone: e.target.value
											})} type = 'phone' className = 'd-block bg-light p-3 border-0 rounded-lg w-100' />
										</div>
										<div className = 'col-12 mb-5'>
											<p className = 'text-sentence text-muted half-bold mb-2'>message</p>
											<textarea value = {formData.message} onChange = {(e) => setFormData({
												...formData,
												message: e.target.value
											})} className = 'd-block bg-light p-3 border-0 rounded-lg w-100 resize-0' rows = '5'></textarea>
										</div>
										<div className = 'col-md-6'>
											<button className = 'd-block p-3 btn bg-teal text-white rounded-2x w-100 text-capitalize bold'>send message</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<style>{`
				.border-top-teal{
					border-top: 4px solid var(--teal);
				}
			`}</style>
		</div>
	)
}