import React, { FC } from 'react';
import { PuppetModel } from '../../model/PuppetModel';
import './Puppet.scss';

interface PuppetProps {
  puppet: PuppetModel;
}


const Puppet: FC<PuppetProps> = (props) => (
  <div className="Puppet" data-testid="Puppet">
    <img src="{props.puppet.chapeaux.getUrl()}"/>
  </div>
);

export default Puppet;
