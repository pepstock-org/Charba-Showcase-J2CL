goog.module('org.pepstock.charba.client.commons.ArrayStringList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractArrayList = goog.require('org.pepstock.charba.client.commons.AbstractArrayList$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @extends {AbstractArrayList<?string, Array>}
 */
class ArrayStringList extends AbstractArrayList {
 /** @protected */
 constructor() {
  super();
  /**@type {Array}*/
  this.f_array__org_pepstock_charba_client_commons_ArrayStringList_;
 }
 //Factory method corresponding to constructor 'ArrayStringList(ArrayString)'.
 /** @return {!ArrayStringList} */
 static $create__org_pepstock_charba_client_commons_ArrayString(/** Array */ array) {
  ArrayStringList.$clinit();
  let $instance = new ArrayStringList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayStringList__org_pepstock_charba_client_commons_ArrayString(array);
  return $instance;
 }
 //Initialization from constructor 'ArrayStringList(ArrayString)'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayStringList__org_pepstock_charba_client_commons_ArrayString(/** Array */ array) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractArrayList__();
  if ($Equality.$same(array, null)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayStringList_ = new Array();
  } else {
   this.f_array__org_pepstock_charba_client_commons_ArrayStringList_ = array;
  }
 }
 //Factory method corresponding to constructor 'ArrayStringList()'.
 /** @return {!ArrayStringList} */
 static $create__() {
  ArrayStringList.$clinit();
  let $instance = new ArrayStringList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayStringList__();
  return $instance;
 }
 //Initialization from constructor 'ArrayStringList()'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayStringList__() {
  this.$ctor__org_pepstock_charba_client_commons_ArrayStringList__org_pepstock_charba_client_commons_ArrayString(null);
 }
 /** @override @return {Array} */
 m_getArray___$pp_org_pepstock_charba_client_commons() {
  return this.f_array__org_pepstock_charba_client_commons_ArrayStringList_;
 }
 
 m_addAll__arrayOf_java_lang_String(/** Array<?string> */ values) {
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
 add(/** ?string */ element) {
  if (!$Equality.$same(element, null)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayStringList_.push(element);
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
    modified = modified && this.add(/**@type {?string}*/ ($Casts.$to(iter.m_next__(), j_l_String)));
   }
  }
  return modified;
 }
 /** @override @return {boolean} */
 retainAll(/** Collection<?> */ collection) {
  let modified = !collection.isEmpty();
  if (modified) {
   let contained = /**@type {!ArrayList<?string>}*/ (ArrayList.$create__());
   for (let i = 0; i < this.size(); i = i + 1 | 0) {
    let value = this.getAtIndex(i);
    if (!collection.contains(value)) {
     contained.add(value);
    }
   }
   if (!contained.isEmpty()) {
    for (let $iterator = contained.m_iterator__(); $iterator.m_hasNext__(); ) {
     let toRemove = /**@type {?string}*/ ($Casts.$to($iterator.m_next__(), j_l_String));
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
  $Overlay.m_clear__$devirt__org_pepstock_charba_client_commons_ArrayString(this.f_array__org_pepstock_charba_client_commons_ArrayStringList_);
 }
 /** @override @return {?string} */
 getAtIndex(/** number */ index) {
  if (this.m_checkRange__int(index)) {
   return $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayString__int(this.f_array__org_pepstock_charba_client_commons_ArrayStringList_, index);
  }
  return null;
 }
 /** @override @return {?string} */
 setAtIndex(/** number */ index, /** ?string */ element) {
  if (!$Equality.$same(element, null) && this.m_checkRange__int(index)) {
   let old = $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayString__int(this.f_array__org_pepstock_charba_client_commons_ArrayStringList_, index);
   $Overlay.m_set__$devirt__org_pepstock_charba_client_commons_ArrayString__int__java_lang_String(this.f_array__org_pepstock_charba_client_commons_ArrayStringList_, index, element);
   return old;
  }
  return null;
 }
 /** @override */
 addAtIndex(/** number */ index, /** ?string */ element) {
  if (!$Equality.$same(element, null)) {
   $Overlay.m_insertAt__$devirt__org_pepstock_charba_client_commons_ArrayString__int__java_lang_String(this.f_array__org_pepstock_charba_client_commons_ArrayStringList_, index, element);
  }
 }
 /** @override @return {?string} */
 removeAtIndex(/** number */ index) {
  if (this.m_checkRange__int(index)) {
   return $Overlay.m_remove__$devirt__org_pepstock_charba_client_commons_ArrayString__int(this.f_array__org_pepstock_charba_client_commons_ArrayStringList_, index);
  }
  return null;
 }
 /** @override @return {number} */
 indexOf(/** * */ object) {
  if (!$Equality.$same(object, null)) {
   return this.f_array__org_pepstock_charba_client_commons_ArrayStringList_.indexOf($Objects.m_toString__java_lang_Object(object));
  }
  return AbstractArrayList.f_NOT_FOUND__org_pepstock_charba_client_commons_AbstractArrayList;
 }
 /** @override @return {number} */
 lastIndexOf(/** * */ object) {
  if (!$Equality.$same(object, null)) {
   return this.f_array__org_pepstock_charba_client_commons_ArrayStringList_.lastIndexOf($Objects.m_toString__java_lang_Object(object));
  }
  return AbstractArrayList.f_NOT_FOUND__org_pepstock_charba_client_commons_AbstractArrayList;
 }
 /** @override @return {Array<*>} */
 toArray() {
  let toArray = /**@type {!Array<?string>}*/ ($Arrays.$create([this.f_array__org_pepstock_charba_client_commons_ArrayStringList_.length], j_l_String));
  for (let i = 0; i < this.f_array__org_pepstock_charba_client_commons_ArrayStringList_.length; i = i + 1 | 0) {
   $Arrays.$set(toArray, i, $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayString__int(this.f_array__org_pepstock_charba_client_commons_ArrayStringList_, i));
  }
  return toArray;
 }
 
 static $clinit() {
  ArrayStringList.$clinit = () =>{};
  ArrayStringList.$loadModules();
  AbstractArrayList.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayStringList;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(ArrayStringList, "org.pepstock.charba.client.commons.ArrayStringList");

exports = ArrayStringList;

//# sourceMappingURL=ArrayStringList.js.map