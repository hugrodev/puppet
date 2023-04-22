export interface Category {
    [key: string]: Category_Item;
}

export interface Category_Item {
    nom: string;
    skin: boolean;
    nbImg: number;
    color: boolean;
    style: Item_Style
}

export interface Item_Style {
    top: string;
    left: string;
    transform: string;
}

const CATG_NB: Category = {
    skin: { nom: "skin", skin: true, nbImg: 0, color: false, style: { top: "", left: "", transform: "" } },
    chapeaux: { nom: "chapeaux", skin: false, nbImg: 1, color: true, style: { top: "5vh", left: "0vw", transform: "scale(1.5)" } },
    oreille: { nom: "oreille", skin: true, nbImg: 7, color: false, style: { top: "105%", left: "42%", transform: "scale(4.5)" } },
    coupe: { nom: "coupe", skin: false, nbImg: 10, color: true, style: { top: "5vh", left: "0vw", transform: "scale(1.5)" } },
    lunettes: { nom: "lunettes", skin: false, nbImg: 0, color: true, style: { top: "5vh", left: "5vw", transform: "scale(1.5)" } },
    oeil_gauche: { nom: "oeil_gauche", skin: false, nbImg: 7, color: true, style: { top: "130%", left: "12%", transform: "scale(5.5)" } },
    sourcils: { nom: "sourcils", skin: false, nbImg: 0, color: true, style: { top: "26vh", left: "1vw", transform: "scale(1.5)" } },
    bouche: { nom: "bouche", skin: false, nbImg: 5, color: true, style: { top: "70%", left: "1%", transform: "scale(4.5)" } },
    nez: { nom: "nez", skin: true, nbImg: 9, color: false, style: { top: "100%", left: "-10%", transform: "scale(4.5)" } },
    oeil_droit: { nom: "oeil_droit", skin: false, nbImg: 7, color: true, style: { top: "130%", left: "-48%", transform: "scale(5.5)" } },
    visage: { nom: "visage", skin: true, nbImg: 8, color: false, style: { top: "5vh", left: "5vw", transform: "scale(1.5)" } },
    corps: { nom: "corps", skin: true, nbImg: 2, color: true, style: { top: "5vh", left: "5vw", transform: "scale(1.5)" } },
};


export default CATG_NB;
