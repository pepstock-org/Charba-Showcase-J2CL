goog.module('org.pepstock.charba.client.defaults.globals.DefaultScaleTitle$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScaleTitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultScaleTitle$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let DefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
let DefaultRoutedFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');
let ScaleTitleAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ScaleTitleAlign$impl');

/**
 * @implements {IsDefaultScaleTitle}
 */
class DefaultScaleTitle extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultPadding}*/
  this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultScaleTitle_;
  /**@type {DefaultRoutedFont}*/
  this.f_font__org_pepstock_charba_client_defaults_globals_DefaultScaleTitle_;
 }
 /** @return {!DefaultScaleTitle} */
 static $create__() {
  DefaultScaleTitle.$clinit();
  let $instance = new DefaultScaleTitle();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultScaleTitle__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultScaleTitle__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_defaults_globals_DefaultScaleTitle();
 }
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_defaults_globals_DefaultScaleTitle_;
 }
 /** @override @return {IsDefaultPadding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultScaleTitle_;
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return Defaults.m_get__().m_getGlobal__().m_getColorAsString__();
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return DefaultScaleTitle.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_DefaultScaleTitle_;
 }
 /** @override @return {ScaleTitleAlign} */
 m_getAlign__() {
  return ScaleTitleAlign.f_CENTER__org_pepstock_charba_client_enums_ScaleTitleAlign;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultScaleTitle() {
  this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultScaleTitle_ = DefaultPadding.$create__int(DefaultScaleTitle.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultScaleTitle_);
  this.f_font__org_pepstock_charba_client_defaults_globals_DefaultScaleTitle_ = DefaultRoutedFont.$create__();
 }
 
 static $clinit() {
  DefaultScaleTitle.$clinit = () =>{};
  DefaultScaleTitle.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultScaleTitle;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  DefaultPadding = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
  DefaultRoutedFont = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');
  ScaleTitleAlign = goog.module.get('org.pepstock.charba.client.enums.ScaleTitleAlign$impl');
 }
}
/**@const {boolean}*/
DefaultScaleTitle.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_DefaultScaleTitle_ = false;
/**@const {number}*/
DefaultScaleTitle.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultScaleTitle_ = 4;
IsDefaultScaleTitle.$markImplementor(DefaultScaleTitle);
$Util.$setClassMetadata(DefaultScaleTitle, "org.pepstock.charba.client.defaults.globals.DefaultScaleTitle");

exports = DefaultScaleTitle;

//# sourceMappingURL=DefaultScaleTitle.js.map
