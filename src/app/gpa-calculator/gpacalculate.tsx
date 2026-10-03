"use client";

import { useState } from "react";
import styles from "../gpa-calculator/gpacalculator.module.css";
import RelatedTools from "../components/Related Tools/RelatedTools";
import ResultSection from "./result";

const GpaCalculator = () => {
    const [credithrs, setcredithrs] = useState<number>();
    const [gpa, setgpa] = useState<number>();
    const [btnclicked, setbtnclicked] = useState(false);

    const [courses, setCourses] = useState([
        {
            id: 1,
            coursename: "",
            credithrs: "",
            grade: "4",
        },
    ]);

    const removeCourse = (id: number) => {
        setCourses(courses.filter((course) => course.id !== id));
    };

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
        setbtnclicked(true);

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

        setcredithrs(totalCreditHours);
        setgpa(totalQualityPoints / totalCreditHours);
    };

    return (
        <>


            <div className={styles.toolpanel}>
                <div className={styles.toolpanelleft}>
                    <p className={styles.paneltitle}>Your Courses</p>

                    {courses.map((course, index) => (
                        <div
                            className={styles.coursesection}
                            key={course.id}
                        >
                            <div className={styles.coursedata}>
                                {index === 0 && (
                                    <span className={styles.coursetitle}>
                                        Course name
                                    </span>
                                )}

                                <input
                                    type="text"
                                    placeholder="e.g. Calculus I"
                                    onChange={(e) =>
                                        updateCourse(
                                            course.id,
                                            "coursename",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>

                            <div className={styles.coursedata}>
                                {index === 0 && (
                                    <span className={styles.coursetitle}>
                                        Credit Hours
                                    </span>
                                )}

                                <input
                                    type="number"
                                    placeholder="3"
                                    min="0"
                                    onChange={(e) =>
                                        updateCourse(
                                            course.id,
                                            "credithrs",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>

                            <div className={styles.coursedata}>
                                {index === 0 && (
                                    <span className={styles.coursetitle}>
                                        Grade
                                    </span>
                                )}

                                <select
                                    onChange={(e) =>
                                        updateCourse(
                                            course.id,
                                            "grade",
                                            e.target.value
                                        )
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

                            <button
                                disabled={course.id <= 1}
                                className={styles.crossbtn}
                                onClick={() => removeCourse(course.id)}
                            >
                                ×
                            </button>
                        </div>
                    ))}

                    <button
                        onClick={addCourse}
                        className={styles.addcourse}
                    >
                        + Add another course
                    </button>

                    <button
                        onClick={calculateGPA}
                        className={styles.calculate}
                    >
                        Calculate GPA
                    </button>
                </div>
                <ResultSection gpa={gpa} credithrs={credithrs} btnclicked={btnclicked} courses={courses} />

            </div>

            <RelatedTools />
        </>
    );
};

export default GpaCalculator;