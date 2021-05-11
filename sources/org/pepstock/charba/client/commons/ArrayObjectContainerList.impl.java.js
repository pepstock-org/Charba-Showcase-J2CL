goog.module('org.pepstock.charba.client.commons.ArrayObjectContainerList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractArrayNativeContainerList = goog.require('org.pepstock.charba.client.commons.AbstractArrayNativeContainerList$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let NativeObjectContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
let NativeObjectContainerFactory = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E
 * @extends {AbstractArrayNativeContainerList<E, Array>}
 */
class ArrayObjectContainerList extends AbstractArrayNativeContainerList {
 /** @protected */
 constructor() {
  super();
  /**@type {Array}*/
  this.f_array__org_pepstock_charba_client_commons_ArrayObjectContainerList_;
 }
 //Factory method corresponding to constructor 'ArrayObjectContainerList(ArrayObject, NativeObjectContainerFactory)'.
 /** @template E @return {!ArrayObjectContainerList<E>} */
 static $create__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(/** Array */ array, /** NativeObjectContainerFactory<E> */ factory) {
  ArrayObjectContainerList.$clinit();
  let $instance = new ArrayObjectContainerList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayObjectContainerList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, factory);
  return $instance;
 }
 //Initialization from constructor 'ArrayObjectContainerList(ArrayObject, NativeObjectContainerFactory)'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayObjectContainerList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(/** Array */ array, /** NativeObjectContainerFactory<E> */ factory) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList__();
  if ($Equality.$same(array, null)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayObjectContainerList_ = new Array();
  } else {
   Checker.m_checkIfValid__java_lang_Object__java_lang_String(factory, "Unable to create array list without a factory. The factory");
   this.f_array__org_pepstock_charba_client_commons_ArrayObjectContainerList_ = array;
   for (let i = 0; i < array.length; i = i + 1 | 0) {
    this.m_getDelegate___$pp_org_pepstock_charba_client_commons().add(factory.m_create__org_pepstock_charba_client_commons_NativeObject($Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayObject__int(array, i)));
   }
  }
 }
 //Factory method corresponding to constructor 'ArrayObjectContainerList()'.
 /** @template E @return {!ArrayObjectContainerList<E>} */
 static $create__() {
  ArrayObjectContainerList.$clinit();
  let $instance = new ArrayObjectContainerList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayObjectContainerList__();
  return $instance;
 }
 //Initialization from constructor 'ArrayObjectContainerList()'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayObjectContainerList__() {
  this.$ctor__org_pepstock_charba_client_commons_ArrayObjectContainerList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(null, null);
 }
 /** @override @return {Array} */
 m_getArray___$pp_org_pepstock_charba_client_commons() {
  return this.f_array__org_pepstock_charba_client_commons_ArrayObjectContainerList_;
 }
 /** @override @return {boolean} */
 add(/** E */ element) {
  if (super.add(element)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayObjectContainerList_.push(/**@type {NativeObjectContainer}*/ (element).m_getNativeObject__());
   return true;
  }
  return false;
 }
 /** @override */
 clear() {
  super.clear();
  $Overlay.m_clear__$devirt__org_pepstock_charba_client_commons_ArrayObject(this.f_array__org_pepstock_charba_client_commons_ArrayObjectContainerList_);
 }
 /** @override @return {E} */
 setAtIndex(/** number */ index, /** E */ element) {
  let old = /**@type {E}*/ ($Casts.$to(super.setAtIndex(index, element), NativeObjectContainer));
  if (!$Equality.$same(old, null)) {
   $Overlay.m_set__$devirt__org_pepstock_charba_client_commons_ArrayObject__int__org_pepstock_charba_client_commons_NativeObject(this.f_array__org_pepstock_charba_client_commons_ArrayObjectContainerList_, index, /**@type {NativeObjectContainer}*/ (element).m_getNativeObject__());
   return old;
  }
  return null;
 }
 /** @override */
 addAtIndex(/** number */ index, /** E */ element) {
  if (!$Equality.$same(element, null)) {
   super.addAtIndex(index, element);
   $Overlay.m_insertAt__$devirt__org_pepstock_charba_client_commons_ArrayObject__int__org_pepstock_charba_client_commons_NativeObject(this.f_array__org_pepstock_charba_client_commons_ArrayObjectContainerList_, index, /**@type {NativeObjectContainer}*/ (element).m_getNativeObject__());
  }
 }
 /** @override @return {E} */
 removeAtIndex(/** number */ index) {
  let old = /**@type {E}*/ ($Casts.$to(super.removeAtIndex(index), NativeObjectContainer));
  if (!$Equality.$same(old, null)) {
   $Overlay.m_remove__$devirt__org_pepstock_charba_client_commons_ArrayObject__int(this.f_array__org_pepstock_charba_client_commons_ArrayObjectContainerList_, index);
   return old;
  }
  return null;
 }
 
 static $clinit() {
  ArrayObjectContainerList.$clinit = () =>{};
  ArrayObjectContainerList.$loadModules();
  AbstractArrayNativeContainerList.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayObjectContainerList;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  NativeObjectContainer = goog.module.get('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ArrayObjectContainerList, "org.pepstock.charba.client.commons.ArrayObjectContainerList");

exports = ArrayObjectContainerList;

//# sourceMappingURL=ArrayObjectContainerList.js.map
