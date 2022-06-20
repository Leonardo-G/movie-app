import { FC } from "react";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../styles/components/UI/Title.css";

interface Props {
    title: string;
    icon: IconDefinition
}

export const Title:FC<Props> = ({ title, icon }) => {
    return (
        <div className="title">
            <FontAwesomeIcon 
                icon={ icon }
                className="icon--title"    
            />
            <p>{ title }</p>
        </div>
    )
}
