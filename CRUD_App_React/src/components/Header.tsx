import React from "react";
import styles from './stylesForComponents/Header.module.css'

type HeaderProps = {
    taskCounter: number;
}
// funkcija saņem no App informāciju par to, cik uzdevumu ir sarakstā [todos.length]
// izveido virsrastu, kas satur mainīgo
export const Header:React.FC<HeaderProps> = ({ taskCounter }) => {
    return (
    <div>
            <div className={styles.mainPageHeader}>
                BUCKET LIST {taskCounter} TASK(-S)
            </div>
    </div>
    )
}