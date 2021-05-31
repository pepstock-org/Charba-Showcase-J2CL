goog.module('org.pepstock.charba.client.items.PluginResizeArgument$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.PluginResizeArgument.Property$impl');
let SizeItem = goog.forwardDeclare('org.pepstock.charba.client.items.SizeItem$impl');
let PluginsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.plugins.PluginsEnvelop$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class PluginResizeArgument extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {SizeItem}*/
  this.f_sizeItem__org_pepstock_charba_client_items_PluginResizeArgument_;
 }
 /** @return {!PluginResizeArgument} */
 static $create__org_pepstock_charba_client_plugins_PluginsEnvelop(/** PluginsEnvelop<?> */ envelop) {
  PluginResizeArgument.$clinit();
  let $instance = new PluginResizeArgument();
  $instance.$ctor__org_pepstock_charba_client_items_PluginResizeArgument__org_pepstock_charba_client_plugins_PluginsEnvelop(envelop);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_PluginResizeArgument__org_pepstock_charba_client_plugins_PluginsEnvelop(/** PluginsEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {PluginsEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), PluginsEnvelop)).m_getContent__()));
  this.f_sizeItem__org_pepstock_charba_client_items_PluginResizeArgument_ = SizeItem.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_SIZE__org_pepstock_charba_client_items_PluginResizeArgument_Property));
 }
 /** @return {SizeItem} */
 m_getSizeItem__() {
  return this.f_sizeItem__org_pepstock_charba_client_items_PluginResizeArgument_;
 }
 
 static $clinit() {
  PluginResizeArgument.$clinit = () =>{};
  PluginResizeArgument.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PluginResizeArgument;
 }
 
 static $loadModules() {
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.PluginResizeArgument.Property$impl');
  SizeItem = goog.module.get('org.pepstock.charba.client.items.SizeItem$impl');
  PluginsEnvelop = goog.module.get('org.pepstock.charba.client.plugins.PluginsEnvelop$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(PluginResizeArgument, "org.pepstock.charba.client.items.PluginResizeArgument");

exports = PluginResizeArgument;

//# sourceMappingURL=PluginResizeArgument.js.map
