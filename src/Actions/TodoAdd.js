import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { AlertSoSweet } from './../Components/AlertSoSweet'
import Button from './../Components/Button'

function TodoAdd({setUbah}){
  const [todo, setTodo] = React.useState('')
  const [todoUpdate, setTodoUpdate] = React.useState('')
  const params = useParams()
  const navigate = useNavigate()

  // FUNGSI POST DATA
  const postData = () => {
//    fetch(`http://127.0.0.1:8000/todolist/api/`, {
    fetch(`https://hidhz-backend.up.railway.app/todolist/api/`, {
      method: 'POST',
      headers: {
	'Content-Type': 'application/json'
      },
      body: JSON.stringify({task:todo, isDone: 'false'}),
    }).then(res => res.json())
    .then(res => {
      AlertSoSweet.fire({
	icon: 'success',
	title: 'Berhasil tambah todo'
      })
    })
    .catch(err => alert('error : ' + err))
  }

  // FUNGSI UPDATE DATA
  const updateData = () => {
//    fetch(`http://127.0.0.1:8000/todolist/api/${params.update}/`, {
    fetch(`https://hidhz-backend.up.railway.app/todolist/api/${params.update}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({task:todoUpdate, isDone:'false'}),
    }).then(res => res.json()).then(res => {
      setTodoUpdate('')
      navigate('/todo-list')
    })
  }

  // JIKA TOMBOL SUBMIT DITEKAN
  const handleSubmit = (e) => {
    e.preventDefault()
      postData()
      setTodo('')
      setUbah(state => !state)
  }
  console.log("dari update todo "+params.update)

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex">
	{!params.update ?
	<>
	<input
	  onChange={(e) => {
	    setTodo(e.target.value)
	  }}
	  value={todo}
	  type="text"
	  placeholder="tambah list..."
	  className="input input-bordered w-full max-w-xs"
	/>
	<Button type="submit" warna="primary" size="md" styles="ml-2">
	  tambah
	</Button>
	</> : <>
	<input
	  onChange={(e) => {
	    setTodoUpdate(e.target.value)
	  }}
	  value={todoUpdate}
	  type="text" className="input input-bordered w-full max-w-xs"
	/>
	<Button onClick={updateData} warna="slate" size="md" styles="ml-2">
	  konfirmasi
	</Button>
	</>}
      </form>
    </div>
  )
}

export default TodoAdd
