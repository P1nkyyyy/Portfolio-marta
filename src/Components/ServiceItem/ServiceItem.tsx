import { FunctionComponent } from 'react'
import { PrimaryButton } from "../PrimaryButton/PrimaryButtton";
import { bemClassNames } from "../../BemClassNames";

const className = bemClassNames("service-item");

type ServiceItemProps = {
    /** Title for the service item */
    title: string;
}

export const ServiceItem: FunctionComponent<ServiceItemProps> = ({
    title,
}) => {
    return (
        <div className={className()}>
            <h2 className={className("title")}>{title}</h2>
            <PrimaryButton url="#" text="Služby a ceník" />
        </div>
    )
}
