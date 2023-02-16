
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [work, setWork] = useState('')
  const [toDos, setToDos] = useState([])

  const handleCLick = () => {
    // toast("Default Notification !");
    if(toDos?.some(toDo => toDo.id === work?.replaceAll(" ", "")))
    {
      toast.warning("Công việc đã được thêm trước đó")
    } else {
      toast.success("Bạn đã thêm thành công")
      setToDos(prev => [...prev, {id: work.replaceAll(" ", ""), job: work}])
    }
    setWork('')
  }

  const handleDelete = (id) => {
    setToDos(prev => prev?.filter(item => item.id !== id))
    toast.success("Bạn đã xóa thành công")
  }
  // console.log(work)
  return (
    <div>
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
                <li key={index} className="flex gap-8 items-center">
                  <span className="my-2">
                    {toDo.job}
                  </span>
                  <span onClick={() => handleDelete(toDo.id)} className="cursor-pointer">
                    X
                  </span>
                </li>
              )

            })
          }
        </ul>

      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>

  );
}

export default App;
