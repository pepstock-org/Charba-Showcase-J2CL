goog.module('org.pepstock.charba.client.options.Decimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDecimation = goog.require('org.pepstock.charba.client.defaults.IsDefaultDecimation$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let DecimationAlgorithm = goog.forwardDeclare('org.pepstock.charba.client.enums.DecimationAlgorithm$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Decimation.Property$impl');
let Plugins = goog.forwardDeclare('org.pepstock.charba.client.options.Plugins$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractModel<Plugins, IsDefaultDecimation>}
 * @implements {IsDefaultDecimation}
 */
class Decimation extends AbstractModel {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Decimation} */
 static $create__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultDecimation__org_pepstock_charba_client_commons_NativeObject(/** Plugins */ options, /** Key */ childKey, /** IsDefaultDecimation */ defaultValues, /** ? */ nativeObject) {
  Decimation.$clinit();
  let $instance = new Decimation();
  $instance.$ctor__org_pepstock_charba_client_options_Decimation__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultDecimation__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Decimation__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultDecimation__org_pepstock_charba_client_commons_NativeObject(/** Plugins */ options, /** Key */ childKey, /** IsDefaultDecimation */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
 }
 
 m_setEnabled__boolean(/** boolean */ enabled) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_options_Decimation_Property, enabled);
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_options_Decimation_Property, /**@type {IsDefaultDecimation}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDecimation)).m_isEnabled__());
 }
 
 m_setAlgorithm__org_pepstock_charba_client_enums_DecimationAlgorithm(/** DecimationAlgorithm */ algorithm) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ALGORITHM__org_pepstock_charba_client_options_Decimation_Property, algorithm);
 }
 /** @override @return {DecimationAlgorithm} */
 m_getAlgorithm__() {
  return /**@type {DecimationAlgorithm}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ALGORITHM__org_pepstock_charba_client_options_Decimation_Property, DecimationAlgorithm.m_values__(), /**@type {IsDefaultDecimation}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDecimation)).m_getAlgorithm__()), DecimationAlgorithm));
 }
 
 m_setSamples__double(/** number */ samples) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_SAMPLES__org_pepstock_charba_client_options_Decimation_Property, Checker.m_positiveOrZero__double(samples));
 }
 /** @override @return {number} */
 m_getSamples__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_SAMPLES__org_pepstock_charba_client_options_Decimation_Property, /**@type {IsDefaultDecimation}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDecimation)).m_getSamples__());
 }
 
 static $clinit() {
  Decimation.$clinit = () =>{};
  Decimation.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Decimation;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  DecimationAlgorithm = goog.module.get('org.pepstock.charba.client.enums.DecimationAlgorithm$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Decimation.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultDecimation.$markImplementor(Decimation);
$Util.$setClassMetadata(Decimation, "org.pepstock.charba.client.options.Decimation");

exports = Decimation;

//# sourceMappingURL=Decimation.js.map
