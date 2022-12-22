import {useState, useEffect} from 'react'
import Container from './../Components/Container'
import Button from './../Components/Button'

function RandomPesan(){
  const [isAdd, setIsAdd] = useState(false)
  const [data, setData] = useState(null)
  const [nama, setNama] = useState(null)
  const [pesan, setPesan] = useState(null)
  // GET DATA
  const getData = async () => {
    const response = await fetch("https://hidhz-backend.up.railway.app/myadmin/katain/")
    const result = await response.json()
    setData(result.results)
  }
  // POST DATA
  const postData = async () => {
    const response = await fetch("https://hidhz-backend.up.railway.app/myadmin/katain/", {
      method: 'POST',
      headers: {
	'Content-Type': 'application/json',
      },
      body: JSON.stringify({
	nama, pesan
      })
    })
    const results = await response.json()
  }
  useEffect(() => {
    getData()
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    postData()
    setIsAdd(false)
    setNama(''); setPesan('')
    getData()
  }
  if(!data) return null
  return (<div className="cns">
   <Container padding="px-8 py-24">
    <h1 className="text-4xl text-slate-600">Kata KataIn | BEBAS</h1>
    <p className="text-slate-700 text-sm">tulisen apa aja bebas, terserah kamu pokoknya mau ngetik apa, sembarang sak seneng nya kamu, penting bahagia.</p>
    <div className="flex py-8 justify-between">
     <h1 className="text-2xl text-slate-700">All Kata</h1>
    {!isAdd ? <Button onClick={() => {setIsAdd(true)}} warna="primary" size="sm">Add a Kata</Button>
     : <Button onClick={() => {setIsAdd(false)}} warna="red" size="sm">back to kata"</Button>
    }
    </div>
    {isAdd ?
      <form onSubmit={handleSubmit}>
	<label>nama</label>
	<input onChange={e => {
	    setNama(e.target.value)
	  }}
	  type="text" class="input-class" required
	/>
	<label>pesan</label>
	<input onChange={e => {
	    setPesan(e.target.value)
	  }}
	  type="text" class="input-class" required
	/>
	<Button type="submit" warna="slate" size="sm">submit</Button>
      </form>
     : data.map((data) => {
	return (
	<div className="rounded-md px-4 py-4 shadow-md mb-3 bg-white/30 backdrop-blur-sm">
          <h1 className="text-slate-800">“{data.pesan}”</h1>
          <p className="text-primary font-semibold italic float-left mr-1">{data.nama} | </p>
          <p className="mt-[2px] text-slate-600 text-sm italic"> apa gasuka?</p>
        </div>
	)
      })
    }
   </Container>
   <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>)
}
export default RandomPesan
