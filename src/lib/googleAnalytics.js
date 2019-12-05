import google from "../config/GOOGLE";

const googleAnalytics = (function() {
  if (!window.dataLayer) {
    window.dataLayer = [];
    gtag("js", new Date());
    gtag("config", google.GA_MEASUREMENT_ID);
  }
  function gtag() {
    window.dataLayer.push(arguments);
  }

  return {
    gtag: gtag
  };
})();

export default googleAnalytics;
