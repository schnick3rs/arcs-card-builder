import styles from "./card-container.module.scss";
import * as React from "react";

export default function CardContainer({ children }) {

    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}