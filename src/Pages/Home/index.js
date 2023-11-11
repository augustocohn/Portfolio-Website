
import styles from './index.module.css'

import Icon from '../../Components/Icon'
import Tab from '../../Components/Tab'

const Home = () => {

    return (
        <>
            <Tab name='welcome.py' width='98%' type='python_filled' start_top='40px' start_left='50px' />
            <Tab name='info.txt' width='50%' type='text_file' start_top='40%' start_left='50px' />
            <Tab name='plans.txt' width='50%' type='text_file' start_top='40%' start_left='50%' />
            <div className={styles.welcome_title}>
                <h1 style={{ 
                    color: '#69b7cf',
                    textShadow: '2px 2px 1px black',
                }}>__name__</h1>
                <h1 style={{ color: '#999' }}>==</h1>
                <h1 style={{ 
                    fontSize: '70pt',
                    color: 'orange',
                    textShadow: '2px 2px 1px black'
                }}>Augusto Cohn</h1>
            </div>
            <div className={styles.welcome_subtitle}>
                <h3>Computer Science and Machine Learning Student</h3>
            </div>

            <div className={styles.info_wrapper}>
                <p style={{textAlign: 'center'}}>
                    This website serves as a portfolio and visual resume to 
                    showcase all that I have worked on and plan to work on in 
                    the future.
                </p>
                <h3>MISSION</h3>
                <p>
                    With the vast amount of data being collected today, I aim to 
                    utilize my knowledge of machine learning and computer science 
                    to expose hidden patterns in complex relationships to expand 
                    our understanding of the world around us. Software has become 
                    a center piece in our everyday lives and I want to be apart 
                    and contribute this period of vast technological expansion.
                </p>
            </div>

            <div className={styles.plans_wrapper}>
                <Icon icon={null} color='red' size='100px' />
                <h1 style={{
                    color: 'red',
                    textShadow: '2px 2px 1px black',
                }}>WORK IN PROGRESS</h1>
                <p>
                    This website is a work in progress and being updated regularly. 
                    Check back for new projects, designs, pages and information...
                </p>
            </div>
        </> 
    )

}

export default Home