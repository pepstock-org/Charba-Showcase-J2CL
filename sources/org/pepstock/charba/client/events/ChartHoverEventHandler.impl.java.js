goog.module('org.pepstock.charba.client.events.ChartHoverEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let ChartHoverEvent = goog.forwardDeclare('org.pepstock.charba.client.events.ChartHoverEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.ChartHoverEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class ChartHoverEventHandler {
 /** @abstract */
 m_onHover__org_pepstock_charba_client_events_ChartHoverEvent(/** ChartHoverEvent */ event) {}
 /** @return {ChartHoverEventHandler} */
 static $adapt(/** ?function(ChartHoverEvent):void */ fn) {
  ChartHoverEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ChartHoverEventHandler.$clinit = () =>{};
  ChartHoverEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_ChartHoverEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_ChartHoverEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.ChartHoverEventHandler.$LambdaAdaptor$impl');
 }
}
ChartHoverEventHandler.$markImplementor(/**@type {Function}*/ (ChartHoverEventHandler));
$Util.$setClassMetadataForInterface(ChartHoverEventHandler, "org.pepstock.charba.client.events.ChartHoverEventHandler");

exports = ChartHoverEventHandler;

//# sourceMappingURL=ChartHoverEventHandler.js.map
