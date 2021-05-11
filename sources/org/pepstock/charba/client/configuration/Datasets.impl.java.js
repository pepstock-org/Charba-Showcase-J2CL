goog.module('org.pepstock.charba.client.configuration.Datasets$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');

let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let TypedDataset = goog.forwardDeclare('org.pepstock.charba.client.configuration.TypedDataset$impl');

class Datasets extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Datasets} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Datasets.$clinit();
  let $instance = new Datasets();
  $instance.$ctor__org_pepstock_charba_client_configuration_Datasets__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Datasets__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
 }
 /** @return {TypedDataset} */
 m_get__() {
  return TypedDataset.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this.m_getOptions__());
 }
 /** @return {TypedDataset} */
 m_get__org_pepstock_charba_client_Type(/** Type */ type) {
  return TypedDataset.$create__org_pepstock_charba_client_Type__org_pepstock_charba_client_configuration_ConfigurationOptions(type, this.m_getOptions__());
 }
 
 static $clinit() {
  Datasets.$clinit = () =>{};
  Datasets.$loadModules();
  ConfigurationOptionsContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Datasets;
 }
 
 static $loadModules() {
  TypedDataset = goog.module.get('org.pepstock.charba.client.configuration.TypedDataset$impl');
 }
}
$Util.$setClassMetadata(Datasets, "org.pepstock.charba.client.configuration.Datasets");

exports = Datasets;

//# sourceMappingURL=Datasets.js.map
