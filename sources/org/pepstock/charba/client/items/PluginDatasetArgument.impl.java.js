goog.module('org.pepstock.charba.client.items.PluginDatasetArgument$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PluginUpdateArgument = goog.require('org.pepstock.charba.client.items.PluginUpdateArgument$impl');

let DatasetItem = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetItem$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.PluginDatasetArgument.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let PluginsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.plugins.PluginsEnvelop$impl');

class PluginDatasetArgument extends PluginUpdateArgument {
 /** @protected */
 constructor() {
  super();
  /**@type {DatasetItem}*/
  this.f_datasetItem__org_pepstock_charba_client_items_PluginDatasetArgument_;
 }
 /** @return {!PluginDatasetArgument} */
 static $create__org_pepstock_charba_client_plugins_PluginsEnvelop(/** PluginsEnvelop<?> */ envelop) {
  PluginDatasetArgument.$clinit();
  let $instance = new PluginDatasetArgument();
  $instance.$ctor__org_pepstock_charba_client_items_PluginDatasetArgument__org_pepstock_charba_client_plugins_PluginsEnvelop(envelop);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_PluginDatasetArgument__org_pepstock_charba_client_plugins_PluginsEnvelop(/** PluginsEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_items_PluginUpdateArgument__org_pepstock_charba_client_plugins_PluginsEnvelop(envelop);
  this.f_datasetItem__org_pepstock_charba_client_items_PluginDatasetArgument_ = this.m_has__org_pepstock_charba_client_commons_Key(Property.f_META__org_pepstock_charba_client_items_PluginDatasetArgument_Property) ? DatasetItem.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_META__org_pepstock_charba_client_items_PluginDatasetArgument_Property)) : DatasetItem.$create__();
 }
 /** @return {number} */
 m_getIndex__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_INDEX__org_pepstock_charba_client_items_PluginDatasetArgument_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {DatasetItem} */
 m_getDatasetItem__() {
  return this.f_datasetItem__org_pepstock_charba_client_items_PluginDatasetArgument_;
 }
 
 static $clinit() {
  PluginDatasetArgument.$clinit = () =>{};
  PluginDatasetArgument.$loadModules();
  PluginUpdateArgument.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PluginDatasetArgument;
 }
 
 static $loadModules() {
  DatasetItem = goog.module.get('org.pepstock.charba.client.items.DatasetItem$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.PluginDatasetArgument.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
$Util.$setClassMetadata(PluginDatasetArgument, "org.pepstock.charba.client.items.PluginDatasetArgument");

exports = PluginDatasetArgument;

//# sourceMappingURL=PluginDatasetArgument.js.map
