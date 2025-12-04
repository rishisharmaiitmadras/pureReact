import {useState} from "react"


function App() {
  const [color,setColor]=useState("olive")


  return (
    <>
      <h1  id="heading" className="ml-[50%]" >Bg color Changer</h1>
      <div class="screen" className="h-90" style={{backgroundColor:color}}></div>
      <div className="text-center flex-10 border-2 mx-50 rounded-3xl bg-fuchsia-300">
        <button onClick={()=>setColor("yellow")}id="yellow" className="bg-amber-400 border-2 rounded-3xl">Yellow</button>
        <button onClick={()=>setColor("red")} id="red" className="bg-red-700 border-2 rounded-xl">Red</button>
        <button onClick={()=>setColor("blue")} id="blue" className="bg-blue-800 border-2 rounded-2xl">BLUE</button>
        <button onClick={()=>setColor("green")} id="green" className="bg-green-800 border-2 rounded-2xl">GREEN </button>
        <button onClick={()=>setColor("grey")} id="grey" className="bg-gray-700  border-2 rounded-2xl">GREY</button>
      </div>
    </>
  )
}

export default App
