"use client";
import { useState } from "react";
import styles from "../components/CaseTool.module.css"

const CaseTool = () => {
    const titleCase = (text: string) => {
  return text
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const sentenceCase = (text: string) => {
    return text
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s+\w)/g, (match) => match.toUpperCase());
};
function copyText(){
    
   navigator.clipboard.writeText(text);
   settextcopy(true);
  setTimeout(() => {
    settextcopy(false)
  }, 2000);
}
    const [text, settext] = useState("");
    const [textxopy, settextcopy]= useState(false)
    return (<>
        <div className={styles.casetool}>
            <textarea id={styles.mainText} placeholder="Type spmething to convert..." value={text}
            onChange={((e)=>settext (e.target.value))}></textarea>
            
            <div className="row" id={styles.casebtns}>
                <div className="col-3 p-0">
                    <button onClick={()=>settext(text.toUpperCase())} className={styles.casebtn}>UPPERCASE</button>
                </div>
                <div className="col-3 p-0">
                    <button onClick={()=>settext(text.toLowerCase())} className={styles.casebtn}>lowercase</button>
                </div>
                <div className="col-3 p-0">
                    <button onClick={() => settext(titleCase(text))} className={styles.casebtn}>Title Case</button>
                </div>
                <div className="col-3 p-0">
                    <button onClick={() => settext(sentenceCase(text))} className={styles.casebtn}>Sentence case</button>
                </div>
            </div>
             <div className={styles.outputlabel} >Result</div>
                    <div id="mytext" className={styles.caseoutput}>{text? text: "Your converted text will appear here"}</div>
            <button className={styles.resultbtn} onClick={copyText}>Copy Result</button>
           {textxopy && <span>text copied</span>}
        </div>

    </>)
}

export default CaseTool;