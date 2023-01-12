import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import { Container, } from './Components/index';
import { Header, Footer } from "./Sections/index";
import { Home, Profile } from "./Pages/index";


const App = () => {

    return (
        <>
            <Router>
                <Header />
                <Container>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Profile" element={<Profile />} />
                    </Routes>

                </Container>
                <Footer />
            </Router>

        </>
    )

}

export default App;