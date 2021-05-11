goog.module('org.pepstock.charba.client.impl.charts.DefaultThreshold$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsThreshold = goog.require('org.pepstock.charba.client.impl.charts.IsThreshold$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Color = goog.forwardDeclare('org.pepstock.charba.client.colors.Color$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Threshold = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.Threshold$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<DefaultThreshold>}
 * @implements {IsThreshold}
 */
class DefaultThreshold extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_value__org_pepstock_charba_client_impl_charts_DefaultThreshold_ = 0;
  /**@type {IsColor}*/
  this.f_color__org_pepstock_charba_client_impl_charts_DefaultThreshold_;
 }
 /** @return {!DefaultThreshold} */
 static $create__java_lang_String__int__double__org_pepstock_charba_client_colors_IsColor(/** ?string */ $name, /** number */ $ordinal, /** number */ value, /** IsColor */ color) {
  let $instance = new DefaultThreshold();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_DefaultThreshold__java_lang_String__int__double__org_pepstock_charba_client_colors_IsColor($name, $ordinal, value, color);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_charts_DefaultThreshold__java_lang_String__int__double__org_pepstock_charba_client_colors_IsColor(/** ?string */ $name, /** number */ $ordinal, /** number */ value, /** IsColor */ color) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_impl_charts_DefaultThreshold_ = value;
  this.f_color__org_pepstock_charba_client_impl_charts_DefaultThreshold_ = color;
 }
 /** @override @return {number} */
 m_getValue__() {
  return this.f_value__org_pepstock_charba_client_impl_charts_DefaultThreshold_;
 }
 /** @override @return {IsColor} */
 m_getColor__() {
  return this.f_color__org_pepstock_charba_client_impl_charts_DefaultThreshold_;
 }
 /** @override @return {?string} */
 m_getName__() {
  return this.name();
 }
 /** @return {Threshold} */
 m_getThreshold__() {
  let threshold = Threshold.$create__java_lang_String(this.name());
  return threshold.m_setValue__double(this.f_value__org_pepstock_charba_client_impl_charts_DefaultThreshold_).m_setColor__org_pepstock_charba_client_colors_IsColor(this.f_color__org_pepstock_charba_client_impl_charts_DefaultThreshold_);
 }
 /** @return {!DefaultThreshold} */
 static m_valueOf__java_lang_String(/** string */ name) {
  DefaultThreshold.$clinit();
  if ($Equality.$same(DefaultThreshold.f_namesToValuesMap__org_pepstock_charba_client_impl_charts_DefaultThreshold_, null)) {
   DefaultThreshold.f_namesToValuesMap__org_pepstock_charba_client_impl_charts_DefaultThreshold_ = $Enums.createMapFromValues(DefaultThreshold.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, DefaultThreshold.f_namesToValuesMap__org_pepstock_charba_client_impl_charts_DefaultThreshold_);
 }
 /** @return {!Array<!DefaultThreshold>} */
 static m_values__() {
  DefaultThreshold.$clinit();
  return /**@type {!Array<DefaultThreshold>}*/ ($Arrays.$init([DefaultThreshold.$static_NORMAL__org_pepstock_charba_client_impl_charts_DefaultThreshold, DefaultThreshold.$static_WARNING__org_pepstock_charba_client_impl_charts_DefaultThreshold, DefaultThreshold.$static_CRITICAL__org_pepstock_charba_client_impl_charts_DefaultThreshold], DefaultThreshold));
 }
 /** @return {!DefaultThreshold} */
 static get f_NORMAL__org_pepstock_charba_client_impl_charts_DefaultThreshold() {
  return (DefaultThreshold.$clinit(), DefaultThreshold.$static_NORMAL__org_pepstock_charba_client_impl_charts_DefaultThreshold);
 }
 /** @return {!DefaultThreshold} */
 static get f_WARNING__org_pepstock_charba_client_impl_charts_DefaultThreshold() {
  return (DefaultThreshold.$clinit(), DefaultThreshold.$static_WARNING__org_pepstock_charba_client_impl_charts_DefaultThreshold);
 }
 /** @return {!DefaultThreshold} */
 static get f_CRITICAL__org_pepstock_charba_client_impl_charts_DefaultThreshold() {
  return (DefaultThreshold.$clinit(), DefaultThreshold.$static_CRITICAL__org_pepstock_charba_client_impl_charts_DefaultThreshold);
 }
 
 static $clinit() {
  DefaultThreshold.$clinit = () =>{};
  DefaultThreshold.$loadModules();
  Enum.$clinit();
  DefaultThreshold.$static_NORMAL__org_pepstock_charba_client_impl_charts_DefaultThreshold = DefaultThreshold.$create__java_lang_String__int__double__org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("NORMAL"), DefaultThreshold.$ordinal_NORMAL__org_pepstock_charba_client_impl_charts_DefaultThreshold, 75, Color.$create__int__int__int(140, 214, 16));
  DefaultThreshold.$static_WARNING__org_pepstock_charba_client_impl_charts_DefaultThreshold = DefaultThreshold.$create__java_lang_String__int__double__org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("WARNING"), DefaultThreshold.$ordinal_WARNING__org_pepstock_charba_client_impl_charts_DefaultThreshold, 90, Color.$create__int__int__int(239, 198, 0));
  DefaultThreshold.$static_CRITICAL__org_pepstock_charba_client_impl_charts_DefaultThreshold = DefaultThreshold.$create__java_lang_String__int__double__org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("CRITICAL"), DefaultThreshold.$ordinal_CRITICAL__org_pepstock_charba_client_impl_charts_DefaultThreshold, Double.f_MAX_VALUE__java_lang_Double, Color.$create__int__int__int(231, 24, 49));
  DefaultThreshold.f_namesToValuesMap__org_pepstock_charba_client_impl_charts_DefaultThreshold_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultThreshold;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Color = goog.module.get('org.pepstock.charba.client.colors.Color$impl');
  Threshold = goog.module.get('org.pepstock.charba.client.impl.charts.Threshold$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!DefaultThreshold}*/
DefaultThreshold.$static_NORMAL__org_pepstock_charba_client_impl_charts_DefaultThreshold;
/**@private {!DefaultThreshold}*/
DefaultThreshold.$static_WARNING__org_pepstock_charba_client_impl_charts_DefaultThreshold;
/**@private {!DefaultThreshold}*/
DefaultThreshold.$static_CRITICAL__org_pepstock_charba_client_impl_charts_DefaultThreshold;
/**@type {Map<?string, !DefaultThreshold>}*/
DefaultThreshold.f_namesToValuesMap__org_pepstock_charba_client_impl_charts_DefaultThreshold_;
/**@const {number}*/
DefaultThreshold.$ordinal_NORMAL__org_pepstock_charba_client_impl_charts_DefaultThreshold = 0;
/**@const {number}*/
DefaultThreshold.$ordinal_WARNING__org_pepstock_charba_client_impl_charts_DefaultThreshold = 1;
/**@const {number}*/
DefaultThreshold.$ordinal_CRITICAL__org_pepstock_charba_client_impl_charts_DefaultThreshold = 2;
IsThreshold.$markImplementor(DefaultThreshold);
$Util.$setClassMetadataForEnum(DefaultThreshold, "org.pepstock.charba.client.impl.charts.DefaultThreshold");

exports = DefaultThreshold;

//# sourceMappingURL=DefaultThreshold.js.map
