import styles from "../Case Converter/CaseConverter.module.css"
import CaseTool from "../Case Tool/CaseTool"
const CaseConverter = () => {
    return (<>
        <section className={styles.casesection}>
            <div className="row">

                <section className="col-6">
                    <h2 className={styles.heading}>Change the case, keep <br /> the words.</h2>
                    <p>Switch between uppercase, lowercase, title case and sentence case in one click — handy for headings, forms and captions.</p>
                </section>

                <section className="col-6">
                    <CaseTool />

                   
                </section>
            </div>
        </section>


    </>)
}

export default CaseConverter;