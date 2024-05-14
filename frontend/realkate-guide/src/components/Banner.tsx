import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src="/img/banner1.jpg" alt="Banner" fill={true} />
        </div>
    )
}
