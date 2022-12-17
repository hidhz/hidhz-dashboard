import React from 'react'
import Container from './../Components/Container'
import Grafik from './../Components/Grafik'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPieChart, faChartSimple, faChartLine } from '@fortawesome/free-solid-svg-icons'

function Dashboard(){
  return (
    <Container padding="px-8 pt-24 pb-24">
	<h1 className="text-3xl font-semibold text-slate-500">Dashboard <span className="font-normal text-xl">sederhana + simple</span></h1>
	<p className="text-sm text-slate-500">Hello, Admin welcome to your dashboard. this helper your work administrasi.</p>

        <section className="py-6">
          <div className="w-full bg-primary px-4 rounded-md py-4 text-slate-500 shadow-md relative">
	    <div>
	      <h1 className="text-md text-slate-700">Administrasi</h1>
	      <h1 className="font-bold text-3xl text-white">127</h1>
	    </div>
	    <div className="absolute right-0 bottom-16 py-2 px-3 rounded-full bg-white text-primary mr-4">
	      <FontAwesomeIcon icon={faChartLine} />
	    </div>
	    <div class="relative py-1 bg-sky-600 bottom-[-16px] mx-[-16px] px-4">
	      <Link to="/tabel-transaksi" className="text-sm text-white hover:text-slate-600">view more</Link>
	    </div>
	  </div>

          <div className="w-full bg-emerald-600 px-4 rounded-md py-4 text-slate-500 shadow-md relative mt-4">
	    <div>
	      <h1 className="text-md text-slate-700">Services</h1>
	      <h1 className="font-bold text-3xl text-white">457</h1>
	    </div>
	    <div className="absolute right-0 bottom-16 py-2 px-3 rounded-full bg-white text-emerald-600 mr-4">
	      <FontAwesomeIcon icon={faChartSimple} />
 	    </div>
	    <div class="relative py-1 bg-emerald-700 bottom-[-16px] mx-[-16px] px-4">
	      <Link to="/tabel-services" className="text-sm text-white hover:text-slate-600">view more</Link>
	    </div>
	  </div>

	  <div className="w-full bg-amber-300 px-4 rounded-md py-4 text-slate-500 shadow-md relative mt-4">
            <div>
              <h1 className="text-md text-slate-700">Stock penjualan</h1>
              <h1 className="font-bold text-3xl text-white">2002</h1>
            </div>
	    <div className="absolute right-0 bottom-16 py-2 px-3 rounded-full bg-white text-amber-300 mr-4">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <div class="relative py-1 bg-amber-400 bottom-[-16px] mx-[-16px] px-4">
              <Link to="/" className="text-sm text-white hover:text-slate-600">view more</Link>
            </div>
          </div>

	  <div className="w-full bg-rose-600 px-4 rounded-md py-4 text-slate-500 shadow-md relative mt-4">
            <div>
              <h1 className="text-md text-slate-700">Clients</h1>
              <h1 className="font-bold text-3xl text-white">2004</h1>
            </div>
	    <div className="absolute right-0 bottom-16 py-2 px-3 rounded-full bg-white text-rose-600 mr-4">
              <FontAwesomeIcon icon={faChartSimple} />
            </div>
            <div class="relative py-1 bg-rose-700 bottom-[-16px] mx-[-16px] px-4">
              <Link to="/" className="text-sm text-white hover:text-slate-600">view more</Link>
            </div>
          </div>
        </section>
	<Grafik />
    </Container>
  )
}
export default Dashboard

