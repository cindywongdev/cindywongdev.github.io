import Nav from "../components/Nav/Nav.jsx"
import { AiOutlineArrowDown } from "react-icons/ai"

const Home = (props) => {
    const frontPageStyling = {
        backgroundColor: "",
        height: "93vh"
    }

    return <main>
            <a id="top"></a>
            <div class="front-page-div d-flex ai-center" style={frontPageStyling}>
                <div class="text-center">
                    <h1 class="name-title">Cindy Wong</h1>
                    <h2 class="job-title">Software Engineer</h2>
                    <h3 class="location-title">Brooklyn, NY</h3>
                    <Nav></Nav>
                    <a href="#work"><div class="down-button"><AiOutlineArrowDown/></div></a>
                </div>
            </div>
        </main>
}

export default Home