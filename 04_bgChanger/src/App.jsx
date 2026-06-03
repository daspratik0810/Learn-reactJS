import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [color, setColor] = useState("green")

  return (
    <div className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="relative block group" onClick={() => setColor("Red")}>
            <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
            <div className="transition bg-red-600 relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-2 ">
                <p className="text-xl font-outerSans font-medium">Red</p>
              </div>
            </div>
          </button>

          <button className="relative block group " onClick={() => setColor("green")}>
            <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
            <div className="transition bg-green-600 relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-2 ">
                <p className="text-xl font-outerSans font-medium">Green</p>
              </div>
            </div>
          </button>

          <button className="relative block group "onClick={() => setColor("Blue")}>
            <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
            <div className="transition bg-blue-400 relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-2 ">
                <p className="text-xl font-outerSans font-medium">Blue</p>
              </div>
            </div>
          </button>

          <button className="relative block group "onClick={() => setColor("Olive")}>
            <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
            <div className="transition bg-olive-500 relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-2 ">
                <p className="text-xl font-outerSans font-medium">Olive</p>
              </div>
            </div>
          </button>

          <button className="relative block group "onClick={() => setColor("Gray")}>
            <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
            <div className="transition bg-gray-600 relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-2 ">
                <p className="text-xl font-outerSans font-medium">Gray</p>
              </div>
            </div>
          </button>

          <button className="relative block group "onClick={() => setColor("Orange")}>
            <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
            <div className="transition bg-orange-500 relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-2 ">
                <p className="text-xl font-outerSans font-medium">Orange</p>
              </div>
            </div>
          </button>

          <button className="relative block group "onClick={() => setColor("Pink")}>
            <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
            <div className="transition bg-fuchsia-300 relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-2 ">
                <p className="text-xl font-outerSans font-medium">Pink</p>
              </div>
            </div>
          </button>

          <button className="relative block group "onClick={() => setColor("Purple")}>
            <span className="absolute inset-0  bg-indigo-600  rounded-lg"></span>
            <div className="transition bg-purple relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-2 ">
                <p className="text-xl font-outerSans font-medium">Purple</p>
              </div>
            </div>
          </button>

          <button className="relative block group "onClick={() => setColor("Lime")}>
            <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
            <div className="transition bg-lime-200 relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-2 ">
                <p className="text-xl font-outerSans font-medium">Lime</p>
              </div>
            </div>
          </button>

          <button className="relative block group "onClick={() => setColor("White")}>
            <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
            <div className="transition bg-white relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-2 ">
                <p className="text-xl font-outerSans font-medium">White</p>
              </div>
            </div>
          </button>

          <button className="relative block group "onClick={() => setColor("black")}>
            <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
            <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-2 ">
                <p className="text-xl font-outerSans font-medium">Black</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
