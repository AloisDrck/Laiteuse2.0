
import React from "react";
import { useClickerContext } from '../context/ClickerContext';
import "../styles/Clicker.css";

const ClickerMoney = () => {
    const { money, earnMoney, showFallingImage } = useClickerContext(); // Extraire money et earnMoney du contexte

    return (
        <div className="ClickerMoneyBox">
            <p>Argent : {money} $</p>
            <img 
                src="/images/fioriotetee.png" 
                alt="Gagner de l'argent" 
                className="rotating-image" 
                onClick={() => { earnMoney(1); showFallingImage(); }} 
            />
        </div>
    );
};

export default ClickerMoney;