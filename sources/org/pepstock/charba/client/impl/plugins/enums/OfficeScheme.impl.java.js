goog.module('org.pepstock.charba.client.impl.plugins.enums.OfficeScheme$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsEnumeratedScheme = goog.require('org.pepstock.charba.client.impl.plugins.enums.IsEnumeratedScheme$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let GradientOrientation = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientOrientation$impl');
let GradientScope = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientScope$impl');
let GradientType = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientType$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ColorScheme = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorScheme$impl');
let EnumeratedScheme = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.EnumeratedScheme$impl');
let SchemeCostants = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.SchemeCostants$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<OfficeScheme>}
 * @implements {IsEnumeratedScheme}
 */
class OfficeScheme extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {EnumeratedScheme}*/
  this.f_scheme__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme_;
 }
 /** @return {!OfficeScheme} */
 static $create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** Array<?string> */ hexColors) {
  let $instance = new OfficeScheme();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($name, $ordinal, value, hexColors);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme__java_lang_String__int__java_lang_String__arrayOf_java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** Array<?string> */ hexColors) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_scheme__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme_ = EnumeratedScheme.$create__java_lang_String__java_lang_String__arrayOf_java_lang_String(OfficeScheme.f_CATEGORY__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme_, value, hexColors);
 }
 /** @override @return {ColorScheme} */
 m_getScheme__() {
  return this.f_scheme__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme_;
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
 /** @return {!OfficeScheme} */
 static m_valueOf__java_lang_String(/** string */ name) {
  OfficeScheme.$clinit();
  if ($Equality.$same(OfficeScheme.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme_, null)) {
   OfficeScheme.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme_ = $Enums.createMapFromValues(OfficeScheme.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, OfficeScheme.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme_);
 }
 /** @return {!Array<!OfficeScheme>} */
 static m_values__() {
  OfficeScheme.$clinit();
  return /**@type {!Array<OfficeScheme>}*/ ($Arrays.$init([OfficeScheme.$static_ADJACENCY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_ADVANTAGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_ANGLES6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_APEX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_APOTHECARY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_ASPECT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_ATLAS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_AUSTIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_BADGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_BANDED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_BASIS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_BERLIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_BLACK_TIE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_BLUE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_BLUE_GREEN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_BLUE_II6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_BLUE_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_BLUE_WARM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_BREEZE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_CAPITAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_CELESTIAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_CIRCUIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_CIVIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_CLARITY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_CODEX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_COMPOSITE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_CONCOURSE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_COUTURE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_CROP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_DAMASK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_DEPTH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_DIVIDEND6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_DROPLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_ELEMENTAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_EQUITY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_ESSENTIAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_EXCEL16__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_EXECUTIVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_EXHIBIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_EXPO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_FACET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_FEATHERED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_FLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_FOCUS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_FOLIO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_FORMAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_FORTE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_FOUNDRY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_FRAME6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_GALLERY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_GENESIS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_GRAYSCALE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_GREEN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_GREEN_YELLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_GRID6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_HABITAT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_HARDCOVER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_HEADLINES6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_HORIZON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_INFUSION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_INKWELL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_INSPIRATION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_INTEGRAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_ION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_ION_BOARDROOM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_KILTER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_MADISON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_MAIN_EVENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_MARQUEE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_MEDIAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_MESH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_METAIL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_METRO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_METROPOLITAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_MODULE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_NEWS_PRINT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_OFFICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_OFFICE2007_2010_6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_OPULENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_ORANGE_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_ORBIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_ORGANIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_ORIEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_ORIGIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_PAPER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_PARALLAX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_PARCEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_PERCEPTION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_PERSPECTIVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_PIXEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_PLAZA6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_PRECEDENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_PUSHPIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_QUOTABLE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_RED_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_RED_VIOLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_RETROSPECT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_REVOLUTION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_SADDLE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_SAVON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_SKETCHBOOK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_SKY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_SLATE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_SLICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_SLIPSTREAM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_SOHO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_SOLSTICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_SPECTRUM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_STORY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_STUDIO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_SUMMER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_TECHNIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_THATCH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_TRADITION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_TRAVELOGUE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_TREK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_TWILIGHT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_URBAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_URBAN_POP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_VAPOR_TRAIL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_VENTURE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_VERVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_VIEW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_VIOLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_VIOLET_II6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_WAVEFORM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_WISP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_WOOD_TYPE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_YELLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, OfficeScheme.$static_YELLOW_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme], OfficeScheme));
 }
 /** @return {!OfficeScheme} */
 static get f_ADJACENCY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_ADJACENCY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_ADVANTAGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_ADVANTAGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_ANGLES6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_ANGLES6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_APEX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_APEX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_APOTHECARY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_APOTHECARY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_ASPECT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_ASPECT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_ATLAS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_ATLAS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_AUSTIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_AUSTIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_BADGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_BADGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_BANDED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_BANDED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_BASIS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_BASIS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_BERLIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_BERLIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_BLACK_TIE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_BLACK_TIE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_BLUE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_BLUE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_BLUE_GREEN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_BLUE_GREEN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_BLUE_II6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_BLUE_II6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_BLUE_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_BLUE_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_BLUE_WARM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_BLUE_WARM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_BREEZE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_BREEZE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_CAPITAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_CAPITAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_CELESTIAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_CELESTIAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_CIRCUIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_CIRCUIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_CIVIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_CIVIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_CLARITY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_CLARITY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_CODEX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_CODEX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_COMPOSITE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_COMPOSITE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_CONCOURSE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_CONCOURSE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_COUTURE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_COUTURE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_CROP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_CROP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_DAMASK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_DAMASK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_DEPTH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_DEPTH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_DIVIDEND6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_DIVIDEND6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_DROPLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_DROPLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_ELEMENTAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_ELEMENTAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_EQUITY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_EQUITY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_ESSENTIAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_ESSENTIAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_EXCEL16__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_EXCEL16__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_EXECUTIVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_EXECUTIVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_EXHIBIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_EXHIBIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_EXPO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_EXPO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_FACET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_FACET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_FEATHERED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_FEATHERED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_FLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_FLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_FOCUS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_FOCUS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_FOLIO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_FOLIO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_FORMAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_FORMAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_FORTE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_FORTE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_FOUNDRY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_FOUNDRY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_FRAME6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_FRAME6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_GALLERY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_GALLERY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_GENESIS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_GENESIS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_GRAYSCALE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_GRAYSCALE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_GREEN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_GREEN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_GREEN_YELLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_GREEN_YELLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_GRID6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_GRID6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_HABITAT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_HABITAT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_HARDCOVER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_HARDCOVER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_HEADLINES6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_HEADLINES6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_HORIZON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_HORIZON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_INFUSION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_INFUSION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_INKWELL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_INKWELL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_INSPIRATION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_INSPIRATION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_INTEGRAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_INTEGRAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_ION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_ION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_ION_BOARDROOM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_ION_BOARDROOM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_KILTER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_KILTER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_MADISON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_MADISON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_MAIN_EVENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_MAIN_EVENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_MARQUEE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_MARQUEE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_MEDIAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_MEDIAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_MESH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_MESH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_METAIL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_METAIL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_METRO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_METRO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_METROPOLITAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_METROPOLITAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_MODULE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_MODULE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_NEWS_PRINT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_NEWS_PRINT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_OFFICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_OFFICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_OFFICE2007_2010_6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_OFFICE2007_2010_6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_OPULENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_OPULENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_ORANGE_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_ORANGE_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_ORBIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_ORBIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_ORGANIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_ORGANIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_ORIEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_ORIEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_ORIGIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_ORIGIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_PAPER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_PAPER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_PARALLAX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_PARALLAX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_PARCEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_PARCEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_PERCEPTION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_PERCEPTION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_PERSPECTIVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_PERSPECTIVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_PIXEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_PIXEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_PLAZA6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_PLAZA6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_PRECEDENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_PRECEDENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_PUSHPIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_PUSHPIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_QUOTABLE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_QUOTABLE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_RED_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_RED_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_RED_VIOLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_RED_VIOLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_RETROSPECT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_RETROSPECT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_REVOLUTION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_REVOLUTION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_SADDLE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_SADDLE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_SAVON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_SAVON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_SKETCHBOOK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_SKETCHBOOK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_SKY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_SKY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_SLATE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_SLATE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_SLICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_SLICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_SLIPSTREAM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_SLIPSTREAM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_SOHO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_SOHO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_SOLSTICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_SOLSTICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_SPECTRUM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_SPECTRUM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_STORY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_STORY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_STUDIO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_STUDIO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_SUMMER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_SUMMER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_TECHNIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_TECHNIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_THATCH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_THATCH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_TRADITION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_TRADITION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_TRAVELOGUE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_TRAVELOGUE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_TREK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_TREK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_TWILIGHT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_TWILIGHT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_URBAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_URBAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_URBAN_POP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_URBAN_POP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_VAPOR_TRAIL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_VAPOR_TRAIL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_VENTURE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_VENTURE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_VERVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_VERVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_VIEW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_VIEW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_VIOLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_VIOLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_VIOLET_II6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_VIOLET_II6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_WAVEFORM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_WAVEFORM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_WISP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_WISP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_WOOD_TYPE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_WOOD_TYPE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_YELLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_YELLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 /** @return {!OfficeScheme} */
 static get f_YELLOW_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme() {
  return (OfficeScheme.$clinit(), OfficeScheme.$static_YELLOW_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme);
 }
 
 static $clinit() {
  OfficeScheme.$clinit = () =>{};
  OfficeScheme.$loadModules();
  Enum.$clinit();
  IsEnumeratedScheme.$clinit();
  OfficeScheme.$static_ADJACENCY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ADJACENCY6"), OfficeScheme.$ordinal_ADJACENCY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Adjacency6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_A9A57C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9CBEBD__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D2CB6C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_95A39D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C89F5D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B1A089__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_ADVANTAGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ADVANTAGE6"), OfficeScheme.$ordinal_ADVANTAGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Advantage6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_663366__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_330F42__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_666699__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_999966__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F7901E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A3A101__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_ANGLES6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ANGLES6"), OfficeScheme.$ordinal_ANGLES6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Angles6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_797B7E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F96A1B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_08A1D9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7C984A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C2AD8D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_506E94__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_APEX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("APEX6"), OfficeScheme.$ordinal_APEX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Apex6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_CEB966__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9CB084__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_6BB1C9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_6585CF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7E6BC9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A379BB__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_APOTHECARY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("APOTHECARY6"), OfficeScheme.$ordinal_APOTHECARY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Apothecary6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_93A299__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_CF543F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B5AE53__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_848058__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E8B54D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_786C71__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_ASPECT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ASPECT6"), OfficeScheme.$ordinal_ASPECT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Aspect6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_F07F09__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9F2936__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_1B587C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4E8542__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_604878__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C19859__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_ATLAS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ATLAS6"), OfficeScheme.$ordinal_ATLAS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Atlas6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_F81B02__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FC7715__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_AFBF41__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_50C49F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_3B95C4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B560D4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_AUSTIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("AUSTIN6"), OfficeScheme.$ordinal_AUSTIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Austin6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_94C600__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_71685A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FF6700__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_909465__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_956B43__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FEA022__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_BADGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("BADGE6"), OfficeScheme.$ordinal_BADGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Badge6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_F8B323__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_656A59__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_46B2B5__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8CAA7E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D36F68__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_826276__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_BANDED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("BANDED6"), OfficeScheme.$ordinal_BANDED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Banded6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_FFC000__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A5D028__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_08CC78__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F24099__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_828288__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F56617__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_BASIS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("BASIS6"), OfficeScheme.$ordinal_BASIS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Basis6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_F09415__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C1B56B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4BAF73__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5AA6C0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D17DF9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FA7E5C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_BERLIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("BERLIN6"), OfficeScheme.$ordinal_BERLIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Berlin6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_A6B727__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DF5327__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FE9E00__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_418AB3__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D7D447__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_818183__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_BLACK_TIE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("BLACK_TIE6"), OfficeScheme.$ordinal_BLACK_TIE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "BlackTie6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_6F6F74__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A7B789__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_BEAE98__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_92A9B9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9C8265__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8D6974__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_BLUE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("BLUE6"), OfficeScheme.$ordinal_BLUE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Blue6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_0F6FC6__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_009DD9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_0BD0D9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_10CF9B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7CCA62__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A5C249__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_BLUE_GREEN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("BLUE_GREEN6"), OfficeScheme.$ordinal_BLUE_GREEN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "BlueGreen6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_3494BA__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_58B6C0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_75BDA7__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7A8C8E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_84ACB6__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_2683C6__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_BLUE_II6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("BLUE_II6"), OfficeScheme.$ordinal_BLUE_II6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "BlueII6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_1CADE4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_2683C6__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_27CED7__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_42BA97__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_3E8853__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_62A39F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_BLUE_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("BLUE_RED6"), OfficeScheme.$ordinal_BLUE_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "BlueRed6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_4A66AC__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_629DD1__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_297FD5__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7F8FA9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5AA2AE__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9D90A0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_BLUE_WARM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("BLUE_WARM6"), OfficeScheme.$ordinal_BLUE_WARM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "BlueWarm6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_4A66AC__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_629DD1__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_297FD5__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7F8FA9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5AA2AE__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9D90A0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_BREEZE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("BREEZE6"), OfficeScheme.$ordinal_BREEZE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Breeze6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_2C7C9F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_244A58__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E2751D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FFB400__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7EB606__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C00000__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_CAPITAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("CAPITAL6"), OfficeScheme.$ordinal_CAPITAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Capital6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_4B5A60__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9C5238__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_504539__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C1AD79__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_667559__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_BAD6AD__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_CELESTIAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("CELESTIAL6"), OfficeScheme.$ordinal_CELESTIAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Celestial6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_AC3EC1__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_477BD1__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_46B298__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_90BA4C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DD9D31__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E25247__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_CIRCUIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("CIRCUIT6"), OfficeScheme.$ordinal_CIRCUIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Circuit6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_9ACD4C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FAA93A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D35940__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B258D3__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_63A0CC__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8AC4A7__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_CIVIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("CIVIC6"), OfficeScheme.$ordinal_CIVIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Civic6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_D16349__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_CCB400__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8CADAE__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8C7B70__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8FB08C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D19049__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_CLARITY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("CLARITY6"), OfficeScheme.$ordinal_CLARITY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Clarity6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_93A299__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_AD8F67__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_726056__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4C5A6A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_808DA0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_79463D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_CODEX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("CODEX6"), OfficeScheme.$ordinal_CODEX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Codex6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_990000__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_EFAB16__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_78AC35__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_35ACA2__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4083CF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_0D335E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_COMPOSITE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("COMPOSITE6"), OfficeScheme.$ordinal_COMPOSITE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Composite6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_98C723__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_59B0B9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DEAE00__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B77BB4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E0773C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A98D63__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_CONCOURSE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("CONCOURSE6"), OfficeScheme.$ordinal_CONCOURSE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Concourse6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_2DA2BF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DA1F28__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_EB641B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_39639D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_474B78__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7D3C4A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_COUTURE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("COUTURE6"), OfficeScheme.$ordinal_COUTURE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Couture6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_9E8E5C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A09781__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_85776D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_AEAFA9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8D878B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_6B6149__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_CROP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("CROP6"), OfficeScheme.$ordinal_CROP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Crop6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_8C8D86__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E6C069__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_897B61__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8DAB8E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_77A2BB__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E28394__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_DAMASK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("DAMASK6"), OfficeScheme.$ordinal_DAMASK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Damask6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_9EC544__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_50BEA3__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4A9CCC__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9A66CA__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C54F71__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DE9C3C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_DEPTH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("DEPTH6"), OfficeScheme.$ordinal_DEPTH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Depth6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_41AEBD__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_97E9D5__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A2CF49__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_608F3D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F4DE3A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FCB11C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_DIVIDEND6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("DIVIDEND6"), OfficeScheme.$ordinal_DIVIDEND6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Dividend6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_4D1434__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_903163__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B2324B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_969FA7__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_66B1CE__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_40619D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_DROPLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("DROPLET6"), OfficeScheme.$ordinal_DROPLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Droplet6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_2FA3EE__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4BCAAD__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_86C157__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D99C3F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_CE6633__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A35DD1__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_ELEMENTAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ELEMENTAL6"), OfficeScheme.$ordinal_ELEMENTAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Elemental6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_629DD1__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_297FD5__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7F8FA9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4A66AC__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5AA2AE__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9D90A0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_EQUITY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("EQUITY6"), OfficeScheme.$ordinal_EQUITY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Equity6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_D34817__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9B2D1F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A28E6A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_956251__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_918485__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_855D5D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_ESSENTIAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ESSENTIAL6"), OfficeScheme.$ordinal_ESSENTIAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Essential6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_7A7A7A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F5C201__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_526DB0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_989AAC__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DC5924__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B4B392__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_EXCEL16__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("EXCEL16"), OfficeScheme.$ordinal_EXCEL16__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Excel16", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_9999FF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_993366__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FFFFCC__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_CCFFFF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_660066__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FF8080__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_0066CC__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_CCCCFF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_000080__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FF00FF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FFFF00__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_0000FF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_800080__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_800000__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_008080__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_0000FF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_EXECUTIVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("EXECUTIVE6"), OfficeScheme.$ordinal_EXECUTIVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Executive6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_6076B4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9C5252__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E68422__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_846648__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_63891F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_758085__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_EXHIBIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("EXHIBIT6"), OfficeScheme.$ordinal_EXHIBIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Exhibit6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_3399FF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_69FFFF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_CCFF33__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_3333FF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9933FF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FF33FF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_EXPO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("EXPO6"), OfficeScheme.$ordinal_EXPO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Expo6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_FBC01E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_EFE1A2__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FA8716__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_BE0204__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_640F10__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7E13E3__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_FACET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("FACET6"), OfficeScheme.$ordinal_FACET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Facet6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_90C226__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_54A021__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E6B91E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E76618__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C42F1A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_918655__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_FEATHERED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("FEATHERED6"), OfficeScheme.$ordinal_FEATHERED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Feathered6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_606372__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_79A8A4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B2AD8F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_AD8082__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DEC18C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_92A185__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_FLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("FLOW6"), OfficeScheme.$ordinal_FLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Flow6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_0F6FC6__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_009DD9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_0BD0D9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_10CF9B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7CCA62__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A5C249__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_FOCUS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("FOCUS6"), OfficeScheme.$ordinal_FOCUS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Focus6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_FFB91D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F97817__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_6DE304__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FF0000__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_732BEA__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C913AD__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_FOLIO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("FOLIO6"), OfficeScheme.$ordinal_FOLIO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Folio6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_294171__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_748CBC__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8E887C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_834736__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5A1705__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A0A16A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_FORMAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("FORMAL6"), OfficeScheme.$ordinal_FORMAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Formal6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_907F76__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A46645__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_CD9C47__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9A92CD__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7D639B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_733678__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_FORTE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("FORTE6"), OfficeScheme.$ordinal_FORTE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Forte6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_C70F0C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DD6B0D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FAA700__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_93E50D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_17C7BA__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_0A96E4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_FOUNDRY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("FOUNDRY6"), OfficeScheme.$ordinal_FOUNDRY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Foundry6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_72A376__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B0CCB0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A8CDD7__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C0BEAF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_CEC597__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E8B7B7__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_FRAME6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("FRAME6"), OfficeScheme.$ordinal_FRAME6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Frame6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_40BAD2__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FAB900__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_90BB23__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_EE7008__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_1AB39F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D5393D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_GALLERY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("GALLERY6"), OfficeScheme.$ordinal_GALLERY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Gallery6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_B71E42__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DE478E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_BC72F0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_795FAF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_586EA6__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_6892A0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_GENESIS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("GENESIS6"), OfficeScheme.$ordinal_GENESIS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Genesis6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_80B606__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E29F1D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_2397E2__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_35ACA2__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5430BB__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8D34E0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_GRAYSCALE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("GRAYSCALE6"), OfficeScheme.$ordinal_GRAYSCALE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Grayscale6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_DDDDDD__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B2B2B2__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_969696__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_808080__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5F5F5F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4D4D4D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_GREEN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("GREEN6"), OfficeScheme.$ordinal_GREEN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Green6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_549E39__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8AB833__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C0CF3A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_029676__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4AB5C4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_0989B1__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_GREEN_YELLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("GREEN_YELLOW6"), OfficeScheme.$ordinal_GREEN_YELLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "GreenYellow6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_99CB38__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_63A537__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_37A76F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_44C1A3__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4EB3CF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_51C3F9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_GRID6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("GRID6"), OfficeScheme.$ordinal_GRID6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Grid6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_C66951__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_BF974D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_928B70__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_87706B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_94734E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_6F777D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_HABITAT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("HABITAT6"), OfficeScheme.$ordinal_HABITAT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Habitat6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_F8C000__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F88600__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F83500__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8B723D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_818B3D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_586215__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_HARDCOVER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("HARDCOVER6"), OfficeScheme.$ordinal_HARDCOVER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Hardcover6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_873624__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D6862D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D0BE40__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_877F6C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_972109__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_AEB795__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_HEADLINES6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("HEADLINES6"), OfficeScheme.$ordinal_HEADLINES6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Headlines6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_439EB7__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E28B55__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DCB64D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4CA198__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_835B82__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_645135__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_HORIZON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("HORIZON6"), OfficeScheme.$ordinal_HORIZON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Horizon6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_7E97AD__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_CC8E60__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7A6A60__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B4936D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_67787B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9D936F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_INFUSION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("INFUSION6"), OfficeScheme.$ordinal_INFUSION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Infusion6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_8C73D0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C2E8C4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C5A6E8__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B45EC7__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9FDAFB__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_95C5B0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_INKWELL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("INKWELL6"), OfficeScheme.$ordinal_INKWELL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Inkwell6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_860908__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4A0505__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7A500A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C47810__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_827752__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B5BB83__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_INSPIRATION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("INSPIRATION6"), OfficeScheme.$ordinal_INSPIRATION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Inspiration6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_749805__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_BACC82__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_6E9EC2__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_2046A5__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5039C6__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7411D0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_INTEGRAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("INTEGRAL6"), OfficeScheme.$ordinal_INTEGRAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Integral6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_1CADE4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_2683C6__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_27CED7__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_42BA97__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_3E8853__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_62A39F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_ION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ION6"), OfficeScheme.$ordinal_ION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Ion6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_B01513__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_EA6312__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E6B729__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_6AAC90__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5F9C9D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9E5E9B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_ION_BOARDROOM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ION_BOARDROOM6"), OfficeScheme.$ordinal_ION_BOARDROOM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "IonBoardroom6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_B31166__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E33D6F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E45F3C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E9943A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9B6BF2__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D53DD0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_KILTER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("KILTER6"), OfficeScheme.$ordinal_KILTER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Kilter6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_76C5EF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FEA022__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FF6700__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_70A525__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A5D848__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_20768C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_MADISON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("MADISON6"), OfficeScheme.$ordinal_MADISON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Madison6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_A1D68B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5EC795__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4DADCF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_CDB756__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E29C36__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8EC0C1__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_MAIN_EVENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("MAIN_EVENT6"), OfficeScheme.$ordinal_MAIN_EVENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "MainEvent6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_B80E0F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A6987D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7F9A71__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_64969F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9B75B2__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_80737A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_MARQUEE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("MARQUEE6"), OfficeScheme.$ordinal_MARQUEE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Marquee6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_418AB3__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A6B727__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F69200__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_838383__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FEC306__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DF5327__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_MEDIAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("MEDIAN6"), OfficeScheme.$ordinal_MEDIAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Median6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_94B6D2__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DD8047__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A5AB81__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D8B25C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7BA79D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_968C8C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_MESH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("MESH6"), OfficeScheme.$ordinal_MESH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Mesh6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_6F6F6F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_BFBFA5__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DCD084__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E7BF5F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E9A039__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_CF7133__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_METAIL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("METAIL6"), OfficeScheme.$ordinal_METAIL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Metail6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_6283AD__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_324966__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5B9EA4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_1D5B57__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_1B4430__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_2F3C35__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_METRO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("METRO6"), OfficeScheme.$ordinal_METRO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Metro6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_7FD13B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_EA157A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FEB80A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_00ADDC__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_738AC8__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_1AB39F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_METROPOLITAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("METROPOLITAN6"), OfficeScheme.$ordinal_METROPOLITAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Metropolitan6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_50B4C8__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A8B97F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9B9256__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_657689__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7A855D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_84AC9D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_MODULE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("MODULE6"), OfficeScheme.$ordinal_MODULE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Module6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_F0AD00__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_60B5CC__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E66C7D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_6BB76D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E88651__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C64847__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_NEWS_PRINT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("NEWS_PRINT6"), OfficeScheme.$ordinal_NEWS_PRINT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "NewsPrint6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_AD0101__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_726056__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_AC956E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_808DA9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_424E5B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_730E00__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_OFFICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("OFFICE6"), OfficeScheme.$ordinal_OFFICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Office6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_5B9BD5__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_ED7D31__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A5A5A5__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FFC000__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4472C4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_70AD47__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_OFFICE2007_2010_6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("OFFICE2007_2010_6"), OfficeScheme.$ordinal_OFFICE2007_2010_6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Office2007_2010_6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_4F81BD__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C0504D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9BBB59__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8064A2__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4BACC6__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F79646__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_OPULENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("OPULENT6"), OfficeScheme.$ordinal_OPULENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Opulent6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_B83D68__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_AC66BB__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DE6C36__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F9B639__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_CF6DA4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FA8D3D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ORANGE6"), OfficeScheme.$ordinal_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Orange6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_E48312__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_BD582C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_865640__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9B8357__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C2BC80__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_94A088__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_ORANGE_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ORANGE_RED6"), OfficeScheme.$ordinal_ORANGE_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "OrangeRed6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_D34817__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9B2D1F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A28E6A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_956251__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_918485__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_855D5D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_ORBIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ORBIT6"), OfficeScheme.$ordinal_ORBIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Orbit6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_F2D908__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9DE61E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_0D8BE6__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C61B1B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E26F08__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8D35D1__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_ORGANIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ORGANIC6"), OfficeScheme.$ordinal_ORGANIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Organic6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_83992A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_3C9770__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_44709D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A23C33__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D97828__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DEB340__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_ORIEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ORIEL6"), OfficeScheme.$ordinal_ORIEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Oriel6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_FE8637__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7598D9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B32C16__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F5CD2D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_AEBAD5__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_777C84__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_ORIGIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ORIGIN6"), OfficeScheme.$ordinal_ORIGIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Origin6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_727CA3__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9FB8CD__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D2DA7A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FADA7A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B88472__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8E736A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_PAPER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("PAPER6"), OfficeScheme.$ordinal_PAPER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Paper6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_A5B592__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F3A447__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E7BC29__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D092A7__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9C85C0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_809EC2__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_PARALLAX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("PARALLAX6"), OfficeScheme.$ordinal_PARALLAX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Parallax6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_30ACEC__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_80C34F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E29D3E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D64A3B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D64787__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A666E1__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_PARCEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("PARCEL6"), OfficeScheme.$ordinal_PARCEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Parcel6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_F6A21D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9BAFB5__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C96731__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9CA383__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_87795D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A0988C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_PERCEPTION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("PERCEPTION6"), OfficeScheme.$ordinal_PERCEPTION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Perception6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_A2C816__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E07602__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E4C402__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7DC1EF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_21449B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A2B170__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_PERSPECTIVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("PERSPECTIVE6"), OfficeScheme.$ordinal_PERSPECTIVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Perspective6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_838D9B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D2610C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_80716A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_94147C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5D5AD2__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_6F6C7D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_PIXEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("PIXEL6"), OfficeScheme.$ordinal_PIXEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Pixel6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_FF7F01__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F1B015__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FBEC85__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D2C2F1__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DA5AF4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9D09D1__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_PLAZA6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("PLAZA6"), OfficeScheme.$ordinal_PLAZA6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Plaza6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_990000__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_580101__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E94A00__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_EB8F00__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A4A4A4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_666666__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_PRECEDENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("PRECEDENT6"), OfficeScheme.$ordinal_PRECEDENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Precedent6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_993232__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9B6C34__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_736C5D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C9972B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C95F2B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8F7A05__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_PUSHPIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("PUSHPIN6"), OfficeScheme.$ordinal_PUSHPIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Pushpin6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_FDA023__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_AA2B1E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_71685C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_64A73B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_EB5605__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B9CA1A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_QUOTABLE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("QUOTABLE6"), OfficeScheme.$ordinal_QUOTABLE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Quotable6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_00C6BB__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_6FEBA0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B6DF5E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_EFB251__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_EF755F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_ED515C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("RED6"), OfficeScheme.$ordinal_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Red6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_A5300F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D55816__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E19825__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B19C7D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7F5F52__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B27D49__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_RED_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("RED_ORANGE6"), OfficeScheme.$ordinal_RED_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "RedOrange6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_E84C22__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FFBD47__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B64926__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FF8427__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_CC9900__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B22600__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_RED_VIOLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("RED_VIOLET6"), OfficeScheme.$ordinal_RED_VIOLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "RedViolet6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_E32D91__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C830CC__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4EA6DC__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4775E7__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8971E1__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D54773__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_RETROSPECT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("RETROSPECT6"), OfficeScheme.$ordinal_RETROSPECT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Retrospect6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_E48312__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_BD582C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_865640__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9B8357__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C2BC80__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_94A088__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_REVOLUTION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("REVOLUTION6"), OfficeScheme.$ordinal_REVOLUTION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Revolution6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_0C5986__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DDF53D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_508709__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_BF5E00__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9C0001__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_660075__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_SADDLE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("SADDLE6"), OfficeScheme.$ordinal_SADDLE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Saddle6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_C6B178__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9C5B14__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_71B2BC__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_78AA5D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_867099__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4C6F75__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_SAVON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("SAVON6"), OfficeScheme.$ordinal_SAVON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Savon6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_1CADE4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_2683C6__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_27CED7__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_42BA97__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_3E8853__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_62A39F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_SKETCHBOOK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("SKETCHBOOK6"), OfficeScheme.$ordinal_SKETCHBOOK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Sketchbook6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_A63212__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E68230__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9BB05E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_6B9BC7__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4E66B2__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8976AC__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_SKY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("SKY6"), OfficeScheme.$ordinal_SKY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Sky6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_073779__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8FD9FB__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FFCC00__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_EB6615__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C76402__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B523B4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_SLATE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("SLATE6"), OfficeScheme.$ordinal_SLATE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Slate6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_BC451B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D3BA68__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_BB8640__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_AD9277__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A55A43__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_AD9D7B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_SLICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("SLICE6"), OfficeScheme.$ordinal_SLICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Slice6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_052F61__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A50E82__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_14967C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_6A9E1F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E87D37__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C62324__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_SLIPSTREAM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("SLIPSTREAM6"), OfficeScheme.$ordinal_SLIPSTREAM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Slipstream6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_4E67C8__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5ECCF3__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A7EA52__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5DCEAF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FF8021__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F14124__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_SOHO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("SOHO6"), OfficeScheme.$ordinal_SOHO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "SOHO6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_61625E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_964D2C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_66553E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_848058__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_AFA14B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_AD7D4D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_SOLSTICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("SOLSTICE6"), OfficeScheme.$ordinal_SOLSTICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Solstice6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_3891A7__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FEB80A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C32D2E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_84AA33__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_964305__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_475A8D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_SPECTRUM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("SPECTRUM6"), OfficeScheme.$ordinal_SPECTRUM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Spectrum6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_990000__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FF6600__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FFBA00__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_99CC00__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_528A02__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_333333__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_STORY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("STORY6"), OfficeScheme.$ordinal_STORY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Story6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_1D86CD__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_732E9A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B50B1B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E8950E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_55992B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_2C9C89__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_STUDIO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("STUDIO6"), OfficeScheme.$ordinal_STUDIO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Studio6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_F7901E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FEC60B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9FE62F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4EA5D1__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_1C4596__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_542D90__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_SUMMER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("SUMMER6"), OfficeScheme.$ordinal_SUMMER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Summer6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_51A6C2__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_51C2A9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7EC251__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E1DC53__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B54721__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A16BB1__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_TECHNIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("TECHNIC6"), OfficeScheme.$ordinal_TECHNIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Technic6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_6EA0B0__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_CCAF0A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8D89A4__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_748560__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9E9273__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7E848D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_THATCH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("THATCH6"), OfficeScheme.$ordinal_THATCH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Thatch6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_759AA5__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_CFC60D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_99987F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_90AC97__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FFAD1C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B9AB6F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_TRADITION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("TRADITION6"), OfficeScheme.$ordinal_TRADITION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Tradition6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_6B4A0B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_790A14__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_908342__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_423E5C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_641345__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_748A2F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_TRAVELOGUE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("TRAVELOGUE6"), OfficeScheme.$ordinal_TRAVELOGUE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Travelogue6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_B74D21__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A32323__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4576A3__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_615D9A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_67924B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_BF7B1B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_TREK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("TREK6"), OfficeScheme.$ordinal_TREK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Trek6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_F0A22E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A5644E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B58B80__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C3986D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A19574__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C17529__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_TWILIGHT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("TWILIGHT6"), OfficeScheme.$ordinal_TWILIGHT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Twilight6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_E8BC4A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_83C1C6__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E78D35__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_909CE1__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_839C41__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_CC5439__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_URBAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("URBAN6"), OfficeScheme.$ordinal_URBAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Urban6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_53548A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_438086__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A04DA3__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C4652D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8B5D3D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5C92B5__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_URBAN_POP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("URBAN_POP6"), OfficeScheme.$ordinal_URBAN_POP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "UrbanPop6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_86CE24__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_00A2E6__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FAC810__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_7D8F8C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D06B20__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_958B8B__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_VAPOR_TRAIL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("VAPOR_TRAIL6"), OfficeScheme.$ordinal_VAPOR_TRAIL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "VaporTrail6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_DF2E28__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_FE801A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E9BF35__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_81BB42__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_32C7A9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4A9BDC__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_VENTURE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("VENTURE6"), OfficeScheme.$ordinal_VENTURE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Venture6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_9EB060__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_D09A08__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F2EC86__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_824F1C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_511818__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_553876__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_VERVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("VERVE6"), OfficeScheme.$ordinal_VERVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Verve6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_FF388C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E40059__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9C007F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_68007F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_005BD3__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_00349E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_VIEW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("VIEW6"), OfficeScheme.$ordinal_VIEW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "View6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_6F6F74__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_92A9B9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A7B789__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B9A489__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8D6374__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9B7362__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_VIOLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("VIOLET6"), OfficeScheme.$ordinal_VIOLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Violet6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_AD84C6__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_8784C7__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5D739A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_6997AF__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_84ACB6__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_6F8183__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_VIOLET_II6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("VIOLET_II6"), OfficeScheme.$ordinal_VIOLET_II6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "VioletII6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_92278F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9B57D3__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_755DD9__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_665EB8__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_45A5ED__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5982DB__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_WAVEFORM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("WAVEFORM6"), OfficeScheme.$ordinal_WAVEFORM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Waveform6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_31B6FD__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_4584D3__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_5BD078__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A5D028__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F5C040__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_05E0DB__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_WISP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("WISP6"), OfficeScheme.$ordinal_WISP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Wisp6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_A53010__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_DE7E18__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9F8351__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_728653__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_92AA4C__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_6AAC91__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_WOOD_TYPE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("WOOD_TYPE6"), OfficeScheme.$ordinal_WOOD_TYPE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "WoodType6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_D34817__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9B2D1F__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A28E6A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_956251__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_918485__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_855D5D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_YELLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("YELLOW6"), OfficeScheme.$ordinal_YELLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "Yellow6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_FFCA08__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_F8931D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_CE8D3E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_EC7016__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_E64823__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_9C6A6A__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.$static_YELLOW_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = OfficeScheme.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("YELLOW_ORANGE6"), OfficeScheme.$ordinal_YELLOW_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme, "YellowOrange6", /**@type {!Array<?string>}*/ ($Arrays.$init([SchemeCostants.f_COLOR_F0A22E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A5644E__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_B58B80__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C3986D__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_A19574__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants, SchemeCostants.f_COLOR_C17529__org_pepstock_charba_client_impl_plugins_enums_SchemeCostants], j_l_String)));
  OfficeScheme.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OfficeScheme;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  EnumeratedScheme = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.EnumeratedScheme$impl');
  SchemeCostants = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.SchemeCostants$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!OfficeScheme}*/
