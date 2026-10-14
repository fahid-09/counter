import styles from "../Home Page/Homepage.module.css"

const Pageheader = ()=>{
    return(<>
    <section className={styles.hero}>
        <h1>Small tools for everyday jobs.</h1>
        <p>15 free tools, grouped by what you're trying to do. Nothing to install, nothing to sign up for.</p>
    </section>
    </>)
}

export default Pageheader;