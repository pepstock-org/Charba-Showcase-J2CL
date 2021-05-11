goog.module('org.pepstock.charba.client.events.LegendLeaveEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendLeaveEventHandler = goog.require('org.pepstock.charba.client.events.LegendLeaveEventHandler$impl');

let LegendLeaveEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendLeaveEvent$impl');

/**
 * @implements {LegendLeaveEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(LegendLeaveEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(LegendLeaveEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_LegendLeaveEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_LegendLeaveEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_LegendLeaveEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_LegendLeaveEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_LegendLeaveEventHandler_$JsFunction(/** ?function(LegendLeaveEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_LegendLeaveEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onLeave__org_pepstock_charba_client_events_LegendLeaveEvent(/** LegendLeaveEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_LegendLeaveEventHandler_$LambdaAdaptor;
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
LegendLeaveEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.LegendLeaveEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=LegendLeaveEventHandler$$LambdaAdaptor.js.map
