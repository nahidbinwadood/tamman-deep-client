/* eslint-disable react/prop-types */

import CardContents from './TabDetails/CardContents';
import ActionContents from './TabDetails/ActionContents';

const TabContents = ({ activeTab }) => {
 
  return (
    <>{activeTab === 'Your Actions' ? <ActionContents /> : <CardContents />}</>
  );
};

export default TabContents;
