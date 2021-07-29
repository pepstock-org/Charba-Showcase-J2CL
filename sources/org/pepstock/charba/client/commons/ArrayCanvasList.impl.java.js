goog.module('org.pepstock.charba.client.commons.ArrayCanvasList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractArrayList = goog.require('org.pepstock.charba.client.commons.AbstractArrayList$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayCanvas.$Overlay$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractArrayList<HTMLCanvasElement, Array>}
 */
class ArrayCanvasList extends AbstractArrayList {
 /** @protected */
 constructor() {
  super();
  /**@type {Array}*/
  this.f_array__org_pepstock_charba_client_commons_ArrayCanvasList_;
 }
 //Factory method corresponding to constructor 'ArrayCanvasList(ArrayCanvas)'.
 /** @return {!ArrayCanvasList} */
 static $create__org_pepstock_charba_client_commons_ArrayCanvas(/** Array */ array) {
  ArrayCanvasList.$clinit();
  let $instance = new ArrayCanvasList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayCanvasList__org_pepstock_charba_client_commons_ArrayCanvas(array);
  return $instance;
 }
 //Initialization from constructor 'ArrayCanvasList(ArrayCanvas)'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayCanvasList__org_pepstock_charba_client_commons_ArrayCanvas(/** Array */ array) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractArrayList__();
  if ($Equality.$same(array, null)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayCanvasList_ = new Array();
  } else {
   this.f_array__org_pepstock_charba_client_commons_ArrayCanvasList_ = array;
  }
 }
 //Factory method corresponding to constructor 'ArrayCanvasList()'.
 /** @return {!ArrayCanvasList} */
 static $create__() {
  ArrayCanvasList.$clinit();
  let $instance = new ArrayCanvasList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayCanvasList__();
  return $instance;
 }
 //Initialization from constructor 'ArrayCanvasList()'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayCanvasList__() {
  this.$ctor__org_pepstock_charba_client_commons_ArrayCanvasList__org_pepstock_charba_client_commons_ArrayCanvas(null);
 }
 /** @override @return {Array} */
 m_getArray___$pp_org_pepstock_charba_client_commons() {
  return this.f_array__org_pepstock_charba_client_commons_ArrayCanvasList_;
 }
 
 m_addAll__arrayOf_org_pepstock_charba_client_dom_elements_Canvas(/** Array<HTMLCanvasElement> */ values) {
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
 add(/** HTMLCanvasElement */ element) {
  if (!$Equality.$same(element, null)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayCanvasList_.push(element);
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
    modified = modified && this.add(/**@type {HTMLCanvasElement}*/ ($Casts.$to(iter.m_next__(), Canvas_$Overlay)));
   }
  }
  return modified;
 }
 /** @override @return {boolean} */
 retainAll(/** Collection<?> */ collection) {
  let modified = !$Equality.$same(collection, null) && !collection.isEmpty();
  if (modified) {
   let contained = /**@type {!ArrayList<HTMLCanvasElement>}*/ (ArrayList.$create__());
   for (let i = 0; i < this.size(); i = i + 1 | 0) {
    let value = this.getAtIndex(i);
    if (!collection.contains(value)) {
     contained.add(value);
    }
   }
   if (!contained.isEmpty()) {
    for (let $iterator = contained.m_iterator__(); $iterator.m_hasNext__(); ) {
     let toRemove = /**@type {HTMLCanvasElement}*/ ($Casts.$to($iterator.m_next__(), Canvas_$Overlay));
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
  $Overlay.m_clear__$devirt__org_pepstock_charba_client_commons_ArrayCanvas(this.f_array__org_pepstock_charba_client_commons_ArrayCanvasList_);
 }
 /** @override @return {HTMLCanvasElement} */
 getAtIndex(/** number */ index) {
  if (this.m_checkRange__int(index)) {
   return $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayCanvas__int(this.f_array__org_pepstock_charba_client_commons_ArrayCanvasList_, index);
  }
  return null;
 }
 /** @override @return {HTMLCanvasElement} */
 setAtIndex(/** number */ index, /** HTMLCanvasElement */ element) {
  if (!$Equality.$same(element, null) && this.m_checkRange__int(index)) {
   let old = $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayCanvas__int(this.f_array__org_pepstock_charba_client_commons_ArrayCanvasList_, index);
   $Overlay.m_set__$devirt__org_pepstock_charba_client_commons_ArrayCanvas__int__org_pepstock_charba_client_dom_elements_Canvas(this.f_array__org_pepstock_charba_client_commons_ArrayCanvasList_, index, element);
   return old;
  }
  return null;
 }
 /** @override */
 addAtIndex(/** number */ index, /** HTMLCanvasElement */ element) {
  if (!$Equality.$same(element, null)) {
   $Overlay.m_insertAt__$devirt__org_pepstock_charba_client_commons_ArrayCanvas__int__org_pepstock_charba_client_dom_elements_Canvas(this.f_array__org_pepstock_charba_client_commons_ArrayCanvasList_, index, element);
  }
 }
 /** @override @return {HTMLCanvasElement} */
 removeAtIndex(/** number */ index) {
  if (this.m_checkRange__int(index)) {
   return $Overlay.m_remove__$devirt__org_pepstock_charba_client_commons_ArrayCanvas__int(this.f_array__org_pepstock_charba_client_commons_ArrayCanvasList_, index);
  }
  return Undefined.f_CANVAS_ELEMENT__org_pepstock_charba_client_items_Undefined;
 }
 /** @override @return {number} */
 indexOf(/** * */ object) {
  if (Canvas_$Overlay.$isInstance(object)) {
   let value = /**@type {HTMLCanvasElement}*/ ($Casts.$to(object, Canvas_$Overlay));
   return this.f_array__org_pepstock_charba_client_commons_ArrayCanvasList_.indexOf(value);
  }
  return AbstractArrayList.f_NOT_FOUND__org_pepstock_charba_client_commons_AbstractArrayList;
 }
 /** @override @return {number} */
 lastIndexOf(/** * */ object) {
  if (Canvas_$Overlay.$isInstance(object)) {
   let value = /**@type {HTMLCanvasElement}*/ ($Casts.$to(object, Canvas_$Overlay));
   return this.f_array__org_pepstock_charba_client_commons_ArrayCanvasList_.lastIndexOf(value);
  }
  return AbstractArrayList.f_NOT_FOUND__org_pepstock_charba_client_commons_AbstractArrayList;
 }
 /** @override @return {Array<*>} */
 toArray() {
  let toArray = new Array(this.f_array__org_pepstock_charba_client_commons_ArrayCanvasList_.length);
  for (let i = 0; i < this.f_array__org_pepstock_charba_client_commons_ArrayCanvasList_.length; i = i + 1 | 0) {
   $Arrays.$set(toArray, i, $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayCanvas__int(this.f_array__org_pepstock_charba_client_commons_ArrayCanvasList_, i));
  }
  return toArray;
 }
 
 static $clinit() {
  ArrayCanvasList.$clinit = () =>{};
  ArrayCanvasList.$loadModules();
  AbstractArrayList.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayCanvasList;
 }
 
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayCanvas.$Overlay$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ArrayCanvasList, "org.pepstock.charba.client.commons.ArrayCanvasList");

exports = ArrayCanvasList;

//# sourceMappingURL=ArrayCanvasList.js.map
