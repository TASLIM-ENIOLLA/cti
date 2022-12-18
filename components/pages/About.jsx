export default function About(){
	return (
		<section className = 'bg-white'>
			<div className = 'container py-5'>
				<div className = 'row a-i-c'>
					<div className = 'col-12 my-5 text-center'>
						<h1 className = 'text-capitalize text-dark bold'>about us</h1>
						<div className = 'text-sentence fo-s-15 text-muted col-lg-6 mx-auto p-0'>get to know who we are as a company</div>
					</div>
					<div className = 'col-lg-5 mb-5 mb-lg-0'>
						<img className = 'd-block w-100' src = '/images/about-toon.png' />
					</div>
					<div className = 'col-lg-7'>
						<div className = 'mb-5'>
							<h6 className = 'fo-s-15 bold text-uppercase text-teal mb-3'>our story</h6>
							<p className = 'text-muted fo-s-15'>At CodeHub Technological Institute, we provide the best avenue for people to acqiure various IT skill and apply them to solve real life problems. We also empower people to allow them make a living by helping them become professionals who can deliver value-oriented services to clients.</p>
						</div>
						<div>
							<h6 className = 'fo-s-15 bold text-uppercase text-teal mb-3'>our story</h6>
							<p className = 'text-muted fo-s-15'>At CodeHub Technological Institute, we provide the best avenue for people to acqiure various IT skill and apply them to solve real life problems. We also empower people to allow them make a living by helping them become professionals who can deliver value-oriented services to clients.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}