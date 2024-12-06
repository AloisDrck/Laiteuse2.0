
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const LogIn = () => {

    const [pseudo, setPseudo] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');

    const navigate = useNavigate();

    const HandleSubmit = async (e) => {
        console.log(pseudo);
        console.log(favoriteColor);
        const data = {pseudo: pseudo, favoriteColor: favoriteColor}
        if(pseudo !== "", favoriteColor !== ""){
            navigate('/sorry');
        }

    }

//back

    const HandleDelete = async (e) => {
        console.log(pseudo);
        console.log(favoriteColor);
        const data = {pseudo: pseudo, favoriteColor: favoriteColor}
        console.log('Envoi des données au serveur')
        if(pseudo !== "", favoriteColor !== ""){
            navigate('/sorry');
        }
    };
//back
    
    return (
        <div className='backgroundContainer' >
            <form className="form">
            <p className="heading">Se connecter</p>
            <div className="field">
                <input 
                autoComplete="off" 
                placeholder="pseudo" 
                className="input-field" 
                type="text"
                onChange={(e) => setPseudo(e.target.value)} 
                />
                </div>
                <div className="field">
                    <input 
                    placeholder="favoriteColor" 
                    className="input-field" 
                    type="color" 
                    onChange={(e) => setFavoriteColor(e.target.value)}
                    
                    />
                </div>
                <div className="btn">
                    
                    
                    <button
                    className="button1"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        HandleSubmit();
                    }}
                    >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Connexion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    {/* <NavLink exact to="/connexion/inscription" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <button className="button2">Nous rejoindre</button>
                    </NavLink> */}
                </div>
                <button className="button3"
                onClick={(e) => {
                    e.preventDefault();
                    console.log("trying to delete (and probably failing) acount");
                    HandleDelete();
                }}
                >
                    suppr ton compte</button>
            </form>
        </div>
    );
};


export default LogIn;