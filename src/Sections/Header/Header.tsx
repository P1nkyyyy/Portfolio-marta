import { FunctionComponent } from "react"
import { bemClassNames } from "../../BemClassNames"
import { InformationBar } from "./InformationBar/InformationBar"
import { NavBar } from "./NavBar/NavBar"

const className = bemClassNames("header")

type HeaderProps = {

}

export const Header: FunctionComponent<HeaderProps> = ({ }) => {
    return (
        <header className={className()}>
            <InformationBar />
            <div>
                <h1 className={className("logo")}>Salon <span className={className("logo", { strong: true })}>Pinki</span></h1>
                <NavBar />
            </div>
        </header>
    )
}