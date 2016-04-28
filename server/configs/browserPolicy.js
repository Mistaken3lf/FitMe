import { BrowserPolicy } from 'meteor/browser-policy-common';

BrowserPolicy.framing.disallow();
BrowserPolicy.content.disallowInlineScripts();
BrowserPolicy.content.disallowEval();
BrowserPolicy.content.allowInlineStyles();
BrowserPolicy.content.allowFontDataUrl();
BrowserPolicy.content.allowOriginForAll('https://js.stripe.com/');
BrowserPolicy.content.allowOriginForAll('https://checkout.stripe.com/');
BrowserPolicy.content.allowOriginForAll('https://q.stripe.com/');
BrowserPolicy.content.allowOriginForAll('https://www.youtube.com/');

var trusted = [
  '*.google-analytics.com',
  '*.mxpnl.com',
  '*.zendesk.com',
  '*.googleapis.com',
  '*.gstatic.com'
];

_.each(trusted, function (origin) {
  origin = 'https://' + origin;
  BrowserPolicy.content.allowOriginForAll(origin);
});