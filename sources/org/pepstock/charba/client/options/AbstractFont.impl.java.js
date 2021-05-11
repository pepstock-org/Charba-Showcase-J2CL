goog.module('org.pepstock.charba.client.options.AbstractFont$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
const IsFont = goog.require('org.pepstock.charba.client.options.IsFont$impl');

let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let FontItem = goog.forwardDeclare('org.pepstock.charba.client.items.FontItem$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractFont.Property$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.options.Font$impl');

/**
 * @abstract
 * @implements {IsFont}
 */
class AbstractFont extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {Font}*/
  this.f_font__org_pepstock_charba_client_options_AbstractFont_;
 }
 //Initialization from constructor 'AbstractFont(IsDefaultFont)'.
 
 $ctor__org_pepstock_charba_client_options_AbstractFont__org_pepstock_charba_client_defaults_IsDefaultFont(/** IsDefaultFont */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_options_AbstractFont__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(defaultValues, null);
 }
 //Initialization from constructor 'AbstractFont(IsDefaultFont, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_options_AbstractFont__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultFont */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_font__org_pepstock_charba_client_options_AbstractFont_ = Font.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(null, Property.f_FONT__org_pepstock_charba_client_options_AbstractFont_Property, defaultValues, this.m_getNativeObject__());
 }
 /** @override @return {number} */
 m_getSize__() {
  return this.f_font__org_pepstock_charba_client_options_AbstractFont_.m_getSize__();
 }
 /** @override @return {FontStyle} */
 m_getStyle__() {
  return this.f_font__org_pepstock_charba_client_options_AbstractFont_.m_getStyle__();
 }
 /** @override @return {?string} */
 m_getFamily__() {
  return this.f_font__org_pepstock_charba_client_options_AbstractFont_.m_getFamily__();
 }
 /** @override @return {Weight} */
 m_getWeight__() {
  return this.f_font__org_pepstock_charba_client_options_AbstractFont_.m_getWeight__();
 }
 /** @override @return {number} */
 m_getLineHeight__() {
  return this.f_font__org_pepstock_charba_client_options_AbstractFont_.m_getLineHeight__();
 }
 /** @override */
 m_setSize__int(/** number */ size) {
  this.f_font__org_pepstock_charba_client_options_AbstractFont_.m_setSize__int(size);
 }
 /** @override */
 m_setStyle__org_pepstock_charba_client_enums_FontStyle(/** FontStyle */ style) {
  this.f_font__org_pepstock_charba_client_options_AbstractFont_.m_setStyle__org_pepstock_charba_client_enums_FontStyle(style);
 }
 /** @override */
 m_setFamily__java_lang_String(/** ?string */ family) {
  this.f_font__org_pepstock_charba_client_options_AbstractFont_.m_setFamily__java_lang_String(family);
 }
 /** @override */
 m_setWeight__org_pepstock_charba_client_enums_Weight(/** Weight */ weight) {
  this.f_font__org_pepstock_charba_client_options_AbstractFont_.m_setWeight__org_pepstock_charba_client_enums_Weight(weight);
 }
 /** @override */
 m_setLineHeight__double(/** number */ lineHeight) {
  this.f_font__org_pepstock_charba_client_options_AbstractFont_.m_setLineHeight__double(lineHeight);
 }
 /** @override */
 m_setLineHeight__java_lang_String(/** ?string */ lineHeight) {
  this.f_font__org_pepstock_charba_client_options_AbstractFont_.m_setLineHeight__java_lang_String(lineHeight);
 }
 /** @override @return {?string} */
 m_getLineHeightAsString__() {
  return this.f_font__org_pepstock_charba_client_options_AbstractFont_.m_getLineHeightAsString__();
 }
 /** @return {?} */
 m_getObject__() {
  return this.f_font__org_pepstock_charba_client_options_AbstractFont_.m_nativeObject___$pp_org_pepstock_charba_client_options();
 }
 //Default method forwarding stub.
 /** @override @return {FontItem} */
 m_create__() {
  return IsDefaultFont.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultFont(this);
 }
 //Default method forwarding stub.
 /** @override @return {FontItem} */
 m_create__org_pepstock_charba_client_defaults_IsDefaultFont(/** IsDefaultFont */ arg0) {
  return IsDefaultFont.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_defaults_IsDefaultFont(this, arg0);
 }
 
 static $clinit() {
  AbstractFont.$clinit = () =>{};
  AbstractFont.$loadModules();
  NativeObjectContainer.$clinit();
  IsDefaultFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractFont;
 }
 
 static $loadModules() {
  IsDefaultFont = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.AbstractFont.Property$impl');
  Font = goog.module.get('org.pepstock.charba.client.options.Font$impl');
 }
}
IsFont.$markImplementor(AbstractFont);
$Util.$setClassMetadata(AbstractFont, "org.pepstock.charba.client.options.AbstractFont");

exports = AbstractFont;

//# sourceMappingURL=AbstractFont.js.map
