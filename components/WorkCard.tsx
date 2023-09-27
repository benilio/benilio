import Image from "next/image";
import Link from "next/link";

import styles from "@styles/modules/workcard.module.scss";

type CardProps = {
    imageUrl: staticImageData;
    imageAlt: string;
    title: string;
    type: string;
    pageUrl: string;
}

const WorkCard = ({imageUrl, imageAlt, title, type, pageUrl}: CardProps) => {
    return (
        <Link href={pageUrl} className={styles.card}>
            <Image src={imageUrl} alt={imageAlt} className={styles.card__image}/>
            <h2 className={styles.card__title}>{title}</h2>
            <h3 className={styles.card__type}>{type}</h3>
        </Link>
    )
}

export default WorkCard
