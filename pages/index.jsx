import {Fragment, useState} from 'react'
import Header from '/components/pages/Header'
import Banner from '/components/pages/Banner'
import Sevices from '/components/pages/Sevices'
import Courses from '/components/pages/Courses'
import Register from '/components/pages/Register'
import Contact from '/components/pages/Contact'
import Footer from '/components/pages/Footer'

export default function Index(){
	const [headerHeight, setHeaderHeight] = useState()

	return (
		<Fragment>
			<Header setHeaderHeight = {setHeaderHeight} />
			<Banner headerHeight = {headerHeight} />
			<Sevices />
			<Courses />
			<Register />
			<Contact />
			<Footer />
		</Fragment>
	)
}