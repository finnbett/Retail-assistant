import React from "react";
import { useState, useEffect } from "react";



const TillCalc = () => {
    const [float, setFloat] = useState(0)
    const [tenc, setTenc] = useState(0)
    const [twentyCent, setTwentyCent] = useState(0)
    const [fiftyCent, setFiftyCent] = useState(0)
    const [oneDollar, setOneDollar] = useState(0)
    const [twoDollar, setTwoDollar] = useState(0)
    const [fiveDollar, setFiveDollar] = useState(0)
    const [tenDollar, setTenDollar] = useState(0)
    const [twentyDollar, setTwentyDollar] = useState(0)
    const [fiftyDollar, setFiftyDollar] = useState(0)
    const [hundredDollar, setHundredDollar] = useState(0)
    const [takings, setTakings] = useState(0)
    
    let [total, setTotal] = useState(0)
    const handleFloatChange = (e) => {
        setFloat(Number(e.target.value))
    }
    const handleTencChange = (e) => {
        setTenc(Number(e.target.value)*0.1)
    }
    const handleTwentyCentChange = (e) => {
        setTwentyCent(Number(e.target.value)*0.2)
    }
    const handleFiftyCentChange = (e) => {
        setFiftyCent(Number(e.target.value)*0.5)
    }
    const handleOneDollarChange = (e) => {
        setOneDollar(Number(e.target.value))
    }
    const handleTwoDollarChange = (e) => {
        setTwoDollar(Number(e.target.value)*2)
    }
    const handleFiveDollarChange = (e) => {
        setFiveDollar(Number(e.target.value)*5)
    }
    const handleTenDollarChange = (e) => {
        setTenDollar(Number(e.target.value)*10)
    }
    const handleTwentyDollarChange = (e) => {
        setTwentyDollar(Number(e.target.value)*20)
    }
    const handleFiftyDollarChange = (e) => {
        setFiftyDollar(Number(e.target.value)*50)
    }
    const handleHundredDollarChange = (e) => {
        setHundredDollar(Number(e.target.value)*100)
    }

    useEffect(() => {
        // console.log(tenc)
        // console.log(typeof(twentyCent))
    })

    const toAdd = [tenc,twentyCent,fiftyCent,oneDollar,twoDollar,fiveDollar,tenDollar,twentyDollar,fiftyDollar,hundredDollar]


    const calculate = () => {
        console.log(`lengh${toAdd.length}`)
        total = 0
        toAdd.forEach(value => {
            setTotal(total+=value)
            console.log(total)

        })
        setTakings(total - float)
        console.log(toAdd)
        
    }

    return(<>
    <h1>Till Calc</h1>
    <label htmlFor="float-target">Float Target<br/><input type="number" placeholder="Float Target" onChange={handleFloatChange} /></label>
    <p>Enter the quantity of notes and coins.</p>
    <label htmlFor="10c">10&cent;<input type="number" placeholder="10&cent;" onChange={handleTencChange} /></label>
    <label htmlFor="20c">20&cent;<input type="number" placeholder="20&cent;" onChange={handleTwentyCentChange} /></label>
    <label htmlFor="50c">50&cent;<input type="number" placeholder="50&cent;" onChange={handleFiftyCentChange} /></label>
    <label htmlFor="$1">$1<input type="number" placeholder="$1" onChange={handleOneDollarChange} /></label>
    <label htmlFor="$2">$2<input type="number" placeholder="$2" onChange={handleTwoDollarChange} /></label>
    <label htmlFor="$5">$5<input type="number" placeholder="$5" onChange={handleFiveDollarChange} /></label>
    <label htmlFor="$10">$10<input type="number" placeholder="$10" onChange={handleTenDollarChange} /></label>
    <label htmlFor="$20">$20<input type="number" placeholder="$20" onChange={handleTwentyDollarChange} /></label>
    <label htmlFor="$50">$50<input type="number" placeholder="$50" onChange={handleFiftyDollarChange} /></label>
    <label htmlFor="$100">$100<input type="number" placeholder="$100" onChange={handleHundredDollarChange} /></label>
    <button onClick={calculate}>calculate</button>
    <p>Your takings are ${takings.toFixed(2)}</p>
    </>
    )
}
    


export default TillCalc