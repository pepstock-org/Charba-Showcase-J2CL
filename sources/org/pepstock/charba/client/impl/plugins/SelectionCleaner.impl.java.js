goog.module('org.pepstock.charba.client.impl.plugins.SelectionCleaner$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
const IsDatasetsItemsSelectorDefaultSelectionCleaner = goog.require('org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultSelectionCleaner$impl');

let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.SelectionCleaner.Property$impl');
let SelectionCleanerFont = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.SelectionCleanerFont$impl');
let Align = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.Align$impl');
let Render = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.Render$impl');
let IsFont = goog.forwardDeclare('org.pepstock.charba.client.options.IsFont$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDatasetsItemsSelectorDefaultSelectionCleaner}
 */
class SelectionCleaner extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDatasetsItemsSelectorDefaultSelectionCleaner}*/
  this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_SelectionCleaner_;
  /**@type {SelectionCleanerFont}*/
  this.f_font__org_pepstock_charba_client_impl_plugins_SelectionCleaner_;
 }
 /** @return {!SelectionCleaner} */
 static $create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(/** ? */ nativeObject, /** IsDatasetsItemsSelectorDefaultSelectionCleaner */ defaultOptions) {
  SelectionCleaner.$clinit();
  let $instance = new SelectionCleaner();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_SelectionCleaner__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(nativeObject, defaultOptions);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_SelectionCleaner__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(/** ? */ nativeObject, /** IsDatasetsItemsSelectorDefaultSelectionCleaner */ defaultOptions) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_SelectionCleaner_ = /**@type {IsDatasetsItemsSelectorDefaultSelectionCleaner}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultOptions), IsDatasetsItemsSelectorDefaultSelectionCleaner));
  this.f_font__org_pepstock_charba_client_impl_plugins_SelectionCleaner_ = SelectionCleanerFont.$create__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_SelectionCleaner_.m_getFont__(), this.m_getNativeObject__());
 }
 /** @override @return {IsFont} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_impl_plugins_SelectionCleaner_;
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, display);
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_SelectionCleaner_.m_isDisplay__());
 }
 
 m_setLabel__java_lang_String(/** ?string */ label) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_LABEL__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, label);
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_LABEL__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_SelectionCleaner_.m_getLabel__());
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_SelectionCleaner_.m_getColorAsString__());
 }
 /** @return {IsColor} */
 m_getColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
 }
 
 m_setColor__java_lang_String(/** ?string */ color) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, color);
 }
 
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setAlign__org_pepstock_charba_client_impl_plugins_enums_Align(/** Align */ align) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ALIGN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, align);
 }
 /** @override @return {Align} */
 m_getAlign__() {
  return /**@type {Align}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ALIGN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Align.m_values__(), this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_SelectionCleaner_.m_getAlign__()), Align));
 }
 
 m_setRender__org_pepstock_charba_client_impl_plugins_enums_Render(/** Render */ render) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_RENDER__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, render);
 }
 /** @override @return {Render} */
 m_getRender__() {
  return /**@type {Render}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_RENDER__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Render.m_values__(), this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_SelectionCleaner_.m_getRender__()), Render));
 }
 
 m_setPosition__org_pepstock_charba_client_enums_Position(/** Position */ position) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POSITION__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, position);
 }
 /** @override @return {Position} */
 m_getPosition__() {
  return /**@type {Position}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POSITION__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Position.m_values__(), this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_SelectionCleaner_.m_getPosition__()), Position));
 }
 
 m_setImage__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ image) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_IMAGE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, image);
 }
 /** @override @return {HTMLImageElement} */
 m_getImage__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_IMAGE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_SelectionCleaner_.m_getImage__());
 }
 
 m_setMargin__int(/** number */ margin) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_MARGIN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Checker.m_positiveOrZero__int(margin));
 }
 /** @override @return {number} */
 m_getMargin__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_MARGIN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_SelectionCleaner_.m_getMargin__());
 }
 
 m_setPadding__int(/** number */ padding) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Checker.m_positiveOrZero__int(padding));
 }
 /** @override @return {number} */
 m_getPadding__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_SelectionCleaner_.m_getPadding__());
 }
 
 m_setSpacing__int(/** number */ spacing) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_SPACING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Checker.m_positiveOrZero__int(spacing));
 }
 /** @override @return {number} */
 m_getSpacing__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_SPACING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_SelectionCleaner_.m_getSpacing__());
 }
 
 m_setUseSelectionStyle__boolean(/** boolean */ useSelectionStyle) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_USE_SELECTION_STYLE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, useSelectionStyle);
 }
 /** @override @return {boolean} */
 m_isUseSelectionStyle__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_USE_SELECTION_STYLE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_SelectionCleaner_.m_isUseSelectionStyle__());
 }
 
 m_setX__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ x) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, x);
 }
 /** @return {number} */
 m_getX___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
 }
 
 m_setY__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ y) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, y);
 }
 /** @return {number} */
 m_getY___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
 }
 
 m_setWidth__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ width) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, width);
 }
 /** @return {number} */
 m_getWidth___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
 }
 
 m_setHeight__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ height) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, height);
 }
 /** @return {number} */
 m_getHeight___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
 }
 
 m_setImageX__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ x) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_IMAGE_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, x);
 }
 /** @return {number} */
 m_getImageX___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_IMAGE_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
 }
 
 m_setImageY__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ y) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_IMAGE_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, y);
 }
 /** @return {number} */
 m_getImageY___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_IMAGE_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
 }
 
 m_setImageWidth__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ width) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_IMAGE_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, width);
 }
 /** @return {number} */
 m_getImageWidth___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_IMAGE_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
 }
 
 m_setImageHeight__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ height) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_IMAGE_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, height);
 }
 /** @return {number} */
 m_getImageHeight___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_IMAGE_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
 }
 
 m_setLabelX__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ x) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_LABEL_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, x);
 }
 /** @return {number} */
 m_getLabelX___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_LABEL_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
 }
 
 m_setLabelY__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ y) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_LABEL_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, y);
 }
 /** @return {number} */
 m_getLabelY___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_LABEL_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
 }
 
 m_setLabelWidth__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ width) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_LABEL_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, width);
 }
 /** @return {number} */
 m_getLabelWidth___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_LABEL_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
 }
 
 m_setLabelHeight__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ height) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_LABEL_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, height);
 }
 /** @return {number} */
 m_getLabelHeight___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_LABEL_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
 }
 
 m_setLayoutPadding__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ layoutPadding) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_LAYOUT_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, layoutPadding);
 }
 /** @return {number} */
 m_getLayoutPadding___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_LAYOUT_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
 }
 /** @return {Align} */
 static get f_DEFAULT_ALIGN__org_pepstock_charba_client_impl_plugins_SelectionCleaner() {
  return (SelectionCleaner.$clinit(), SelectionCleaner.$static_DEFAULT_ALIGN__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
 }
 /** @return {Render} */
 static get f_DEFAULT_RENDER__org_pepstock_charba_client_impl_plugins_SelectionCleaner() {
  return (SelectionCleaner.$clinit(), SelectionCleaner.$static_DEFAULT_RENDER__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
 }
 /** @return {Position} */
 static get f_DEFAULT_POSITION__org_pepstock_charba_client_impl_plugins_SelectionCleaner() {
  return (SelectionCleaner.$clinit(), SelectionCleaner.$static_DEFAULT_POSITION__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
 }
 
 static $clinit() {
  SelectionCleaner.$clinit = () =>{};
  SelectionCleaner.$loadModules();
  NativeObjectContainer.$clinit();
  IsDatasetsItemsSelectorDefaultSelectionCleaner.$clinit();
  SelectionCleaner.$static_DEFAULT_ALIGN__org_pepstock_charba_client_impl_plugins_SelectionCleaner = Align.f_RIGHT__org_pepstock_charba_client_impl_plugins_enums_Align;
  SelectionCleaner.$static_DEFAULT_RENDER__org_pepstock_charba_client_impl_plugins_SelectionCleaner = Render.f_LABEL__org_pepstock_charba_client_impl_plugins_enums_Render;
  SelectionCleaner.$static_DEFAULT_POSITION__org_pepstock_charba_client_impl_plugins_SelectionCleaner = Position.f_BOTTOM__org_pepstock_charba_client_enums_Position;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SelectionCleaner;
 }
 
 static $loadModules() {
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  Property = goog.module.get('org.pepstock.charba.client.impl.plugins.SelectionCleaner.Property$impl');
  SelectionCleanerFont = goog.module.get('org.pepstock.charba.client.impl.plugins.SelectionCleanerFont$impl');
  Align = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.Align$impl');
  Render = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.Render$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {boolean}*/
SelectionCleaner.f_DEFAULT_DISPLAY__org_pepstock_charba_client_impl_plugins_SelectionCleaner = false;
/**@const {?string}*/
SelectionCleaner.f_DEFAULT_LABEL__org_pepstock_charba_client_impl_plugins_SelectionCleaner = "Reset selection";
/**@const {number}*/
SelectionCleaner.f_DEFAULT_MARGIN__org_pepstock_charba_client_impl_plugins_SelectionCleaner = 2;
/**@const {number}*/
SelectionCleaner.f_DEFAULT_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner = 4;
/**@const {number}*/
SelectionCleaner.f_DEFAULT_SPACING__org_pepstock_charba_client_impl_plugins_SelectionCleaner = 3;
/**@const {boolean}*/
SelectionCleaner.f_DEFAULT_USE_SELECTION_STYLE__org_pepstock_charba_client_impl_plugins_SelectionCleaner = false;
/**@private {Align}*/
SelectionCleaner.$static_DEFAULT_ALIGN__org_pepstock_charba_client_impl_plugins_SelectionCleaner;
/**@private {Render}*/
SelectionCleaner.$static_DEFAULT_RENDER__org_pepstock_charba_client_impl_plugins_SelectionCleaner;
/**@private {Position}*/
SelectionCleaner.$static_DEFAULT_POSITION__org_pepstock_charba_client_impl_plugins_SelectionCleaner;
/**@const {number}*/
SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner = 0;
/**@const {number}*/
SelectionCleaner.f_BORDER_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner = 1;
IsDatasetsItemsSelectorDefaultSelectionCleaner.$markImplementor(SelectionCleaner);
$Util.$setClassMetadata(SelectionCleaner, "org.pepstock.charba.client.impl.plugins.SelectionCleaner");

exports = SelectionCleaner;

//# sourceMappingURL=SelectionCleaner.js.map
