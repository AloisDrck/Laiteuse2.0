import React, { useState } from 'react';
import image from '../assets/fond1.png';

const Register = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const [villeNaissance, setVilleNaissance] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');

    const handleDateChange = () => {
        const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        setDateNaissance(formattedDate);
    };

    const incrementDay = () => setDay((prev) => (prev < 31 ? prev + 1 : 0));
    const decrementDay = () => setDay((prev) => (prev > 0 ? prev - 1 : 31));

    const incrementMonth = () => setMonth((prev) => (prev < 12 ? prev + 1 : 0));
    const decrementMonth = () => setMonth((prev) => (prev > 0 ? prev - 1 : 12));

    const incrementYear = () => setYear((prev) => prev + 1);
    const decrementYear = () => setYear((prev) => (prev > 0 ? prev - 1 : 0));

    const HandleSubmit = async () => {
        handleDateChange(); // Génère la date avant soumission
        console.log(firstname, lastname, pseudo, password, dateNaissance, villeNaissance, favoriteColor);

        const data = {
            firstname,
            lastname,
            pseudo,
            password,
            dateNaissance,
            villeNaissance,
            favoriteColor,
        };

        if (!lastname || !pseudo || dateNaissance === '' || !favoriteColor) {
            alert('Veuillez remplir les champs obligatoires');
            return;
        }
        if (password !== "") {
            alert('Veuillez ne pas remplir le champ password, vous avez déjà une couleur préférée');
        }

        if (year < 1920) {
            alert('Veuillez entrer une date valide');
            return;
        }
    };

    return (
        <div>
            <section className="section">
                <div className="div1">
                    <aside className="imageAside">
                        <img
                            src={image}
                            className="image"
                            alt="Deux coureurs sur la ligne de départ"
                        />
                    </aside>

                    <main className="inscription">
                        <div className="divInscription">
                            <form action="#" className="formulaire">
                                <div className="Recup">
                                    <label htmlFor="FirstName" className="texte">Prénom</label>
                                    <input
                                        type="text"
                                        id="FirstName"
                                        name="first_name"
                                        className="input"
                                        onChange={(e) => setFirstname(e.target.value)}
                                    />
                                </div>

                                <div className="Recup">
                                    <label htmlFor="LastName" className="texte">Nom</label>
                                    <input
                                        type="text"
                                        id="LastName"
                                        name="last_name"
                                        className="input"
                                        onChange={(e) => setLastname(e.target.value)}
                                    />
                                </div>

                                <div className="Recup">
                                    <label htmlFor="Pseudo" className="texte">Pseudo</label>
                                    <input
                                        type="text"
                                        id="Pseudo"
                                        name="pseudo"
                                        className="input"
                                        onChange={(e) => setPseudo(e.target.value)}
                                    />
                                </div>

                                <div className="Recup">
                                    <label htmlFor="Password" className="texte">Mot de passe</label>
                                    <input
                                        type="password"
                                        id="Password"
                                        name="password"
                                        className="input"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="Recup">
                                    <label className="texte">Date de naissance</label>
                                    <div className="date-clickers">
                                        <div className="clicker">
                                            <button type="button" onClick={decrementDay}>-</button>
                                            <span>{day}</span>
                                            <button type="button" onClick={incrementDay}>+</button>
                                        </div>
                                        <div className="clicker">
                                            <button type="button" onClick={decrementMonth}>-</button>
                                            <span>{month}</span>
                                            <button type="button" onClick={incrementMonth}>+</button>
                                        </div>
                                        <div className="clicker">
                                            <button type="button" onClick={decrementYear}>-</button>
                                            <span>{year}</span>
                                            <button type="button" onClick={incrementYear}>+</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="Recup">
                                    <label htmlFor="VilleNaissance" className="texte">Ville de naissance</label>
                                    <input
                                        type="text"
                                        id="VilleNaissance"
                                        name="ville_naissance"
                                        className="input"
                                        onChange={(e) => setVilleNaissance(e.target.value)}
                                    />
                                </div>

                                <div className="Recup">
                                    <label htmlFor="FavoriteColor" className="texte">Favorite color</label>
                                    <input
                                        type="color"
                                        id="FavoriteColor"
                                        name="favorite_color"
                                        className="input"
                                        onChange={(e) => setFavoriteColor(e.target.value)}
                                    />
                                </div>

                                <div className="finForm">
                                    <button
                                        className="boutonCree"
                                        type="submit"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            HandleSubmit();
                                        }}
                                    >
                                        Créer ton compte
                                    </button>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
        </div>
    );
};

export default Register;
