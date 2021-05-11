goog.module('org.pepstock.charba.client.data.HovingFlexDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Dataset = goog.require('org.pepstock.charba.client.data.Dataset$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let CanvasObjectProperty = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CanvasObjectProperty$impl');
let CommonProperty = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CommonProperty$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');

/**
 * @abstract
 */
class HovingFlexDataset extends Dataset {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_data_HovingFlexDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
 }
 
 m_setColors__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String_$pp_org_pepstock_charba_client_data(/** Key */ key, /** Array<?string> */ colors) {
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(key, colors);
 }
 
 m_setColors__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_colors_IsColor_$pp_org_pepstock_charba_client_data(/** Key */ key, /** Array<IsColor> */ colors) {
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_colors_IsColor(key, colors);
 }
 /** @return {Array} */
 m_getColors__org_pepstock_charba_client_commons_Key__java_lang_String_$pp_org_pepstock_charba_client_data(/** Key */ key, /** ?string */ defaultvalue) {
  return this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__java_lang_String(key, defaultvalue);
 }
 
 m_setWidths__org_pepstock_charba_client_commons_Key__arrayOf_int_$pp_org_pepstock_charba_client_data(/** Key */ key, /** Array<number> */ widths) {
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_int(key, widths);
 }
 /** @return {Array} */
 m_getWidths__org_pepstock_charba_client_commons_Key__int_$pp_org_pepstock_charba_client_data(/** Key */ key, /** number */ defaultvalue) {
  return this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__int(key, defaultvalue);
 }
 
 m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ backgroundColor) {
  this.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_setColors__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_colors_IsColor_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, backgroundColor);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 
 m_setBackgroundColor__arrayOf_java_lang_String(/** Array<?string> */ backgroundColor) {
  this.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_setColors__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, backgroundColor);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 
 m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_Pattern(/** Array<Pattern> */ backgroundColor) {
  this.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getPatternsContainer___$pp_org_pepstock_charba_client_data().m_setObjects__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_commons_ArrayObject__java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, ArrayObject_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(backgroundColor), this.m_getDefaultBackgroundColorAsString__());
  this.m_resetBeingPatterns__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 
 m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_Gradient(/** Array<Gradient> */ backgroundColor) {
  this.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_setObjects__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_commons_ArrayObject__java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, ArrayObject_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(backgroundColor), this.m_getDefaultBackgroundColorAsString__());
  this.m_resetBeingGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 /** @return {List<?string>} */
 m_getBackgroundColorAsString__() {
  if (this.m_hasColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty) && $Equality.$same(this.m_getBackgroundColorCallback__(), null)) {
   let array = this.m_getColors__org_pepstock_charba_client_commons_Key__java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, this.m_getDefaultBackgroundColorAsString__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(array);
  }
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<IsColor>} */
 m_getBackgroundColor__() {
  return ColorBuilder.m_parse__java_util_List(this.m_getBackgroundColorAsString__());
 }
 /** @return {List<Pattern>} */
 m_getBackgroundColorAsPatterns__() {
  if (this.m_hasPatterns__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty) && $Equality.$same(this.m_getBackgroundColorCallback__(), null)) {
   return this.m_getPatternsContainer___$pp_org_pepstock_charba_client_data().m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  }
  return /**@type {List<Pattern>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<Gradient>} */
 m_getBackgroundColorAsGradient__() {
  if (this.m_hasGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty) && $Equality.$same(this.m_getBackgroundColorCallback__(), null)) {
   return this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  }
  return /**@type {List<Gradient>}*/ (Collections.m_emptyList__());
 }
 
 m_setBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ borderColor) {
  this.m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_setColors__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_colors_IsColor_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, borderColor);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 
 m_setBorderColor__arrayOf_java_lang_String(/** Array<?string> */ borderColor) {
  this.m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_setColors__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, borderColor);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 
 m_setBorderColor__arrayOf_org_pepstock_charba_client_colors_Gradient(/** Array<Gradient> */ borderColor) {
  this.m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_setObjects__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_commons_ArrayObject__java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, ArrayObject_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(borderColor), this.m_getDefaultBorderColorAsString__());
  this.m_resetBeingGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 /** @return {List<?string>} */
 m_getBorderColorAsString__() {
  if (this.m_hasColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty) && $Equality.$same(this.m_getBorderColorCallback__(), null)) {
   let array = this.m_getColors__org_pepstock_charba_client_commons_Key__java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, this.m_getDefaultBorderColorAsString__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(array);
  }
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<IsColor>} */
 m_getBorderColor__() {
  return ColorBuilder.m_parse__java_util_List(this.m_getBorderColorAsString__());
 }
 /** @return {List<Gradient>} */
 m_getBorderColorAsGradient__() {
  if (this.m_hasGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty) && $Equality.$same(this.m_getBorderColorCallback__(), null)) {
   return this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  }
  return /**@type {List<Gradient>}*/ (Collections.m_emptyList__());
 }
 
 m_setBorderWidth__arrayOf_int(/** Array<number> */ borderWidth) {
  this.m_setInternalBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback_$pp_org_pepstock_charba_client_data(null);
  this.m_setWidths__org_pepstock_charba_client_commons_Key__arrayOf_int_$pp_org_pepstock_charba_client_data(CommonProperty.f_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, borderWidth);
 }
 /** @return {List<Integer>} */
 m_getBorderWidth__() {
  if ($Equality.$same(this.m_getInternalBorderWidthCallback___$pp_org_pepstock_charba_client_data(), null)) {
   let array = this.m_getWidths__org_pepstock_charba_client_commons_Key__int_$pp_org_pepstock_charba_client_data(CommonProperty.f_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, this.m_getDefaultBorderWidth__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
  }
  return /**@type {List<Integer>}*/ (Collections.m_emptyList__());
 }
 
 m_setHoverBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ colors) {
  this.m_setColors__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_colors_IsColor_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, colors);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 
 m_setHoverBackgroundColor__arrayOf_java_lang_String(/** Array<?string> */ colors) {
  this.m_setColors__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, colors);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 
 m_setHoverBackgroundColor__arrayOf_org_pepstock_charba_client_colors_Pattern(/** Array<Pattern> */ colors) {
  this.m_getPatternsContainer___$pp_org_pepstock_charba_client_data().m_setObjects__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_commons_ArrayObject__java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, ArrayObject_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(colors), this.m_getDefaultHoverBackgroundColorAsString__());
  this.m_resetBeingPatterns__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 
 m_setHoverBackgroundColor__arrayOf_org_pepstock_charba_client_colors_Gradient(/** Array<Gradient> */ colors) {
  this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_setObjects__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_commons_ArrayObject__java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, ArrayObject_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(colors), this.m_getDefaultHoverBackgroundColorAsString__());
  this.m_resetBeingGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 /** @return {List<?string>} */
 m_getHoverBackgroundColorAsString__() {
  if (this.m_hasColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty)) {
   let array = this.m_getColors__org_pepstock_charba_client_commons_Key__java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, this.m_getDefaultHoverBackgroundColorAsString__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(array);
  }
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<IsColor>} */
 m_getHoverBackgroundColor__() {
  return ColorBuilder.m_parse__java_util_List(this.m_getHoverBackgroundColorAsString__());
 }
 /** @return {List<Pattern>} */
 m_getHoverBackgroundColorAsPatterns__() {
  if (this.m_hasPatterns__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty)) {
   return this.m_getPatternsContainer___$pp_org_pepstock_charba_client_data().m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  }
  return /**@type {List<Pattern>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<Gradient>} */
 m_getHoverBackgroundColorAsGradient__() {
  if (this.m_hasGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty)) {
   return this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  }
  return /**@type {List<Gradient>}*/ (Collections.m_emptyList__());
 }
 
 m_setHoverBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ colors) {
  this.m_setColors__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_colors_IsColor_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, colors);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 
 m_setHoverBorderColor__arrayOf_java_lang_String(/** Array<?string> */ colors) {
  this.m_setColors__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, colors);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 
 m_setHoverBorderColor__arrayOf_org_pepstock_charba_client_colors_Gradient(/** Array<Gradient> */ colors) {
  this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_setObjects__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_commons_ArrayObject__java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, ArrayObject_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(colors), this.m_getDefaultHoverBorderColorAsString__());
  this.m_resetBeingGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 /** @return {List<?string>} */
 m_getHoverBorderColorAsString__() {
  if (this.m_hasColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty)) {
   let array = this.m_getColors__org_pepstock_charba_client_commons_Key__java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, this.m_getDefaultHoverBorderColorAsString__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(array);
  }
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<IsColor>} */
 m_getHoverBorderColor__() {
  return ColorBuilder.m_parse__java_util_List(this.m_getHoverBorderColorAsString__());
 }
 /** @return {List<Gradient>} */
 m_getHoverBorderColorAsGradient__() {
  if (this.m_hasGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty)) {
   return this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  }
  return /**@type {List<Gradient>}*/ (Collections.m_emptyList__());
 }
 
 m_setHoverBorderWidth__arrayOf_int(/** Array<number> */ widths) {
  this.m_setInternalHoverBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback_$pp_org_pepstock_charba_client_data(null);
  this.m_setWidths__org_pepstock_charba_client_commons_Key__arrayOf_int_$pp_org_pepstock_charba_client_data(CommonProperty.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, widths);
 }
 /** @return {List<Integer>} */
 m_getHoverBorderWidth__() {
  if ($Equality.$same(this.m_getInternalBorderWidthCallback___$pp_org_pepstock_charba_client_data(), null)) {
   let array = this.m_getWidths__org_pepstock_charba_client_commons_Key__int_$pp_org_pepstock_charba_client_data(CommonProperty.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, this.m_getDefaultHoverBorderWidth__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
  }
  return /**@type {List<Integer>}*/ (Collections.m_emptyList__());
 }
 
 static $clinit() {
  HovingFlexDataset.$clinit = () =>{};
  HovingFlexDataset.$loadModules();
  Dataset.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HovingFlexDataset;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  CanvasObjectProperty = goog.module.get('org.pepstock.charba.client.data.Dataset.CanvasObjectProperty$impl');
  CommonProperty = goog.module.get('org.pepstock.charba.client.data.Dataset.CommonProperty$impl');
 }
}
$Util.$setClassMetadata(HovingFlexDataset, "org.pepstock.charba.client.data.HovingFlexDataset");

exports = HovingFlexDataset;

//# sourceMappingURL=HovingFlexDataset.js.map
