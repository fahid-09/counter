import styles from "../resume-builder/resume.module.css"
const Pageheader = ()=>{
    return (<>
    <div className={styles.pageheader}>
            <h1>Resume Builder</h1>

            <p>
               Fill in your details on the left and watch a clean, 
               ready-to-print resume take shape on the right.
            </p>
        </div>
    </>)
}
export default Pageheader;