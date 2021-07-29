goog.module('org.pepstock.charba.client.commons.AbstractArrayNativeContainerList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractArrayContainerList = goog.require('org.pepstock.charba.client.commons.AbstractArrayContainerList$impl');

let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ListIterator = goog.forwardDeclare('java.util.ListIterator$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AbstractArrayList = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractArrayList$impl');
let IteratorImpl = goog.forwardDeclare('org.pepstock.charba.client.commons.IteratorImpl$impl');
let ListIteratorImpl = goog.forwardDeclare('org.pepstock.charba.client.commons.ListIteratorImpl$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @template E, A
 * @extends {AbstractArrayContainerList<E, A>}
 */
class AbstractArrayNativeContainerList extends AbstractArrayContainerList {
 /** @protected */
 constructor() {
  super();
  /**@type {List<E>}*/
  this.f_delegate__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList_;
 }
 
 $ctor__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList__() {
  this.$ctor__org_pepstock_charba_client_commons_AbstractArrayContainerList__();
  this.$init___$p_org_pepstock_charba_client_commons_AbstractArrayNativeContainerList();
 }
 /** @return {List<E>} */
 m_getDelegate___$pp_org_pepstock_charba_client_commons() {
  return this.f_delegate__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList_;
 }
 
 m_addAll__arrayOf_java_lang_Object(/** Array<E> */ values) {
  if (!$Equality.$same(values, null) && values.length > 0) {
   for (let $array = values, $index = 0; $index < $array.length; $index++) {
    let val = $array[$index];
    {
     this.add(val);
    }
   }
  }
 }
 /** @override @return {number} */
 size() {
  return this.f_delegate__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList_.size();
 }
 /** @override @return {boolean} */
 isEmpty() {
  return this.f_delegate__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList_.isEmpty();
 }
 /** @override @return {boolean} */
 contains(/** * */ object) {
  return this.f_delegate__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList_.contains(object);
 }
 /** @override @return {Iterator<E>} */
 m_iterator__() {
  return /**@type {!IteratorImpl<E>}*/ (IteratorImpl.$create__java_util_List(this));
 }
 /** @override @return {boolean} */
 add(/** E */ element) {
  if (!$Equality.$same(element, null)) {
   return this.f_delegate__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList_.add(element);
  }
  return false;
 }
 /** @override @return {boolean} */
 containsAll(/** Collection<?> */ collection) {
  if (!$Equality.$same(collection, null)) {
   return this.f_delegate__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList_.containsAll(collection);
  }
  return false;
 }
 /** @override */
 clear() {
  this.f_delegate__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList_.clear();
 }
 /** @override @return {E} */
 getAtIndex(/** number */ index) {
  if (this.m_checkRange__int(index)) {
   return this.f_delegate__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList_.getAtIndex(index);
  }
  return null;
 }
 /** @override @return {E} */
 setAtIndex(/** number */ index, /** E */ element) {
  if (!$Equality.$same(element, null) && this.m_checkRange__int(index)) {
   return this.f_delegate__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList_.setAtIndex(index, element);
  }
  return null;
 }
 /** @override */
 addAtIndex(/** number */ index, /** E */ element) {
  if (!$Equality.$same(element, null)) {
   this.f_delegate__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList_.addAtIndex(index, element);
  }
 }
 /** @override @return {E} */
 removeAtIndex(/** number */ index) {
  if (this.m_checkRange__int(index)) {
   return this.f_delegate__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList_.removeAtIndex(index);
  }
  return null;
 }
 /** @override @return {number} */
 indexOf(/** * */ object) {
  if (!$Equality.$same(object, null)) {
   return this.f_delegate__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList_.indexOf(object);
  }
  return AbstractArrayList.f_NOT_FOUND__org_pepstock_charba_client_commons_AbstractArrayList;
 }
 /** @override @return {number} */
 lastIndexOf(/** * */ object) {
  if (!$Equality.$same(object, null)) {
   return this.f_delegate__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList_.lastIndexOf(object);
  }
  return AbstractArrayList.f_NOT_FOUND__org_pepstock_charba_client_commons_AbstractArrayList;
 }
 /** @override @return {ListIterator<E>} */
 m_listIterator__() {
  return /**@type {!ListIteratorImpl<E>}*/ (ListIteratorImpl.$create__int__java_util_List(0, this));
 }
 /** @override @return {ListIterator<E>} */
 m_listIterator__int(/** number */ index) {
  if (!this.m_checkRange__int(index)) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Index: " + index));
  }
  return /**@type {!ListIteratorImpl<E>}*/ (ListIteratorImpl.$create__int__java_util_List(index, this));
 }
 /** @override @return {List<E>} */
 subList(/** number */ fromIndex, /** number */ toIndex) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(AbstractArrayList.f_UNABLE_COPY_ARRAY_MESSAGE__org_pepstock_charba_client_commons_AbstractArrayList));
 }
 /** @override @return {Array<*>} */
 toArray() {
  return this.f_delegate__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList_.toArray();
 }
 /** @override @template T @return {Array<T>} */
 m_toArray__arrayOf_java_lang_Object(/** Array<T> */ a) {
  return this.f_delegate__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList_.m_toArray__arrayOf_java_lang_Object(a);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_commons_AbstractArrayNativeContainerList() {
  this.f_delegate__org_pepstock_charba_client_commons_AbstractArrayNativeContainerList_ = /**@type {!LinkedList<E>}*/ (LinkedList.$create__());
 }
 
 static $clinit() {
  AbstractArrayNativeContainerList.$clinit = () =>{};
  AbstractArrayNativeContainerList.$loadModules();
  AbstractArrayContainerList.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractArrayNativeContainerList;
 }
 
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AbstractArrayList = goog.module.get('org.pepstock.charba.client.commons.AbstractArrayList$impl');
  IteratorImpl = goog.module.get('org.pepstock.charba.client.commons.IteratorImpl$impl');
  ListIteratorImpl = goog.module.get('org.pepstock.charba.client.commons.ListIteratorImpl$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(AbstractArrayNativeContainerList, "org.pepstock.charba.client.commons.AbstractArrayNativeContainerList");

exports = AbstractArrayNativeContainerList;

//# sourceMappingURL=AbstractArrayNativeContainerList.js.map
