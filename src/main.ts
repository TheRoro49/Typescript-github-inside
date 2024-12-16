import { showUser } from "../ui/ui";
import "./css/app.css"
import { showError } from "./error/error";
import { getUser } from "./request";
import { reset } from "./utils/utlis";

const form: HTMLFormElement | null = document.querySelector("form");
form?.addEventListener('submit',  async (e: SubmitEvent) => {
    e.preventDefault(); // On empêche le rechargement de la page
    reset()

    // Faire la requête pour récupérer l'utilisateur
    // const userNameInput: HTMLInputElement | null = document.querySelector("input[name='username']");
    // const username = userNameInput?.value;

    const username = (document.querySelector("input[name='username']") as HTMLInputElement).value;
    if (!username) {
        showError(new Error("Le nom d'utilisateur est requis"))
        return;
    }
    
    const user = await getUser(username);

    if (user) {
        showUser(user)
    } else {
        showError( new Error('Utillisateur non trouvé'))
    }
});


