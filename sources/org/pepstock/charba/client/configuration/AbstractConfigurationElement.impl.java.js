goog.module('org.pepstock.charba.client.configuration.AbstractConfigurationElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');

let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let IsDefaultOptionsElement = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptionsElement$impl');
let AbstractElement = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractElement$impl');

/**
 * @abstract
 * @template D
 */
class AbstractConfigurationElement extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_configuration_AbstractConfigurationElement__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
 }
 /** @abstract @return {AbstractElement<D>} */
 m_getElement__() {}
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  this.m_getElement__().m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(backgroundColor);
 }
 
 m_setBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {
  this.m_getElement__().m_setBackgroundColor__java_lang_String(backgroundColor);
 }
 /** @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.m_getElement__().m_getBackgroundColorAsString__();
 }
 /** @return {IsColor} */
 m_getBackgroundColor__() {
  return this.m_getElement__().m_getBackgroundColor__();
 }
 
 m_setBorderWidth__int(/** number */ borderWidth) {
  this.m_getElement__().m_setBorderWidth__int(borderWidth);
 }
 /** @return {number} */
 m_getBorderWidth__() {
  return this.m_getElement__().m_getBorderWidth__();
 }
 
 m_setBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ borderColor) {
  this.m_getElement__().m_setBorderColor__org_pepstock_charba_client_colors_IsColor(borderColor);
 }
 
 m_setBorderColor__java_lang_String(/** ?string */ borderColor) {
  this.m_getElement__().m_setBorderColor__java_lang_String(borderColor);
 }
 /** @return {?string} */
 m_getBorderColorAsString__() {
  return this.m_getElement__().m_getBorderColorAsString__();
 }
 /** @return {IsColor} */
 m_getBorderColor__() {
  return this.m_getElement__().m_getBorderColor__();
 }
 
 m_setHoverBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  this.m_getElement__().m_setHoverBackgroundColor__org_pepstock_charba_client_colors_IsColor(backgroundColor);
 }
 
 m_setHoverBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {
  this.m_getElement__().m_setHoverBackgroundColor__java_lang_String(backgroundColor);
 }
 /** @return {?string} */
 m_getHoverBackgroundColorAsString__() {
  return this.m_getElement__().m_getHoverBackgroundColorAsString__();
 }
 /** @return {IsColor} */
 m_getHoverBackgroundColor__() {
  return this.m_getElement__().m_getHoverBackgroundColor__();
 }
 
 m_setHoverBorderWidth__int(/** number */ borderWidth) {
  this.m_getElement__().m_setHoverBorderWidth__int(borderWidth);
 }
 /** @return {number} */
 m_getHoverBorderWidth__() {
  return this.m_getElement__().m_getHoverBorderWidth__();
 }
 
 m_setHoverBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ borderColor) {
  this.m_getElement__().m_setHoverBorderColor__org_pepstock_charba_client_colors_IsColor(borderColor);
 }
 
 m_setHoverBorderColor__java_lang_String(/** ?string */ borderColor) {
  this.m_getElement__().m_setHoverBorderColor__java_lang_String(borderColor);
 }
 /** @return {?string} */
 m_getHoverBorderColorAsString__() {
  return this.m_getElement__().m_getHoverBorderColorAsString__();
 }
 /** @return {IsColor} */
 m_getHoverBorderColor__() {
  return this.m_getElement__().m_getHoverBorderColor__();
 }
 
 static $clinit() {
  AbstractConfigurationElement.$clinit = () =>{};
  AbstractConfigurationElement.$loadModules();
  ConfigurationOptionsContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractConfigurationElement;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(AbstractConfigurationElement, "org.pepstock.charba.client.configuration.AbstractConfigurationElement");

exports = AbstractConfigurationElement;

//# sourceMappingURL=AbstractConfigurationElement.js.map
