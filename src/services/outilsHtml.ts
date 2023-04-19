import { Color } from "./outilsColor";

class OutilsHtmlService {

    static handleLeftArrowClick(scrollable: React.RefObject<HTMLDivElement>) {
        if (scrollable.current) {
            scrollable.current.scrollBy({
                left: -200,
                behavior: 'smooth',
            });
        }
    }

    static handleRightArrowClick(scrollable: React.RefObject<HTMLDivElement>) {
        if (scrollable.current) {
            scrollable.current.scrollBy({
                left: 200,
                behavior: 'smooth',
            });
        }
    }

    static activeColor(num: string) {
        const html = document.documentElement;

        // Enlever la classe de couleur précédente
        const oldClass = `color-${html.dataset.color}`;
        if (oldClass) {
            html.classList.remove(oldClass);
        }

        // Ajouter la nouvelle classe de couleur
        const newClass = `color-${num}`;
        html.classList.add(newClass);

        // Enregistrer la couleur actuelle dans l'attribut data-color de html
        html.dataset.color = num;
    }
}

export default OutilsHtmlService;