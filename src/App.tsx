import { bemClassNames } from "./BemClassNames"
import { ServicesComponent } from "./Sections/Content/Services/ServicesComponent"
import { HeaderComponent } from "./Sections/Header/HeaderComponent"

const className = bemClassNames("app")

export const App = () => {
    return (
        <div className={className()}>
            <HeaderComponent />
            <main>
                <ServicesComponent />
            </main>
        </div>
    )
}
