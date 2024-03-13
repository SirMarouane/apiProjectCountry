import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
      <img
        src="https://i.imgur.com/5z1y98Q.png"
        alt="Carte du monde avec un point d'interrogation"
        className="w-40 mb-10"
      />
      <h1 className="text-3xl font-bold mb-4">Oups !</h1>
      <p className="text-xl leading-loose mb-8">
        Il semblerait que le pays que vous recherchez soit introuvable.
      </p>
      <ul className="list-none space-y-2">
        <li>Vérifiez l'orthographe du nom du pays.</li>
        <li>Essayez de rechercher le pays par sa capitale.</li>
        <li>Utilisez la barre de recherche pour explorer d'autres pays.</li>
      </ul>
      <p className="font-bold mb-2">Ressources utiles :</p>
      <ul className="list-none space-y-2">
        <li>
          <a href="https://fr.wikipedia.org/wiki/Liste_des_pays_du_monde" className="text-blue-500 hover:text-blue-700">
            Liste des pays du monde
          </a>
        </li>
        {/* Replace with a valid link */}
        <li>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Carte interactive des pays
          </a>
        </li>
        <li>
          <a href="https://www.worldometers.info/geography/alphabetical-list-of-countries/" className="text-blue-500 hover:text-blue-700">
            Informations sur les pays du monde
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ErrorPage;