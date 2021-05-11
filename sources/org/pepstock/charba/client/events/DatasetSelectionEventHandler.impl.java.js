goog.module('org.pepstock.charba.client.events.DatasetSelectionEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartEventHandler = goog.require('org.pepstock.charba.client.events.ChartEventHandler$impl');

let DatasetSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetSelectionEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ChartEventHandler}
 */
class DatasetSelectionEventHandler {
 /** @abstract */
 m_onSelect__org_pepstock_charba_client_events_DatasetSelectionEvent(/** DatasetSelectionEvent */ event) {}
 /** @return {DatasetSelectionEventHandler} */
 static $adapt(/** ?function(DatasetSelectionEvent):void */ fn) {
  DatasetSelectionEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DatasetSelectionEventHandler.$clinit = () =>{};
  DatasetSelectionEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ChartEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_DatasetSelectionEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_DatasetSelectionEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.DatasetSelectionEventHandler.$LambdaAdaptor$impl');
 }
}
DatasetSelectionEventHandler.$markImplementor(/**@type {Function}*/ (DatasetSelectionEventHandler));
$Util.$setClassMetadataForInterface(DatasetSelectionEventHandler, "org.pepstock.charba.client.events.DatasetSelectionEventHandler");

exports = DatasetSelectionEventHandler;

//# sourceMappingURL=DatasetSelectionEventHandler.js.map
