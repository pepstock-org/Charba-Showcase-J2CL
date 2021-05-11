goog.module('org.pepstock.charba.client.datalabels.events.EnterEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EnterEventHandler = goog.require('org.pepstock.charba.client.datalabels.events.EnterEventHandler$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');

/**
 * @implements {EnterEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DataLabelsContext):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DataLabelsContext):boolean}*/
  this.f_fn__org_pepstock_charba_client_datalabels_events_EnterEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_datalabels_events_EnterEventHandler_$LambdaAdaptor__org_pepstock_charba_client_datalabels_events_EnterEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_datalabels_events_EnterEventHandler_$LambdaAdaptor__org_pepstock_charba_client_datalabels_events_EnterEventHandler_$JsFunction(/** ?function(DataLabelsContext):boolean */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_datalabels_events_EnterEventHandler_$LambdaAdaptor = fn;
 }
 /** @override @return {boolean} */
 m_onEnter__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ arg0) {
  let /** ?function(DataLabelsContext):boolean */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_datalabels_events_EnterEventHandler_$LambdaAdaptor, $function(arg0));
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
EnterEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.datalabels.events.EnterEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=EnterEventHandler$$LambdaAdaptor.js.map
