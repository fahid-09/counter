import styles from "../random-picker/random.module.css";

const Pageheader = ()=>{
    return(<>

       <div className={styles.pageheader}>
                <h1>Random Picker</h1>

                <p>
                    Drop in a list of names or items, one per line, and choose
                    how many you want to pick randomly.
                </p>
            </div>
    </>)
}

export default Pageheader;