goog.module('org.pepstock.charba.client.plugins.PluginReference$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.plugins.PluginReference.Property$impl');

class PluginReference extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PluginReference} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  PluginReference.$clinit();
  let $instance = new PluginReference();
  $instance.$ctor__org_pepstock_charba_client_plugins_PluginReference__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_plugins_PluginReference__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {?string} */
 m_getId___$pp_org_pepstock_charba_client_plugins() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_ID__org_pepstock_charba_client_plugins_PluginReference_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_plugins() {
  return super.m_getNativeObject__();
 }
 
 static $clinit() {
  PluginReference.$clinit = () =>{};
  PluginReference.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PluginReference;
 }
 
 static $loadModules() {
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Property = goog.module.get('org.pepstock.charba.client.plugins.PluginReference.Property$impl');
 }
}
$Util.$setClassMetadata(PluginReference, "org.pepstock.charba.client.plugins.PluginReference");

exports = PluginReference;

//# sourceMappingURL=PluginReference.js.map
