import {API} from '/api'
import Image from 'next/image'
import Header from '/components/pages/Header'
import Courses from '/components/pages/Courses'
import Footer from '/components/pages/Footer'
import Loaddeer from '/components/utils/Loaddeer'
import {Fragment, useState, useEffect, useRef} from 'react'
import {useComponentVisible} from '/my_modules/component-visible'

export default function _Courses(){
	return (
		<Fragment>
			<Header />
			<Courses />
			<Footer />
		</Fragment>
	)
}