goog.module('org.pepstock.charba.client.positioner.Point$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPoint = goog.require('org.pepstock.charba.client.commons.AbstractPoint$impl');

class Point extends AbstractPoint {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'Point()'.
 /** @return {!Point} */
 static $create__() {
  Point.$clinit();
  let $instance = new Point();
  $instance.$ctor__org_pepstock_charba_client_positioner_Point__();
  return $instance;
 }
 //Initialization from constructor 'Point()'.
 
 $ctor__org_pepstock_charba_client_positioner_Point__() {
  this.$ctor__org_pepstock_charba_client_commons_AbstractPoint__();
 }
 //Factory method corresponding to constructor 'Point(double)'.
 /** @return {!Point} */
 static $create__double(/** number */ x) {
  Point.$clinit();
  let $instance = new Point();
  $instance.$ctor__org_pepstock_charba_client_positioner_Point__double(x);
  return $instance;
 }
 //Initialization from constructor 'Point(double)'.
 
 $ctor__org_pepstock_charba_client_positioner_Point__double(/** number */ x) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractPoint__double(x);
 }
 //Factory method corresponding to constructor 'Point(double, double)'.
 /** @return {!Point} */
 static $create__double__double(/** number */ x, /** number */ y) {
  Point.$clinit();
  let $instance = new Point();
  $instance.$ctor__org_pepstock_charba_client_positioner_Point__double__double(x, y);
  return $instance;
 }
 //Initialization from constructor 'Point(double, double)'.
 
 $ctor__org_pepstock_charba_client_positioner_Point__double__double(/** number */ x, /** number */ y) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractPoint__double__double(x, y);
 }
 //Factory method corresponding to constructor 'Point(NativeObject)'.
 /** @return {!Point} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  Point.$clinit();
  let $instance = new Point();
  $instance.$ctor__org_pepstock_charba_client_positioner_Point__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'Point(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_positioner_Point__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractPoint__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_positioner() {
  return this.m_getNativeObject__();
 }
 
 static $clinit() {
  Point.$clinit = () =>{};
  Point.$loadModules();
  AbstractPoint.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Point;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Point, "org.pepstock.charba.client.positioner.Point");

exports = Point;

//# sourceMappingURL=Point.js.map
