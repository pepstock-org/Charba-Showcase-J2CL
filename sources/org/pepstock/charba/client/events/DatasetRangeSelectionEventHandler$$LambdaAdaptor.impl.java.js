goog.module('org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DatasetRangeSelectionEventHandler = goog.require('org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler$impl');

let DatasetRangeSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');

/**
 * @implements {DatasetRangeSelectionEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DatasetRangeSelectionEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DatasetRangeSelectionEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_DatasetRangeSelectionEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_DatasetRangeSelectionEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_DatasetRangeSelectionEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_DatasetRangeSelectionEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_DatasetRangeSelectionEventHandler_$JsFunction(/** ?function(DatasetRangeSelectionEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_DatasetRangeSelectionEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onSelect__org_pepstock_charba_client_events_DatasetRangeSelectionEvent(/** DatasetRangeSelectionEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_DatasetRangeSelectionEventHandler_$LambdaAdaptor;
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
DatasetRangeSelectionEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=DatasetRangeSelectionEventHandler$$LambdaAdaptor.js.map
