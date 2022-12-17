import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import Container from './../Components/Container'
import Button from './../Components/Button'
import moment from 'moment'

function TabelServicesAdd(){
  const date = moment().format('YYYY-MM-DD')
  const [tanggalMasuk, setTanggalMasuk] = useState(date)
  const [tanggalKeluar, setTanggalKeluar] = useState(date)
  const [nama, setNama] = useState('')
  const [noHp, setNoHp] = useState('')
  const [merk, setMerk] = useState('')
  const [keluhan, setKeluhan] = useState('')
  const [penanganan, setPenanganan] = useState('')
  const [kelengkapan, setKelengkapan] = useState('')
  const [status, setStatus] = useState('')
  const navigate = useNavigate()

  const postData = () => {
    fetch('http://127.0.0.1:8000/myadmin/service/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tanggalMasuk, nama, noHp,
	merk, keluhan, penanganan,
	status, kelengkapan, tanggalKeluar,
     })
    });
    navigate('/tabel-services')
  }

  const klikSubmit = (e) => {
    e.preventDefault()
    postData()
  }

  return (
    <Container padding="pt-24 px-8">
      <h3 className="font-bold text-3xl text-slate-500">Create data</h3>
      <p className="pb-4 text-primary text-sm">create a new data services.</p>
      <form onSubmit={klikSubmit}>
        <input onChange={e => setNama(e.target.value)} value={nama}
	  type="text" placeholder="Nama" className="input-class"
	/>
        <input onChange={e => setNoHp(e.target.value)} value={noHp}
	  type="number" placeholder="Nomor HP" className="input-class"
	/>
        <input onChange={e => setMerk(e.target.value)} value={merk}
	  type="text" placeholder="Merk atau type" className="input-class"
	/>
        <input onChange={e => setKeluhan(e.target.value)} value={keluhan}
	  type="text" placeholder="Keluhan" className="input-class"
	/>
        <input onChange={e => setPenanganan(e.target.value)} value={penanganan}
	  type="text" placeholder="Penanganan" className="input-class"
	/>
        <input onChange={e => setStatus(e.target.value)} value={status}
	  type="text" placeholder="Status" className="input-class"
	/>
        <input onChange={e => setKelengkapan(e.target.value)} value={kelengkapan}
	  type="text" placeholder="Kelengkapan" className="input-class"
	/>
        <div className="flex justify-between">
          <div className="pt-2 pb-4">
            <label for="tglmasuk" className="text-slate-500 text-sm block">Tanggal masuk</label>
            <input onChange={e => setTanggalMasuk(e.target.value)} value={tanggalMasuk}
	      type="date" className="input-date" id="tglmasuk"
	    />
          </div>
          <div className="pt-2 pb-4 pl-2">
            <label for="tglkeluar" className="text-slate-500 text-sm block">Tanggal keluar</label>
            <input onChange={e => setTanggalKeluar(e.target.value)} value={tanggalKeluar}
	      type="date" className="input-date" id="tglkeluar"
	      />
          </div>
        </div>
        <Button warna="green" size="md" type="submit">Konfirmasi</Button>
        <Button warna="red" size="md" styles="ml-2" onClick={() => navigate('/tabel-services')}>cancel</Button>
      </form>
    </Container>
  )
}
export default TabelServicesAdd
