goog.module('org.pepstock.charba.client.events.AxisLeaveEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let AxisLeaveEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisLeaveEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.AxisLeaveEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class AxisLeaveEventHandler {
 /** @abstract */
 m_onLeave__org_pepstock_charba_client_events_AxisLeaveEvent(/** AxisLeaveEvent */ event) {}
 /** @return {AxisLeaveEventHandler} */
 static $adapt(/** ?function(AxisLeaveEvent):void */ fn) {
  AxisLeaveEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  AxisLeaveEventHandler.$clinit = () =>{};
  AxisLeaveEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_AxisLeaveEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_AxisLeaveEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.AxisLeaveEventHandler.$LambdaAdaptor$impl');
 }
}
AxisLeaveEventHandler.$markImplementor(/**@type {Function}*/ (AxisLeaveEventHandler));
$Util.$setClassMetadataForInterface(AxisLeaveEventHandler, "org.pepstock.charba.client.events.AxisLeaveEventHandler");

exports = AxisLeaveEventHandler;

//# sourceMappingURL=AxisLeaveEventHandler.js.map
