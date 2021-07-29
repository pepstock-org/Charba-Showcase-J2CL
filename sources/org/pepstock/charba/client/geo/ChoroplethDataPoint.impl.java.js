goog.module('org.pepstock.charba.client.geo.ChoroplethDataPoint$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const GeoDataPoint = goog.require('org.pepstock.charba.client.geo.GeoDataPoint$impl');

let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let ChoroplethDataPointFactory = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethDataPoint.ChoroplethDataPointFactory$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethDataPoint.Property$impl');
let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');

class ChoroplethDataPoint extends GeoDataPoint {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ChoroplethDataPoint()'.
 /** @return {!ChoroplethDataPoint} */
 static $create__() {
  ChoroplethDataPoint.$clinit();
  let $instance = new ChoroplethDataPoint();
  $instance.$ctor__org_pepstock_charba_client_geo_ChoroplethDataPoint__();
  return $instance;
 }
 //Initialization from constructor 'ChoroplethDataPoint()'.
 
 $ctor__org_pepstock_charba_client_geo_ChoroplethDataPoint__() {
  this.$ctor__org_pepstock_charba_client_geo_ChoroplethDataPoint__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (null));
 }
 //Factory method corresponding to constructor 'ChoroplethDataPoint(Feature)'.
 /** @return {!ChoroplethDataPoint} */
 static $create__org_pepstock_charba_client_geo_Feature(/** Feature */ feature) {
  ChoroplethDataPoint.$clinit();
  let $instance = new ChoroplethDataPoint();
  $instance.$ctor__org_pepstock_charba_client_geo_ChoroplethDataPoint__org_pepstock_charba_client_geo_Feature(feature);
  return $instance;
 }
 //Initialization from constructor 'ChoroplethDataPoint(Feature)'.
 
 $ctor__org_pepstock_charba_client_geo_ChoroplethDataPoint__org_pepstock_charba_client_geo_Feature(/** Feature */ feature) {
  this.$ctor__org_pepstock_charba_client_geo_ChoroplethDataPoint__();
  this.m_setFeature__org_pepstock_charba_client_geo_Feature(feature);
 }
 //Factory method corresponding to constructor 'ChoroplethDataPoint(Feature, double)'.
 /** @return {!ChoroplethDataPoint} */
 static $create__org_pepstock_charba_client_geo_Feature__double(/** Feature */ feature, /** number */ value) {
  ChoroplethDataPoint.$clinit();
  let $instance = new ChoroplethDataPoint();
  $instance.$ctor__org_pepstock_charba_client_geo_ChoroplethDataPoint__org_pepstock_charba_client_geo_Feature__double(feature, value);
  return $instance;
 }
 //Initialization from constructor 'ChoroplethDataPoint(Feature, double)'.
 
 $ctor__org_pepstock_charba_client_geo_ChoroplethDataPoint__org_pepstock_charba_client_geo_Feature__double(/** Feature */ feature, /** number */ value) {
  this.$ctor__org_pepstock_charba_client_geo_ChoroplethDataPoint__org_pepstock_charba_client_geo_Feature(feature);
  this.m_setValue__double(value);
 }
 //Factory method corresponding to constructor 'ChoroplethDataPoint(NativeObject)'.
 /** @return {!ChoroplethDataPoint} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  ChoroplethDataPoint.$clinit();
  let $instance = new ChoroplethDataPoint();
  $instance.$ctor__org_pepstock_charba_client_geo_ChoroplethDataPoint__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'ChoroplethDataPoint(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_geo_ChoroplethDataPoint__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_geo_GeoDataPoint__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_setFeature__org_pepstock_charba_client_geo_Feature(/** Feature */ feature) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_FEATURE__org_pepstock_charba_client_geo_ChoroplethDataPoint_Property, feature);
 }
 /** @return {Feature} */
 m_getFeature__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_FEATURE__org_pepstock_charba_client_geo_ChoroplethDataPoint_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return Feature.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_FEATURE__org_pepstock_charba_client_geo_ChoroplethDataPoint_Property));
  }
  return null;
 }
 /** @return {ChoroplethDataPointFactory} */
 static get f_FACTORY__org_pepstock_charba_client_geo_ChoroplethDataPoint() {
  return (ChoroplethDataPoint.$clinit(), ChoroplethDataPoint.$static_FACTORY__org_pepstock_charba_client_geo_ChoroplethDataPoint);
 }
 
 static $clinit() {
  ChoroplethDataPoint.$clinit = () =>{};
  ChoroplethDataPoint.$loadModules();
  GeoDataPoint.$clinit();
  ChoroplethDataPoint.$static_FACTORY__org_pepstock_charba_client_geo_ChoroplethDataPoint = ChoroplethDataPointFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChoroplethDataPoint;
 }
 
 static $loadModules() {
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  ChoroplethDataPointFactory = goog.module.get('org.pepstock.charba.client.geo.ChoroplethDataPoint.ChoroplethDataPointFactory$impl');
  Property = goog.module.get('org.pepstock.charba.client.geo.ChoroplethDataPoint.Property$impl');
  Feature = goog.module.get('org.pepstock.charba.client.geo.Feature$impl');
 }
}
/**@private {ChoroplethDataPointFactory}*/
ChoroplethDataPoint.$static_FACTORY__org_pepstock_charba_client_geo_ChoroplethDataPoint;
$Util.$setClassMetadata(ChoroplethDataPoint, "org.pepstock.charba.client.geo.ChoroplethDataPoint");

exports = ChoroplethDataPoint;

//# sourceMappingURL=ChoroplethDataPoint.js.map
