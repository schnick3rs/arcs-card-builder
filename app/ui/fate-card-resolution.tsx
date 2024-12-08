import styles from "./fate-card-resolution.module.scss";
import * as React from "react";
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

export default function FateCardResolution({ fate, act, text, setKey, setId }: Props) {

    return (
        <CardContainer>

            <CardLayer image={`/img/CardAsset-Texture-Space.png`} />
            <CardLayer image={'/img/CardAsset-Frame-Resolution.png'} />

            <div className={styles.alert}><CardText text={"Wait to resolve this until the intermission"}/></div>

            <div className={styles.text}><CardText text={text}/></div>

            <CardFooterText setKey={setKey} type={'Resolution'} setId={setId} />

        </CardContainer>
    )
}