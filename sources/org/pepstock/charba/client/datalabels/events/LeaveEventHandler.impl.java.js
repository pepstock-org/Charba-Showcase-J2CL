goog.module('org.pepstock.charba.client.datalabels.events.LeaveEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.events.LeaveEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class LeaveEventHandler {
 /** @abstract @return {boolean} */
 m_onLeave__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {}
 /** @return {LeaveEventHandler} */
 static $adapt(/** ?function(DataLabelsContext):boolean */ fn) {
  LeaveEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  LeaveEventHandler.$clinit = () =>{};
  LeaveEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_datalabels_events_LeaveEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_datalabels_events_LeaveEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.datalabels.events.LeaveEventHandler.$LambdaAdaptor$impl');
 }
}
LeaveEventHandler.$markImplementor(/**@type {Function}*/ (LeaveEventHandler));
$Util.$setClassMetadataForInterface(LeaveEventHandler, "org.pepstock.charba.client.datalabels.events.LeaveEventHandler");

exports = LeaveEventHandler;

//# sourceMappingURL=LeaveEventHandler.js.map
