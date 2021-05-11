goog.module('org.pepstock.charba.client.data.FloatingData$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeArrayDoubleContainer = goog.require('org.pepstock.charba.client.commons.NativeArrayDoubleContainer$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

class FloatingData extends NativeArrayDoubleContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'FloatingData()'.
 /** @return {!FloatingData} */
 static $create__() {
  FloatingData.$clinit();
  let $instance = new FloatingData();
  $instance.$ctor__org_pepstock_charba_client_data_FloatingData__();
  return $instance;
 }
 //Initialization from constructor 'FloatingData()'.
 
 $ctor__org_pepstock_charba_client_data_FloatingData__() {
  this.$ctor__org_pepstock_charba_client_data_FloatingData__double__double(Double.f_NaN__java_lang_Double, Double.f_NaN__java_lang_Double);
 }
 //Factory method corresponding to constructor 'FloatingData(double, double)'.
 /** @return {!FloatingData} */
 static $create__double__double(/** number */ start, /** number */ end) {
  FloatingData.$clinit();
  let $instance = new FloatingData();
  $instance.$ctor__org_pepstock_charba_client_data_FloatingData__double__double(start, end);
  return $instance;
 }
 //Initialization from constructor 'FloatingData(double, double)'.
 
 $ctor__org_pepstock_charba_client_data_FloatingData__double__double(/** number */ start, /** number */ end) {
  this.$ctor__org_pepstock_charba_client_data_FloatingData__org_pepstock_charba_client_commons_ArrayDouble($Overlay.m_fromOrEmpty__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([start, end], $double))));
 }
 //Factory method corresponding to constructor 'FloatingData(ArrayDouble)'.
 /** @return {!FloatingData} */
 static $create__org_pepstock_charba_client_commons_ArrayDouble(/** Array */ nativeArray) {
  FloatingData.$clinit();
  let $instance = new FloatingData();
  $instance.$ctor__org_pepstock_charba_client_data_FloatingData__org_pepstock_charba_client_commons_ArrayDouble(nativeArray);
  return $instance;
 }
 //Initialization from constructor 'FloatingData(ArrayDouble)'.
 
 $ctor__org_pepstock_charba_client_data_FloatingData__org_pepstock_charba_client_commons_ArrayDouble(/** Array */ nativeArray) {
  this.$ctor__org_pepstock_charba_client_commons_NativeArrayDoubleContainer__org_pepstock_charba_client_commons_ArrayDouble(nativeArray);
 }
 /** @return {number} */
 m_getStart__() {
  return $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayDouble__int(/**@type {Array}*/ ($Casts.$to(this.m_getNativeArray__(), $Overlay)), 0);
 }
 /** @return {number} */
 m_getEnd__() {
  return $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayDouble__int(/**@type {Array}*/ ($Casts.$to(this.m_getNativeArray__(), $Overlay)), 1);
 }
 
 m_setValues__double__double(/** number */ start, /** number */ end) {
  super.m_clear__();
  super.m_push__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([start, end], $double)));
 }
 /** @return {number} */
 m_getValue__() {
  let start = this.m_getStart__();
  let end = this.m_getEnd__();
  if (Undefined.m_is__double(start) || Undefined.m_is__double(end)) {
   return 0;
  }
  return end - start;
 }
 /** @return {number} */
 m_getAbsValue__() {
  return Math.abs(this.m_getValue__());
 }
 /** @override @return {?string} */
 toString() {
  return "[" + this.m_getStart__() + "," + this.m_getEnd__() + "]";
 }
 
 static $clinit() {
  FloatingData.$clinit = () =>{};
  FloatingData.$loadModules();
  NativeArrayDoubleContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FloatingData;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
$Util.$setClassMetadata(FloatingData, "org.pepstock.charba.client.data.FloatingData");

exports = FloatingData;

//# sourceMappingURL=FloatingData.js.map
