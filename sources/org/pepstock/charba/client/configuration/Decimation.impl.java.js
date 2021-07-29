goog.module('org.pepstock.charba.client.configuration.Decimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');

let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let DecimationAlgorithm = goog.forwardDeclare('org.pepstock.charba.client.enums.DecimationAlgorithm$impl');

class Decimation extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Decimation} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Decimation.$clinit();
  let $instance = new Decimation();
  $instance.$ctor__org_pepstock_charba_client_configuration_Decimation__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Decimation__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
 }
 
 m_setEnabled__boolean(/** boolean */ enabled) {
  this.m_getConfiguration__().m_getDecimation__().m_setEnabled__boolean(enabled);
 }
 /** @return {boolean} */
 m_isEnabled__() {
  return this.m_getConfiguration__().m_getDecimation__().m_isEnabled__();
 }
 
 m_setAlgorithm__org_pepstock_charba_client_enums_DecimationAlgorithm(/** DecimationAlgorithm */ algorithm) {
  this.m_getConfiguration__().m_getDecimation__().m_setAlgorithm__org_pepstock_charba_client_enums_DecimationAlgorithm(algorithm);
 }
 /** @return {DecimationAlgorithm} */
 m_getAlgorithm__() {
  return this.m_getConfiguration__().m_getDecimation__().m_getAlgorithm__();
 }
 
 m_setSamples__double(/** number */ samples) {
  this.m_getConfiguration__().m_getDecimation__().m_setSamples__double(samples);
 }
 /** @return {number} */
 m_getSamples__() {
  return this.m_getConfiguration__().m_getDecimation__().m_getSamples__();
 }
 
 m_setThreshold__double(/** number */ threshold) {
  this.m_getConfiguration__().m_getDecimation__().m_setThreshold__double(threshold);
 }
 /** @return {number} */
 m_getThreshold__() {
  return this.m_getConfiguration__().m_getDecimation__().m_getThreshold__();
 }
 
 static $clinit() {
  Decimation.$clinit = () =>{};
  Decimation.$loadModules();
  ConfigurationOptionsContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Decimation;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Decimation, "org.pepstock.charba.client.configuration.Decimation");

exports = Decimation;

//# sourceMappingURL=Decimation.js.map
