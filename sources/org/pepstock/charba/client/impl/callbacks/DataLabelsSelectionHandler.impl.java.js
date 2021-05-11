goog.module('org.pepstock.charba.client.impl.callbacks.DataLabelsSelectionHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DataLabelsPointerHandler = goog.require('org.pepstock.charba.client.impl.callbacks.DataLabelsPointerHandler$impl');

let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DOMBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.DOMBuilder$impl');
let CursorType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.CursorType$impl');
let DatasetSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
let DatasetSelectionEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetSelectionEventHandler$impl');
let DatasetReference = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetReference$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DataLabelsSelectionHandler extends DataLabelsPointerHandler {
 /** @protected */
 constructor() {
  super();
  /**@type {List<DatasetSelectionEventHandler>}*/
  this.f_dataSelectionHandlers__org_pepstock_charba_client_impl_callbacks_DataLabelsSelectionHandler_;
 }
 //Factory method corresponding to constructor 'DataLabelsSelectionHandler()'.
 /** @return {!DataLabelsSelectionHandler} */
 static $create__() {
  DataLabelsSelectionHandler.$clinit();
  let $instance = new DataLabelsSelectionHandler();
  $instance.$ctor__org_pepstock_charba_client_impl_callbacks_DataLabelsSelectionHandler__();
  return $instance;
 }
 //Initialization from constructor 'DataLabelsSelectionHandler()'.
 
 $ctor__org_pepstock_charba_client_impl_callbacks_DataLabelsSelectionHandler__() {
  this.$ctor__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler__();
  this.$init___$p_org_pepstock_charba_client_impl_callbacks_DataLabelsSelectionHandler();
 }
 //Factory method corresponding to constructor 'DataLabelsSelectionHandler(CursorType)'.
 /** @return {!DataLabelsSelectionHandler} */
 static $create__org_pepstock_charba_client_dom_enums_CursorType(/** CursorType */ cursor) {
  DataLabelsSelectionHandler.$clinit();
  let $instance = new DataLabelsSelectionHandler();
  $instance.$ctor__org_pepstock_charba_client_impl_callbacks_DataLabelsSelectionHandler__org_pepstock_charba_client_dom_enums_CursorType(cursor);
  return $instance;
 }
 //Initialization from constructor 'DataLabelsSelectionHandler(CursorType)'.
 
 $ctor__org_pepstock_charba_client_impl_callbacks_DataLabelsSelectionHandler__org_pepstock_charba_client_dom_enums_CursorType(/** CursorType */ cursor) {
  this.$ctor__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler__org_pepstock_charba_client_dom_enums_CursorType(cursor);
  this.$init___$p_org_pepstock_charba_client_impl_callbacks_DataLabelsSelectionHandler();
 }
 
 m_addDatasetSelectionEventHandler__org_pepstock_charba_client_events_DatasetSelectionEventHandler(/** DatasetSelectionEventHandler */ handler) {
  if (!$Equality.$same(handler, null)) {
   this.f_dataSelectionHandlers__org_pepstock_charba_client_impl_callbacks_DataLabelsSelectionHandler_.add(handler);
  }
 }
 /** @return {boolean} */
 m_removeDatasetSelectionEventHandler__org_pepstock_charba_client_events_DatasetSelectionEventHandler(/** DatasetSelectionEventHandler */ handler) {
  if (!$Equality.$same(handler, null)) {
   return this.f_dataSelectionHandlers__org_pepstock_charba_client_impl_callbacks_DataLabelsSelectionHandler_.remove(handler);
  }
  return false;
 }
 /** @override @return {boolean} */
 m_onClick__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let chart = ScriptableUtils.m_retrieveChart__org_pepstock_charba_client_callbacks_ChartContext(context);
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && !this.f_dataSelectionHandlers__org_pepstock_charba_client_impl_callbacks_DataLabelsSelectionHandler_.isEmpty() && chart.m_isInitialized__()) {
   let element = context.m_getDatasetElement__();
   if (!$Equality.$same(element, null)) {
    let referenceElement = DatasetReference.$create__org_pepstock_charba_client_callbacks_AbstractDatasetContext__org_pepstock_charba_client_items_DatasetElement(context, element);
    let event = DatasetSelectionEvent.$create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_DatasetReference(DOMBuilder.m_get__().m_createChangeEvent__(), chart, referenceElement);
    for (let $iterator = this.f_dataSelectionHandlers__org_pepstock_charba_client_impl_callbacks_DataLabelsSelectionHandler_.m_iterator__(); $iterator.m_hasNext__(); ) {
     let handler = /**@type {DatasetSelectionEventHandler}*/ ($Casts.$to($iterator.m_next__(), DatasetSelectionEventHandler));
     {
      handler.m_onSelect__org_pepstock_charba_client_events_DatasetSelectionEvent(event);
     }
    }
   }
  }
  return true;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_callbacks_DataLabelsSelectionHandler() {
  this.f_dataSelectionHandlers__org_pepstock_charba_client_impl_callbacks_DataLabelsSelectionHandler_ = /**@type {!LinkedList<DatasetSelectionEventHandler>}*/ (LinkedList.$create__());
 }
 
 static $clinit() {
  DataLabelsSelectionHandler.$clinit = () =>{};
  DataLabelsSelectionHandler.$loadModules();
  DataLabelsPointerHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataLabelsSelectionHandler;
 }
 
 static $loadModules() {
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
  DatasetSelectionEvent = goog.module.get('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
  DatasetSelectionEventHandler = goog.module.get('org.pepstock.charba.client.events.DatasetSelectionEventHandler$impl');
  DatasetReference = goog.module.get('org.pepstock.charba.client.items.DatasetReference$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(DataLabelsSelectionHandler, "org.pepstock.charba.client.impl.callbacks.DataLabelsSelectionHandler");

exports = DataLabelsSelectionHandler;

//# sourceMappingURL=DataLabelsSelectionHandler.js.map
