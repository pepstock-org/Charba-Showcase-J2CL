goog.module('org.pepstock.charba.client.configuration.Elements$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');

let Arc = goog.forwardDeclare('org.pepstock.charba.client.configuration.Arc$impl');
let Bar = goog.forwardDeclare('org.pepstock.charba.client.configuration.Bar$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let Line = goog.forwardDeclare('org.pepstock.charba.client.configuration.Line$impl');
let Point = goog.forwardDeclare('org.pepstock.charba.client.configuration.Point$impl');

class Elements extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {Point}*/
  this.f_point__org_pepstock_charba_client_configuration_Elements_;
  /**@type {Line}*/
  this.f_line__org_pepstock_charba_client_configuration_Elements_;
  /**@type {Arc}*/
  this.f_arc__org_pepstock_charba_client_configuration_Elements_;
  /**@type {Bar}*/
  this.f_bar__org_pepstock_charba_client_configuration_Elements_;
 }
 /** @return {!Elements} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Elements.$clinit();
  let $instance = new Elements();
  $instance.$ctor__org_pepstock_charba_client_configuration_Elements__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Elements__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.f_point__org_pepstock_charba_client_configuration_Elements_ = Point.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this.m_getOptions__());
  this.f_line__org_pepstock_charba_client_configuration_Elements_ = Line.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this.m_getOptions__());
  this.f_arc__org_pepstock_charba_client_configuration_Elements_ = Arc.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this.m_getOptions__());
  this.f_bar__org_pepstock_charba_client_configuration_Elements_ = Bar.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this.m_getOptions__());
 }
 /** @return {Point} */
 m_getPoint__() {
  return this.f_point__org_pepstock_charba_client_configuration_Elements_;
 }
 /** @return {Line} */
 m_getLine__() {
  return this.f_line__org_pepstock_charba_client_configuration_Elements_;
 }
 /** @return {Arc} */
 m_getArc__() {
  return this.f_arc__org_pepstock_charba_client_configuration_Elements_;
 }
 /** @return {Bar} */
 m_getBar__() {
  return this.f_bar__org_pepstock_charba_client_configuration_Elements_;
 }
 
 static $clinit() {
  Elements.$clinit = () =>{};
  Elements.$loadModules();
  ConfigurationOptionsContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Elements;
 }
 
 static $loadModules() {
  Arc = goog.module.get('org.pepstock.charba.client.configuration.Arc$impl');
  Bar = goog.module.get('org.pepstock.charba.client.configuration.Bar$impl');
  Line = goog.module.get('org.pepstock.charba.client.configuration.Line$impl');
  Point = goog.module.get('org.pepstock.charba.client.configuration.Point$impl');
 }
}
$Util.$setClassMetadata(Elements, "org.pepstock.charba.client.configuration.Elements");

exports = Elements;

//# sourceMappingURL=Elements.js.map
