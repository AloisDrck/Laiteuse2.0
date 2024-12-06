import React, { useState, useEffect } from 'react';
import image from '../assets/fond1.png';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const [paysNaissance, setPaysNaissance] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [allCountries,setAllCountries] = useState([]);
    const [availableCountries, setAvailableCountries] = useState([]);

    const navigate = useNavigate();

    // Fonction pour générer les pays aléatoires
    const getRandomCountries = (countries, num) => {
    const shuffled = [...countries].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
    };

    const refreshAvailableCountries = () => {
        if (allCountries.length > 0) {
            const newCountries = getRandomCountries(allCountries, 40); // 10 nouveaux pays
            setAvailableCountries(newCountries);
        }
    };


    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all?fields=name')
            .then((res) => {
                const countries = res.data.map((country) => country.name.common); // Récupère uniquement les noms communs
                setAllCountries(countries); // Met à jour la liste complète
                setAvailableCountries(getRandomCountries(countries, 40)); // Sélectionne 10 pays
            })
            .catch((err) => {
                console.error('Erreur lors de la récupération des pays :', err);
            });
    }, []);

    
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
        handleDateChange();
        console.log(firstname, lastname, pseudo, password, dateNaissance, paysNaissance, favoriteColor);

        const data = {
            firstname,
            lastname,
            pseudo,
            password,
            dateNaissance,
            paysNaissance,
            favoriteColor,
        };

        if (!lastname || !pseudo || dateNaissance === '' || !favoriteColor) {
            alert('Veuillez remplir les champs obligatoires');
            return;
        }
        else if (password !== "") {
            alert('Veuillez ne pas remplir le champ password, vous avez déjà une couleur préférée');
        }
        else if (year < 1920) {
            alert('Veuillez entrer une date valide');
            return;
        }
        else{
            navigate('/login')
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
                            alt="L'océan semblable à l'user"
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
                                    <label htmlFor="PaysNaissance" className="texte">Pays de naissance</label>
                                    <select
                                        id="PaysNaissance"
                                        name="pays_naissance"
                                        className="input"
                                        value={paysNaissance}
                                        onChange={(e) => setPaysNaissance(e.target.value)}
                                    >
                                        <option value="" disabled>Choisir un pays</option>
                                        {availableCountries.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                    <button
                                            type="button"
                                            className="boutonCree"
                                            onClick={refreshAvailableCountries}
                                        >
                                            Je trouve pas mon pays
                                        </button>
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
