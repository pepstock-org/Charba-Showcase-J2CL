goog.module('org.pepstock.charba.client.events.AnimationProgressEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let AnimationProgressEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AnimationProgressEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.AnimationProgressEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class AnimationProgressEventHandler {
 /** @abstract */
 m_onProgress__org_pepstock_charba_client_events_AnimationProgressEvent(/** AnimationProgressEvent */ event) {}
 /** @return {AnimationProgressEventHandler} */
 static $adapt(/** ?function(AnimationProgressEvent):void */ fn) {
  AnimationProgressEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  AnimationProgressEventHandler.$clinit = () =>{};
  AnimationProgressEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_AnimationProgressEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_AnimationProgressEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.AnimationProgressEventHandler.$LambdaAdaptor$impl');
 }
}
AnimationProgressEventHandler.$markImplementor(/**@type {Function}*/ (AnimationProgressEventHandler));
$Util.$setClassMetadataForInterface(AnimationProgressEventHandler, "org.pepstock.charba.client.events.AnimationProgressEventHandler");

exports = AnimationProgressEventHandler;

//# sourceMappingURL=AnimationProgressEventHandler.js.map
