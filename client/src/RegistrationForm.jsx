import React, { useState } from 'react';
import axios from 'axios';

function FormulaireInscription() {
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [nationalite, setNationalite] = useState('');
    const [file, setFile] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("prenom", prenom);
        formData.append("nom", nom);
        formData.append("email", email);
        formData.append("telephone", telephone);
        formData.append("nationalite", nationalite);
        formData.append("file", file);

        try {
            const result = await axios.post("http://localhost:3000/register", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(result);
        } catch (error) {
            setError("Failed to submit form. Please try again.");
            console.error("Error submitting form:", error);
        }
    }
    

    

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-50">
                <h2>Veuillez Remplir Le Formulaire</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="prenom"><strong>Prénom :</strong></label>
                        <input 
                            type="text"
                            id="prenom"
                            placeholder="Entrez votre prénom"
                            autoComplete="off"
                            className="form-control rounded-0"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nom"><strong>Nom :</strong></label>
                        <input 
                            type="text"
                            id="nom"
                            placeholder="Entrez votre nom"
                            autoComplete="off"
                            className="form-control rounded-0"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email :</strong></label>
                        <input 
                            type="email"
                            id="email"
                            placeholder="Entrez votre email"
                            autoComplete="email"
                            className="form-control rounded-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telephone"><strong>Téléphone :</strong></label>
                        <input 
                            type="tel"
                            id="telephone"
                            placeholder="Entrez votre téléphone"
                            autoComplete="tel"
                            className="form-control rounded-0"
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nationalite"><strong>Nationalité :</strong></label>
                        <input 
                            type="text"
                            id="nationalite"
                            placeholder="Entrez votre nationalité"
                            autoComplete="off"
                            className="form-control rounded-0"
                            value={nationalite}
                            onChange={(e) => setNationalite(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cv"><strong>Télécharger CV :</strong></label>
                        <input 
                            type="file"
                            id="cv"
                            className="form-control rounded-0"
                            accept="application/pdf"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 rounded-0">Soumettre</button>
                </form>
            </div>
        </div>
    );
}

export default FormulaireInscription;