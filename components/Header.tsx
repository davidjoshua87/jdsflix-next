import styles from '../styles/Header.module.scss';

export default function Header() {
return (
    <header className={styles.header}>
        <div className={styles.header_left}>
            <a href="/" className={styles.header_logo}>
                <img
                    src='/assets/logo.png'
                    alt="netflix"
                    className={styles.header_logo_desktop}
                />
                <img
                    src='/assets/logo-mobile.png'
                    alt="netflix"
                    className={styles.header_logo_mobile}
                />
            </a>
        </div>
        <div className={styles.header_right}>
            <div className={styles.header_text}>UNLIMITED TV SHOWS &amp; MOVIES</div>
            <button
                className={styles.header_btn}>
                JOIN NOW
            </button>
            <a
                href="#" className={styles.header_link}>
                SIGN IN
            </a>
        </div>
    </header>
);
}
