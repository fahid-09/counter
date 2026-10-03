import styles from "../random-picker/random.module.css";

const Resultsection = (
    {
selectedNames,
remainingCount
    }:{
    selectedNames: string[];
    remainingCount: number
    }
) => {
    return (<>
        <div className={styles.QRcol}>
            <div className={styles.QRleft}>
                <h3>Selected Values</h3>

                {selectedNames.length === 0 ? (
                    <p>Selected values will appear here.</p>
                ) : (
                    <div>
                        {selectedNames.map((item, index) => (
                            <h2 key={`${item}-${index}`}>
                                🎉 {item}
                            </h2>
                        ))}
                    </div>
                )}

                <hr />

                <p>Remaining values: {remainingCount}</p>
            </div>
        </div>
    </>)
}

export default Resultsection;