goog.module('org.pepstock.charba.client.configuration.StandardAxisType$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AxisType = goog.require('org.pepstock.charba.client.configuration.AxisType$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ScaleDataType = goog.forwardDeclare('org.pepstock.charba.client.enums.ScaleDataType$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {AxisType}
 */
class StandardAxisType extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_type__org_pepstock_charba_client_configuration_StandardAxisType_;
  /**@type {AxisType}*/
  this.f_baseType__org_pepstock_charba_client_configuration_StandardAxisType_;
  /**@type {ScaleId}*/
  this.f_defaultScaleId__org_pepstock_charba_client_configuration_StandardAxisType_;
  /**@type {ScaleDataType}*/
  this.f_dataType__org_pepstock_charba_client_configuration_StandardAxisType_;
 }
 /** @return {!StandardAxisType} */
 static $create__java_lang_String__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_ScaleDataType(/** ?string */ type, /** AxisType */ baseType, /** ScaleId */ defaultScaleId, /** ScaleDataType */ dataType) {
  StandardAxisType.$clinit();
  let $instance = new StandardAxisType();
  $instance.$ctor__org_pepstock_charba_client_configuration_StandardAxisType__java_lang_String__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_ScaleDataType(type, baseType, defaultScaleId, dataType);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_StandardAxisType__java_lang_String__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_ScaleDataType(/** ?string */ type, /** AxisType */ baseType, /** ScaleId */ defaultScaleId, /** ScaleDataType */ dataType) {
  this.$ctor__java_lang_Object__();
  this.f_type__org_pepstock_charba_client_configuration_StandardAxisType_ = type;
  this.f_defaultScaleId__org_pepstock_charba_client_configuration_StandardAxisType_ = defaultScaleId;
  this.f_dataType__org_pepstock_charba_client_configuration_StandardAxisType_ = dataType;
  this.f_baseType__org_pepstock_charba_client_configuration_StandardAxisType_ = AxisType.m_isValid__org_pepstock_charba_client_configuration_AxisType(baseType) ? baseType : null;
  AxisType.m_checkIfValid__org_pepstock_charba_client_configuration_AxisType(this);
  AxisType.m_register__org_pepstock_charba_client_configuration_AxisType(this);
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_type__org_pepstock_charba_client_configuration_StandardAxisType_;
 }
 /** @override @return {ScaleId} */
 m_getDefaultScaleId__() {
  return this.f_defaultScaleId__org_pepstock_charba_client_configuration_StandardAxisType_;
 }
 /** @override @return {ScaleDataType} */
 m_getDataType__() {
  return this.f_dataType__org_pepstock_charba_client_configuration_StandardAxisType_;
 }
 /** @override @return {AxisType} */
 m_getBaseType__() {
  return $Equality.$same(this.f_baseType__org_pepstock_charba_client_configuration_StandardAxisType_, null) ? this : this.f_baseType__org_pepstock_charba_client_configuration_StandardAxisType_;
 }
 /** @override @return {number} */
 hashCode() {
  let prime = 31;
  let result = 1;
  result = Math.imul(prime, result) + ($Equality.$same(this.f_type__org_pepstock_charba_client_configuration_StandardAxisType_, null) ? 0 : j_l_String.m_hashCode__java_lang_String(this.f_type__org_pepstock_charba_client_configuration_StandardAxisType_)) | 0;
  return result;
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if ($Equality.$same(this, obj)) {
   return true;
  }
  if ($Equality.$same(obj, null)) {
   return false;
  }
  if (!$Equality.$same(this.m_getClass__(), $Objects.m_getClass__java_lang_Object(obj))) {
   return false;
  }
  let other = /**@type {AxisType}*/ ($Casts.$to(obj, AxisType));
  return Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(this, other);
 }
 
 static $clinit() {
  StandardAxisType.$clinit = () =>{};
  StandardAxisType.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StandardAxisType;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
AxisType.$markImplementor(StandardAxisType);
$Util.$setClassMetadata(StandardAxisType, "org.pepstock.charba.client.configuration.StandardAxisType");

exports = StandardAxisType;

//# sourceMappingURL=StandardAxisType.js.map
