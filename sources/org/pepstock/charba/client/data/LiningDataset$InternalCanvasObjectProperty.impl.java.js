goog.module('org.pepstock.charba.client.data.LiningDataset.InternalCanvasObjectProperty$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CanvasObjectKey = goog.require('org.pepstock.charba.client.data.Dataset.CanvasObjectKey$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<InternalCanvasObjectProperty>}
 * @implements {CanvasObjectKey}
 */
class InternalCanvasObjectProperty extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty_;
  /**@type {boolean}*/
  this.f_hasPattern__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty_ = false;
 }
 /** @return {!InternalCanvasObjectProperty} */
 static $create__java_lang_String__int__java_lang_String__boolean(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** boolean */ hasPattern) {
  let $instance = new InternalCanvasObjectProperty();
  $instance.$ctor__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty__java_lang_String__int__java_lang_String__boolean($name, $ordinal, value, hasPattern);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty__java_lang_String__int__java_lang_String__boolean(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** boolean */ hasPattern) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty_ = value;
  this.f_hasPattern__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty_ = hasPattern;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty_;
 }
 /** @override @return {boolean} */
 m_hasPattern__() {
  return this.f_hasPattern__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty_;
 }
 /** @return {!InternalCanvasObjectProperty} */
 static m_valueOf__java_lang_String(/** string */ name) {
  InternalCanvasObjectProperty.$clinit();
  if ($Equality.$same(InternalCanvasObjectProperty.f_namesToValuesMap__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty_, null)) {
   InternalCanvasObjectProperty.f_namesToValuesMap__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty_ = $Enums.createMapFromValues(InternalCanvasObjectProperty.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, InternalCanvasObjectProperty.f_namesToValuesMap__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty_);
 }
 /** @return {!Array<!InternalCanvasObjectProperty>} */
 static m_values__() {
  InternalCanvasObjectProperty.$clinit();
  return /**@type {!Array<InternalCanvasObjectProperty>}*/ ($Arrays.$init([InternalCanvasObjectProperty.$static_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, InternalCanvasObjectProperty.$static_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, InternalCanvasObjectProperty.$static_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, InternalCanvasObjectProperty.$static_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty], InternalCanvasObjectProperty));
 }
 /** @return {!InternalCanvasObjectProperty} */
 static get f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty() {
  return (InternalCanvasObjectProperty.$clinit(), InternalCanvasObjectProperty.$static_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
 }
 /** @return {!InternalCanvasObjectProperty} */
 static get f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty() {
  return (InternalCanvasObjectProperty.$clinit(), InternalCanvasObjectProperty.$static_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
 }
 /** @return {!InternalCanvasObjectProperty} */
 static get f_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty() {
  return (InternalCanvasObjectProperty.$clinit(), InternalCanvasObjectProperty.$static_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
 }
 /** @return {!InternalCanvasObjectProperty} */
 static get f_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty() {
  return (InternalCanvasObjectProperty.$clinit(), InternalCanvasObjectProperty.$static_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
 }
 
 static $clinit() {
  InternalCanvasObjectProperty.$clinit = () =>{};
  InternalCanvasObjectProperty.$loadModules();
  Enum.$clinit();
  InternalCanvasObjectProperty.$static_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty = InternalCanvasObjectProperty.$create__java_lang_String__int__java_lang_String__boolean($Util.$makeEnumName("POINT_BACKGROUND_COLOR"), InternalCanvasObjectProperty.$ordinal_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, "pointBackgroundColor", true);
  InternalCanvasObjectProperty.$static_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty = InternalCanvasObjectProperty.$create__java_lang_String__int__java_lang_String__boolean($Util.$makeEnumName("POINT_BORDER_COLOR"), InternalCanvasObjectProperty.$ordinal_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, "pointBorderColor", false);
  InternalCanvasObjectProperty.$static_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty = InternalCanvasObjectProperty.$create__java_lang_String__int__java_lang_String__boolean($Util.$makeEnumName("POINT_HOVER_BACKGROUND_COLOR"), InternalCanvasObjectProperty.$ordinal_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, "pointHoverBackgroundColor", true);
  InternalCanvasObjectProperty.$static_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty = InternalCanvasObjectProperty.$create__java_lang_String__int__java_lang_String__boolean($Util.$makeEnumName("POINT_HOVER_BORDER_COLOR"), InternalCanvasObjectProperty.$ordinal_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, "pointHoverBorderColor", false);
  InternalCanvasObjectProperty.f_namesToValuesMap__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalCanvasObjectProperty;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!InternalCanvasObjectProperty}*/
InternalCanvasObjectProperty.$static_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty;
/**@private {!InternalCanvasObjectProperty}*/
InternalCanvasObjectProperty.$static_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty;
/**@private {!InternalCanvasObjectProperty}*/
InternalCanvasObjectProperty.$static_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty;
/**@private {!InternalCanvasObjectProperty}*/
InternalCanvasObjectProperty.$static_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty;
/**@type {Map<?string, !InternalCanvasObjectProperty>}*/
InternalCanvasObjectProperty.f_namesToValuesMap__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty_;
/**@const {number}*/
InternalCanvasObjectProperty.$ordinal_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty = 0;
/**@const {number}*/
InternalCanvasObjectProperty.$ordinal_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty = 1;
/**@const {number}*/
InternalCanvasObjectProperty.$ordinal_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty = 2;
/**@const {number}*/
InternalCanvasObjectProperty.$ordinal_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty = 3;
CanvasObjectKey.$markImplementor(InternalCanvasObjectProperty);
$Util.$setClassMetadataForEnum(InternalCanvasObjectProperty, "org.pepstock.charba.client.data.LiningDataset$InternalCanvasObjectProperty");

exports = InternalCanvasObjectProperty;

//# sourceMappingURL=LiningDataset$InternalCanvasObjectProperty.js.map
