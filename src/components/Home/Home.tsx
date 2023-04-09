import React, { FC, useState } from 'react';
import { PuppetModel } from '../../model/PuppetModel';
import LocalStorageService from '../../services/storageService';
import Puppet from '../Puppet/Puppet';
import './Home.scss';

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
  
    return (
      <div className="Home">
        {/* first */}
        <div className="home-first">
          <div className="home-img">
            <Puppet puppet={puppetAffiche} />
          </div>
          <div className="home-txt">
              <div className="txt">
                <h1> Puppet in the Pocket </h1>
                <p>Parce que ca fait pas de mal de l’avoir pres de soit</p>
                <div className="button"  onClick={setRandomPuppet}>Puppet Aléatoire</div>
                <div className="button">Nouvelle Puppet</div>
              </div>
          </div>
        </div>
        {/* second */}
        {/* <div className="home-second">
          <div className="home-img">
            <Puppet puppet={puppetAffiche} />
          </div>
          <div className="home-txt">
              <div className="txt">
                <h1> Puppet in the Pocket </h1>
                <p>Parce que ca fait pas de mal de l’avoir pres de soit</p>
                <div className="button">Puppet Aléatoire</div>
                <div className="button">Nouvelle Puppet</div>
              </div>
          </div>
        </div> */}
      </div>
    );
  };

export default Home;
