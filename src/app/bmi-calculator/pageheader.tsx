import styles from "../bmi-calculator/Bmi.module.css"

const Pageheader = ()=>{
    return(<>
     <div className={styles.pageheader}>
                <h1>BMI Calculator</h1>
                <p>
                    Enter your height and weight to get your Body Mass Index
                    and see where it falls on the standard scale.
                </p>
            </div>
    </>)
}
export default Pageheader;