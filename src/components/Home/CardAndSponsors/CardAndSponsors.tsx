import styles from "@/components/Home/CardAndSponsors/CardAndSponsors.module.css";
import Image from "next/image";
import { cactus } from '@/app/(views)/ui/fonts';

export default function CardAndSponsors(){
    return(
        <section className={styles.cardAndSponsorsProperties}>
            <div className={styles.presentationCardProperties}>
                <h1>Carta de Bienvenida al Congreso</h1>
                <section className={styles.sectionCard}>
                    <div className={styles.infoPresentationProperties}>
                            <div className={styles.infoAndImageProperties}>
                                <div className={`${styles.paragraphProperties} ${styles.infoColorProperties} ${cactus.className}`}>
                                    <div className={styles.paragraphOneProperties}>
                                        <p>Nos complace darles la bienvenida a este espacio de encuentro, reflexión y
                                            aprendizaje compartido,
                                            organizado en conjunto por el Hospital de Niños "Dr. Debilio Blanco
                                            Villegas" de Tandil, el Hospital
                                            de Niños "Ricardo Gutiérrez" y el Sistema Integrado de Salud Pública.
                                        </p>
                                    </div>
                                    <p className={`${cactus.className}`}>
                                        Estas jornadas han sido pensadas
                                        como un puente entre experiencias hospitalarias, saberes interdisciplinarios y
                                        el compromiso cotidiano
                                        por una salud pública de calidad. Desde la ciudad hasta las sierras, nos unimos
                                        para seguir construyendo
                                        una atención pediátrica integral, humana y en constante evolución.
                                    </p>
                                </div>
                            </div>
                        <div className={`${styles.paragraphProperties} ${styles.secondParagraphProperties} ${styles.infoColorProperties} ${cactus.className}`}>
                            <p>Nos complace darles la bienvenida a este espacio de encuentro, reflexión y aprendizaje compartido,
                                organizado en conjunto por el Hospital de Niños "Dr. Debilio Blanco Villegas" de Tandil, el Hospital
                                de Niños "Ricardo Gutiérrez" y el Sistema Integrado de Salud Pública.
                            </p>
                            <p>
                                Gracias por ser parte de este evento. ¡Los invitamos a recorrer la página y conocer todas las actividades
                                que tenemos preparadas!
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div className={styles.sponsorsProperties}>
                <div className={styles.infoProperties}>
                    <h1>Nos acompañan</h1>
                </div>
                <div className={styles.imageProperties}>
                    <a href={"https://www.casasco.com.ar/es/"}><Image src={'/imgs/sponsors/casascoImg.jpg'} alt={"Imagen sponsor CardioVex"} width={281} height={112}/></a>
                    <a href={"https://www.pfizer.com.ar/"}><Image src={'/imgs/sponsors/pfizerSponsor.png'} alt={"Imagen sponsor CardioVex"} width={310} height={180} /></a>
                    <a href={"https://roemmers.com.ar/"}><Image src={'/imgs/sponsors/roemmersSponsor.png'} alt={"Imagen sponsor Laerdal"} width={310} height={140} /></a>
                </div>
            </div>
        </section>
    );
}