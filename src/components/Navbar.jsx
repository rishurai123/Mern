import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const { user, setUser } = useAppContext();
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to="/" className="flex items-center">
                <img
                    src={logo}
                    alt="Site Logo"
                    className="h-20 w-auto object-contain transition-transform duration-200 hover:scale-105"
                />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/product'>Product</NavLink>
                <NavLink to='/contact'>Contact</NavLink>

                <div class="flex items-center border pl-4 gap-2 bg-white border-gray-500/30 h-[46px] rounded-full overflow-hidden max-w-md w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#6B7280">
                        <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
                    </svg>
                    <input type="text" class="w-full h-full outline-none text-sm text-gray-500" />
                    <button type="submit" class="bg-indigo-500 w-32 h-9 rounded-full text-sm text-white mr-[5px]">Search</button>
                </div>

                <Link to="/cart" className="relative cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">3</button>
                </Link>

                {!user && (
                    <NavLink to="/login">
                        <button className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                            Login
                        </button>
                    </NavLink>
                )}
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <NavLink to='/' onClick={() => setOpen(false)}>Home</NavLink>
                <NavLink to='/products' onClick={() => setOpen(false)}>All Products</NavLink>

                <NavLink to='/products' onClick={() => setOpen(false)}>My Order</NavLink>
                <button className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                    Login
                </button>
            </div>

        </nav>
    )
}

export default Navbar