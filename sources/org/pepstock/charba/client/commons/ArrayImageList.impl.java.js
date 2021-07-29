goog.module('org.pepstock.charba.client.commons.ArrayImageList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractArrayList = goog.require('org.pepstock.charba.client.commons.AbstractArrayList$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayImage.$Overlay$impl');
let Img_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractArrayList<HTMLImageElement, Array>}
 */
class ArrayImageList extends AbstractArrayList {
 /** @protected */
 constructor() {
  super();
  /**@type {Array}*/
  this.f_array__org_pepstock_charba_client_commons_ArrayImageList_;
 }
 //Factory method corresponding to constructor 'ArrayImageList(ArrayImage)'.
 /** @return {!ArrayImageList} */
 static $create__org_pepstock_charba_client_commons_ArrayImage(/** Array */ array) {
  ArrayImageList.$clinit();
  let $instance = new ArrayImageList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayImageList__org_pepstock_charba_client_commons_ArrayImage(array);
  return $instance;
 }
 //Initialization from constructor 'ArrayImageList(ArrayImage)'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayImageList__org_pepstock_charba_client_commons_ArrayImage(/** Array */ array) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractArrayList__();
  if ($Equality.$same(array, null)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayImageList_ = new Array();
  } else {
   this.f_array__org_pepstock_charba_client_commons_ArrayImageList_ = array;
  }
 }
 //Factory method corresponding to constructor 'ArrayImageList()'.
 /** @return {!ArrayImageList} */
 static $create__() {
  ArrayImageList.$clinit();
  let $instance = new ArrayImageList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayImageList__();
  return $instance;
 }
 //Initialization from constructor 'ArrayImageList()'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayImageList__() {
  this.$ctor__org_pepstock_charba_client_commons_ArrayImageList__org_pepstock_charba_client_commons_ArrayImage(null);
 }
 /** @override @return {Array} */
 m_getArray___$pp_org_pepstock_charba_client_commons() {
  return this.f_array__org_pepstock_charba_client_commons_ArrayImageList_;
 }
 
 m_addAll__arrayOf_org_pepstock_charba_client_dom_elements_Img(/** Array<HTMLImageElement> */ values) {
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
 add(/** HTMLImageElement */ element) {
  if (!$Equality.$same(element, null)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayImageList_.push(element);
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
    modified = modified && this.add(/**@type {HTMLImageElement}*/ ($Casts.$to(iter.m_next__(), Img_$Overlay)));
   }
  }
  return modified;
 }
 /** @override @return {boolean} */
 retainAll(/** Collection<?> */ collection) {
  let modified = !$Equality.$same(collection, null) && !collection.isEmpty();
  if (modified) {
   let contained = /**@type {!ArrayList<HTMLImageElement>}*/ (ArrayList.$create__());
   for (let i = 0; i < this.size(); i = i + 1 | 0) {
    let value = this.getAtIndex(i);
    if (!collection.contains(value)) {
     contained.add(value);
    }
   }
   if (!contained.isEmpty()) {
    for (let $iterator = contained.m_iterator__(); $iterator.m_hasNext__(); ) {
     let toRemove = /**@type {HTMLImageElement}*/ ($Casts.$to($iterator.m_next__(), Img_$Overlay));
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
  $Overlay.m_clear__$devirt__org_pepstock_charba_client_commons_ArrayImage(this.f_array__org_pepstock_charba_client_commons_ArrayImageList_);
 }
 /** @override @return {HTMLImageElement} */
 getAtIndex(/** number */ index) {
  if (this.m_checkRange__int(index)) {
   return $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayImage__int(this.f_array__org_pepstock_charba_client_commons_ArrayImageList_, index);
  }
  return null;
 }
 /** @override @return {HTMLImageElement} */
 setAtIndex(/** number */ index, /** HTMLImageElement */ element) {
  if (!$Equality.$same(element, null) && this.m_checkRange__int(index)) {
   let old = $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayImage__int(this.f_array__org_pepstock_charba_client_commons_ArrayImageList_, index);
   $Overlay.m_set__$devirt__org_pepstock_charba_client_commons_ArrayImage__int__org_pepstock_charba_client_dom_elements_Img(this.f_array__org_pepstock_charba_client_commons_ArrayImageList_, index, element);
   return old;
  }
  return null;
 }
 /** @override */
 addAtIndex(/** number */ index, /** HTMLImageElement */ element) {
  if (!$Equality.$same(element, null)) {
   $Overlay.m_insertAt__$devirt__org_pepstock_charba_client_commons_ArrayImage__int__org_pepstock_charba_client_dom_elements_Img(this.f_array__org_pepstock_charba_client_commons_ArrayImageList_, index, element);
  }
 }
 /** @override @return {HTMLImageElement} */
 removeAtIndex(/** number */ index) {
  if (this.m_checkRange__int(index)) {
   return $Overlay.m_remove__$devirt__org_pepstock_charba_client_commons_ArrayImage__int(this.f_array__org_pepstock_charba_client_commons_ArrayImageList_, index);
  }
  return Undefined.f_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined;
 }
 /** @override @return {number} */
 indexOf(/** * */ object) {
  if (Img_$Overlay.$isInstance(object)) {
   let value = /**@type {HTMLImageElement}*/ ($Casts.$to(object, Img_$Overlay));
   return this.f_array__org_pepstock_charba_client_commons_ArrayImageList_.indexOf(value);
  }
  return AbstractArrayList.f_NOT_FOUND__org_pepstock_charba_client_commons_AbstractArrayList;
 }
 /** @override @return {number} */
 lastIndexOf(/** * */ object) {
  if (Img_$Overlay.$isInstance(object)) {
   let value = /**@type {HTMLImageElement}*/ ($Casts.$to(object, Img_$Overlay));
   return this.f_array__org_pepstock_charba_client_commons_ArrayImageList_.lastIndexOf(value);
  }
  return AbstractArrayList.f_NOT_FOUND__org_pepstock_charba_client_commons_AbstractArrayList;
 }
 /** @override @return {Array<*>} */
 toArray() {
  let toArray = new Array(this.f_array__org_pepstock_charba_client_commons_ArrayImageList_.length);
  for (let i = 0; i < this.f_array__org_pepstock_charba_client_commons_ArrayImageList_.length; i = i + 1 | 0) {
   $Arrays.$set(toArray, i, $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayImage__int(this.f_array__org_pepstock_charba_client_commons_ArrayImageList_, i));
  }
  return toArray;
 }
 
 static $clinit() {
  ArrayImageList.$clinit = () =>{};
  ArrayImageList.$loadModules();
  AbstractArrayList.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayImageList;
 }
 
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayImage.$Overlay$impl');
  Img_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ArrayImageList, "org.pepstock.charba.client.commons.ArrayImageList");

exports = ArrayImageList;

//# sourceMappingURL=ArrayImageList.js.map
