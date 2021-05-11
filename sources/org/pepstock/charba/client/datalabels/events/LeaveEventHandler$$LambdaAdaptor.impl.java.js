goog.module('org.pepstock.charba.client.datalabels.events.LeaveEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LeaveEventHandler = goog.require('org.pepstock.charba.client.datalabels.events.LeaveEventHandler$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');

/**
 * @implements {LeaveEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DataLabelsContext):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DataLabelsContext):boolean}*/
  this.f_fn__org_pepstock_charba_client_datalabels_events_LeaveEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_datalabels_events_LeaveEventHandler_$LambdaAdaptor__org_pepstock_charba_client_datalabels_events_LeaveEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_datalabels_events_LeaveEventHandler_$LambdaAdaptor__org_pepstock_charba_client_datalabels_events_LeaveEventHandler_$JsFunction(/** ?function(DataLabelsContext):boolean */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_datalabels_events_LeaveEventHandler_$LambdaAdaptor = fn;
 }
 /** @override @return {boolean} */
 m_onLeave__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ arg0) {
  let /** ?function(DataLabelsContext):boolean */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_datalabels_events_LeaveEventHandler_$LambdaAdaptor, $function(arg0));
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
LeaveEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.datalabels.events.LeaveEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=LeaveEventHandler$$LambdaAdaptor.js.map
