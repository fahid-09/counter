"use client";

import { useState } from "react";
import styles from "../gpa-calculator/gpacalculator.module.css";
import RelatedTools from "../components/Related Tools/RelatedTools";

const GpaCalculator = () => {
    const [coursename, setcoursename] = useState("");
    const [credithrs, setcredithrs] = useState<number>();
    const [grade, setgrade] = useState<number>();
    const [gpa, setgpa] = useState<number>();
    const [btnclicked, setbtnclicked]= useState(false)
    const [courses, setCourses] = useState([
        {
            id: 1,
            coursename: "",
            credithrs: "",
            grade: "4",
        },
    ]);
    const removeCourse = (id: number) => {
        console.log(id)
        setCourses(courses.filter((course) => course.id !== id));
    }

    const updateCourse = (id: number, field: string, value: string) => {
        setCourses(
            courses.map((course) =>
                course.id === id
                    ? { ...course, [field]: value }
                    : course
            )
        );
    };
    

    const addCourse = () => {
        setCourses([
            ...courses,
            {
                id: Date.now(),
                coursename: "",
                credithrs: "",
                grade: "",
            },
        ]);
    };


    const calculateGPA = () => {
        setbtnclicked(true)
        let totalQualityPoints = 0;
        let totalCreditHours = 0;

        courses.forEach((course) => {
            const creditHours = Number(course.credithrs);
            const gradePoint = Number(course.grade);

            totalQualityPoints += creditHours * gradePoint;
            totalCreditHours += creditHours;
        });

        if (totalCreditHours === 0) {
            return;
        }

        const gpa = totalQualityPoints / totalCreditHours;
        setcredithrs(totalCreditHours)
        setgpa(gpa)
    };



    return (
        <>
            <div className={styles.pageheader}>
                <h1>GPA Calculator</h1>

                <p>
                    Add each course with its credit hours and grade — get your GPA on a 4.0 scale,
                    weighted the way your transcript actually calculates it.
                </p>
            </div>
            <div className={styles.toolpanel}>
                <div className={styles.toolpanelleft}>
                    <p className={styles.paneltitle}>Your Cources</p>
                    {courses.map((course, index) => (
                        <div className={styles.coursesection} key={course.id}>

                            <div className={styles.coursedata}>
                                {index === 0 && (
                                    <span className={styles.coursetitle}>Course name</span>
                                )}
                                <input
                                    type="text"
                                    placeholder="e.g. Calculus I"
                                    onChange={(e) =>
                                        updateCourse(course.id, "coursename", e.target.value)
                                    }
                                />
                            </div>

                            <div className={styles.coursedata}>
                                {index === 0 && (
                                    <span className={styles.coursetitle}>Credit Hours</span>
                                )}
                                <input
                                    type="number"
                                    placeholder="3"
                                    min="0"
                                    onChange={(e) =>
                                        updateCourse(course.id, "credithrs", e.target.value)
                                    }
                                />
                            </div>

                            <div className={styles.coursedata}>
                                {index === 0 && (
                                    <span className={styles.coursetitle}>Grade</span>
                                )}
                                <select
                                    onChange={(e) =>
                                        updateCourse(course.id, "grade", e.target.value)
                                    }
                                >
                                    <option value="4">A</option>
                                    <option value="3.7">A-</option>
                                    <option value="3.3">B+</option>
                                    <option value="3">B</option>
                                    <option value="2.7">B-</option>
                                    <option value="2.3">C+</option>
                                    <option value="2">C</option>
                                    <option value="1.7">C-</option>
                                    <option value="1">D</option>
                                    <option value="0">F</option>
                                </select>
                            </div>

                            <button disabled={course.id <= 1} className={styles.crossbtn}
                                onClick={() => removeCourse(course.id)}>×</button>

                        </div>
                    ))}
                    <button onClick={addCourse} className={styles.addcourse}>+ Add another course</button>
                    <button onClick={calculateGPA} className={styles.calculate}>Calculate GPA</button>

                </div>
                <div className={styles.toolpanelright}>
                    <div className={styles.result}>
                        <h2>{gpa ? gpa : "--"}</h2>
                    </div>
                    <div className={styles.gpaextra}>
                        <div className={styles.gparow}>
                            <span>Total Credit Hours</span>
                            <span>{btnclicked ?   credithrs: "--"}</span>
                        </div>
                        <div className={styles.gparow}>
                            <span>Courses Counted</span>
                            <span>{btnclicked ? courses.length: "--"}</span>
                        </div>

                    </div>

                </div>

            </div>


            <RelatedTools />
        </>
    );
};

export default GpaCalculator;