OfficeScheme.$static_ADJACENCY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_ADVANTAGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_ANGLES6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_APEX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_APOTHECARY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_ASPECT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_ATLAS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_AUSTIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_BADGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_BANDED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_BASIS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_BERLIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_BLACK_TIE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_BLUE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_BLUE_GREEN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_BLUE_II6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_BLUE_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_BLUE_WARM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_BREEZE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_CAPITAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_CELESTIAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_CIRCUIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_CIVIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_CLARITY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_CODEX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_COMPOSITE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_CONCOURSE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_COUTURE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_CROP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_DAMASK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_DEPTH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_DIVIDEND6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_DROPLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_ELEMENTAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_EQUITY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_ESSENTIAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_EXCEL16__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_EXECUTIVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_EXHIBIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_EXPO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_FACET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_FEATHERED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_FLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_FOCUS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_FOLIO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_FORMAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_FORTE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_FOUNDRY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_FRAME6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_GALLERY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_GENESIS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_GRAYSCALE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_GREEN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_GREEN_YELLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_GRID6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_HABITAT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_HARDCOVER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_HEADLINES6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_HORIZON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_INFUSION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_INKWELL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_INSPIRATION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_INTEGRAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_ION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_ION_BOARDROOM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_KILTER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_MADISON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_MAIN_EVENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_MARQUEE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_MEDIAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_MESH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_METAIL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_METRO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_METROPOLITAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_MODULE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_NEWS_PRINT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_OFFICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_OFFICE2007_2010_6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_OPULENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_ORANGE_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_ORBIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_ORGANIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_ORIEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_ORIGIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_PAPER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_PARALLAX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_PARCEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_PERCEPTION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_PERSPECTIVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_PIXEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_PLAZA6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_PRECEDENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_PUSHPIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_QUOTABLE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_RED_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_RED_VIOLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_RETROSPECT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_REVOLUTION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_SADDLE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_SAVON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_SKETCHBOOK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_SKY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_SLATE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_SLICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_SLIPSTREAM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_SOHO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_SOLSTICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_SPECTRUM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_STORY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_STUDIO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_SUMMER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_TECHNIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_THATCH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_TRADITION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_TRAVELOGUE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_TREK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_TWILIGHT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_URBAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_URBAN_POP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_VAPOR_TRAIL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_VENTURE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_VERVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_VIEW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_VIOLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_VIOLET_II6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_WAVEFORM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_WISP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_WOOD_TYPE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_YELLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@private {!OfficeScheme}*/
OfficeScheme.$static_YELLOW_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme;
/**@const {?string}*/
OfficeScheme.f_CATEGORY__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme_ = "office";
/**@type {Map<?string, !OfficeScheme>}*/
OfficeScheme.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme_;
/**@const {number}*/
OfficeScheme.$ordinal_ADJACENCY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 0;
/**@const {number}*/
OfficeScheme.$ordinal_ADVANTAGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 1;
/**@const {number}*/
OfficeScheme.$ordinal_ANGLES6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 2;
/**@const {number}*/
OfficeScheme.$ordinal_APEX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 3;
/**@const {number}*/
OfficeScheme.$ordinal_APOTHECARY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 4;
/**@const {number}*/
OfficeScheme.$ordinal_ASPECT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 5;
/**@const {number}*/
OfficeScheme.$ordinal_ATLAS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 6;
/**@const {number}*/
OfficeScheme.$ordinal_AUSTIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 7;
/**@const {number}*/
OfficeScheme.$ordinal_BADGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 8;
/**@const {number}*/
OfficeScheme.$ordinal_BANDED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 9;
/**@const {number}*/
OfficeScheme.$ordinal_BASIS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 10;
/**@const {number}*/
OfficeScheme.$ordinal_BERLIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 11;
/**@const {number}*/
OfficeScheme.$ordinal_BLACK_TIE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 12;
/**@const {number}*/
OfficeScheme.$ordinal_BLUE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 13;
/**@const {number}*/
OfficeScheme.$ordinal_BLUE_GREEN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 14;
/**@const {number}*/
OfficeScheme.$ordinal_BLUE_II6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 15;
/**@const {number}*/
OfficeScheme.$ordinal_BLUE_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 16;
/**@const {number}*/
OfficeScheme.$ordinal_BLUE_WARM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 17;
/**@const {number}*/
OfficeScheme.$ordinal_BREEZE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 18;
/**@const {number}*/
OfficeScheme.$ordinal_CAPITAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 19;
/**@const {number}*/
OfficeScheme.$ordinal_CELESTIAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 20;
/**@const {number}*/
OfficeScheme.$ordinal_CIRCUIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 21;
/**@const {number}*/
OfficeScheme.$ordinal_CIVIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 22;
/**@const {number}*/
OfficeScheme.$ordinal_CLARITY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 23;
/**@const {number}*/
OfficeScheme.$ordinal_CODEX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 24;
/**@const {number}*/
OfficeScheme.$ordinal_COMPOSITE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 25;
/**@const {number}*/
OfficeScheme.$ordinal_CONCOURSE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 26;
/**@const {number}*/
OfficeScheme.$ordinal_COUTURE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 27;
/**@const {number}*/
OfficeScheme.$ordinal_CROP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 28;
/**@const {number}*/
OfficeScheme.$ordinal_DAMASK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 29;
/**@const {number}*/
OfficeScheme.$ordinal_DEPTH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 30;
/**@const {number}*/
OfficeScheme.$ordinal_DIVIDEND6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 31;
/**@const {number}*/
OfficeScheme.$ordinal_DROPLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 32;
/**@const {number}*/
OfficeScheme.$ordinal_ELEMENTAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 33;
/**@const {number}*/
OfficeScheme.$ordinal_EQUITY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 34;
/**@const {number}*/
OfficeScheme.$ordinal_ESSENTIAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 35;
/**@const {number}*/
OfficeScheme.$ordinal_EXCEL16__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 36;
/**@const {number}*/
OfficeScheme.$ordinal_EXECUTIVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 37;
/**@const {number}*/
OfficeScheme.$ordinal_EXHIBIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 38;
/**@const {number}*/
OfficeScheme.$ordinal_EXPO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 39;
/**@const {number}*/
OfficeScheme.$ordinal_FACET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 40;
/**@const {number}*/
OfficeScheme.$ordinal_FEATHERED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 41;
/**@const {number}*/
OfficeScheme.$ordinal_FLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 42;
/**@const {number}*/
OfficeScheme.$ordinal_FOCUS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 43;
/**@const {number}*/
OfficeScheme.$ordinal_FOLIO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 44;
/**@const {number}*/
OfficeScheme.$ordinal_FORMAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 45;
/**@const {number}*/
OfficeScheme.$ordinal_FORTE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 46;
/**@const {number}*/
OfficeScheme.$ordinal_FOUNDRY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 47;
/**@const {number}*/
OfficeScheme.$ordinal_FRAME6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 48;
/**@const {number}*/
OfficeScheme.$ordinal_GALLERY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 49;
/**@const {number}*/
OfficeScheme.$ordinal_GENESIS6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 50;
/**@const {number}*/
OfficeScheme.$ordinal_GRAYSCALE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 51;
/**@const {number}*/
OfficeScheme.$ordinal_GREEN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 52;
/**@const {number}*/
OfficeScheme.$ordinal_GREEN_YELLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 53;
/**@const {number}*/
OfficeScheme.$ordinal_GRID6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 54;
/**@const {number}*/
OfficeScheme.$ordinal_HABITAT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 55;
/**@const {number}*/
OfficeScheme.$ordinal_HARDCOVER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 56;
/**@const {number}*/
OfficeScheme.$ordinal_HEADLINES6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 57;
/**@const {number}*/
OfficeScheme.$ordinal_HORIZON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 58;
/**@const {number}*/
OfficeScheme.$ordinal_INFUSION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 59;
/**@const {number}*/
OfficeScheme.$ordinal_INKWELL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 60;
/**@const {number}*/
OfficeScheme.$ordinal_INSPIRATION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 61;
/**@const {number}*/
OfficeScheme.$ordinal_INTEGRAL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 62;
/**@const {number}*/
OfficeScheme.$ordinal_ION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 63;
/**@const {number}*/
OfficeScheme.$ordinal_ION_BOARDROOM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 64;
/**@const {number}*/
OfficeScheme.$ordinal_KILTER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 65;
/**@const {number}*/
OfficeScheme.$ordinal_MADISON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 66;
/**@const {number}*/
OfficeScheme.$ordinal_MAIN_EVENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 67;
/**@const {number}*/
OfficeScheme.$ordinal_MARQUEE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 68;
/**@const {number}*/
OfficeScheme.$ordinal_MEDIAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 69;
/**@const {number}*/
OfficeScheme.$ordinal_MESH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 70;
/**@const {number}*/
OfficeScheme.$ordinal_METAIL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 71;
/**@const {number}*/
OfficeScheme.$ordinal_METRO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 72;
/**@const {number}*/
OfficeScheme.$ordinal_METROPOLITAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 73;
/**@const {number}*/
OfficeScheme.$ordinal_MODULE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 74;
/**@const {number}*/
OfficeScheme.$ordinal_NEWS_PRINT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 75;
/**@const {number}*/
OfficeScheme.$ordinal_OFFICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 76;
/**@const {number}*/
OfficeScheme.$ordinal_OFFICE2007_2010_6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 77;
/**@const {number}*/
OfficeScheme.$ordinal_OPULENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 78;
/**@const {number}*/
OfficeScheme.$ordinal_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 79;
/**@const {number}*/
OfficeScheme.$ordinal_ORANGE_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 80;
/**@const {number}*/
OfficeScheme.$ordinal_ORBIT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 81;
/**@const {number}*/
OfficeScheme.$ordinal_ORGANIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 82;
/**@const {number}*/
OfficeScheme.$ordinal_ORIEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 83;
/**@const {number}*/
OfficeScheme.$ordinal_ORIGIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 84;
/**@const {number}*/
OfficeScheme.$ordinal_PAPER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 85;
/**@const {number}*/
OfficeScheme.$ordinal_PARALLAX6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 86;
/**@const {number}*/
OfficeScheme.$ordinal_PARCEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 87;
/**@const {number}*/
OfficeScheme.$ordinal_PERCEPTION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 88;
/**@const {number}*/
OfficeScheme.$ordinal_PERSPECTIVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 89;
/**@const {number}*/
OfficeScheme.$ordinal_PIXEL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 90;
/**@const {number}*/
OfficeScheme.$ordinal_PLAZA6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 91;
/**@const {number}*/
OfficeScheme.$ordinal_PRECEDENT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 92;
/**@const {number}*/
OfficeScheme.$ordinal_PUSHPIN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 93;
/**@const {number}*/
OfficeScheme.$ordinal_QUOTABLE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 94;
/**@const {number}*/
OfficeScheme.$ordinal_RED6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 95;
/**@const {number}*/
OfficeScheme.$ordinal_RED_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 96;
/**@const {number}*/
OfficeScheme.$ordinal_RED_VIOLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 97;
/**@const {number}*/
OfficeScheme.$ordinal_RETROSPECT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 98;
/**@const {number}*/
OfficeScheme.$ordinal_REVOLUTION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 99;
/**@const {number}*/
OfficeScheme.$ordinal_SADDLE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 100;
/**@const {number}*/
OfficeScheme.$ordinal_SAVON6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 101;
/**@const {number}*/
OfficeScheme.$ordinal_SKETCHBOOK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 102;
/**@const {number}*/
OfficeScheme.$ordinal_SKY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 103;
/**@const {number}*/
OfficeScheme.$ordinal_SLATE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 104;
/**@const {number}*/
OfficeScheme.$ordinal_SLICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 105;
/**@const {number}*/
OfficeScheme.$ordinal_SLIPSTREAM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 106;
/**@const {number}*/
OfficeScheme.$ordinal_SOHO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 107;
/**@const {number}*/
OfficeScheme.$ordinal_SOLSTICE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 108;
/**@const {number}*/
OfficeScheme.$ordinal_SPECTRUM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 109;
/**@const {number}*/
OfficeScheme.$ordinal_STORY6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 110;
/**@const {number}*/
OfficeScheme.$ordinal_STUDIO6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 111;
/**@const {number}*/
OfficeScheme.$ordinal_SUMMER6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 112;
/**@const {number}*/
OfficeScheme.$ordinal_TECHNIC6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 113;
/**@const {number}*/
OfficeScheme.$ordinal_THATCH6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 114;
/**@const {number}*/
OfficeScheme.$ordinal_TRADITION6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 115;
/**@const {number}*/
OfficeScheme.$ordinal_TRAVELOGUE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 116;
/**@const {number}*/
OfficeScheme.$ordinal_TREK6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 117;
/**@const {number}*/
OfficeScheme.$ordinal_TWILIGHT6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 118;
/**@const {number}*/
OfficeScheme.$ordinal_URBAN6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 119;
/**@const {number}*/
OfficeScheme.$ordinal_URBAN_POP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 120;
/**@const {number}*/
OfficeScheme.$ordinal_VAPOR_TRAIL6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 121;
/**@const {number}*/
OfficeScheme.$ordinal_VENTURE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 122;
/**@const {number}*/
OfficeScheme.$ordinal_VERVE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 123;
/**@const {number}*/
OfficeScheme.$ordinal_VIEW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 124;
/**@const {number}*/
OfficeScheme.$ordinal_VIOLET6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 125;
/**@const {number}*/
OfficeScheme.$ordinal_VIOLET_II6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 126;
/**@const {number}*/
OfficeScheme.$ordinal_WAVEFORM6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 127;
/**@const {number}*/
OfficeScheme.$ordinal_WISP6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 128;
/**@const {number}*/
OfficeScheme.$ordinal_WOOD_TYPE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 129;
/**@const {number}*/
OfficeScheme.$ordinal_YELLOW6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 130;
/**@const {number}*/
OfficeScheme.$ordinal_YELLOW_ORANGE6__org_pepstock_charba_client_impl_plugins_enums_OfficeScheme = 131;
IsEnumeratedScheme.$markImplementor(OfficeScheme);
$Util.$setClassMetadataForEnum(OfficeScheme, "org.pepstock.charba.client.impl.plugins.enums.OfficeScheme");

exports = OfficeScheme;

//# sourceMappingURL=OfficeScheme.js.map
