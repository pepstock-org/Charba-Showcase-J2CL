goog.module('org.pepstock.charba.client.events.ChartHoverEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ChartHoverEventHandler = goog.require('org.pepstock.charba.client.events.ChartHoverEventHandler$impl');

let ChartHoverEvent = goog.forwardDeclare('org.pepstock.charba.client.events.ChartHoverEvent$impl');

/**
 * @implements {ChartHoverEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ChartHoverEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ChartHoverEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_ChartHoverEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_ChartHoverEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_ChartHoverEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_ChartHoverEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_ChartHoverEventHandler_$JsFunction(/** ?function(ChartHoverEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_ChartHoverEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onHover__org_pepstock_charba_client_events_ChartHoverEvent(/** ChartHoverEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_ChartHoverEventHandler_$LambdaAdaptor;
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
ChartHoverEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.ChartHoverEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=ChartHoverEventHandler$$LambdaAdaptor.js.map
