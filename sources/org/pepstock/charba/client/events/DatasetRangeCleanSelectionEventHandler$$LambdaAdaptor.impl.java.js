goog.module('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DatasetRangeCleanSelectionEventHandler = goog.require('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEventHandler$impl');

let DatasetRangeCleanSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEvent$impl');

/**
 * @implements {DatasetRangeCleanSelectionEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DatasetRangeCleanSelectionEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DatasetRangeCleanSelectionEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEventHandler_$JsFunction(/** ?function(DatasetRangeCleanSelectionEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onClean__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEvent(/** DatasetRangeCleanSelectionEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEventHandler_$LambdaAdaptor;
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
DatasetRangeCleanSelectionEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.DatasetRangeCleanSelectionEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=DatasetRangeCleanSelectionEventHandler$$LambdaAdaptor.js.map
