goog.module('org.pepstock.charba.client.configuration.Arc$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractConfigurationElement = goog.require('org.pepstock.charba.client.configuration.AbstractConfigurationElement$impl');

let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let IsDefaultArc = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultArc$impl');
let BorderAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderAlign$impl');
let AbstractElement = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractElement$impl');

/**
 * @extends {AbstractConfigurationElement<IsDefaultArc>}
 */
class Arc extends AbstractConfigurationElement {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Arc} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Arc.$clinit();
  let $instance = new Arc();
  $instance.$ctor__org_pepstock_charba_client_configuration_Arc__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Arc__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractConfigurationElement__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
 }
 /** @override @return {AbstractElement<IsDefaultArc>} */
 m_getElement__() {
  return this.m_getConfiguration__().m_getElements__().m_getArc__();
 }
 
 m_setBorderAlign__org_pepstock_charba_client_enums_BorderAlign(/** BorderAlign */ align) {
  this.m_getConfiguration__().m_getElements__().m_getArc__().m_setBorderAlign__org_pepstock_charba_client_enums_BorderAlign(align);
 }
 /** @return {BorderAlign} */
 m_getBorderAlign__() {
  return this.m_getConfiguration__().m_getElements__().m_getArc__().m_getBorderAlign__();
 }
 
 m_setWeight__double(/** number */ weight) {
  this.m_getConfiguration__().m_getElements__().m_getArc__().m_setWeight__double(weight);
 }
 /** @return {number} */
 m_getWeight__() {
  return this.m_getConfiguration__().m_getElements__().m_getArc__().m_getWeight__();
 }
 
 m_setAngle__double(/** number */ angle) {
  this.m_getConfiguration__().m_getElements__().m_getArc__().m_setAngle__double(angle);
 }
 /** @return {number} */
 m_getAngle__() {
  return this.m_getConfiguration__().m_getElements__().m_getArc__().m_getAngle__();
 }
 
 m_setOffset__int(/** number */ offset) {
  this.m_getConfiguration__().m_getElements__().m_getArc__().m_setOffset__int(offset);
 }
 /** @return {number} */
 m_getOffset__() {
  return this.m_getConfiguration__().m_getElements__().m_getArc__().m_getOffset__();
 }
 
 m_setBorderRadius__int(/** number */ borderRadius) {
  this.m_getConfiguration__().m_getElements__().m_getArc__().m_setBorderRadius__int(borderRadius);
 }
 /** @return {number} */
 m_getBorderRadius__() {
  return this.m_getConfiguration__().m_getElements__().m_getArc__().m_getBorderRadius__();
 }
 
 m_setHoverOffset__int(/** number */ offset) {
  this.m_getConfiguration__().m_getElements__().m_getArc__().m_setHoverOffset__int(offset);
 }
 /** @return {number} */
 m_getHoverOffset__() {
  return this.m_getConfiguration__().m_getElements__().m_getArc__().m_getHoverOffset__();
 }
 
 static $clinit() {
  Arc.$clinit = () =>{};
  Arc.$loadModules();
  AbstractConfigurationElement.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Arc;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Arc, "org.pepstock.charba.client.configuration.Arc");

exports = Arc;

//# sourceMappingURL=Arc.js.map
