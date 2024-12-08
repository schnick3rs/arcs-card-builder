import styles from "./vox-card.module.scss";
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

export default function VoxCard({ title, image, text, setKey, setId }: Props) {

    const type = 'Vox';

    const imageUrl = `url("${image}")`;

    const P = ({ children }) => <p className={styles.text.p}>{children}</p>

    return (
        <CardContainer>
            <CardLayer image={'/img/CardAsset-Frame-Vox.png'} />
            <CardLayer image={image} />
            <div className={`${titleFont.className} ${styles.title}`}>{title}</div>
            <div className={styles.text}><CardText text={text} /></div>
            <CardLayer image={'/img/CardAsset-Footer-Paper.png'} />
            <CardFooterText setKey={setKey} type={type} setId={setId} />
        </CardContainer>
    )
}