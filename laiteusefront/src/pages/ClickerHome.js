import React from 'react';
import { useClickerContext } from '../context/ClickerContext';

import ClickerMoney from '../components/ClickerMoney';

const ClickerHome = () => {
    const { money, earnMoney } = useClickerContext(); // Extraire money et earnMoney du contexte

    return (
        <div>
            <h1>Jeu de click Maison</h1>
            <ClickerMoney></ClickerMoney>
        </div>
    )
}

export default ClickerHome;