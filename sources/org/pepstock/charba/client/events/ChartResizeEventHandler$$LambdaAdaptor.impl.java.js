goog.module('org.pepstock.charba.client.events.ChartResizeEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ChartResizeEventHandler = goog.require('org.pepstock.charba.client.events.ChartResizeEventHandler$impl');

let ChartResizeEvent = goog.forwardDeclare('org.pepstock.charba.client.events.ChartResizeEvent$impl');

/**
 * @implements {ChartResizeEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ChartResizeEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ChartResizeEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_ChartResizeEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_ChartResizeEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_ChartResizeEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_ChartResizeEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_ChartResizeEventHandler_$JsFunction(/** ?function(ChartResizeEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_ChartResizeEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onResize__org_pepstock_charba_client_events_ChartResizeEvent(/** ChartResizeEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_ChartResizeEventHandler_$LambdaAdaptor;
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
ChartResizeEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.ChartResizeEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=ChartResizeEventHandler$$LambdaAdaptor.js.map
