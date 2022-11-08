import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>

    <Navbar />
    <h1 style={{display:'flex', justifyContent:'center'}}>Demo progress bar</h1>
    </>
    
  )
}
