goog.module('org.pepstock.charba.client.ConfigurationElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Configuration = goog.forwardDeclare('org.pepstock.charba.client.Configuration$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.ConfigurationElement.$LambdaAdaptor$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');

/**
 * @interface
 */
class ConfigurationElement {
 /** @abstract */
 m_load__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_Configuration(/** IsChart */ chart, /** Configuration */ configuration) {}
 /** @return {ConfigurationElement} */
 static $adapt(/** ?function(IsChart, Configuration):void */ fn) {
  ConfigurationElement.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ConfigurationElement.$clinit = () =>{};
  ConfigurationElement.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_ConfigurationElement = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_ConfigurationElement;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.ConfigurationElement.$LambdaAdaptor$impl');
 }
}
ConfigurationElement.$markImplementor(/**@type {Function}*/ (ConfigurationElement));
$Util.$setClassMetadataForInterface(ConfigurationElement, "org.pepstock.charba.client.ConfigurationElement");

exports = ConfigurationElement;

//# sourceMappingURL=ConfigurationElement.js.map
