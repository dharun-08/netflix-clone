// parent component
import React, { useState } from 'react'
import Tabs from './Tabs'
import { tabLabels } from "./constant";
const TabComponents = () => {
    const [activeState,setActiveState] = useState(tabLabels.CANCEL_AT_ANYTIME);
    const onClickTab = (tab) =>{
        setActiveState(tab)
    }
  return (
    <div>
      <Tabs activeTabName={activeState} onClickTab={onClickTab} />
    </div>
  );
}

export default TabComponents;