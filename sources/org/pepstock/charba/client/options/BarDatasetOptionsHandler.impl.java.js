goog.module('org.pepstock.charba.client.options.BarDatasetOptionsHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyHandler = goog.require('org.pepstock.charba.client.commons.PropertyHandler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let DataEnvelop = goog.forwardDeclare('org.pepstock.charba.client.data.DataEnvelop$impl');
let IsDefaultTypedDataset = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTypedDataset$impl');
let DefaultTypedDataset = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTypedDataset$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.BarDatasetOptionsHandler.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PropertyHandler<IsDefaultTypedDataset>}
 */
class BarDatasetOptionsHandler extends PropertyHandler {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'BarDatasetOptionsHandler(AbstractNode, IsDefaultTypedDataset, DataEnvelop)'.
 /** @return {!BarDatasetOptionsHandler} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultTypedDataset__org_pepstock_charba_client_data_DataEnvelop(/** AbstractNode */ parent, /** IsDefaultTypedDataset */ defaultValues, /** DataEnvelop<?> */ envelop) {
  BarDatasetOptionsHandler.$clinit();
  let $instance = new BarDatasetOptionsHandler();
  $instance.$ctor__org_pepstock_charba_client_options_BarDatasetOptionsHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultTypedDataset__org_pepstock_charba_client_data_DataEnvelop(parent, defaultValues, envelop);
  return $instance;
 }
 //Initialization from constructor 'BarDatasetOptionsHandler(AbstractNode, IsDefaultTypedDataset, DataEnvelop)'.
 
 $ctor__org_pepstock_charba_client_options_BarDatasetOptionsHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultTypedDataset__org_pepstock_charba_client_data_DataEnvelop(/** AbstractNode */ parent, /** IsDefaultTypedDataset */ defaultValues, /** DataEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_options_BarDatasetOptionsHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultTypedDataset__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, /**@type {?}*/ (/**@type {DataEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), DataEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'BarDatasetOptionsHandler(AbstractNode, IsDefaultTypedDataset, NativeObject)'.
 /** @return {!BarDatasetOptionsHandler} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultTypedDataset__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsDefaultTypedDataset */ defaultValues, /** ? */ nativeObject) {
  BarDatasetOptionsHandler.$clinit();
  let $instance = new BarDatasetOptionsHandler();
  $instance.$ctor__org_pepstock_charba_client_options_BarDatasetOptionsHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultTypedDataset__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'BarDatasetOptionsHandler(AbstractNode, IsDefaultTypedDataset, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_options_BarDatasetOptionsHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultTypedDataset__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsDefaultTypedDataset */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_PropertyHandler__org_pepstock_charba_client_commons_AbstractNode__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
 }
 
 m_setBarPercentage__double_$pp_org_pepstock_charba_client_options(/** number */ barPercentage) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_BAR_PERCENTAGE__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property, this.m_checkAndGetPercentage__double__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property_$p_org_pepstock_charba_client_options_BarDatasetOptionsHandler(barPercentage, Property.f_BAR_PERCENTAGE__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property));
 }
 /** @return {number} */
 m_getBarPercentage___$pp_org_pepstock_charba_client_options() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_BAR_PERCENTAGE__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property, /**@type {IsDefaultTypedDataset}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTypedDataset)).m_getBarPercentage__());
 }
 
 m_setCategoryPercentage__double_$pp_org_pepstock_charba_client_options(/** number */ categoryPercentage) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_CATEGORY_PERCENTAGE__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property, this.m_checkAndGetPercentage__double__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property_$p_org_pepstock_charba_client_options_BarDatasetOptionsHandler(categoryPercentage, Property.f_CATEGORY_PERCENTAGE__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property));
 }
 /** @return {number} */
 m_getCategoryPercentage___$pp_org_pepstock_charba_client_options() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_CATEGORY_PERCENTAGE__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property, /**@type {IsDefaultTypedDataset}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTypedDataset)).m_getCategoryPercentage__());
 }
 
 m_setBarThickness__int_$pp_org_pepstock_charba_client_options(/** number */ barThickness) {
  if (DefaultTypedDataset.f_FLEX_BAR_THICKNESS__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset == barThickness) {
   this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BAR_THICKNESS__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property, DefaultTypedDataset.f_FLEX_BAR_THICKNESS_VALUE__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset);
  } else {
   this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_BAR_THICKNESS__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property, barThickness);
  }
 }
 /** @return {number} */
 m_getBarThickness___$pp_org_pepstock_charba_client_options() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_BAR_THICKNESS__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType)) {
   return DefaultTypedDataset.f_FLEX_BAR_THICKNESS__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset;
  }
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BAR_THICKNESS__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property, /**@type {IsDefaultTypedDataset}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTypedDataset)).m_getBarThickness__());
 }
 
 m_setMaxBarThickness__int_$pp_org_pepstock_charba_client_options(/** number */ maxBarThickness) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_MAX_BAR_THICKNESS__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property, maxBarThickness);
 }
 /** @return {number} */
 m_getMaxBarThickness___$pp_org_pepstock_charba_client_options() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_MAX_BAR_THICKNESS__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property, /**@type {IsDefaultTypedDataset}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTypedDataset)).m_getMaxBarThickness__());
 }
 
 m_setMinBarLength__int_$pp_org_pepstock_charba_client_options(/** number */ minBarLength) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_MIN_BAR_LENGTH__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property, minBarLength);
 }
 /** @return {number} */
 m_getMinBarLength___$pp_org_pepstock_charba_client_options() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_MIN_BAR_LENGTH__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property, /**@type {IsDefaultTypedDataset}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTypedDataset)).m_getMinBarLength__());
 }
 
 m_setGrouped__boolean_$pp_org_pepstock_charba_client_options(/** boolean */ grouped) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_GROUPED__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property, grouped);
 }
 /** @return {boolean} */
 m_isGrouped___$pp_org_pepstock_charba_client_options() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_GROUPED__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property, /**@type {IsDefaultTypedDataset}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTypedDataset)).m_isGrouped__());
 }
 /** @return {number} */
 m_checkAndGetPercentage__double__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property_$p_org_pepstock_charba_client_options_BarDatasetOptionsHandler(/** number */ percentage, /** Property */ property) {
  Checker.m_checkIfBetween__double__double__double__java_lang_String(percentage, BarDatasetOptionsHandler.f_MINIMUM_PERCENTAGE__org_pepstock_charba_client_options_BarDatasetOptionsHandler_, BarDatasetOptionsHandler.f_MAXIMUM_PERCENTAGE__org_pepstock_charba_client_options_BarDatasetOptionsHandler_, j_l_String.m_valueOf__java_lang_Object(property.f_value__org_pepstock_charba_client_options_BarDatasetOptionsHandler_Property_) + " argument");
  return percentage;
 }
 
 static $clinit() {
  BarDatasetOptionsHandler.$clinit = () =>{};
  BarDatasetOptionsHandler.$loadModules();
  PropertyHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BarDatasetOptionsHandler;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  DataEnvelop = goog.module.get('org.pepstock.charba.client.data.DataEnvelop$impl');
  IsDefaultTypedDataset = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultTypedDataset$impl');
  DefaultTypedDataset = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTypedDataset$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.BarDatasetOptionsHandler.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number}*/
BarDatasetOptionsHandler.f_MINIMUM_PERCENTAGE__org_pepstock_charba_client_options_BarDatasetOptionsHandler_ = 0;
/**@const {number}*/
BarDatasetOptionsHandler.f_MAXIMUM_PERCENTAGE__org_pepstock_charba_client_options_BarDatasetOptionsHandler_ = 1;
$Util.$setClassMetadata(BarDatasetOptionsHandler, "org.pepstock.charba.client.options.BarDatasetOptionsHandler");

exports = BarDatasetOptionsHandler;

//# sourceMappingURL=BarDatasetOptionsHandler.js.map
