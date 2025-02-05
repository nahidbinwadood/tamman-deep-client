/* eslint-disable react/prop-types */

import CardContents from './TabDetails/CardContents';
import ActionContents from './TabDetails/ActionContents';

const TabContents = ({ activeTab }) => {
  return <>{activeTab == `My Cards` ? <CardContents /> : <ActionContents />}</>;
};

export default TabContents;
