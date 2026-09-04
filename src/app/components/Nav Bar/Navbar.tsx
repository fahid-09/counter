import styles from "../Nav Bar/Navbar.module.css";
import NavLinks from "../Nav Links/NavLinks";

const Navbar = () => {
    return (<>
        <nav className={styles.navbar}>
            <div className={styles.wordmark}>C<span className={styles.idot}>o</span>untrly</div>
            <NavLinks showThird={true} showfourth={false}/>

        </nav>
    </>)
}

export default Navbar;