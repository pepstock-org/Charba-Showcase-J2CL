goog.module('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultPadding = goog.require('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');

let PaddingItem = goog.forwardDeclare('org.pepstock.charba.client.items.PaddingItem$impl');

/**
 * @implements {IsDefaultPadding}
 */
class DefaultPadding extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultPadding_ = 0;
 }
 /** @return {!DefaultPadding} */
 static $create__int(/** number */ padding) {
  DefaultPadding.$clinit();
  let $instance = new DefaultPadding();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultPadding__int(padding);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultPadding__int(/** number */ padding) {
  this.$ctor__java_lang_Object__();
  this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultPadding_ = padding;
 }
 /** @override @return {number} */
 m_getLeft__() {
  return this.m_getDefaultPadding___$p_org_pepstock_charba_client_defaults_globals_DefaultPadding();
 }
 /** @override @return {number} */
 m_getRight__() {
  return this.m_getDefaultPadding___$p_org_pepstock_charba_client_defaults_globals_DefaultPadding();
 }
 /** @override @return {number} */
 m_getTop__() {
  return this.m_getDefaultPadding___$p_org_pepstock_charba_client_defaults_globals_DefaultPadding();
 }
 /** @override @return {number} */
 m_getBottom__() {
  return this.m_getDefaultPadding___$p_org_pepstock_charba_client_defaults_globals_DefaultPadding();
 }
 /** @return {number} */
 m_getDefaultPadding___$p_org_pepstock_charba_client_defaults_globals_DefaultPadding() {
  return this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultPadding_;
 }
 //Default method forwarding stub.
 /** @override @return {PaddingItem} */
 m_create__() {
  return IsDefaultPadding.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultPadding(this);
 }
 //Default method forwarding stub.
 /** @override @return {PaddingItem} */
 m_create__org_pepstock_charba_client_defaults_IsDefaultPadding(/** IsDefaultPadding */ arg0) {
  return IsDefaultPadding.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_defaults_IsDefaultPadding(this, arg0);
 }
 
 static $clinit() {
  DefaultPadding.$clinit = () =>{};
  DefaultPadding.$loadModules();
  j_l_Object.$clinit();
  IsDefaultPadding.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultPadding;
 }
 
 static $loadModules() {}
}
IsDefaultPadding.$markImplementor(DefaultPadding);
$Util.$setClassMetadata(DefaultPadding, "org.pepstock.charba.client.defaults.globals.DefaultPadding");

exports = DefaultPadding;

//# sourceMappingURL=DefaultPadding.js.map
