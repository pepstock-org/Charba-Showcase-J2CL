goog.module('org.pepstock.charba.client.datalabels.events.EnterEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.events.EnterEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class EnterEventHandler {
 /** @abstract @return {boolean} */
 m_onEnter__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {}
 /** @return {EnterEventHandler} */
 static $adapt(/** ?function(DataLabelsContext):boolean */ fn) {
  EnterEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  EnterEventHandler.$clinit = () =>{};
  EnterEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_datalabels_events_EnterEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_datalabels_events_EnterEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.datalabels.events.EnterEventHandler.$LambdaAdaptor$impl');
 }
}
EnterEventHandler.$markImplementor(/**@type {Function}*/ (EnterEventHandler));
$Util.$setClassMetadataForInterface(EnterEventHandler, "org.pepstock.charba.client.datalabels.events.EnterEventHandler");

exports = EnterEventHandler;

//# sourceMappingURL=EnterEventHandler.js.map
