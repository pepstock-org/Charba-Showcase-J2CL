goog.module('org.pepstock.charba.client.items.SizeItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let ConfigurationEnvelop = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.SizeItem.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class SizeItem extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'SizeItem(ConfigurationEnvelop)'.
 /** @return {!SizeItem} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** ConfigurationEnvelop<?> */ envelop) {
  SizeItem.$clinit();
  let $instance = new SizeItem();
  $instance.$ctor__org_pepstock_charba_client_items_SizeItem__org_pepstock_charba_client_configuration_ConfigurationEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'SizeItem(ConfigurationEnvelop)'.
 
 $ctor__org_pepstock_charba_client_items_SizeItem__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** ConfigurationEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_items_SizeItem__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {ConfigurationEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ConfigurationEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'SizeItem(NativeObject)'.
 /** @return {!SizeItem} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  SizeItem.$clinit();
  let $instance = new SizeItem();
  $instance.$ctor__org_pepstock_charba_client_items_SizeItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'SizeItem(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_items_SizeItem__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {number} */
 m_getWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_WIDTH__org_pepstock_charba_client_items_SizeItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getHeight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_HEIGHT__org_pepstock_charba_client_items_SizeItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 
 static $clinit() {
  SizeItem.$clinit = () =>{};
  SizeItem.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SizeItem;
 }
 
 static $loadModules() {
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  ConfigurationEnvelop = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.SizeItem.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(SizeItem, "org.pepstock.charba.client.items.SizeItem");

exports = SizeItem;

//# sourceMappingURL=SizeItem.js.map
