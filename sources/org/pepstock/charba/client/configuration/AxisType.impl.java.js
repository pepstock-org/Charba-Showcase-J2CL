goog.module('org.pepstock.charba.client.configuration.AxisType$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyKey = goog.require('org.pepstock.charba.client.commons.PropertyKey$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AxisTypesManager = goog.forwardDeclare('org.pepstock.charba.client.configuration.AxisTypesManager$impl');
let StandardAxisType = goog.forwardDeclare('org.pepstock.charba.client.configuration.StandardAxisType$impl');
let ChartAxisType = goog.forwardDeclare('org.pepstock.charba.client.enums.ChartAxisType$impl');
let ScaleDataType = goog.forwardDeclare('org.pepstock.charba.client.enums.ScaleDataType$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @interface
 * @extends {PropertyKey}
 */
class AxisType {
 /** @return {AxisType} */
 static m_create__java_lang_String__org_pepstock_charba_client_enums_ChartAxisType(/** ?string */ type, /** ChartAxisType */ baseType) {
  AxisType.$clinit();
  return AxisType.m_create__java_lang_String__org_pepstock_charba_client_enums_ChartAxisType__org_pepstock_charba_client_options_ScaleId(type, baseType, AxisType.m_isValid__org_pepstock_charba_client_configuration_AxisType(baseType) ? baseType.m_getDefaultScaleId__() : null);
 }
 /** @return {AxisType} */
 static m_create__java_lang_String__org_pepstock_charba_client_enums_ChartAxisType__org_pepstock_charba_client_options_ScaleId(/** ?string */ type, /** ChartAxisType */ baseType, /** ScaleId */ defaultScaleId) {
  AxisType.$clinit();
  return AxisType.m_create__java_lang_String__org_pepstock_charba_client_enums_ChartAxisType__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_ScaleDataType(type, baseType, defaultScaleId, AxisType.m_isValid__org_pepstock_charba_client_configuration_AxisType(baseType) ? baseType.m_getDataType__() : null);
 }
 /** @return {AxisType} */
 static m_create__java_lang_String__org_pepstock_charba_client_enums_ChartAxisType__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_ScaleDataType(/** ?string */ type, /** ChartAxisType */ baseType, /** ScaleId */ defaultScaleId, /** ScaleDataType */ dataType) {
  AxisType.$clinit();
  let resultType = AxisTypesManager.m_get__().m_get__java_lang_String_$pp_org_pepstock_charba_client_configuration(type);
  if (!$Equality.$same(resultType, null)) {
   return resultType;
  }
  return StandardAxisType.$create__java_lang_String__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_ScaleDataType(type, baseType, defaultScaleId, dataType);
 }
 
 static m_register__org_pepstock_charba_client_configuration_AxisType(/** AxisType */ type) {
  AxisType.$clinit();
  AxisType.m_register__org_pepstock_charba_client_configuration_AxisType__boolean(type, false);
 }
 
 static m_register__org_pepstock_charba_client_configuration_AxisType__boolean(/** AxisType */ type, /** boolean */ force) {
  AxisType.$clinit();
  if (force || AxisType.m_isValid__org_pepstock_charba_client_configuration_AxisType(type) && !AxisTypesManager.m_get__().m_has__java_lang_String_$pp_org_pepstock_charba_client_configuration(type.m_value__())) {
   AxisTypesManager.m_get__().m_add__org_pepstock_charba_client_configuration_AxisType_$pp_org_pepstock_charba_client_configuration(type);
  }
 }
 /** @return {AxisType} */
 static m_checkAndGet__java_lang_String(/** ?string */ type) {
  AxisType.$clinit();
  let resultType = AxisTypesManager.m_get__().m_get__java_lang_String_$pp_org_pepstock_charba_client_configuration(type);
  if (!$Equality.$same(resultType, null)) {
   return resultType;
  }
  throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Axis type '" + j_l_String.m_valueOf__java_lang_Object(type) + "' is undefined"));
 }
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_configuration_AxisType(/** AxisType */ type) {
  AxisType.$clinit();
  return Key.m_isValid__org_pepstock_charba_client_commons_Key(type) && !$Equality.$same(type.m_getDataType__(), null) && ScaleId.m_isValid__org_pepstock_charba_client_options_ScaleId(type.m_getDefaultScaleId__()) && !$Equality.$same(type.m_getBaseType__(), null);
 }
 
 static m_checkIfValid__org_pepstock_charba_client_configuration_AxisType(/** AxisType */ type) {
  AxisType.$clinit();
  if (!AxisType.m_isValid__org_pepstock_charba_client_configuration_AxisType(type)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Axis type is null or not consistent"));
  }
 }
 /** @template T @return {T} */
 static m_checkAndGetIfValid__org_pepstock_charba_client_configuration_AxisType(/** T */ type) {
  AxisType.$clinit();
  AxisType.m_checkIfValid__org_pepstock_charba_client_configuration_AxisType(type);
  return type;
 }
 /** @abstract @return {AxisType} */
 m_getBaseType__() {}
 /** @abstract @return {ScaleId} */
 m_getDefaultScaleId__() {}
 /** @abstract @return {ScaleDataType} */
 m_getDataType__() {}
 
 static $clinit() {
  AxisType.$clinit = () =>{};
  AxisType.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  PropertyKey.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_configuration_AxisType = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_configuration_AxisType;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  AxisTypesManager = goog.module.get('org.pepstock.charba.client.configuration.AxisTypesManager$impl');
  StandardAxisType = goog.module.get('org.pepstock.charba.client.configuration.StandardAxisType$impl');
  ScaleId = goog.module.get('org.pepstock.charba.client.options.ScaleId$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
AxisType.$markImplementor(/**@type {Function}*/ (AxisType));
$Util.$setClassMetadataForInterface(AxisType, "org.pepstock.charba.client.configuration.AxisType");

exports = AxisType;

//# sourceMappingURL=AxisType.js.map
