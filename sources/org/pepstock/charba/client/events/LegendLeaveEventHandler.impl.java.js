goog.module('org.pepstock.charba.client.events.LegendLeaveEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let LegendLeaveEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendLeaveEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.LegendLeaveEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class LegendLeaveEventHandler {
 /** @abstract */
 m_onLeave__org_pepstock_charba_client_events_LegendLeaveEvent(/** LegendLeaveEvent */ event) {}
 /** @return {LegendLeaveEventHandler} */
 static $adapt(/** ?function(LegendLeaveEvent):void */ fn) {
  LegendLeaveEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  LegendLeaveEventHandler.$clinit = () =>{};
  LegendLeaveEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_LegendLeaveEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_LegendLeaveEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.LegendLeaveEventHandler.$LambdaAdaptor$impl');
 }
}
LegendLeaveEventHandler.$markImplementor(/**@type {Function}*/ (LegendLeaveEventHandler));
$Util.$setClassMetadataForInterface(LegendLeaveEventHandler, "org.pepstock.charba.client.events.LegendLeaveEventHandler");

exports = LegendLeaveEventHandler;

//# sourceMappingURL=LegendLeaveEventHandler.js.map
