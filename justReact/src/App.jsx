
function taskItem (taskName) {
  return (
    <>
    <div className="flex justify-between items-center flex-row px-1 py-5 border-b border-dashed border-gray-300 ">
        <input type="checkbox" className=""/>
        <h6 className="line-through text-gray-500">{taskName}</h6>
        <button className="px-5 py-1 rounded-md bg-red-600 text-white hover:bg-red-500">Remove</button>
    </div> 
    </>
  )
}

function App() {

  return (
    <>
    <div id="outerContainer" className="flex items-center justify-center min-h-screen ">
      <div id="mainContainer" className="bg-white px-12 py-10 rounded-md justify-center shadow-[0px_0px_37px_0px_rgba(0,_0,_0,_0.05)]">

        <h1 className="text-4xl text-blue-500 font-bold text-center mb-10">Task Manager</h1>
        <div id="topBarContainer" className="flex justify-between gap-5 border-b border-solid border-gray-800 pb-5">
          <input type="text" placeholder="What needs to be done?" name="taskInput" id="taskInput" className="border-2 border-gray-200 px-3 py-2 rounded-md hover:border-black text-left "/>
          
          <button id="addBtn"
          onClick={}
          className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500">Add Task</button>
        </div>


        

        {/* اینجا تسک ها اضافه میشن */}
        <div id="taskListContainer">

          {taskItem("Task Ali")}
          {taskItem("Task Abolfazl")}
          {taskItem("Task Sevom")}
            
        </div>
      </div>
    </div>


    </>
  )
}

export default App
