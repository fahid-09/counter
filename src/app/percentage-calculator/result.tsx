import styles from "../percentage-calculator/percentage.module.css";

const PercentageResult = (
    {result}:{result:number| null}
)=>{
    return (<>
     <div className={styles.panel}>
                    <div className={styles.resultbox}>
                        {result !== null ? (
                            <p>
                                <strong>Result:</strong>{" "}
                                {result.toFixed(2)}
                            </p>
                        ) : (
                            "Your result will appear here"
                        )}
                    </div>
                </div>
    </>)
}
export default PercentageResult;