goog.module('org.pepstock.charba.client.data.Dataset.CommonProperty$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<CommonProperty>}
 * @implements {Key}
 */
class CommonProperty extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_data_Dataset_CommonProperty_;
 }
 /** @return {!CommonProperty} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new CommonProperty();
  $instance.$ctor__org_pepstock_charba_client_data_Dataset_CommonProperty__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_Dataset_CommonProperty__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_data_Dataset_CommonProperty_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_data_Dataset_CommonProperty_;
 }
 /** @return {!CommonProperty} */
 static m_valueOf__java_lang_String(/** string */ name) {
  CommonProperty.$clinit();
  if ($Equality.$same(CommonProperty.f_namesToValuesMap__org_pepstock_charba_client_data_Dataset_CommonProperty_, null)) {
   CommonProperty.f_namesToValuesMap__org_pepstock_charba_client_data_Dataset_CommonProperty_ = $Enums.createMapFromValues(CommonProperty.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, CommonProperty.f_namesToValuesMap__org_pepstock_charba_client_data_Dataset_CommonProperty_);
 }
 /** @return {!Array<!CommonProperty>} */
 static m_values__() {
  CommonProperty.$clinit();
  return /**@type {!Array<CommonProperty>}*/ ($Arrays.$init([CommonProperty.$static_CLIP__org_pepstock_charba_client_data_Dataset_CommonProperty, CommonProperty.$static_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, CommonProperty.$static_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty], CommonProperty));
 }
 /** @return {!CommonProperty} */
 static get f_CLIP__org_pepstock_charba_client_data_Dataset_CommonProperty() {
  return (CommonProperty.$clinit(), CommonProperty.$static_CLIP__org_pepstock_charba_client_data_Dataset_CommonProperty);
 }
 /** @return {!CommonProperty} */
 static get f_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty() {
  return (CommonProperty.$clinit(), CommonProperty.$static_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty);
 }
 /** @return {!CommonProperty} */
 static get f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty() {
  return (CommonProperty.$clinit(), CommonProperty.$static_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty);
 }
 
 static $clinit() {
  CommonProperty.$clinit = () =>{};
  CommonProperty.$loadModules();
  Enum.$clinit();
  CommonProperty.$static_CLIP__org_pepstock_charba_client_data_Dataset_CommonProperty = CommonProperty.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CLIP"), CommonProperty.$ordinal_CLIP__org_pepstock_charba_client_data_Dataset_CommonProperty, "clip");
  CommonProperty.$static_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty = CommonProperty.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_WIDTH"), CommonProperty.$ordinal_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, "borderWidth");
  CommonProperty.$static_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty = CommonProperty.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HOVER_BORDER_WIDTH"), CommonProperty.$ordinal_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, "hoverBorderWidth");
  CommonProperty.f_namesToValuesMap__org_pepstock_charba_client_data_Dataset_CommonProperty_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CommonProperty;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!CommonProperty}*/
CommonProperty.$static_CLIP__org_pepstock_charba_client_data_Dataset_CommonProperty;
/**@private {!CommonProperty}*/
CommonProperty.$static_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty;
/**@private {!CommonProperty}*/
CommonProperty.$static_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty;
/**@type {Map<?string, !CommonProperty>}*/
CommonProperty.f_namesToValuesMap__org_pepstock_charba_client_data_Dataset_CommonProperty_;
/**@const {number}*/
CommonProperty.$ordinal_CLIP__org_pepstock_charba_client_data_Dataset_CommonProperty = 0;
/**@const {number}*/
CommonProperty.$ordinal_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty = 1;
/**@const {number}*/
CommonProperty.$ordinal_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty = 2;
Key.$markImplementor(CommonProperty);
$Util.$setClassMetadataForEnum(CommonProperty, "org.pepstock.charba.client.data.Dataset$CommonProperty");

exports = CommonProperty;

//# sourceMappingURL=Dataset$CommonProperty.js.map
