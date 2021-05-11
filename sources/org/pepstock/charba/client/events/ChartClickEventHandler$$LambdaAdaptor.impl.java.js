goog.module('org.pepstock.charba.client.events.ChartClickEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ChartClickEventHandler = goog.require('org.pepstock.charba.client.events.ChartClickEventHandler$impl');

let ChartClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.ChartClickEvent$impl');

/**
 * @implements {ChartClickEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ChartClickEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ChartClickEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_ChartClickEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_ChartClickEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_ChartClickEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_ChartClickEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_ChartClickEventHandler_$JsFunction(/** ?function(ChartClickEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_ChartClickEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_events_ChartClickEvent(/** ChartClickEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_ChartClickEventHandler_$LambdaAdaptor;
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
ChartClickEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.ChartClickEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=ChartClickEventHandler$$LambdaAdaptor.js.map
