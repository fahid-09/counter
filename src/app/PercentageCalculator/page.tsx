"use client"

import { useState } from "react";
import styles from "../PercentageCalculator/percentage.module.css";

// className={`${styles.btn} ${styles.active}`}
const PercenatgeCalculator = () => {

    const [active, setactive] = useState("button1")
    const [X, setX] = useState<number>(0);
    const [Y, setY] = useState<number>(0);
    const [result, setresult] = useState<number>(0)

    const percentage = ()=>{
        setresult(X/100 *Y)
    }
    const iswhatpercntage = ()=>{
        setresult(X*100/Y)
    }
    const percentageChange = () => {
    setresult(((Y - X) / X) * 100);
}
    
    return (<>
    value of x is {X} and value of y is {Y}
        <div className={styles.pageheader}>
            <h1>Percentage Calculator</h1>
            <p>Three common percentage problems, solved instantly — pick the one that matches what you're trying to work out.</p>
        </div>

        <div className={styles.tabs}>
            <button onClick={() => setactive("button1")} className={`${styles.tabbutton} ${active === "button1" ? styles.active : ""}`} >What is X% of Y?</button>
            <button onClick={() => setactive("button2")} className={`${styles.tabbutton} ${active === "button2" ? styles.active : ""}`}>X is what % of Y?</button>
            <button onClick={() => setactive("button3")} className={`${styles.tabbutton} ${active === "button3" ? styles.active : ""}`}>% change from X to Y</button>
        </div>

        <div className={styles.toollayout}>
           {active === "button1" &&  <div className={styles.panel}>
                <div className={styles.paneltitle}>Enter Values</div>
                <div>what is <input type="number" value={X} onChange={(e)=>setX(Number(e.target.value))}/>  % of 
                <input type="number" value={X} onChange={(e)=>setY(Number(e.target.value))}/>?</div>
                <button onClick={percentage}>Calculate</button>
            </div>}
            {active === "button2" &&  <div className={styles.panel}>
                <div className={styles.paneltitle}>Enter Values</div>
                <div><input type="number" value={X} onChange={(e)=>setX(Number(e.target.value))}/>is what % of
                <input type="number" value={X} onChange={(e)=>setY(Number(e.target.value))}/>?</div>
                <button onClick={iswhatpercntage}>Calculate</button>
            </div>}
           
          {active === "button3" &&  <div className={styles.panel}>
                <div className={styles.paneltitle}>Enter Values</div>
                <div>Change from <input type="number" value={X} onChange={(e)=>setX(Number(e.target.value))}/>  to
                <input type="number" value={X} onChange={(e)=>setY(Number(e.target.value))}/>?</div>
                <button onClick={percentageChange}>Calculate</button>
            </div>}

            <div className={styles.panel}>
                <div className={styles.resultbox}>
                    
                    {result?  <p><strong>Result:</strong> {result.toFixed(2)}</p>:"your result will appear here"}
                </div>
            </div>
        </div>
    </>)
}

export default PercenatgeCalculator;