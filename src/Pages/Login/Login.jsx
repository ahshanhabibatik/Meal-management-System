import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await signIn(email, password);

        } catch (error) {
            console.error("Login failed:", error);
            // Optionally handle login error, e.g., show error message to user
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">

                <h2 className="text-2xl font-bold text-center text-gray-800">Login to Your Account</h2>


                <form className="space-y-4">

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="Enter your email"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="Enter your password"
                        />
                    </div>


                    <button onClick={handleLogin}
                        type="submit"
                        className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        Sign In
                    </button>
                </form>


                <div className="flex items-center justify-center space-x-2">
                    <span className="block w-16 h-px bg-gray-300"></span>
                    <span className="text-sm font-medium text-gray-500">or</span>
                    <span className="block w-16 h-px bg-gray-300"></span>
                </div>


                <button
                    type="button"
                    className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-sm font-semibold text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                    <span>Sign in with Google</span>
                </button>
            </div>
        </div >
    );
};

export default Login;
