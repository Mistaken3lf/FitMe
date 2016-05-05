import React from 'react';

FrequentQuestions = React.createClass({
  render() {
    return (
      <div>
        <h4 className="center blue-text">FREQUENTLY ASKED QUESTIONS</h4>
        <hr className="guideSeperator" />
        <br />
        <div className="row">
          <div className="col s12 m12 l12">
            <li>
              <h5>What is a free plan?</h5></li>
            <h6 className="blue-text faqAnswer"><b>Everyone signing up for FitMe will be able to create a free account which includes a free 7-day trial.  Users will also be able to
                create one <b>FREE</b> client so they can test out FitMe.  After your free 7-day trial account expires, you can either cancel your account or proceed
                in purchasing a paid plan.</b></h6>
            <br />
            <li>
              <h5>What is a paid plan?</h5></li>
            <h6 className="blue-text faqAnswer"><b>FitMe has three different paid plans: 1 Month, 6 Month, and 1 Year.  You can visit the MY ACCOUNT button located on the
                side navigation to view each plan.  All plans have a 50 client limit.</b></h6>
            <br />
            <li>
              <h5>What is a dashboard?</h5></li>
            <h6 className="blue-text faqAnswer"><b>FitMe dashboards give trainers easy access to everything about their clients.  Each new client that is created will have their
                own dashboard that is packed with functionality.  Trainers will be able to see a client's profile, schedule, stats, cardio, and workouts.</b></h6>
            <br />
            <li>
              <h5>What browser should I use?</h5></li>
            <h6 className="blue-text faqAnswer"><b>FitMe strives to make sure that our site works in all browsers.  All browsers should work accordingly, but we suggest using
                Google Chrome if possible.  If you are using another browser and find any errors, please let us know so we can do our best in ensuring you have the best
                training experience.  You can send us an email at support@gofitme.com.</b></h6>
            <br />
            <li>
              <h5>Where can I renew my plan?</h5></li>
            <h6 className="blue-text faqAnswer"><b>Your plan can be renewed by clicking on the MY ACCOUNT button on the side navigation and selecting a plan.</b></h6>
            <br />
            <li>
              <h5>Can I add more clients if I reach the limit?</h5></li>
            <h6 className="blue-text faqAnswer"><b>You absolutely can!  Just go to the MY ACCOUNT button on the side navigation and you will see a section called Extras where you can add addtional clients for a small fee.</b></h6>
            <br />
            <li>
              <h5>How do I contact FitMe?</h5></li>
            <h6 className="blue-text faqAnswer"><b><a href="/contactPage"><u>Click this link</u></a> so that you can send your information to the appropriate email.</b></h6>
            <br />
          </div>
        </div>
      </div>
    );
  },
});