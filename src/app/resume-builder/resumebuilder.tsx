"use client"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import styles from "../resume-builder/resume.module.css"

const ResumeBuilder = () => {
    const [name, setname] = useState("Your name");
    const [jobtitle, setjobtitle] = useState("Your job title");
    const [email, setemail] = useState("youremail@.com");
    const [phone, setphone] = useState("+92 312 3456789");
    const [address, setaddress] = useState("Lahore, Pakistan");
    const [summary, setsummary] = useState("A brief summary about your experience, strengths and what you're looking for.")
    const [skills, setskills] = useState<string[]>(["Java Script", "React", "Next.js", "CSS"])

    const [experience, setexperience] = useState([
        {
            id: 1,
            role: "Frontend Developer",
            companyname: "Company Name",
            date: "Jan 2023 — Present",
            description: "Built and maintained web interfaces, collaborated with design and backend teams.",
        },
    ]);

    const [education, seteducation] = useState([
        {
            id: 1,
            degree: "BS Computer Science",
            universityname: "University Name",
            date: "2023 - 2024",
        },
    ]);

    const updateExperience = (
        id: number,
        field: string,
        value: string
    ) => {
        setexperience((prev) =>
            prev.map((exp) =>
                exp.id === id ? { ...exp, [field]: value } : exp
            )
        );
    };

    const updateEducation = (
        id: number,
        field: string,
        value: string
    ) => {
        seteducation((prev) =>
            prev.map((edu) =>
                edu.id === id ? { ...edu, [field]: value } : edu
            )
        );
    };
const downloadPDF = async () => {
        const invoice = document.getElementById("invoice");

        if (!invoice) return;

        const canvas = await html2canvas(invoice, {
            scale: 2,
            useCORS: true,
        });

        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

        pdf.save("resume.pdf");
    };
    const removeExperience = (id: number) => {
        setexperience((prev) =>
            prev.filter((exp) => exp.id !== id)
        );
    };
    const removeEducation = (id: number) => {
        seteducation((prev) =>
            prev.filter((edu) => edu.id !== id)
        );
    };
    const addexperience = () => {
        setexperience((prev) => [
            ...prev,
            {
                id: Date.now(),
                role: "Frontend Developer",
                companyname: "Company Name",
                date: "Jan 2023 — Present",
                description: "Built and maintained web interfaces, collaborated with design and backend teams.",
            },
        ]);
    };

    const addeducation = () => {
        seteducation((prev) => [
            ...prev,
            {
                id: Date.now(),
                degree: "BS Computer Science",
                universityname: "University Name",
                date: "2023 - 2024",
            },
        ]);
    };
    return (<>
        <div className={styles.toolpanel}>

            {/* LEFT SIDE */}
            <div className={styles.toolpanelleft}>
                <div className={styles.leftpaneltitle}>Personal details</div>
                <input type="text" className={styles.finput} onChange={(e) => setname(e.target.value)} value={name} />
                <input type="text" className={styles.finput} onChange={(e) => setjobtitle(e.target.value)} value={jobtitle} />
                <div className={styles.inputrow2}>
                    <input type="email" className={styles.finput} onChange={(e) => setemail(e.target.value)} value={email} />
                    <input
                        type="tel"
                        className={styles.finput}
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                    />

                </div>
                <input type="text" className={styles.finput} onChange={(e) => setaddress(e.target.value)} value={address} />

                <div className={styles.leftpaneltitle}>SUMMARY</div>
                <textarea className={styles.fsummary}
                    onChange={(e) => setsummary(e.target.value)} value={summary} />

                <div className={styles.experiencesection}>
                    <div className={styles.leftpaneltitle}>Experience</div>
                    <button type="button" className={styles.addbtn} onClick={addexperience}>+ add</button>
                </div>
                {/* add experience  */}
                {
                    experience.map((exp, index) => (
                        <div className={styles.explist} key={exp.id}>
                            <div className={styles.entryblock} >
                                <button className={styles.removeentry} onClick={() => removeExperience(exp.id)}>×</button>
                                <input type="text" className={styles.finput} value={exp.role}
                                    onChange={(e) =>
                                        updateExperience(
                                            exp.id,
                                            "role",
                                            e.target.value
                                        )
                                    } />
                                <input type="text" className={styles.finput} value={exp.companyname}
                                    onChange={(e) =>
                                        updateExperience(
                                            exp.id,
                                            "companyname",
                                            e.target.value
                                        )
                                    } />
                                <input type="text" className={styles.finput} value={exp.date}
                                    onChange={(e) =>
                                        updateExperience(
                                            exp.id,
                                            "date",
                                            e.target.value
                                        )
                                    } />
                                <textarea className={styles.fsummary} value={exp.description}
                                    onChange={(e) =>
                                        updateExperience(
                                            exp.id,
                                            "description",
                                            e.target.value
                                        )
                                    }></textarea>
                            </div>
                        </div>
                    ))
                }
                {/* add education */}

                <div className={styles.experiencesection}>
                    <div className={styles.leftpaneltitle}>Education</div>
                    <button type="button" className={styles.addbtn} onClick={addeducation}>+ add</button>
                </div>

{education.map((edu) => (
  <div className={styles.explist} key={edu.id}>
    <div className={styles.entryblock}>
      <button
        type="button"
        className={styles.removeentry}
        onClick={() => removeEducation(edu.id)}
      >
        ×
      </button>

      <input
        type="text"
        className={styles.finput}
        value={edu.degree}
        onChange={(e) =>
          updateEducation(edu.id, "degree", e.target.value)
        }
      />

      <input
        type="text"
        className={styles.finput}
        value={edu.universityname}
        onChange={(e) =>
          updateEducation(
            edu.id,
            "universityname",
            e.target.value
          )
        }
      />

      <input
        type="text"
        className={styles.finput}
        value={edu.date}
        onChange={(e) =>
          updateEducation(edu.id, "date", e.target.value)
        }
      />
    </div>
  </div>
))}


                <div className={styles.leftpaneltitle}>Skills</div>
                <input type="text" className={styles.finput} onChange={(e) => setskills(e.target.value.split(",").map(skill => skill.trim()))} value={skills} />

                <button type="button" className={styles.downloadbtn} onClick={downloadPDF}>Download PDF</button>

            </div>

            {/* RIGHT SIDE */}
            <div id="invoice" className={styles.toolpanelright}>
                <div className={styles.username}> {name ? name : "Your name"}</div>
                <div className={styles.usertitle}>{jobtitle ? jobtitle : "Job title"}</div>
                <div className={styles.usercontact}><span>{email ? email : "youremail@.com"}</span> <span>{phone ? phone : "+92 312 3456789"}</span> <span>{address ? address : "Your address"}</span></div>
                <div className={styles.resumesection}>
                    <div className={styles.resumesection_title}>SUmmary</div>
                    <div className={styles.resumesummary}>{summary ? summary : "A brief summary about your experience, strengths and what you're looking for."}</div>
                </div>

                <div className={styles.resumesection}>
                    <div className={styles.resumesection_title}>Experience</div>
                    {
                        experience.map((exp, index) => (
                            <div key={index}>
                                <div className={styles.r_entry}>
                                    <div className={styles.r_entrytop}><span className={styles.r_entryrole}>{exp.role}</span><span className={styles.r_entrydate}>{exp.date}</span></div>
                                    <div className={styles.r_entryorg}>{exp.companyname}</div>
                                    <div className={styles.r_entrydesc}>{exp.description}</div>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className={styles.resumesection}>
                    <div className={styles.resumesection_title}>Education</div>
                    {
                        education.map((edu, index) => (
                            <div key={index}>
                                <div className={styles.r_entry}>
                                    <div className={styles.r_entrytop}><span className={styles.r_entryrole}>{edu.degree}</span><span className={styles.r_entrydate}>{edu.date}</span></div>
                                    <div className={styles.r_entryorg}>{edu.universityname}</div>

                                </div>
                            </div>
                        ))
                    }

                </div>

                <div >
                    <div className={styles.resumesection_title}>Skills</div>
                    <div className={styles.skillsContainer}>
                        {skills.map((e, index) => (
                            <div key={index} className={styles.skillchip}>
                                {e}
                            </div>
                        ))}
                    </div>

                </div>


            </div>

        </div>
    </>)
}
export default ResumeBuilder;