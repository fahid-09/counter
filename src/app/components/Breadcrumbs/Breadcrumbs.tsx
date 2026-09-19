"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
    const pathname = usePathname();

    const paths = pathname.split("/").filter(Boolean);

    return (
        <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.link}>
                Home
            </Link>

            {paths.map((path, index) => {
                const href = "/" + paths.slice(0, index + 1).join("/");

                return (
                    <span key={path}>
                        <span className={styles.separator}> / </span>

                        <Link href={href} className={styles.link}>
                            {path.replaceAll("-", "-")}
                        </Link>
                    </span>
                );
            })}
        </div>
    );
};

export default Breadcrumbs;