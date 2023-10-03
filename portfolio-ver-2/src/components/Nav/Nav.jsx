import LogoSection from '../LogoSection/LogoSection.jsx'
import './Nav.scss'

const Nav = (props) => {
    return (<>
        <header class="header">
            <LogoSection/>
            <nav class="nav">
                <a href="#work">
                    <div>Work</div>
                </a>
                <a href="#about">
                    <div>About</div>
                </a>
                <a href="https://drive.google.com/file/d/1x1dF-KLGWM5JVn1CAwy5aj79FAntjEoF/view?usp=share_link" target="_blank" rel="noreferrer">
                    Resume
                </a>
            </nav>
        </header>
    </>)
}

export default Nav