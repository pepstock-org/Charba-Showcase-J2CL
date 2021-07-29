goog.module('org.pepstock.charba.client.events.TitleEnterEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let TitleEnterEvent = goog.forwardDeclare('org.pepstock.charba.client.events.TitleEnterEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.TitleEnterEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class TitleEnterEventHandler {
 /** @abstract */
 m_onEnter__org_pepstock_charba_client_events_TitleEnterEvent(/** TitleEnterEvent */ event) {}
 /** @return {TitleEnterEventHandler} */
 static $adapt(/** ?function(TitleEnterEvent):void */ fn) {
  TitleEnterEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  TitleEnterEventHandler.$clinit = () =>{};
  TitleEnterEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_TitleEnterEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_TitleEnterEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.TitleEnterEventHandler.$LambdaAdaptor$impl');
 }
}
TitleEnterEventHandler.$markImplementor(/**@type {Function}*/ (TitleEnterEventHandler));
$Util.$setClassMetadataForInterface(TitleEnterEventHandler, "org.pepstock.charba.client.events.TitleEnterEventHandler");

exports = TitleEnterEventHandler;

//# sourceMappingURL=TitleEnterEventHandler.js.map
