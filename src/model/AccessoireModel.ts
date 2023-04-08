import OutilsService from "../services/outilsService";

export class AccessoireModel {
    constructor(categorie:string) {
        this.categorie = categorie;
    }
    private categorie: string = "";
    private couleur: string = "";
    private numero: string = OutilsService.getRandomNumber(1,5).toString();

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
        return this.categorie + "/" + this.categorie + "_" + this.numero + ".png"; //+ "_" + this.couleur;
    }
}