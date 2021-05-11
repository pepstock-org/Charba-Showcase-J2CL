goog.module('org.pepstock.charba.client.commons.AbstractArrayContainerList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractArrayList = goog.require('org.pepstock.charba.client.commons.AbstractArrayList$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @abstract
 * @template E, A
 * @extends {AbstractArrayList<E, A>}
 */
class AbstractArrayContainerList extends AbstractArrayList {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_commons_AbstractArrayContainerList__() {
  this.$ctor__org_pepstock_charba_client_commons_AbstractArrayList__();
 }
 /** @override @return {boolean} */
 retainAll(/** Collection<?> */ collection) {
  let modified = !$Equality.$same(collection, null) && !collection.isEmpty();
  if (modified) {
   let contained = /**@type {!ArrayList<E>}*/ (ArrayList.$create__());
   for (let i = 0; i < this.size(); i = i + 1 | 0) {
    let value = this.getAtIndex(i);
    if (!collection.contains(value)) {
     contained.add(value);
    }
   }
   if (!contained.isEmpty()) {
    for (let $iterator = contained.m_iterator__(); $iterator.m_hasNext__(); ) {
     let toRemove = $iterator.m_next__();
     {
      modified = modified && this.remove(toRemove);
     }
    }
   }
  }
  return modified;
 }
 /** @override @return {boolean} */
 addAll(/** Collection<?> */ collection) {
  let modified = !$Equality.$same(collection, null) && !collection.isEmpty();
  if (modified) {
   let iter = collection.m_iterator__();
   while (iter.m_hasNext__()) {
    modified = modified && this.add(iter.m_next__());
   }
  }
  return modified;
 }
 
 static $clinit() {
  AbstractArrayContainerList.$clinit = () =>{};
  AbstractArrayContainerList.$loadModules();
  AbstractArrayList.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractArrayContainerList;
 }
 
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata(AbstractArrayContainerList, "org.pepstock.charba.client.commons.AbstractArrayContainerList");

exports = AbstractArrayContainerList;

//# sourceMappingURL=AbstractArrayContainerList.js.map
