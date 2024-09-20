import { FunctionComponent } from "react"
import { bemClassNames } from "../../../BemClassNames"

const classNameNav = bemClassNames("nav-bar")
const classNameMenu = bemClassNames("menu")

type NavBarProps = {

}

export const NavBar: FunctionComponent<NavBarProps> = ({ }) => {
    return (
        <div className={classNameNav()}>
            <h1 className={classNameNav("logo")}>Salon <span className={classNameNav("logo", { strong: true })}>Pinki</span></h1>
            <nav role="navigation" className={classNameNav("navigation")}>
                <ul className={classNameMenu()}>
                    <li className={classNameMenu("item")}><a href=""> Úvod </a></li>
                    <li className={classNameMenu("item")}><a href=""> Služby </a></li>
                    <li className={classNameMenu("item")}><a href=""> O mně </a></li>
                    <li className={classNameMenu("item")}><a href=""> Moje práce </a></li>
                    <li className={classNameMenu("item")}><a href=""> Ceník </a></li>
                </ul>
            </nav>
        </div>

    )
}