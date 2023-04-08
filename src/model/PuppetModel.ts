import OutilsService from "../services/outilsService";
import { AccessoireModel } from "./AccessoireModel";

export class PuppetModel {
    private url: string = "./";
    private skin: string = OutilsService.getRandomNumber(1,5).toString();

    private chapeaux: AccessoireModel = new AccessoireModel("chapeaux");
    private cheveux: CheveuxModel = new CheveuxModel();
    private oreille: AccessoireModel = new AccessoireModel("oreille");
    private lunettes: AccessoireModel = new AccessoireModel("lunettes");
    private sourcils: AccessoireModel = new AccessoireModel("sourcils");
    private oeil_gauche: AccessoireModel = new AccessoireModel("oeil_gauche");
    private nez: AccessoireModel = new AccessoireModel("nez");
    private oeill_droit: AccessoireModel = new AccessoireModel("oeil_droit");
    private bouche: AccessoireModel = new AccessoireModel("bouche");
    private visage: AccessoireModel = new AccessoireModel("visage");
    private corps: AccessoireModel = new AccessoireModel("corps");

    getChapeaux(){
        return this.url + this.chapeaux.getUrl();
    }
    getCheveuxPattes(){
        return this.url + "cheveux/" + this.cheveux.pattes.getUrl();
    }
    getCheveuxCoupe(){
        return this.url + "cheveux/" + this.cheveux.coupe.getUrl();
    }
    getOreille(){
        return this.url + "skin_" + this.skin + "/" + this.oreille.getUrl();
    }
    getLunettes(){
        return this.url + this.lunettes.getUrl();
    }
    getSourcils(){
        return this.url + this.sourcils.getUrl();
    }
    getOeiDroit(){
        return this.url + this.oeill_droit.getUrl();
    }
    getNez(){
        return this.url + "skin_" + this.skin + "/" + this.nez.getUrl();
    }
    getOeilGauche(){
        return this.url + this.oeil_gauche.getUrl();
    }
    getBouche(){
        return this.url + this.bouche.getUrl();
    }
    getVisage(){
        return this.url + "skin_" + this.skin + "/" + this.visage.getUrl();
    }
    getCorps(){
        return this.url + "skin_" + this.skin + "/" + this.corps.getUrl();
    }
    setSkin(skin:string){
        this.skin = skin;
    }

    static getRandomPuppet(){
        const puppet = new this();
        return puppet;
    }
}

export class CheveuxModel {
    nom: string= "cheveux";
    coupe: AccessoireModel = new AccessoireModel("coupe");
    pattes: AccessoireModel = new AccessoireModel("pattes");

    constructor(){
    }

    getCoupe(){
        return this.nom + "/" + this.pattes.getUrl();
    }

    setNom(nom: string){
        this.nom = nom;
    }

    getNom(){
        return this.nom;
    }

}
