goog.module('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartContainer = goog.require('org.pepstock.charba.client.configuration.ChartContainer$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 */
class ConfigurationOptionsContainer extends ChartContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {ConfigurationOptions}*/
  this.f_options__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer_;
 }
 
 $ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ChartContainer__org_pepstock_charba_client_IsChart(ConfigurationOptionsContainer.m_checkAndGet__org_pepstock_charba_client_configuration_ConfigurationOptions(options).m_getChart__());
  this.f_options__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer_ = options;
 }
 /** @return {ConfigurationOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer_;
 }
 /** @return {ExtendedOptions} */
 m_getConfiguration__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.f_options__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer_.m_getConfiguration__(), ExtendedOptions));
 }
 /** @return {ConfigurationOptions} */
 static m_checkAndGet__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  return /**@type {ConfigurationOptions}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(options, "Configuration options"), ConfigurationOptions));
 }
 
 static $clinit() {
  ConfigurationOptionsContainer.$clinit = () =>{};
  ConfigurationOptionsContainer.$loadModules();
  ChartContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ConfigurationOptionsContainer;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ConfigurationOptions = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
  ExtendedOptions = goog.module.get('org.pepstock.charba.client.options.ExtendedOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ConfigurationOptionsContainer, "org.pepstock.charba.client.configuration.ConfigurationOptionsContainer");

exports = ConfigurationOptionsContainer;

//# sourceMappingURL=ConfigurationOptionsContainer.js.map
