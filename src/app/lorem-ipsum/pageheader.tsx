import styles from "../lorem-ipsum/loremipsum.module.css";

const Pageheader = ()=>{
    return(<>
    <div className={styles.pageheader}>
                <h1>Lorem Ipsum Generator</h1>

                <p>
                    Generate clean placeholder text for mockups, layouts and
                    drafts — choose how much you need and copy it straight into
                    your project.
                </p>
            </div>
    </>)
}
export default Pageheader;