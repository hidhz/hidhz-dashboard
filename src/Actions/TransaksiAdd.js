import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import Container from './../Components/Container'
import Button from './../Components/Button'
import moment from 'moment'

function TransaksiAdd(){
  const date = moment().format('YYYY-MM-DD')
  const [tanggal, setTanggal] = useState(date)
  const [tglup, setTglup] = useState('')
  const [transaksi, setTransaksi] = useState()
  const [kredit, setKredit] = useState(0)
  const [debit, setDebit] = useState(0)
  const navigate = useNavigate()
  const {slugEdit} = useParams()

  useEffect( () => {
    async function getData() {
//      const res = await fetch(`http://127.0.0.1:8000/myadmin/api/${slugEdit}/`)
      const res = await fetch(`https://hidhz-backend.up.railway.app/myadmin/api/${slugEdit}/`)
      const dt = await res.json()
      setTglup(dt.tanggal)
      setTransaksi(dt.transaksi)
      setKredit(dt.kredit)
      setDebit(dt.debit)
   }
   if(slugEdit) getData()
  }, [slugEdit])

  const postData = () => {
//    fetch('http://127.0.0.1:8000/myadmin/api/', {
    fetch('https://hidhz-backend.up.railway.app/myadmin/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
	tanggal: tanggal,
        transaksi: transaksi,
        debit: debit,
        kredit: kredit
     })
    });
    navigate('/tabel-transaksi')
  }

  const updateData = () => {
    fetch(`https://hidhz-backend.up.railway.app/myadmin/api/${slugEdit}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tanggal: tglup,
        transaksi: transaksi,
        debit: debit,
        kredit: kredit
     })
    });
    navigate('/tabel-transaksi')
  }

  const klikSubmit = (e) => {
    e.preventDefault()
    if(!slugEdit) {
      postData()
    } else{
      updateData()
    }
  }

  return (
    <Container padding="px-8 pt-24">
      <h3 className="font-bold text-2xl text-slate-500">Form Administrasi transaksi</h3>
      <p className="pb-4 text-slate-600 text-sm">Tambah data transaksi, Pilih tanggal atau  tanggal akan diset sesuai dengan waktu saat anda mengirimkan data atau menekan tombol konfirmasi.</p>
      <form onSubmit={klikSubmit}>
	<label>Transaksi :</label>
        <input
	  onChange = {e => setTransaksi(e.target.value)}
	  value={transaksi}
	  type="text" placeholder="Transaksi..." className="input input-bordered hover:input-info w-full max-w-xs mb-2"
	/>
        <div className="flex pr-10 text-slate-500">
	  <div className="mr-2">
       	    <label>Debit :</label>
            <input
  	      onChange = {(e => setDebit(e.target.value) )}
       	      value={debit}
	      type="number" placeholder="Debit..." className="input input-bordered hover:input-info w-full max-w-xs mb-2"
  	    />
	  </div>
	  <div>
       	    <label>Kredit :</label>
            <input
	      onChange = {(e =>  setKredit(e.target.value) )}
	      value={kredit}
	      type="number" placeholder="Kredit..." className="input input-bordered hover:input-info w-full max-w-xs"
	    />
	  </div>
	</div>
	<div className="pt-2 pb-4">
	  <label for="tgl" className="text-slate-500 text-sm block">Tanggal | optional</label>
	  <input
	    type="date"
	    value={tanggal}
	    onChange = {e => {
	      setTanggal(e.target.value)
	      setTglup(e.target.value)
	    }}
	    className="w-[160px] input input-bordered py-2 pl-2 rounded-md text-xl text-slate-600" id="tgl"
	  />
	</div>
        <Button warna="green" size="md" type="submit">
	  {!slugEdit ? "Konfirmasi" : "Update"}
	</Button>
        <Button warna="red" size="md" styles="ml-2">cancel</Button>
      </form>
    </Container>
  )
}
export default TransaksiAdd
