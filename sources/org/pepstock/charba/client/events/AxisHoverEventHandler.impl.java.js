goog.module('org.pepstock.charba.client.events.AxisHoverEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let AxisHoverEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisHoverEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.AxisHoverEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class AxisHoverEventHandler {
 /** @abstract */
 m_onHover__org_pepstock_charba_client_events_AxisHoverEvent(/** AxisHoverEvent */ event) {}
 /** @return {AxisHoverEventHandler} */
 static $adapt(/** ?function(AxisHoverEvent):void */ fn) {
  AxisHoverEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  AxisHoverEventHandler.$clinit = () =>{};
  AxisHoverEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_AxisHoverEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_AxisHoverEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.AxisHoverEventHandler.$LambdaAdaptor$impl');
 }
}
AxisHoverEventHandler.$markImplementor(/**@type {Function}*/ (AxisHoverEventHandler));
$Util.$setClassMetadataForInterface(AxisHoverEventHandler, "org.pepstock.charba.client.events.AxisHoverEventHandler");

exports = AxisHoverEventHandler;

//# sourceMappingURL=AxisHoverEventHandler.js.map
