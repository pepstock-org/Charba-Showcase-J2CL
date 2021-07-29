goog.module('org.pepstock.charba.client.defaults.globals.DefaultSubtitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultSubtitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultSubtitle$impl');
const AbstractDefaultTitle = goog.require('org.pepstock.charba.client.defaults.globals.AbstractDefaultTitle$impl');

let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let DefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
let DefaultRoutedFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');
let InternalSubtitleFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultSubtitle.InternalSubtitleFont$impl');

/**
 * @implements {IsDefaultSubtitle}
 */
class DefaultSubtitle extends AbstractDefaultTitle {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultRoutedFont}*/
  this.f_font__org_pepstock_charba_client_defaults_globals_DefaultSubtitle_;
  /**@type {DefaultPadding}*/
  this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultSubtitle_;
 }
 /** @return {!DefaultSubtitle} */
 static $create__() {
  DefaultSubtitle.$clinit();
  let $instance = new DefaultSubtitle();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultSubtitle__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultSubtitle__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultTitle__();
  this.$init___$p_org_pepstock_charba_client_defaults_globals_DefaultSubtitle();
 }
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_defaults_globals_DefaultSubtitle_;
 }
 /** @override @return {IsDefaultPadding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultSubtitle_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultSubtitle() {
  this.f_font__org_pepstock_charba_client_defaults_globals_DefaultSubtitle_ = InternalSubtitleFont.$create__();
  this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultSubtitle_ = DefaultPadding.$create__int(DefaultSubtitle.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultSubtitle_);
 }
 
 static $clinit() {
  DefaultSubtitle.$clinit = () =>{};
  DefaultSubtitle.$loadModules();
  AbstractDefaultTitle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultSubtitle;
 }
 
 static $loadModules() {
  DefaultPadding = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
  InternalSubtitleFont = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultSubtitle.InternalSubtitleFont$impl');
 }
}
/**@const {number}*/
DefaultSubtitle.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultSubtitle_ = 0;
IsDefaultSubtitle.$markImplementor(DefaultSubtitle);
$Util.$setClassMetadata(DefaultSubtitle, "org.pepstock.charba.client.defaults.globals.DefaultSubtitle");

exports = DefaultSubtitle;

//# sourceMappingURL=DefaultSubtitle.js.map
