
import { IconContext } from "react-icons";
import { IoHomeOutline } from "react-icons/io5";
import { BsPersonExclamation } from "react-icons/bs";
import { BiBook, BiSolidError, BiLogoPython } from "react-icons/bi";
import { TbFolderSearch, TbBrandPython } from "react-icons/tb";
import { AiOutlinePlusCircle } from "react-icons/ai"
import { FiGithub } from "react-icons/fi"
import { PiLinkedinLogo } from "react-icons/pi"
import { IoTerminalOutline } from 'react-icons/io5'
import { VscListFlat } from 'react-icons/vsc'
import { SiAmazonaws } from 'react-icons/si'

const icon_map = {
    'home': <IoHomeOutline />,
    'about_me': <BsPersonExclamation />,
    'course_work': <BiBook />,
    'projects': <TbFolderSearch />,
    'extras': <AiOutlinePlusCircle />,
    'github': <FiGithub />,
    'linkedin': <PiLinkedinLogo />,
    'terminal': <IoTerminalOutline />,
    'text_file': <VscListFlat />,
    'aws': < SiAmazonaws />,
    'python': <TbBrandPython />,
    'python_filled': <BiLogoPython />,
}


const Icon = (props) => {
 
    const { icon, color, size } = props

    const svg = icon_map[icon] ? icon_map[icon] : <BiSolidError />

    return (
        <IconContext.Provider value={{color: color, size: size}}>
            {svg}
        </IconContext.Provider>
    )

}

export default Icon