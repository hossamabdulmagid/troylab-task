import {RapperFooterComponent,HomeIcon} from "./footer.styles";

const Footer = () => {
    return (
        <RapperFooterComponent>
            <div className={"container text center align-items-center"}>
                <div className={"row"}>
                    <div className={'col footer'}>
                    <ul>
                        <li>
                            <h1>
                                <HomeIcon />
                            </h1>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </RapperFooterComponent>
    )
}

export default Footer;