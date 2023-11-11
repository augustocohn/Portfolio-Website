
import styles from './index.module.css'


const Home = () => {

    return (
    <div className={styles.home_nav}>
        <h1>__name__ == Augusto Cohn</h1>
        <div className={styles.home_nav_divider}></div>
        <div className={styles.home_nav_options}>
            <p>Home</p>
            <p>About</p>
            <p>Course Work</p>
            <p>Projects</p>
            <p>Extras</p>
        </div>
    </div>
    )

}

export default Home