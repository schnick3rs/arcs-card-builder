import styles from "./fate-card-law.module.scss";
import * as React from "react";
import {CardFooterText, CardLayer, CardText} from "@/app/ui/CardSnippets";
import CardContainer from "@/app/ui/card-container";
import {titleFont} from "@/app/ui/fonts";

type Props = {
    fate: String,
    act: Number,
    title: String,
    text: String,
    setKey: String,
    setId: String,
}

const t = {
    1: 'I',
    2: 'III',
    3: 'III',
}

export default function FateCardLaw({ fate, act, title, text, setKey, setId }: Props) {

    return (
        <CardContainer>

            <CardLayer image={`/img/CardAsset-Texture-Space.png`} />
            <CardLayer image={`/img/CardAsset-Header-Title.png`} />

            <div className={styles.band}></div>

            <div className={styles.title+' '+titleFont.className}>
                {title}
            </div>


            <div className={styles.text}><CardText text={text}/></div>

            <CardLayer image={'/img/CardAsset-Footer-Space.png'} />
            <CardFooterText setKey={setKey} type={'Edict'} setId={setId} />

        </CardContainer>
    )
}