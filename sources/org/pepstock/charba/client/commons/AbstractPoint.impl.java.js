goog.module('org.pepstock.charba.client.commons.AbstractPoint$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Property = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractPoint.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

/**
 * @abstract
 */
class AbstractPoint extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Initialization from constructor 'AbstractPoint()'.
 
 $ctor__org_pepstock_charba_client_commons_AbstractPoint__() {
  this.$ctor__org_pepstock_charba_client_commons_AbstractPoint__double(Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 //Initialization from constructor 'AbstractPoint(double)'.
 
 $ctor__org_pepstock_charba_client_commons_AbstractPoint__double(/** number */ x) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractPoint__double__double(x, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 //Initialization from constructor 'AbstractPoint(double, double)'.
 
 $ctor__org_pepstock_charba_client_commons_AbstractPoint__double__double(/** number */ x, /** number */ y) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractPoint__org_pepstock_charba_client_commons_NativeObject(null);
  if (Undefined.m_isNot__double(x)) {
   this.m_setX__double(x);
  }
  if (Undefined.m_isNot__double(y)) {
   this.m_setY__double(y);
  }
 }
 //Initialization from constructor 'AbstractPoint(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_commons_AbstractPoint__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_setX__double(/** number */ x) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_X__org_pepstock_charba_client_commons_AbstractPoint_Property, x);
 }
 /** @return {number} */
 m_getX__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_X__org_pepstock_charba_client_commons_AbstractPoint_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 
 m_setY__double(/** number */ y) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y__org_pepstock_charba_client_commons_AbstractPoint_Property, y);
 }
 /** @return {number} */
 m_getY__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y__org_pepstock_charba_client_commons_AbstractPoint_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {boolean} */
 m_isConsistent__() {
  return Undefined.m_isNot__double(this.m_getX__()) && Undefined.m_isNot__double(this.m_getY__());
 }
 
 static $clinit() {
  AbstractPoint.$clinit = () =>{};
  AbstractPoint.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractPoint;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.commons.AbstractPoint.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
$Util.$setClassMetadata(AbstractPoint, "org.pepstock.charba.client.commons.AbstractPoint");

exports = AbstractPoint;

//# sourceMappingURL=AbstractPoint.js.map
