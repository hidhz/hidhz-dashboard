import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Container from './../Components/Container'
import Button from './../Components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faComments, faClock }
from '@fortawesome/free-solid-svg-icons'

function RandomPesan(){
  const [isAdd, setIsAdd] = useState(false)
  const [data, setData] = useState(null)
  const [nama, setNama] = useState(null)
  const [pesan, setPesan] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isLimit, setIsLimit] = useState({
    kondisi: true,
  })
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
  //FILTERING DATA
  const deSort = [...data].sort((a, b) => b.id-a.id)
  const deLimit = []
  for(let i=0; i < 10; i++) deLimit.push(deSort[i])

  return (<div className={!isAdd && "cns"}>
   <Container padding="px-8 py-24">
    <h1 className="text-4xl text-slate-600 font-mono">MENGETIK... |</h1>
    <p className="text-slate-700 text-sm">tulisen apa aja bebas, terserah kamu pokoknya mau ngetik apa, sembarang sak seneng nya kamu, penting bahagia.</p>
    <Button warna="slate" size="sm" onClick={() => {getData()}}>refresh</Button>
    <div className="flex py-8 justify-between">
     <h1 className="text-2xl text-slate-700">{!isAdd ? "All Kata" : "Anjay mo nulis"}</h1>
     {!isAdd ? <Button onClick={() => {setIsAdd(true)}} warna="primary" size="sm">tulis Kata²</Button>
       :<Button onClick={() => {setIsAdd(false)}} warna="red" size="sm">back to kata²</Button>
     }
    </div>
    {isAdd ?
     <div>
      <form onSubmit={handleSubmit}>
	<label>nama</label>
	<input onChange={e => {
	    setNama(e.target.value)
	  }}
	  type="text" class="input-class" required
	/>
	<label>pesan</label>
	<textarea onChange={e => {
	    setPesan(e.target.value)
	  }}
	  rows="4" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:primary focus:border-primary mb-2"
	  required>
	</textarea>
	<Button type="submit" warna="slate" size="sm">submit</Button>
      </form>
     </div>
      :
      <div>
	{isLimit.kondisi && deSort.length > 9 ? deLimit.map((data) => {
	return (
	  <div className="rounded-md px-4 py-4 shadow-md bg-white/50 backdrop-blur-sm mb-6">
            <h1 className="text-slate-700">{data.pesan}</h1>
	    <hr className="my-2"/>
            <div className="text-slate-700 italic flex justify-between text-sm">
              <p><FontAwesomeIcon icon={faPaperPlane} /> {data.nama}</p>
              <Link to={`/terserah-mu/komen/${data.id}`}><FontAwesomeIcon icon={faComments} /> komen?</Link>
            </div>
          </div>
	  )
          }) : deSort.map((data) => { return (
	  <div className="rounded-md px-4 py-4 shadow-md bg-white/50 backdrop-blur-sm mb-6">
            <h1 className="text-slate-700">{data.pesan}</h1>
	    <hr className="my-2"/>
	    <div className="text-slate-700 italic flex justify-between text-sm">
              <p><FontAwesomeIcon icon={faPaperPlane} /> {data.nama}</p>
              <Link to={`/terserah-mu/komen/${data.id}`}><FontAwesomeIcon icon={faComments} /> komen?</Link>
	    </div>
          </div>
          )})
        }
	<div className="flex justify-center">
	<Button warna="slate" size="sm" onClick={() => {
	  setIsLimit({kondisi: !isLimit.kondisi})
	}}>{isLimit.kondisi ? "lihat semua +" : "lihat sedikit:v"}</Button>
	</div>
      </div>
    }
   </Container>
  </div>)
}
export default RandomPesan

