goog.module('org.pepstock.charba.client.commons.NativeArrayContainer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JSON_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.utils.JSON.$Overlay$impl');

/**
 * @abstract
 * @template T
 */
class NativeArrayContainer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {T}*/
  this.f_nativeArray__org_pepstock_charba_client_commons_NativeArrayContainer_;
 }
 
 $ctor__org_pepstock_charba_client_commons_NativeArrayContainer__org_pepstock_charba_client_commons_Array(/** T */ nativeArray) {
  this.$ctor__java_lang_Object__();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(nativeArray, "Array instance");
  this.f_nativeArray__org_pepstock_charba_client_commons_NativeArrayContainer_ = nativeArray;
 }
 /** @return {T} */
 m_getNativeArray__() {
  return this.f_nativeArray__org_pepstock_charba_client_commons_NativeArrayContainer_;
 }
 /** @return {?string} */
 m_toJSON__() {
  return JSON_$Overlay.m_stringifyWithReplacer__java_lang_Object__int(this.f_nativeArray__org_pepstock_charba_client_commons_NativeArrayContainer_, 3);
 }
 
 static $clinit() {
  NativeArrayContainer.$clinit = () =>{};
  NativeArrayContainer.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NativeArrayContainer;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JSON_$Overlay = goog.module.get('org.pepstock.charba.client.utils.JSON.$Overlay$impl');
 }
}
$Util.$setClassMetadata(NativeArrayContainer, "org.pepstock.charba.client.commons.NativeArrayContainer");

exports = NativeArrayContainer;

//# sourceMappingURL=NativeArrayContainer.js.map
