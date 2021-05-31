goog.module('org.pepstock.charba.client.items.PluginTooltipArgument$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.PluginTooltipArgument.Property$impl');
let TooltipModel = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipModel$impl');
let PluginsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.plugins.PluginsEnvelop$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class PluginTooltipArgument extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {TooltipModel}*/
  this.f_node__org_pepstock_charba_client_items_PluginTooltipArgument_;
 }
 /** @return {!PluginTooltipArgument} */
 static $create__org_pepstock_charba_client_plugins_PluginsEnvelop(/** PluginsEnvelop<?> */ envelop) {
  PluginTooltipArgument.$clinit();
  let $instance = new PluginTooltipArgument();
  $instance.$ctor__org_pepstock_charba_client_items_PluginTooltipArgument__org_pepstock_charba_client_plugins_PluginsEnvelop(envelop);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_PluginTooltipArgument__org_pepstock_charba_client_plugins_PluginsEnvelop(/** PluginsEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {PluginsEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), PluginsEnvelop)).m_getContent__()));
  this.f_node__org_pepstock_charba_client_items_PluginTooltipArgument_ = TooltipModel.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_TOOLTIP__org_pepstock_charba_client_items_PluginTooltipArgument_Property));
 }
 /** @return {TooltipModel} */
 m_getTooltip__() {
  return this.f_node__org_pepstock_charba_client_items_PluginTooltipArgument_;
 }
 
 static $clinit() {
  PluginTooltipArgument.$clinit = () =>{};
  PluginTooltipArgument.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PluginTooltipArgument;
 }
 
 static $loadModules() {
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.PluginTooltipArgument.Property$impl');
  TooltipModel = goog.module.get('org.pepstock.charba.client.items.TooltipModel$impl');
  PluginsEnvelop = goog.module.get('org.pepstock.charba.client.plugins.PluginsEnvelop$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(PluginTooltipArgument, "org.pepstock.charba.client.items.PluginTooltipArgument");

exports = PluginTooltipArgument;

//# sourceMappingURL=PluginTooltipArgument.js.map
