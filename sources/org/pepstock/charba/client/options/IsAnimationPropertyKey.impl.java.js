goog.module('org.pepstock.charba.client.options.IsAnimationPropertyKey$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsTypedAnimationKey = goog.require('org.pepstock.charba.client.options.IsTypedAnimationKey$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AnimationType = goog.forwardDeclare('org.pepstock.charba.client.enums.AnimationType$impl');
let DefaultAnimationPropertyKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultAnimationPropertyKey$impl');
let StandardAnimationProperty = goog.forwardDeclare('org.pepstock.charba.client.options.StandardAnimationProperty$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @interface
 * @extends {IsTypedAnimationKey}
 */
class IsAnimationPropertyKey {
 /** @return {IsAnimationPropertyKey} */
 static m_create__java_lang_String__org_pepstock_charba_client_enums_AnimationType(/** ?string */ property, /** AnimationType */ type) {
  IsAnimationPropertyKey.$clinit();
  if (DefaultAnimationPropertyKey.m_is__java_lang_String(property)) {
   return /**@type {DefaultAnimationPropertyKey}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(DefaultAnimationPropertyKey.m_values__(), property), DefaultAnimationPropertyKey));
  }
  return StandardAnimationProperty.$create__java_lang_String__org_pepstock_charba_client_enums_AnimationType(property, type);
 }
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_options_IsAnimationPropertyKey(/** IsAnimationPropertyKey */ property) {
  IsAnimationPropertyKey.$clinit();
  return Key.m_isValid__org_pepstock_charba_client_commons_Key(property) && Key.m_isValid__org_pepstock_charba_client_commons_Key(property.m_type__());
 }
 
 static m_checkIfValid__org_pepstock_charba_client_options_IsAnimationPropertyKey(/** IsAnimationPropertyKey */ property) {
  IsAnimationPropertyKey.$clinit();
  if (!IsAnimationPropertyKey.m_isValid__org_pepstock_charba_client_options_IsAnimationPropertyKey(property)) {
   let exceptionMessage = !$Equality.$same(property, null) ? "Invalid animation property name, '" + j_l_String.m_valueOf__java_lang_Object(property.m_value__()) + "' because is reserved" : "Animation property is null or not consistent";
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(exceptionMessage));
  }
 }
 /** @return {IsAnimationPropertyKey} */
 static m_checkAndGetIfValid__org_pepstock_charba_client_options_IsAnimationPropertyKey(/** IsAnimationPropertyKey */ property) {
  IsAnimationPropertyKey.$clinit();
  IsAnimationPropertyKey.m_checkIfValid__org_pepstock_charba_client_options_IsAnimationPropertyKey(property);
  return property;
 }
 
 static $clinit() {
  IsAnimationPropertyKey.$clinit = () =>{};
  IsAnimationPropertyKey.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsTypedAnimationKey.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_IsAnimationPropertyKey = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_IsAnimationPropertyKey;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  DefaultAnimationPropertyKey = goog.module.get('org.pepstock.charba.client.enums.DefaultAnimationPropertyKey$impl');
  StandardAnimationProperty = goog.module.get('org.pepstock.charba.client.options.StandardAnimationProperty$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
IsAnimationPropertyKey.$markImplementor(/**@type {Function}*/ (IsAnimationPropertyKey));
$Util.$setClassMetadataForInterface(IsAnimationPropertyKey, "org.pepstock.charba.client.options.IsAnimationPropertyKey");

exports = IsAnimationPropertyKey;

//# sourceMappingURL=IsAnimationPropertyKey.js.map
