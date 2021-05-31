goog.module('org.pepstock.charba.client.labels.LabelsContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDatasetContext = goog.require('org.pepstock.charba.client.callbacks.AbstractDatasetContext$impl');

let ArrayDouble_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let ContextType = goog.forwardDeclare('org.pepstock.charba.client.enums.ContextType$impl');
let DataItem = goog.forwardDeclare('org.pepstock.charba.client.items.DataItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Label = goog.forwardDeclare('org.pepstock.charba.client.labels.Label$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsContext.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class LabelsContext extends AbstractDatasetContext {
 /** @protected */
 constructor() {
  super();
  /**@type {DataItem}*/
  this.f_dataItem__org_pepstock_charba_client_labels_LabelsContext_;
  /**@type {Label}*/
  this.f_labelOptions__org_pepstock_charba_client_labels_LabelsContext_;
 }
 /** @return {!LabelsContext} */
 static $create__org_pepstock_charba_client_labels_Label__org_pepstock_charba_client_commons_NativeObject(/** Label */ labelOptions, /** ? */ nativeObject) {
  LabelsContext.$clinit();
  let $instance = new LabelsContext();
  $instance.$ctor__org_pepstock_charba_client_labels_LabelsContext__org_pepstock_charba_client_labels_Label__org_pepstock_charba_client_commons_NativeObject(labelOptions, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_labels_LabelsContext__org_pepstock_charba_client_labels_Label__org_pepstock_charba_client_commons_NativeObject(/** Label */ labelOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_callbacks_AbstractDatasetContext__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_labelOptions__org_pepstock_charba_client_labels_LabelsContext_ = /**@type {Label}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(labelOptions, "Label options argument"), Label));
  let type = this.m_type__org_pepstock_charba_client_commons_Key(Property.f_VALUE__org_pepstock_charba_client_labels_LabelsContext_Property);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType, type)) {
   this.f_dataItem__org_pepstock_charba_client_labels_LabelsContext_ = DataItem.$create__java_lang_Object(this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_VALUE__org_pepstock_charba_client_labels_LabelsContext_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined));
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, type)) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_VALUE__org_pepstock_charba_client_labels_LabelsContext_Property), ArrayDouble_$Overlay));
   this.f_dataItem__org_pepstock_charba_client_labels_LabelsContext_ = DataItem.$create__java_lang_Object(array);
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType, type)) {
   this.f_dataItem__org_pepstock_charba_client_labels_LabelsContext_ = DataItem.$create__java_lang_Object(this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_VALUE__org_pepstock_charba_client_labels_LabelsContext_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined));
  } else {
   this.f_dataItem__org_pepstock_charba_client_labels_LabelsContext_ = DataItem.$create__java_lang_Object(Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
  }
 }
 /** @return {Label} */
 m_getLabelOptions__() {
  return this.f_labelOptions__org_pepstock_charba_client_labels_LabelsContext_;
 }
 /** @return {?string} */
 m_getLabel__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_LABEL__org_pepstock_charba_client_labels_LabelsContext_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getPercentage__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_PERCENTAGE__org_pepstock_charba_client_labels_LabelsContext_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {DataItem} */
 m_getDataItem__() {
  return this.f_dataItem__org_pepstock_charba_client_labels_LabelsContext_;
 }
 /** @override @return {boolean} */
 m_isConsistent__() {
  let indexed = Undefined.m_isNot__int(this.m_getDatasetIndex__()) && Undefined.m_isNot__int(this.m_getDataIndex__());
  return indexed && $Objects.m_equals__java_lang_Object__java_lang_Object(ContextType.f_LABELS__org_pepstock_charba_client_enums_ContextType, this.m_getType__()) && this.m_has__org_pepstock_charba_client_commons_Key(Property.f_LABEL__org_pepstock_charba_client_labels_LabelsContext_Property) && this.m_has__org_pepstock_charba_client_commons_Key(Property.f_PERCENTAGE__org_pepstock_charba_client_labels_LabelsContext_Property);
 }
 /** @override @return {boolean} */
 m_checkIfPropertyIsValid__org_pepstock_charba_client_commons_Key(/** Key */ property) {
  if (super.m_checkIfPropertyIsValid__org_pepstock_charba_client_commons_Key(property)) {
   return !Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(Property.m_values__(), property.m_value__());
  }
  return false;
 }
 
 static $clinit() {
  LabelsContext.$clinit = () =>{};
  LabelsContext.$loadModules();
  AbstractDatasetContext.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LabelsContext;
 }
 
 static $loadModules() {
  ArrayDouble_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  ContextType = goog.module.get('org.pepstock.charba.client.enums.ContextType$impl');
  DataItem = goog.module.get('org.pepstock.charba.client.items.DataItem$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Label = goog.module.get('org.pepstock.charba.client.labels.Label$impl');
  Property = goog.module.get('org.pepstock.charba.client.labels.LabelsContext.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(LabelsContext, "org.pepstock.charba.client.labels.LabelsContext");

exports = LabelsContext;

//# sourceMappingURL=LabelsContext.js.map
