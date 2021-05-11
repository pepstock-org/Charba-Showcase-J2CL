goog.module('org.pepstock.charba.client.commons.AbstractArrayList$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const List = goog.require('java.util.List$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let ListIterator = goog.forwardDeclare('java.util.ListIterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let UnaryOperator = goog.forwardDeclare('java.util.function.UnaryOperator$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.Array.$Overlay$impl');
let IteratorImpl = goog.forwardDeclare('org.pepstock.charba.client.commons.IteratorImpl$impl');
let ListIteratorImpl = goog.forwardDeclare('org.pepstock.charba.client.commons.ListIteratorImpl$impl');
let JSON_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.utils.JSON.$Overlay$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @template E, A
 * @implements {List<E>}
 */
class AbstractArrayList extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_commons_AbstractArrayList__() {
  this.$ctor__java_lang_Object__();
 }
 /** @abstract @return {A} */
 m_getArray___$pp_org_pepstock_charba_client_commons() {}
 /** @override @return {number} */
 size() {
  return /**@type {Array}*/ (this.m_getArray___$pp_org_pepstock_charba_client_commons()).length;
 }
 /** @override @return {boolean} */
 isEmpty() {
  return $Overlay.m_isEmpty__$devirt__org_pepstock_charba_client_commons_Array(this.m_getArray___$pp_org_pepstock_charba_client_commons());
 }
 /** @override @return {boolean} */
 contains(/** * */ object) {
  return this.indexOf(object) != (-1 | 0);
 }
 /** @override @return {Iterator<E>} */
 m_iterator__() {
  return /**@type {!IteratorImpl<E>}*/ (IteratorImpl.$create__java_util_List(this));
 }
 /** @override @return {Array<*>} */
 toArray() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(AbstractArrayList.f_UNABLE_COPY_ARRAY_MESSAGE__org_pepstock_charba_client_commons_AbstractArrayList));
 }
 /** @override @template T @return {Array<T>} */
 m_toArray__arrayOf_java_lang_Object(/** Array<T> */ array) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(AbstractArrayList.f_UNABLE_COPY_ARRAY_MESSAGE__org_pepstock_charba_client_commons_AbstractArrayList));
 }
 /** @override @return {ListIterator<E>} */
 m_listIterator__() {
  return /**@type {!ListIteratorImpl<E>}*/ (ListIteratorImpl.$create__int__java_util_List(0, this));
 }
 /** @override @return {boolean} */
 addAllAtIndex(/** number */ index, /** Collection<?> */ collection) {
  return false;
 }
 /** @override @return {boolean} */
 remove(/** * */ object) {
  let index = this.indexOf(object);
  if (this.m_checkRange__int(index)) {
   this.removeAtIndex(index);
   return true;
  }
  return false;
 }
 /** @override @return {boolean} */
 containsAll(/** Collection<?> */ collection) {
  if (!$Equality.$same(collection, null)) {
   let iter = collection.m_iterator__();
   while (iter.m_hasNext__()) {
    if (!this.contains(iter.m_next__())) {
     return false;
    }
   }
   return true;
  }
  return false;
 }
 /** @override @return {boolean} */
 removeAll(/** Collection<?> */ collection) {
  let modified = !$Equality.$same(collection, null) && !collection.isEmpty();
  if (modified) {
   let iter = collection.m_iterator__();
   while (iter.m_hasNext__()) {
    modified = modified && this.remove(iter.m_next__());
   }
  }
  return modified;
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
 /** @override @return {?string} */
 toString() {
  return "[array=" + j_l_String.m_valueOf__java_lang_Object(JSON_$Overlay.m_stringify__java_lang_Object(this.m_getArray___$pp_org_pepstock_charba_client_commons())) + "]";
 }
 /** @return {boolean} */
 m_checkRange__int(/** number */ index) {
  return index >= 0 && index < /**@type {Array}*/ (this.m_getArray___$pp_org_pepstock_charba_client_commons()).length;
 }
 //Default method forwarding stub.
 /** @override */
 m_forEach__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {Spliterator<E>} */
 m_spliterator__() {
  return /**@type {Spliterator<E>}*/ (List.m_spliterator__$default__java_util_List(this));
 }
 //Default method forwarding stub.
 /** @override @return {Stream<E>} */
 m_parallelStream__() {
  return /**@type {Stream<E>}*/ (Collection.m_parallelStream__$default__java_util_Collection(this));
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_removeIf__java_util_function_Predicate(/** Predicate<?> */ arg0) {
  return Collection.m_removeIf__$default__java_util_Collection__java_util_function_Predicate(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {Stream<E>} */
 m_stream__() {
  return /**@type {Stream<E>}*/ (Collection.m_stream__$default__java_util_Collection(this));
 }
 //Default method forwarding stub.
 /** @override */
 m_replaceAll__java_util_function_UnaryOperator(/** UnaryOperator<E> */ arg0) {
  List.m_replaceAll__$default__java_util_List__java_util_function_UnaryOperator(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_sort__java_util_Comparator(/** Comparator<?> */ arg0) {
  List.m_sort__$default__java_util_List__java_util_Comparator(this, arg0);
 }
 
 static $clinit() {
  AbstractArrayList.$clinit = () =>{};
  AbstractArrayList.$loadModules();
  j_l_Object.$clinit();
  List.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractArrayList;
 }
 
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Collection = goog.module.get('java.util.Collection$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.Array.$Overlay$impl');
  IteratorImpl = goog.module.get('org.pepstock.charba.client.commons.IteratorImpl$impl');
  ListIteratorImpl = goog.module.get('org.pepstock.charba.client.commons.ListIteratorImpl$impl');
  JSON_$Overlay = goog.module.get('org.pepstock.charba.client.utils.JSON.$Overlay$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@const {?string}*/
AbstractArrayList.f_UNABLE_COPY_ARRAY_MESSAGE__org_pepstock_charba_client_commons_AbstractArrayList = "Unable to copy in the an array";
/**@const {number}*/
AbstractArrayList.f_NOT_FOUND__org_pepstock_charba_client_commons_AbstractArrayList = -1;
List.$markImplementor(AbstractArrayList);
$Util.$setClassMetadata(AbstractArrayList, "org.pepstock.charba.client.commons.AbstractArrayList");

exports = AbstractArrayList;

//# sourceMappingURL=AbstractArrayList.js.map
