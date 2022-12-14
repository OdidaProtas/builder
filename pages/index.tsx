import Head from "next/head";
import styles from "../styles/Home.module.css";

import { PrismaClient } from "../node_modules/.prisma/client";
import { trycatch } from "../util/trycatch";
import AppList from "../components/applist";

export async function getServerSideProps(context: any) {
  return {
    props: {
      apps: await getData(),
    },
  };
}

async function getData() {
  const prisma = new PrismaClient();
  const [apps = [], error] = await trycatch(prisma.app.findMany());
  return apps;
}

export default function Home({ apps }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AppList data={apps} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          DRE
        </a>
      </footer>
    </div>
  );
}
