import styles from "./fate-card-setup.module.scss";
import * as React from "react";
import {titleFont} from '@/app/ui/fonts';
import {CardFooterText, CardLayer, CardText} from "@/app/ui/CardSnippets";
import CardContainer from "@/app/ui/card-container";

type Props = {
    fate: String,
    act: Number,
    text: String,
    setKey: String,
    setId: String,
}

const t = {
    1: 'I',
    2: 'III',
    3: 'III',
}

export default function FateCardSetup({ fate, act, text, setKey, setId }: Props) {

    return (
        <CardContainer>

            <CardLayer image={`/img/CardAsset-Texture-Space.png`} />
            <CardLayer image={`/img/CardAsset-Header-Setup_Objective.png`} />

            <div className={`${titleFont.className} ${styles.title}`}>{`${fate} - Act ${t[act]}`}</div>

            <div className={styles.text}><CardText text={text}/></div>

            <CardLayer image={'/img/CardAsset-Footer-Space.png'} />
            <CardFooterText setKey={setKey} type={'Setup'} setId={setId} />

        </CardContainer>
    )
}