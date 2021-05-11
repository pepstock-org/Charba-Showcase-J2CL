goog.module('org.pepstock.charba.client.data.Dataset.CanvasObjectProperty$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CanvasObjectKey = goog.require('org.pepstock.charba.client.data.Dataset.CanvasObjectKey$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<CanvasObjectProperty>}
 * @implements {CanvasObjectKey}
 */
class CanvasObjectProperty extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty_;
  /**@type {boolean}*/
  this.f_hasPattern__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty_ = false;
 }
 /** @return {!CanvasObjectProperty} */
 static $create__java_lang_String__int__java_lang_String__boolean(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** boolean */ hasPattern) {
  let $instance = new CanvasObjectProperty();
  $instance.$ctor__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty__java_lang_String__int__java_lang_String__boolean($name, $ordinal, value, hasPattern);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty__java_lang_String__int__java_lang_String__boolean(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** boolean */ hasPattern) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty_ = value;
  this.f_hasPattern__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty_ = hasPattern;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty_;
 }
 /** @override @return {boolean} */
 m_hasPattern__() {
  return this.f_hasPattern__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty_;
 }
 /** @return {!CanvasObjectProperty} */
 static m_valueOf__java_lang_String(/** string */ name) {
  CanvasObjectProperty.$clinit();
  if ($Equality.$same(CanvasObjectProperty.f_namesToValuesMap__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty_, null)) {
   CanvasObjectProperty.f_namesToValuesMap__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty_ = $Enums.createMapFromValues(CanvasObjectProperty.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, CanvasObjectProperty.f_namesToValuesMap__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty_);
 }
 /** @return {!Array<!CanvasObjectProperty>} */
 static m_values__() {
  CanvasObjectProperty.$clinit();
  return /**@type {!Array<CanvasObjectProperty>}*/ ($Arrays.$init([CanvasObjectProperty.$static_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, CanvasObjectProperty.$static_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, CanvasObjectProperty.$static_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, CanvasObjectProperty.$static_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty], CanvasObjectProperty));
 }
 /** @return {!CanvasObjectProperty} */
 static get f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty() {
  return (CanvasObjectProperty.$clinit(), CanvasObjectProperty.$static_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 /** @return {!CanvasObjectProperty} */
 static get f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty() {
  return (CanvasObjectProperty.$clinit(), CanvasObjectProperty.$static_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 /** @return {!CanvasObjectProperty} */
 static get f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty() {
  return (CanvasObjectProperty.$clinit(), CanvasObjectProperty.$static_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 /** @return {!CanvasObjectProperty} */
 static get f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty() {
  return (CanvasObjectProperty.$clinit(), CanvasObjectProperty.$static_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 
 static $clinit() {
  CanvasObjectProperty.$clinit = () =>{};
  CanvasObjectProperty.$loadModules();
  Enum.$clinit();
  CanvasObjectProperty.$static_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty = CanvasObjectProperty.$create__java_lang_String__int__java_lang_String__boolean($Util.$makeEnumName("BACKGROUND_COLOR"), CanvasObjectProperty.$ordinal_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, "backgroundColor", true);
  CanvasObjectProperty.$static_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty = CanvasObjectProperty.$create__java_lang_String__int__java_lang_String__boolean($Util.$makeEnumName("BORDER_COLOR"), CanvasObjectProperty.$ordinal_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, "borderColor", false);
  CanvasObjectProperty.$static_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty = CanvasObjectProperty.$create__java_lang_String__int__java_lang_String__boolean($Util.$makeEnumName("HOVER_BACKGROUND_COLOR"), CanvasObjectProperty.$ordinal_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, "hoverBackgroundColor", true);
  CanvasObjectProperty.$static_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty = CanvasObjectProperty.$create__java_lang_String__int__java_lang_String__boolean($Util.$makeEnumName("HOVER_BORDER_COLOR"), CanvasObjectProperty.$ordinal_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, "hoverBorderColor", false);
  CanvasObjectProperty.f_namesToValuesMap__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CanvasObjectProperty;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!CanvasObjectProperty}*/
CanvasObjectProperty.$static_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty;
/**@private {!CanvasObjectProperty}*/
CanvasObjectProperty.$static_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty;
/**@private {!CanvasObjectProperty}*/
CanvasObjectProperty.$static_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty;
/**@private {!CanvasObjectProperty}*/
CanvasObjectProperty.$static_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty;
/**@type {Map<?string, !CanvasObjectProperty>}*/
CanvasObjectProperty.f_namesToValuesMap__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty_;
/**@const {number}*/
CanvasObjectProperty.$ordinal_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty = 0;
/**@const {number}*/
CanvasObjectProperty.$ordinal_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty = 1;
/**@const {number}*/
CanvasObjectProperty.$ordinal_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty = 2;
/**@const {number}*/
CanvasObjectProperty.$ordinal_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty = 3;
CanvasObjectKey.$markImplementor(CanvasObjectProperty);
$Util.$setClassMetadataForEnum(CanvasObjectProperty, "org.pepstock.charba.client.data.Dataset$CanvasObjectProperty");

exports = CanvasObjectProperty;

//# sourceMappingURL=Dataset$CanvasObjectProperty.js.map
