goog.module('org.pepstock.charba.client.configuration.Tooltips.TooltipContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let ConfigurationEnvelop = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.Tooltips.TooltipContext.Property$impl');
let TooltipModel = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipModel$impl');

class TooltipContext extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TooltipContext} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  TooltipContext.$clinit();
  let $instance = new TooltipContext();
  $instance.$ctor__org_pepstock_charba_client_configuration_Tooltips_TooltipContext__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Tooltips_TooltipContext__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {TooltipModel} */
 m_getModel___$pp_org_pepstock_charba_client_configuration() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_TOOLTIP__org_pepstock_charba_client_configuration_Tooltips_TooltipContext_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return TooltipModel.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_TOOLTIP__org_pepstock_charba_client_configuration_Tooltips_TooltipContext_Property), true)));
  }
  return null;
 }
 
 static $clinit() {
  TooltipContext.$clinit = () =>{};
  TooltipContext.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipContext;
 }
 
 static $loadModules() {
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  ConfigurationEnvelop = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.Tooltips.TooltipContext.Property$impl');
  TooltipModel = goog.module.get('org.pepstock.charba.client.items.TooltipModel$impl');
 }
}
$Util.$setClassMetadata(TooltipContext, "org.pepstock.charba.client.configuration.Tooltips$TooltipContext");

exports = TooltipContext;

//# sourceMappingURL=Tooltips$TooltipContext.js.map
