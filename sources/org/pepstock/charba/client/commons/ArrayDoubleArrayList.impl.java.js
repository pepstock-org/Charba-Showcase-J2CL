goog.module('org.pepstock.charba.client.commons.ArrayDoubleArrayList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractArrayNativeContainerList = goog.require('org.pepstock.charba.client.commons.AbstractArrayNativeContainerList$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ArrayDouble_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDoubleArray.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let NativeArrayContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeArrayContainer$impl');
let NativeArrayContainerFactory = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeArrayContainerFactory$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E
 * @extends {AbstractArrayNativeContainerList<E, Array>}
 */
class ArrayDoubleArrayList extends AbstractArrayNativeContainerList {
 /** @protected */
 constructor() {
  super();
  /**@type {Array}*/
  this.f_array__org_pepstock_charba_client_commons_ArrayDoubleArrayList_;
 }
 //Factory method corresponding to constructor 'ArrayDoubleArrayList(ArrayDoubleArray, NativeArrayContainerFactory)'.
 /** @template E @return {!ArrayDoubleArrayList<E>} */
 static $create__org_pepstock_charba_client_commons_ArrayDoubleArray__org_pepstock_charba_client_commons_NativeArrayContainerFactory(/** Array */ array, /** NativeArrayContainerFactory<Array, E> */ factory) {
  ArrayDoubleArrayList.$clinit();
  let $instance = new ArrayDoubleArrayList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayDoubleArrayList__org_pepstock_charba_client_commons_ArrayDoubleArray__org_pepstock_charba_client_commons_NativeArrayContainerFactory(array, factory);
  return $instance;
 }
 //Initialization from constructor 'ArrayDoubleArrayList(ArrayDoubleArray, NativeArrayContainerFactory)'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayDoubleArrayList__org_pepstock_charba_client_commons_ArrayDoubleArray__org_pepstock_charba_client_commons_NativeArrayContainerFactory(/** Array */ array, /** NativeArrayContainerFactory<Array, E> */ factory) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList__();
  if ($Equality.$same(array, null)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayDoubleArrayList_ = new Array();
  } else {
   Checker.m_checkIfValid__java_lang_Object__java_lang_String(factory, "Unable to create array list without a factory. The factory");
   this.f_array__org_pepstock_charba_client_commons_ArrayDoubleArrayList_ = array;
   for (let i = 0; i < array.length; i = i + 1 | 0) {
    this.m_getDelegate___$pp_org_pepstock_charba_client_commons().add(factory.m_create__org_pepstock_charba_client_commons_Array($Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayDoubleArray__int(array, i)));
   }
  }
 }
 //Factory method corresponding to constructor 'ArrayDoubleArrayList()'.
 /** @template E @return {!ArrayDoubleArrayList<E>} */
 static $create__() {
  ArrayDoubleArrayList.$clinit();
  let $instance = new ArrayDoubleArrayList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayDoubleArrayList__();
  return $instance;
 }
 //Initialization from constructor 'ArrayDoubleArrayList()'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayDoubleArrayList__() {
  this.$ctor__org_pepstock_charba_client_commons_ArrayDoubleArrayList__org_pepstock_charba_client_commons_ArrayDoubleArray__org_pepstock_charba_client_commons_NativeArrayContainerFactory(null, null);
 }
 /** @override @return {Array} */
 m_getArray___$pp_org_pepstock_charba_client_commons() {
  return this.f_array__org_pepstock_charba_client_commons_ArrayDoubleArrayList_;
 }
 /** @override */
 clear() {
  super.clear();
  $Overlay.m_clear__$devirt__org_pepstock_charba_client_commons_ArrayDoubleArray(this.f_array__org_pepstock_charba_client_commons_ArrayDoubleArrayList_);
 }
 /** @override @return {boolean} */
 add(/** E */ element) {
  if (super.add(element)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayDoubleArrayList_.push(/**@type {Array}*/ ($Casts.$to(/**@type {NativeArrayContainer}*/ (element).m_getNativeArray__(), ArrayDouble_$Overlay)));
   return true;
  }
  return false;
 }
 /** @override @return {E} */
 setAtIndex(/** number */ index, /** E */ element) {
  let old = /**@type {E}*/ ($Casts.$to(super.setAtIndex(index, element), NativeArrayContainer));
  if (!$Equality.$same(old, null)) {
   $Overlay.m_set__$devirt__org_pepstock_charba_client_commons_ArrayDoubleArray__int__org_pepstock_charba_client_commons_ArrayDouble(this.f_array__org_pepstock_charba_client_commons_ArrayDoubleArrayList_, index, /**@type {Array}*/ ($Casts.$to(/**@type {NativeArrayContainer}*/ (element).m_getNativeArray__(), ArrayDouble_$Overlay)));
   return old;
  }
  return null;
 }
 /** @override */
 addAtIndex(/** number */ index, /** E */ element) {
  if (!$Equality.$same(element, null)) {
   super.addAtIndex(index, element);
   $Overlay.m_insertAt__$devirt__org_pepstock_charba_client_commons_ArrayDoubleArray__int__org_pepstock_charba_client_commons_ArrayDouble(this.f_array__org_pepstock_charba_client_commons_ArrayDoubleArrayList_, index, /**@type {Array}*/ ($Casts.$to(/**@type {NativeArrayContainer}*/ (element).m_getNativeArray__(), ArrayDouble_$Overlay)));
  }
 }
 /** @override @return {E} */
 removeAtIndex(/** number */ index) {
  let old = /**@type {E}*/ ($Casts.$to(super.removeAtIndex(index), NativeArrayContainer));
  if (!$Equality.$same(old, null)) {
   $Overlay.m_remove__$devirt__org_pepstock_charba_client_commons_ArrayDoubleArray__int(this.f_array__org_pepstock_charba_client_commons_ArrayDoubleArrayList_, index);
   return old;
  }
  return null;
 }
 
 static $clinit() {
  ArrayDoubleArrayList.$clinit = () =>{};
  ArrayDoubleArrayList.$loadModules();
  AbstractArrayNativeContainerList.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayDoubleArrayList;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ArrayDouble_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayDoubleArray.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  NativeArrayContainer = goog.module.get('org.pepstock.charba.client.commons.NativeArrayContainer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ArrayDoubleArrayList, "org.pepstock.charba.client.commons.ArrayDoubleArrayList");

exports = ArrayDoubleArrayList;

//# sourceMappingURL=ArrayDoubleArrayList.js.map
