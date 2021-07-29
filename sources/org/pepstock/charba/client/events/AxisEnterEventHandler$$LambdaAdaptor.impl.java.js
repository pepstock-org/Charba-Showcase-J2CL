goog.module('org.pepstock.charba.client.events.AxisEnterEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AxisEnterEventHandler = goog.require('org.pepstock.charba.client.events.AxisEnterEventHandler$impl');

let AxisEnterEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisEnterEvent$impl');

/**
 * @implements {AxisEnterEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(AxisEnterEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(AxisEnterEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_AxisEnterEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_AxisEnterEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_AxisEnterEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_AxisEnterEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_AxisEnterEventHandler_$JsFunction(/** ?function(AxisEnterEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_AxisEnterEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onEnter__org_pepstock_charba_client_events_AxisEnterEvent(/** AxisEnterEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_AxisEnterEventHandler_$LambdaAdaptor;
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
AxisEnterEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.AxisEnterEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=AxisEnterEventHandler$$LambdaAdaptor.js.map
