export default function Banner({headerHeight}){
	return (
		<section className = 'container py-5'>
			<div className = 'row a-i-c custom-height'>
				<div className = 'col-lg-7 mb-5 mb-lg-0'>
					<div className = 'row'>
						<div className = 'col-12 mb-4'>
							<div className = 'fa-3x bold text-sentence'>become a full stack web developer in no time.</div>
						</div>
						<div className = 'col-12 mb-4'>
							<div className = 'text-dark fo-s-15 text-sentence'>with the right knowledge from well experienced tutors, you can become a professional web developer in no time</div>
						</div>
						<div className = 'col-12 mb-5 max-width-500px'>
							<BannerButtons />
						</div>
						<div className = 'col-12'>
							<div className = 'mb-4'>
								<BannerLists title = 'instructor-led sessions' />
							</div>
							<div className = 'mb-4'>
								<BannerLists title = 'instructor-led sessions' />
							</div>
							<div className = 'mb-4'>
								<BannerLists title = 'instructor-led sessions' />
							</div>
							<div className = 'mb-4'>
								<BannerLists title = 'instructor-led sessions' />
							</div>
						</div>
					</div>
				</div>
				<div className = 'col-lg-5'>
					<img className = 'd-block w-100 max-width-400px mx-auto' src = '/images/a.png' />
				</div>
			</div>
			<style jsx>{`
				.custom-height{
					min-height: calc(100vh - ${headerHeight}px);
				}
				.max-width-500px{
					max-width: 500px;
				}
				.max-width-400px{
					max-width: 400px;
				}
			`}</style>
		</section>
	)
}

function BannerLists({title}){
	return (
		<div className = 'row'>
			<div className = 'col-12'>
				<div className = 'row'>
					<div className = 'col-auto'>
						<img src = '/icons/accept.png' width = '20' />
					</div>
					<div className = 'col'>
						<div className = 'text-dark fo-s-15 text-sentence'>{title}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function BannerButtons(){
	return (
		<div className = 'row a-i-c'>
			<div className = 'col-6'>
				<button className = 'd-block w-100 btn py-3 px-4 bg-orange text-capitalize text-white shadow'>get started</button>
			</div>
			<div className = 'col-6'>
				<button className = 'd-block w-100 btn py-3 px-4 bg-clear border-dark border text-capitalize text-dark'>contact us</button>
			</div>
		</div>
	)
}