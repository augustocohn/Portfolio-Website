import transcript from '../../files/uf_unofficial_transcript.pdf'
import uf_logo from '../../images/uf_logo.png'
import gt_logo from '../../images/gt_logo.png'

import styles from './index.module.css'

import Window from '../../Components/Window'


const UF = () => {

    return (
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
            <a href={transcript} download='augusto_cohn_uf_transcript.pdf'>
                Click here to download my UF transcript
            </a>
        </div>
    )
}


const GT = () => {

    return (
        <div className={styles.gt_wrapper}>
            <img src={gt_logo} alt='gt' />
            <h4>Master of Science in Computer Science (In Progress)</h4>
            <ul>
                <li>Software Architecture</li>
                <li>Reinforcement Learning</li>
            </ul>
        </div>
    )
}



const Courses = () => {

    return (
        <div className={styles.education_wrapper}>
            <Window width='50%' height='100%' tab_name='uf.txt' tab_type='text_file' content={
                <UF />
            }/>
            <Window width='49.69%' height='100%' tab_name='gt.txt' tab_type='text_file' content={
                <GT />
            } />
        </div>
    )
}

export default Courses