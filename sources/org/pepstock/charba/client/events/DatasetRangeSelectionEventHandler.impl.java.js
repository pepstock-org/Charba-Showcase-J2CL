goog.module('org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let DatasetRangeSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class DatasetRangeSelectionEventHandler {
 /** @abstract */
 m_onSelect__org_pepstock_charba_client_events_DatasetRangeSelectionEvent(/** DatasetRangeSelectionEvent */ event) {}
 /** @return {DatasetRangeSelectionEventHandler} */
 static $adapt(/** ?function(DatasetRangeSelectionEvent):void */ fn) {
  DatasetRangeSelectionEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DatasetRangeSelectionEventHandler.$clinit = () =>{};
  DatasetRangeSelectionEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_DatasetRangeSelectionEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_DatasetRangeSelectionEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler.$LambdaAdaptor$impl');
 }
}
DatasetRangeSelectionEventHandler.$markImplementor(/**@type {Function}*/ (DatasetRangeSelectionEventHandler));
$Util.$setClassMetadataForInterface(DatasetRangeSelectionEventHandler, "org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler");

exports = DatasetRangeSelectionEventHandler;

//# sourceMappingURL=DatasetRangeSelectionEventHandler.js.map
