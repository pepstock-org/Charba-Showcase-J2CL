goog.module('org.pepstock.charba.client.options.AbstractDefaultPluginElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultPluginElement = goog.require('org.pepstock.charba.client.defaults.IsDefaultPluginElement$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractDefaultPluginElement.Property$impl');
let Plugins = goog.forwardDeclare('org.pepstock.charba.client.options.Plugins$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T
 * @extends {AbstractModel<Plugins, T>}
 * @implements {IsDefaultPluginElement}
 */
class AbstractDefaultPluginElement extends AbstractModel {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_options_AbstractDefaultPluginElement__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPluginElement__org_pepstock_charba_client_commons_NativeObject(/** Plugins */ options, /** Key */ childKey, /** T */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_options_AbstractDefaultPluginElement_Property, display);
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_options_AbstractDefaultPluginElement_Property, /**@type {IsDefaultPluginElement}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPluginElement)).m_isDisplay__());
 }
 
 m_setPosition__org_pepstock_charba_client_enums_Position(/** Position */ position) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POSITION__org_pepstock_charba_client_options_AbstractDefaultPluginElement_Property, position);
 }
 /** @override @return {Position} */
 m_getPosition__() {
  return /**@type {Position}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POSITION__org_pepstock_charba_client_options_AbstractDefaultPluginElement_Property, Position.m_values__(), /**@type {IsDefaultPluginElement}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPluginElement)).m_getPosition__()), Position));
 }
 
 m_setAlign__org_pepstock_charba_client_enums_ElementAlign(/** ElementAlign */ alignment) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ALIGN__org_pepstock_charba_client_options_AbstractDefaultPluginElement_Property, alignment);
 }
 /** @override @return {ElementAlign} */
 m_getAlign__() {
  return /**@type {ElementAlign}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ALIGN__org_pepstock_charba_client_options_AbstractDefaultPluginElement_Property, ElementAlign.m_values__(), /**@type {IsDefaultPluginElement}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPluginElement)).m_getAlign__()), ElementAlign));
 }
 
 static $clinit() {
  AbstractDefaultPluginElement.$clinit = () =>{};
  AbstractDefaultPluginElement.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractDefaultPluginElement;
 }
 
 static $loadModules() {
  ElementAlign = goog.module.get('org.pepstock.charba.client.enums.ElementAlign$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.AbstractDefaultPluginElement.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultPluginElement.$markImplementor(AbstractDefaultPluginElement);
$Util.$setClassMetadata(AbstractDefaultPluginElement, "org.pepstock.charba.client.options.AbstractDefaultPluginElement");

exports = AbstractDefaultPluginElement;

//# sourceMappingURL=AbstractDefaultPluginElement.js.map
