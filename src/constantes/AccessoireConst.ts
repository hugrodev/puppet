export interface Category {
    [key: string]: Category_Item;
}

export interface Category_Item {
    nom: string;
    skin: boolean;
    nbImg: number;
    color: boolean;
}

const CATG_NB: Category = {
    skin: { nom: "skin", skin: true, nbImg: 0, color: false },
    chapeaux: { nom: "chapeaux", skin: false, nbImg: 1, color: true },
    pattes: { nom: "pattes", skin: false, nbImg: 5, color: true },
    lunettes: { nom: "lunettes", skin: false, nbImg: 0, color: true },
    oreille: { nom: "oreille", skin: true, nbImg: 7, color: false },
    coupe: { nom: "coupe", skin: false, nbImg: 10, color: true },
    oeil_gauche: { nom: "oeil_gauche", skin: false, nbImg: 7, color: true },
    sourcils: { nom: "sourcils", skin: false, nbImg: 0, color: true },
    bouche: { nom: "bouche", skin: false, nbImg: 5, color: true },
    nez: { nom: "nez", skin: true, nbImg: 9, color: false },
    oeil_droit: { nom: "oeil_droit", skin: false, nbImg: 7, color: true },
    visage: { nom: "visage", skin: true, nbImg: 8, color: false },
    corps: { nom: "corps", skin: true, nbImg: 0, color: true },
  };
  
 
export default CATG_NB;
  