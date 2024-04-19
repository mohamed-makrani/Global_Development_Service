import React, { useState } from 'react';
import axios from 'axios';

function FormulaireContact() {
    const [entreprise, setEntreprise] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3000/contact', { entreprise, email, telephone, message })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-50">
                <h2>Contactez-nous</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="entreprise"><strong>Nom de l'entreprise :</strong></label>
                        <input 
                            type="text"
                            id="entreprise"
                            placeholder="Entrez le nom de votre entreprise"
                            autoComplete="off"
                            className="form-control rounded-0"
                            value={entreprise}
                            onChange={(e) => setEntreprise(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Adresse e-mail :</strong></label>
                        <input 
                            type="email"
                            id="email"
                            placeholder="Entrez votre adresse e-mail"
                            autoComplete="email"
                            className="form-control rounded-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telephone"><strong>Numéro de téléphone :</strong></label>
                        <input 
                            type="tel"
                            id="telephone"
                            placeholder="Entrez votre numéro de téléphone"
                            autoComplete="tel"
                            className="form-control rounded-0"
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message"><strong>Message :</strong></label>
                        <textarea 
                            id="message"
                            placeholder="Écrivez votre message ici"
                            className="form-control rounded-0"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 rounded-0">Envoyer</button>
                </form>
            </div>
        </div>
    );
}

export default FormulaireContact;

