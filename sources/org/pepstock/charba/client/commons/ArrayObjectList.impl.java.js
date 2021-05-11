goog.module('org.pepstock.charba.client.commons.ArrayObjectList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractArrayList = goog.require('org.pepstock.charba.client.commons.AbstractArrayList$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');

/**
 * @extends {AbstractArrayList<?, Array>}
 */
class ArrayObjectList extends AbstractArrayList {
 /** @protected */
 constructor() {
  super();
  /**@type {Array}*/
  this.f_array__org_pepstock_charba_client_commons_ArrayObjectList_;
 }
 //Factory method corresponding to constructor 'ArrayObjectList(ArrayObject)'.
 /** @return {!ArrayObjectList} */
 static $create__org_pepstock_charba_client_commons_ArrayObject(/** Array */ array) {
  ArrayObjectList.$clinit();
  let $instance = new ArrayObjectList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayObjectList__org_pepstock_charba_client_commons_ArrayObject(array);
  return $instance;
 }
 //Initialization from constructor 'ArrayObjectList(ArrayObject)'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayObjectList__org_pepstock_charba_client_commons_ArrayObject(/** Array */ array) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractArrayList__();
  if ($Equality.$same(array, null)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayObjectList_ = new Array();
  } else {
   this.f_array__org_pepstock_charba_client_commons_ArrayObjectList_ = array;
  }
 }
 //Factory method corresponding to constructor 'ArrayObjectList()'.
 /** @return {!ArrayObjectList} */
 static $create__() {
  ArrayObjectList.$clinit();
  let $instance = new ArrayObjectList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayObjectList__();
  return $instance;
 }
 //Initialization from constructor 'ArrayObjectList()'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayObjectList__() {
  this.$ctor__org_pepstock_charba_client_commons_ArrayObjectList__org_pepstock_charba_client_commons_ArrayObject(null);
 }
 /** @override @return {Array} */
 m_getArray___$pp_org_pepstock_charba_client_commons() {
  return this.f_array__org_pepstock_charba_client_commons_ArrayObjectList_;
 }
 
 m_addAll__arrayOf_org_pepstock_charba_client_commons_NativeObject(/** Array<?> */ values) {
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
 add(/** ? */ element) {
  if (!$Equality.$same(element, null)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayObjectList_.push(element);
   return true;
  }
  return false;
 }
 /** @override @return {boolean} */
 addAll(/** Collection<?> */ collection) {
  let modified = false;
  let e = collection.m_iterator__();
  while (e.m_hasNext__()) {
   this.add(/**@type {?}*/ (e.m_next__()));
   modified = true;
  }
  return modified;
 }
 /** @override @return {boolean} */
 retainAll(/** Collection<?> */ collection) {
  let modified = !$Equality.$same(collection, null) && !collection.isEmpty();
  if (modified) {
   let contained = /**@type {!ArrayList<?>}*/ (ArrayList.$create__());
   for (let i = 0; i < this.size(); i = i + 1 | 0) {
    let value = this.getAtIndex(i);
    if (!collection.contains(value)) {
     contained.add(value);
    }
   }
   if (!contained.isEmpty()) {
    for (let $iterator = contained.m_iterator__(); $iterator.m_hasNext__(); ) {
     let toRemove = /**@type {?}*/ ($iterator.m_next__());
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
  $Overlay.m_clear__$devirt__org_pepstock_charba_client_commons_ArrayObject(this.f_array__org_pepstock_charba_client_commons_ArrayObjectList_);
 }
 /** @override @return {?} */
 getAtIndex(/** number */ index) {
  if (this.m_checkRange__int(index)) {
   return $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayObject__int(this.f_array__org_pepstock_charba_client_commons_ArrayObjectList_, index);
  }
  return null;
 }
 /** @override @return {?} */
 setAtIndex(/** number */ index, /** ? */ element) {
  if (!$Equality.$same(element, null) && this.m_checkRange__int(index)) {
   let old = $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayObject__int(this.f_array__org_pepstock_charba_client_commons_ArrayObjectList_, index);
   $Overlay.m_set__$devirt__org_pepstock_charba_client_commons_ArrayObject__int__org_pepstock_charba_client_commons_NativeObject(this.f_array__org_pepstock_charba_client_commons_ArrayObjectList_, index, element);
   return old;
  }
  return null;
 }
 /** @override */
 addAtIndex(/** number */ index, /** ? */ element) {
  if (!$Equality.$same(element, null)) {
   $Overlay.m_insertAt__$devirt__org_pepstock_charba_client_commons_ArrayObject__int__org_pepstock_charba_client_commons_NativeObject(this.f_array__org_pepstock_charba_client_commons_ArrayObjectList_, index, element);
  }
 }
 /** @override @return {?} */
 removeAtIndex(/** number */ index) {
  if (this.m_checkRange__int(index)) {
   return $Overlay.m_remove__$devirt__org_pepstock_charba_client_commons_ArrayObject__int(this.f_array__org_pepstock_charba_client_commons_ArrayObjectList_, index);
  }
  return null;
 }
 /** @override @return {number} */
 indexOf(/** * */ object) {
  let value = /**@type {?}*/ (JsHelper.m_get__().m_cast__java_lang_Object(object));
  return this.f_array__org_pepstock_charba_client_commons_ArrayObjectList_.indexOf(value);
 }
 /** @override @return {number} */
 lastIndexOf(/** * */ object) {
  let value = /**@type {?}*/ (JsHelper.m_get__().m_cast__java_lang_Object(object));
  return this.f_array__org_pepstock_charba_client_commons_ArrayObjectList_.lastIndexOf(value);
 }
 
 static $clinit() {
  ArrayObjectList.$clinit = () =>{};
  ArrayObjectList.$loadModules();
  AbstractArrayList.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayObjectList;
 }
 
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
 }
}
$Util.$setClassMetadata(ArrayObjectList, "org.pepstock.charba.client.commons.ArrayObjectList");

exports = ArrayObjectList;

//# sourceMappingURL=ArrayObjectList.js.map
