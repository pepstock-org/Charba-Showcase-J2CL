goog.module('org.pepstock.charba.client.events.LegendClickEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let LegendClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendClickEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.LegendClickEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class LegendClickEventHandler {
 /** @abstract */
 m_onClick__org_pepstock_charba_client_events_LegendClickEvent(/** LegendClickEvent */ event) {}
 /** @return {LegendClickEventHandler} */
 static $adapt(/** ?function(LegendClickEvent):void */ fn) {
  LegendClickEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  LegendClickEventHandler.$clinit = () =>{};
  LegendClickEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_LegendClickEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_LegendClickEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.LegendClickEventHandler.$LambdaAdaptor$impl');
 }
}
LegendClickEventHandler.$markImplementor(/**@type {Function}*/ (LegendClickEventHandler));
$Util.$setClassMetadataForInterface(LegendClickEventHandler, "org.pepstock.charba.client.events.LegendClickEventHandler");

exports = LegendClickEventHandler;

//# sourceMappingURL=LegendClickEventHandler.js.map
