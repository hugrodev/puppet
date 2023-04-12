import React, { FC, useState } from 'react';
import { PuppetModel } from '../../model/PuppetModel';
import LocalStorageService from '../../services/storageService';
import Puppet from '../Puppet/Puppet';
import './Home.scss';
import Panel from '../Panel/Panel';

interface HomeProps {}

  const Home: FC<HomeProps> = () => {
    const [puppetAffiche, setPuppetAffiche] = useState(getPuppetFromStore());

  
    function getPuppetFromStore(){
      let puppet: PuppetModel = LocalStorageService.getPuppetAffiche();
      if(puppet == null) {
        puppet = PuppetModel.getRandomPuppet();
      }
      return puppet;
    } 

    function setRandomPuppet(){
      setPuppetAffiche(PuppetModel.getRandomPuppet());
    } 

    function handlePuppetChange(puppet: PuppetModel){
      setPuppetAffiche(puppet);
    } 
  
    return (
      <div className="Home">
        {/* first */}
          <div className="home-img">
            <Puppet puppet={puppetAffiche} />
          </div>
          {/* <div className="home-txt">
              <div className="txt">
                <h1> Puppet in the Pocket </h1>
                <p>Parce que ca fait pas de mal de l’avoir pres de soit</p>
                <div className="flex">
                  <div className="button secondary-fill"  onClick={setRandomPuppet}>Puppet Aléatoire
                    <div className="button__horizontal"></div>
                    <div className="button__vertical"></div></div>
                  <div className="button primary-fill">Nouvelle Puppet
                    <div className="button__horizontal"></div>
                    <div className="button__vertical"></div></div>
                </div>
              </div>
          </div>  */}
          {/* panel */}
          <div className="home-panel">
            <Panel puppet={puppetAffiche} onPuppetChange={handlePuppetChange} ></Panel>
          </div>
      </div>
    );
  };

export default Home;
