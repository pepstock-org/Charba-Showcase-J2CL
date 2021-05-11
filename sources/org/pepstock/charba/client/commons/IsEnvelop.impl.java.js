goog.module('org.pepstock.charba.client.commons.IsEnvelop$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @interface
 */
class IsEnvelop {
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_commons_IsEnvelop(/** IsEnvelop */ envelop) {
  IsEnvelop.$clinit();
  return !$Equality.$same(envelop, null) && (envelop.m_hasContent__() || envelop.m_isNullable__());
 }
 
 static m_checkIfValid__org_pepstock_charba_client_commons_IsEnvelop(/** IsEnvelop */ envelop) {
  IsEnvelop.$clinit();
  if (!IsEnvelop.m_isValid__org_pepstock_charba_client_commons_IsEnvelop(envelop)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Envelop is null or not consistent"));
  }
 }
 /** @template T @return {T} */
 static m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(/** T */ envelop) {
  IsEnvelop.$clinit();
  IsEnvelop.m_checkIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop);
  return envelop;
 }
 /** @abstract @return {boolean} */
 m_hasContent__() {}
 /** @abstract @return {boolean} */
 m_isNullable__() {}
 
 static $clinit() {
  IsEnvelop.$clinit = () =>{};
  IsEnvelop.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_commons_IsEnvelop = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_commons_IsEnvelop;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
IsEnvelop.$markImplementor(/**@type {Function}*/ (IsEnvelop));
$Util.$setClassMetadataForInterface(IsEnvelop, "org.pepstock.charba.client.commons.IsEnvelop");

exports = IsEnvelop;

//# sourceMappingURL=IsEnvelop.js.map
