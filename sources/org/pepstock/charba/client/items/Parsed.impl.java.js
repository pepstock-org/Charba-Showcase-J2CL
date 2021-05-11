goog.module('org.pepstock.charba.client.items.Parsed$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Property = goog.forwardDeclare('org.pepstock.charba.client.items.Parsed.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class Parsed extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Parsed} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  Parsed.$clinit();
  let $instance = new Parsed();
  $instance.$ctor__org_pepstock_charba_client_items_Parsed__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_Parsed__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {number} */
 m_getX__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_X__org_pepstock_charba_client_items_Parsed_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getY__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y__org_pepstock_charba_client_items_Parsed_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {boolean} */
 m_isConsistent__() {
  return Undefined.m_isNot__double(this.m_getX__()) && Undefined.m_isNot__double(this.m_getY__());
 }
 
 static $clinit() {
  Parsed.$clinit = () =>{};
  Parsed.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Parsed;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.items.Parsed.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
$Util.$setClassMetadata(Parsed, "org.pepstock.charba.client.items.Parsed");

exports = Parsed;

//# sourceMappingURL=Parsed.js.map
