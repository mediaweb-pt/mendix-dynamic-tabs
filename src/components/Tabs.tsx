import { createElement, ReactElement, FunctionComponent } from "react";
import TabHeaderItem from "./TabHeaderItem";
import { ListWidgetValue, ListValue } from "mendix";
import TabContentItem from "./TabContentItem";
import { TabsStyleEnum, TabsPositionEnum } from "typings/DynamicTabsProps";
import classNames from "classnames";

interface TabsProps {
    tabs: TabProps[] | [];
    activeTab: number;
    onTabChange: (index: number, tabid: string | number) => void;
    content?: ListWidgetValue;
    dataSource?: ListValue;
    tabStyle:TabsStyleEnum;
    position:TabsPositionEnum;
    isJustify:boolean;
    classes?:string
}

type TabProps = {
    id: number | string;
    label: string;
    disabled: boolean;
};



const Tabs: FunctionComponent<TabsProps> = ({ tabs, activeTab, onTabChange, content, dataSource, tabStyle, position, isJustify, classes }): ReactElement => {

    const tabClasses = () => {
        let extras = [];

        if (isJustify) {
            extras.push('tab-justified')
        }else{
            if(tabStyle != 'default'){
                extras.push(`tab-${tabStyle}`)
            }
    
            if (position != 'default') {
                extras.push(`tab-${position}`)
            }
        }

        return classNames('dynamic-tabs mx-tabcontainer', extras, classes)
    }

    const tabChangeHandler = (index: number, tabid: string | number) => {
        if (activeTab === index) {
            return;
        }

        onTabChange(index, tabid);
    }

    const tabHeaders: ReactElement[] = tabs.map((item, index) => {
        return (
            <TabHeaderItem
                key={`tab-header-${index}`}
                id={item.id}
                dataId={index}
                value={item.label}
                isDisabled={item.disabled}
                isActive={activeTab === index}
                onClick={tabChangeHandler}
            />
        );
    });

    const tabContents: ReactElement[] | undefined = dataSource?.items?.map((id, index) => {
        return (
            <TabContentItem 
                key={`tab-content-${index}`}
                dataId={index} 
                isActive={activeTab === index}>
                {content?.get(id)}
            </TabContentItem>
        );
    })

    return (
        <div className={tabClasses()}>
            {tabHeaders.length > 0 &&
                <ul className="nav nav-tabs mx-tabcontainer-tabs" role="tablist">
                    {tabHeaders}
                </ul>
            }
            {tabHeaders.length > 0 
                && 
                <div className="tab-content mx-tabcontainer-content">
                    {(tabContents !== undefined) && tabContents}
                </div>
            }
        </div>
    );
}


export {
    TabsProps,
    TabProps
};

export default Tabs