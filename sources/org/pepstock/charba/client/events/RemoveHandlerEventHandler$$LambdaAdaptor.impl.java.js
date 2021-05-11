goog.module('org.pepstock.charba.client.events.RemoveHandlerEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const RemoveHandlerEventHandler = goog.require('org.pepstock.charba.client.events.RemoveHandlerEventHandler$impl');

let RemoveHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.RemoveHandlerEvent$impl');

/**
 * @implements {RemoveHandlerEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(RemoveHandlerEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(RemoveHandlerEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_RemoveHandlerEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_RemoveHandlerEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_RemoveHandlerEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_RemoveHandlerEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_RemoveHandlerEventHandler_$JsFunction(/** ?function(RemoveHandlerEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_RemoveHandlerEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onRemove__org_pepstock_charba_client_events_RemoveHandlerEvent(/** RemoveHandlerEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_RemoveHandlerEventHandler_$LambdaAdaptor;
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
RemoveHandlerEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.RemoveHandlerEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=RemoveHandlerEventHandler$$LambdaAdaptor.js.map
