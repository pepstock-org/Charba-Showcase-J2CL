goog.module('org.pepstock.charba.client.configuration.Interaction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');

let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');

class Interaction extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Interaction} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Interaction.$clinit();
  let $instance = new Interaction();
  $instance.$ctor__org_pepstock_charba_client_configuration_Interaction__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Interaction__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
 }
 
 m_setMode__org_pepstock_charba_client_enums_InteractionMode(/** InteractionMode */ mode) {
  this.m_getConfiguration__().m_getInteraction__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(mode);
 }
 /** @return {InteractionMode} */
 m_getMode__() {
  return this.m_getConfiguration__().m_getInteraction__().m_getMode__();
 }
 
 m_setIntersect__boolean(/** boolean */ intersect) {
  this.m_getConfiguration__().m_getInteraction__().m_setIntersect__boolean(intersect);
 }
 /** @return {boolean} */
 m_isIntersect__() {
  return this.m_getConfiguration__().m_getInteraction__().m_isIntersect__();
 }
 
 m_setAxis__org_pepstock_charba_client_enums_InteractionAxis(/** InteractionAxis */ axis) {
  this.m_getConfiguration__().m_getInteraction__().m_setAxis__org_pepstock_charba_client_enums_InteractionAxis(axis);
 }
 /** @return {InteractionAxis} */
 m_getAxis__() {
  return this.m_getConfiguration__().m_getInteraction__().m_getAxis__();
 }
 
 static $clinit() {
  Interaction.$clinit = () =>{};
  Interaction.$loadModules();
  ConfigurationOptionsContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Interaction;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Interaction, "org.pepstock.charba.client.configuration.Interaction");

exports = Interaction;

//# sourceMappingURL=Interaction.js.map
