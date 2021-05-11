goog.module('org.pepstock.charba.client.events.AxisClickEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AxisClickEventHandler = goog.require('org.pepstock.charba.client.events.AxisClickEventHandler$impl');

let AxisClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisClickEvent$impl');

/**
 * @implements {AxisClickEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(AxisClickEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(AxisClickEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_AxisClickEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_AxisClickEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_AxisClickEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_AxisClickEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_AxisClickEventHandler_$JsFunction(/** ?function(AxisClickEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_AxisClickEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_events_AxisClickEvent(/** AxisClickEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_AxisClickEventHandler_$LambdaAdaptor;
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
AxisClickEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.AxisClickEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=AxisClickEventHandler$$LambdaAdaptor.js.map
