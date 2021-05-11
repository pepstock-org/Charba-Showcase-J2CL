goog.module('org.pepstock.charba.client.options.LegendTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLegendTitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultLegendTitle$impl');
const HasLegendText = goog.require('org.pepstock.charba.client.items.HasLegendText$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');
const HasFont = goog.require('org.pepstock.charba.client.options.HasFont$impl');

let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let SafeHtml = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');
let LegendTextHandler = goog.forwardDeclare('org.pepstock.charba.client.items.LegendTextHandler$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.options.Font$impl');
let FontContainer = goog.forwardDeclare('org.pepstock.charba.client.options.FontContainer$impl');
let Legend = goog.forwardDeclare('org.pepstock.charba.client.options.Legend$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.LegendTitle.Property$impl');
let OptionsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.options.OptionsEnvelop$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.options.Padding$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractModel<Legend, IsDefaultLegendTitle>}
 * @implements {IsDefaultLegendTitle}
 * @implements {HasLegendText}
 * @implements {HasFont}
 */
class LegendTitle extends AbstractModel {
 /** @protected */
 constructor() {
  super();
  /**@type {FontContainer}*/
  this.f_fontContainer__org_pepstock_charba_client_options_LegendTitle_;
  /**@type {Padding}*/
  this.f_padding__org_pepstock_charba_client_options_LegendTitle_;
  /**@type {LegendTextHandler}*/
  this.f_legendTextHandler__org_pepstock_charba_client_options_LegendTitle_;
 }
 /** @return {!LegendTitle} */
 static $create__org_pepstock_charba_client_options_Legend__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLegendTitle__org_pepstock_charba_client_commons_NativeObject(/** Legend */ legend, /** Key */ childKey, /** IsDefaultLegendTitle */ defaultValues, /** ? */ nativeObject) {
  LegendTitle.$clinit();
  let $instance = new LegendTitle();
  $instance.$ctor__org_pepstock_charba_client_options_LegendTitle__org_pepstock_charba_client_options_Legend__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLegendTitle__org_pepstock_charba_client_commons_NativeObject(legend, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_LegendTitle__org_pepstock_charba_client_options_Legend__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLegendTitle__org_pepstock_charba_client_commons_NativeObject(/** Legend */ legend, /** Key */ childKey, /** IsDefaultLegendTitle */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(legend, childKey, defaultValues, nativeObject);
  this.f_fontContainer__org_pepstock_charba_client_options_LegendTitle_ = FontContainer.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultFontContainer__org_pepstock_charba_client_commons_NativeObject(this, /**@type {IsDefaultLegendTitle}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLegendTitle)), this.m_getNativeObject__());
  this.f_legendTextHandler__org_pepstock_charba_client_options_LegendTitle_ = LegendTextHandler.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_options_OptionsEnvelop(this, /**@type {!OptionsEnvelop<?>}*/ (OptionsEnvelop.$create__java_lang_Object(this.m_getNativeObject__())));
  this.f_padding__org_pepstock_charba_client_options_LegendTitle_ = this.m_loadPadding__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPadding(Property.f_PADDING__org_pepstock_charba_client_options_LegendTitle_Property, /**@type {IsDefaultLegendTitle}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLegendTitle)).m_getPadding__());
 }
 /** @override @return {FontContainer} */
 m_getFontContainer__() {
  return this.f_fontContainer__org_pepstock_charba_client_options_LegendTitle_;
 }
 /** @override @return {LegendTextHandler} */
 m_getLegendTextHandler__() {
  return this.f_legendTextHandler__org_pepstock_charba_client_options_LegendTitle_;
 }
 /** @override @return {Padding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_options_LegendTitle_;
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_options_LegendTitle_Property, display);
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_options_LegendTitle_Property, /**@type {IsDefaultLegendTitle}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLegendTitle)).m_isDisplay__());
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
 /** @override @return {?string} */
 m_getText__() {
  return HasLegendText.m_getText__$default__org_pepstock_charba_client_items_HasLegendText(this);
 }
 //Default method forwarding stub.
 /** @override @return {SafeHtml} */
 m_getTextAsHtml__() {
  return HasLegendText.m_getTextAsHtml__$default__org_pepstock_charba_client_items_HasLegendText(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isHtmlText__() {
  return HasLegendText.m_isHtmlText__$default__org_pepstock_charba_client_items_HasLegendText(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setHtmlText__boolean(/** boolean */ arg0) {
  HasLegendText.m_setHtmlText__$default__org_pepstock_charba_client_items_HasLegendText__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setText__java_lang_String(/** ?string */ arg0) {
  HasLegendText.m_setText__$default__org_pepstock_charba_client_items_HasLegendText__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setText__org_pepstock_charba_client_dom_safehtml_SafeHtml(/** SafeHtml */ arg0) {
  HasLegendText.m_setText__$default__org_pepstock_charba_client_items_HasLegendText__org_pepstock_charba_client_dom_safehtml_SafeHtml(this, arg0);
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
  LegendTitle.$clinit = () =>{};
  LegendTitle.$loadModules();
  AbstractModel.$clinit();
  HasLegendText.$clinit();
  HasFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendTitle;
 }
 
 static $loadModules() {
  LegendTextHandler = goog.module.get('org.pepstock.charba.client.items.LegendTextHandler$impl');
  FontContainer = goog.module.get('org.pepstock.charba.client.options.FontContainer$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.LegendTitle.Property$impl');
  OptionsEnvelop = goog.module.get('org.pepstock.charba.client.options.OptionsEnvelop$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultLegendTitle.$markImplementor(LegendTitle);
HasLegendText.$markImplementor(LegendTitle);
HasFont.$markImplementor(LegendTitle);
$Util.$setClassMetadata(LegendTitle, "org.pepstock.charba.client.options.LegendTitle");

exports = LegendTitle;

//# sourceMappingURL=LegendTitle.js.map
