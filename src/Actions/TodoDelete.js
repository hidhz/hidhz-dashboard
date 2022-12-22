import Container from './../Components/Container'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import Button from './../Components/Button'

const TodoDelete = () => {
  const location = useLocation()
  const { itemDelete } = location.state
  const navigate = useNavigate()

  const handleDelete = () => {
//  fetch(`http://127.0.0.1:8000/todolist/api/${itemDelete.id}/`, {
  fetch(`https://hidhz-backend.up.railway.app/todolist/api/${itemDelete.id}/`, {
      method: 'DELETE',
      headers: {
	'Content-Type': 'application/json'
      }
    }).then(res => navigate('/todo-list'))
  }

  return (
    <Container padding="px-8 pt-24">
	<div className="text-slate-500">
	<h1 className="text-2xl">Are you sure?</h1>
	<p className="py-2 text-sm">Are you sure you want to delete the todo list "{itemDelete.task}"? All of the following related items will be deleted:</p>
	<div>
	  <h1 className="text-xl">Objects</h1>
	  <p className="px-4">» Todo list: {itemDelete.task}</p>
	</div>
	<div className="flex pt-4">
	  <Button onClick={handleDelete} warna="primary" size="md">
	    konfirmasi
	  </Button>
	  <Button warna="red" size="md" margin="l-2">
	    <Link to="/todo-list">kembali</Link>
	  </Button>
	</div>
	</div>
    </Container>
  )
}
export default TodoDelete
