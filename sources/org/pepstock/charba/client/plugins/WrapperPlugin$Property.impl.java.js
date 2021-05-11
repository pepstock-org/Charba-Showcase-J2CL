goog.module('org.pepstock.charba.client.plugins.WrapperPlugin.Property$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Property>}
 * @implements {Key}
 */
class Property extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_plugins_WrapperPlugin_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_plugins_WrapperPlugin_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_plugins_WrapperPlugin_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_plugins_WrapperPlugin_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_plugins_WrapperPlugin_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_plugins_WrapperPlugin_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_plugins_WrapperPlugin_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_plugins_WrapperPlugin_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_ID__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_BEFORE_INIT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_AFTER_INIT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_BEFORE_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_AFTER_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_BEFORE_DATASETS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_AFTER_DATASETS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_BEFORE_DATASET_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_AFTER_DATASET_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_BEFORE_ELEMENTS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_BEFORE_LAYOUT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_AFTER_LAYOUT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_BEFORE_RENDER__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_AFTER_RENDER__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_BEFORE_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_AFTER_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_BEFORE_DATASETS_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_AFTER_DATASETS_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_BEFORE_DATASET_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_AFTER_DATASET_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_BEFORE_EVENT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_AFTER_EVENT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_BEFORE_TOOLTIP_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_AFTER_TOOLTIP_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_RESET__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_RESIZE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_DESTROY__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_BEFORE_DATA_LIMITS__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_AFTER_DATA_LIMITS__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_BEFORE_BUILD_TICKS__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_AFTER_BUILD_TICKS__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_INSTALL__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_START__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_STOP__org_pepstock_charba_client_plugins_WrapperPlugin_Property, Property.$static_UNINSTALL__org_pepstock_charba_client_plugins_WrapperPlugin_Property], Property));
 }
 /** @return {!Property} */
 static get f_ID__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_ID__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_INIT__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_INIT__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_INIT__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_AFTER_INIT__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_AFTER_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_DATASETS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_DATASETS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_DATASETS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_AFTER_DATASETS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_DATASET_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_DATASET_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_DATASET_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_AFTER_DATASET_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_ELEMENTS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_ELEMENTS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_LAYOUT__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_LAYOUT__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_LAYOUT__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_AFTER_LAYOUT__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_RENDER__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_RENDER__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_RENDER__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_AFTER_RENDER__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_AFTER_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_DATASETS_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_DATASETS_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_DATASETS_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_AFTER_DATASETS_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_DATASET_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_DATASET_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_DATASET_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_AFTER_DATASET_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_EVENT__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_EVENT__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_EVENT__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_AFTER_EVENT__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_TOOLTIP_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_TOOLTIP_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_TOOLTIP_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_AFTER_TOOLTIP_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_RESET__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_RESET__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_RESIZE__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_RESIZE__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_DESTROY__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_DESTROY__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_DATA_LIMITS__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_DATA_LIMITS__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_DATA_LIMITS__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_AFTER_DATA_LIMITS__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_BUILD_TICKS__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_BUILD_TICKS__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_BUILD_TICKS__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_AFTER_BUILD_TICKS__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_INSTALL__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_INSTALL__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_START__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_START__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_STOP__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_STOP__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 /** @return {!Property} */
 static get f_UNINSTALL__org_pepstock_charba_client_plugins_WrapperPlugin_Property() {
  return (Property.$clinit(), Property.$static_UNINSTALL__org_pepstock_charba_client_plugins_WrapperPlugin_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_ID__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ID"), Property.$ordinal_ID__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "id");
  Property.$static_BEFORE_INIT__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_INIT"), Property.$ordinal_BEFORE_INIT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "beforeInit");
  Property.$static_AFTER_INIT__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_INIT"), Property.$ordinal_AFTER_INIT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "afterInit");
  Property.$static_BEFORE_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_UPDATE"), Property.$ordinal_BEFORE_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "beforeUpdate");
  Property.$static_AFTER_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_UPDATE"), Property.$ordinal_AFTER_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "afterUpdate");
  Property.$static_BEFORE_DATASETS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_DATASETS_UPDATE"), Property.$ordinal_BEFORE_DATASETS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "beforeDatasetsUpdate");
  Property.$static_AFTER_DATASETS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_DATASETS_UPDATE"), Property.$ordinal_AFTER_DATASETS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "afterDatasetsUpdate");
  Property.$static_BEFORE_DATASET_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_DATASET_UPDATE"), Property.$ordinal_BEFORE_DATASET_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "beforeDatasetUpdate");
  Property.$static_AFTER_DATASET_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_DATASET_UPDATE"), Property.$ordinal_AFTER_DATASET_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "afterDatasetUpdate");
  Property.$static_BEFORE_ELEMENTS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_ELEMENTS_UPDATE"), Property.$ordinal_BEFORE_ELEMENTS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "beforeElementsUpdate");
  Property.$static_BEFORE_LAYOUT__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_LAYOUT"), Property.$ordinal_BEFORE_LAYOUT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "beforeLayout");
  Property.$static_AFTER_LAYOUT__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_LAYOUT"), Property.$ordinal_AFTER_LAYOUT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "afterLayout");
  Property.$static_BEFORE_RENDER__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_RENDER"), Property.$ordinal_BEFORE_RENDER__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "beforeRender");
  Property.$static_AFTER_RENDER__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_RENDER"), Property.$ordinal_AFTER_RENDER__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "afterRender");
  Property.$static_BEFORE_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_DRAW"), Property.$ordinal_BEFORE_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "beforeDraw");
  Property.$static_AFTER_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_DRAW"), Property.$ordinal_AFTER_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "afterDraw");
  Property.$static_BEFORE_DATASETS_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_DATASETS_DRAW"), Property.$ordinal_BEFORE_DATASETS_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "beforeDatasetsDraw");
  Property.$static_AFTER_DATASETS_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_DATASETS_DRAW"), Property.$ordinal_AFTER_DATASETS_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "afterDatasetsDraw");
  Property.$static_BEFORE_DATASET_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_DATASET_DRAW"), Property.$ordinal_BEFORE_DATASET_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "beforeDatasetDraw");
  Property.$static_AFTER_DATASET_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_DATASET_DRAW"), Property.$ordinal_AFTER_DATASET_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "afterDatasetDraw");
  Property.$static_BEFORE_EVENT__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_EVENT"), Property.$ordinal_BEFORE_EVENT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "beforeEvent");
  Property.$static_AFTER_EVENT__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_EVENT"), Property.$ordinal_AFTER_EVENT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "afterEvent");
  Property.$static_BEFORE_TOOLTIP_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_TOOLTIP_DRAW"), Property.$ordinal_BEFORE_TOOLTIP_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "beforeTooltipDraw");
  Property.$static_AFTER_TOOLTIP_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_TOOLTIP_DRAW"), Property.$ordinal_AFTER_TOOLTIP_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "afterTooltipDraw");
  Property.$static_RESET__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RESET"), Property.$ordinal_RESET__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "reset");
  Property.$static_RESIZE__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RESIZE"), Property.$ordinal_RESIZE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "resize");
  Property.$static_DESTROY__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DESTROY"), Property.$ordinal_DESTROY__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "destroy");
  Property.$static_BEFORE_DATA_LIMITS__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_DATA_LIMITS"), Property.$ordinal_BEFORE_DATA_LIMITS__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "beforeDataLimits");
  Property.$static_AFTER_DATA_LIMITS__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_DATA_LIMITS"), Property.$ordinal_AFTER_DATA_LIMITS__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "afterDataLimits");
  Property.$static_BEFORE_BUILD_TICKS__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_BUILD_TICKS"), Property.$ordinal_BEFORE_BUILD_TICKS__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "beforeBuildTicks");
  Property.$static_AFTER_BUILD_TICKS__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_BUILD_TICKS"), Property.$ordinal_AFTER_BUILD_TICKS__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "afterBuildTicks");
  Property.$static_INSTALL__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INSTALL"), Property.$ordinal_INSTALL__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "install");
  Property.$static_START__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("START"), Property.$ordinal_START__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "start");
  Property.$static_STOP__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STOP"), Property.$ordinal_STOP__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "stop");
  Property.$static_UNINSTALL__org_pepstock_charba_client_plugins_WrapperPlugin_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("UNINSTALL"), Property.$ordinal_UNINSTALL__org_pepstock_charba_client_plugins_WrapperPlugin_Property, "uninstall");
  Property.f_namesToValuesMap__org_pepstock_charba_client_plugins_WrapperPlugin_Property_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Property;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Property}*/
