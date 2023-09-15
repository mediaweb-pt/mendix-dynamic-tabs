import { ReactElement, createElement } from "react";
import Tabs from "./components/Tabs";
import { DynamicTabsPreviewProps } from "../typings/DynamicTabsProps";

export function preview(props: DynamicTabsPreviewProps): ReactElement {
    return (
        <Tabs
            tabs={[
                { id: 0, label: "Tab 1", disabled: false },
                { id: 1, label: "Tab 2", disabled: false },
                { id: 2, label: "Tab 3", disabled: false }
            ]}
            activeTab={0}
            onTabChange={()=>{}}
            tabStyle={props.tabsStyle}
            position={props.tabsPosition}
            isJustify={props.tabsJustify}
        />
    );
}

export function getPreviewCss(): string {
    return require("./ui/DynamicTabs.scss");
}
