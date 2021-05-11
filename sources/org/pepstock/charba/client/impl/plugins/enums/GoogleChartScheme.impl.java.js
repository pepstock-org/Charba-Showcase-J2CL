goog.module('org.pepstock.charba.client.impl.plugins.enums.GoogleChartScheme$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsEnumeratedScheme = goog.require('org.pepstock.charba.client.impl.plugins.enums.IsEnumeratedScheme$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let GradientOrientation = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientOrientation$impl');
let GradientScope = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientScope$impl');
let GradientType = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientType$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ColorScheme = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorScheme$impl');
let EnumeratedScheme = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.EnumeratedScheme$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<GoogleChartScheme>}
 * @implements {IsEnumeratedScheme}
 */
class GoogleChartScheme extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {EnumeratedScheme}*/
  this.f_scheme__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme_;
 }
 /** @return {!GoogleChartScheme} */
 static $create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor(/** ?string */ $name, /** number */ $ordinal, /** Array<IsColor> */ hexColors) {
  let $instance = new GoogleChartScheme();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($name, $ordinal, hexColors);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor(/** ?string */ $name, /** number */ $ordinal, /** Array<IsColor> */ hexColors) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_scheme__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme_ = EnumeratedScheme.$create__java_lang_String__java_lang_String(GoogleChartScheme.f_CATEGORY__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme_, this.name());
  this.f_scheme__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme_.m_addAll__java_util_List_$pp_org_pepstock_charba_client_impl_plugins_enums(/**@type {List<IsColor>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(hexColors)));
 }
 /** @override @return {ColorScheme} */
 m_getScheme__() {
  return this.f_scheme__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme_;
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_value__() {
  return IsEnumeratedScheme.m_value__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_category__() {
  return IsEnumeratedScheme.m_category__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<IsColor>} */
 m_getColors__() {
  return IsEnumeratedScheme.m_getColors__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme(this);
 }
 //Default method forwarding stub.
 /** @override @return {Gradient} */
 m_createGradient__() {
  return IsEnumeratedScheme.m_createGradient__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme(this);
 }
 //Default method forwarding stub.
 /** @override @return {Gradient} */
 m_createGradient__org_pepstock_charba_client_colors_GradientType(/** GradientType */ arg0) {
  return IsEnumeratedScheme.m_createGradient__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme__org_pepstock_charba_client_colors_GradientType(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {Gradient} */
 m_createGradient__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation(/** GradientType */ arg0, /** GradientOrientation */ arg1) {
  return IsEnumeratedScheme.m_createGradient__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @return {Gradient} */
 m_createGradient__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientScope(/** GradientType */ arg0, /** GradientScope */ arg1) {
  return IsEnumeratedScheme.m_createGradient__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientScope(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @return {Gradient} */
 m_createGradient__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(/** GradientType */ arg0, /** GradientOrientation */ arg1, /** GradientScope */ arg2) {
  return IsEnumeratedScheme.m_createGradient__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(this, arg0, arg1, arg2);
 }
 /** @return {!GoogleChartScheme} */
 static m_valueOf__java_lang_String(/** string */ name) {
  GoogleChartScheme.$clinit();
  if ($Equality.$same(GoogleChartScheme.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme_, null)) {
   GoogleChartScheme.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme_ = $Enums.createMapFromValues(GoogleChartScheme.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, GoogleChartScheme.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme_);
 }
 /** @return {!Array<!GoogleChartScheme>} */
 static m_values__() {
  GoogleChartScheme.$clinit();
  return /**@type {!Array<GoogleChartScheme>}*/ ($Arrays.$init([GoogleChartScheme.$static_EIGHT__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme, GoogleChartScheme.$static_TWELVE__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme, GoogleChartScheme.$static_SIXTEEN__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme, GoogleChartScheme.$static_TWENTY__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme, GoogleChartScheme.$static_TWENTY_FOUR__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme, GoogleChartScheme.$static_ALL__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme], GoogleChartScheme));
 }
 /** @return {!GoogleChartScheme} */
 static get f_EIGHT__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme() {
  return (GoogleChartScheme.$clinit(), GoogleChartScheme.$static_EIGHT__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme);
 }
 /** @return {!GoogleChartScheme} */
 static get f_TWELVE__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme() {
  return (GoogleChartScheme.$clinit(), GoogleChartScheme.$static_TWELVE__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme);
 }
 /** @return {!GoogleChartScheme} */
 static get f_SIXTEEN__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme() {
  return (GoogleChartScheme.$clinit(), GoogleChartScheme.$static_SIXTEEN__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme);
 }
 /** @return {!GoogleChartScheme} */
 static get f_TWENTY__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme() {
  return (GoogleChartScheme.$clinit(), GoogleChartScheme.$static_TWENTY__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme);
 }
 /** @return {!GoogleChartScheme} */
 static get f_TWENTY_FOUR__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme() {
  return (GoogleChartScheme.$clinit(), GoogleChartScheme.$static_TWENTY_FOUR__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme);
 }
 /** @return {!GoogleChartScheme} */
 static get f_ALL__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme() {
  return (GoogleChartScheme.$clinit(), GoogleChartScheme.$static_ALL__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme);
 }
 
 static $clinit() {
  GoogleChartScheme.$clinit = () =>{};
  GoogleChartScheme.$loadModules();
  Enum.$clinit();
  IsEnumeratedScheme.$clinit();
  GoogleChartScheme.$static_EIGHT__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme = GoogleChartScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("EIGHT"), GoogleChartScheme.$ordinal_EIGHT__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GoogleChartColor.f_COLOR_00__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_01__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_02__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_03__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_04__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_05__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_06__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_07__org_pepstock_charba_client_colors_GoogleChartColor], IsColor)));
  GoogleChartScheme.$static_TWELVE__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme = GoogleChartScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("TWELVE"), GoogleChartScheme.$ordinal_TWELVE__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GoogleChartColor.f_COLOR_00__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_01__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_02__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_03__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_04__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_05__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_06__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_07__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_08__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_09__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_10__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_11__org_pepstock_charba_client_colors_GoogleChartColor], IsColor)));
  GoogleChartScheme.$static_SIXTEEN__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme = GoogleChartScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("SIXTEEN"), GoogleChartScheme.$ordinal_SIXTEEN__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GoogleChartColor.f_COLOR_00__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_01__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_02__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_03__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_04__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_05__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_06__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_07__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_08__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_09__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_10__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_11__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_12__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_13__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_14__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_15__org_pepstock_charba_client_colors_GoogleChartColor], IsColor)));
  GoogleChartScheme.$static_TWENTY__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme = GoogleChartScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("TWENTY"), GoogleChartScheme.$ordinal_TWENTY__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GoogleChartColor.f_COLOR_00__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_01__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_02__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_03__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_04__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_05__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_06__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_07__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_08__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_09__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_10__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_11__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_12__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_13__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_14__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_15__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_16__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_17__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_18__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_19__org_pepstock_charba_client_colors_GoogleChartColor], IsColor)));
  GoogleChartScheme.$static_TWENTY_FOUR__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme = GoogleChartScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("TWENTY_FOUR"), GoogleChartScheme.$ordinal_TWENTY_FOUR__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GoogleChartColor.f_COLOR_00__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_01__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_02__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_03__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_04__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_05__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_06__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_07__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_08__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_09__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_10__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_11__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_12__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_13__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_14__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_15__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_16__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_17__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_18__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_19__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_20__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_21__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_22__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_23__org_pepstock_charba_client_colors_GoogleChartColor], IsColor)));
  GoogleChartScheme.$static_ALL__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme = GoogleChartScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("ALL"), GoogleChartScheme.$ordinal_ALL__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GoogleChartColor.f_COLOR_00__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_01__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_02__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_03__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_04__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_05__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_06__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_07__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_08__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_09__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_10__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_11__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_12__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_13__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_14__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_15__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_16__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_17__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_18__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_19__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_20__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_21__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_22__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_23__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_24__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_25__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_26__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_27__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_28__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_29__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.f_COLOR_30__org_pepstock_charba_client_colors_GoogleChartColor], IsColor)));
  GoogleChartScheme.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GoogleChartScheme;
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  EnumeratedScheme = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.EnumeratedScheme$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!GoogleChartScheme}*/
GoogleChartScheme.$static_EIGHT__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme;
/**@private {!GoogleChartScheme}*/
GoogleChartScheme.$static_TWELVE__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme;
/**@private {!GoogleChartScheme}*/
GoogleChartScheme.$static_SIXTEEN__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme;
/**@private {!GoogleChartScheme}*/
GoogleChartScheme.$static_TWENTY__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme;
/**@private {!GoogleChartScheme}*/
GoogleChartScheme.$static_TWENTY_FOUR__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme;
/**@private {!GoogleChartScheme}*/
GoogleChartScheme.$static_ALL__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme;
/**@const {?string}*/
GoogleChartScheme.f_CATEGORY__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme_ = "googlechart";
/**@type {Map<?string, !GoogleChartScheme>}*/
GoogleChartScheme.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme_;
/**@const {number}*/
GoogleChartScheme.$ordinal_EIGHT__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme = 0;
/**@const {number}*/
GoogleChartScheme.$ordinal_TWELVE__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme = 1;
/**@const {number}*/
GoogleChartScheme.$ordinal_SIXTEEN__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme = 2;
/**@const {number}*/
GoogleChartScheme.$ordinal_TWENTY__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme = 3;
/**@const {number}*/
GoogleChartScheme.$ordinal_TWENTY_FOUR__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme = 4;
/**@const {number}*/
GoogleChartScheme.$ordinal_ALL__org_pepstock_charba_client_impl_plugins_enums_GoogleChartScheme = 5;
IsEnumeratedScheme.$markImplementor(GoogleChartScheme);
$Util.$setClassMetadataForEnum(GoogleChartScheme, "org.pepstock.charba.client.impl.plugins.enums.GoogleChartScheme");

exports = GoogleChartScheme;

//# sourceMappingURL=GoogleChartScheme.js.map
