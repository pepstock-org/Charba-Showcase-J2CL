goog.module('org.pepstock.charba.client.events.AnimationProgressEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AnimationProgressEventHandler = goog.require('org.pepstock.charba.client.events.AnimationProgressEventHandler$impl');

let AnimationProgressEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AnimationProgressEvent$impl');

/**
 * @implements {AnimationProgressEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(AnimationProgressEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(AnimationProgressEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_AnimationProgressEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_AnimationProgressEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_AnimationProgressEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_AnimationProgressEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_AnimationProgressEventHandler_$JsFunction(/** ?function(AnimationProgressEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_AnimationProgressEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onProgress__org_pepstock_charba_client_events_AnimationProgressEvent(/** AnimationProgressEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_AnimationProgressEventHandler_$LambdaAdaptor;
   $function(arg0);
  }
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
AnimationProgressEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.AnimationProgressEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=AnimationProgressEventHandler$$LambdaAdaptor.js.map
