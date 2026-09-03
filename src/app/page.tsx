import Homepage from "../app/components/Homepage";
import Caseconverter from "../app/components/CaseConverter";
import styles from "./page.module.css";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Homepage />
      <Caseconverter />
      <Footer />
    </div>
  );
}
