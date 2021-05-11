goog.module('org.pepstock.charba.client.events.LegendHoverEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendHoverEventHandler = goog.require('org.pepstock.charba.client.events.LegendHoverEventHandler$impl');

let LegendHoverEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendHoverEvent$impl');

/**
 * @implements {LegendHoverEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(LegendHoverEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(LegendHoverEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_LegendHoverEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_LegendHoverEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_LegendHoverEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_LegendHoverEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_LegendHoverEventHandler_$JsFunction(/** ?function(LegendHoverEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_LegendHoverEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onHover__org_pepstock_charba_client_events_LegendHoverEvent(/** LegendHoverEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_LegendHoverEventHandler_$LambdaAdaptor;
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
LegendHoverEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.LegendHoverEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=LegendHoverEventHandler$$LambdaAdaptor.js.map
