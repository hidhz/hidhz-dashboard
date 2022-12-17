import {Link} from 'react-router-dom'
import Button from './../Components/Button'

function Info() {
  return (
    <div className="text-slate-500 pb-12">
	<h1 className="text-2xl">Hidhz : Your Assisten & your Ayy</h1>
	<div className="pt-4">
	  <h1 className="font-bold text-2xl  bg-slate-500 text-white">Introduction</h1>
	  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
	</div>
	<div className="pt-4">
	  <h1 className="font-bold text-2xl text-slate-600">What is web ini?</h1>
	  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
        </div>
	<div className="pt-4">
	  <h1 className="font-bold text-2xl text-slate-600">Stack in web?</h1>
	  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
        </div>
	<div className="pt-4">
	  <h1 className="font-bold text-2xl text-slate-600">What is fitur web?</h1>
	  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
        </div>
	<div className="pt-4">
	  <p>Created by hidhz</p>
	  <div className="bg-slate-300 my-2">
	    <img src="/assets/gambar.jpg" alt=""/>
	  </div>
	  <Button warna="primary" size="md">try again</Button>
	  <Button warna="slate" size="md" styles="ml-2">
	    <Link to="/" >back to home</Link>
	  </Button>
        </div>
    </div>
  )
}
export default Info
