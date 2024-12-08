import styles from "@/app/ui/card-snippets.module.scss";
import * as React from "react";

import {textFont, titleFont} from '@/app/ui/fonts';
import Markdown from "react-markdown";

export function CardText({ text }) {

    const BQ = ({ children }) => <blockquote className={styles.text.blockquote}>{children}</blockquote>

    return (
        <div className={textFont.className + ' ' + styles.text}>
            <Markdown components={{
                blockquote: BQ
            }}>{text}</Markdown>
        </div>
    )
}

export function CardFooterText({ setKey, type, setId }) {
    return (
        <div className={`${titleFont.className} ${styles.footer}`}>
            <span style={{ width: '25%' }}>{setKey}</span>
            <span style={{ width: '50%', color: 'white' }}>{type}</span>
            <span style={{ width: '25%' }}>{setId}</span>
        </div>
    )
}

export function CardLayer({ image }) {
    const imageUrl = `url("${image}")`;
    return (
        <div className={styles.layer} style={{backgroundImage: imageUrl}}></div>
    )
}