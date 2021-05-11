goog.module('org.pepstock.charba.client.impl.callbacks.DataLabelsPointerHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEventHandler = goog.require('org.pepstock.charba.client.datalabels.events.AbstractEventHandler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
let CursorType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.CursorType$impl');

class DataLabelsPointerHandler extends AbstractEventHandler {
 /** @protected */
 constructor() {
  super();
  /**@type {CursorType}*/
  this.f_cursor__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler_;
 }
 //Factory method corresponding to constructor 'DataLabelsPointerHandler()'.
 /** @return {!DataLabelsPointerHandler} */
 static $create__() {
  DataLabelsPointerHandler.$clinit();
  let $instance = new DataLabelsPointerHandler();
  $instance.$ctor__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler__();
  return $instance;
 }
 //Initialization from constructor 'DataLabelsPointerHandler()'.
 
 $ctor__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler__() {
  this.$ctor__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler__org_pepstock_charba_client_dom_enums_CursorType(DataLabelsPointerHandler.$static_DEFAULT_CURSOR__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler);
 }
 //Factory method corresponding to constructor 'DataLabelsPointerHandler(CursorType)'.
 /** @return {!DataLabelsPointerHandler} */
 static $create__org_pepstock_charba_client_dom_enums_CursorType(/** CursorType */ cursor) {
  DataLabelsPointerHandler.$clinit();
  let $instance = new DataLabelsPointerHandler();
  $instance.$ctor__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler__org_pepstock_charba_client_dom_enums_CursorType(cursor);
  return $instance;
 }
 //Initialization from constructor 'DataLabelsPointerHandler(CursorType)'.
 
 $ctor__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler__org_pepstock_charba_client_dom_enums_CursorType(/** CursorType */ cursor) {
  this.$ctor__org_pepstock_charba_client_datalabels_events_AbstractEventHandler__();
  this.f_cursor__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler_ = !$Equality.$same(cursor, null) ? cursor : DataLabelsPointerHandler.$static_DEFAULT_CURSOR__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler;
 }
 /** @return {CursorType} */
 m_getCursor__() {
  return this.f_cursor__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler_;
 }
 /** @override @return {boolean} */
 m_onLeave__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let chart = ScriptableUtils.m_retrieveChart__org_pepstock_charba_client_callbacks_ChartContext(context);
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) && chart.m_isInitialized__()) {
   $Overlay.m_setCursorType__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_CursorType(chart.m_getCanvas__().style, chart.m_getInitialCursor__());
  }
  return true;
 }
 /** @override @return {boolean} */
 m_onEnter__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let chart = ScriptableUtils.m_retrieveChart__org_pepstock_charba_client_callbacks_ChartContext(context);
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) && chart.m_isInitialized__()) {
   $Overlay.m_setCursorType__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_CursorType(chart.m_getCanvas__().style, this.f_cursor__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler_);
  }
  return true;
 }
 /** @return {CursorType} */
 static get f_DEFAULT_CURSOR__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler() {
  return (DataLabelsPointerHandler.$clinit(), DataLabelsPointerHandler.$static_DEFAULT_CURSOR__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler);
 }
 
 static $clinit() {
  DataLabelsPointerHandler.$clinit = () =>{};
  DataLabelsPointerHandler.$loadModules();
  AbstractEventHandler.$clinit();
  DataLabelsPointerHandler.$static_DEFAULT_CURSOR__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler = CursorType.f_POINTER__org_pepstock_charba_client_dom_enums_CursorType;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataLabelsPointerHandler;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
  CursorType = goog.module.get('org.pepstock.charba.client.dom.enums.CursorType$impl');
 }
}
/**@private {CursorType}*/
DataLabelsPointerHandler.$static_DEFAULT_CURSOR__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler;
$Util.$setClassMetadata(DataLabelsPointerHandler, "org.pepstock.charba.client.impl.callbacks.DataLabelsPointerHandler");

exports = DataLabelsPointerHandler;

//# sourceMappingURL=DataLabelsPointerHandler.js.map
