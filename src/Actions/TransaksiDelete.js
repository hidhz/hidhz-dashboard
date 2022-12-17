import {useState, useEffect} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import Button from './../Components/Button'
import Container from './../Components/Container'

function TransaksiDelete() {
  const [data, setData] = useState('')
  const {slugDelete} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async() => {
      const res = await fetch(`http://127.0.0.1:8000/myadmin/api/${slugDelete}/`)
      const data = await res.json()
      setData(data)
    }
    getData()
  }, [slugDelete])

  const deleteData = () => {
    fetch(`http://127.0.0.1:8000/myadmin/api/${slugDelete}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      navigate("/tabel-transaksi")
    })
    .catch(error => alert(error))
  }
  return (
<Container padding="px-8 pt-24">
        <div className="text-slate-500">
        <h1 className="text-2xl">Are you sure?</h1>
        <p className="py-2 text-sm">Are you sure you want to delete the transaksi "{data.transaksi}"? All of the following related items will be deleted:</p>
        <div>
          <h1 className="text-xl">Objects</h1>
          <p className="px-4">» nama transaksi : {data.transaksi}</p>
          <p className="px-4">» {data.debit? `dana keluar : ${data.debit}` : `dana masuk : ${data.kredit}`}</p>
        </div>
        <div className="flex pt-4">
          <Button onClick={deleteData} warna="primary" size="md">
            konfirmasi
          </Button>
          <Button warna="red" size="md" styles="ml-2">
            <Link to="/tabel-transaksi">kembali</Link>
          </Button>
        </div>
        </div>
</Container>
  )
}
export default TransaksiDelete
