import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <>
        <h1>Welcome to Retail assistant.</h1>
        <Link to="/till-calc"><p>Go to Till calculator</p></Link>
        <Link to="/gp-calc"><p>Go to Gross Profit calculator</p></Link>
            
        </>
    )
}

export default Home