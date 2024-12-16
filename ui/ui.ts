import { GithubUser } from "../src/request";
import { dateDiffInDays, deleteCard } from "../src/utils/utlis";

export function showUser(user: GithubUser): void {
    // Supprimer le user précédent s'il y'en a
    deleteCard(document.querySelector('.card'));
    const card = document.createElement("div");
    card.classList.add("card", "bg-white", "p-6", "rounded-lg", "shadow-lg", "w-full", "max-w-sm", "mx-auto", "mb-6", "transition-transform", "transform", "hover:scale-105", "dark:bg-gray-800", "dark:text-white");

    card.innerHTML = /*html*/ `
    <img class="w-24 h-24 mb-4 rounded-full shadow-lg mx-auto" src="${user.avatar_url}" alt="Photo de profil de ${user.name}">
    <h2 class="mb-2 text-2xl font-semibold text-gray-900 dark:text-white"> ${user.login}</h2>
    <h3 class="mb-4 text-gray-600 dark:text-gray-400"> ${user.name || "Nom non fourni"}</h3>
    <p class="text-gray-700 dark:text-gray-300">Compte créé le <span class="font-semibold">${new Date(user.created_at).toLocaleDateString()}</span> depuis ${dateDiffInDays(user.created_at)} jours</p>
    <p class="text-gray-700 dark:text-gray-300">Nombre de repos : <span class="font-semibold">${user.public_repos}</span></p>
    <a class="my-4 inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href="${user.html_url}" target="_blank">Voir</a>
    `;

    (document.querySelector(".result") as HTMLDivElement).append(card);
}
