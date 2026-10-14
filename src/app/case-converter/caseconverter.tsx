
import styles from "../case-converter/caseconverter.module.css";
import CaseTool from "./CaseTool";

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

            </div>
        </section>
    );
};

export default CaseConverter;

