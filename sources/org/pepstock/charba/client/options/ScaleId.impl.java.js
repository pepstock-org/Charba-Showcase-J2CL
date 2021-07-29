goog.module('org.pepstock.charba.client.options.ScaleId$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyKey = goog.require('org.pepstock.charba.client.commons.PropertyKey$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let StandardScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.StandardScaleId$impl');

/**
 * @interface
 * @extends {PropertyKey}
 */
class ScaleId {
 /** @return {ScaleId} */
 static m_create__java_lang_String(/** ?string */ id) {
  ScaleId.$clinit();
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
  ScaleId.$clinit();
  return PropertyKey.m_isValid__java_lang_String(id);
 }
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_options_ScaleId(/** ScaleId */ id) {
  ScaleId.$clinit();
  return PropertyKey.m_isValid__org_pepstock_charba_client_commons_PropertyKey(id);
 }
 
 static m_checkIfValid__org_pepstock_charba_client_options_ScaleId(/** ScaleId */ id) {
  ScaleId.$clinit();
  PropertyKey.m_checkIfValid__org_pepstock_charba_client_commons_PropertyKey(id);
 }
 
 static m_checkIfValid__java_lang_String(/** ?string */ id) {
  ScaleId.$clinit();
  PropertyKey.m_checkIfValid__java_lang_String(id);
 }
 /** @return {ScaleId} */
 static m_checkAndGetScaleID__java_lang_String__org_pepstock_charba_client_options_ScaleId(/** ?string */ id, /** ScaleId */ defaultValue) {
  ScaleId.$clinit();
  if (ScaleId.m_isValid__java_lang_String(id)) {
   for (let $array = DefaultScaleId.m_values__(), $index = 0; $index < $array.length; $index++) {
    let scaleId = $array[$index];
    {
     if (j_l_String.m_equals__java_lang_String__java_lang_Object(scaleId.m_value__(), id)) {
      return scaleId;
     }
    }
   }
   return ScaleId.m_create__java_lang_String(id);
  }
  return defaultValue;
 }
 /** @abstract @return {AxisKind} */
 m_getAxisKind__() {}
 
 static $clinit() {
  ScaleId.$clinit = () =>{};
  ScaleId.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  PropertyKey.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_ScaleId = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_ScaleId;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  StandardScaleId = goog.module.get('org.pepstock.charba.client.options.StandardScaleId$impl');
 }
}
ScaleId.$markImplementor(/**@type {Function}*/ (ScaleId));
$Util.$setClassMetadataForInterface(ScaleId, "org.pepstock.charba.client.options.ScaleId");

exports = ScaleId;

//# sourceMappingURL=ScaleId.js.map
