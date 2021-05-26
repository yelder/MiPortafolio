import React from 'react'
import './footer.componet.styles.css'

const Footer = () => {
    return (
        <div>
      <div className="py-2 text-center footer-style">© Yelder Da Silva &nbsp; {new Date().getFullYear()}</div>
    </div>
    )
}

export default Footer
