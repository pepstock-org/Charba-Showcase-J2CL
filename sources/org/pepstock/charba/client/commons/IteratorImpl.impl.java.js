goog.module('org.pepstock.charba.client.commons.IteratorImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template E
 * @implements {Iterator<E>}
 */
class IteratorImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {List<E>}*/
  this.f_parent__org_pepstock_charba_client_commons_IteratorImpl_;
  /**@type {number}*/
  this.f_cursor__org_pepstock_charba_client_commons_IteratorImpl = 0;
  /**@type {number}*/
  this.f_lastReturn__org_pepstock_charba_client_commons_IteratorImpl = 0;
 }
 /** @template E @return {!IteratorImpl<E>} */
 static $create__java_util_List(/** List<E> */ parent) {
  IteratorImpl.$clinit();
  let $instance = new IteratorImpl();
  $instance.$ctor__org_pepstock_charba_client_commons_IteratorImpl__java_util_List(parent);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_IteratorImpl__java_util_List(/** List<E> */ parent) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_commons_IteratorImpl();
  this.f_parent__org_pepstock_charba_client_commons_IteratorImpl_ = parent;
 }
 /** @return {List<E>} */
 m_getParent___$pp_org_pepstock_charba_client_commons() {
  return this.f_parent__org_pepstock_charba_client_commons_IteratorImpl_;
 }
 /** @override @return {boolean} */
 m_hasNext__() {
  return this.f_cursor__org_pepstock_charba_client_commons_IteratorImpl != this.f_parent__org_pepstock_charba_client_commons_IteratorImpl_.size();
 }
 /** @override @return {E} */
 m_next__() {
  let i = this.f_cursor__org_pepstock_charba_client_commons_IteratorImpl;
  if (i >= this.f_parent__org_pepstock_charba_client_commons_IteratorImpl_.size()) {
   throw $Exceptions.toJs(NoSuchElementException.$create__());
  }
  this.f_cursor__org_pepstock_charba_client_commons_IteratorImpl = i + 1 | 0;
  this.f_lastReturn__org_pepstock_charba_client_commons_IteratorImpl = i;
  return this.f_parent__org_pepstock_charba_client_commons_IteratorImpl_.getAtIndex(i);
 }
 /** @override */
 m_remove__() {
  if (this.f_lastReturn__org_pepstock_charba_client_commons_IteratorImpl < 0) {
   throw $Exceptions.toJs(IllegalStateException.$create__());
  }
  this.f_parent__org_pepstock_charba_client_commons_IteratorImpl_.removeAtIndex(this.f_lastReturn__org_pepstock_charba_client_commons_IteratorImpl);
  this.f_cursor__org_pepstock_charba_client_commons_IteratorImpl = this.f_lastReturn__org_pepstock_charba_client_commons_IteratorImpl;
  this.f_lastReturn__org_pepstock_charba_client_commons_IteratorImpl = -1 | 0;
 }
 //Default method forwarding stub.
 /** @override */
 m_forEachRemaining__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer(this, arg0);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_commons_IteratorImpl() {
  this.f_lastReturn__org_pepstock_charba_client_commons_IteratorImpl = -1 | 0;
 }
 
 static $clinit() {
  IteratorImpl.$clinit = () =>{};
  IteratorImpl.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IteratorImpl;
 }
 
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
Iterator.$markImplementor(IteratorImpl);
$Util.$setClassMetadata(IteratorImpl, "org.pepstock.charba.client.commons.IteratorImpl");

exports = IteratorImpl;

//# sourceMappingURL=IteratorImpl.js.map
