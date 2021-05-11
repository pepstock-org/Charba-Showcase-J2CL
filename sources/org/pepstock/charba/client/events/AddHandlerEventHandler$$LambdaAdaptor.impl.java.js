goog.module('org.pepstock.charba.client.events.AddHandlerEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AddHandlerEventHandler = goog.require('org.pepstock.charba.client.events.AddHandlerEventHandler$impl');

let AddHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AddHandlerEvent$impl');

/**
 * @implements {AddHandlerEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(AddHandlerEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(AddHandlerEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_AddHandlerEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_AddHandlerEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_AddHandlerEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_AddHandlerEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_AddHandlerEventHandler_$JsFunction(/** ?function(AddHandlerEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_AddHandlerEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onAdd__org_pepstock_charba_client_events_AddHandlerEvent(/** AddHandlerEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_AddHandlerEventHandler_$LambdaAdaptor;
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
AddHandlerEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.AddHandlerEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=AddHandlerEventHandler$$LambdaAdaptor.js.map
