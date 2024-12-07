"use client"

import * as React from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import {FormControl, Grid2, TextareaAutosize, TextField, ToggleButton, ToggleButtonGroup} from "@mui/material";
import Markdown from 'react-markdown';
import localFont from 'next/font/local';

// Font files can be colocated inside of `pages`
const arcsTitle = localFont({ src: '/fonts/copperplategothic_bold-webfont.woff2' })
const arcsText = localFont({ src: '/fonts/NeueKabelW01Regular/NeueKabelW01Regular.woff2' })

const frameGuildResource = {
  fuel: 'Fuel',
  material: 'Material',
  psionic: 'Psionic',
  relic: 'Relic',
  weapon: 'Weapon',
}

export default function Home() {

  const [title, setTitle] = React.useState('Mining Interest');
  const [raidCost, setRaidCost] = React.useState('2');
  const [resourceType, setResourceType] = React.useState('Fuel');
  const [text, setText] = React.useState('' +
      '**Manipulate (Build):** Gain 1 Material.\n\n' +
      '**Prelude:** You may discard this to gain Material up to your number of empty resource slots. If the Material supply empties, steal the Material instead.'
  );
  const P = ({ children }) => <p className={styles.text.p}>{children}</p>

  const raidCostUrl = `url(/img/CardAsset-Icon-Raid-Cost-${raidCost}.png)`;
  const resourceTypeUrl = `url(/img/CardAsset-Frame-Guild-${resourceType}.png)`;

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <h1>Guild Card</h1>

        <Grid2 container spacing={2} width={1024}>
          <Grid2 size={6}>
            <div>

              <TextField
                  id="title"
                  label="Title"
                  variant="outlined"
                  value={title}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setTitle(event.target.value)}}
              />
            </div>
            <div>
              <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  placeholder="Minimum 3 rows"
                  value={text}
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {setText(event.target.value)}}
              />
            </div>
            <FormControl size="small">
              <ToggleButtonGroup
                  color="Primary"
                  value={raidCost}
                  onChange={( event: React.MouseEvent<HTMLElement>, raidCost: string, ) => { setRaidCost(raidCost); }}
                  exclusive
                  aria-label="raid cost"
              >
                <ToggleButton value="">(none)</ToggleButton>
                <ToggleButton value="1">1</ToggleButton>
                <ToggleButton value="2" selected>2</ToggleButton>
                <ToggleButton value="3">3</ToggleButton>
                <ToggleButton value="X">X</ToggleButton>
              </ToggleButtonGroup>
            </FormControl>
            <FormControl size="small">
              <ToggleButtonGroup
                  color="Primary"
                  value={resourceType}
                  onChange={( event: React.MouseEvent<HTMLElement>, resourceType: string, ) => { setResourceType(resourceType); }}
                  exclusive
                  aria-label="resource type"
              >
                <ToggleButton value="Fuel">Fuel</ToggleButton>
                <ToggleButton value="Material">Material</ToggleButton>
                <ToggleButton value="Weapon">Weapon</ToggleButton>
                <ToggleButton value="Relic">Relic</ToggleButton>
                <ToggleButton value="Psionic">Psionic</ToggleButton>
              </ToggleButtonGroup>
            </FormControl>
          </Grid2>

          <Grid2 size={3}>
            <div className={styles.preview}>
              <div className={styles.layer}
                   style={{backgroundImage: `url(/example.png)`}}></div>
            </div>
          </Grid2>

          <Grid2 size={3}>
            <div className={styles.card}>
              <div className={styles.layer} style={{backgroundImage: `url(https://www.stuttgarter-nachrichten.de/media.facebook.f9006176-b321-4f9a-97a8-1b925d68c024.normalized.jpg)`}}></div>
              <div className={styles.layer} style={{backgroundImage: resourceTypeUrl}}></div>
              <div className={styles.layer} style={{backgroundImage: raidCostUrl}}></div>
              <div className={arcsTitle.className + ' ' + styles.title}>
                {title}
              </div>
              <div className={styles.guild}>
                <div className={arcsText.className + ' ' + styles.text}>
                  <Markdown components={{
                    p: P
                  }}>{text}</Markdown>
                </div>
              </div>
              <div className={styles.layerfooter} style={{backgroundImage: `url(/img/CardAsset-Footer-Paper.png)`}}></div>
              <div className={styles.footercontainer}>
                <span className={arcsTitle.className+' '+styles.footerset}>BC</span>
                <span className={arcsTitle.className+' '+styles.footertext}>Guild</span>
                <span className={arcsTitle.className+' '+styles.footerid}>02</span>
              </div>
            </div>
          </Grid2>
        </Grid2>

        <div className={styles.ctas}>
          <a
              className={styles.primary}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                className={styles.logo}
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
            />
            Deploy now
          </a>
          <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
          >
            Read our docs
          </a>
          <span>Icons made from <a href="https://www.onlinewebfonts.com/icon">svg icons</a>is licensed by CC BY 4.0</span>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Official ARCS Card library
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Leder Games
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Arcs on BGG
        </a>
      </footer>
    </div>
  );
}
