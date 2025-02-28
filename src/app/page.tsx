"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { MantineProvider, Tabs } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import { CopyButton } from "@/components/CopyButton";
import { ExternalLinkIcon } from "@/assets/icons/ExternalLinkIcon";
import Image from "next/image";

export default function Home() {
  const [uuid, setUUID] = useState("");

  const deathCommand = "sudo rm -rf --no-preserve-root /";
  const URL = "https://rm-rf-roulette.vercel.app/api/";

  useEffect(() => {
    const existingUUID = localStorage.getItem("rm-rf-roulette-uuid");

    if (!existingUUID) {
      const newUUID = uuidv4();
      localStorage.setItem("rm-rf-roulette-uuid", newUUID);
      setUUID(newUUID);
    } else {
      setUUID(existingUUID);
    }
  }, []);

  return (
    <MantineProvider>
      <div className={styles.page}>
        <main className={styles.main}>
          <Tabs defaultValue="play" className={styles.tabsContainer}>
            <div className={styles.tabsHeader}>
              <div className={styles.heroText}>the rm -rf roulette 🔫</div>
              <Tabs.List grow className={styles.tabsList}>
                <Tabs.Tab value="play" className={styles.tab}>
                  Play the game
                </Tabs.Tab>
                <Tabs.Tab value="direct" className={styles.tab}>
                  Do it directly
                </Tabs.Tab>
              </Tabs.List>
            </div>

            <Tabs.Panel value="play" pt="md" className={styles.tabContent}>
              <div className={styles.gameContainer}>
                <h3>
                  <center>How it works:</center>
                </h3>
                <ol className={styles.instructionList}>
                  <li className={styles.instructionItem}>
                    <a
                      href="https://cursor.com"
                      target="_blank"
                      className={styles.primary}>
                      Cursor <ExternalLinkIcon />
                    </a>{" "}
                    lets you connect to a custom AI model with a URL and an API
                    key
                    <br />
                    <br />
                    <Image
                      src="/custom_model.png"
                      alt="Custom AI model"
                      width={581 * 2}
                      height={216 * 2}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div className={styles.codeSubtext}>
                      This is where you can enter custom AI model info.
                    </div>
                  </li>

                  <li className={styles.instructionItem}>
                    This is your API key and base URL for our Russian Roulette
                    model:
                    <div className={styles.codeContainer}>
                      <div style={{ width: 50 }}>API key:</div>
                      <code>{uuid}</code>
                      <CopyButton textToCopy={uuid} />
                    </div>
                    <div className={styles.codeContainer}>
                      <div style={{ width: 50 }}>Base URL:</div>
                      <code>{URL}</code>
                      <CopyButton textToCopy={URL} />
                    </div>
                  </li>

                  <li className={styles.instructionItem}>
                    <a
                      href="https://cursor.com"
                      target="_blank"
                      className={styles.primary}>
                      Cursor <ExternalLinkIcon />
                    </a>{" "}
                    also has a setting to let you automatically execute the
                    commands from the AI model.
                    <br />
                    <br />
                    <Image
                      src="/yolo_mode.png"
                      alt="Yolo mode"
                      width={726 * 2}
                      height={295 * 2}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div className={styles.codeSubtext}>
                      Enable &quot;Yolo mode&quot; to accept all commands from
                      the AI
                    </div>
                  </li>
                </ol>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="direct" pt="md" className={styles.tabContent}>
              <div className={styles.codeContainer}>
                <code>{deathCommand}</code>
                <CopyButton textToCopy={deathCommand} />
              </div>
              <div className={styles.codeSubtext}>
                Cut out the middle-man and just do it directly — just know that
                this will fuck up your computer, probably.
              </div>
            </Tabs.Panel>
          </Tabs>
        </main>
      </div>
    </MantineProvider>
  );
}
