import { AccessoireModel } from "./AccessoireModel";

export class PuppetModel {
    url: string = "./img/puppet/";
    skin: string = "";

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
        return this.url + this.url + this.chapeaux.getUrl;
    }
    getCheveuxPattes(){
        return this.url + this.url + this.cheveux.pattes.getUrl();
    }
    getCheveuxCoupe(){
        return this.url + this.url + this.cheveux.coupe.getUrl();
    }
    getOreille(){
        return this.url + this.url + this.skin + "/" + this.oreille.getUrl();
    }
    getLunettes(){
        return this.url + this.url + this.lunettes.getUrl();
    }
    getSourcils(){
        return this.url + this.url + this.sourcils.getUrl();
    }
    getOeiDroit(){
        return this.url + this.url + this.oeill_droit.getUrl();
    }
    getNez(){
        return this.url + this.url + this.skin + "/" + this.nez.getUrl();
    }
    getOeilGauche(){
        return this.url + this.url + this.oeil_gauche.getUrl();
    }
    getBouche(){
        return this.url + this.url + this.bouche.getUrl();
    }
    getVisage(){
        return this.url + this.url + this.skin + "/" + this.visage.getUrl();
    }
    getCorps(){
        return this.url + this.url + this.skin + "/" + this.corps.getUrl();
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
