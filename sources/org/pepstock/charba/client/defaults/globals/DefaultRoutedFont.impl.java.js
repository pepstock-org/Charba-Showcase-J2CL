goog.module('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultFont = goog.require('org.pepstock.charba.client.defaults.IsDefaultFont$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let FontItem = goog.forwardDeclare('org.pepstock.charba.client.items.FontItem$impl');

/**
 * @implements {IsDefaultFont}
 */
class DefaultRoutedFont extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultRoutedFont} */
 static $create__() {
  DefaultRoutedFont.$clinit();
  let $instance = new DefaultRoutedFont();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultRoutedFont__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultRoutedFont__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {number} */
 m_getSize__() {
  return Defaults.m_get__().m_getGlobal__().m_getFont__().m_getSize__();
 }
 /** @override @return {FontStyle} */
 m_getStyle__() {
  return Defaults.m_get__().m_getGlobal__().m_getFont__().m_getStyle__();
 }
 /** @override @return {?string} */
 m_getFamily__() {
  return Defaults.m_get__().m_getGlobal__().m_getFont__().m_getFamily__();
 }
 /** @override @return {Weight} */
 m_getWeight__() {
  return Defaults.m_get__().m_getGlobal__().m_getFont__().m_getWeight__();
 }
 /** @override @return {number} */
 m_getLineHeight__() {
  return Defaults.m_get__().m_getGlobal__().m_getFont__().m_getLineHeight__();
 }
 /** @override @return {?string} */
 m_getLineHeightAsString__() {
  return Defaults.m_get__().m_getGlobal__().m_getFont__().m_getLineHeightAsString__();
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
  DefaultRoutedFont.$clinit = () =>{};
  DefaultRoutedFont.$loadModules();
  j_l_Object.$clinit();
  IsDefaultFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultRoutedFont;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
 }
}
IsDefaultFont.$markImplementor(DefaultRoutedFont);
$Util.$setClassMetadata(DefaultRoutedFont, "org.pepstock.charba.client.defaults.globals.DefaultRoutedFont");

exports = DefaultRoutedFont;

//# sourceMappingURL=DefaultRoutedFont.js.map
