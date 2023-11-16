
import styles from './index.module.css'

import Icon from '../../Components/Icon'
import Window from '../../Components/Window'

const Title = () => {

    return (
        <div className={styles.welcome_title}>
            <h1 style={{
                color: '#69b7cf',
                textShadow: '2px 2px 1px black',
                fontSize: 'calc(15pt + 2vw)',
            }}>__name__</h1>
            <h1 style={{
                color: '#999',
                fontSize: 'calc(10pt + 2vw)',
            }}>==</h1>
            <h1 style={{
                color: 'orange',
                textShadow: '2px 2px 1px black',
                fontSize: 'calc(16pt + 2vw)'
            }}>Augusto Cohn</h1>
        </div>
    )
}

const SubTitle = () => {
    
    return (
        <div className={styles.welcome_subtitle}>
            <p>Computer Science and Machine Learning Student</p>
        </div>
    )
}

const TitleSection = () => {

    return (
        <div className={styles.title_section}>
            <Title />
            <SubTitle />
        </div>
    )
}


const InfoSection = () => {

    return (
        <div className={styles.info_section}>
            <h1>Welcome to my site!</h1>
            <p>Navigate using the icons on the side bar</p>
        </div>
    )
}


const WarningSection = () => {

    return (
        <div className={styles.warning_section}>
            <Icon icon={null} color='red' size='120px'></Icon>
            <h1>BUILDING IN PROGRESS</h1>
            <p>
                This site is a work in progress with nearly daily updates. The goal 
                is to have a fully responsive React app that is used as a visual 
                resume with interactive projects which is connected to a Flask 
                backend.
            </p>
            <h2>This site is not designed to be viewed on mobile</h2>
            <p>
                If content is not fit to screen, zoom out to be able to view. I 
                am working on making this site accessible from any device.
            </p>
            <h3>Features Planned</h3>
            <ul>
                <li>Mobile Support</li>
                <li>Animated Content / Smooth Navigation</li>
                <li>Interactive Displays for Projects</li>
                <li>Interactive Games / Art in Extras</li>
            </ul>
        </div>
    )
}


const Home = () => {

    return (
        <div className={styles.welcome_wrapper}>
            <Window row='1' column='1 / 3' tab_name='welcome.txt' tab_type='text_file' content={
                <TitleSection />
            }>
            </Window>
            <Window row='2' column='1' tab_name='info.txt' tab_type='text_file' content={
                <InfoSection />
            }/>
            <Window row='2' column='2' tab_name='warning.txt' tab_type='text_file' content={
                <WarningSection />
            }/>
        </div> 
    )

}

export default Home