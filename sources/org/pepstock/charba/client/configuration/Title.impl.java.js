goog.module('org.pepstock.charba.client.configuration.Title$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractTitle = goog.require('org.pepstock.charba.client.configuration.AbstractTitle$impl');

let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let IsTitle = goog.forwardDeclare('org.pepstock.charba.client.options.IsTitle$impl');

class Title extends AbstractTitle {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Title} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Title.$clinit();
  let $instance = new Title();
  $instance.$ctor__org_pepstock_charba_client_configuration_Title__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Title__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractTitle__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
 }
 /** @override @return {IsTitle} */
 m_getTitleElement___$pp_org_pepstock_charba_client_configuration() {
  return this.m_getConfiguration__().m_getTitle__();
 }
 /** @override @return {AbstractNode} */
 m_getTitleNode___$pp_org_pepstock_charba_client_configuration() {
  return this.m_getConfiguration__().m_getTitle__();
 }
 
 static $clinit() {
  Title.$clinit = () =>{};
  Title.$loadModules();
  AbstractTitle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Title;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Title, "org.pepstock.charba.client.configuration.Title");

exports = Title;

//# sourceMappingURL=Title.js.map
