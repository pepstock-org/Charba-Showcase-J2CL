goog.module('org.pepstock.charba.client.events.LegendHoverEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let LegendHoverEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendHoverEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.LegendHoverEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class LegendHoverEventHandler {
 /** @abstract */
 m_onHover__org_pepstock_charba_client_events_LegendHoverEvent(/** LegendHoverEvent */ event) {}
 /** @return {LegendHoverEventHandler} */
 static $adapt(/** ?function(LegendHoverEvent):void */ fn) {
  LegendHoverEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  LegendHoverEventHandler.$clinit = () =>{};
  LegendHoverEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_LegendHoverEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_LegendHoverEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.LegendHoverEventHandler.$LambdaAdaptor$impl');
 }
}
LegendHoverEventHandler.$markImplementor(/**@type {Function}*/ (LegendHoverEventHandler));
$Util.$setClassMetadataForInterface(LegendHoverEventHandler, "org.pepstock.charba.client.events.LegendHoverEventHandler");

exports = LegendHoverEventHandler;

//# sourceMappingURL=LegendHoverEventHandler.js.map
