import Navbar from '@components/Navbar/Navbar'
import React from 'react'


const Layout: React.FC = ({ children }) => {
  return (
      <div className='w-full bg-teal-700 min-h-screen'>
        <Navbar />
        <main className='w-9/12 bg-slate-200 mx-auto'>
          {children}
        </main>
        
    </div>
  )
}

export default Layout