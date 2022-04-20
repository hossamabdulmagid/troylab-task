import './App.css';
import Sidebar from "./components/sidebar/siderbar.component";
import {RapperAppComponent} from './App.styles'

const App = () => {
    return (
        <>
            <RapperAppComponent>
                <div className="App">
                    <header className="App-header">
                        <Sidebar/>
                    </header>

                    <div className={"footer"}>

                    </div>


                </div>
            </RapperAppComponent>
            <h1 className={'text-center'}>
                Footer
            </h1>
        </>

    );
}

export default App;
