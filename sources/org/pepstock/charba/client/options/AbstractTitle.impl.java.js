goog.module('org.pepstock.charba.client.options.AbstractTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDefaultPluginElement = goog.require('org.pepstock.charba.client.options.AbstractDefaultPluginElement$impl');
const HasFont = goog.require('org.pepstock.charba.client.options.HasFont$impl');
const IsTitle = goog.require('org.pepstock.charba.client.options.IsTitle$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultAbstractTitle = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAbstractTitle$impl');
let IsDefaultFontContainer = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFontContainer$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractTitle.Property$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.options.Font$impl');
let FontContainer = goog.forwardDeclare('org.pepstock.charba.client.options.FontContainer$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.options.Padding$impl');
let Plugins = goog.forwardDeclare('org.pepstock.charba.client.options.Plugins$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T
 * @extends {AbstractDefaultPluginElement<T>}
 * @implements {IsTitle}
 * @implements {HasFont}
 */
class AbstractTitle extends AbstractDefaultPluginElement {
 /** @protected */
 constructor() {
  super();
  /**@type {FontContainer}*/
  this.f_fontContainer__org_pepstock_charba_client_options_AbstractTitle_;
  /**@type {Padding}*/
  this.f_padding__org_pepstock_charba_client_options_AbstractTitle_;
 }
 
 $ctor__org_pepstock_charba_client_options_AbstractTitle__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAbstractTitle__org_pepstock_charba_client_commons_NativeObject(/** Plugins */ options, /** Key */ childKey, /** T */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractDefaultPluginElement__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPluginElement__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  this.f_fontContainer__org_pepstock_charba_client_options_AbstractTitle_ = FontContainer.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultFontContainer__org_pepstock_charba_client_commons_NativeObject(this, /**@type {IsDefaultFontContainer}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultFontContainer)), this.m_getNativeObject__());
  this.f_padding__org_pepstock_charba_client_options_AbstractTitle_ = this.m_loadPadding__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPadding(Property.f_PADDING__org_pepstock_charba_client_options_AbstractTitle_Property, /**@type {IsDefaultAbstractTitle}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAbstractTitle)).m_getPadding__());
 }
 /** @override @return {FontContainer} */
 m_getFontContainer__() {
  return this.f_fontContainer__org_pepstock_charba_client_options_AbstractTitle_;
 }
 /** @override @return {Padding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_options_AbstractTitle_;
 }
 /** @override */
 m_setColor__java_lang_String(/** ?string */ color) {
  HasFont.m_setColor__$default__org_pepstock_charba_client_options_HasFont__java_lang_String(this, color);
 }
 /** @override @return {Font} */
 m_getFont__() {
  return HasFont.m_getFont__$default__org_pepstock_charba_client_options_HasFont(this);
 }
 /** @override */
 m_setFullSize__boolean(/** boolean */ fullSize) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_FULL_SIZE__org_pepstock_charba_client_options_AbstractTitle_Property, fullSize);
 }
 /** @override @return {boolean} */
 m_isFullSize__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_FULL_SIZE__org_pepstock_charba_client_options_AbstractTitle_Property, /**@type {IsDefaultAbstractTitle}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAbstractTitle)).m_isFullSize__());
 }
 /** @override */
 m_setText__arrayOf_java_lang_String(/** Array<?string> */ text) {
  this.m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(Property.f_TEXT__org_pepstock_charba_client_options_AbstractTitle_Property, text);
 }
 /** @override @return {List<?string>} */
 m_getText__() {
  let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TEXT__org_pepstock_charba_client_options_AbstractTitle_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
  return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(array);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getColorAsString__() {
  return HasFont.m_getColorAsString__$default__org_pepstock_charba_client_options_HasFont(this);
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
 
 static $clinit() {
  AbstractTitle.$clinit = () =>{};
  AbstractTitle.$loadModules();
  AbstractDefaultPluginElement.$clinit();
  HasFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractTitle;
 }
 
 static $loadModules() {
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  IsDefaultAbstractTitle = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultAbstractTitle$impl');
  IsDefaultFontContainer = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultFontContainer$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.AbstractTitle.Property$impl');
  FontContainer = goog.module.get('org.pepstock.charba.client.options.FontContainer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsTitle.$markImplementor(AbstractTitle);
HasFont.$markImplementor(AbstractTitle);
$Util.$setClassMetadata(AbstractTitle, "org.pepstock.charba.client.options.AbstractTitle");

exports = AbstractTitle;

//# sourceMappingURL=AbstractTitle.js.map
