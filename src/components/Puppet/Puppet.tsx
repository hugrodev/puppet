import React, { FC, useState } from 'react';
import { PuppetModel } from '../../model/PuppetModel';
import './Puppet.scss';
import CATG_NB from '../../constantes/AccessoireConst';
import { AccessoireModel } from '../../model/AccessoireModel';
import Accessoire from '../AccessoireModel/Accessoire';

interface PuppetProps {
  puppet: PuppetModel;
}

const Puppet: FC<PuppetProps> = (props) => {
  let zIndex = Object.keys(CATG_NB).length * 5;

  return (
    <div className="Puppet" data-testid="Puppet">
      {Object.keys(CATG_NB).map((key) => {
        const category = CATG_NB[key];
        if (props.puppet[category.nom as keyof PuppetModel] instanceof AccessoireModel) {
          //recuperation de l'accessoire
          const accessoire = props.puppet[category.nom as keyof PuppetModel] as AccessoireModel;

          if (accessoire && Number(accessoire.getNumero()) > 0) {
            zIndex = zIndex - 3;
            return (
              <React.Fragment key={category.nom}>
                <Accessoire accessoire={accessoire} zIndex={zIndex}></Accessoire>
              </React.Fragment>
            );
          }
        }
        return null;
      })}
    </div>
  );
};

export default Puppet;
