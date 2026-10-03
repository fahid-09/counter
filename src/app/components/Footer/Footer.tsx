import styles from "../Footer/Footer.module.css";
import NavLinks from "../Nav Links/NavLinks";

const Footer = () => {
    return (
        <>
            <section className={styles.footersection}>
                <div className="row">
                    <div className="col-4">
                        <h3>Updates as you type</h3>
                        <p>
                            No buttons to press — every count refreshes live,
                            so you always see the current state of your text.
                        </p>
                    </div>

                    <div className="col-4">
                        <h3>Private by default</h3>
                        <p>
                            All counting and converting happens on your device.
                            Your text is never sent anywhere.
                        </p>
                    </div>

                    <div className="col-4">
                        <h3>Built for daily use</h3>
                        <p>
                            Bookmark it and come back — it loads fast and works
                            the same way every time.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.footersection2}>
                <span>Counterly — text tools, kept simple.</span>

                <NavLinks
                    showtools={false}
                    showgetstarted={false}
                    showabout={false}
                />
            </section>
        </>
    );
};

export default Footer;
