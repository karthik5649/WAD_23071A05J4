import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function RouteLayout() {
    return (
        <div>
            <div className='header d-flex justify-content-evenly align-content-center py-3 text-white d-flex justify-content-center list-unstyled'>
                <li>
                    <Link to='' className='link me-4 '>Register</Link>
                </li>
                <li>
                    <Link to='login' className='link me-4'>Login</Link>
                </li>
            </div>
            <div className='m-5'>
                <Outlet />
            </div>
        </div>
    )
}

export default RouteLayout
