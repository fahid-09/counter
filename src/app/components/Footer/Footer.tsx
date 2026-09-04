
import styles from "../Footer/Footer.module.css"
import NavLinks from "../Nav Links/NavLinks";
const Footer = () => {
    return (<>
        <section className={styles.footersection}>
            <div className="row">
                <div className="col-4">
                     <h3>Updates as you type</h3>
                    <p>No buttons to press — every count <br /> refreshes live, so you always see the <br /> current state of your text.</p>
                </div>
                <div className="col-4">
                     <h3>Updates as you type</h3>
                    <p>All counting and converting happens on <br /> your device. Your text is never sent <br /> anywhere.</p>
                </div>
                <div className="col-4">
                     <h3>Built for daily use</h3>
                    <p>Bookmark it and come back — it loads fast <br /> and works the same way every time.</p>
                </div>
            </div>

        </section>
        <section className={styles.footersection2}>
            
                <div>
                    <span>Counterly — text tools, kept simple.</span>
                </div>
                <div>
                    <NavLinks showThird={false} showfourth={true}/>
                </div>

            
        </section>

    </>)
}

export default Footer;