import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import TodoAdd from './../Actions/TodoAdd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
import Container from './../Components/Container'
function TodoList() {
  const [todos, setTodos] = useState([])
  const [ubah, setUbah] = useState(false)
  const [checked, setChecked] = useState(false)
  const [checkedId, setCheckedId] = useState('')
  const [loading, setLoading] = useState(true)

  const postData = () => {
//    fetch(`http://127.0.0.1:8000/todolist/api/${checkedId.id}/`, {
    fetch(`https://hidhz-backend.up.railway.app/todolist/api/${checkedId.id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({task:checkedId.task, isDone: checked}),
    })
  }
  const getData = async () => {
//    const response = await fetch('http://127.0.0.1:8000/todolist/api/')
    const response = await fetch('https://hidhz-backend.up.railway.app/todolist/api/')
    const data = await response.json()
    setTodos(data.results)
    setLoading(false)
  }
  useEffect(() => {
    getData()
  }, [ubah, checked])

  console.log('dirender...')

  function ubahWaktu(todo){
    let waktu = ""
    for(let i = 0; i < todo.length; i++)
      if(i > 10 && i <= 18) waktu += todo[i]
    return waktu
  }

  return (
    <Container padding="pt-24">
      <div className="px-4 text-slate-500">
        <h1 className="text-4xl font-semibold">Daily Rutinitas ku</h1>
        <p className="tracking-wide">Study now work habis study</p>
	<hr/>
      </div>
      <div className="px-4 text-slate-500 pt-4">
        <h1 className="text-2xl">Must to do</h1>
        <p className="tracking-wide">“Awali hari dengan Basmalah dan Senyum, <span className="line-through text-red-700 italic">dan juga makan nasi.</span>”</p>
      </div>
      <div className="px-4 text-slate-500 pt-4">
        <h1 className="inline text-2xl font-semibold">Todo List this days</h1> 
	<TodoAdd
	  setUbah={setUbah}
	/>
	<ul>
         {loading ? "loading data..." :<>
	  {todos.map((todos) => {
	  return (<>
	    <li className="flex justify-between text-md px-2 py-2">
	      <div className="relative">
		<input
		  onChange={() => {
		    setChecked(!todos.isDone)
		    setCheckedId(todos)
		  }}
		  onClick={postData()}
		  checked={todos.isDone}
		  type="checkbox" className="checkbox checkbox-sm checkbox-info absolute top-[1px]" 
		/>
		{!todos.isDone ? <h2 className="ml-6">{todos.task}</h2> :
		<h2 className="ml-6 line-through text-primary">{todos.task}</h2>}
		{todos.isDone && <p className="italic text-slate-500 text-[10px] px-6">
		    selesai pada jam {ubahWaktu(todos.waktuSelesai)}
		</p>}
	      </div>
	      <div>
		<Link
		  to="/todo-list/delete"
		  state={{itemDelete: todos}}
		>
	          <FontAwesomeIcon className="pl-2" icon={faTrash} />
		</Link>
		<Link
		  to={`/todo-list/${todos.id}`}
		>
	          <FontAwesomeIcon className="pl-2" icon={faEdit} />
		</Link>
	      </div>
	    </li> <hr />
	  </>)
	  })}
	 </>}
	</ul>
      </div>
      <div className="pt-12 hidden">DzikirList</div>
    </Container>
  )
}
export default TodoList
