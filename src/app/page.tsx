"use client";

import styles from "./home.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.ezbuild} onClick={() => router.replace("https://www.roblox.com/communities/36026412/EZBuild-Studio#!/about")}>Easy Build Studio</h1>
      <button onClick={() => router.push("/career")} className={styles.btn}>
        Career
      </button>
      <div className={styles.Box}>
        <div>
          <div className={styles.About}>About Us</div>
          <div className={styles.AboutText}>
            Easy Build Studio is dedicated to creating high-quality Roblox games that are fun, engaging, and replayable. Our focus is on innovative gameplay and immersive experiences that keep players coming back.
          </div>
        </div>
      </div>
    </div>
  );
}
