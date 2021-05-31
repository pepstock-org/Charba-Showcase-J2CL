goog.module('org.pepstock.charba.client.commons.Envelop$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @interface
 */
class Envelop {
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_commons_Envelop(/** Envelop */ envelop) {
  Envelop.$clinit();
  return !$Equality.$same(envelop, null) && (envelop.m_hasContent__() || envelop.m_isNullable__());
 }
 
 static m_checkIfValid__org_pepstock_charba_client_commons_Envelop(/** Envelop */ envelop) {
  Envelop.$clinit();
  if (!Envelop.m_isValid__org_pepstock_charba_client_commons_Envelop(envelop)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Envelop is null or not consistent"));
  }
 }
 /** @template T @return {T} */
 static m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(/** T */ envelop) {
  Envelop.$clinit();
  Envelop.m_checkIfValid__org_pepstock_charba_client_commons_Envelop(envelop);
  return envelop;
 }
 /** @abstract @return {boolean} */
 m_hasContent__() {}
 /** @abstract @return {boolean} */
 m_isNullable__() {}
 
 static $clinit() {
  Envelop.$clinit = () =>{};
  Envelop.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_commons_Envelop = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_commons_Envelop;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
Envelop.$markImplementor(/**@type {Function}*/ (Envelop));
$Util.$setClassMetadataForInterface(Envelop, "org.pepstock.charba.client.commons.Envelop");

exports = Envelop;

//# sourceMappingURL=Envelop.js.map
