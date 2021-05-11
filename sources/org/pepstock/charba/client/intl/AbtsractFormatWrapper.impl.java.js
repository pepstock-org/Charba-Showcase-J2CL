goog.module('org.pepstock.charba.client.intl.AbtsractFormatWrapper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');

/**
 * @abstract
 * @template N, T, R
 */
class AbtsractFormatWrapper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {N}*/
  this.f_nativeFormat__org_pepstock_charba_client_intl_AbtsractFormatWrapper_;
 }
 
 $ctor__org_pepstock_charba_client_intl_AbtsractFormatWrapper__java_lang_Object(/** N */ nativeFormat) {
  this.$ctor__java_lang_Object__();
  this.f_nativeFormat__org_pepstock_charba_client_intl_AbtsractFormatWrapper_ = Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(nativeFormat, "Native format argument");
 }
 /** @return {N} */
 m_getNativeFormat___$pp_org_pepstock_charba_client_intl() {
  return this.f_nativeFormat__org_pepstock_charba_client_intl_AbtsractFormatWrapper_;
 }
 /** @abstract @return {?string} */
 m_format__java_lang_Object_$pp_org_pepstock_charba_client_intl(/** T */ value) {}
 /** @abstract @return {R} */
 m_resolvedOptions___$pp_org_pepstock_charba_client_intl() {}
 /** @abstract @return {Array} */
 m_formatToParts__java_lang_Object_$pp_org_pepstock_charba_client_intl(/** T */ value) {}
 
 static $clinit() {
  AbtsractFormatWrapper.$clinit = () =>{};
  AbtsractFormatWrapper.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbtsractFormatWrapper;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
 }
}
$Util.$setClassMetadata(AbtsractFormatWrapper, "org.pepstock.charba.client.intl.AbtsractFormatWrapper");

exports = AbtsractFormatWrapper;

//# sourceMappingURL=AbtsractFormatWrapper.js.map
