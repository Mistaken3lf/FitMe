import React from 'react';
import Overview from './Overview.js';
import ChangesToTerms from './ChangesToTerms.js';
import ChangesToSite from './ChangesToSite.js';
import AccessingSite from './AccessingSite.js';
import YourAccount from './YourAccount.js';
import LimitationOfLiability from './LimitationOfLiability.js';
import DiscontinuedServices from './DiscontinuedServices.js';
import PrivacyPolicy from './PrivacyPolicy.js';
import IntellectualProperty from './IntellectualProperty.js';
import VirusesAndMisuse from './VirusesAndMisuse.js';
import ThirdParties from './ThirdParties.js';
import Payments from './Payments.js';
import Refunds from './Refunds.js';
import Cancellation from './Cancellation.js';
import ContactInfo from './ContactInfo.js';

const TermsAndConditions = () => (
  <div>
    <div className="box">
      <h3 className="blue-text center">Terms And Conditions</h3>
    </div>
    <br />
    <br />
    <div className="row">
      <div className="col s12 m12 l12">
        <h6 className="extraPadding">Last Revised: December 29, 2015.</h6><br />
        <h6 className="extraPadding"><b>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY, AS THESE WILL APPLY TO YOUR USE OF OUR SITE.</b></h6><br />
        <Overview />
        <ChangesToTerms />
        <ChangesToSite />
        <AccessingSite />
        <YourAccount />
        <LimitationOfLiability />
        <DiscontinuedServices />
        <PrivacyPolicy />
        <IntellectualProperty />
        <VirusesAndMisuse />
        <ThirdParties />
        <Payments />
        <Refunds />
        <Cancellation />
        <ContactInfo />
        <br />
        <h6 className="extraPadding">Last Revised: December 29, 2015.</h6>
        <br />
        <br />
        <div className="row center">
          <img className="responsive-img termsLogo" src="/TrainerGuide/fitMeGuideHeader.png" />
        </div>
      </div>
    </div>
  </div>
);

export default TermsAndConditions;