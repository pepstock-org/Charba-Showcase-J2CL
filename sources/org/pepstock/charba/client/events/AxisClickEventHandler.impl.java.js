goog.module('org.pepstock.charba.client.events.AxisClickEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let AxisClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisClickEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.AxisClickEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class AxisClickEventHandler {
 /** @abstract */
 m_onClick__org_pepstock_charba_client_events_AxisClickEvent(/** AxisClickEvent */ event) {}
 /** @return {AxisClickEventHandler} */
 static $adapt(/** ?function(AxisClickEvent):void */ fn) {
  AxisClickEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  AxisClickEventHandler.$clinit = () =>{};
  AxisClickEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_AxisClickEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_AxisClickEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.AxisClickEventHandler.$LambdaAdaptor$impl');
 }
}
AxisClickEventHandler.$markImplementor(/**@type {Function}*/ (AxisClickEventHandler));
$Util.$setClassMetadataForInterface(AxisClickEventHandler, "org.pepstock.charba.client.events.AxisClickEventHandler");

exports = AxisClickEventHandler;

//# sourceMappingURL=AxisClickEventHandler.js.map
