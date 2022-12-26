import Header from '/components/pages/Header'
import Contact from '/components/pages/Contact'
import Footer from '/components/pages/Footer'
import {Fragment, useState, useEffect} from 'react'

export default function _Contact(){
	return (
		<Fragment>
			<Header />
			<Contact />
			<Footer />
		</Fragment>
	)
}