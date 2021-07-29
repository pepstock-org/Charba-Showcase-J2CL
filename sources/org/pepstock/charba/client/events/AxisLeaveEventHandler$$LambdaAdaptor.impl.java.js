goog.module('org.pepstock.charba.client.events.AxisLeaveEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AxisLeaveEventHandler = goog.require('org.pepstock.charba.client.events.AxisLeaveEventHandler$impl');

let AxisLeaveEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisLeaveEvent$impl');

/**
 * @implements {AxisLeaveEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(AxisLeaveEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(AxisLeaveEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_AxisLeaveEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_AxisLeaveEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_AxisLeaveEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_AxisLeaveEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_AxisLeaveEventHandler_$JsFunction(/** ?function(AxisLeaveEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_AxisLeaveEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onLeave__org_pepstock_charba_client_events_AxisLeaveEvent(/** AxisLeaveEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_AxisLeaveEventHandler_$LambdaAdaptor;
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
AxisLeaveEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.AxisLeaveEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=AxisLeaveEventHandler$$LambdaAdaptor.js.map
