goog.module('org.pepstock.charba.client.data.FloatingDatatFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeArrayContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeArrayContainerFactory$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let FloatingData = goog.forwardDeclare('org.pepstock.charba.client.data.FloatingData$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

/**
 * @implements {NativeArrayContainerFactory<Array, FloatingData>}
 */
class FloatingDatatFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!FloatingDatatFactory} */
 static $create__() {
  FloatingDatatFactory.$clinit();
  let $instance = new FloatingDatatFactory();
  $instance.$ctor__org_pepstock_charba_client_data_FloatingDatatFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_FloatingDatatFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {FloatingData} */
 m_create__org_pepstock_charba_client_commons_ArrayDouble(/** Array */ nativeArray) {
  if (!$Equality.$same(nativeArray, null)) {
   Checker.m_checkIfEqualTo__int__int__java_lang_String(nativeArray.length, 2, "Array size");
   return FloatingData.$create__org_pepstock_charba_client_commons_ArrayDouble(nativeArray);
  }
  return FloatingData.$create__org_pepstock_charba_client_commons_ArrayDouble($Overlay.m_fromOrEmpty__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([Double.f_NaN__java_lang_Double, Double.f_NaN__java_lang_Double], $double))));
 }
 //Default method forwarding stub.
 /** @override @return {FloatingData} */
 m_create__() {
  return /**@type {FloatingData}*/ ($Casts.$to(NativeArrayContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeArrayContainerFactory(this), FloatingData));
 }
 //Bridge method.
 /** @override @return {FloatingData} */
 m_create__org_pepstock_charba_client_commons_Array(/** Array */ arg0) {
  return this.m_create__org_pepstock_charba_client_commons_ArrayDouble(/**@type {Array}*/ ($Casts.$to(arg0, $Overlay)));
 }
 
 static $clinit() {
  FloatingDatatFactory.$clinit = () =>{};
  FloatingDatatFactory.$loadModules();
  j_l_Object.$clinit();
  NativeArrayContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FloatingDatatFactory;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  FloatingData = goog.module.get('org.pepstock.charba.client.data.FloatingData$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
NativeArrayContainerFactory.$markImplementor(FloatingDatatFactory);
$Util.$setClassMetadata(FloatingDatatFactory, "org.pepstock.charba.client.data.FloatingDatatFactory");

exports = FloatingDatatFactory;

//# sourceMappingURL=FloatingDatatFactory.js.map
