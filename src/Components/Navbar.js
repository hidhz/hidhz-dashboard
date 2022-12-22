import React from 'react'
import Container from './Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTable, faLaptop, faCreditCard, faFingerprint, faList } 
from '@fortawesome/free-solid-svg-icons'
//import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import {gsap} from 'gsap'

export default function Navbar(){
  const navMenu = React.useRef(null)
  const headerRef = React.useRef(null)
  const hamburgerRef = React.useRef(null)

  window.onscroll = function(){
    const fixedNav = headerRef.current.offsetTop;
    if(window.pageYOffset > fixedNav){
        headerRef.current.classList.add('navbar-fixed');
    } else{
        headerRef.current.classList.remove('navbar-fixed');
    }
  }

  const links = [
    {path: '/', name: 'Home', icon: faHome},
    {path: '/dashboard', name: 'Dashboard', icon: faLaptop},
    {path: '/tabel-transaksi', name: 'Tables', icon: faTable},
    {path: '/debit-kredit', name: 'Debit/Kredit', icon: faCreditCard},
    {path: '/todo-list', name: 'Todo List', icon: faList},
    {path: '/login', name: 'Login', icon: faFingerprint},
  ]
  return (
    <header ref={headerRef} className="bg-transparent top-0 left-0 absolute w-full flex items-center z-10">
       <Container padding="px-8">
         <div className="flex items-center justify-beetwen">
           <p className="font-bold text-lg block text-slate-500 py-6">Hidhz <span className="text-primary">'Ganteng</span></p>
           <div className="flex items-center px-4">
	     <input onChange={e => {
	         hamburgerRef.current.classList.toggle('hamburger-active')
	         navMenu.current.classList.toggle("hidden")
	 	 gsap.from(navMenu.current, {
	           opacity: 0,
       		   x: -300,
       		   duration: .5
	         })
	       }}
	       type="checkbox" className="absolute z-[999] right-8 w-8 h-8 opacity-0"
	     />
             <div ref={hamburgerRef} className="block absolute right-8 hamburger z-[998]">
               <span className="hamburger-line transition duration-300 origin-top-left aese-in-out"></span>
               <span className="hamburger-line transition duration-300 ease-in-out"></span>
               <span className="hamburger-line transition duration-300 origin-bottom-right aese-in-out"></span>
             </div>
             <nav ref={navMenu} id="nav-menu" className="hidden absolute left-0 top-0">
	       <Sidebar />
            </nav>
          </div>
        </div>
      </Container>
    </header>
  )
}
