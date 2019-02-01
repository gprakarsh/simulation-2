import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from './Components/DashBoard/DashBoard';
import WizardOne from './Components/Wizard/WizardOne/WizardOne';
import WizardTwo from './Components/Wizard/WizardTwo/WizardTwo';
import WizardThree from './Components/Wizard/WizardThree/WizardThree';
import Header from './Components/Header/Header';


export default (
    
    <div>
        <Header/>
        <Switch>
            <Route path='/wizard/step3' component={WizardThree} />
            <Route path='/wizard/step2' component={WizardTwo} />
            <Route path='/wizard/step1' component={WizardOne} />
            <Route path='/' component={DashBoard} />
        </Switch>
    </div>
)