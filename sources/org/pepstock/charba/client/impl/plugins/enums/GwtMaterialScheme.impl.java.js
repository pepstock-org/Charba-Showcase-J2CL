goog.module('org.pepstock.charba.client.impl.plugins.enums.GwtMaterialScheme$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsEnumeratedScheme = goog.require('org.pepstock.charba.client.impl.plugins.enums.IsEnumeratedScheme$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let GradientOrientation = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientOrientation$impl');
let GradientScope = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientScope$impl');
let GradientType = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientType$impl');
let GwtMaterialColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GwtMaterialColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ColorScheme = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorScheme$impl');
let EnumeratedScheme = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.EnumeratedScheme$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<GwtMaterialScheme>}
 * @implements {IsEnumeratedScheme}
 */
class GwtMaterialScheme extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {EnumeratedScheme}*/
  this.f_scheme__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme_;
 }
 /** @return {!GwtMaterialScheme} */
 static $create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor(/** ?string */ $name, /** number */ $ordinal, /** Array<IsColor> */ hexColors) {
  let $instance = new GwtMaterialScheme();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($name, $ordinal, hexColors);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor(/** ?string */ $name, /** number */ $ordinal, /** Array<IsColor> */ hexColors) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_scheme__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme_ = EnumeratedScheme.$create__java_lang_String__java_lang_String(GwtMaterialScheme.f_CATEGORY__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme_, this.name());
  this.f_scheme__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme_.m_addAll__java_util_List_$pp_org_pepstock_charba_client_impl_plugins_enums(/**@type {List<IsColor>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(hexColors)));
 }
 /** @override @return {ColorScheme} */
 m_getScheme__() {
  return this.f_scheme__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme_;
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
 /** @return {!GwtMaterialScheme} */
 static m_valueOf__java_lang_String(/** string */ name) {
  GwtMaterialScheme.$clinit();
  if ($Equality.$same(GwtMaterialScheme.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme_, null)) {
   GwtMaterialScheme.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme_ = $Enums.createMapFromValues(GwtMaterialScheme.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, GwtMaterialScheme.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme_);
 }
 /** @return {!Array<!GwtMaterialScheme>} */
 static m_values__() {
  GwtMaterialScheme.$clinit();
  return /**@type {!Array<GwtMaterialScheme>}*/ ($Arrays.$init([GwtMaterialScheme.$static_BLUE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, GwtMaterialScheme.$static_PURPLE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, GwtMaterialScheme.$static_GREEN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, GwtMaterialScheme.$static_INDIGO__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, GwtMaterialScheme.$static_RED__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, GwtMaterialScheme.$static_PINK__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, GwtMaterialScheme.$static_AMBER__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, GwtMaterialScheme.$static_LIME__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, GwtMaterialScheme.$static_TEAL__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, GwtMaterialScheme.$static_YELLOW__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, GwtMaterialScheme.$static_CYAN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, GwtMaterialScheme.$static_BROWN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, GwtMaterialScheme.$static_GREY__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, GwtMaterialScheme.$static_ORANGE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme], GwtMaterialScheme));
 }
 /** @return {!GwtMaterialScheme} */
 static get f_BLUE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme() {
  return (GwtMaterialScheme.$clinit(), GwtMaterialScheme.$static_BLUE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme);
 }
 /** @return {!GwtMaterialScheme} */
 static get f_PURPLE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme() {
  return (GwtMaterialScheme.$clinit(), GwtMaterialScheme.$static_PURPLE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme);
 }
 /** @return {!GwtMaterialScheme} */
 static get f_GREEN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme() {
  return (GwtMaterialScheme.$clinit(), GwtMaterialScheme.$static_GREEN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme);
 }
 /** @return {!GwtMaterialScheme} */
 static get f_INDIGO__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme() {
  return (GwtMaterialScheme.$clinit(), GwtMaterialScheme.$static_INDIGO__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme);
 }
 /** @return {!GwtMaterialScheme} */
 static get f_RED__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme() {
  return (GwtMaterialScheme.$clinit(), GwtMaterialScheme.$static_RED__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme);
 }
 /** @return {!GwtMaterialScheme} */
 static get f_PINK__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme() {
  return (GwtMaterialScheme.$clinit(), GwtMaterialScheme.$static_PINK__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme);
 }
 /** @return {!GwtMaterialScheme} */
 static get f_AMBER__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme() {
  return (GwtMaterialScheme.$clinit(), GwtMaterialScheme.$static_AMBER__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme);
 }
 /** @return {!GwtMaterialScheme} */
 static get f_LIME__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme() {
  return (GwtMaterialScheme.$clinit(), GwtMaterialScheme.$static_LIME__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme);
 }
 /** @return {!GwtMaterialScheme} */
 static get f_TEAL__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme() {
  return (GwtMaterialScheme.$clinit(), GwtMaterialScheme.$static_TEAL__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme);
 }
 /** @return {!GwtMaterialScheme} */
 static get f_YELLOW__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme() {
  return (GwtMaterialScheme.$clinit(), GwtMaterialScheme.$static_YELLOW__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme);
 }
 /** @return {!GwtMaterialScheme} */
 static get f_CYAN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme() {
  return (GwtMaterialScheme.$clinit(), GwtMaterialScheme.$static_CYAN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme);
 }
 /** @return {!GwtMaterialScheme} */
 static get f_BROWN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme() {
  return (GwtMaterialScheme.$clinit(), GwtMaterialScheme.$static_BROWN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme);
 }
 /** @return {!GwtMaterialScheme} */
 static get f_GREY__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme() {
  return (GwtMaterialScheme.$clinit(), GwtMaterialScheme.$static_GREY__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme);
 }
 /** @return {!GwtMaterialScheme} */
 static get f_ORANGE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme() {
  return (GwtMaterialScheme.$clinit(), GwtMaterialScheme.$static_ORANGE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme);
 }
 
 static $clinit() {
  GwtMaterialScheme.$clinit = () =>{};
  GwtMaterialScheme.$loadModules();
  Enum.$clinit();
  IsEnumeratedScheme.$clinit();
  GwtMaterialScheme.$static_BLUE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = GwtMaterialScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("BLUE"), GwtMaterialScheme.$ordinal_BLUE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GwtMaterialColor.f_BLUE_LIGHTEN_5__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BLUE_LIGHTEN_4__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BLUE_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BLUE_LIGHTEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BLUE_LIGHTEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BLUE__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BLUE_DARKEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BLUE_DARKEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BLUE_DARKEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BLUE_DARKEN_4__org_pepstock_charba_client_colors_GwtMaterialColor], IsColor)));
  GwtMaterialScheme.$static_PURPLE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = GwtMaterialScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("PURPLE"), GwtMaterialScheme.$ordinal_PURPLE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GwtMaterialColor.f_PURPLE_LIGHTEN_5__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PURPLE_LIGHTEN_4__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PURPLE_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PURPLE_LIGHTEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PURPLE_LIGHTEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PURPLE__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PURPLE_DARKEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PURPLE_DARKEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PURPLE_DARKEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PURPLE_DARKEN_4__org_pepstock_charba_client_colors_GwtMaterialColor], IsColor)));
  GwtMaterialScheme.$static_GREEN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = GwtMaterialScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("GREEN"), GwtMaterialScheme.$ordinal_GREEN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GwtMaterialColor.f_GREEN_LIGHTEN_5__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREEN_LIGHTEN_4__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREEN_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREEN_LIGHTEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREEN_LIGHTEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREEN__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREEN_DARKEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREEN_DARKEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREEN_DARKEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREEN_DARKEN_4__org_pepstock_charba_client_colors_GwtMaterialColor], IsColor)));
  GwtMaterialScheme.$static_INDIGO__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = GwtMaterialScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("INDIGO"), GwtMaterialScheme.$ordinal_INDIGO__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GwtMaterialColor.f_INDIGO_LIGHTEN_5__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_INDIGO_LIGHTEN_4__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_INDIGO_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_INDIGO_LIGHTEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_INDIGO_LIGHTEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_INDIGO__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_INDIGO_DARKEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_INDIGO_DARKEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_INDIGO_DARKEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_INDIGO_DARKEN_4__org_pepstock_charba_client_colors_GwtMaterialColor], IsColor)));
  GwtMaterialScheme.$static_RED__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = GwtMaterialScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("RED"), GwtMaterialScheme.$ordinal_RED__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GwtMaterialColor.f_RED_LIGHTEN_5__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_RED_LIGHTEN_4__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_RED_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_RED_LIGHTEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_RED_LIGHTEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_RED__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_RED_DARKEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_RED_DARKEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_RED_DARKEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_RED_DARKEN_4__org_pepstock_charba_client_colors_GwtMaterialColor], IsColor)));
  GwtMaterialScheme.$static_PINK__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = GwtMaterialScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("PINK"), GwtMaterialScheme.$ordinal_PINK__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GwtMaterialColor.f_PINK_LIGHTEN_5__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PINK_LIGHTEN_4__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PINK_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PINK_LIGHTEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PINK_LIGHTEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PINK__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PINK_DARKEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PINK_DARKEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PINK_DARKEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_PINK_DARKEN_4__org_pepstock_charba_client_colors_GwtMaterialColor], IsColor)));
  GwtMaterialScheme.$static_AMBER__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = GwtMaterialScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("AMBER"), GwtMaterialScheme.$ordinal_AMBER__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GwtMaterialColor.f_AMBER_LIGHTEN_5__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_AMBER_LIGHTEN_4__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_AMBER_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_AMBER_LIGHTEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_AMBER_LIGHTEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_AMBER__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_AMBER_DARKEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_AMBER_DARKEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_AMBER_DARKEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_AMBER_DARKEN_4__org_pepstock_charba_client_colors_GwtMaterialColor], IsColor)));
  GwtMaterialScheme.$static_LIME__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = GwtMaterialScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("LIME"), GwtMaterialScheme.$ordinal_LIME__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GwtMaterialColor.f_LIME_LIGHTEN_5__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_LIME_LIGHTEN_4__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_LIME_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_LIME_LIGHTEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_LIME_LIGHTEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_LIME__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_LIME_DARKEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_LIME_DARKEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_LIME_DARKEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_LIME_DARKEN_4__org_pepstock_charba_client_colors_GwtMaterialColor], IsColor)));
  GwtMaterialScheme.$static_TEAL__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = GwtMaterialScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("TEAL"), GwtMaterialScheme.$ordinal_TEAL__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GwtMaterialColor.f_TEAL_LIGHTEN_5__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_TEAL_LIGHTEN_4__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_TEAL_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_TEAL_LIGHTEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_TEAL_LIGHTEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_TEAL__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_TEAL_DARKEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_TEAL_DARKEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_TEAL_DARKEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_TEAL_DARKEN_4__org_pepstock_charba_client_colors_GwtMaterialColor], IsColor)));
  GwtMaterialScheme.$static_YELLOW__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = GwtMaterialScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("YELLOW"), GwtMaterialScheme.$ordinal_YELLOW__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GwtMaterialColor.f_YELLOW_LIGHTEN_5__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_YELLOW_LIGHTEN_4__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_YELLOW_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_YELLOW_LIGHTEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_YELLOW_LIGHTEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_YELLOW__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_YELLOW_DARKEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_YELLOW_DARKEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_YELLOW_DARKEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_YELLOW_DARKEN_4__org_pepstock_charba_client_colors_GwtMaterialColor], IsColor)));
  GwtMaterialScheme.$static_CYAN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = GwtMaterialScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("CYAN"), GwtMaterialScheme.$ordinal_CYAN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GwtMaterialColor.f_CYAN_LIGHTEN_5__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_CYAN_LIGHTEN_4__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_CYAN_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_CYAN_LIGHTEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_CYAN_LIGHTEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_CYAN__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_CYAN_DARKEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_CYAN_DARKEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_CYAN_DARKEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_CYAN_DARKEN_4__org_pepstock_charba_client_colors_GwtMaterialColor], IsColor)));
  GwtMaterialScheme.$static_BROWN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = GwtMaterialScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("BROWN"), GwtMaterialScheme.$ordinal_BROWN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GwtMaterialColor.f_BROWN_LIGHTEN_5__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BROWN_LIGHTEN_4__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BROWN_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BROWN_LIGHTEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BROWN_LIGHTEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BROWN__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BROWN_DARKEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BROWN_DARKEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BROWN_DARKEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_BROWN_DARKEN_4__org_pepstock_charba_client_colors_GwtMaterialColor], IsColor)));
  GwtMaterialScheme.$static_GREY__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = GwtMaterialScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("GREY"), GwtMaterialScheme.$ordinal_GREY__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GwtMaterialColor.f_GREY_LIGHTEN_5__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREY_LIGHTEN_4__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREY_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREY_LIGHTEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREY_LIGHTEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREY__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREY_DARKEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREY_DARKEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREY_DARKEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_GREY_DARKEN_4__org_pepstock_charba_client_colors_GwtMaterialColor], IsColor)));
  GwtMaterialScheme.$static_ORANGE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = GwtMaterialScheme.$create__java_lang_String__int__arrayOf_org_pepstock_charba_client_colors_IsColor($Util.$makeEnumName("ORANGE"), GwtMaterialScheme.$ordinal_ORANGE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme, /**@type {!Array<IsColor>}*/ ($Arrays.$init([GwtMaterialColor.f_ORANGE_LIGHTEN_5__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_ORANGE_LIGHTEN_4__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_ORANGE_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_ORANGE_LIGHTEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_ORANGE_LIGHTEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_ORANGE__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_ORANGE_DARKEN_1__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_ORANGE_DARKEN_2__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_ORANGE_DARKEN_3__org_pepstock_charba_client_colors_GwtMaterialColor, GwtMaterialColor.f_ORANGE_DARKEN_4__org_pepstock_charba_client_colors_GwtMaterialColor], IsColor)));
  GwtMaterialScheme.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GwtMaterialScheme;
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  GwtMaterialColor = goog.module.get('org.pepstock.charba.client.colors.GwtMaterialColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  EnumeratedScheme = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.EnumeratedScheme$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!GwtMaterialScheme}*/
GwtMaterialScheme.$static_BLUE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme;
/**@private {!GwtMaterialScheme}*/
GwtMaterialScheme.$static_PURPLE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme;
/**@private {!GwtMaterialScheme}*/
GwtMaterialScheme.$static_GREEN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme;
/**@private {!GwtMaterialScheme}*/
GwtMaterialScheme.$static_INDIGO__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme;
/**@private {!GwtMaterialScheme}*/
GwtMaterialScheme.$static_RED__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme;
/**@private {!GwtMaterialScheme}*/
GwtMaterialScheme.$static_PINK__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme;
/**@private {!GwtMaterialScheme}*/
GwtMaterialScheme.$static_AMBER__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme;
/**@private {!GwtMaterialScheme}*/
GwtMaterialScheme.$static_LIME__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme;
/**@private {!GwtMaterialScheme}*/
GwtMaterialScheme.$static_TEAL__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme;
/**@private {!GwtMaterialScheme}*/
GwtMaterialScheme.$static_YELLOW__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme;
/**@private {!GwtMaterialScheme}*/
GwtMaterialScheme.$static_CYAN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme;
/**@private {!GwtMaterialScheme}*/
GwtMaterialScheme.$static_BROWN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme;
/**@private {!GwtMaterialScheme}*/
GwtMaterialScheme.$static_GREY__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme;
/**@private {!GwtMaterialScheme}*/
GwtMaterialScheme.$static_ORANGE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme;
/**@const {?string}*/
GwtMaterialScheme.f_CATEGORY__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme_ = "gwtmaterial";
/**@type {Map<?string, !GwtMaterialScheme>}*/
GwtMaterialScheme.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme_;
/**@const {number}*/
GwtMaterialScheme.$ordinal_BLUE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = 0;
/**@const {number}*/
GwtMaterialScheme.$ordinal_PURPLE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = 1;
/**@const {number}*/
GwtMaterialScheme.$ordinal_GREEN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = 2;
/**@const {number}*/
GwtMaterialScheme.$ordinal_INDIGO__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = 3;
/**@const {number}*/
GwtMaterialScheme.$ordinal_RED__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = 4;
/**@const {number}*/
GwtMaterialScheme.$ordinal_PINK__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = 5;
/**@const {number}*/
GwtMaterialScheme.$ordinal_AMBER__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = 6;
/**@const {number}*/
GwtMaterialScheme.$ordinal_LIME__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = 7;
/**@const {number}*/
GwtMaterialScheme.$ordinal_TEAL__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = 8;
/**@const {number}*/
GwtMaterialScheme.$ordinal_YELLOW__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = 9;
/**@const {number}*/
GwtMaterialScheme.$ordinal_CYAN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = 10;
/**@const {number}*/
GwtMaterialScheme.$ordinal_BROWN__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = 11;
/**@const {number}*/
GwtMaterialScheme.$ordinal_GREY__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = 12;
/**@const {number}*/
GwtMaterialScheme.$ordinal_ORANGE__org_pepstock_charba_client_impl_plugins_enums_GwtMaterialScheme = 13;
IsEnumeratedScheme.$markImplementor(GwtMaterialScheme);
$Util.$setClassMetadataForEnum(GwtMaterialScheme, "org.pepstock.charba.client.impl.plugins.enums.GwtMaterialScheme");

exports = GwtMaterialScheme;

//# sourceMappingURL=GwtMaterialScheme.js.map
