"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Career() {
    const Router = useRouter();

    return (
        <>
            <div>
                <div className={styles.Job}>
                    <h1 onClick={() => Router.push("/career/softwareengineer")}>Software Engineer</h1>
                </div>
            </div>
        </>
    )
}