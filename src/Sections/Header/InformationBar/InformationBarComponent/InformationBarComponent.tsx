import { InformationItemComponent } from "../InformationItemComponent/InformationItemComponent";
import { ClockIcon, FacebookIcon, InstagramIcon, MapMarkerIcon, TelephoneIcon } from "../../../../Assets/icons/InformationBar";
import { bemClassNames } from "../../../../BemClassNames";

const className = bemClassNames("information-bar");

export const InformationBarComponent = () => {
    return (
        <div className={className()}>
            <address className={className("contact-informations")}>
                <InformationItemComponent text="Libivá 3/Mohelnice" icon={<MapMarkerIcon />} />
                <InformationItemComponent text="Po-Pá: 14:00-19:00 So-Ne: Zavřeno" icon={<ClockIcon />} />
                <InformationItemComponent text="+420 773 005 498" icon={<TelephoneIcon />} />
            </address>
            <div className={className("socials")}>
                <InformationItemComponent icon={<InstagramIcon />} url="www.facebook.com" />
                <InformationItemComponent icon={<FacebookIcon />} url="www.instagram.com" />
            </div>
        </div>

    )
}