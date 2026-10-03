import styles from "../gpa-calculator/gpacalculator.module.css";

const ResultSection = (
    {gpa,btnclicked, credithrs, courses}:{gpa:number | undefined, btnclicked:boolean, credithrs:number | undefined, courses: {
    id: number;
    coursename: string;
    credithrs: string;
    grade: string;
}[]}
)=>{
    return(<>
    <div className={styles.toolpanelright}>
                    <div className={styles.result}>
                        <h2>
                            {gpa !== undefined ? gpa.toFixed(2) : "--"}
                        </h2>
                    </div>

                    <div className={styles.gpaextra}>
                        <div className={styles.gparow}>
                            <span>Total Credit Hours</span>
                            <span>{btnclicked ? credithrs : "--"}</span>
                        </div>

                        <div className={styles.gparow}>
                            <span>Courses Counted</span>
                            <span>
                                {btnclicked ? courses.length : "--"}
                            </span>
                        </div>
                    </div>
                </div>
    </>)
}
export default ResultSection;