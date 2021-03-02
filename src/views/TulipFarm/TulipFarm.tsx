import React, { useEffect, useCallback, useState } from 'react';
import FarmControl from './FarmControl';
import FarmTable from './FarmTable'

const TulipFarm: React.FC = () => {

    return (
        <div>
            <FarmControl />
            <FarmTable />
        </div>

    )

}

export default TulipFarm