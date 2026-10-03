import AllTool from "../All Tool/AllTool";
import CaseTool from "../Case Tool/CaseTool";
import styles from "../Case Converter/CaseConverter.module.css";

const CaseConverter = () => {
    return (
        <section className={styles.casesection}>
            <div className="row">
                <div className="col-6">
                    <h2 className={styles.heading}>
                        Change the case, keep <br /> the words.
                    </h2>

                    <p>
                        Switch between uppercase, lowercase, title case and
                        sentence case in one click — handy for headings,
                        forms and captions.
                    </p>
                </div>

                <div className="col-6">
                    <CaseTool />
                </div>

                <AllTool />
            </div>
        </section>
    );
};

export default CaseConverter;

