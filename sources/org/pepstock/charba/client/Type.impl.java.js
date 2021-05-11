goog.module('org.pepstock.charba.client.Type$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ScaleType = goog.forwardDeclare('org.pepstock.charba.client.ScaleType$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @interface
 * @extends {Key}
 */
class Type {
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_Type(/** Type */ type) {
  Type.$clinit();
  return Key.m_isValid__org_pepstock_charba_client_commons_Key(type) && !$Equality.$same(type.m_scaleType__(), null);
 }
 
 static m_checkIfValid__org_pepstock_charba_client_Type(/** Type */ type) {
  Type.$clinit();
  if (!Type.m_isValid__org_pepstock_charba_client_Type(type)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Type is null or not consistent"));
  }
 }
 /** @template T @return {T} */
 static m_checkAndGetIfValid__org_pepstock_charba_client_Type(/** T */ type) {
  Type.$clinit();
  Type.m_checkIfValid__org_pepstock_charba_client_Type(type);
  return type;
 }
 /** @abstract @return {ScaleType} */
 m_scaleType__() {}
 
 static $clinit() {
  Type.$clinit = () =>{};
  Type.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Key.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_Type = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_Type;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
Type.$markImplementor(/**@type {Function}*/ (Type));
$Util.$setClassMetadataForInterface(Type, "org.pepstock.charba.client.Type");

exports = Type;

//# sourceMappingURL=Type.js.map
