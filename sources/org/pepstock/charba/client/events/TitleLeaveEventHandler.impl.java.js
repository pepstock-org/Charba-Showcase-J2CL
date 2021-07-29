goog.module('org.pepstock.charba.client.events.TitleLeaveEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let TitleLeaveEvent = goog.forwardDeclare('org.pepstock.charba.client.events.TitleLeaveEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.TitleLeaveEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class TitleLeaveEventHandler {
 /** @abstract */
 m_onLeave__org_pepstock_charba_client_events_TitleLeaveEvent(/** TitleLeaveEvent */ event) {}
 /** @return {TitleLeaveEventHandler} */
 static $adapt(/** ?function(TitleLeaveEvent):void */ fn) {
  TitleLeaveEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  TitleLeaveEventHandler.$clinit = () =>{};
  TitleLeaveEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_TitleLeaveEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_TitleLeaveEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.TitleLeaveEventHandler.$LambdaAdaptor$impl');
 }
}
TitleLeaveEventHandler.$markImplementor(/**@type {Function}*/ (TitleLeaveEventHandler));
$Util.$setClassMetadataForInterface(TitleLeaveEventHandler, "org.pepstock.charba.client.events.TitleLeaveEventHandler");

exports = TitleLeaveEventHandler;

//# sourceMappingURL=TitleLeaveEventHandler.js.map
