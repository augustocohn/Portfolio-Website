

import styles from './index.module.css'

import Tab from '../../Components/Tab'

const Courses = () => {

    return (
        <>
            <Tab name='course.py' width='100%' type='python' start_top='40px' start_left='50px'/>
            <div className={styles.courses_wrapper}>
                <h1>Courses</h1>
            </div>
        </>
    )
}

export default Courses