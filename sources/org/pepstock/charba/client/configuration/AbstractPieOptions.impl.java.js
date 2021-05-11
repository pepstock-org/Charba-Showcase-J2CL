goog.module('org.pepstock.charba.client.configuration.AbstractPieOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptions = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 */
class AbstractPieOptions extends ConfigurationOptions {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_configuration_AbstractPieOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultvalues) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultvalues);
 }
 
 m_setCutout__double(/** number */ cutout) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setCutout__double(cutout);
 }
 
 m_setCutoutPercentage__java_lang_String(/** ?string */ cutout) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setCutoutPercentage__java_lang_String(cutout);
 }
 /** @return {number} */
 m_getCutout__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getCutout__();
 }
 /** @return {?string} */
 m_getCutoutPercentage__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getCutoutPercentage__();
 }
 
 m_setRadius__double(/** number */ radius) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setRadius__double(radius);
 }
 /** @return {number} */
 m_getRadius__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getRadius__();
 }
 
 m_setRadiusPercentage__java_lang_String(/** ?string */ radius) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setRadiusPercentage__java_lang_String(radius);
 }
 /** @return {?string} */
 m_getRadiusPercentage__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getRadiusPercentage__();
 }
 
 m_setRotation__double(/** number */ rotation) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setRotation__double(rotation);
 }
 /** @return {number} */
 m_getRotation__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getRotation__();
 }
 
 m_setCircumference__double(/** number */ circumference) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setCircumference__double(circumference);
 }
 /** @return {number} */
 m_getCircumference__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getCircumference__();
 }
 /** @override @return {Axis} */
 m_getAxisById__int_$pp_org_pepstock_charba_client_configuration(/** number */ id) {
  return null;
 }
 
 static $clinit() {
  AbstractPieOptions.$clinit = () =>{};
  AbstractPieOptions.$loadModules();
  ConfigurationOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractPieOptions;
 }
 
 static $loadModules() {
  ExtendedOptions = goog.module.get('org.pepstock.charba.client.options.ExtendedOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AbstractPieOptions, "org.pepstock.charba.client.configuration.AbstractPieOptions");

exports = AbstractPieOptions;

//# sourceMappingURL=AbstractPieOptions.js.map
