import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react'
import Container from './../Components/Container'
import Button from './../Components/Button'

function TabelServicesDetail(){
  const [nama, setNama] = useState(null)
  const [tanggalMasuk, setTanggalMasuk] = useState(null)
  const [tanggalKeluar, setTanggalKeluar] = useState(null)
  const [noHp, setNoHp] = useState(null)
  const [merek, setMerek] = useState(null)
  const [keluhan, setKeluhan] = useState(null)
  const [penanganan, setPenanganan] = useState(null)
  const [kelengkapan, setKelengkapan] = useState(null)
  const [status, setStatus] = useState(null)
  const {slugDetail} = useParams()
  const navigate = useNavigate()
  // Get data
  async function getData() {
    const response = await fetch(`https://hidhz-backend.up.railway.app/myadmin/service/${slugDetail}/`)
    const results = await response.json()
    setNama(results.nama)
    setTanggalMasuk(results.tanggalMasuk)
    setTanggalKeluar(results.tanggalKeluar)
    setNoHp(results.noHp)
    setMerek(results.merk)
    setKeluhan(results.keluhan)
    setPenanganan(results.penanganan)
    setKelengkapan(results.kelengkapan)
    setStatus(results.status)
  }
  // Delete data
  const deleteData = () => {
//    fetch(`http://127.0.0.1:8000/myadmin/service/${slugDetail}/`, {
    fetch(`https://hidhz-backend.up.railway.app/myadmin/service/${slugDetail}/`, {
      method: 'DELETE',
      headers: {
	'Content-Type': 'application/json',
      },
    }).then(res => navigate('/tabel-services'))
    getData()
  }
  // Update data
  const postData = async e => {
    e.preventDefault()
    await fetch(`https://hidhz-backend.up.railway.app/myadmin/service/${slugDetail}/`, {
      method: 'PUT',
      headers: {
	'Content-Type': 'application/json'
      },
      body: JSON.stringify({
	tanggalMasuk, nama, noHp,
        merk:merek, keluhan, penanganan,
        status, kelengkapan, tanggalKeluar,
      }),
    }).then(res => navigate('/tabel-services'))
  }
  // Render components
  useEffect(() => {
    getData()
  }, [])
  if(!nama) return null;
  return (
    <Container padding="px-8 pt-24">
     <section className="font-monospace overflow-hidden">
      <h1 class="mb-4 text-2xl font-bold leading-none tracking-tight text-slate-800 md:text-5xl lg:text-6xl">
	Detail data “{nama}”
      </h1>
      <h1>ini adalah halaman details from your data “{nama}”, anda bisa update and delete data.</h1>
     </section>
     <section className="pt-4 text-slate-500">
       <form onSubmit={postData}>
	<div className="mb-2">
	  <label className="font-semibold">nama customer</label>
	  <input onChange={e => setNama(e.target.value)}
	   type="text" value={nama} className="input-class"/>
	</div>
	<div className="flex mb-2">
	  <div className="pr-3">
	    <label className="font-semibold">nomor hp</label>
	    <input onChange={e => setNoHp(e.target.value)}
	     type="text" value={noHp} className="input-class"/>
	  </div>
	  <div>
	    <label className="font-semibold">merek</label>
	    <input onChange={e => setMerek(e.target.value)}
	     type="text" value={merek} className="input-class"/>
	  </div>
	</div>
	<div className="flex mb-2">
	  <div className="pr-3">
	    <label className="font-semibold">keluhan</label>
	    <input onChange={e => setKeluhan(e.target.value)}
	     type="text" value={keluhan} className="input-class"/>
	  </div>
	  <div>
	    <label className="font-semibold">penanganan</label>
	    <input onChange={e => setPenanganan(e.target.value)}
	     type="text" value={penanganan} className="input-class"/>
          </div>
        </div>
	<div className="mb-2">
	  <label className="font-semibold">kelengkapan</label>
	  <input onChange={e => setKelengkapan(e.target.value)}
	   type="text" value={kelengkapan} className="input-class"/>
	</div>
	<div className="mb-2">
	  <label className="font-semibold">status ?</label>
	  <select
	   className="border-none rounded-md"
	   onChange={e => {
	    setStatus(e.target.value)
	    console.log(e)
	  }}>
	    {status == "selesai" ? <option selected>selesai</option> :
	      <option selected>cancel</option>
	    }
	    <option value="selesai">selesai</option>
	    <option value="cancel">cancel</option>
	  </select>
	</div>
	<div className="flex mb-4">
	  <div className="pr-3">
	    <label className="font-semibold">tanggal masuk</label>
	    <input onChange={e => setTanggalMasuk(e.target.value)}
	     type="date" value={tanggalMasuk} className="input-date" />
	  </div>
	  <div>
	    <label className="font-semibold">tanggal keluar</label>
	    <input onChange={e => setTanggalKeluar(e.target.value)}
	     type="date" value={tanggalKeluar} className="input-date"/>
	  </div>
        </div>
	<div className="flex">
	  <Button warna="green" size="md" styles="mr-3">
	    <Link to="/tabel-services">kembali</Link>
	  </Button>
	  <Button warna="yellow" size="md" styles="mr-3" type="submit">konfirmasi edit</Button>
	  <Button warna="red" size="md" onClick={deleteData}>delete</Button>
        </div>
       </form>
     </section>
    </Container>
  )
}
export default TabelServicesDetail










