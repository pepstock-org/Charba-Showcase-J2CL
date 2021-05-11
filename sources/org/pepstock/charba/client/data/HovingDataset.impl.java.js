goog.module('org.pepstock.charba.client.data.HovingDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HovingFlexDataset = goog.require('org.pepstock.charba.client.data.HovingFlexDataset$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let WidthCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.WidthCallback$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 */
class HovingDataset extends HovingFlexDataset {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_data_HovingDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_HovingFlexDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
 }
 /** @override */
 m_setColors__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String_$pp_org_pepstock_charba_client_data(/** Key */ key, /** Array<?string> */ colors) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(key, $Overlay.m_fromOrEmpty__arrayOf_java_lang_String(colors));
 }
 /** @override */
 m_setColors__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_colors_IsColor_$pp_org_pepstock_charba_client_data(/** Key */ key, /** Array<IsColor> */ colors) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(key, $Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_colors_IsColor(colors));
 }
 /** @override @return {Array} */
 m_getColors__org_pepstock_charba_client_commons_Key__java_lang_String_$pp_org_pepstock_charba_client_data(/** Key */ key, /** ?string */ defaultvalue) {
  return /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(key), $Overlay));
 }
 /** @override */
 m_setWidths__org_pepstock_charba_client_commons_Key__arrayOf_int_$pp_org_pepstock_charba_client_data(/** Key */ key, /** Array<number> */ widths) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(key, ArrayInteger_$Overlay.m_fromOrEmpty__arrayOf_int(widths));
 }
 /** @override @return {Array} */
 m_getWidths__org_pepstock_charba_client_commons_Key__int_$pp_org_pepstock_charba_client_data(/** Key */ key, /** number */ defaultvalue) {
  return /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(key), ArrayInteger_$Overlay));
 }
 /** @return {WidthCallback<DatasetContext>} */
 m_getBorderWidthCallback__() {
  return this.m_getInternalBorderWidthCallback___$pp_org_pepstock_charba_client_data();
 }
 
 m_setBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/** WidthCallback<DatasetContext> */ borderWidthCallback) {
  this.m_setInternalBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback_$pp_org_pepstock_charba_client_data(borderWidthCallback);
 }
 /** @override */
 m_setHoverBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ colors) {
  this.m_setHoverBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  super.m_setHoverBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(colors);
 }
 /** @override */
 m_setHoverBackgroundColor__arrayOf_java_lang_String(/** Array<?string> */ colors) {
  this.m_setHoverBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  super.m_setHoverBackgroundColor__arrayOf_java_lang_String(colors);
 }
 /** @override */
 m_setHoverBackgroundColor__arrayOf_org_pepstock_charba_client_colors_Pattern(/** Array<Pattern> */ colors) {
  this.m_setHoverBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  super.m_setHoverBackgroundColor__arrayOf_org_pepstock_charba_client_colors_Pattern(colors);
 }
 /** @override */
 m_setHoverBackgroundColor__arrayOf_org_pepstock_charba_client_colors_Gradient(/** Array<Gradient> */ colors) {
  this.m_setHoverBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  super.m_setHoverBackgroundColor__arrayOf_org_pepstock_charba_client_colors_Gradient(colors);
 }
 /** @override @return {List<?string>} */
 m_getHoverBackgroundColorAsString__() {
  if (!$Equality.$same(this.m_getHoverBackgroundColorCallback__(), null)) {
   return /**@type {List<?string>}*/ (Collections.m_emptyList__());
  }
  return super.m_getHoverBackgroundColorAsString__();
 }
 /** @override @return {List<Pattern>} */
 m_getHoverBackgroundColorAsPatterns__() {
  if (!$Equality.$same(this.m_getHoverBackgroundColorCallback__(), null)) {
   return /**@type {List<Pattern>}*/ (Collections.m_emptyList__());
  }
  return super.m_getHoverBackgroundColorAsPatterns__();
 }
 /** @override @return {List<Gradient>} */
 m_getHoverBackgroundColorAsGradient__() {
  if (!$Equality.$same(this.m_getHoverBackgroundColorCallback__(), null)) {
   return /**@type {List<Gradient>}*/ (Collections.m_emptyList__());
  }
  return super.m_getHoverBackgroundColorAsGradient__();
 }
 /** @override */
 m_setHoverBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ colors) {
  this.m_setHoverBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  super.m_setHoverBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(colors);
 }
 /** @override */
 m_setHoverBorderColor__arrayOf_java_lang_String(/** Array<?string> */ colors) {
  this.m_setHoverBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  super.m_setHoverBorderColor__arrayOf_java_lang_String(colors);
 }
 /** @override */
 m_setHoverBorderColor__arrayOf_org_pepstock_charba_client_colors_Gradient(/** Array<Gradient> */ colors) {
  this.m_setHoverBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  super.m_setHoverBorderColor__arrayOf_org_pepstock_charba_client_colors_Gradient(colors);
 }
 /** @override @return {List<?string>} */
 m_getHoverBorderColorAsString__() {
  if (!$Equality.$same(this.m_getHoverBorderColorCallback__(), null)) {
   return /**@type {List<?string>}*/ (Collections.m_emptyList__());
  }
  return super.m_getHoverBorderColorAsString__();
 }
 /** @override @return {List<Gradient>} */
 m_getHoverBorderColorAsGradient__() {
  if (!$Equality.$same(this.m_getHoverBorderColorCallback__(), null)) {
   return /**@type {List<Gradient>}*/ (Collections.m_emptyList__());
  }
  return super.m_getHoverBorderColorAsGradient__();
 }
 /** @override @return {List<Integer>} */
 m_getHoverBorderWidth__() {
  if ($Equality.$same(this.m_getHoverBorderWidthCallback__(), null)) {
   return super.m_getHoverBorderWidth__();
  }
  return /**@type {List<Integer>}*/ (Collections.m_emptyList__());
 }
 /** @return {WidthCallback<DatasetContext>} */
 m_getHoverBorderWidthCallback__() {
  return this.m_getInternalHoverBorderWidthCallback___$pp_org_pepstock_charba_client_data();
 }
 
 m_setHoverBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/** WidthCallback<DatasetContext> */ hoverBorderWidthCallback) {
  this.m_setInternalHoverBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback_$pp_org_pepstock_charba_client_data(hoverBorderWidthCallback);
 }
 
 static $clinit() {
  HovingDataset.$clinit = () =>{};
  HovingDataset.$loadModules();
  HovingFlexDataset.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HovingDataset;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(HovingDataset, "org.pepstock.charba.client.data.HovingDataset");

exports = HovingDataset;

//# sourceMappingURL=HovingDataset.js.map
