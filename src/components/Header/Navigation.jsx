import { Link } from "react-router-dom";

import "./Navigation.css"

const Navigation = () => {

    return (
        <nav class="col-12 p-2">
            <ul>
                <Link to="/"><li>Accueil</li></Link>
                <Link to="/"><li>Dernières nouvelles</li></Link>
                <Link to="/"><li>En direct</li></Link>
                <Link to="/presentation"><li>Présentation du serveur</li></Link>
                <Link to="/"><li>Règles du serveur</li></Link>
                <Link to="/"><li>Crédits</li></Link>
            </ul>
        </nav>
    )
}

export default Navigation