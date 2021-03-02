import React, { useEffect, useCallback, useState } from 'react';
import { Tabs, Split, DropDown, SearchInput } from '@aragon/ui';

const FarmControl: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedNetwork, setSelectedNetwork] = useState(0);
    const [selectedPlatform, setSelectedPlatform] = useState(0);
    const [value, setValue] = useState();

    const style ={
        display: 'flex',
        justifyContent: 'space-between'
    }
    return (
        <div>
            <Tabs
                items={["Opportunities", "My Deposits"]}
                selected={selectedTab}
                onChange={setSelectedTab}
            />
            <div style={style}>
                <div>
                    <DropDown 
                        items={["xDai", "Matic", "Ethereum"]}
                        placeholder="network"
                        selected={selectedNetwork}
                        onChange={setSelectedNetwork}
                        />
                    <DropDown 
                        items={['Honey']}
                        placeholder="platform"
                        selected={selectedPlatform}
                        onChange={setSelectedPlatform}
                        />
                </div>
                <div>
                    <SearchInput value={value} onChange={setValue}/>
                </div>
            </div>
        </div>
    )
}

export default FarmControl;