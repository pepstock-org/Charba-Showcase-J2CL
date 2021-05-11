goog.module('org.pepstock.charba.client.data.Dataset.InternalProperty$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<InternalProperty>}
 * @implements {Key}
 */
class InternalProperty extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_data_Dataset_InternalProperty_;
 }
 /** @return {!InternalProperty} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new InternalProperty();
  $instance.$ctor__org_pepstock_charba_client_data_Dataset_InternalProperty__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_Dataset_InternalProperty__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_data_Dataset_InternalProperty_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_data_Dataset_InternalProperty_;
 }
 /** @return {!InternalProperty} */
 static m_valueOf__java_lang_String(/** string */ name) {
  InternalProperty.$clinit();
  if ($Equality.$same(InternalProperty.f_namesToValuesMap__org_pepstock_charba_client_data_Dataset_InternalProperty_, null)) {
   InternalProperty.f_namesToValuesMap__org_pepstock_charba_client_data_Dataset_InternalProperty_ = $Enums.createMapFromValues(InternalProperty.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, InternalProperty.f_namesToValuesMap__org_pepstock_charba_client_data_Dataset_InternalProperty_);
 }
 /** @return {!Array<!InternalProperty>} */
 static m_values__() {
  InternalProperty.$clinit();
  return /**@type {!Array<InternalProperty>}*/ ($Arrays.$init([InternalProperty.$static_ANIMATION__org_pepstock_charba_client_data_Dataset_InternalProperty, InternalProperty.$static_LABEL__org_pepstock_charba_client_data_Dataset_InternalProperty, InternalProperty.$static_DATA__org_pepstock_charba_client_data_Dataset_InternalProperty, InternalProperty.$static_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, InternalProperty.$static_HIDDEN__org_pepstock_charba_client_data_Dataset_InternalProperty, InternalProperty.$static_CHARBA_ID__org_pepstock_charba_client_data_Dataset_InternalProperty, InternalProperty.$static_CHARBA_PATTERNS__org_pepstock_charba_client_data_Dataset_InternalProperty, InternalProperty.$static_CHARBA_GRADIENTS__org_pepstock_charba_client_data_Dataset_InternalProperty, InternalProperty.$static_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty], InternalProperty));
 }
 /** @return {!InternalProperty} */
 static get f_ANIMATION__org_pepstock_charba_client_data_Dataset_InternalProperty() {
  return (InternalProperty.$clinit(), InternalProperty.$static_ANIMATION__org_pepstock_charba_client_data_Dataset_InternalProperty);
 }
 /** @return {!InternalProperty} */
 static get f_LABEL__org_pepstock_charba_client_data_Dataset_InternalProperty() {
  return (InternalProperty.$clinit(), InternalProperty.$static_LABEL__org_pepstock_charba_client_data_Dataset_InternalProperty);
 }
 /** @return {!InternalProperty} */
 static get f_DATA__org_pepstock_charba_client_data_Dataset_InternalProperty() {
  return (InternalProperty.$clinit(), InternalProperty.$static_DATA__org_pepstock_charba_client_data_Dataset_InternalProperty);
 }
 /** @return {!InternalProperty} */
 static get f_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty() {
  return (InternalProperty.$clinit(), InternalProperty.$static_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty);
 }
 /** @return {!InternalProperty} */
 static get f_HIDDEN__org_pepstock_charba_client_data_Dataset_InternalProperty() {
  return (InternalProperty.$clinit(), InternalProperty.$static_HIDDEN__org_pepstock_charba_client_data_Dataset_InternalProperty);
 }
 /** @return {!InternalProperty} */
 static get f_CHARBA_ID__org_pepstock_charba_client_data_Dataset_InternalProperty() {
  return (InternalProperty.$clinit(), InternalProperty.$static_CHARBA_ID__org_pepstock_charba_client_data_Dataset_InternalProperty);
 }
 /** @return {!InternalProperty} */
 static get f_CHARBA_PATTERNS__org_pepstock_charba_client_data_Dataset_InternalProperty() {
  return (InternalProperty.$clinit(), InternalProperty.$static_CHARBA_PATTERNS__org_pepstock_charba_client_data_Dataset_InternalProperty);
 }
 /** @return {!InternalProperty} */
 static get f_CHARBA_GRADIENTS__org_pepstock_charba_client_data_Dataset_InternalProperty() {
  return (InternalProperty.$clinit(), InternalProperty.$static_CHARBA_GRADIENTS__org_pepstock_charba_client_data_Dataset_InternalProperty);
 }
 /** @return {!InternalProperty} */
 static get f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty() {
  return (InternalProperty.$clinit(), InternalProperty.$static_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty);
 }
 
 static $clinit() {
  InternalProperty.$clinit = () =>{};
  InternalProperty.$loadModules();
  Enum.$clinit();
  InternalProperty.$static_ANIMATION__org_pepstock_charba_client_data_Dataset_InternalProperty = InternalProperty.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ANIMATION"), InternalProperty.$ordinal_ANIMATION__org_pepstock_charba_client_data_Dataset_InternalProperty, "animation");
  InternalProperty.$static_LABEL__org_pepstock_charba_client_data_Dataset_InternalProperty = InternalProperty.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABEL"), InternalProperty.$ordinal_LABEL__org_pepstock_charba_client_data_Dataset_InternalProperty, "label");
  InternalProperty.$static_DATA__org_pepstock_charba_client_data_Dataset_InternalProperty = InternalProperty.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATA"), InternalProperty.$ordinal_DATA__org_pepstock_charba_client_data_Dataset_InternalProperty, "data");
  InternalProperty.$static_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty = InternalProperty.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TYPE"), InternalProperty.$ordinal_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, "type");
  InternalProperty.$static_HIDDEN__org_pepstock_charba_client_data_Dataset_InternalProperty = InternalProperty.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HIDDEN"), InternalProperty.$ordinal_HIDDEN__org_pepstock_charba_client_data_Dataset_InternalProperty, "hidden");
  InternalProperty.$static_CHARBA_ID__org_pepstock_charba_client_data_Dataset_InternalProperty = InternalProperty.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARBA_ID"), InternalProperty.$ordinal_CHARBA_ID__org_pepstock_charba_client_data_Dataset_InternalProperty, "charbaId");
  InternalProperty.$static_CHARBA_PATTERNS__org_pepstock_charba_client_data_Dataset_InternalProperty = InternalProperty.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARBA_PATTERNS"), InternalProperty.$ordinal_CHARBA_PATTERNS__org_pepstock_charba_client_data_Dataset_InternalProperty, "charbaPatterns");
  InternalProperty.$static_CHARBA_GRADIENTS__org_pepstock_charba_client_data_Dataset_InternalProperty = InternalProperty.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARBA_GRADIENTS"), InternalProperty.$ordinal_CHARBA_GRADIENTS__org_pepstock_charba_client_data_Dataset_InternalProperty, "charbaGradients");
  InternalProperty.$static_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty = InternalProperty.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARBA_DATA_TYPE"), InternalProperty.$ordinal_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, "charbaDataType");
  InternalProperty.f_namesToValuesMap__org_pepstock_charba_client_data_Dataset_InternalProperty_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalProperty;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!InternalProperty}*/
InternalProperty.$static_ANIMATION__org_pepstock_charba_client_data_Dataset_InternalProperty;
/**@private {!InternalProperty}*/
InternalProperty.$static_LABEL__org_pepstock_charba_client_data_Dataset_InternalProperty;
/**@private {!InternalProperty}*/
InternalProperty.$static_DATA__org_pepstock_charba_client_data_Dataset_InternalProperty;
/**@private {!InternalProperty}*/
InternalProperty.$static_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty;
/**@private {!InternalProperty}*/
InternalProperty.$static_HIDDEN__org_pepstock_charba_client_data_Dataset_InternalProperty;
/**@private {!InternalProperty}*/
InternalProperty.$static_CHARBA_ID__org_pepstock_charba_client_data_Dataset_InternalProperty;
/**@private {!InternalProperty}*/
InternalProperty.$static_CHARBA_PATTERNS__org_pepstock_charba_client_data_Dataset_InternalProperty;
/**@private {!InternalProperty}*/
InternalProperty.$static_CHARBA_GRADIENTS__org_pepstock_charba_client_data_Dataset_InternalProperty;
/**@private {!InternalProperty}*/
InternalProperty.$static_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty;
/**@type {Map<?string, !InternalProperty>}*/
InternalProperty.f_namesToValuesMap__org_pepstock_charba_client_data_Dataset_InternalProperty_;
/**@const {number}*/
InternalProperty.$ordinal_ANIMATION__org_pepstock_charba_client_data_Dataset_InternalProperty = 0;
/**@const {number}*/
InternalProperty.$ordinal_LABEL__org_pepstock_charba_client_data_Dataset_InternalProperty = 1;
/**@const {number}*/
InternalProperty.$ordinal_DATA__org_pepstock_charba_client_data_Dataset_InternalProperty = 2;
/**@const {number}*/
InternalProperty.$ordinal_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty = 3;
/**@const {number}*/
InternalProperty.$ordinal_HIDDEN__org_pepstock_charba_client_data_Dataset_InternalProperty = 4;
/**@const {number}*/
InternalProperty.$ordinal_CHARBA_ID__org_pepstock_charba_client_data_Dataset_InternalProperty = 5;
/**@const {number}*/
InternalProperty.$ordinal_CHARBA_PATTERNS__org_pepstock_charba_client_data_Dataset_InternalProperty = 6;
/**@const {number}*/
InternalProperty.$ordinal_CHARBA_GRADIENTS__org_pepstock_charba_client_data_Dataset_InternalProperty = 7;
/**@const {number}*/
InternalProperty.$ordinal_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty = 8;
Key.$markImplementor(InternalProperty);
$Util.$setClassMetadataForEnum(InternalProperty, "org.pepstock.charba.client.data.Dataset$InternalProperty");

exports = InternalProperty;

//# sourceMappingURL=Dataset$InternalProperty.js.map
