goog.module('org.pepstock.charba.client.events.DatasetSelectionEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DatasetSelectionEventHandler = goog.require('org.pepstock.charba.client.events.DatasetSelectionEventHandler$impl');

let DatasetSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');

/**
 * @implements {DatasetSelectionEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DatasetSelectionEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DatasetSelectionEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_DatasetSelectionEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_DatasetSelectionEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_DatasetSelectionEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_DatasetSelectionEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_DatasetSelectionEventHandler_$JsFunction(/** ?function(DatasetSelectionEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_DatasetSelectionEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onSelect__org_pepstock_charba_client_events_DatasetSelectionEvent(/** DatasetSelectionEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_DatasetSelectionEventHandler_$LambdaAdaptor;
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
DatasetSelectionEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.DatasetSelectionEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=DatasetSelectionEventHandler$$LambdaAdaptor.js.map
