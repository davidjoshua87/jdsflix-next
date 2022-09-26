import styles from '../styles/Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer_top}>
        <a className={styles.footer_top_a} href="#">
            Questions? Contact us.
        </a>
            </p>
            <ul className={styles.footer_links}>
                <li className={styles.footer_links_item}>
                    <a className={styles.footer_link} href="#">
                        <span>
                            FAQ
                        </span>
                    </a>
                </li>
                <li className={styles.footer_links_item}>
                    <a className={styles.footer_link} href="#">
                        <span>
                            Help Center
                        </span>
                    </a></li>
                <li className={styles.footer_links_item}>
                    <a className={styles.footer_link} href="#">
                        <span>
                            Account
                        </span>
                    </a>
                </li>
                <li className={styles.footer_links_item}>
                    <a className={styles.footer_link} href="#">
                        <span>
                            Media Center
                        </span>
                    </a>
                </li>
                <li className={styles.footer_links_item}>
                    <a className={styles.footer_link} href="#">
                        <span>
                            Investor Relations
                        </span>
                    </a>
                </li>
                <li className={styles.footer_links_item}>
                    <a className={styles.footer_link} href="#">
                        <span>
                            Jobs
                        </span>
                    </a>
                </li>
                <li className={styles.footer_links_item}>
                    <a className={styles.footer_link} href="#">
                        <span>
                            Redeem Gift Cards
                        </span>
                    </a>
                </li>
                <li className={styles.footer_links_item}>
                    <a className={styles.footer_link} href="#">
                        <span>
                            Buy Gift Cards
                        </span>
                    </a>
                </li>
                <li className={styles.footer_links_item}>
                    <a className={styles.footer_link} href="#">
                        <span>
                            Ways to Watch
                        </span>
                    </a>
                </li>
                <li className={styles.footer_links_item}>
                    <a className={styles.footer_link} href="#">
                        <span>
                            Terms of Use
                        </span>
                    </a>
                </li>
                <li className={styles.footer_links_item}>
                    <a className={styles.footer_link} href="#">
                        <span>
                            Privacy
                        </span>
                    </a>
                </li>
                <li className={styles.footer_links_item}>
                    <a className={styles.footer_link} href="#">
                        <span>
                            Cookie Preferences
                        </span>
                    </a>
                </li>
                <li className={styles.footer_links_item}>
                    <a className={styles.footer_link} href="#">
                        <span>
                            Corporate Information
                        </span>
                    </a>
                </li>
                <li className={styles.footer_links_item}>
                    <a className={styles.footer_link} href="#">
                        <span>Contact Us</span>
                    </a>
                </li>
                <li className={styles.footer_links_item}>
                    <a className={styles.footer_link} href="#">
                        <span>
                            Speed Test
                        </span>
                    </a>
                </li>
                <li className={styles.footer_links_item}>
                    <a className={styles.footer_link} href="#">
                        <span>
                            Legal Notices
                        </span>
                    </a>
                </li>
                <li className={styles.footer_links_item}>
                    <a className={styles.footer_link} href="#">
                        <span>
                            Only on Netflix
                        </span>
                    </a>
                </li>
            </ul>
            <div className="lang_selection_container" id="lang_switcher">
                <div className={styles.footer_select}>
                    <label className={styles.footer_select_label}>
                        <span className="ui_label_text">
                            Select Language
                        </span>
                    </label>
                    
                    <div className={styles.footer_select_arrow}>
                        <img
                            src="/assets/globe-icon.png"
                            alt="netflix"
                            width={20}
                            height={20}
                            className={styles.footer_select_icon}
                        />
                        <select className={styles.footer_select_medium} id="lang_switcher_select">
                            <option lang="id" value="/id/browse/genre/34399">
                                English
                            </option>
                            <option defaultValue="" lang="en" value="/id_en/browse/genre/34399">
                                Bahasa Indonesia
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
}
