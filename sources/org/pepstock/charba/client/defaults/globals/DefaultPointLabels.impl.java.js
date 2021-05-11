goog.module('org.pepstock.charba.client.defaults.globals.DefaultPointLabels$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultPointLabels = goog.require('org.pepstock.charba.client.defaults.IsDefaultPointLabels$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let DefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
let DefaultRoutedFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');

/**
 * @implements {IsDefaultPointLabels}
 */
class DefaultPointLabels extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultPadding}*/
  this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultPointLabels_;
  /**@type {DefaultRoutedFont}*/
  this.f_font__org_pepstock_charba_client_defaults_globals_DefaultPointLabels_;
 }
 /** @return {!DefaultPointLabels} */
 static $create__() {
  DefaultPointLabels.$clinit();
  let $instance = new DefaultPointLabels();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultPointLabels__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultPointLabels__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_defaults_globals_DefaultPointLabels();
 }
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_defaults_globals_DefaultPointLabels_;
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return Defaults.m_get__().m_getGlobal__().m_getColorAsString__();
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return DefaultPointLabels.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_DefaultPointLabels_;
 }
 /** @override @return {IsDefaultPadding} */
 m_getBackdropPadding__() {
  return this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultPointLabels_;
 }
 /** @override @return {number} */
 m_getPadding__() {
  return DefaultPointLabels.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultPointLabels_;
 }
 /** @override @return {?string} */
 m_getBackdropColorAsString__() {
  return Defaults.m_get__().m_getGlobal__().m_getBackgroundColorAsString__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultPointLabels() {
  this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultPointLabels_ = DefaultPadding.$create__int(DefaultPointLabels.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultPointLabels_);
  this.f_font__org_pepstock_charba_client_defaults_globals_DefaultPointLabels_ = DefaultRoutedFont.$create__();
 }
 
 static $clinit() {
  DefaultPointLabels.$clinit = () =>{};
  DefaultPointLabels.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultPointLabels;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  DefaultPadding = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
  DefaultRoutedFont = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');
 }
}
/**@const {boolean}*/
DefaultPointLabels.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_DefaultPointLabels_ = false;
/**@const {number}*/
DefaultPointLabels.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultPointLabels_ = 5;
IsDefaultPointLabels.$markImplementor(DefaultPointLabels);
$Util.$setClassMetadata(DefaultPointLabels, "org.pepstock.charba.client.defaults.globals.DefaultPointLabels");

exports = DefaultPointLabels;

//# sourceMappingURL=DefaultPointLabels.js.map
