goog.module('org.pepstock.charba.client.configuration.Bar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractConfigurationElement = goog.require('org.pepstock.charba.client.configuration.AbstractConfigurationElement$impl');

let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let IsDefaultBar = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultBar$impl');
let BorderSkipped = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderSkipped$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let AbstractElement = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractElement$impl');

/**
 * @extends {AbstractConfigurationElement<IsDefaultBar>}
 */
class Bar extends AbstractConfigurationElement {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Bar} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Bar.$clinit();
  let $instance = new Bar();
  $instance.$ctor__org_pepstock_charba_client_configuration_Bar__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Bar__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractConfigurationElement__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
 }
 /** @override @return {AbstractElement<IsDefaultBar>} */
 m_getElement__() {
  return this.m_getConfiguration__().m_getElements__().m_getBar__();
 }
 
 m_setBorderSkipped__boolean(/** boolean */ borderSkipped) {
  this.m_getConfiguration__().m_getElements__().m_getBar__().m_setBorderSkipped__boolean(borderSkipped);
 }
 
 m_setBorderSkipped__org_pepstock_charba_client_enums_BorderSkipped(/** BorderSkipped */ borderSkipped) {
  this.m_getConfiguration__().m_getElements__().m_getBar__().m_setBorderSkipped__org_pepstock_charba_client_enums_BorderSkipped(borderSkipped);
 }
 /** @return {BorderSkipped} */
 m_getBorderSkipped__() {
  return this.m_getConfiguration__().m_getElements__().m_getBar__().m_getBorderSkipped__();
 }
 
 m_setBorderRadius__int(/** number */ borderRadius) {
  this.m_getConfiguration__().m_getElements__().m_getBar__().m_setBorderRadius__int(borderRadius);
 }
 /** @return {number} */
 m_getBorderRadius__() {
  return this.m_getConfiguration__().m_getElements__().m_getBar__().m_getBorderRadius__();
 }
 
 m_setHoverBorderRadius__int(/** number */ borderRadius) {
  this.m_getConfiguration__().m_getElements__().m_getBar__().m_setHoverBorderRadius__int(borderRadius);
 }
 /** @return {number} */
 m_getHoverBorderRadius__() {
  return this.m_getConfiguration__().m_getElements__().m_getBar__().m_getHoverBorderRadius__();
 }
 
 m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(/** PointStyle */ pointStyle) {
  this.m_getConfiguration__().m_getElements__().m_getBar__().m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(pointStyle);
 }
 
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ pointStyle) {
  this.m_getConfiguration__().m_getElements__().m_getBar__().m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(pointStyle);
 }
 /** @return {boolean} */
 m_isPointStyleAsImage__() {
  return this.m_getConfiguration__().m_getElements__().m_getBar__().m_isPointStyleAsImage__();
 }
 /** @return {PointStyle} */
 m_getPointStyle__() {
  return this.m_getConfiguration__().m_getElements__().m_getBar__().m_getPointStyle__();
 }
 /** @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  return this.m_getConfiguration__().m_getElements__().m_getBar__().m_getPointStyleAsImage__();
 }
 
 m_setEnableBorderRadius__boolean(/** boolean */ enableBorderRadius) {
  this.m_getConfiguration__().m_getElements__().m_getBar__().m_setEnableBorderRadius__boolean(enableBorderRadius);
 }
 /** @return {boolean} */
 m_isEnableBorderRadius__() {
  return this.m_getConfiguration__().m_getElements__().m_getBar__().m_isEnableBorderRadius__();
 }
 
 static $clinit() {
  Bar.$clinit = () =>{};
  Bar.$loadModules();
  AbstractConfigurationElement.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Bar;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Bar, "org.pepstock.charba.client.configuration.Bar");

exports = Bar;

//# sourceMappingURL=Bar.js.map
