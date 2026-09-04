import Homepage from "./components/Home Page/Homepage";
import Caseconverter from "./components/Case Converter/CaseConverter";
import styles from "./page.module.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Nav Bar/Navbar"


export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Homepage />
      <Caseconverter />
      <Footer />
    </div>
  );
}
