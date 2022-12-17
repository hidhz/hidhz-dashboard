import React from 'react'
import { Link } from 'react-router-dom'
import Info from './../Actions/Info'
import Container from './../Components/Container'
import Button from './../Components/Button'

function About(){
  const [nama, setNama] = React.useState("cewe")
  const [isKlik, setIsKlik] = React.useState(false)
  const handleKlik = (e) => {
    e.preventDefault()
    setIsKlik(true)
  }
  return (
    <Container padding="px-8 pt-24">
        <h1 className="text-slate-500 font-bold text-2xl pb-2">Hallo {nama}, selamat datang!</h1>
	{ isKlik ? <Info /> :
        <div className="pb-6 pl-1 text-slate-500">
	  <h1>kenalan dulu dong kak!</h1>
	  <form onSubmit={handleKlik}>
	    <input
	      onChange = {e => {
		setNama(e.target.value)
	      }}
	      type="text"
	      placeholder="masukin nama hehe"
	      className="input input-bordered input-info w-full max-w-xs mb-2"
	    />
	    <Button warna="primary" size="md" type="submit">Submit</Button>
	    <Button warna="red" size="md" styles="ml-2">
	     <Link to="/">Back</Link>
	    </Button>
	  </form>
        </div> }
    </Container>
  )
}
export default About
