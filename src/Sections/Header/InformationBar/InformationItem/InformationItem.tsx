import { FunctionComponent, ReactElement } from "react";
import { bemClassNames } from "../../../../BemClassNames";

const className = bemClassNames("information-item");

type InformationItemProps = {
    /** Icon that will be used inside the information item */
    icon: ReactElement;
    /** Text for the item */
    text: string;
}

export const InformationItem: FunctionComponent<InformationItemProps> = ({
    icon,
    text,
}) => {
    return (
        <div className={className()}>
            {icon}
            <p>{text}</p>
        </div>
    )
}