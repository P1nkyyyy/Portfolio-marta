import { FunctionComponent } from "react"
import { bemClassNames } from "../../../BemClassNames"

const className = bemClassNames("menu")

type NavBarProps = {

}

export const NavBar: FunctionComponent<NavBarProps> = ({ }) => {
    return (
        <nav role="navigation" className="navbar">
            <ul className={className()}>
                <li className={className("item")}>Úvod</li>
                <li className={className("item")}>Služby</li>
                <li className={className("item")}>O mně</li>
                <li className={className("item")}>Moje práce</li>
                <li className={className("item")}>Ceník</li>
            </ul>
        </nav>
    )
}