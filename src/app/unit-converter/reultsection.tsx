import styles from "./unitconverter.module.css"; 
 
 const Resultsection = ({
    fromValue,
    fromUnit,
    result,
    toUnit,
}: {
    fromValue: number | "";
    fromUnit: string;
    result: number;
    toUnit: string;
}) => {
    return (
        <>
            {fromValue !== "" && (
                <div className={styles.resultline}>
                    <span className={styles.resultequation}>
                        {fromValue} {fromUnit} = {result} {toUnit}
                    </span>
                </div>
            )}
        </>
    );
};
export default Resultsection;