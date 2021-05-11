goog.module('org.pepstock.charba.client.events.LegendClickEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendClickEventHandler = goog.require('org.pepstock.charba.client.events.LegendClickEventHandler$impl');

let LegendClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendClickEvent$impl');

/**
 * @implements {LegendClickEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(LegendClickEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(LegendClickEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_LegendClickEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_LegendClickEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_LegendClickEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_LegendClickEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_LegendClickEventHandler_$JsFunction(/** ?function(LegendClickEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_LegendClickEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_events_LegendClickEvent(/** LegendClickEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_LegendClickEventHandler_$LambdaAdaptor;
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
LegendClickEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.LegendClickEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=LegendClickEventHandler$$LambdaAdaptor.js.map
