import styles from "./lore-card.module.scss";
import * as React from "react";
import {titleFont} from '@/app/ui/fonts';
import CardContainer from "@/app/ui/card-container";
import {CardFooterText, CardLayer, CardText} from "@/app/ui/CardSnippets";

type Props = {
    title: String,
    image: String,
    text: String,
    setKey: String,
    setId: String,
}

export default function LoreCard({ title, image, text, setKey, setId }: Props) {

    const type = 'Lore';

    return (
        <CardContainer>
            <CardLayer image={image} />
            <CardLayer image={'/img/CardAsset-Frame-Lore.png'} />
            <div className={`${titleFont.className} ${styles.title}`}>{title}</div>
            <div className={styles.text}><CardText text={text} /></div>
            <CardLayer image={'/img/CardAsset-Footer-Paper.png'} />
            <CardFooterText setKey={setKey} type={type} setId={setId} />
        </CardContainer>
    )
}