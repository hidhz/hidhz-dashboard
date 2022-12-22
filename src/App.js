import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import TabelTransaksi from './Pages/TabelTransaksi'
import TabelServices from './Pages/TabelServices'
import TabelServicesDetail from './Actions/TabelServicesDetail'
import TabelServicesAdd from './Actions/TabelServicesAdd'
import TransaksiAdd from './Actions/TransaksiAdd'
import TransaksiDelete from './Actions/TransaksiDelete'
import About from './Pages/About'
import TodoList from './Pages/TodoList'
import TodoDelete from './Actions/TodoDelete'
//import {ContextServiceProvider} from './Context/ContextService'

function App() {
  return (
    <>
  {/*  <ContextServiceProvider> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tabel-transaksi" element={<TabelTransaksi />} />
        <Route path="/tabel-transaksi/add" element={<TransaksiAdd />} />
        <Route path="/tabel-transaksi/add/:slugEdit" element={<TransaksiAdd />} />
        <Route path="/tabel-transaksi/delete/:slugDelete" element={<TransaksiDelete />} />
        <Route path="/tabel-services" element={<TabelServices />} />
        <Route path="/tabel-services/add" element={<TabelServicesAdd />} />
        <Route path="/tabel-services/:slugDetail" element={<TabelServicesDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/todo-list/:update" element={<TodoList />} />
        <Route path="/todo-list/delete" element={<TodoDelete />} />
      </Routes>
  {/*   </ContextServiceProvider> */}
    </>
  );
}

export default App;
