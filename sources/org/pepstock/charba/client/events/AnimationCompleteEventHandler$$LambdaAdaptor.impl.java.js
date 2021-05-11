goog.module('org.pepstock.charba.client.events.AnimationCompleteEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AnimationCompleteEventHandler = goog.require('org.pepstock.charba.client.events.AnimationCompleteEventHandler$impl');

let AnimationCompleteEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AnimationCompleteEvent$impl');

/**
 * @implements {AnimationCompleteEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(AnimationCompleteEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(AnimationCompleteEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_AnimationCompleteEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_AnimationCompleteEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_AnimationCompleteEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_AnimationCompleteEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_AnimationCompleteEventHandler_$JsFunction(/** ?function(AnimationCompleteEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_AnimationCompleteEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onComplete__org_pepstock_charba_client_events_AnimationCompleteEvent(/** AnimationCompleteEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_AnimationCompleteEventHandler_$LambdaAdaptor;
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
AnimationCompleteEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.AnimationCompleteEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=AnimationCompleteEventHandler$$LambdaAdaptor.js.map
