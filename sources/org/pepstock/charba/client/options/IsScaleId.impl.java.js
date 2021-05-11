goog.module('org.pepstock.charba.client.options.IsScaleId$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyKey = goog.require('org.pepstock.charba.client.commons.PropertyKey$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId.$LambdaAdaptor$impl');
let StandardScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.StandardScaleId$impl');

/**
 * @interface
 * @extends {PropertyKey}
 */
class IsScaleId {
 /** @return {IsScaleId} */
 static m_create__java_lang_String(/** ?string */ id) {
  IsScaleId.$clinit();
  for (let $array = DefaultScaleId.m_values__(), $index = 0; $index < $array.length; $index++) {
   let defScaleId = $array[$index];
   {
    if (j_l_String.m_equals__java_lang_String__java_lang_Object(defScaleId.m_value__(), id)) {
     return defScaleId;
    }
   }
  }
  return StandardScaleId.$create__java_lang_String(id);
 }
 /** @return {boolean} */
 static m_isValid__java_lang_String(/** ?string */ id) {
  IsScaleId.$clinit();
  return PropertyKey.m_isValid__java_lang_String(id);
 }
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_options_IsScaleId(/** IsScaleId */ id) {
  IsScaleId.$clinit();
  return PropertyKey.m_isValid__org_pepstock_charba_client_commons_PropertyKey(id);
 }
 
 static m_checkIfValid__org_pepstock_charba_client_options_IsScaleId(/** IsScaleId */ id) {
  IsScaleId.$clinit();
  PropertyKey.m_checkIfValid__org_pepstock_charba_client_commons_PropertyKey(id);
 }
 
 static m_checkIfValid__java_lang_String(/** ?string */ id) {
  IsScaleId.$clinit();
  PropertyKey.m_checkIfValid__java_lang_String(id);
 }
 /** @return {IsScaleId} */
 static m_checkAndGetScaleID__java_lang_String__org_pepstock_charba_client_options_IsScaleId(/** ?string */ id, /** IsScaleId */ defaultValue) {
  IsScaleId.$clinit();
  if (IsScaleId.m_isValid__java_lang_String(id)) {
   for (let $array = DefaultScaleId.m_values__(), $index = 0; $index < $array.length; $index++) {
    let scaleId = $array[$index];
    {
     if (j_l_String.m_equals__java_lang_String__java_lang_Object(scaleId.m_value__(), id)) {
      return scaleId;
     }
    }
   }
   return IsScaleId.m_create__java_lang_String(id);
  }
  return defaultValue;
 }
 /** @return {IsScaleId} */
 static $adapt(/** ?function():?string */ fn) {
  IsScaleId.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  IsScaleId.$clinit = () =>{};
  IsScaleId.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  PropertyKey.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_IsScaleId = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_IsScaleId;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.options.IsScaleId.$LambdaAdaptor$impl');
  StandardScaleId = goog.module.get('org.pepstock.charba.client.options.StandardScaleId$impl');
 }
}
IsScaleId.$markImplementor(/**@type {Function}*/ (IsScaleId));
$Util.$setClassMetadataForInterface(IsScaleId, "org.pepstock.charba.client.options.IsScaleId");

exports = IsScaleId;

//# sourceMappingURL=IsScaleId.js.map
