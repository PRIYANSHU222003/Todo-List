import { useState,useEffect } from 'react'
import Navbar from './components/navbar'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showfinished, setshowfinished] = useState(true)

  useEffect(() => {
    let todoString= localStorage.getItem("todos")
    if(todoString){
      let todos =JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)

    }
  }, [])
  

  const saveToLS= (params) => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setshowfinished(!showfinished)
  }
  

   const handleEdit = (e, id)=>{ 
    let t = todos.filter(i=>i.id === id) 
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    }); 
    setTodos(newTodos) 
    saveToLS()
  }

  const handleDelete = (e,id) => {
    let newTodos = todos.filter(item=>{
      return item.id !==id
    });
    setTodos(newTodos)
  }


  const handleAdd= ()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("") 
    saveToLS()
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => { 
    let id = e.target.name;  
    let index = todos.findIndex(item=>{
      return item.id === id;
    }) 
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }  


  return (
    <>
      <Navbar />
      {/* <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script> */}
      <div className="container mx-auto my-5 rounded-xl p-5 bg-red-600 min-h-[80vh] w-1/2">
      <h1 className='font-bold text-center text-xl '>iTask-Manage your todo</h1>
        <div className="addtodo my-5 flex flex-col gap-4">
          <h2 className='text-lg font-bold'>add a todo</h2>
          <input onChange={handleChange} value={todo} className='w-full rounded-full px-5 py-1' type="text"  />
          <button onClick={handleAdd} disabled={todo.length<=3} className='bg-violet-950 hover:font-bold p-2 py-1 text-white rounded-md mx-6'>Save</button>
        </div>
        <input className='my-4' onChange={toggleFinished} type="checkbox" name="" checked={showfinished} id="" />show finished
        <h2 className='text-lg font-bold'>your todo</h2>
        <div className="todos">
          {todos.length===0 && <div className='m-5'>No todos to display</div>}
          {todos.map(item => {
            return (showfinished || !item.isCompleted) && <div key={item.id} className="todo flex md:w-1/2 justify-between m-3 ">
              <div className='flex gap-5'>

              <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted}  id="" />
               <div className={item.isCompleted?"line-through":""}>{item.todo}</div> 
              </div>
              <div className="buttons">
                <button onClick={(e)=>handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><CiEdit /></button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-950 hover:font-bold p-2 py-1 text-white rounded-md mx-1'><MdDelete /></button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
