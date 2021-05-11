goog.module('org.pepstock.charba.client.commons.ListIteratorImpl$impl');

const ListIterator = goog.require('java.util.ListIterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IteratorImpl = goog.require('org.pepstock.charba.client.commons.IteratorImpl$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template E
 * @extends {IteratorImpl<E>}
 * @implements {ListIterator<E>}
 */
class ListIteratorImpl extends IteratorImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @template E @return {!ListIteratorImpl<E>} */
 static $create__int__java_util_List(/** number */ index, /** List<E> */ parent) {
  ListIteratorImpl.$clinit();
  let $instance = new ListIteratorImpl();
  $instance.$ctor__org_pepstock_charba_client_commons_ListIteratorImpl__int__java_util_List(index, parent);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_ListIteratorImpl__int__java_util_List(/** number */ index, /** List<E> */ parent) {
  this.$ctor__org_pepstock_charba_client_commons_IteratorImpl__java_util_List(parent);
  this.f_cursor__org_pepstock_charba_client_commons_IteratorImpl = index;
 }
 /** @override @return {boolean} */
 m_hasPrevious__() {
  return this.f_cursor__org_pepstock_charba_client_commons_IteratorImpl != 0;
 }
 /** @override @return {number} */
 m_nextIndex__() {
  return this.f_cursor__org_pepstock_charba_client_commons_IteratorImpl;
 }
 /** @override @return {number} */
 m_previousIndex__() {
  return this.f_cursor__org_pepstock_charba_client_commons_IteratorImpl - 1 | 0;
 }
 /** @override @return {E} */
 m_previous__() {
  let i = this.f_cursor__org_pepstock_charba_client_commons_IteratorImpl - 1 | 0;
  if (i < 0) {
   throw $Exceptions.toJs(NoSuchElementException.$create__());
  }
  this.f_cursor__org_pepstock_charba_client_commons_IteratorImpl = i;
  this.f_lastReturn__org_pepstock_charba_client_commons_IteratorImpl = i;
  return this.m_getParent___$pp_org_pepstock_charba_client_commons().getAtIndex(i);
 }
 /** @override */
 m_set__java_lang_Object(/** E */ e) {
  if (this.f_lastReturn__org_pepstock_charba_client_commons_IteratorImpl < 0) {
   throw $Exceptions.toJs(IllegalStateException.$create__());
  }
  this.m_getParent___$pp_org_pepstock_charba_client_commons().setAtIndex(this.f_lastReturn__org_pepstock_charba_client_commons_IteratorImpl, e);
 }
 /** @override */
 m_add__java_lang_Object(/** E */ e) {
  let i = this.f_cursor__org_pepstock_charba_client_commons_IteratorImpl;
  this.m_getParent___$pp_org_pepstock_charba_client_commons().addAtIndex(i, e);
  this.f_cursor__org_pepstock_charba_client_commons_IteratorImpl = i + 1 | 0;
  this.f_lastReturn__org_pepstock_charba_client_commons_IteratorImpl = -1 | 0;
 }
 
 static $clinit() {
  ListIteratorImpl.$clinit = () =>{};
  ListIteratorImpl.$loadModules();
  IteratorImpl.$clinit();
  Iterator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ListIteratorImpl;
 }
 
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  Iterator = goog.module.get('java.util.Iterator$impl');
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
ListIterator.$markImplementor(ListIteratorImpl);
$Util.$setClassMetadata(ListIteratorImpl, "org.pepstock.charba.client.commons.ListIteratorImpl");

exports = ListIteratorImpl;

//# sourceMappingURL=ListIteratorImpl.js.map
