goog.module('org.pepstock.charba.client.defaults.globals.DefaultTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultTitle$impl');
const AbstractDefaultTitle = goog.require('org.pepstock.charba.client.defaults.globals.AbstractDefaultTitle$impl');

let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let DefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
let DefaultRoutedFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');
let InternalTitleFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTitle.InternalTitleFont$impl');

/**
 * @implements {IsDefaultTitle}
 */
class DefaultTitle extends AbstractDefaultTitle {
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
  this.$ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultTitle__();
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
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultTitle() {
  this.f_font__org_pepstock_charba_client_defaults_globals_DefaultTitle_ = InternalTitleFont.$create__();
  this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultTitle_ = DefaultPadding.$create__int(DefaultTitle.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultTitle_);
 }
 
 static $clinit() {
  DefaultTitle.$clinit = () =>{};
  DefaultTitle.$loadModules();
  AbstractDefaultTitle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultTitle;
 }
 
 static $loadModules() {
  DefaultPadding = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
  InternalTitleFont = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTitle.InternalTitleFont$impl');
 }
}
/**@const {number}*/
DefaultTitle.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultTitle_ = 10;
IsDefaultTitle.$markImplementor(DefaultTitle);
$Util.$setClassMetadata(DefaultTitle, "org.pepstock.charba.client.defaults.globals.DefaultTitle");

exports = DefaultTitle;

//# sourceMappingURL=DefaultTitle.js.map
