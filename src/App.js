
import { useState } from "react";
function App() {
  const [work, setWork] = useState('')
  const [toDos, setToDos] = useState([])

  const handleCLick = () => {
    setToDos(prev => [...prev, work])
    setWork('')
  }
  // console.log(work)
  return (
    <div className="flex flex-col gap-8 h-screen justify-center border-red-500 items-center">
      <div className="flex gap-8">
        <input type="text" className="outline-none border border-blue-600 px-4 py-2 w-[400px]" value={work} onChange={e => setWork(e.target.value)}>
        </input>

        <button type="buton" className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white" onClick={handleCLick}>
          Add
        </button>
      </div>
      <h3 className="font-bold text-lg">Content</h3>
      <ul>
        {
          toDos.map((toDo, index) => {
            return (
              <li key={index}>
                {toDo}
              </li>
            )
            
          })
        }
      </ul>
      
    </div>
  );
}

export default App;
