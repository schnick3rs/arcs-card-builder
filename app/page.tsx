"use client"

import * as React from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import {FormControl, Grid2, TextareaAutosize, TextField, ToggleButton, ToggleButtonGroup} from "@mui/material";
import GuildCard from "@/app/ui/guild-card";
import VoxCard from "@/app/ui/vox-card";
import LoreCard from "@/app/ui/lore-card";
import FateCardSetup from "@/app/ui/fate-card-setup";
import FateCardResolution from "@/app/ui/fate-card-resolution";
import {CardLayer} from "@/app/ui/CardSnippets";
import CardContainer from "@/app/ui/card-container";
import FateCardEdict from "@/app/ui/fate-card-edict";
import FateCardLaw from "@/app/ui/fate-card-law";


export default function Home() {

  const [title, setTitle] = React.useState('Mining Interest');
  const [raidCost, setRaidCost] = React.useState('2');
  const [resourceType, setResourceType] = React.useState('Fuel');
  const [text, setText] = React.useState('' +
      '> **Manipulate (Build):** Gain 1 Material.\n\n' +
      '**Prelude:** You may discard this to gain Material up to your number of empty resource slots. If the Material supply empties, steal the Material instead.'
  );

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <h1>Guild Card</h1>

        <Grid2 container spacing={2} width={1024}>
          <Grid2 size={12}>
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
            <GuildCard
                title={title}
                text={text}
                resourceType={resourceType}
                raidCost={raidCost}
                setKey={'BC'}
                setId={'01'}
                image={'/img/Art Guild Example.png'}
            />
          </Grid2>

          <Grid2 size={3}>
            <VoxCard
                title={title}
                text={text}
                setKey={'BC'}
                setId={'01'}
                image={'/img/Art Vox Example.png'}
            />
          </Grid2>

          <Grid2 size={3}>
            <LoreCard
                title={title}
                text={text}
                setKey={'BC'}
                setId={'01'}
                image={'/img/Art Lore Example.png'}
            />
          </Grid2>

          <Grid2 size={3}>
            <FateCardSetup
                fate={'Steward'}
                act={1}
                text={`1. Gain Imperial Authority (02) and Dealmakers (03).\n2. Gain the First Regent tile.\n\n_Flip this card over._`}
                setKey={'BC'}
                setId={'01'}
            />
          </Grid2>

          <Grid2 size={3}>
            <FateCardResolution
                fate={'Steward'}
                act={1}
                text={`**If you completed your objective:**\n\n1. Add Council Intrigue (05), Tax Collectors (06), and Hunter Squads (07) to the Court deck.\n\n2. Add Imperial Protectors (08) to the rules booklet. Explain it to everyone.\n\n3. Scrap Empire Falls (09) and 2 Lesser Regents (10–11).\n\n**If you failed your objective:**\n\n1. Scrap Council Intrigue (05), Tax Collectors (06), Hunter Squads (07), and Imperial Protectors (08).\n\n2. Add Empire Falls (09) and 2 Lesser Regents (10–11) to the Court deck.\n\n3. Add Dealmakers (03) to the Court deck.`}
                setKey={'BC'}
                setId={'01'}
            />
          </Grid2>

          <Grid2 size={3}>
            <CardContainer><CardLayer image={'https://ledercardcdn.seiyria.com/cards/arcs/en-US/F104.webp'}></CardLayer></CardContainer>
          </Grid2>

          <Grid2 size={3}>
            <FateCardEdict
                fate={'Steward'}
                act={1}
                position={2}
                title={`Imperial Quorum`}
                text={`Resolve the effects of Edict 03—Govern the Imperial Reach, or Govern with Authority in Act III—as follows, then skip Edict 03 itself.\n\n**First, Collect Demand:** The First Regent collects the Demand.\n\n**Second, Take Action:** The Regent with the most starports built _**may**_ take the Imperial Action. On a tie, skip this. Third,\n\n**Change Policy:** The Regent with the most cities built _**may**_ change the Policy of Edict 03. On a tie, skip this.\n\n_The conditions "most starports built" and "most cities built" do include cities and starports on Flagship boards._`}
                setKey={'BC'}
                setId={'01'}
            />
          </Grid2>

          <Grid2 size={3}>
            <FateCardLaw
                fate={'Steward'}
                act={1}
                title={`Imperial Quorum`}
                text={`Resolve the effects of Edict 03—Govern the Imperial Reach, or Govern with Authority in Act III—as follows, then skip Edict 03 itself.\n\n**First, Collect Demand:** The First Regent collects the Demand.\n\n**Second, Take Action:** The Regent with the most starports built _**may**_ take the Imperial Action. On a tie, skip this. Third,\n\n**Change Policy:** The Regent with the most cities built _**may**_ change the Policy of Edict 03. On a tie, skip this.\n\n_The conditions "most starports built" and "most cities built" do include cities and starports on Flagship boards._`}
                setKey={'BC'}
                setId={'01'}
            />
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
