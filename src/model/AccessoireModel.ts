export class AccessoireModel {
    constructor(categorie:string) {
        this.categorie = categorie;
    }
    private categorie: string = "";
    private couleur: string = "";
    private nom: string = "";

    setCouleur(couleur: string){
        this.couleur = couleur
    }

    getCouleur(){
        return this.couleur;
    }

    setNom(nom: string){
        this.nom = nom;
    }

    getUrl(){
        return this.categorie + "/" + this.nom + "_" + this.couleur;
    }
}