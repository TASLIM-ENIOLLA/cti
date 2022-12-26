import {API} from '/api'
import Image from 'next/image'
import Header from '/components/pages/Header'
import Sevices from '/components/pages/Sevices'
import Footer from '/components/pages/Footer'
import Loaddeer from '/components/utils/Loaddeer'
import {Fragment, useState, useEffect} from 'react'

export default function _Sevices(){
	const [servicesList, setServicesList] = useState()

	useEffect(() => {
		fetch(API.SERVICES)
		.then(e => e.json())
		.then(data => setServicesList(data))
	}, [])

	return (
		<Fragment>
			<Header />
			<Sevices />
			<Footer />
		</Fragment>
	)
}