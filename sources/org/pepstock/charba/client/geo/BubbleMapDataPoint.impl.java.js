goog.module('org.pepstock.charba.client.geo.BubbleMapDataPoint$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const GeoDataPoint = goog.require('org.pepstock.charba.client.geo.GeoDataPoint$impl');

let BubbleMapDataPointFactory = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapDataPoint.BubbleMapDataPointFactory$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapDataPoint.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class BubbleMapDataPoint extends GeoDataPoint {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'BubbleMapDataPoint()'.
 /** @return {!BubbleMapDataPoint} */
 static $create__() {
  BubbleMapDataPoint.$clinit();
  let $instance = new BubbleMapDataPoint();
  $instance.$ctor__org_pepstock_charba_client_geo_BubbleMapDataPoint__();
  return $instance;
 }
 //Initialization from constructor 'BubbleMapDataPoint()'.
 
 $ctor__org_pepstock_charba_client_geo_BubbleMapDataPoint__() {
  this.$ctor__org_pepstock_charba_client_geo_BubbleMapDataPoint__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (null));
 }
 //Factory method corresponding to constructor 'BubbleMapDataPoint(double, double)'.
 /** @return {!BubbleMapDataPoint} */
 static $create__double__double(/** number */ latitude, /** number */ longitude) {
  BubbleMapDataPoint.$clinit();
  let $instance = new BubbleMapDataPoint();
  $instance.$ctor__org_pepstock_charba_client_geo_BubbleMapDataPoint__double__double(latitude, longitude);
  return $instance;
 }
 //Initialization from constructor 'BubbleMapDataPoint(double, double)'.
 
 $ctor__org_pepstock_charba_client_geo_BubbleMapDataPoint__double__double(/** number */ latitude, /** number */ longitude) {
  this.$ctor__org_pepstock_charba_client_geo_BubbleMapDataPoint__();
  this.m_setLatitude__double(latitude);
  this.m_setLongitude__double(longitude);
 }
 //Factory method corresponding to constructor 'BubbleMapDataPoint(double, double, double)'.
 /** @return {!BubbleMapDataPoint} */
 static $create__double__double__double(/** number */ latitude, /** number */ longitude, /** number */ value) {
  BubbleMapDataPoint.$clinit();
  let $instance = new BubbleMapDataPoint();
  $instance.$ctor__org_pepstock_charba_client_geo_BubbleMapDataPoint__double__double__double(latitude, longitude, value);
  return $instance;
 }
 //Initialization from constructor 'BubbleMapDataPoint(double, double, double)'.
 
 $ctor__org_pepstock_charba_client_geo_BubbleMapDataPoint__double__double__double(/** number */ latitude, /** number */ longitude, /** number */ value) {
  this.$ctor__org_pepstock_charba_client_geo_BubbleMapDataPoint__double__double(latitude, longitude);
  this.m_setValue__double(value);
 }
 //Factory method corresponding to constructor 'BubbleMapDataPoint(NativeObject)'.
 /** @return {!BubbleMapDataPoint} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  BubbleMapDataPoint.$clinit();
  let $instance = new BubbleMapDataPoint();
  $instance.$ctor__org_pepstock_charba_client_geo_BubbleMapDataPoint__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'BubbleMapDataPoint(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_geo_BubbleMapDataPoint__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_geo_GeoDataPoint__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_setLatitude__double(/** number */ latitude) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_LATITUDE__org_pepstock_charba_client_geo_BubbleMapDataPoint_Property, latitude);
 }
 /** @return {number} */
 m_getLatitude__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_LATITUDE__org_pepstock_charba_client_geo_BubbleMapDataPoint_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 
 m_setLongitude__double(/** number */ longitude) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_LONGITUDE__org_pepstock_charba_client_geo_BubbleMapDataPoint_Property, longitude);
 }
 /** @return {number} */
 m_getLongitude__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_LONGITUDE__org_pepstock_charba_client_geo_BubbleMapDataPoint_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {BubbleMapDataPointFactory} */
 static get f_FACTORY__org_pepstock_charba_client_geo_BubbleMapDataPoint() {
  return (BubbleMapDataPoint.$clinit(), BubbleMapDataPoint.$static_FACTORY__org_pepstock_charba_client_geo_BubbleMapDataPoint);
 }
 
 static $clinit() {
  BubbleMapDataPoint.$clinit = () =>{};
  BubbleMapDataPoint.$loadModules();
  GeoDataPoint.$clinit();
  BubbleMapDataPoint.$static_FACTORY__org_pepstock_charba_client_geo_BubbleMapDataPoint = BubbleMapDataPointFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BubbleMapDataPoint;
 }
 
 static $loadModules() {
  BubbleMapDataPointFactory = goog.module.get('org.pepstock.charba.client.geo.BubbleMapDataPoint.BubbleMapDataPointFactory$impl');
  Property = goog.module.get('org.pepstock.charba.client.geo.BubbleMapDataPoint.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@private {BubbleMapDataPointFactory}*/
BubbleMapDataPoint.$static_FACTORY__org_pepstock_charba_client_geo_BubbleMapDataPoint;
$Util.$setClassMetadata(BubbleMapDataPoint, "org.pepstock.charba.client.geo.BubbleMapDataPoint");

exports = BubbleMapDataPoint;

//# sourceMappingURL=BubbleMapDataPoint.js.map
