goog.module('org.pepstock.charba.client.geo.GeoDataPoint$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Property = goog.forwardDeclare('org.pepstock.charba.client.geo.GeoDataPoint.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

/**
 * @abstract
 */
class GeoDataPoint extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_geo_GeoDataPoint__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_setValue__double(/** number */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_VALUE__org_pepstock_charba_client_geo_GeoDataPoint_Property, value);
 }
 /** @return {number} */
 m_getValue__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_VALUE__org_pepstock_charba_client_geo_GeoDataPoint_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 
 static $clinit() {
  GeoDataPoint.$clinit = () =>{};
  GeoDataPoint.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GeoDataPoint;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.geo.GeoDataPoint.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
$Util.$setClassMetadata(GeoDataPoint, "org.pepstock.charba.client.geo.GeoDataPoint");

exports = GeoDataPoint;

//# sourceMappingURL=GeoDataPoint.js.map
