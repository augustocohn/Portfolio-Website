import transcript from '../../files/uf_unofficial_transcript.pdf'
import uf_logo from '../../images/uf_logo.png'
import gt_logo from '../../images/gt_logo.png'

import styles from './index.module.css'

import Tab from '../../Components/Tab'

const Courses = () => {

    return (
        <>
            <Tab name='education.py' width='98%' type='python' start_top='40px' start_left='50px'/>
            <div className={styles.education_wrapper}>
                <div className={styles.education_title}>
                    <h1>Education</h1>
                    <a href={transcript} download='augusto_cohn_uf_transcript.pdf'>
                        Click here to download my UF transcript
                    </a>
                </div>
            </div>
            <Tab name='uf_hightlights.txt' width='50%' type='text_file' start_top='20%' start_left='50px' />
            <div className={styles.uf_wrapper}>
                <img src={uf_logo} alt='uf' />
                <h4>Bachelor of Science in Computer Science</h4>
                <p>Honors: Summa Cum Laude</p>
                <ul>
                    <li>Operating Systems</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Databases I & II</li>
                    <li>Linear Algebre for Data Science</li>
                    <li>Fundamentals of Machine Learning</li>
                    <li>Math for Intelligent Systems</li>
                    <li>Machine Learning</li>
                </ul>
            </div>
            <Tab name='gt_hightligths.txt' width='50%' type='text_file' start_top='20%' start_left='50%' />
            <div className={styles.gt_wrapper}>
                <img src={gt_logo} alt='gt' />
                <h4>Master of Science in Computer Science (In Progress)</h4>
                <ul>
                    <li>Software Architecture</li>
                    <li>Reinforcement Learning</li>
                </ul>
            </div>
        </>
    )
}

export default Courses