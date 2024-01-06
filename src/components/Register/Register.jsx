import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

import { auth } from "../../firebase.js"
import { useNavigate, Link } from "react-router-dom"
import UserContext from "../../context/UserContext.js"
import { useContext } from "react"


const Register = () => {
    const navigate = useNavigate()
    

    const { input, setInput } = useContext(UserContext)
    const handleInputChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, input.email, input.password);
      
          // Set the display name after user registration
          await updateProfile(userCredential.user, {
            displayName: input.username,
          });
      
          navigate('/login');
        } catch (error) {
          console.log(error.message);
        }
      };

    return (
        <div>

            <div className=" border bg-white rounded-lg border-blue-100" >
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign Up
                        </h2>
                    </div>
                    <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-3" onClick={handleSubmit} method="POST">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="username"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="Username"
                                    onChange={handleInputChange}
                                    value={input.username}
                                />
                            </div>
                            <div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder='Email Address'
                                    required
                                    className="block w-full bg-transparent rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleInputChange}
                                    value={input.email}
                                />
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder='Password'
                                    required
                                    className="block w-full bg-transparent rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleInputChange}
                                    value={input.password}
                                />
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already have an Account?{' '}
                            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div >

        </div >
    )
}

export default Register