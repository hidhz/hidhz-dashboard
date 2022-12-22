//import Container from './Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTable, faLaptop, faCircle, faEnvelope, faCalendar, faPhone}
from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Sidebar(){
  return (<>
   <aside class="w-64" aria-label="Sidebar">
     <div class="overflow-y-auto h-[100vh] py-4 px-3 rounded dark:bg-gray-800 shadow-lg bg-white">
       <div class="flex py-4">
	<img className="w-12 rounded-full" src="/assets/avatar.png" alt="avatar"/>
        <div class="pl-2">
	  <h1 class="text-lg font-bold text-primary mt-2">Miftakhul Janah</h1>
	  <p class="-mt-2 text-slate-600 text-[11px]">Staf Mbs Co. IT Support</p>
        </div>
       </div> <hr/>
       <ul class="space-y-2 pt-3">
         <li>
	   <Link to="/" className="link-sidebar">
              <FontAwesomeIcon icon={faHome} />
	      <p class="ml-2">Home</p>
	    </Link>
    	 </li>
         <li>
	   <Link to="/dashboard" className="link-sidebar">
	     <FontAwesomeIcon icon={faLaptop}/>
             <p class="ml-2">Dashboard</p>
            </Link>
         </li>
         <li>
	   <button className="link-sidebar">
             <FontAwesomeIcon icon={faTable}/>
             <p class="ml-2">Tables</p>
           </button>
           <ul class="px-6">
             <li>
  	       <Link to="/tabel-transaksi" className="link-sidebar">Transaksi</Link>
	     </li>
	     <li>
	       <Link to="/tabel-customer" className="link-sidebar">Customer</Link>
	     </li>
	     <li>
               <Link to="/tabel-services" className="link-sidebar">Services</Link>
	     </li>
           </ul>
         </li>
         <li>
	   <Link to="/todo-list" className="link-sidebar">
               <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
               <p class="ml-2">Todo list</p>
            </Link>
         </li>
         <li>
	   <Link to="/b" className="link-sidebar">
               <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
               <p class="ml-2">Users</p>
            </Link>
         </li>
         <li>
	   <Link to="/b" className="link-sidebar">
               <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
               <p class="ml-2">Products</p>
            </Link>
         </li>
         <li>
	   <Link to="/b" className="link-sidebar">
               <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
               <p class="ml-2">Sign In</p>
            </Link>
         </li>
         <li>
	   <Link to="/b" className="link-sidebar">
              <FontAwesomeIcon icon={faCalendar} />
               <p class="ml-2">Calendar</p>
           </Link>
         </li>
      </ul>
      <hr />
      <div class="pt-2">
	<h1 class="text-slate-500 text-sm pb-3">developer contact</h1>
	<ul>
	  <li class="flex text-slate-600 text-md pb-3">
            <FontAwesomeIcon icon={faPhone}/>
	    <p class="ml-2 -mt-1">081216935644</p>
	  </li>
	  <li class="flex text-slate-600 text-md">
            <FontAwesomeIcon icon={faEnvelope}/>
	    <p class="ml-2 -mt-1">hidhzdev@gmail.com</p>
	  </li>
	</ul>
      </div>
   </div>
  </aside>

  </>)
}
