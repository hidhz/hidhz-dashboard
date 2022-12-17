import Container from './../Components/Container'
import Button from './../Components/Button'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function TabelServices(){
  const [data, setData] = useState(null)

  const getData = async () => {
    const response = await fetch("http://127.0.0.1:8000/myadmin/service/")
    const result = await response.json()
    setData(result.results)
  }

  useEffect(() => {
    getData()
  }, [])
  if(!data) return null
  return (
  <Container padding="px-4 pt-24">
    <div className="pb-4">
      <h1 onClick={getData} className="text-3xl text-slate-600">Data Services</h1>
      <p className="text-sm -mt-2">data services, cant post, update, and delete data.</p>
    </div>
    <Button warna="primary" size="md">
      <Link to="/tabel-services/add">tambah data</Link>
    </Button>
    <div className="overflow-x-auto pt-4">
    <table className="table table-zebra w-full">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Status</th>
          <th>Tanggal masuk</th>
          <th>aksi</th>
        </tr>
      </thead>
      <tbody>
	{data.map((data, i) => (
          <tr>
            <td>{data.nama}</td>
            <td>
	    {data.status == "selesai" ?
	      <p className="text-white bg-primary px-2 py-[.2px] rounded-md">{data.status}</p> :
	      <p className="text-white bg-red-600 px-2 py-[.2px] rounded-md">{data.status}</p>
	    }
            </td>
	    <td>{data.tanggalMasuk}</td>
            <td>
	      <Link to={`/tabel-services/${data.id}`} className="text-primary">detail</Link>
	    </td>
          </tr>
	))}
      </tbody>
    </table>
    </div>
  </Container>)
}
