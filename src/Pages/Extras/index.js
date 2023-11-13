
import styles from './index.module.css'

import Window from '../../Components/Window'

const Extras = () => {
    return (
    <div className={styles.extras_wrapper}>
        <Window width='50%' height='50%' tab_name='extras1.py' tab_type='python_filled' content={
            <h1>Extras 1</h1>
        }/>
        <Window width='49.69%' height='50%' tab_name='extras2.py' tab_type='python_filled' content={
            <h1>Extras 2</h1>
        }/>
        <Window width='50%' height='49.69%' tab_name='extras3.py' tab_type='python_filled' content={
            <h1>Extras 3</h1>
        }/>
        <Window width='49.69%' height='49.69%' tab_name='extras4.py' tab_type='python_filled' content={
            <h1>Extras 4</h1>
        }/>
    </div>
    )
}

export default Extras