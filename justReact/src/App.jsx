
function addNumberBtn (num) {
  return (
    <>
    <button className="text-white bg-indigo-300 px-7 pt-3.5 pb-5 rounded-xl text-2xl text-gray-800 hover:bg-indigo-400 ">{num}</button>
    </>
  )
}

function App() {

  let numButtons = []
  for (let i = 0; i < 10; i++) {
    numButtons.push(
      <button
    key={i}
    className="text-white bg-indigo-300 px-7 pt-3.5 pb-5 rounded-xl text-2xl text-gray-800 hover:bg-indigo-400 "
    >
      {i}
    </button>
    )
  }

  return (
    <>
    <div id="outerContainer" className="flex items-center justify-center min-h-screen min-w-screen">
      <div id="mainContainer" className="bg-white px-8 py-8 rounded-2xl justify-center min-w-sm shadow-[0px_0px_37px_0px_rgba(0,_0,_0,_0.05)]">

          
          <h3 className="bg-gray-100 text-4xl font-bold px-2 pt-2.5 pb-4 text-right mb-6 rounded-xl
          shadow-[inset_0px_0px_10px_0px_rgba(0,_0,_0,_0.07)]">9.3 + 1.7</h3>


          <div className="flex justify-between mb-3">
              <button className=" bg-amber-400 px-6.5 pt-3.5 pb-5 rounded-xl text-2xl font-black text-gray-800 hover:bg-black hover:text-amber-400 ">+</button>
              <button className=" bg-amber-400 px-7 pt-3.5 pb-5 rounded-xl text-2xl font-black text-gray-800 hover:bg-black hover:text-amber-400 ">-</button>
              <button className=" bg-amber-400 px-6.5 pt-3.5 pb-5 rounded-xl text-2xl font-black text-gray-800 hover:bg-black hover:text-amber-400 ">×</button>
              <button className=" bg-amber-400 px-6.5 pt-3.5 pb-5 rounded-xl text-2xl font-black text-gray-800 hover:bg-black hover:text-amber-400 ">÷</button>
          </div>
          
          
          <div className="grid grid-cols-4 grid-rows-3 gap-3 justify-between mb-3">
            {numButtons}
            <button className="text-white bg-indigo-300 px-7 pt-3.5 pb-5 rounded-xl text-2xl text-gray-800 hover:bg-indigo-400 ">.</button>
            <button className="text-white bg-red-500 px-7 pt-3.5 pb-5 rounded-xl text-2xl text-gray-800 hover:bg-red-600 ">C</button>
            <button className="col-span-4 text-white bg-emerald-400 px-7 pt-3.5 pb-5 rounded-xl text-2xl text-gray-800 hover:bg-emerald-500 ">=</button>
          </div>



      </div>
    </div>


    </>
  )
}

export default App
