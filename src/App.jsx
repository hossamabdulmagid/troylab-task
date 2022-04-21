import './App.css';
import Sidebar from "./components/sidebar/siderbar.component";
import {RapperAppComponent} from './App.styles'
import Footer from "./components/footer/footer.component";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import WalletComponent from "./pages/wallet/wallet.component";
import OrderComponent from "./pages/orders/orders.component";
import ShoppingComponent from "./pages/shopping/shopping.component";
import MoreComponent from "./pages/more/more.component";

const App = () => {
    return (
        <>
            <RapperAppComponent>
                <Sidebar/>
                <header className="App-header">
                    <Routes>
                        <Route path={'/'} exact element={<HomePage/>}/>
                        <Route path={'/wallet'} element={<WalletComponent/>}/>
                        <Route path={'/orders'} exact element={<OrderComponent/>}/>
                        <Route path={'/shopping'} exact element={<ShoppingComponent/>}/>
                        <Route path={'/more'} exact element={<MoreComponent/>}/>
                    </Routes>
                </header>
                <Footer/>

            </RapperAppComponent>

        </>

    )
        ;
}

export default App;
