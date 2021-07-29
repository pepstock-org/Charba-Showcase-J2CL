goog.module('org.pepstock.charba.client.events.AxisHoverEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AxisHoverEventHandler = goog.require('org.pepstock.charba.client.events.AxisHoverEventHandler$impl');

let AxisHoverEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisHoverEvent$impl');

/**
 * @implements {AxisHoverEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(AxisHoverEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(AxisHoverEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_AxisHoverEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_AxisHoverEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_AxisHoverEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_AxisHoverEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_AxisHoverEventHandler_$JsFunction(/** ?function(AxisHoverEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_AxisHoverEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onHover__org_pepstock_charba_client_events_AxisHoverEvent(/** AxisHoverEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_AxisHoverEventHandler_$LambdaAdaptor;
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
AxisHoverEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.AxisHoverEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=AxisHoverEventHandler$$LambdaAdaptor.js.map
