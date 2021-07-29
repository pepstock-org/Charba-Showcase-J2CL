goog.module('org.pepstock.charba.client.configuration.Subtitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractTitle = goog.require('org.pepstock.charba.client.configuration.AbstractTitle$impl');

let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let IsTitle = goog.forwardDeclare('org.pepstock.charba.client.options.IsTitle$impl');

class Subtitle extends AbstractTitle {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Subtitle} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Subtitle.$clinit();
  let $instance = new Subtitle();
  $instance.$ctor__org_pepstock_charba_client_configuration_Subtitle__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Subtitle__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractTitle__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
 }
 /** @override @return {IsTitle} */
 m_getTitleElement___$pp_org_pepstock_charba_client_configuration() {
  return this.m_getConfiguration__().m_getSubtitle__();
 }
 /** @override @return {AbstractNode} */
 m_getTitleNode___$pp_org_pepstock_charba_client_configuration() {
  return this.m_getConfiguration__().m_getSubtitle__();
 }
 
 static $clinit() {
  Subtitle.$clinit = () =>{};
  Subtitle.$loadModules();
  AbstractTitle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Subtitle;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Subtitle, "org.pepstock.charba.client.configuration.Subtitle");

exports = Subtitle;

//# sourceMappingURL=Subtitle.js.map
