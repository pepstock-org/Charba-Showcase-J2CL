goog.module('org.pepstock.charba.client.events.AxisEnterEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let AxisEnterEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisEnterEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.AxisEnterEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class AxisEnterEventHandler {
 /** @abstract */
 m_onEnter__org_pepstock_charba_client_events_AxisEnterEvent(/** AxisEnterEvent */ event) {}
 /** @return {AxisEnterEventHandler} */
 static $adapt(/** ?function(AxisEnterEvent):void */ fn) {
  AxisEnterEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  AxisEnterEventHandler.$clinit = () =>{};
  AxisEnterEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_AxisEnterEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_AxisEnterEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.AxisEnterEventHandler.$LambdaAdaptor$impl');
 }
}
AxisEnterEventHandler.$markImplementor(/**@type {Function}*/ (AxisEnterEventHandler));
$Util.$setClassMetadataForInterface(AxisEnterEventHandler, "org.pepstock.charba.client.events.AxisEnterEventHandler");

exports = AxisEnterEventHandler;

//# sourceMappingURL=AxisEnterEventHandler.js.map
