import {useParams, Link, useNavigate} from 'react-router-dom'
import {useState, useEffect, useRef} from 'react'
import Container from './../Components/Container'
import Button from './../Components/Button'
import $ from 'jquery'

export default function RandomPesanKomen(){
  const {id} = useParams()
  const [data, setData] = useState(null)
  const [isAddKomen, setIsAddKomen] = useState(false)
  const [komen, setKomen] = useState(null)
  const [pengKomen, setPengKomen] = useState("hidha")
  const navigate = useNavigate()

  // GET DATA
  async function getData(){
    const res = await fetch(`https://hidhz-backend.up.railway.app/myadmin/katain/${id}/`)
    const result = await res.json()
    setData(result)
  }

  // POST DATA
  function postDataHidha(){
    fetch(`https://hidhz-backend.up.railway.app/myadmin/katain/${id}/`, {
      method: "PUT",
      headers: {
	'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
	komenHidha: data.komenHidha += komen + "~"
      })
    })
  }
  function postDataMifta(){
    fetch(`https://hidhz-backend.up.railway.app/myadmin/katain/${id}/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
	komenMifta: data.komenMifta += komen + "~"
      })
    })
  }
  useEffect(() => {
    getData()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    if(pengKomen === "hidha"){
      postDataHidha()
    } else{
      postDataMifta()
    }
    setKomen("");
    setPengKomen("")
    getData()
  }
  if(!data) return null

  const komenHidha = data.komenHidha.split("~")
  const komenMifta = data.komenMifta.split("~")
  console.log(komenHidha)
  return (
    <Container padding="px-8 pt-24 pb-12">
      <Link to="/terserah-mu" className="underline text-slate-500 text-xl">back aja</Link>
      <div className="px-4 py-6 text-sm bg-slate-100/50 shadow-md rounded-md">{data.pesan}</div>
     {isAddKomen &&
     <div className="px-2 py-4 bg-slate-100 rounded-md mt-4">
      <form onSubmit={handleSubmit}>
	<p>Komen sebagai</p>
	<div className="form-control">
	  <label className="label cursor-pointer">
	    <span className="label-text text-slate-600">Hidha</span>
	    <input onChange={() => {setPengKomen("hidha")}}
	    type="radio" name="radio-10" className="radio checked:bg-red-500"/>
	  </label>
	</div>
	<div className="form-control">
	  <label className="label cursor-pointer">
	    <span className="label-text text-slate-600">Mifta</span>
	    <input onChange={() => {setPengKomen("mifta")}}
	    type="radio" name="radio-10" className="radio checked:bg-blue-500"/>
	  </label>
	</div>
        <input type="text"
	  onChange={e =>
	    setKomen(e.target.value)
	  }
	  value={komen}
  	  className="input-class"
	  placeholder="tulis komen"
        />
        <Button type="submit" warna="primary" size="sm">submit</Button>
        <Button onClick={() => {setIsAddKomen(false)}} warna="red" size="sm" styles="ml-2">back</Button>
      </form>
    </div>
     }
     <h1 className="mt-8 text-2xl font-mono text-slate-500">This Comments</h1>
     {!isAddKomen &&
       <Button warna="primary" size="sm" onClick={() => {
 	 setIsAddKomen(true)
       }}>Add Comments</Button>
     }
      <div className="pt-4">
        {komenHidha.map((komen, index) => (
          <>
            {komenHidha[index] && <p className="p-2 mr-12 bg-gray-100/30 shadow-md rounded-xl mb-2">{komen}</p>}
            {komenMifta[index] && <p className="p-2 ml-12 bg-primary text-white shadow-md rounded-xl mb-2">{komenMifta[index]}</p>}
          </>
        ))}
      </div>
    </Container>
  )
}
