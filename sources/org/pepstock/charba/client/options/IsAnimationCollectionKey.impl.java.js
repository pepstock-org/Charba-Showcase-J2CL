goog.module('org.pepstock.charba.client.options.IsAnimationCollectionKey$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsTypedAnimationKey = goog.require('org.pepstock.charba.client.options.IsTypedAnimationKey$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AnimationType = goog.forwardDeclare('org.pepstock.charba.client.enums.AnimationType$impl');
let DefaultAnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultAnimationCollectionKey$impl');
let IsAnimationPropertyKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsAnimationPropertyKey$impl');
let StandardAnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.options.StandardAnimationCollection$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @interface
 * @extends {IsTypedAnimationKey}
 */
class IsAnimationCollectionKey {
 /** @return {IsAnimationCollectionKey} */
 static m_create__java_lang_String__org_pepstock_charba_client_enums_AnimationType(/** ?string */ collection, /** AnimationType */ type) {
  IsAnimationCollectionKey.$clinit();
  for (let $array = DefaultAnimationCollectionKey.m_values__(), $index = 0; $index < $array.length; $index++) {
   let defCollection = $array[$index];
   {
    if (j_l_String.m_equals__java_lang_String__java_lang_Object(defCollection.m_value__(), collection)) {
     return defCollection;
    }
   }
  }
  return StandardAnimationCollection.$create__java_lang_String__org_pepstock_charba_client_enums_AnimationType(collection, type);
 }
 /** @return {IsAnimationCollectionKey} */
 static m_create__java_lang_String__arrayOf_org_pepstock_charba_client_options_IsAnimationPropertyKey(/** ?string */ collection, /** Array<IsAnimationPropertyKey> */ properties) {
  IsAnimationCollectionKey.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(properties, "Animation collection properties");
  Checker.m_checkIfNotEqualTo__int__int__java_lang_String(properties.length, 0, "Inavlid amount of animation collection properties. It");
  let result = null;
  for (let $array = properties, $index = 0; $index < $array.length; $index++) {
   let property = $array[$index];
   {
    IsAnimationPropertyKey.m_checkIfValid__org_pepstock_charba_client_options_IsAnimationPropertyKey(property);
    if ($Equality.$same(result, null)) {
     result = IsAnimationCollectionKey.m_create__java_lang_String__org_pepstock_charba_client_enums_AnimationType(collection, property.m_type__());
    } else if (!$Objects.m_equals__java_lang_Object__java_lang_Object(result.m_type__(), property.m_type__())) {
     throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Animation collection properties do not have the same type"));
    }
    result.m_properties__().add(property);
   }
  }
  return result;
 }
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {
  IsAnimationCollectionKey.$clinit();
  return Key.m_isValid__org_pepstock_charba_client_commons_Key(collection) && Key.m_isValid__org_pepstock_charba_client_commons_Key(collection.m_type__());
 }
 
 static m_checkIfValid__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {
  IsAnimationCollectionKey.$clinit();
  if (!IsAnimationCollectionKey.m_isValid__org_pepstock_charba_client_options_IsAnimationCollectionKey(collection)) {
   let exceptionMessage = !$Equality.$same(collection, null) ? "Invalid animation collection name, '" + j_l_String.m_valueOf__java_lang_Object(collection.m_value__()) + "' because is reserved" : "Animation collection is null or not consistent";
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(exceptionMessage));
  }
 }
 /** @return {IsAnimationCollectionKey} */
 static m_checkAndGetIfValid__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {
  IsAnimationCollectionKey.$clinit();
  IsAnimationCollectionKey.m_checkIfValid__org_pepstock_charba_client_options_IsAnimationCollectionKey(collection);
  return collection;
 }
 /** @abstract @return {List<IsAnimationPropertyKey>} */
 m_properties__() {}
 
 static $clinit() {
  IsAnimationCollectionKey.$clinit = () =>{};
  IsAnimationCollectionKey.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsTypedAnimationKey.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_IsAnimationCollectionKey = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_IsAnimationCollectionKey;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  DefaultAnimationCollectionKey = goog.module.get('org.pepstock.charba.client.enums.DefaultAnimationCollectionKey$impl');
  IsAnimationPropertyKey = goog.module.get('org.pepstock.charba.client.options.IsAnimationPropertyKey$impl');
  StandardAnimationCollection = goog.module.get('org.pepstock.charba.client.options.StandardAnimationCollection$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
IsAnimationCollectionKey.$markImplementor(/**@type {Function}*/ (IsAnimationCollectionKey));
$Util.$setClassMetadataForInterface(IsAnimationCollectionKey, "org.pepstock.charba.client.options.IsAnimationCollectionKey");

exports = IsAnimationCollectionKey;

//# sourceMappingURL=IsAnimationCollectionKey.js.map
