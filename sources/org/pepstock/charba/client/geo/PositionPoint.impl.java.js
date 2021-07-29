goog.module('org.pepstock.charba.client.geo.PositionPoint$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPoint = goog.require('org.pepstock.charba.client.commons.AbstractPoint$impl');

class PositionPoint extends AbstractPoint {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'PositionPoint()'.
 /** @return {!PositionPoint} */
 static $create__() {
  PositionPoint.$clinit();
  let $instance = new PositionPoint();
  $instance.$ctor__org_pepstock_charba_client_geo_PositionPoint__();
  return $instance;
 }
 //Initialization from constructor 'PositionPoint()'.
 
 $ctor__org_pepstock_charba_client_geo_PositionPoint__() {
  this.$ctor__org_pepstock_charba_client_commons_AbstractPoint__();
 }
 //Factory method corresponding to constructor 'PositionPoint(double)'.
 /** @return {!PositionPoint} */
 static $create__double(/** number */ x) {
  PositionPoint.$clinit();
  let $instance = new PositionPoint();
  $instance.$ctor__org_pepstock_charba_client_geo_PositionPoint__double(x);
  return $instance;
 }
 //Initialization from constructor 'PositionPoint(double)'.
 
 $ctor__org_pepstock_charba_client_geo_PositionPoint__double(/** number */ x) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractPoint__double(x);
 }
 //Factory method corresponding to constructor 'PositionPoint(double, double)'.
 /** @return {!PositionPoint} */
 static $create__double__double(/** number */ x, /** number */ y) {
  PositionPoint.$clinit();
  let $instance = new PositionPoint();
  $instance.$ctor__org_pepstock_charba_client_geo_PositionPoint__double__double(x, y);
  return $instance;
 }
 //Initialization from constructor 'PositionPoint(double, double)'.
 
 $ctor__org_pepstock_charba_client_geo_PositionPoint__double__double(/** number */ x, /** number */ y) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractPoint__double__double(x, y);
 }
 //Factory method corresponding to constructor 'PositionPoint(NativeObject)'.
 /** @return {!PositionPoint} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  PositionPoint.$clinit();
  let $instance = new PositionPoint();
  $instance.$ctor__org_pepstock_charba_client_geo_PositionPoint__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'PositionPoint(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_geo_PositionPoint__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractPoint__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_geo() {
  return this.m_getNativeObject__();
 }
 
 static $clinit() {
  PositionPoint.$clinit = () =>{};
  PositionPoint.$loadModules();
  AbstractPoint.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PositionPoint;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(PositionPoint, "org.pepstock.charba.client.geo.PositionPoint");

exports = PositionPoint;

//# sourceMappingURL=PositionPoint.js.map
