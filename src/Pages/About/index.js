import styles from './index.module.css'

import Tab from '../../Components/Tab'
import Icon from '../../Components/Icon'
import pfp from '../../images/pfp.jpg'

const Skills = (props) => {

    const skills = props.skills ? props.skills : [
        'Python',
        'PyTorch',
        'Common ML / Datascience Libraries',
        'Java',
        'C++',
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Unix',
        'Git'
    ]

    const mapped = skills.map((skill) => (
        <p key={skill} style={{
            backgroundColor: props.color ? props.color : 'white',
        }} className={styles.skill}>{skill}</p>
    ))

    return (
        <div className={styles.skills_panel}>
            {mapped}
        </div>
    )

}

const About = () => {
    
    const skills_trimble = [
        'C#', 'JavaScript', '.NET', 'SQL', 'MongoDB', 'Jira', 'GitHub'
    ]

    const skills_amazon = [
        'Python', 'AWS S3', 'AWS Lambda', 'Git'
    ]

    return (
        <>
            <Tab name={'about_me.txt'} width={'50%'} type={'text_file'} start_left={'50px'} start_top={'40px'}/>
            <div className={styles.about_wrapper}>
                <h1>About Me <img id='pfp' src={pfp} alt='augusto cohn'></img></h1>
                    <div className={styles.info}>
                        <p>

                            Hello! My name is Augusto Cohn and I am a master's student at Georgia
                            Institute of Technology studying Computer Science and Machine Learning.
                            For my undergraduate, I attended the University of Florida and graduated
                            Summa Cum Laude with a Bachelor of Science in Computer Science and a minor
                            in Pure Mathematics.

                            <br />
                            <br />

                            I've interned as a software developer at Trimble Inc. working on a construction
                            management software called eBuilder and at Amazon Web Services working in Data
                            Center Systems.

                        </p>
                    </div>
                    <div className={styles.skills}>
                        <h3>Skills</h3>
                        <Skills skills={null} color='#333'/>
                    </div>
            </div>
            <Tab name={'amazon.txt'} width={'50%'} type={'text_file'} start_left={'50%'} start_top={'40px'} />
            <Tab name={'trimble.txt'} width={'50%'} type={'text_file'} start_left={'50%'} start_top={'50%'} />
            <div className={styles.internships}>
                <div className={styles.internship}>
                    <Icon icon='aws' color='#FF9900' size='60px' />
                    <p>

                        At Amazon I worked with DCS to make.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </p>
                    <div className={styles.skills}>
                        <h3>Skills</h3>
                        <Skills skills={skills_amazon} color='#FF9900'/>
                    </div>
                </div>
                <div className={styles.internship}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#004f83" viewBox="0 0 24 24">
                        <path d="M14.41 14.14c-.1-.87-.3-1.73-.62-2.54a4.03 4.03 0 0 1-4.18-.76c-.83.86-1.57 1.81-2.22 2.81 1.91 1.56 5.05 1.97 7.02.49M9.63 9.53c.59-.55 1.23-1.06 1.9-1.51a6.19 6.19 0 0 0-2.1-1.27c-.56.87-.48 2.01.2 2.79m2.59-2.02c.46-.34.95-.61 1.48-.82a3.16 3.16 0 0 0-3.56-.59c.77.34 1.48.82 2.09 1.41m-6.26-.97c-1.34 1.9-.71 4.67.84 6.41a19.84 19.84 0 0 1 2.26-2.84c-.86-1-1.03-2.42-.4-3.59-.89-.22-1.82-.21-2.7.02m2.7-.02 5.49 3.71c.66-.84.67-2.02.03-2.87-.5.2-.96.48-1.38.81.53.63.99 1.32 1.35 2.06M9.23 5.67c.59-.42 1.29-.65 2.01-.67-1.48-.25-3-.08-4.39.5.8-.09 1.61-.03 2.38.17m4.27 5.09c-.36-.76-.82-1.46-1.36-2.09-.68.45-1.32.96-1.92 1.51.9.79 2.17 1.02 3.28.58m1.95-2.11c.13.92-.23 1.84-.94 2.45.29.74.51 1.5.64 2.28a4.69 4.69 0 0 0 .3-4.73m-.17 5.91c.02.57 0 1.15-.08 1.72a6.823 6.823 0 0 0 1.42-4.75c-.1 1.13-.57 2.19-1.34 3.03m5.75-2.54-3.97-2.3c.47 1.5.46 3.1-.02 4.6l3.99-2.3ZM6.99 14.51c-.58.95-1.01 1.99-1.26 3.08a6.803 6.803 0 0 0 8.38-.15c.27-.7.4-1.45.38-2.2a6.941 6.941 0 0 1-7.5-.73m-.62-.72a6.651 6.651 0 0 1-1.73-6.18 6.787 6.787 0 0 0 .4 9.21c.31-1.07.76-2.09 1.34-3.03M8.19 4.3 4.24 2.03v4.55a7.563 7.563 0 0 1 3.95-2.27ZM4.24 22.01l3.98-2.3a7.597 7.597 0 0 1-3.98-2.28v4.58Z"/>
                    </svg>
                    <p>

                        At Trimble I worked with eBuilder to make... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </p>
                    <div className={styles.skills}>
                        <h3>Skills</h3>
                        <Skills skills={skills_trimble} color='#004f83'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About