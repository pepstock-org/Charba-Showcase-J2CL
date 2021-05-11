goog.module('org.pepstock.charba.client.options.ScaleTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScaleTitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultScaleTitle$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');
const HasFont = goog.require('org.pepstock.charba.client.options.HasFont$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ScaleTitleAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ScaleTitleAlign$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let AbstractScale = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractScale$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.options.Font$impl');
let FontContainer = goog.forwardDeclare('org.pepstock.charba.client.options.FontContainer$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.options.Padding$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleTitle.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractModel<AbstractScale, IsDefaultScaleTitle>}
 * @implements {IsDefaultScaleTitle}
 * @implements {HasFont}
 */
class ScaleTitle extends AbstractModel {
 /** @protected */
 constructor() {
  super();
  /**@type {Padding}*/
  this.f_padding__org_pepstock_charba_client_options_ScaleTitle_;
  /**@type {FontContainer}*/
  this.f_fontContainer__org_pepstock_charba_client_options_ScaleTitle_;
 }
 /** @return {!ScaleTitle} */
 static $create__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultScaleTitle__org_pepstock_charba_client_commons_NativeObject(/** AbstractScale */ scale, /** Key */ childKey, /** IsDefaultScaleTitle */ defaultValues, /** ? */ nativeObject) {
  ScaleTitle.$clinit();
  let $instance = new ScaleTitle();
  $instance.$ctor__org_pepstock_charba_client_options_ScaleTitle__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultScaleTitle__org_pepstock_charba_client_commons_NativeObject(scale, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_ScaleTitle__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultScaleTitle__org_pepstock_charba_client_commons_NativeObject(/** AbstractScale */ scale, /** Key */ childKey, /** IsDefaultScaleTitle */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(scale, childKey, defaultValues, nativeObject);
  this.f_padding__org_pepstock_charba_client_options_ScaleTitle_ = this.m_loadPadding__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPadding(Property.f_PADDING__org_pepstock_charba_client_options_ScaleTitle_Property, /**@type {IsDefaultScaleTitle}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScaleTitle)).m_getPadding__());
  this.f_fontContainer__org_pepstock_charba_client_options_ScaleTitle_ = FontContainer.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultFontContainer__org_pepstock_charba_client_commons_NativeObject(this, /**@type {IsDefaultScaleTitle}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScaleTitle)), this.m_getNativeObject__());
 }
 /** @override @return {FontContainer} */
 m_getFontContainer__() {
  return this.f_fontContainer__org_pepstock_charba_client_options_ScaleTitle_;
 }
 /** @override @return {Padding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_options_ScaleTitle_;
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_options_ScaleTitle_Property, display);
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_options_ScaleTitle_Property, /**@type {IsDefaultScaleTitle}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScaleTitle)).m_isDisplay__());
 }
 
 m_setText__arrayOf_java_lang_String(/** Array<?string> */ text) {
  this.m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(Property.f_TEXT__org_pepstock_charba_client_options_ScaleTitle_Property, text);
 }
 /** @return {List<?string>} */
 m_getText__() {
  let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TEXT__org_pepstock_charba_client_options_ScaleTitle_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
  return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(array);
 }
 
 m_setAlign__org_pepstock_charba_client_enums_ScaleTitleAlign(/** ScaleTitleAlign */ align) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ALIGN__org_pepstock_charba_client_options_ScaleTitle_Property, align);
 }
 /** @override @return {ScaleTitleAlign} */
 m_getAlign__() {
  return /**@type {ScaleTitleAlign}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ALIGN__org_pepstock_charba_client_options_ScaleTitle_Property, ScaleTitleAlign.m_values__(), /**@type {IsDefaultScaleTitle}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScaleTitle)).m_getAlign__()), ScaleTitleAlign));
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
  ScaleTitle.$clinit = () =>{};
  ScaleTitle.$loadModules();
  AbstractModel.$clinit();
  HasFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScaleTitle;
 }
 
 static $loadModules() {
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ScaleTitleAlign = goog.module.get('org.pepstock.charba.client.enums.ScaleTitleAlign$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  FontContainer = goog.module.get('org.pepstock.charba.client.options.FontContainer$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.ScaleTitle.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultScaleTitle.$markImplementor(ScaleTitle);
HasFont.$markImplementor(ScaleTitle);
$Util.$setClassMetadata(ScaleTitle, "org.pepstock.charba.client.options.ScaleTitle");

exports = ScaleTitle;

//# sourceMappingURL=ScaleTitle.js.map
