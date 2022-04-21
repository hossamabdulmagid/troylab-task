import './App.css';
import Sidebar from "./components/sidebar/siderbar.component";
import {RapperAppComponent} from './App.styles'
import Footer from "./components/footer/footer.component";

const App = () => {
    return (
        <>
            <RapperAppComponent>
                <div className="App">
                    <header className="App-header">
                        <Sidebar/>
                    </header>
                </div>
                <Footer/>
            </RapperAppComponent>

        </>

    )
        ;
}

export default App;
