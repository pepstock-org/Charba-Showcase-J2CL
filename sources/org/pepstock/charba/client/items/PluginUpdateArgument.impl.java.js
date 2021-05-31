goog.module('org.pepstock.charba.client.items.PluginUpdateArgument$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.PluginUpdateArgument.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let TransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.TransitionKey$impl');
let PluginsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.plugins.PluginsEnvelop$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class PluginUpdateArgument extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PluginUpdateArgument} */
 static $create__org_pepstock_charba_client_plugins_PluginsEnvelop(/** PluginsEnvelop<?> */ envelop) {
  PluginUpdateArgument.$clinit();
  let $instance = new PluginUpdateArgument();
  $instance.$ctor__org_pepstock_charba_client_items_PluginUpdateArgument__org_pepstock_charba_client_plugins_PluginsEnvelop(envelop);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_PluginUpdateArgument__org_pepstock_charba_client_plugins_PluginsEnvelop(/** PluginsEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {PluginsEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), PluginsEnvelop)).m_getContent__()));
 }
 /** @return {TransitionKey} */
 m_getMode__() {
  let mode = this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_MODE__org_pepstock_charba_client_items_PluginUpdateArgument_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
  return !$Equality.$same(mode, null) ? TransitionKey.m_create__java_lang_String(mode) : null;
 }
 
 static $clinit() {
  PluginUpdateArgument.$clinit = () =>{};
  PluginUpdateArgument.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PluginUpdateArgument;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.PluginUpdateArgument.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  TransitionKey = goog.module.get('org.pepstock.charba.client.options.TransitionKey$impl');
  PluginsEnvelop = goog.module.get('org.pepstock.charba.client.plugins.PluginsEnvelop$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(PluginUpdateArgument, "org.pepstock.charba.client.items.PluginUpdateArgument");

exports = PluginUpdateArgument;

//# sourceMappingURL=PluginUpdateArgument.js.map
