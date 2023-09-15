import classNames from "classnames";
import { PropsWithChildren, createElement, FunctionComponent, ReactElement } from "react";


type TabContentItemProps = PropsWithChildren<{
    id?: number;
    dataId: number;
    isActive: boolean;
}>

const TabContentItem: FunctionComponent<TabContentItemProps> = ({ id, dataId, isActive, children }): ReactElement => {
    const classes = classNames("tab-pane", isActive ? "active" : "");

    return (
        <div
            id={id ? `tabcontent_${id}` : ""}
            data-tab-id={dataId} 
            role="tabpanel" 
            className={classes} 
            tabIndex={0} 
            aria-hidden={!isActive}>
                {children}
        </div>
    );
};

export default TabContentItem
