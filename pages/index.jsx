import {Fragment, useState} from 'react'
import Script from 'next/script'
import Header from '/components/pages/Header'
import Banner from '/components/pages/Banner'
import About from '/components/pages/About'
import Sevices from '/components/pages/Sevices'
import Courses from '/components/pages/Courses'
import Register from '/components/pages/Register'
import Contact from '/components/pages/Contact'
import Footer from '/components/pages/Footer'

export default function Index(){
	return (
		<Fragment>
			<Header />
			<Banner />
			<About />
			<Sevices />
			<Courses />
			<Register />
			<Contact />
			<Footer />
			<Script strategy = 'afterInteractive' src = '/js/in-page-navigation.js'></Script>
		</Fragment>
	)
}