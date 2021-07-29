goog.module('org.pepstock.charba.client.callbacks.AbstractDatasetContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartContext = goog.require('org.pepstock.charba.client.callbacks.ChartContext$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.callbacks.AbstractDatasetContext.Property$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let DatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElement$impl');
let DatasetItem = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let TransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.TransitionKey$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 */
class AbstractDatasetContext extends ChartContext {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_callbacks_AbstractDatasetContext__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {boolean} */
 m_isActive__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ACTIVE__org_pepstock_charba_client_callbacks_AbstractDatasetContext_Property, false);
 }
 /** @return {TransitionKey} */
 m_getMode__() {
  let mode = this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_MODE__org_pepstock_charba_client_callbacks_AbstractDatasetContext_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
  if (!$Equality.$same(mode, null)) {
   return TransitionKey.m_create__java_lang_String(mode);
  }
  return null;
 }
 /** @return {number} */
 m_getDatasetIndex__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_DATASET_INDEX__org_pepstock_charba_client_callbacks_AbstractDatasetContext_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getDataIndex__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_DATA_INDEX__org_pepstock_charba_client_callbacks_AbstractDatasetContext_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {DatasetItem} */
 m_getDatasetItem__() {
  let chart = this.m_getChart__();
  if (this.m_isConsistent__() && IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return chart.m_getDatasetItem__int(this.m_getDatasetIndex__());
  }
  return null;
 }
 /** @return {DatasetElement} */
 m_getDatasetElement__() {
  let datasetItem = this.m_getDatasetItem__();
  if (!$Equality.$same(datasetItem, null)) {
   let dataIndex = this.m_getDataIndex__();
   let elements = datasetItem.m_getElements__();
   if (!elements.isEmpty() && dataIndex >= 0 && dataIndex < elements.size()) {
    return /**@type {DatasetElement}*/ ($Casts.$to(elements.getAtIndex(dataIndex), DatasetElement));
   }
  }
  return null;
 }
 /** @override @return {boolean} */
 m_checkIfPropertyIsValid__org_pepstock_charba_client_commons_Key(/** Key */ property) {
  if (super.m_checkIfPropertyIsValid__org_pepstock_charba_client_commons_Key(property)) {
   return !Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(Property.m_values__(), property.m_value__());
  }
  return false;
 }
 
 static $clinit() {
  AbstractDatasetContext.$clinit = () =>{};
  AbstractDatasetContext.$loadModules();
  ChartContext.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractDatasetContext;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Property = goog.module.get('org.pepstock.charba.client.callbacks.AbstractDatasetContext.Property$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  DatasetElement = goog.module.get('org.pepstock.charba.client.items.DatasetElement$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  TransitionKey = goog.module.get('org.pepstock.charba.client.options.TransitionKey$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AbstractDatasetContext, "org.pepstock.charba.client.callbacks.AbstractDatasetContext");

exports = AbstractDatasetContext;

//# sourceMappingURL=AbstractDatasetContext.js.map