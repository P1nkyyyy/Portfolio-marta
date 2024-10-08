import { FunctionComponent, ReactElement } from "react";
import { bemClassNames } from "../../../../BemClassNames";

const className = bemClassNames("information-item");

type InformationItemComponentProps = {
    /** Icon that will be used inside the information item */
    icon: ReactElement;
    /** Text for the item */
    text?: string;
    /** Link addres */
    url?: string;
}

export const InformationItemComponent: FunctionComponent<InformationItemComponentProps> = ({
    icon,
    text,
    url,
}) => {
    return (
        <div className={className()}>
            {url ?
                <a href={url} target="_blank">
                    {icon}
                </a>
                : <> {icon} </>
            }
            {text && <p>{text}</p>}
        </div>
    )
}