import Homepage from "../app/components/Homepage";
import Caseconverter from "../app/components/CaseConverter";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Homepage />
      <Caseconverter />
    </div>
  );
}
