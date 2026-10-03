import styles from "../gpa-calculator/gpacalculator.module.css";

const Pageheader = ()=>{
    return(<>
     <div className={styles.pageheader}>
                <h1>GPA Calculator</h1>

                <p>
                    Add each course with its credit hours and grade — get your
                    GPA on a 4.0 scale, weighted the way your transcript
                    actually calculates it.
                </p>
            </div>
    </>)
}
export default Pageheader;