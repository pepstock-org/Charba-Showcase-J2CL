goog.module('org.pepstock.charba.client.datalabels.events.ClickEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.events.ClickEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ClickEventHandler {
 /** @abstract @return {boolean} */
 m_onClick__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {}
 /** @return {ClickEventHandler} */
 static $adapt(/** ?function(DataLabelsContext):boolean */ fn) {
  ClickEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ClickEventHandler.$clinit = () =>{};
  ClickEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_datalabels_events_ClickEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_datalabels_events_ClickEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.datalabels.events.ClickEventHandler.$LambdaAdaptor$impl');
 }
}
ClickEventHandler.$markImplementor(/**@type {Function}*/ (ClickEventHandler));
$Util.$setClassMetadataForInterface(ClickEventHandler, "org.pepstock.charba.client.datalabels.events.ClickEventHandler");

exports = ClickEventHandler;

//# sourceMappingURL=ClickEventHandler.js.map
