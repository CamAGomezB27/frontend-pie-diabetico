import React, { useEffect, useState } from "react";
import styles from "./StatCard.module.css";

interface StatCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
    progress: number; // 0 - 100
    color: string;
    onClick?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, progress, color, onClick }) => {
    const [animated, setAnimated] = useState(0);

    useEffect(() => {
        // pequeña demora para que la animación sea visible
        const id = setTimeout(() => {
            // sanitize progress
            const p = Math.max(0, Math.min(100, Math.round(progress)));
            setAnimated(p);
        }, 80);

        return () => clearTimeout(id);
    }, [progress]);

    return (
        <button
            className={styles.statCard}
            style={{ cursor: onClick ? "pointer" : "default" }}
            onClick={onClick}
            aria-label={title}
        >
            <div className={styles.statHeader}>
                <div className={styles.iconBox} style={{ backgroundColor: color }}>
                    <div className={styles.iconInner}>{icon}</div>
                </div>
                <div className={styles.titleWrap}>
                    <span className={styles.statTitle}>{title}</span>
                </div>
            </div>

            <div className={styles.valueWrap}>
                <p className={styles.statValue} style={{ color }}>{value}</p>
            </div>

            <div className={styles.progressBarContainer}>
                <div
                    className={styles.progressBar}
                    style={{ width: `${animated}%`, backgroundColor: color }}
                />
            </div>
        </button>
    );
};

export default StatCard;
