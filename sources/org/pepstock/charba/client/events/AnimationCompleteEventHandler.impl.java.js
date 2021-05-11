goog.module('org.pepstock.charba.client.events.AnimationCompleteEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let AnimationCompleteEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AnimationCompleteEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.AnimationCompleteEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class AnimationCompleteEventHandler {
 /** @abstract */
 m_onComplete__org_pepstock_charba_client_events_AnimationCompleteEvent(/** AnimationCompleteEvent */ event) {}
 /** @return {AnimationCompleteEventHandler} */
 static $adapt(/** ?function(AnimationCompleteEvent):void */ fn) {
  AnimationCompleteEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  AnimationCompleteEventHandler.$clinit = () =>{};
  AnimationCompleteEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_AnimationCompleteEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_AnimationCompleteEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.AnimationCompleteEventHandler.$LambdaAdaptor$impl');
 }
}
AnimationCompleteEventHandler.$markImplementor(/**@type {Function}*/ (AnimationCompleteEventHandler));
$Util.$setClassMetadataForInterface(AnimationCompleteEventHandler, "org.pepstock.charba.client.events.AnimationCompleteEventHandler");

exports = AnimationCompleteEventHandler;

//# sourceMappingURL=AnimationCompleteEventHandler.js.map
