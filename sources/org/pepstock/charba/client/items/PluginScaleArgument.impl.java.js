goog.module('org.pepstock.charba.client.items.PluginScaleArgument$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.PluginScaleArgument.Property$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let PluginsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.plugins.PluginsEnvelop$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class PluginScaleArgument extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {ScaleItem}*/
  this.f_scaleItem__org_pepstock_charba_client_items_PluginScaleArgument_;
 }
 /** @return {!PluginScaleArgument} */
 static $create__org_pepstock_charba_client_plugins_PluginsEnvelop(/** PluginsEnvelop<?> */ envelop) {
  PluginScaleArgument.$clinit();
  let $instance = new PluginScaleArgument();
  $instance.$ctor__org_pepstock_charba_client_items_PluginScaleArgument__org_pepstock_charba_client_plugins_PluginsEnvelop(envelop);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_PluginScaleArgument__org_pepstock_charba_client_plugins_PluginsEnvelop(/** PluginsEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {PluginsEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), PluginsEnvelop)).m_getContent__()));
  this.f_scaleItem__org_pepstock_charba_client_items_PluginScaleArgument_ = ScaleItem.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_SCALE__org_pepstock_charba_client_items_PluginScaleArgument_Property));
 }
 /** @return {ScaleItem} */
 m_getScaleItem__() {
  return this.f_scaleItem__org_pepstock_charba_client_items_PluginScaleArgument_;
 }
 
 static $clinit() {
  PluginScaleArgument.$clinit = () =>{};
  PluginScaleArgument.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PluginScaleArgument;
 }
 
 static $loadModules() {
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.PluginScaleArgument.Property$impl');
  ScaleItem = goog.module.get('org.pepstock.charba.client.items.ScaleItem$impl');
  PluginsEnvelop = goog.module.get('org.pepstock.charba.client.plugins.PluginsEnvelop$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(PluginScaleArgument, "org.pepstock.charba.client.items.PluginScaleArgument");

exports = PluginScaleArgument;

//# sourceMappingURL=PluginScaleArgument.js.map
