goog.module('org.pepstock.charba.client.options.Title$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultTitle$impl');
const AbstractDefaultPluginElement = goog.require('org.pepstock.charba.client.options.AbstractDefaultPluginElement$impl');
const HasFont = goog.require('org.pepstock.charba.client.options.HasFont$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.options.Font$impl');
let FontContainer = goog.forwardDeclare('org.pepstock.charba.client.options.FontContainer$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.options.Padding$impl');
let Plugins = goog.forwardDeclare('org.pepstock.charba.client.options.Plugins$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Title.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractDefaultPluginElement<IsDefaultTitle>}
 * @implements {IsDefaultTitle}
 * @implements {HasFont}
 */
class Title extends AbstractDefaultPluginElement {
 /** @protected */
 constructor() {
  super();
  /**@type {FontContainer}*/
  this.f_fontContainer__org_pepstock_charba_client_options_Title_;
  /**@type {Padding}*/
  this.f_padding__org_pepstock_charba_client_options_Title_;
 }
 /** @return {!Title} */
 static $create__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTitle__org_pepstock_charba_client_commons_NativeObject(/** Plugins */ options, /** Key */ childKey, /** IsDefaultTitle */ defaultValues, /** ? */ nativeObject) {
  Title.$clinit();
  let $instance = new Title();
  $instance.$ctor__org_pepstock_charba_client_options_Title__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTitle__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Title__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTitle__org_pepstock_charba_client_commons_NativeObject(/** Plugins */ options, /** Key */ childKey, /** IsDefaultTitle */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractDefaultPluginElement__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPluginElement__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  this.f_fontContainer__org_pepstock_charba_client_options_Title_ = FontContainer.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultFontContainer__org_pepstock_charba_client_commons_NativeObject(this, /**@type {IsDefaultTitle}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTitle)), this.m_getNativeObject__());
  this.f_padding__org_pepstock_charba_client_options_Title_ = this.m_loadPadding__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPadding(Property.f_PADDING__org_pepstock_charba_client_options_Title_Property, /**@type {IsDefaultTitle}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTitle)).m_getPadding__());
 }
 /** @override @return {FontContainer} */
 m_getFontContainer__() {
  return this.f_fontContainer__org_pepstock_charba_client_options_Title_;
 }
 /** @override @return {Padding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_options_Title_;
 }
 
 m_setFullSize__boolean(/** boolean */ fullSize) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_FULL_SIZE__org_pepstock_charba_client_options_Title_Property, fullSize);
 }
 /** @override @return {boolean} */
 m_isFullSize__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_FULL_SIZE__org_pepstock_charba_client_options_Title_Property, /**@type {IsDefaultTitle}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTitle)).m_isFullSize__());
 }
 
 m_setText__arrayOf_java_lang_String(/** Array<?string> */ text) {
  this.m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(Property.f_TEXT__org_pepstock_charba_client_options_Title_Property, text);
 }
 /** @return {List<?string>} */
 m_getText__() {
  let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TEXT__org_pepstock_charba_client_options_Title_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
  return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(array);
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
  Title.$clinit = () =>{};
  Title.$loadModules();
  AbstractDefaultPluginElement.$clinit();
  HasFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Title;
 }
 
 static $loadModules() {
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  FontContainer = goog.module.get('org.pepstock.charba.client.options.FontContainer$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Title.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultTitle.$markImplementor(Title);
HasFont.$markImplementor(Title);
$Util.$setClassMetadata(Title, "org.pepstock.charba.client.options.Title");

exports = Title;

//# sourceMappingURL=Title.js.map
