goog.module('org.pepstock.charba.client.intl.IsLocaleItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @interface
 * @extends {Key}
 */
class IsLocaleItem {
 /** @template T @return {List<T>} */
 static m_getItemsByName__arrayOf_org_pepstock_charba_client_intl_IsLocaleItem__java_lang_String(/** Array<T> */ enumValues, /** ?string */ name) {
  IsLocaleItem.$clinit();
  let result = /**@type {!ArrayList<T>}*/ (ArrayList.$create__());
  if (!$Equality.$same(name, null) && !$Equality.$same(enumValues, null) && enumValues.length > 0) {
   let nameLowerCase = j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(name, Locale.m_getDefault__());
   for (let $array = enumValues, $index = 0; $index < $array.length; $index++) {
    let enumValue = $array[$index];
    {
     if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence(j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(/**@type {IsLocaleItem}*/ (enumValue).m_getName__(), Locale.m_getDefault__()), nameLowerCase)) {
      result.add(enumValue);
     }
     if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence(j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(/**@type {IsLocaleItem}*/ (enumValue).m_value__(), Locale.m_getDefault__()), nameLowerCase)) {
      result.add(enumValue);
     }
    }
   }
  }
  return /**@type {List<T>}*/ (Collections.m_unmodifiableList__java_util_List(result));
 }
 /** @abstract @return {?string} */
 m_getName__() {}
 
 static $clinit() {
  IsLocaleItem.$clinit = () =>{};
  IsLocaleItem.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Key.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_intl_IsLocaleItem = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_intl_IsLocaleItem;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
IsLocaleItem.$markImplementor(/**@type {Function}*/ (IsLocaleItem));
$Util.$setClassMetadataForInterface(IsLocaleItem, "org.pepstock.charba.client.intl.IsLocaleItem");

exports = IsLocaleItem;

//# sourceMappingURL=IsLocaleItem.js.map
