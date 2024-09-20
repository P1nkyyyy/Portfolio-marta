import { FunctionComponent } from 'react'
import { bemClassNames } from "../../BemClassNames";

const className = bemClassNames("primary-button");

type PrimaryButtonProps = {
    /** Text for the primary button */
    text: string;
    /** Href to the section or link */
    url: string;
}

export const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
    text,
    url,
}) => {
    return (
        <a href={url} title="" onClick={(e) => e.stopPropagation()} className={className()}>
            {text}
        </a>
    )
}
