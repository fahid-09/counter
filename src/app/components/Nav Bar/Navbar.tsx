import Link from "next/link";
import styles from "../Nav Bar/Navbar.module.css";
import NavLinks from "../Nav Links/NavLinks";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <span className={styles.wordmark}>
                    C<span className={styles.idot}>o</span>untrly
                </span>
            </Link>

            <NavLinks
                showtools={true}
                showgetstarted={true}
                showabout={true}
            />
        </nav>
    );
};

export default Navbar;

