/**
 * This file was generated from DynamicTabs.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { DynamicValue, EditableValue, ListValue, ListAttributeValue, ListWidgetValue } from "mendix";
import { Big } from "big.js";

export type TabsStyleEnum = "default" | "bordered" | "lined" | "pills";

export type TabsPositionEnum = "default" | "center" | "left" | "right";

export interface DynamicTabsContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    activeTab?: DynamicValue<Big>;
    tabList?: ListValue;
    tabId?: ListAttributeValue<string | Big>;
    tabName?: ListAttributeValue<string>;
    tabDisabled?: ListAttributeValue<boolean>;
    tabsDataSource?: ListValue;
    contentTabId?: ListAttributeValue<string | Big>;
    content?: ListWidgetValue;
    returnActiveTab?: EditableValue<Big>;
    returnActiveTabId?: EditableValue<string | Big>;
    tabsStyle: TabsStyleEnum;
    tabsPosition: TabsPositionEnum;
    tabsJustify: boolean;
}

export interface DynamicTabsPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    activeTab: string;
    tabList: {} | { caption: string } | { type: string } | null;
    tabId: string;
    tabName: string;
    tabDisabled: string;
    tabsDataSource: {} | { caption: string } | { type: string } | null;
    contentTabId: string;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    returnActiveTab: string;
    returnActiveTabId: string;
    onChangeAction: {} | null;
    tabsStyle: TabsStyleEnum;
    tabsPosition: TabsPositionEnum;
    tabsJustify: boolean;
}
