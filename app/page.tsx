
import styles from './ui/home.module.css';
import {lusitana} from "@/app/ui/fonts";
import Image from "next/image";
export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div
                className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
            />

            <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
            </p>

            <p className={lusitana.className}>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
            </p>
            <div className={styles.shape}></div>

            <img
                src="/customers/evil-rabbit.png"
                alt="Screenshots of the dashboard project showing desktop and mobile versions"
            />
            <Image src={'/customers/evil-rabbit.png'} alt={"evil rabbit"} width={200} height={1300}/>

            <Image
                src="/hero-desktop.png"
                width={1000}
                height={20000}
                // className="hidden md:block"
                alt="Screenshots of the dashboard project showing desktop and mobile versions"
            />
        </main>
    );
}
