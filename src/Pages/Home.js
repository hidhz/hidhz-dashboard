import Container from './../Components/Container'
import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faTable, faCreditCard, faFaceSmile, faMugHot, faEyeSlash, faList }
from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const links = [
    {path: '/', name: 'empty halaman', icon: faMugHot},
    {path: '/about', name: 'perkenalan', icon: faFaceSmile},
    {path: '/dashboard', name: 'dashboard', icon: faLaptop},
    {path: '/tables', name: 'tables', icon: faTable},
    {path: '/debit-kredit', name: 'debit & kredit', icon: faCreditCard},
    {path: '/todo-list', name: 'Todo List', icon: faList},
    {path: '/', name: 'gatau apa lagi', icon: faEyeSlash},

  ]
  return (
    <Container padding="pt-24 px-8">
        <h1 className="font-bold text-3xl text-slate-500 font-ibm">Introduction my Web App</h1>
	<p className="pt-4 text-slate-600"> » made with 🤍 by hidhz@2022</p>
	<ul className="text-slate-700">
	{links.map((link) => {
	  return (
	    <li key={link.name}>
	      <Link to={link.path}>
	        <FontAwesomeIcon icon={link.icon} className="pr-2"/>
	        {link.name}
	      </Link>
	    </li>
	  )
	})}
	</ul>
    </Container>
  )
}

