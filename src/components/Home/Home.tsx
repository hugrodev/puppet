import React, { FC, useEffect, useState } from 'react';
import { PuppetModel } from '../../model/PuppetModel';
import LocalStorageService from '../../services/storageService';
import Puppet from '../Puppet/Puppet';
import './Home.scss';
import Panel from '../Panel/Panel';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [puppetAffiche, setPuppetAffiche] = useState(() => { 
    const storedPuppet: PuppetModel = LocalStorageService.getPuppetAffiche() as PuppetModel; 
    return storedPuppet || new PuppetModel();
  });
  const [showPanel, setShowPanel] = useState(false);

  function handlePuppetChange(puppet: PuppetModel){ 
    setPuppetAffiche(puppet);
  }  

  function setRandomPuppet(){
    setPuppetAffiche(new PuppetModel());
  } 
  
   

  return (
    <div className="Home">
      {/* first */}
        <div className="home-img">
          {puppetAffiche && <Puppet puppet={puppetAffiche} />}
        </div>
        { !showPanel && <div className="home-txt">
            <div className="txt">
              <h1> Puppet in the Pocket </h1>
              <p>Parce que ca fait pas de mal de l’avoir pres de soit</p>
              <div className="flex">
                <div className="button secondary-fill"  onClick={setRandomPuppet}>Puppet Aléatoire
                  <div className="button__horizontal"></div>
                  <div className="button__vertical"></div></div>
                <div className="button primary-fill" onClick={() => setShowPanel(true)}> Modifier Puppet
                  <div className="button__horizontal"></div>
                  <div className="button__vertical"></div></div>
              </div>
            </div>
        </div> }
        {/* panel */}
        {
          showPanel &&
          <div className="home-panel">
          {puppetAffiche && <Panel puppet={puppetAffiche} onPuppetChange={handlePuppetChange} onHide={() => setShowPanel(false)} ></Panel>}
          </div>
        }
    </div>
  );
};

export default Home;
