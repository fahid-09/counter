import styles from "../contact-us/contact.module.css"

const Pageheader = ()=>{
    return (<>
     <div className={styles.pageheader}>
                <h1>Get in touch</h1>
                <p>
                   Found a bug, have a tool idea, or something not working right? Send a message below.
                </p>
            </div>
    </>)
}

export default Pageheader;