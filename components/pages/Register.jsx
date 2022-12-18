export default function Register(){
	return (
		<section className = 'py-4 section-bg'>
			<div className = 'container py-5'>
				<div className = 'row a-i-c j-c-space-between'>
					<div className = 'col-12 col-md-8 mb-4 mb-md-0'>
						<h2 className = 'text-capitalize bold mb-4 text-teal'>register now</h2>
						<div className = 'text-sentence text-white fo-s-15'>
							to register for any of our courses, click the button. Don&apos;t miss out. Utilize this benefit by signing up. Learn a skill right away!
						</div>
					</div>
					<div className = 'col-12 col-md-auto'>
						<button className = 'bold text-capitalize bg-teal text-white btn rounded-2x px-5 py-3'>register now</button>
					</div>
				</div>
			</div>
			<style jsx>{`
				.section-bg{
					background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/gifs/c.jpg);
					background-size: cover;
					background-position: top;
					background-attachment: fixed;
				}
			`}</style>
		</section>
	)
}
