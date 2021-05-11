goog.module('org.pepstock.charba.client.events.TitleClickEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let TitleClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.TitleClickEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.TitleClickEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class TitleClickEventHandler {
 /** @abstract */
 m_onClick__org_pepstock_charba_client_events_TitleClickEvent(/** TitleClickEvent */ event) {}
 /** @return {TitleClickEventHandler} */
 static $adapt(/** ?function(TitleClickEvent):void */ fn) {
  TitleClickEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  TitleClickEventHandler.$clinit = () =>{};
  TitleClickEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_TitleClickEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_TitleClickEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.TitleClickEventHandler.$LambdaAdaptor$impl');
 }
}
TitleClickEventHandler.$markImplementor(/**@type {Function}*/ (TitleClickEventHandler));
$Util.$setClassMetadataForInterface(TitleClickEventHandler, "org.pepstock.charba.client.events.TitleClickEventHandler");

exports = TitleClickEventHandler;

//# sourceMappingURL=TitleClickEventHandler.js.map
