import { bemClassNames } from "../../BemClassNames"
import { InformationBarComponent } from "./InformationBar/InformationBarComponent/InformationBarComponent"
import { NavBarComponent } from "./NavBar/NavBarComponent"

const className = bemClassNames("header")

export const HeaderComponent = () => {
    return (
        <header className={className()}>
            <InformationBarComponent />
            <NavBarComponent />
        </header>
    )
}