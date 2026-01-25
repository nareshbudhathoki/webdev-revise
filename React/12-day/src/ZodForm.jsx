import {useForm} from "react-hook-form";

function ZodForm(){

    const {register, handleSubmit, reset, formState:{errors}} = useForm();

    function submitForm(data, e){
        e.preventDefault();
        console.log(data);
        reset();
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
          <form 
            onSubmit={handleSubmit(submitForm)}
            className="bg-black/50 backdrop-blur-md border border-gray-700 rounded-2xl shadow-xl p-8 w-full max-w-md space-y-6"
          >
            <h2 className="text-2xl font-bold text-white text-center mb-4">Register</h2>
      
            <div className="flex flex-col">
              <label htmlFor="first" className="text-gray-200 mb-2">Name:</label>
              <input 
                id="first" 
                {...register('name')}
                className="px-4 py-2 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="Enter your name"
              />
              {errors.name && <span className=" text-gray-200 mt-2">{errors.name.message}</span>}
            </div>
      
            <div className="flex flex-col">
              <label htmlFor="second" className="text-gray-200 mb-2">Age:</label>
              <input 
                id="second" 
                {...register('age')}
                className="px-4 py-2 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="Enter your age"
              />
            {errors.age && <span className="text-gray-200 ">{errors.age.message}</span>}
            </div>
      
            <div className="flex flex-col">
              <label htmlFor="third" className="text-gray-200 mb-2">Password:</label>
              <input 
                id="third" 
                type="password"
                {...register('password')}
                className="px-4 py-2 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="Enter your password"
              />
            {errors.password && <span className="text-gray-200 ">{errors.password.message}</span>}
            </div>

      
            <button 
              type="submit"
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg transition shadow-md hover:shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>
      )      
}
export default ZodForm;