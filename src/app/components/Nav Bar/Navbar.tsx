import Link from "next/link";
import styles from "../Nav Bar/Navbar.module.css";
import NavLinks from "../Nav Links/NavLinks";

const Navbar = () => {
    return (<>
        <nav className={styles.navbar}>
            <Link href={"/"}>
                <div className={styles.wordmark}>C<span className={styles.idot}>o</span>untrly</div>
            </Link>
            <NavLinks showtools={true} showgetstarted={true} showabout={false} />
        </nav>
    </>)
}

export default Navbar;