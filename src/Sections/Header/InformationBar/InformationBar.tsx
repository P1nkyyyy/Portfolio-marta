import { FunctionComponent } from "react";
import { InformationItem } from "./InformationItem/InformationItem";
import { ClockIcon, FacebookIcon, InstagramIcon, MapMarkerIcon, TelephoneIcon } from "../../../Assets/icons/InformationBar";
import { bemClassNames } from "../../../BemClassNames";

const className = bemClassNames("information-bar");

type InformationBarProps = {

}

export const InformationBar: FunctionComponent<InformationBarProps> = ({

}) => {
    return (
        <div className={className()}>
            <address className={className("contact-informations")}>
                <InformationItem text="Libivá 3/Mohelnice" icon={<MapMarkerIcon />} />
                <InformationItem text="Po-Pá: 14:00-19:00 So-Ne: Zavřeno" icon={<ClockIcon />} />
                <InformationItem text="+420 773 005 498" icon={<TelephoneIcon />} />
            </address>
            <div className={className("socials")}>
                <InstagramIcon />
                <FacebookIcon />
            </div>
        </div>

    )
}