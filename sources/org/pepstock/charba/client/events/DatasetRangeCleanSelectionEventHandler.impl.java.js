goog.module('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let DatasetRangeCleanSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class DatasetRangeCleanSelectionEventHandler {
 /** @abstract */
 m_onClean__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEvent(/** DatasetRangeCleanSelectionEvent */ event) {}
 /** @return {DatasetRangeCleanSelectionEventHandler} */
 static $adapt(/** ?function(DatasetRangeCleanSelectionEvent):void */ fn) {
  DatasetRangeCleanSelectionEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DatasetRangeCleanSelectionEventHandler.$clinit = () =>{};
  DatasetRangeCleanSelectionEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEventHandler.$LambdaAdaptor$impl');
 }
}
DatasetRangeCleanSelectionEventHandler.$markImplementor(/**@type {Function}*/ (DatasetRangeCleanSelectionEventHandler));
$Util.$setClassMetadataForInterface(DatasetRangeCleanSelectionEventHandler, "org.pepstock.charba.client.events.DatasetRangeCleanSelectionEventHandler");

exports = DatasetRangeCleanSelectionEventHandler;

//# sourceMappingURL=DatasetRangeCleanSelectionEventHandler.js.map
