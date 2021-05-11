goog.module('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDatasetContext = goog.require('org.pepstock.charba.client.callbacks.AbstractDatasetContext$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext.Property$impl');
let LabelItem = goog.forwardDeclare('org.pepstock.charba.client.datalabels.LabelItem$impl');
let ContextType = goog.forwardDeclare('org.pepstock.charba.client.enums.ContextType$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class DataLabelsContext extends AbstractDatasetContext {
 /** @protected */
 constructor() {
  super();
  /**@type {LabelItem}*/
  this.f_label__org_pepstock_charba_client_datalabels_DataLabelsContext_;
 }
 /** @return {!DataLabelsContext} */
 static $create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(/** LabelItem */ label, /** ? */ nativeObject) {
  DataLabelsContext.$clinit();
  let $instance = new DataLabelsContext();
  $instance.$ctor__org_pepstock_charba_client_datalabels_DataLabelsContext__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(label, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_DataLabelsContext__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(/** LabelItem */ label, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_callbacks_AbstractDatasetContext__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_label__org_pepstock_charba_client_datalabels_DataLabelsContext_ = /**@type {LabelItem}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(label, "Label argument"), LabelItem));
  if (!this.m_has__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_datalabels_DataLabelsContext_Property)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_datalabels_DataLabelsContext_Property, ContextType.f_DATALABELS__org_pepstock_charba_client_enums_ContextType);
  }
 }
 /** @return {LabelItem} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_client_datalabels_DataLabelsContext_;
 }
 /** @override @return {boolean} */
 m_isConsistent__() {
  return $Objects.m_equals__java_lang_Object__java_lang_Object(ContextType.f_DATALABELS__org_pepstock_charba_client_enums_ContextType, this.m_getType__()) && Undefined.m_isNot__int(this.m_getDatasetIndex__()) && Undefined.m_isNot__int(this.m_getDataIndex__());
 }
 
 static $clinit() {
  DataLabelsContext.$clinit = () =>{};
  DataLabelsContext.$loadModules();
  AbstractDatasetContext.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataLabelsContext;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Property = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext.Property$impl');
  LabelItem = goog.module.get('org.pepstock.charba.client.datalabels.LabelItem$impl');
  ContextType = goog.module.get('org.pepstock.charba.client.enums.ContextType$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(DataLabelsContext, "org.pepstock.charba.client.datalabels.DataLabelsContext");

exports = DataLabelsContext;

//# sourceMappingURL=DataLabelsContext.js.map
