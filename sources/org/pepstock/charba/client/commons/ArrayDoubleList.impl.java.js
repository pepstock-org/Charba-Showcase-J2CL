goog.module('org.pepstock.charba.client.commons.ArrayDoubleList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractArrayList = goog.require('org.pepstock.charba.client.commons.AbstractArrayList$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractArrayList<?number, Array>}
 */
class ArrayDoubleList extends AbstractArrayList {
 /** @protected */
 constructor() {
  super();
  /**@type {Array}*/
  this.f_array__org_pepstock_charba_client_commons_ArrayDoubleList_;
 }
 //Factory method corresponding to constructor 'ArrayDoubleList(ArrayDouble)'.
 /** @return {!ArrayDoubleList} */
 static $create__org_pepstock_charba_client_commons_ArrayDouble(/** Array */ array) {
  ArrayDoubleList.$clinit();
  let $instance = new ArrayDoubleList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayDoubleList__org_pepstock_charba_client_commons_ArrayDouble(array);
  return $instance;
 }
 //Initialization from constructor 'ArrayDoubleList(ArrayDouble)'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayDoubleList__org_pepstock_charba_client_commons_ArrayDouble(/** Array */ array) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractArrayList__();
  if ($Equality.$same(array, null)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayDoubleList_ = new Array();
  } else {
   this.f_array__org_pepstock_charba_client_commons_ArrayDoubleList_ = array;
  }
 }
 /** @override @return {Array} */
 m_getArray___$pp_org_pepstock_charba_client_commons() {
  return this.f_array__org_pepstock_charba_client_commons_ArrayDoubleList_;
 }
 //Factory method corresponding to constructor 'ArrayDoubleList()'.
 /** @return {!ArrayDoubleList} */
 static $create__() {
  ArrayDoubleList.$clinit();
  let $instance = new ArrayDoubleList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayDoubleList__();
  return $instance;
 }
 //Initialization from constructor 'ArrayDoubleList()'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayDoubleList__() {
  this.$ctor__org_pepstock_charba_client_commons_ArrayDoubleList__org_pepstock_charba_client_commons_ArrayDouble(null);
 }
 
 m_addAll__arrayOf_double(/** Array<number> */ values) {
  if (!$Equality.$same(values, null) && values.length > 0) {
   for (let $array = values, $index = 0; $index < $array.length; $index++) {
    let val = $array[$index];
    {
     this.add(val);
    }
   }
  }
 }
 /** @override @return {boolean} */
 add(/** ?number */ element) {
  if (!$Equality.$same(element, null)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayDoubleList_.push(Double.m_doubleValue__java_lang_Double(element));
   return true;
  }
  return false;
 }
 /** @override @return {boolean} */
 addAll(/** Collection<?> */ collection) {
  let modified = !$Equality.$same(collection, null) && !collection.isEmpty();
  if (modified) {
   let iter = collection.m_iterator__();
   while (iter.m_hasNext__()) {
    modified = modified && this.add(/**@type {?number}*/ ($Casts.$to(iter.m_next__(), Double)));
   }
  }
  return modified;
 }
 /** @override @return {boolean} */
 retainAll(/** Collection<?> */ collection) {
  let modified = !$Equality.$same(collection, null) && !collection.isEmpty();
  if (modified) {
   let contained = /**@type {!ArrayList<?number>}*/ (ArrayList.$create__());
   for (let i = 0; i < this.size(); i = i + 1 | 0) {
    let value = this.getAtIndex(i);
    if (!collection.contains(value)) {
     contained.add(value);
    }
   }
   if (!contained.isEmpty()) {
    for (let $iterator = contained.m_iterator__(); $iterator.m_hasNext__(); ) {
     let toRemove = /**@type {?number}*/ ($Casts.$to($iterator.m_next__(), Double));
     {
      modified = modified && this.remove(toRemove);
     }
    }
   }
  }
  return modified;
 }
 /** @override */
 clear() {
  $Overlay.m_clear__$devirt__org_pepstock_charba_client_commons_ArrayDouble(this.f_array__org_pepstock_charba_client_commons_ArrayDoubleList_);
 }
 /** @override @return {?number} */
 getAtIndex(/** number */ index) {
  if (this.m_checkRange__int(index)) {
   return $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayDouble__int(this.f_array__org_pepstock_charba_client_commons_ArrayDoubleList_, index);
  }
  return Double.f_NaN__java_lang_Double;
 }
 /** @override @return {?number} */
 setAtIndex(/** number */ index, /** ?number */ element) {
  if (!$Equality.$same(element, null) && this.m_checkRange__int(index)) {
   let old = $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayDouble__int(this.f_array__org_pepstock_charba_client_commons_ArrayDoubleList_, index);
   $Overlay.m_set__$devirt__org_pepstock_charba_client_commons_ArrayDouble__int__double(this.f_array__org_pepstock_charba_client_commons_ArrayDoubleList_, index, Double.m_doubleValue__java_lang_Double(element));
   return old;
  }
  return Double.f_NaN__java_lang_Double;
 }
 /** @override */
 addAtIndex(/** number */ index, /** ?number */ element) {
  if (!$Equality.$same(element, null)) {
   $Overlay.m_insertAt__$devirt__org_pepstock_charba_client_commons_ArrayDouble__int__double(this.f_array__org_pepstock_charba_client_commons_ArrayDoubleList_, index, Double.m_doubleValue__java_lang_Double(element));
  }
 }
 /** @override @return {?number} */
 removeAtIndex(/** number */ index) {
  if (this.m_checkRange__int(index)) {
   return $Overlay.m_remove__$devirt__org_pepstock_charba_client_commons_ArrayDouble__int(this.f_array__org_pepstock_charba_client_commons_ArrayDoubleList_, index);
  }
  return Double.f_NaN__java_lang_Double;
 }
 /** @override @return {number} */
 indexOf(/** * */ object) {
  if (Double.$isInstance(object)) {
   let doubleInstance = /**@type {?number}*/ ($Casts.$to(object, Double));
   return this.f_array__org_pepstock_charba_client_commons_ArrayDoubleList_.indexOf(Double.m_doubleValue__java_lang_Double(doubleInstance));
  }
  return AbstractArrayList.f_NOT_FOUND__org_pepstock_charba_client_commons_AbstractArrayList;
 }
 /** @override @return {number} */
 lastIndexOf(/** * */ object) {
  if (Double.$isInstance(object)) {
   let doubleInstance = /**@type {?number}*/ ($Casts.$to(object, Double));
   return this.f_array__org_pepstock_charba_client_commons_ArrayDoubleList_.lastIndexOf(Double.m_doubleValue__java_lang_Double(doubleInstance));
  }
  return AbstractArrayList.f_NOT_FOUND__org_pepstock_charba_client_commons_AbstractArrayList;
 }
 /** @override @return {Array<*>} */
 toArray() {
  let toArray = /**@type {!Array<?number>}*/ ($Arrays.$create([this.f_array__org_pepstock_charba_client_commons_ArrayDoubleList_.length], Double));
  for (let i = 0; i < this.f_array__org_pepstock_charba_client_commons_ArrayDoubleList_.length; i = i + 1 | 0) {
   $Arrays.$set(toArray, i, $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayDouble__int(this.f_array__org_pepstock_charba_client_commons_ArrayDoubleList_, i));
  }
  return toArray;
 }
 
 static $clinit() {
  ArrayDoubleList.$clinit = () =>{};
  ArrayDoubleList.$loadModules();
  AbstractArrayList.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayDoubleList;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ArrayDoubleList, "org.pepstock.charba.client.commons.ArrayDoubleList");

exports = ArrayDoubleList;

//# sourceMappingURL=ArrayDoubleList.js.map
