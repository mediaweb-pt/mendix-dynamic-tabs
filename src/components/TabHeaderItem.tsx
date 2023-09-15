import classNames from "classnames";
import { createElement, FunctionComponent, ReactElement } from "react";

interface TabHeaderItemProps {
    id?: string | number;
    dataId: number;
    value: string;
    isActive: boolean;
    isDisabled: boolean;
    onClick: (tabIndex: number, tabId:string | number | undefined) => void;
}

const TabHeaderItem: FunctionComponent<TabHeaderItemProps> = ({ id, dataId, value, isActive, onClick, isDisabled }): ReactElement => {
    const classes = classNames("nav-item", isActive ? "active" : "");

    const disabled = () => {
        return isDisabled ? "disabled" : ""
    }


    return (
        <li id={dataId ? `tabheader_${dataId}` : ""} data-tab-id={dataId} className={classes} role="presentation" {...disabled}>
            <a
                className="nav-link"
                type="button" 
                role="tab"
                aria-selected={isActive} 
                onClick={ () => { onClick(dataId, id) } }>
                    {value}
            </a>
        </li>
    );
};

export default TabHeaderItem
