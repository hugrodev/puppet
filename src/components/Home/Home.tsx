import React, { FC, useEffect, useRef, useState } from 'react';
import { PuppetModel } from '../../model/PuppetModel';
import LocalStorageService from '../../services/storageService';
import Puppet from '../Puppet/Puppet';
import './Home.scss';
import Panel from '../Panel/Panel';
import OutilsHtmlService from '../../services/outilsHtml';

interface HomeProps { }

const Home: FC<HomeProps> = () => {
  const [puppetAffiche, setPuppetAffiche] = useState(() => {
    const storedPuppet: PuppetModel = LocalStorageService.getPuppetAffiche() as PuppetModel;
    return storedPuppet || new PuppetModel();
  });
  const [showPanel, setShowPanel] = useState(false);
  const [accessoireRandom, setAccessoireRandom] = useState(false); // Nouvelle variable d'état pour accésoire aléatoire


  function handlePuppetChange(puppet: PuppetModel) {
    setPuppetAffiche(puppet);
  }

  async function setRandomPuppet() {
    if (!accessoireRandom) {
      setAccessoireRandom(true);
      await setTimeout(async () => {
        setPuppetAffiche(new PuppetModel());
        await setTimeout(() => {
          setAccessoireRandom(false);
        }, 2000);
      }, 100);
    }
  }

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    OutilsHtmlService.activeColor("1");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: '-100px' });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);



  return (
    <div className="Home">
      {/* first */}
      <div className="first">
        <div className="home-img slideInUp">
          {puppetAffiche && <Puppet puppet={puppetAffiche} accessoireChange={accessoireRandom} />}
        </div>
        {!showPanel &&
          <div className="home-txt slideInRight">
            <div className="txt">
              <h1> Puppet in the Pocket </h1>
              <p>Parce que ca fait pas de mal de l’avoir pres de soit</p>
              <div className="flex">
                <div className="buttons">
                  <button className="button-pushable primary" onClick={setRandomPuppet} ><span className="button-shadow"></span><span className="button-edge"></span><span className="button-front text">Puppet Aléatoire </span></button>
                </div>
                <div className="buttons">
                  <button className="button-pushable secondary" onClick={() => setShowPanel(true)} ><span className="button-shadow"></span><span className="button-edge"></span><span className="button-front text">Modifier Puppet </span></button>
                </div>
              </div>
            </div>
          </div>
        }
        {/* panel */}
        {
          showPanel &&
          <div className="popup home-panel">
            {puppetAffiche && <Panel puppet={puppetAffiche} onPuppetChange={handlePuppetChange} onHide={() => setShowPanel(false)} ></Panel>}
          </div>
        }
      </div>
      <div className='second'>
        <div className='home-img'>
          <div className="hugo-puppet">
            {/* <Puppet puppet={puppetAffiche} /> */}
          </div>
          <img className='hugo-bg' src="./hugo.png"></img>
        </div>

        <div className={`home-txt ${isVisible ? 'slideInRight' : 'invisible'}`} ref={ref}>
          <div className="txt">
            <h1> Qui Sommes nous ? </h1>
            <p>Je suis un développeur web passionné de dessin et de développement. Mon projet de site de vente de marionnettes personnalisables mêle le style cartoon et la bande dessinée, offrant une touche de magie et d'enfance dans le monde des adultes. Le site permet de créer sa marionnette personnalisée et de la partager avec les autres. Les t-shirts avec poches sont une façon élégante et ludique de porter ces créations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
