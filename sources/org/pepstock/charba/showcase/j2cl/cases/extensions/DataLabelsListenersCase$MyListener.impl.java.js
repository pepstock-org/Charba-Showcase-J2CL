goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsListenersCase.MyListener$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DataLabelsPointerHandler = goog.require('org.pepstock.charba.client.impl.callbacks.DataLabelsPointerHandler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DOMBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.DOMBuilder$impl');
let DatasetSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
let DatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElement$impl');
let DatasetReference = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetReference$impl');
let DataLabelsListenersCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsListenersCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class MyListener extends DataLabelsPointerHandler {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsListenersCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_MyListener;
 }
 /** @return {!MyListener} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase(/** DataLabelsListenersCase */ $outer_this) {
  MyListener.$clinit();
  let $instance = new MyListener();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_MyListener__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_MyListener__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase(/** DataLabelsListenersCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_MyListener = $outer_this;
  this.$ctor__org_pepstock_charba_client_impl_callbacks_DataLabelsPointerHandler__();
 }
 /** @override @return {boolean} */
 m_onLeave__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  super.m_onLeave__org_pepstock_charba_client_datalabels_DataLabelsContext(context);
  let ds = /**@type {LineDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_MyListener.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), LineDataset));
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_MyListener.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_.m_addLogEvent__java_lang_String("> LEAVE: Dataset index: " + context.m_getDatasetIndex__() + ", data index: " + context.m_getDataIndex__() + ", value(" + j_l_String.m_valueOf__java_lang_Object(ds.m_getData__().getAtIndex(context.m_getDataIndex__())) + ")");
  return true;
 }
 /** @override @return {boolean} */
 m_onEnter__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  super.m_onEnter__org_pepstock_charba_client_datalabels_DataLabelsContext(context);
  let ds = /**@type {LineDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_MyListener.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), LineDataset));
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_MyListener.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_.m_addLogEvent__java_lang_String("> ENTER: Dataset index: " + context.m_getDatasetIndex__() + ", data index: " + context.m_getDataIndex__() + ", value(" + j_l_String.m_valueOf__java_lang_Object(ds.m_getData__().getAtIndex(context.m_getDataIndex__())) + ")");
  return true;
 }
 /** @override @return {boolean} */
 m_onClick__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  super.m_onClick__org_pepstock_charba_client_datalabels_DataLabelsContext(context);
  let ds = /**@type {LineDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_MyListener.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), LineDataset));
  let item = this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_MyListener.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_.m_getDatasetItem__int(context.m_getDatasetIndex__());
  let element = /**@type {DatasetElement}*/ ($Casts.$to(item.m_getElements__().getAtIndex(context.m_getDataIndex__()), DatasetElement));
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_MyListener.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_.m_addLogEvent__java_lang_String("> CLICK: Dataset index: " + context.m_getDatasetIndex__() + ", data index: " + context.m_getDataIndex__() + ", value(" + j_l_String.m_valueOf__java_lang_Object(ds.m_getData__().getAtIndex(context.m_getDataIndex__())) + ")");
  let referenceItem = DatasetReference.$create__org_pepstock_charba_client_callbacks_AbstractDatasetContext__org_pepstock_charba_client_items_DatasetElement(context, element);
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_MyListener.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_.m_fireEvent__org_pepstock_charba_client_events_Event(DatasetSelectionEvent.$create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_DatasetReference(DOMBuilder.m_get__().m_createChangeEvent__(), this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_MyListener.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsListenersCase_, referenceItem));
  return true;
 }
 
 static $clinit() {
  MyListener.$clinit = () =>{};
  MyListener.$loadModules();
  DataLabelsPointerHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MyListener;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
  DatasetSelectionEvent = goog.module.get('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
  DatasetElement = goog.module.get('org.pepstock.charba.client.items.DatasetElement$impl');
  DatasetReference = goog.module.get('org.pepstock.charba.client.items.DatasetReference$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(MyListener, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsListenersCase$MyListener");

exports = MyListener;

//# sourceMappingURL=DataLabelsListenersCase$MyListener.js.map
