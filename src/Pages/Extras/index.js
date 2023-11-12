
import styles from './index.module.css'

import Window from '../../Components/Window'

const Extras = () => {
    return (
    <div className={styles.extras_wrapper}>
        <Window target_quad={1} tab_name='extras_1.py' tab_type='python_filled' />
        <Window target_quad={2} tab_name='extras_2.py' tab_type='python_filled' />
        <Window target_quad={3} tab_name='extras_3.py' tab_type='python_filled' />
        <Window target_quad={4} tab_name='extras_4.py' tab_type='python_filled' />
    </div>
    )
}

export default Extras