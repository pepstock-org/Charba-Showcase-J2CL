goog.module('org.pepstock.charba.client.items.PluginEventArgument$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let ChartEventContext = goog.forwardDeclare('org.pepstock.charba.client.events.ChartEventContext$impl');
let ItemsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.items.ItemsEnvelop$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.PluginEventArgument.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let PluginsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.plugins.PluginsEnvelop$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class PluginEventArgument extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {ChartEventContext}*/
  this.f_eventContext__org_pepstock_charba_client_items_PluginEventArgument_;
 }
 /** @return {!PluginEventArgument} */
 static $create__org_pepstock_charba_client_plugins_PluginsEnvelop(/** PluginsEnvelop<?> */ envelop) {
  PluginEventArgument.$clinit();
  let $instance = new PluginEventArgument();
  $instance.$ctor__org_pepstock_charba_client_items_PluginEventArgument__org_pepstock_charba_client_plugins_PluginsEnvelop(envelop);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_PluginEventArgument__org_pepstock_charba_client_plugins_PluginsEnvelop(/** PluginsEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {PluginsEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), PluginsEnvelop)).m_getContent__()));
  this.f_eventContext__org_pepstock_charba_client_items_PluginEventArgument_ = ChartEventContext.$create__org_pepstock_charba_client_items_ItemsEnvelop(/**@type {!ItemsEnvelop<?>}*/ (ItemsEnvelop.$create__java_lang_Object__boolean(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_EVENT__org_pepstock_charba_client_items_PluginEventArgument_Property), true)));
 }
 /** @return {ChartEventContext} */
 m_getEventContext__() {
  return this.f_eventContext__org_pepstock_charba_client_items_PluginEventArgument_;
 }
 /** @return {boolean} */
 m_isReplay__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_REPLAY__org_pepstock_charba_client_items_PluginEventArgument_Property, Undefined.f_BOOLEAN__org_pepstock_charba_client_items_Undefined);
 }
 
 static $clinit() {
  PluginEventArgument.$clinit = () =>{};
  PluginEventArgument.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PluginEventArgument;
 }
 
 static $loadModules() {
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  ChartEventContext = goog.module.get('org.pepstock.charba.client.events.ChartEventContext$impl');
  ItemsEnvelop = goog.module.get('org.pepstock.charba.client.items.ItemsEnvelop$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.PluginEventArgument.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  PluginsEnvelop = goog.module.get('org.pepstock.charba.client.plugins.PluginsEnvelop$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(PluginEventArgument, "org.pepstock.charba.client.items.PluginEventArgument");

exports = PluginEventArgument;

//# sourceMappingURL=PluginEventArgument.js.map
