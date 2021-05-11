goog.module('org.pepstock.charba.client.events.ChartClickEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let ChartClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.ChartClickEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.ChartClickEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class ChartClickEventHandler {
 /** @abstract */
 m_onClick__org_pepstock_charba_client_events_ChartClickEvent(/** ChartClickEvent */ event) {}
 /** @return {ChartClickEventHandler} */
 static $adapt(/** ?function(ChartClickEvent):void */ fn) {
  ChartClickEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ChartClickEventHandler.$clinit = () =>{};
  ChartClickEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_ChartClickEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_ChartClickEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.ChartClickEventHandler.$LambdaAdaptor$impl');
 }
}
ChartClickEventHandler.$markImplementor(/**@type {Function}*/ (ChartClickEventHandler));
$Util.$setClassMetadataForInterface(ChartClickEventHandler, "org.pepstock.charba.client.events.ChartClickEventHandler");

exports = ChartClickEventHandler;

//# sourceMappingURL=ChartClickEventHandler.js.map
