import OutilsService from "../services/outilsService";
import CATG_NB from "../constantes/AccessoireConst";

export class AccessoireModel {
    private categorie: string = "";
    private couleur: string = "";
    private numero: string = OutilsService.getRandomNumber(1,5).toString();

    constructor(catg: (string | number)[]) {
        this.categorie =  catg[0].toString();
        this.numero =   OutilsService.getRandomNumber(1, Number(catg[1]) ).toString();
    }

    setCouleur(couleur: string){
        this.couleur = couleur
    }

    getCouleur(){
        return this.couleur;
    }

    setNumero(numero: string){
        this.numero = numero;
    }

    getUrl(){
        return this.categorie + "/" + this.numero + ".png"; //+ "_" + this.couleur;
    }
}