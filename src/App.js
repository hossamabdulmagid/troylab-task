import './App.css';
import Sidebar from "./components/sidebar/siderbar.component";
import {RapperAppComponent} from './App.styles'
import Footer from "./components/footer/footer.component";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const App = () => {
    return (
        <>
            <RapperAppComponent>
                <Sidebar/>
                <header className="App-header">
                    <Routes>
                        <Route path={'/'} exact element={<HomePage/>}/>
                    </Routes>
                </header>
                <Footer/>

            </RapperAppComponent>

        </>

    )
        ;
}

export default App;
