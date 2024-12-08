import styles from "./guild-card.module.scss";
import * as React from "react";
import {titleFont} from '@/app/ui/fonts';
import {CardFooterText, CardLayer, CardText} from "@/app/ui/CardSnippets";

type Props = {
    title: String,
    image: String,
    resourceType: String,
    raidCost: String,
    text: String,
    setKey: String,
    setId: String,
}

export default function GuildCard({ title, resourceType, image, raidCost, text, setKey, setId }: Props) {

    const type = 'Guild';

    return (
        <div className={styles.card}>

            <CardLayer image={image} />

            <CardLayer image={`/img/CardAsset-Frame-Guild-${resourceType}.png`} />

            <CardLayer image={`/img/CardAsset-Icon-Raid-Cost-${raidCost}.png`} />

            <div className={`${titleFont.className} ${styles.title}`}>{title}</div>

            <div className={styles.text}><CardText text={text}/></div>

            <CardLayer image={'/img/CardAsset-Footer-Paper.png'} />

            <CardFooterText setKey={setKey} type={type} setId={setId} />

        </div>
    )
}