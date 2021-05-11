goog.module('org.pepstock.charba.client.options.PointLabels$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultPointLabels = goog.require('org.pepstock.charba.client.defaults.IsDefaultPointLabels$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');
const HasFont = goog.require('org.pepstock.charba.client.options.HasFont$impl');

let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AbstractScale = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractScale$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.options.Font$impl');
let FontContainer = goog.forwardDeclare('org.pepstock.charba.client.options.FontContainer$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.options.Padding$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.PointLabels.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractModel<AbstractScale, IsDefaultPointLabels>}
 * @implements {IsDefaultPointLabels}
 * @implements {HasFont}
 */
class PointLabels extends AbstractModel {
 /** @protected */
 constructor() {
  super();
  /**@type {FontContainer}*/
  this.f_fontContainer__org_pepstock_charba_client_options_PointLabels_;
  /**@type {Padding}*/
  this.f_backdropPadding__org_pepstock_charba_client_options_PointLabels_;
 }
 /** @return {!PointLabels} */
 static $create__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPointLabels__org_pepstock_charba_client_commons_NativeObject(/** AbstractScale */ scale, /** Key */ childKey, /** IsDefaultPointLabels */ defaultValues, /** ? */ nativeObject) {
  PointLabels.$clinit();
  let $instance = new PointLabels();
  $instance.$ctor__org_pepstock_charba_client_options_PointLabels__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPointLabels__org_pepstock_charba_client_commons_NativeObject(scale, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_PointLabels__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPointLabels__org_pepstock_charba_client_commons_NativeObject(/** AbstractScale */ scale, /** Key */ childKey, /** IsDefaultPointLabels */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(scale, childKey, defaultValues, nativeObject);
  this.f_backdropPadding__org_pepstock_charba_client_options_PointLabels_ = this.m_loadPadding__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPadding(Property.f_BACKDROP_PADDING__org_pepstock_charba_client_options_PointLabels_Property, /**@type {IsDefaultPointLabels}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPointLabels)).m_getBackdropPadding__());
  this.f_fontContainer__org_pepstock_charba_client_options_PointLabels_ = FontContainer.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultFontContainer__org_pepstock_charba_client_commons_NativeObject(this, /**@type {IsDefaultPointLabels}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPointLabels)), this.m_getNativeObject__());
 }
 /** @override @return {FontContainer} */
 m_getFontContainer__() {
  return this.f_fontContainer__org_pepstock_charba_client_options_PointLabels_;
 }
 /** @override @return {Padding} */
 m_getBackdropPadding__() {
  return this.f_backdropPadding__org_pepstock_charba_client_options_PointLabels_;
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_options_PointLabels_Property, display);
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_options_PointLabels_Property, /**@type {IsDefaultPointLabels}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPointLabels)).m_isDisplay__());
 }
 
 m_setBackdropColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backdropColor) {
  this.m_setBackdropColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(backdropColor));
 }
 
 m_setBackdropColor__java_lang_String(/** ?string */ backdropColor) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKDROP_COLOR__org_pepstock_charba_client_options_PointLabels_Property, backdropColor);
 }
 /** @override @return {?string} */
 m_getBackdropColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKDROP_COLOR__org_pepstock_charba_client_options_PointLabels_Property, /**@type {IsDefaultPointLabels}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPointLabels)).m_getBackdropColorAsString__());
 }
 /** @return {IsColor} */
 m_getBackdropColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBackdropColorAsString__());
 }
 
 m_setPadding__int(/** number */ padding) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_PADDING__org_pepstock_charba_client_options_PointLabels_Property, Checker.m_positiveOrZero__int(padding));
 }
 /** @override @return {number} */
 m_getPadding__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_PADDING__org_pepstock_charba_client_options_PointLabels_Property, /**@type {IsDefaultPointLabels}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPointLabels)).m_getPadding__());
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
  PointLabels.$clinit = () =>{};
  PointLabels.$loadModules();
  AbstractModel.$clinit();
  HasFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointLabels;
 }
 
 static $loadModules() {
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  FontContainer = goog.module.get('org.pepstock.charba.client.options.FontContainer$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.PointLabels.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultPointLabels.$markImplementor(PointLabels);
HasFont.$markImplementor(PointLabels);
$Util.$setClassMetadata(PointLabels, "org.pepstock.charba.client.options.PointLabels");

exports = PointLabels;

//# sourceMappingURL=PointLabels.js.map
