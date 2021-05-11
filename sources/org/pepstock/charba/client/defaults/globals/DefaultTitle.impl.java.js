goog.module('org.pepstock.charba.client.defaults.globals.DefaultTitle$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultTitle$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let DefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
let DefaultRoutedFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');
let InternalTitleFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTitle.InternalTitleFont$impl');
let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');

/**
 * @implements {IsDefaultTitle}
 */
class DefaultTitle extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultRoutedFont}*/
  this.f_font__org_pepstock_charba_client_defaults_globals_DefaultTitle_;
  /**@type {DefaultPadding}*/
  this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultTitle_;
 }
 /** @return {!DefaultTitle} */
 static $create__() {
  DefaultTitle.$clinit();
  let $instance = new DefaultTitle();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTitle__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTitle__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_defaults_globals_DefaultTitle();
 }
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_defaults_globals_DefaultTitle_;
 }
 /** @override @return {IsDefaultPadding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultTitle_;
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return DefaultTitle.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_DefaultTitle_;
 }
 /** @override @return {Position} */
 m_getPosition__() {
  return Position.f_TOP__org_pepstock_charba_client_enums_Position;
 }
 /** @override @return {boolean} */
 m_isFullSize__() {
  return DefaultTitle.f_DEFAULT_FULL_SIZE__org_pepstock_charba_client_defaults_globals_DefaultTitle_;
 }
 /** @override @return {ElementAlign} */
 m_getAlign__() {
  return ElementAlign.f_CENTER__org_pepstock_charba_client_enums_ElementAlign;
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return Defaults.m_get__().m_getGlobal__().m_getColorAsString__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultTitle() {
  this.f_font__org_pepstock_charba_client_defaults_globals_DefaultTitle_ = InternalTitleFont.$create__();
  this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultTitle_ = DefaultPadding.$create__int(DefaultTitle.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultTitle_);
 }
 
 static $clinit() {
  DefaultTitle.$clinit = () =>{};
  DefaultTitle.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultTitle;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  DefaultPadding = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
  InternalTitleFont = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTitle.InternalTitleFont$impl');
  ElementAlign = goog.module.get('org.pepstock.charba.client.enums.ElementAlign$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
 }
}
/**@const {number}*/
DefaultTitle.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultTitle_ = 10;
/**@const {boolean}*/
DefaultTitle.f_DEFAULT_FULL_SIZE__org_pepstock_charba_client_defaults_globals_DefaultTitle_ = true;
/**@const {boolean}*/
DefaultTitle.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_DefaultTitle_ = false;
IsDefaultTitle.$markImplementor(DefaultTitle);
$Util.$setClassMetadata(DefaultTitle, "org.pepstock.charba.client.defaults.globals.DefaultTitle");

exports = DefaultTitle;

//# sourceMappingURL=DefaultTitle.js.map
