import React from 'react';
import {Link} from 'react-router-dom';
import Button from './../Components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash }
from '@fortawesome/free-solid-svg-icons'

function TabelTransaksi(){
  const [datas, setDatas] = React.useState(null)
  const getData = async () => {
//    const response = await fetch('http://127.0.0.1:8000/myadmin/api/')
    const response = await fetch('https://hidhz-backend.up.railway.app/myadmin/service/')
    const data = await response.json()
    setDatas(data.results)
  }
  React.useEffect(() => {
   getData()
  }, [])
  if(!datas) return null
  console.log('dirender...')
  return (
    <div className="pt-24 container">
      <div className="px-4 text-slate-600">
        <div className="pb-4">
	  <h1 onClick={getData} className="font-monospace text-2xl">Data Transaksi</h1>
	  <p className="text-sm">data administrasi | transaksi, cant post, update, and delete data.</p>
        </div>
        <Button warna="primary" size="md">
	  <Link to="/tabel-transaksi/add">tambah data</Link>
        </Button>
<div className="overflow-x-auto pt-6">
  <table className="table w-full">
    <thead>
      <tr>
        <th>No</th>
        <th>hari/tanggal</th>
        <th>transaksi</th>
        <th>debit</th>
        <th>kredit</th>
        <th>aksi</th>
      </tr>
    </thead>
    <tbody>
      {datas.map((data, index) => {
	return (
      <tr>
        <th>{index +1}</th>
        <td>{data.tanggal}</td>
        <td>{data.transaksi}</td>
        <td>{data.debit}</td>
        <td>{data.kredit}</td>
        <td>
	  <Button warna="primary" size="sm" styles="ml-2">
  	    <Link to={`/tabel-transaksi/add/${data.id}`}><FontAwesomeIcon icon={faEdit} /></Link>
	  </Button>
	  <Button warna="red" size="sm" styles="ml-2">
  	    <Link to={`/tabel-transaksi/delete/${data.id}`}><FontAwesomeIcon icon={faTrash}/></Link>
	  </Button>
	</td>
      </tr>
	)
      })}
    </tbody>
  </table>
</div>

      </div>
    </div>
  )
}
export default TabelTransaksi