Property.$static_ID__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_BEFORE_INIT__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_AFTER_INIT__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_BEFORE_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_AFTER_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_BEFORE_DATASETS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_AFTER_DATASETS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_BEFORE_DATASET_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_AFTER_DATASET_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_BEFORE_ELEMENTS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_BEFORE_LAYOUT__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_AFTER_LAYOUT__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_BEFORE_RENDER__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_AFTER_RENDER__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_BEFORE_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_AFTER_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_BEFORE_DATASETS_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_AFTER_DATASETS_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_BEFORE_DATASET_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_AFTER_DATASET_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_BEFORE_EVENT__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_AFTER_EVENT__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_BEFORE_TOOLTIP_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_AFTER_TOOLTIP_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_RESET__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_RESIZE__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_DESTROY__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_BEFORE_DATA_LIMITS__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_AFTER_DATA_LIMITS__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_BEFORE_BUILD_TICKS__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_AFTER_BUILD_TICKS__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_INSTALL__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_START__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_STOP__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@private {!Property}*/
Property.$static_UNINSTALL__org_pepstock_charba_client_plugins_WrapperPlugin_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_plugins_WrapperPlugin_Property_;
/**@const {number}*/
Property.$ordinal_ID__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 0;
/**@const {number}*/
Property.$ordinal_BEFORE_INIT__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 1;
/**@const {number}*/
Property.$ordinal_AFTER_INIT__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 2;
/**@const {number}*/
Property.$ordinal_BEFORE_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 3;
/**@const {number}*/
Property.$ordinal_AFTER_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 4;
/**@const {number}*/
Property.$ordinal_BEFORE_DATASETS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 5;
/**@const {number}*/
Property.$ordinal_AFTER_DATASETS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 6;
/**@const {number}*/
Property.$ordinal_BEFORE_DATASET_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 7;
/**@const {number}*/
Property.$ordinal_AFTER_DATASET_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 8;
/**@const {number}*/
Property.$ordinal_BEFORE_ELEMENTS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 9;
/**@const {number}*/
Property.$ordinal_BEFORE_LAYOUT__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 10;
/**@const {number}*/
Property.$ordinal_AFTER_LAYOUT__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 11;
/**@const {number}*/
Property.$ordinal_BEFORE_RENDER__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 12;
/**@const {number}*/
Property.$ordinal_AFTER_RENDER__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 13;
/**@const {number}*/
Property.$ordinal_BEFORE_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 14;
/**@const {number}*/
Property.$ordinal_AFTER_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 15;
/**@const {number}*/
Property.$ordinal_BEFORE_DATASETS_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 16;
/**@const {number}*/
Property.$ordinal_AFTER_DATASETS_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 17;
/**@const {number}*/
Property.$ordinal_BEFORE_DATASET_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 18;
/**@const {number}*/
Property.$ordinal_AFTER_DATASET_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 19;
/**@const {number}*/
Property.$ordinal_BEFORE_EVENT__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 20;
/**@const {number}*/
Property.$ordinal_AFTER_EVENT__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 21;
/**@const {number}*/
Property.$ordinal_BEFORE_TOOLTIP_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 22;
/**@const {number}*/
Property.$ordinal_AFTER_TOOLTIP_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 23;
/**@const {number}*/
Property.$ordinal_RESET__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 24;
/**@const {number}*/
Property.$ordinal_RESIZE__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 25;
/**@const {number}*/
Property.$ordinal_DESTROY__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 26;
/**@const {number}*/
Property.$ordinal_BEFORE_DATA_LIMITS__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 27;
/**@const {number}*/
Property.$ordinal_AFTER_DATA_LIMITS__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 28;
/**@const {number}*/
Property.$ordinal_BEFORE_BUILD_TICKS__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 29;
/**@const {number}*/
Property.$ordinal_AFTER_BUILD_TICKS__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 30;
/**@const {number}*/
Property.$ordinal_INSTALL__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 31;
/**@const {number}*/
Property.$ordinal_START__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 32;
/**@const {number}*/
Property.$ordinal_STOP__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 33;
/**@const {number}*/
Property.$ordinal_UNINSTALL__org_pepstock_charba_client_plugins_WrapperPlugin_Property = 34;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.plugins.WrapperPlugin$Property");

exports = Property;

//# sourceMappingURL=WrapperPlugin$Property.js.map
