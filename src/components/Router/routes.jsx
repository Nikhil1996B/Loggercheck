import React from "react";
import { Route, useLocation, Switch } from "react-router-dom";
import HomePage from "../../Pages/HomePage/page-content-slot";
import SearchResultsPageContent from "../../Pages/SearchResults/search-page-content-slot";
import MyListPagePageContent from "../../Pages//MyList/mylist-content-slot";
import ContentDetailsPageContent from "../../Pages/ContentDetailsPage/content-details-page-slot";
import AccountdetailPageContent from '../../Pages/MyAccountDetails/accountdetailpageslots';
import RecentStreamingPageContent from '../../Pages/MyAccountDetails/RecentStreamingActivity/recentstreamingpageslots';
import BillingdetailPageContent from '../../Pages/BillingDetails/billingdetailspageslot';
import ActivateDevicePageContent from '../../Pages/MyAccountDetails/ActivateDevice/activatedevicepageslots';
import { VideoPage } from "../../Pages/VideoPage/VideoPage";
import SignInPage from '../../Pages/SignInPage/index';
import SignUpPage from '../../Pages/SignUpPage/index';
import MemberShip from '../../Pages/membership/index';
import ChangePlan from '../../Pages/ChangePlan/index';
import SubscriptionActivated from '../../Pages/SignUpPage/SubscriptionActivatedPage';
import PaymentSelectionPage from '../../Pages/PaymentOptionsPage/index';
import StripeCheckoutFlow from '../../Pages/StripeCheckoutFlow';
import ResetPassword from '../../Pages/ResetPassword';
import StaticInformation from '../../Pages/StaticPages';
import { ProtectedRoute, SignedInUser } from './protected.route';
import ForgotPassword from '../../Pages/ForgotPassword';
import { pathOr } from "ramda";
import { analyticsService } from '../../services/analyticsapi.service';
import { removeTrailingSlash } from '../../helpers/helper';
import { ErrorPage } from "../../Pages/ErrorPage/ErrorPage";

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    analyticsService.addeventanalytics('pageview', removeTrailingSlash(pathOr('', ['pathname'])(location)));
  }, [location]);
}

function Routes() {
  usePageViews();
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/home" component={HomePage} />
      <Route path="/search" component={SearchResultsPageContent} />
      <Route path="/success" component={SubscriptionActivated} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/terms-of-use" component={StaticInformation} />
      <Route path="/about" component={StaticInformation} />
      <Route path="/privacy" component={StaticInformation} />
      <SignedInUser path="/signIn" component={SignInPage} />
      <SignedInUser path="/signUp" component={SignUpPage} />
      <SignedInUser path="/forgotpassword" component={ForgotPassword} />
      <ProtectedRoute path="/paymentoptions" component={PaymentSelectionPage} />
      <ProtectedRoute path="/cardcheckout" component={StripeCheckoutFlow} />
      <ProtectedRoute path="/membership" component={MemberShip} />
      <ProtectedRoute path="/player" component={VideoPage} />
      <ProtectedRoute path="/accountdetails" component={AccountdetailPageContent} />
      <ProtectedRoute path="/contentdetails" component={ContentDetailsPageContent} />
      <ProtectedRoute path="/billingdetails" component={BillingdetailPageContent} />
      <ProtectedRoute path="/streamingdetails" component={RecentStreamingPageContent} />
      <ProtectedRoute path="/activatedevice" component={ActivateDevicePageContent} />
      <ProtectedRoute path="/mylist" component={MyListPagePageContent} />
      <ProtectedRoute path="/changeplan" component={ChangePlan} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default Routes;

