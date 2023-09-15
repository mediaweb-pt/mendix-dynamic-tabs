

import { hot } from "react-hot-loader/root";
import { createElement, useEffect, useState, ReactElement } from "react";
import { Big } from "big.js";
import Tabs, { TabProps } from "./components/Tabs";

import { DynamicTabsContainerProps } from "../typings/DynamicTabsProps";

import "./ui/DynamicTabs.scss";


const initialActiveTab = 0;
const initialActiveTabId = ''

const DynamicTabs = (props : DynamicTabsContainerProps): ReactElement => {
    
    const [currentActiveTab, setCurrentActiveTab] = useState(initialActiveTab);
    const [currentActiveTabId, setCurrentActiveTabId] = useState<string | number >(initialActiveTabId);
 
    useEffect(() => {
        const _activetab = props.activeTab?.value ? props.activeTab?.value.toNumber() : initialActiveTab;
        setCurrentActiveTab(_activetab);
    }, [])

    useEffect(() => {
        if (props.tabId?.sortable) {
            props.tabList?.setSortOrder([[props.tabId.id, "asc"]]);
        }
        if (props.contentTabId?.sortable){
            props.tabsDataSource?.setSortOrder([[props.contentTabId.id, "asc"]])
        }
    }, [props.tabId, props.tabList, props.contentTabId, props.tabsDataSource]);

    useEffect(() => {
        if (props.returnActiveTab) {
            const newActiveTab = new Big(currentActiveTab);
            props.returnActiveTab.setValue(newActiveTab);
        }

        if(props.returnActiveTabId){
            if(typeof currentActiveTabId === 'string'){
                props.returnActiveTabId.setValue(currentActiveTabId)
            }else{
                const newActiveTabId = new Big(currentActiveTabId);
                props.returnActiveTabId.setValue(newActiveTabId)
            }
        }

    }, [currentActiveTab, currentActiveTabId])

    const onChangeHandler = (tabIndex: number, tabId: string | number): void =>{
       setCurrentActiveTab(tabIndex);
       setCurrentActiveTabId(tabId)
    }

    const formatId = (_id:string) => {
        if(/^\d+$/.test(_id)){
            return parseInt(_id, 10)
        }else{
            return _id
        }
    }

    const _tabs = props.tabList?.items?.map((record): TabProps => {
        return {
            id: props.tabId?.get(record).displayValue
                ? formatId(props.tabId?.get(record).displayValue)
                : '',
            label: props.tabName?.get(record).displayValue || "",
            disabled: props.tabDisabled?.get(record).value || false
        };
    });

    return (
        <Tabs
            tabs={_tabs ? _tabs : []}
            classes={props.class}
            activeTab={currentActiveTab}
            onTabChange={onChangeHandler}
            content={props.content}
            dataSource={props.tabsDataSource}
            tabStyle={props.tabsStyle}
            position={props.tabsPosition}
            isJustify={props.tabsJustify}
        />
    );
}

export default hot(DynamicTabs);
