import { useState } from 'react'

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    console.log(password);
    console.log(age);
    // Clear inputs
    setName("");
    setPassword("");
    setAge("");
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 rounded-2xl 
               bg-black/40 backdrop-blur-lg 
               border border-white/10 
               shadow-xl shadow-black/50"
        >
          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            Register
          </h2>

          {/* Name */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              autoComplete="name"
              required
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg 
                   bg-black/60 text-white 
                   border border-white/20 
                   focus:outline-none focus:ring-2 focus:ring-purple-500
                   placeholder-gray-400"
              placeholder="Enter your name"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label
              htmlFor="pass"
              className="block text-sm text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              autoComplete="current-password"
              required
              id="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg 
                   bg-black/60 text-white 
                   border border-white/20 
                   focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
            />
          </div>

          {/* Age */}
          <div className="mb-6">
            <label
              htmlFor="age"
              className="block text-sm text-gray-300 mb-1"
            >
              Age
            </label>
            <input
              type="number"
              autoComplete="off"
              required
              min={1}
              max={200}
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 rounded-lg 
                   bg-black/60 text-white 
                   border border-white/20 
                   focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your age"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg 
                 bg-gradient-to-r from-purple-600 to-pink-600 
                 text-white font-semibold 
                 hover:from-purple-700 hover:to-pink-700 
                 transition-all duration-300
                 shadow-lg shadow-purple-500/30"
          >
            Submit
          </button>
        </form>
      </div>

    </>
  )
}

export default App
