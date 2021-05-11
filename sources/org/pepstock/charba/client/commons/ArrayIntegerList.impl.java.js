goog.module('org.pepstock.charba.client.commons.ArrayIntegerList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractArrayList = goog.require('org.pepstock.charba.client.commons.AbstractArrayList$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractArrayList<Integer, Array>}
 */
class ArrayIntegerList extends AbstractArrayList {
 /** @protected */
 constructor() {
  super();
  /**@type {Array}*/
  this.f_array__org_pepstock_charba_client_commons_ArrayIntegerList_;
 }
 //Factory method corresponding to constructor 'ArrayIntegerList(ArrayInteger)'.
 /** @return {!ArrayIntegerList} */
 static $create__org_pepstock_charba_client_commons_ArrayInteger(/** Array */ array) {
  ArrayIntegerList.$clinit();
  let $instance = new ArrayIntegerList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayIntegerList__org_pepstock_charba_client_commons_ArrayInteger(array);
  return $instance;
 }
 //Initialization from constructor 'ArrayIntegerList(ArrayInteger)'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayIntegerList__org_pepstock_charba_client_commons_ArrayInteger(/** Array */ array) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractArrayList__();
  if ($Equality.$same(array, null)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayIntegerList_ = new Array();
  } else {
   this.f_array__org_pepstock_charba_client_commons_ArrayIntegerList_ = array;
  }
 }
 //Factory method corresponding to constructor 'ArrayIntegerList()'.
 /** @return {!ArrayIntegerList} */
 static $create__() {
  ArrayIntegerList.$clinit();
  let $instance = new ArrayIntegerList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayIntegerList__();
  return $instance;
 }
 //Initialization from constructor 'ArrayIntegerList()'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayIntegerList__() {
  this.$ctor__org_pepstock_charba_client_commons_ArrayIntegerList__org_pepstock_charba_client_commons_ArrayInteger(null);
 }
 /** @override @return {Array} */
 m_getArray___$pp_org_pepstock_charba_client_commons() {
  return this.f_array__org_pepstock_charba_client_commons_ArrayIntegerList_;
 }
 
 m_addAll__arrayOf_int(/** Array<number> */ values) {
  if (!$Equality.$same(values, null) && values.length > 0) {
   for (let $array = values, $index = 0; $index < $array.length; $index++) {
    let val = $array[$index];
    {
     this.add(Integer.m_valueOf__int(val));
    }
   }
  }
 }
 /** @override @return {boolean} */
 add(/** Integer */ element) {
  if (!$Equality.$same(element, null)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayIntegerList_.push(element.m_intValue__());
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
    modified = modified && this.add(/**@type {Integer}*/ ($Casts.$to(iter.m_next__(), Integer)));
   }
  }
  return modified;
 }
 /** @override @return {boolean} */
 retainAll(/** Collection<?> */ collection) {
  let modified = !$Equality.$same(collection, null) && !collection.isEmpty();
  if (modified) {
   let contained = /**@type {!ArrayList<Integer>}*/ (ArrayList.$create__());
   for (let i = 0; i < this.size(); i = i + 1 | 0) {
    let value = this.getAtIndex(i);
    if (!collection.contains(value)) {
     contained.add(value);
    }
   }
   if (!contained.isEmpty()) {
    for (let $iterator = contained.m_iterator__(); $iterator.m_hasNext__(); ) {
     let toRemove = /**@type {Integer}*/ ($Casts.$to($iterator.m_next__(), Integer));
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
  $Overlay.m_clear__$devirt__org_pepstock_charba_client_commons_ArrayInteger(this.f_array__org_pepstock_charba_client_commons_ArrayIntegerList_);
 }
 /** @override @return {Integer} */
 getAtIndex(/** number */ index) {
  if (this.m_checkRange__int(index)) {
   return Integer.m_valueOf__int($Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayInteger__int(this.f_array__org_pepstock_charba_client_commons_ArrayIntegerList_, index));
  }
  return Integer.m_valueOf__int(Integer.f_MIN_VALUE__java_lang_Integer);
 }
 /** @override @return {Integer} */
 setAtIndex(/** number */ index, /** Integer */ element) {
  if (!$Equality.$same(element, null) && this.m_checkRange__int(index)) {
   let old = Integer.m_valueOf__int($Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayInteger__int(this.f_array__org_pepstock_charba_client_commons_ArrayIntegerList_, index));
   $Overlay.m_set__$devirt__org_pepstock_charba_client_commons_ArrayInteger__int__int(this.f_array__org_pepstock_charba_client_commons_ArrayIntegerList_, index, element.m_intValue__());
   return old;
  }
  return Integer.m_valueOf__int(Integer.f_MIN_VALUE__java_lang_Integer);
 }
 /** @override */
 addAtIndex(/** number */ index, /** Integer */ element) {
  if (!$Equality.$same(element, null)) {
   $Overlay.m_insertAt__$devirt__org_pepstock_charba_client_commons_ArrayInteger__int__int(this.f_array__org_pepstock_charba_client_commons_ArrayIntegerList_, index, element.m_intValue__());
  }
 }
 /** @override @return {Integer} */
 removeAtIndex(/** number */ index) {
  if (this.m_checkRange__int(index)) {
   return Integer.m_valueOf__int($Overlay.m_remove__$devirt__org_pepstock_charba_client_commons_ArrayInteger__int(this.f_array__org_pepstock_charba_client_commons_ArrayIntegerList_, index));
  }
  return Integer.m_valueOf__int(Integer.f_MIN_VALUE__java_lang_Integer);
 }
 /** @override @return {number} */
 indexOf(/** * */ object) {
  if (Integer.$isInstance(object)) {
   let value = /**@type {Integer}*/ ($Casts.$to(object, Integer));
   return this.f_array__org_pepstock_charba_client_commons_ArrayIntegerList_.indexOf(value.m_intValue__());
  }
  return AbstractArrayList.f_NOT_FOUND__org_pepstock_charba_client_commons_AbstractArrayList;
 }
 /** @override @return {number} */
 lastIndexOf(/** * */ object) {
  if (Integer.$isInstance(object)) {
   let value = /**@type {Integer}*/ ($Casts.$to(object, Integer));
   return this.f_array__org_pepstock_charba_client_commons_ArrayIntegerList_.lastIndexOf(value.m_intValue__());
  }
  return AbstractArrayList.f_NOT_FOUND__org_pepstock_charba_client_commons_AbstractArrayList;
 }
 /** @override @return {Array<*>} */
 toArray() {
  let toArray = /**@type {!Array<Integer>}*/ ($Arrays.$create([this.f_array__org_pepstock_charba_client_commons_ArrayIntegerList_.length], Integer));
  for (let i = 0; i < this.f_array__org_pepstock_charba_client_commons_ArrayIntegerList_.length; i = i + 1 | 0) {
   $Arrays.$set(toArray, i, Integer.m_valueOf__int($Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayInteger__int(this.f_array__org_pepstock_charba_client_commons_ArrayIntegerList_, i)));
  }
  return toArray;
 }
 
 static $clinit() {
  ArrayIntegerList.$clinit = () =>{};
  ArrayIntegerList.$loadModules();
  AbstractArrayList.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayIntegerList;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ArrayIntegerList, "org.pepstock.charba.client.commons.ArrayIntegerList");

exports = ArrayIntegerList;

//# sourceMappingURL=ArrayIntegerList.js.map
