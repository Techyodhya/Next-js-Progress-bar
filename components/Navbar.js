import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
    <ul style={{color:'#29d',listStyleType:'none', display:'flex' , gap:'1rem'}}>
    <li>
     <Link href="/" >home</Link >
   
     </li>
   
     <li>
     <Link href="/about" >about</Link >
   
     </li>
     <li>
     <Link href="/contact" >contact</Link >

     </li>
     <li>
     <Link href="/login" >login</Link >
     </li>
    </ul>
   </div>
  )
}

export default Navbar