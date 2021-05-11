goog.module('org.pepstock.charba.client.configuration.Filler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');

let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.enums.DrawTime$impl');

class Filler extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Filler} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Filler.$clinit();
  let $instance = new Filler();
  $instance.$ctor__org_pepstock_charba_client_configuration_Filler__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Filler__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
 }
 
 m_setPropagate__boolean(/** boolean */ propagate) {
  this.m_getConfiguration__().m_getFiller__().m_setPropagate__boolean(propagate);
 }
 /** @return {boolean} */
 m_isPropagate__() {
  return this.m_getConfiguration__().m_getFiller__().m_isPropagate__();
 }
 
 m_setDrawTime__org_pepstock_charba_client_enums_DrawTime(/** DrawTime */ drawTime) {
  this.m_getConfiguration__().m_getFiller__().m_setDrawTime__org_pepstock_charba_client_enums_DrawTime(drawTime);
 }
 /** @return {DrawTime} */
 m_getDrawTime__() {
  return this.m_getConfiguration__().m_getFiller__().m_getDrawTime__();
 }
 
 static $clinit() {
  Filler.$clinit = () =>{};
  Filler.$loadModules();
  ConfigurationOptionsContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Filler;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Filler, "org.pepstock.charba.client.configuration.Filler");

exports = Filler;

//# sourceMappingURL=Filler.js.map
