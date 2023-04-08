import React, { FC } from 'react';
import { PuppetModel } from '../../model/PuppetModel';
import LocalStorageService from '../../services/storageService';
import Puppet from '../Puppet/Puppet';
import './Home.scss';

interface HomeProps {}

const storeService= new LocalStorageService();
const puppetAffiche = getPuppetFromStore();

function getPuppetFromStore(){
  let puppet: PuppetModel = LocalStorageService.getPuppetAffiche();
  if(puppet != null) {
    puppet = new PuppetModel();
  }else {
    puppet = new PuppetModel();
  }
  return puppet;
}

const Home: FC<HomeProps> = () => (
  <div className="Home">
    {/* first */}
    <div className="home-first">
      <div className="home-img">
        <Puppet puppet={puppetAffiche} />
      </div>
      <div className="home-txt"></div>
        <div className="txt">
          <h1> Puppet in the Pocket </h1>
          <p>Parce que ca fait pas de mal de l’avoir pres de soit</p>
          <div className="button">Puppet Aléatoire</div>
          <div className="button">Nouvelle Puppet</div>
        </div>
      </div>
      {/* second */}
      <div className="home-second">
        <div className="home-img">
          <Puppet puppet={puppetAffiche} />
        </div>
        <div className="home-txt"></div>
          <div className="txt">
            <h1> Qui sommes nous ? </h1>
            <p>Parce que ca fait pas de mal de l’avoir pres de soit</p>
            <div className="button">Puppet Aléatoire</div>
            <div className="button">Nouvelle Puppet</div>
          </div>
      </div>
  </div>
);

export default Home;
