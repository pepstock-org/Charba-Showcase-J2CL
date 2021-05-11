goog.module('org.pepstock.charba.client.colors.GoogleChartColor$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsEnumeratedColor = goog.require('org.pepstock.charba.client.colors.IsEnumeratedColor$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<GoogleChartColor>}
 * @implements {IsEnumeratedColor}
 */
class GoogleChartColor extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {IsColor}*/
  this.f_color__org_pepstock_charba_client_colors_GoogleChartColor_;
 }
 /** @return {!GoogleChartColor} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ hexValue) {
  let $instance = new GoogleChartColor();
  $instance.$ctor__org_pepstock_charba_client_colors_GoogleChartColor__java_lang_String__int__java_lang_String($name, $ordinal, hexValue);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_GoogleChartColor__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ hexValue) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_color__org_pepstock_charba_client_colors_GoogleChartColor_ = ColorBuilder.m_buildByHexValue__java_lang_String__boolean(hexValue, false);
 }
 /** @override @return {IsColor} */
 m_getColor__() {
  return this.f_color__org_pepstock_charba_client_colors_GoogleChartColor_;
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_alpha__double(/** number */ arg0) {
  return IsColor.m_alpha__$default__org_pepstock_charba_client_colors_IsColor__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_brighter__() {
  return IsColor.m_brighter__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_brighter__double(/** number */ arg0) {
  return IsColor.m_brighter__$default__org_pepstock_charba_client_colors_IsColor__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_darker__() {
  return IsColor.m_darker__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_darker__double(/** number */ arg0) {
  return IsColor.m_darker__$default__org_pepstock_charba_client_colors_IsColor__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getAlpha__() {
  return IsEnumeratedColor.m_getAlpha__$default__org_pepstock_charba_client_colors_IsEnumeratedColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBlue__() {
  return IsEnumeratedColor.m_getBlue__$default__org_pepstock_charba_client_colors_IsEnumeratedColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getGreen__() {
  return IsEnumeratedColor.m_getGreen__$default__org_pepstock_charba_client_colors_IsEnumeratedColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getRed__() {
  return IsEnumeratedColor.m_getRed__$default__org_pepstock_charba_client_colors_IsEnumeratedColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toHSL__() {
  return IsColor.m_toHSL__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toHSLA__() {
  return IsColor.m_toHSLA__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toHex__() {
  return IsColor.m_toHex__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toRGB__() {
  return IsColor.m_toRGB__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toRGBA__() {
  return IsColor.m_toRGBA__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_toRGBs__() {
  return IsColor.m_toRGBs__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 /** @return {!GoogleChartColor} */
 static m_valueOf__java_lang_String(/** string */ name) {
  GoogleChartColor.$clinit();
  if ($Equality.$same(GoogleChartColor.f_namesToValuesMap__org_pepstock_charba_client_colors_GoogleChartColor_, null)) {
   GoogleChartColor.f_namesToValuesMap__org_pepstock_charba_client_colors_GoogleChartColor_ = $Enums.createMapFromValues(GoogleChartColor.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, GoogleChartColor.f_namesToValuesMap__org_pepstock_charba_client_colors_GoogleChartColor_);
 }
 /** @return {!Array<!GoogleChartColor>} */
 static m_values__() {
  GoogleChartColor.$clinit();
  return /**@type {!Array<GoogleChartColor>}*/ ($Arrays.$init([GoogleChartColor.$static_COLOR_00__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_01__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_02__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_03__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_04__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_05__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_06__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_07__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_08__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_09__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_10__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_11__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_12__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_13__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_14__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_15__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_16__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_17__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_18__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_19__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_20__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_21__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_22__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_23__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_24__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_25__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_26__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_27__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_28__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_29__org_pepstock_charba_client_colors_GoogleChartColor, GoogleChartColor.$static_COLOR_30__org_pepstock_charba_client_colors_GoogleChartColor], GoogleChartColor));
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_00__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_00__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_01__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_01__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_02__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_02__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_03__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_03__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_04__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_04__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_05__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_05__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_06__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_06__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_07__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_07__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_08__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_08__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_09__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_09__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_10__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_10__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_11__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_11__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_12__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_12__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_13__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_13__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_14__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_14__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_15__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_15__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_16__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_16__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_17__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_17__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_18__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_18__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_19__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_19__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_20__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_20__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_21__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_21__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_22__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_22__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_23__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_23__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_24__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_24__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_25__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_25__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_26__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_26__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_27__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_27__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_28__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_28__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_29__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_29__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 /** @return {!GoogleChartColor} */
 static get f_COLOR_30__org_pepstock_charba_client_colors_GoogleChartColor() {
  return (GoogleChartColor.$clinit(), GoogleChartColor.$static_COLOR_30__org_pepstock_charba_client_colors_GoogleChartColor);
 }
 
 static $clinit() {
  GoogleChartColor.$clinit = () =>{};
  GoogleChartColor.$loadModules();
  Enum.$clinit();
  IsEnumeratedColor.$clinit();
  GoogleChartColor.$static_COLOR_00__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_00"), GoogleChartColor.$ordinal_COLOR_00__org_pepstock_charba_client_colors_GoogleChartColor, "#3366cc");
  GoogleChartColor.$static_COLOR_01__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_01"), GoogleChartColor.$ordinal_COLOR_01__org_pepstock_charba_client_colors_GoogleChartColor, "#dc3912");
  GoogleChartColor.$static_COLOR_02__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_02"), GoogleChartColor.$ordinal_COLOR_02__org_pepstock_charba_client_colors_GoogleChartColor, "#ff9900");
  GoogleChartColor.$static_COLOR_03__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_03"), GoogleChartColor.$ordinal_COLOR_03__org_pepstock_charba_client_colors_GoogleChartColor, "#109618");
  GoogleChartColor.$static_COLOR_04__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_04"), GoogleChartColor.$ordinal_COLOR_04__org_pepstock_charba_client_colors_GoogleChartColor, "#990099");
  GoogleChartColor.$static_COLOR_05__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_05"), GoogleChartColor.$ordinal_COLOR_05__org_pepstock_charba_client_colors_GoogleChartColor, "#0099c6");
  GoogleChartColor.$static_COLOR_06__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_06"), GoogleChartColor.$ordinal_COLOR_06__org_pepstock_charba_client_colors_GoogleChartColor, "#dd4477");
  GoogleChartColor.$static_COLOR_07__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_07"), GoogleChartColor.$ordinal_COLOR_07__org_pepstock_charba_client_colors_GoogleChartColor, "#66aa00");
  GoogleChartColor.$static_COLOR_08__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_08"), GoogleChartColor.$ordinal_COLOR_08__org_pepstock_charba_client_colors_GoogleChartColor, "#b82e2e");
  GoogleChartColor.$static_COLOR_09__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_09"), GoogleChartColor.$ordinal_COLOR_09__org_pepstock_charba_client_colors_GoogleChartColor, "#316395");
  GoogleChartColor.$static_COLOR_10__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_10"), GoogleChartColor.$ordinal_COLOR_10__org_pepstock_charba_client_colors_GoogleChartColor, "#994499");
  GoogleChartColor.$static_COLOR_11__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_11"), GoogleChartColor.$ordinal_COLOR_11__org_pepstock_charba_client_colors_GoogleChartColor, "#22aa99");
  GoogleChartColor.$static_COLOR_12__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_12"), GoogleChartColor.$ordinal_COLOR_12__org_pepstock_charba_client_colors_GoogleChartColor, "#aaaa11");
  GoogleChartColor.$static_COLOR_13__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_13"), GoogleChartColor.$ordinal_COLOR_13__org_pepstock_charba_client_colors_GoogleChartColor, "#6633cc");
  GoogleChartColor.$static_COLOR_14__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_14"), GoogleChartColor.$ordinal_COLOR_14__org_pepstock_charba_client_colors_GoogleChartColor, "#e67300");
  GoogleChartColor.$static_COLOR_15__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_15"), GoogleChartColor.$ordinal_COLOR_15__org_pepstock_charba_client_colors_GoogleChartColor, "#8b0707");
  GoogleChartColor.$static_COLOR_16__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_16"), GoogleChartColor.$ordinal_COLOR_16__org_pepstock_charba_client_colors_GoogleChartColor, "#651067");
  GoogleChartColor.$static_COLOR_17__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_17"), GoogleChartColor.$ordinal_COLOR_17__org_pepstock_charba_client_colors_GoogleChartColor, "#329262");
  GoogleChartColor.$static_COLOR_18__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_18"), GoogleChartColor.$ordinal_COLOR_18__org_pepstock_charba_client_colors_GoogleChartColor, "#5574a6");
  GoogleChartColor.$static_COLOR_19__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_19"), GoogleChartColor.$ordinal_COLOR_19__org_pepstock_charba_client_colors_GoogleChartColor, "#3b3eac");
  GoogleChartColor.$static_COLOR_20__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_20"), GoogleChartColor.$ordinal_COLOR_20__org_pepstock_charba_client_colors_GoogleChartColor, "#b77322");
  GoogleChartColor.$static_COLOR_21__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_21"), GoogleChartColor.$ordinal_COLOR_21__org_pepstock_charba_client_colors_GoogleChartColor, "#16d620");
  GoogleChartColor.$static_COLOR_22__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_22"), GoogleChartColor.$ordinal_COLOR_22__org_pepstock_charba_client_colors_GoogleChartColor, "#b91383");
  GoogleChartColor.$static_COLOR_23__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_23"), GoogleChartColor.$ordinal_COLOR_23__org_pepstock_charba_client_colors_GoogleChartColor, "#f4359e");
  GoogleChartColor.$static_COLOR_24__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_24"), GoogleChartColor.$ordinal_COLOR_24__org_pepstock_charba_client_colors_GoogleChartColor, "#9c5935");
  GoogleChartColor.$static_COLOR_25__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_25"), GoogleChartColor.$ordinal_COLOR_25__org_pepstock_charba_client_colors_GoogleChartColor, "#a9c413");
  GoogleChartColor.$static_COLOR_26__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_26"), GoogleChartColor.$ordinal_COLOR_26__org_pepstock_charba_client_colors_GoogleChartColor, "#2a778d");
  GoogleChartColor.$static_COLOR_27__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_27"), GoogleChartColor.$ordinal_COLOR_27__org_pepstock_charba_client_colors_GoogleChartColor, "#668d1c");
  GoogleChartColor.$static_COLOR_28__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_28"), GoogleChartColor.$ordinal_COLOR_28__org_pepstock_charba_client_colors_GoogleChartColor, "#bea413");
  GoogleChartColor.$static_COLOR_29__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_29"), GoogleChartColor.$ordinal_COLOR_29__org_pepstock_charba_client_colors_GoogleChartColor, "#0c5922");
  GoogleChartColor.$static_COLOR_30__org_pepstock_charba_client_colors_GoogleChartColor = GoogleChartColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_30"), GoogleChartColor.$ordinal_COLOR_30__org_pepstock_charba_client_colors_GoogleChartColor, "#743411");
  GoogleChartColor.f_namesToValuesMap__org_pepstock_charba_client_colors_GoogleChartColor_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GoogleChartColor;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_00__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_01__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_02__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_03__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_04__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_05__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_06__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_07__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_08__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_09__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_10__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_11__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_12__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_13__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_14__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_15__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_16__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_17__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_18__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_19__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_20__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_21__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_22__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_23__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_24__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_25__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_26__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_27__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_28__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_29__org_pepstock_charba_client_colors_GoogleChartColor;
/**@private {!GoogleChartColor}*/
GoogleChartColor.$static_COLOR_30__org_pepstock_charba_client_colors_GoogleChartColor;
/**@type {Map<?string, !GoogleChartColor>}*/
GoogleChartColor.f_namesToValuesMap__org_pepstock_charba_client_colors_GoogleChartColor_;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_00__org_pepstock_charba_client_colors_GoogleChartColor = 0;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_01__org_pepstock_charba_client_colors_GoogleChartColor = 1;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_02__org_pepstock_charba_client_colors_GoogleChartColor = 2;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_03__org_pepstock_charba_client_colors_GoogleChartColor = 3;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_04__org_pepstock_charba_client_colors_GoogleChartColor = 4;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_05__org_pepstock_charba_client_colors_GoogleChartColor = 5;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_06__org_pepstock_charba_client_colors_GoogleChartColor = 6;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_07__org_pepstock_charba_client_colors_GoogleChartColor = 7;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_08__org_pepstock_charba_client_colors_GoogleChartColor = 8;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_09__org_pepstock_charba_client_colors_GoogleChartColor = 9;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_10__org_pepstock_charba_client_colors_GoogleChartColor = 10;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_11__org_pepstock_charba_client_colors_GoogleChartColor = 11;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_12__org_pepstock_charba_client_colors_GoogleChartColor = 12;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_13__org_pepstock_charba_client_colors_GoogleChartColor = 13;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_14__org_pepstock_charba_client_colors_GoogleChartColor = 14;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_15__org_pepstock_charba_client_colors_GoogleChartColor = 15;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_16__org_pepstock_charba_client_colors_GoogleChartColor = 16;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_17__org_pepstock_charba_client_colors_GoogleChartColor = 17;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_18__org_pepstock_charba_client_colors_GoogleChartColor = 18;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_19__org_pepstock_charba_client_colors_GoogleChartColor = 19;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_20__org_pepstock_charba_client_colors_GoogleChartColor = 20;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_21__org_pepstock_charba_client_colors_GoogleChartColor = 21;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_22__org_pepstock_charba_client_colors_GoogleChartColor = 22;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_23__org_pepstock_charba_client_colors_GoogleChartColor = 23;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_24__org_pepstock_charba_client_colors_GoogleChartColor = 24;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_25__org_pepstock_charba_client_colors_GoogleChartColor = 25;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_26__org_pepstock_charba_client_colors_GoogleChartColor = 26;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_27__org_pepstock_charba_client_colors_GoogleChartColor = 27;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_28__org_pepstock_charba_client_colors_GoogleChartColor = 28;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_29__org_pepstock_charba_client_colors_GoogleChartColor = 29;
/**@const {number}*/
GoogleChartColor.$ordinal_COLOR_30__org_pepstock_charba_client_colors_GoogleChartColor = 30;
IsEnumeratedColor.$markImplementor(GoogleChartColor);
$Util.$setClassMetadataForEnum(GoogleChartColor, "org.pepstock.charba.client.colors.GoogleChartColor");

exports = GoogleChartColor;

//# sourceMappingURL=GoogleChartColor.js.map
