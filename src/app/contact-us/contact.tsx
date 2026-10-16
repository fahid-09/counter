import styles from "../contact-us/contact.module.css"

const Contact = ()=>{
    return(<>
 <section className={styles.contactform}>
    <label htmlFor="" className={styles.form_lable}>Name</label>
    <input type="text" name="" id="" placeholder="your name" className={styles.text_input}/>
    <label htmlFor=""className={styles.form_lable}>Email</label>
    <input type="text" name="" id="" placeholder="your example.com" className={styles.text_input}/>
    <label htmlFor="" className={styles.form_lable}>Message</label>
   <textarea name="" id="" className={styles.message}></textarea>

   <button type="button" className={styles.send_btn}>Send Message</button>
 </section>
    
    </>)
}
export default Contact;