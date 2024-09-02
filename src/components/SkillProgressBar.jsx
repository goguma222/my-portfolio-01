import React, { useState, useEffect } from "react";
import styles from "@/components/SkillProgressBar.module.css";

const SkillProgressBar = ({ skill, percentage }) => {
    const [progressWidth, setProgressWidth] = useState(0);

    useEffect(() => {
        setProgressWidth(percentage);
    }, [percentage]);

    return (
        <div className={styles.skill}>
            <div className={styles.skillName}>
                <span className="title">{skill} : </span>
                <span className="percentage"><em>{percentage}</em>%</span>
            </div>
            <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: `${progressWidth}%` }}></div>
            </div>
        </div>
    )
}

export default SkillProgressBar;