goog.module('org.pepstock.charba.client.events.ChartResizeEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let ChartResizeEvent = goog.forwardDeclare('org.pepstock.charba.client.events.ChartResizeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.ChartResizeEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class ChartResizeEventHandler {
 /** @abstract */
 m_onResize__org_pepstock_charba_client_events_ChartResizeEvent(/** ChartResizeEvent */ event) {}
 /** @return {ChartResizeEventHandler} */
 static $adapt(/** ?function(ChartResizeEvent):void */ fn) {
  ChartResizeEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ChartResizeEventHandler.$clinit = () =>{};
  ChartResizeEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_ChartResizeEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_ChartResizeEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.ChartResizeEventHandler.$LambdaAdaptor$impl');
 }
}
ChartResizeEventHandler.$markImplementor(/**@type {Function}*/ (ChartResizeEventHandler));
$Util.$setClassMetadataForInterface(ChartResizeEventHandler, "org.pepstock.charba.client.events.ChartResizeEventHandler");

exports = ChartResizeEventHandler;

//# sourceMappingURL=ChartResizeEventHandler.js.map
