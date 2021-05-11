goog.module('org.pepstock.charba.client.commons.Key$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.commons.Key.$LambdaAdaptor$impl');
let StandardKey = goog.forwardDeclare('org.pepstock.charba.client.commons.StandardKey$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @interface
 */
class Key {
 /** @return {Key} */
 static m_create__java_lang_String(/** ?string */ key) {
  Key.$clinit();
  return StandardKey.$create__java_lang_String(key);
 }
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  Key.$clinit();
  return !$Equality.$same(key, null) && !$Equality.$same(key.m_value__(), null) && j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(key.m_value__())) > 0;
 }
 
 static m_checkIfValid__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  Key.$clinit();
  if (!Key.m_isValid__org_pepstock_charba_client_commons_Key(key)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Key is null or not consistent"));
  }
 }
 /** @template T @return {T} */
 static m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(/** T */ key) {
  Key.$clinit();
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
  return key;
 }
 /** @template T @return {boolean} */
 static m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(/** Array<T> */ enumValues, /** ?string */ value) {
  Key.$clinit();
  return !$Equality.$same(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String__org_pepstock_charba_client_commons_Key(enumValues, value, null), null);
 }
 /** @template T @return {T} */
 static m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(/** Array<T> */ enumValues, /** ?string */ value) {
  Key.$clinit();
  return Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String__org_pepstock_charba_client_commons_Key(enumValues, value, null);
 }
 /** @template T @return {T} */
 static m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String__org_pepstock_charba_client_commons_Key(/** Array<T> */ enumValues, /** ?string */ value, /** T */ defaultKey) {
  Key.$clinit();
  if (!$Equality.$same(value, null) && !$Equality.$same(enumValues, null) && enumValues.length > 0) {
   for (let $array = enumValues, $index = 0; $index < $array.length; $index++) {
    let enumValue = $array[$index];
    {
     if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(/**@type {Key}*/ (enumValue).m_value__(), value)) {
      return enumValue;
     }
    }
   }
  }
  return defaultKey;
 }
 /** @return {number} */
 static m_compare__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(/** Key */ k1, /** Key */ k2) {
  Key.$clinit();
  if (!Key.m_isValid__org_pepstock_charba_client_commons_Key(k1)) {
   if (!Key.m_isValid__org_pepstock_charba_client_commons_Key(k2)) {
    return 0;
   }
   return -1 | 0;
  } else {
   if (!Key.m_isValid__org_pepstock_charba_client_commons_Key(k2)) {
    return 1;
   }
   return j_l_String.m_compareToIgnoreCase__java_lang_String__java_lang_String(k1.m_value__(), k2.m_value__());
  }
 }
 /** @return {boolean} */
 static m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(/** Key */ k1, /** Key */ k2) {
  Key.$clinit();
  return Key.m_compare__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(k1, k2) == 0;
 }
 /** @abstract @return {?string} */
 m_value__() {}
 /** @return {Key} */
 static $adapt(/** ?function():?string */ fn) {
  Key.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Key.$clinit = () =>{};
  Key.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_commons_Key = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_commons_Key;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.commons.Key.$LambdaAdaptor$impl');
  StandardKey = goog.module.get('org.pepstock.charba.client.commons.StandardKey$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
Key.$markImplementor(/**@type {Function}*/ (Key));
$Util.$setClassMetadataForInterface(Key, "org.pepstock.charba.client.commons.Key");

exports = Key;

//# sourceMappingURL=Key.js.map
