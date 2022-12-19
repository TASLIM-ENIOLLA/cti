import Image from 'next/image'

export default function Footer(){
	return (
		<section className = 'py-5 bg-teal'>
			<div className = 'container'>
				<div className = 'row j-c-c'>
					<div className = 'text-center col-auto text-dark'>
						<Image src = '/vercel.svg' className = 'mb-4' width = '100' height = '23' />
						<div className = 'half-bold'>
							&copy; {new Date().getFullYear()} All rights reserved. Codehub Technological Institute
							<sup>&reg;</sup>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
