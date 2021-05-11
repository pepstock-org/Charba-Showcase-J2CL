goog.module('org.pepstock.charba.client.zoom.Amount$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPoint = goog.require('org.pepstock.charba.client.commons.AbstractPoint$impl');

class Amount extends AbstractPoint {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'Amount()'.
 /** @return {!Amount} */
 static $create__() {
  Amount.$clinit();
  let $instance = new Amount();
  $instance.$ctor__org_pepstock_charba_client_zoom_Amount__();
  return $instance;
 }
 //Initialization from constructor 'Amount()'.
 
 $ctor__org_pepstock_charba_client_zoom_Amount__() {
  this.$ctor__org_pepstock_charba_client_commons_AbstractPoint__();
 }
 //Factory method corresponding to constructor 'Amount(double)'.
 /** @return {!Amount} */
 static $create__double(/** number */ x) {
  Amount.$clinit();
  let $instance = new Amount();
  $instance.$ctor__org_pepstock_charba_client_zoom_Amount__double(x);
  return $instance;
 }
 //Initialization from constructor 'Amount(double)'.
 
 $ctor__org_pepstock_charba_client_zoom_Amount__double(/** number */ x) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractPoint__double(x);
 }
 //Factory method corresponding to constructor 'Amount(double, double)'.
 /** @return {!Amount} */
 static $create__double__double(/** number */ x, /** number */ y) {
  Amount.$clinit();
  let $instance = new Amount();
  $instance.$ctor__org_pepstock_charba_client_zoom_Amount__double__double(x, y);
  return $instance;
 }
 //Initialization from constructor 'Amount(double, double)'.
 
 $ctor__org_pepstock_charba_client_zoom_Amount__double__double(/** number */ x, /** number */ y) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractPoint__double__double(x, y);
 }
 //Factory method corresponding to constructor 'Amount(NativeObject)'.
 /** @return {!Amount} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  Amount.$clinit();
  let $instance = new Amount();
  $instance.$ctor__org_pepstock_charba_client_zoom_Amount__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'Amount(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_zoom_Amount__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractPoint__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_zoom() {
  return this.m_getNativeObject__();
 }
 
 static $clinit() {
  Amount.$clinit = () =>{};
  Amount.$loadModules();
  AbstractPoint.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Amount;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Amount, "org.pepstock.charba.client.zoom.Amount");

exports = Amount;

//# sourceMappingURL=Amount.js.map
