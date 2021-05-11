goog.module('org.pepstock.charba.client.defaults.globals.DefaultLegendTitle$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLegendTitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultLegendTitle$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let DefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
let DefaultRoutedFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');

/**
 * @implements {IsDefaultLegendTitle}
 */
class DefaultLegendTitle extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultRoutedFont}*/
  this.f_font__org_pepstock_charba_client_defaults_globals_DefaultLegendTitle_;
  /**@type {DefaultPadding}*/
  this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultLegendTitle_;
 }
 /** @return {!DefaultLegendTitle} */
 static $create__() {
  DefaultLegendTitle.$clinit();
  let $instance = new DefaultLegendTitle();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultLegendTitle__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultLegendTitle__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_defaults_globals_DefaultLegendTitle();
 }
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_defaults_globals_DefaultLegendTitle_;
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return Defaults.m_get__().m_getGlobal__().m_getColorAsString__();
 }
 /** @override @return {IsDefaultPadding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultLegendTitle_;
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return DefaultLegendTitle.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_DefaultLegendTitle_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultLegendTitle() {
  this.f_font__org_pepstock_charba_client_defaults_globals_DefaultLegendTitle_ = DefaultRoutedFont.$create__();
  this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultLegendTitle_ = DefaultPadding.$create__int(DefaultLegendTitle.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultLegendTitle_);
 }
 
 static $clinit() {
  DefaultLegendTitle.$clinit = () =>{};
  DefaultLegendTitle.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultLegendTitle;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  DefaultPadding = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
  DefaultRoutedFont = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');
 }
}
/**@const {number}*/
DefaultLegendTitle.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultLegendTitle_ = 0;
/**@const {boolean}*/
DefaultLegendTitle.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_DefaultLegendTitle_ = false;
IsDefaultLegendTitle.$markImplementor(DefaultLegendTitle);
$Util.$setClassMetadata(DefaultLegendTitle, "org.pepstock.charba.client.defaults.globals.DefaultLegendTitle");

exports = DefaultLegendTitle;

//# sourceMappingURL=DefaultLegendTitle.js.map
