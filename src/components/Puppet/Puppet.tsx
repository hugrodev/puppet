import React, { FC } from 'react';
import { PuppetModel } from '../../model/PuppetModel';
import './Puppet.scss';

interface PuppetProps {
  puppet: PuppetModel;
}


const Puppet: FC<PuppetProps> = (props) => (
  <div className="Puppet" data-testid="Puppet">
    <img src={props.puppet.getChapeaux()}/>
    <img src={props.puppet.getCheveuxCoupe()}/>
    <img src={props.puppet.getOreille()}/>
    <img src={props.puppet.getCheveuxPattes()}/>
    <img src={props.puppet.getLunettes()}/>
    <img src={props.puppet.getSourcils()} />
    <img src={props.puppet.getOeilGauche()} />
    <img src={props.puppet.getNez()} />
    <img src={props.puppet.getOeiDroit()} />
    <img src={props.puppet.getBouche()} />
    <img src={props.puppet.getCorps()} />
  </div>
);

export default Puppet;
