goog.module('org.pepstock.charba.client.options.LegendLabels$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLegendLabels = goog.require('org.pepstock.charba.client.defaults.IsDefaultLegendLabels$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');
const HasBox = goog.require('org.pepstock.charba.client.options.HasBox$impl');
const HasFont = goog.require('org.pepstock.charba.client.options.HasFont$impl');
const HasPointStyle = goog.require('org.pepstock.charba.client.options.HasPointStyle$impl');

let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultPointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let PointStyleType = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyleType$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let BoxHandler = goog.forwardDeclare('org.pepstock.charba.client.options.BoxHandler$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.options.Font$impl');
let FontContainer = goog.forwardDeclare('org.pepstock.charba.client.options.FontContainer$impl');
let Legend = goog.forwardDeclare('org.pepstock.charba.client.options.Legend$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.LegendLabels.Property$impl');
let PointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.options.PointStyleHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractModel<Legend, IsDefaultLegendLabels>}
 * @implements {IsDefaultLegendLabels}
 * @implements {HasBox}
 * @implements {HasPointStyle}
 * @implements {HasFont}
 */
class LegendLabels extends AbstractModel {
 /** @protected */
 constructor() {
  super();
  /**@type {FontContainer}*/
  this.f_fontContainer__org_pepstock_charba_client_options_LegendLabels_;
  /**@type {BoxHandler}*/
  this.f_boxHandler__org_pepstock_charba_client_options_LegendLabels_;
  /**@type {PointStyleHandler}*/
  this.f_pointStyleHandler__org_pepstock_charba_client_options_LegendLabels_;
 }
 /** @return {!LegendLabels} */
 static $create__org_pepstock_charba_client_options_Legend__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLegendLabels__org_pepstock_charba_client_commons_NativeObject(/** Legend */ legend, /** Key */ childKey, /** IsDefaultLegendLabels */ defaultValues, /** ? */ nativeObject) {
  LegendLabels.$clinit();
  let $instance = new LegendLabels();
  $instance.$ctor__org_pepstock_charba_client_options_LegendLabels__org_pepstock_charba_client_options_Legend__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLegendLabels__org_pepstock_charba_client_commons_NativeObject(legend, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_LegendLabels__org_pepstock_charba_client_options_Legend__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLegendLabels__org_pepstock_charba_client_commons_NativeObject(/** Legend */ legend, /** Key */ childKey, /** IsDefaultLegendLabels */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(legend, childKey, defaultValues, nativeObject);
  this.f_boxHandler__org_pepstock_charba_client_options_LegendLabels_ = BoxHandler.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultBoxHandler__org_pepstock_charba_client_commons_NativeObject(this, /**@type {IsDefaultLegendLabels}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLegendLabels)), this.m_getNativeObject__());
  this.f_pointStyleHandler__org_pepstock_charba_client_options_LegendLabels_ = PointStyleHandler.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultPointStyleHandler__org_pepstock_charba_client_commons_NativeObject(this, /**@type {IsDefaultLegendLabels}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLegendLabels)), this.m_getNativeObject__());
  this.f_fontContainer__org_pepstock_charba_client_options_LegendLabels_ = FontContainer.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultFontContainer__org_pepstock_charba_client_commons_NativeObject(this, /**@type {IsDefaultLegendLabels}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLegendLabels)), this.m_getNativeObject__());
 }
 /** @override @return {BoxHandler} */
 m_getBoxHandler__() {
  return this.f_boxHandler__org_pepstock_charba_client_options_LegendLabels_;
 }
 /** @override @return {PointStyleHandler} */
 m_getPointStyleHandler__() {
  return this.f_pointStyleHandler__org_pepstock_charba_client_options_LegendLabels_;
 }
 /** @override @return {FontContainer} */
 m_getFontContainer__() {
  return this.f_fontContainer__org_pepstock_charba_client_options_LegendLabels_;
 }
 
 m_setUsePointStyle__boolean(/** boolean */ usePointStyle) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_USE_POINT_STYLE__org_pepstock_charba_client_options_LegendLabels_Property, usePointStyle);
 }
 /** @override @return {boolean} */
 m_isUsePointStyle__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_USE_POINT_STYLE__org_pepstock_charba_client_options_LegendLabels_Property, /**@type {IsDefaultLegendLabels}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLegendLabels)).m_isUsePointStyle__());
 }
 
 m_setPadding__int(/** number */ padding) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_PADDING__org_pepstock_charba_client_options_LegendLabels_Property, Checker.m_positiveOrZero__int(padding));
 }
 /** @override @return {number} */
 m_getPadding__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_PADDING__org_pepstock_charba_client_options_LegendLabels_Property, /**@type {IsDefaultLegendLabels}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLegendLabels)).m_getPadding__());
 }
 
 m_setTextAlign__org_pepstock_charba_client_enums_TextAlign(/** TextAlign */ align) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TEXT_ALIGN__org_pepstock_charba_client_options_LegendLabels_Property, Key.m_isValid__org_pepstock_charba_client_commons_Key(align) ? align.m_getLeftRightValue__() : null);
 }
 /** @override @return {TextAlign} */
 m_getTextAlign__() {
  return /**@type {TextAlign}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TEXT_ALIGN__org_pepstock_charba_client_options_LegendLabels_Property, TextAlign.m_values__(), /**@type {IsDefaultLegendLabels}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLegendLabels)).m_getTextAlign__()), TextAlign));
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBoxHeight__() {
  return HasBox.m_getBoxHeight__$default__org_pepstock_charba_client_options_HasBox(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBoxWidth__() {
  return HasBox.m_getBoxWidth__$default__org_pepstock_charba_client_options_HasBox(this);
 }
 //Default method forwarding stub.
 /** @override @return {PointStyle} */
 m_getPointStyle__() {
  return HasPointStyle.m_getPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {HTMLCanvasElement} */
 m_getPointStyleAsCanvas__() {
  return HasPointStyle.m_getPointStyleAsCanvas__$default__org_pepstock_charba_client_options_HasPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  return HasPointStyle.m_getPointStyleAsImage__$default__org_pepstock_charba_client_options_HasPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {PointStyleType} */
 m_getPointStyleType__() {
  return HasPointStyle.m_getPointStyleType__$default__org_pepstock_charba_client_options_HasPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getColorAsString__() {
  return HasFont.m_getColorAsString__$default__org_pepstock_charba_client_options_HasFont(this);
 }
 //Default method forwarding stub.
 /** @override @return {Font} */
 m_getFont__() {
  return HasFont.m_getFont__$default__org_pepstock_charba_client_options_HasFont(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBoxHeight__int(/** number */ arg0) {
  HasBox.m_setBoxHeight__$default__org_pepstock_charba_client_options_HasBox__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBoxWidth__int(/** number */ arg0) {
  HasBox.m_setBoxWidth__$default__org_pepstock_charba_client_options_HasBox__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(/** PointStyle */ arg0) {
  HasPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle__org_pepstock_charba_client_enums_PointStyle(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ arg0) {
  HasPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle__org_pepstock_charba_client_dom_elements_Img(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Canvas(/** HTMLCanvasElement */ arg0) {
  HasPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle__org_pepstock_charba_client_dom_elements_Canvas(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_getColor__() {
  return HasFont.m_getColor__$default__org_pepstock_charba_client_options_HasFont(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ arg0) {
  HasFont.m_setColor__$default__org_pepstock_charba_client_options_HasFont__org_pepstock_charba_client_colors_IsColor(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setColor__java_lang_String(/** ?string */ arg0) {
  HasFont.m_setColor__$default__org_pepstock_charba_client_options_HasFont__java_lang_String(this, arg0);
 }
 
 static $clinit() {
  LegendLabels.$clinit = () =>{};
  LegendLabels.$loadModules();
  AbstractModel.$clinit();
  IsDefaultPointStyleHandler.$clinit();
  HasBox.$clinit();
  HasPointStyle.$clinit();
  HasFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendLabels;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  IsDefaultPointStyleHandler = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
  TextAlign = goog.module.get('org.pepstock.charba.client.enums.TextAlign$impl');
  BoxHandler = goog.module.get('org.pepstock.charba.client.options.BoxHandler$impl');
  FontContainer = goog.module.get('org.pepstock.charba.client.options.FontContainer$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.LegendLabels.Property$impl');
  PointStyleHandler = goog.module.get('org.pepstock.charba.client.options.PointStyleHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultLegendLabels.$markImplementor(LegendLabels);
HasBox.$markImplementor(LegendLabels);
HasPointStyle.$markImplementor(LegendLabels);
HasFont.$markImplementor(LegendLabels);
$Util.$setClassMetadata(LegendLabels, "org.pepstock.charba.client.options.LegendLabels");

exports = LegendLabels;

//# sourceMappingURL=LegendLabels.js.map
