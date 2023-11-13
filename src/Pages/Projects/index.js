import { useState } from 'react'

import styles from './index.module.css'

import Tab from '../../Components/Tab'
import Navigator from '../../Components/Navigator'
import { 
    LunarLander,
    SuttonRecreation,
    PokemonGAN,
} from './Pages/project_pages'

const Projects = () => {
    
    const pages = {
        'lunar_lander.py': <LunarLander />,
        'sutton_recreation.py': <SuttonRecreation />,
        'pokemon_gan.py': <PokemonGAN />,
    }

    let pageName = 'lunar_lander.py'
    const [page, setPage] = useState(pages[pageName])

    const updatePage = (e) => {
        setPage(pages[e])
        pageName = e
    }
    
    return (
        <>
            <Navigator options={pages} updatePage={updatePage}/>
            <div className={styles.projects_wrapper}>
                {page}
            </div>
        </>
    )
}

export default Projects

// <>
//     <Navigator options={pages} updatePage={updatePage}/>
//     <Tab name={pageName} width='100%' type='python' start_top='40px' start_left='249px' />
//     <div className={styles.projects_wrapper}>
//         {page}
//     </div>
// </>