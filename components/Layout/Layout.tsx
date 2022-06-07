import Navbar from '@components/Navbar/Navbar'
import React from 'react'


const Layout: React.FC = ({ children }) => {
  return (
      <div className='container'>
        <Navbar />
        {children}
        <style jsx>{`
          .container{
              background-color: salmon;
          }
        `}</style>
    </div>
  )
}

export default Layout