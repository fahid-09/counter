
import styles from "../lorem-ipsum/loremipsum.module.css";

const Result = (
    { result, handleCopy, handleClear }: { result: string, handleCopy: () => void; handleClear: () => void; }
) => {
    return (<>
        <h2 className={styles.paneltitel}>Result</h2>

        <div className={styles.textresult}>
            {result || "Your generated text will appear here."}
        </div>

        {result && (
            <div className="mt-3">
                <button
                    className="btn btn-primary me-2"
                    onClick={handleCopy}
                >
                    Copy
                </button>

                <button
                    className="btn btn-secondary"
                    onClick={handleClear}
                >
                    Clear
                </button>
            </div>
        )}
    </>)
}
export default Result;