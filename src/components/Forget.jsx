import React from 'react'
import { useNavigate } from 'react-router-dom'

const Forget = () => {
    const navigate = useNavigate();

    const handleSendEmail = () => {
        // You can also trigger the email sending logic here
        navigate('/mailotp');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white text-gray-500 max-w-96 w-full mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black/10">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Forget Password?</h2>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    className="w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
                    type="email"
                    placeholder="Enter your email"
                />
                <button
                    type="button"
                    onClick={handleSendEmail}
                    className="w-full my-3 bg-gray-800 active:scale-95 transition py-2.5 rounded text-white"
                >
                    Send Email
                </button>
                <p className="text-center mt-4">
                    Don’t have an account? <span className="text-blue-500 underline">Signup Now</span>
                </p>
            </div>
        </div>
    )
}

export default Forget
