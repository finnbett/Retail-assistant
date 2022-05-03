import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const GpCalc = () => {
    const [cost, setCost] = useState()
    const [salePrice, setSalePrice] = useState([])
    const [output, setOutput] = useState('')
    

    const handleCostChange = (e) => {
       
        setCost(e.target.value)
    }
    const handleSalePriceChange = (e) => {
        
       setSalePrice(e.target.value)
       
    }

    const calcOutput = () => {
        console.log(salePrice)
        setOutput(((Number((salePrice-cost)/salePrice)*100)).toFixed(2))
    }

    useEffect(() => {
        console.log(typeof(salePrice))
    },[salePrice])

    return(
        <>
            <h1>Gp calc</h1>
            <Link to='/'><p>Home</p></Link>
            <label>Cost:
                <input placeholder="cost" type="text" value={cost} onChange={handleCostChange} />
            </label>
            <label >Sale Price:
                <input placeholder="salePrice" type="text" value={salePrice} onChange={handleSalePriceChange} />
            </label>
            <button onClick={calcOutput}>calculate</button>
            <p>Gross profit margin is <input type="text" id="output" value={output} readOnly /> %</p>
        </>
    )
}

export default GpCalc