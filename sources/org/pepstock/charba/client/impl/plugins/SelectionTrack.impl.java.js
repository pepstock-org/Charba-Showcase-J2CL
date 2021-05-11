goog.module('org.pepstock.charba.client.impl.plugins.SelectionTrack$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class SelectionTrack extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_starting__org_pepstock_charba_client_impl_plugins_SelectionTrack_ = 0;
  /**@type {number}*/
  this.f_start__org_pepstock_charba_client_impl_plugins_SelectionTrack_ = 0;
  /**@type {number}*/
  this.f_end__org_pepstock_charba_client_impl_plugins_SelectionTrack_ = 0;
  /**@type {number}*/
  this.f_startValue__org_pepstock_charba_client_impl_plugins_SelectionTrack_ = 0;
  /**@type {number}*/
  this.f_endValue__org_pepstock_charba_client_impl_plugins_SelectionTrack_ = 0;
 }
 /** @return {!SelectionTrack} */
 static $create__double(/** number */ starting) {
  SelectionTrack.$clinit();
  let $instance = new SelectionTrack();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_SelectionTrack__double(starting);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_SelectionTrack__double(/** number */ starting) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_impl_plugins_SelectionTrack();
  this.f_starting__org_pepstock_charba_client_impl_plugins_SelectionTrack_ = starting;
  this.f_start__org_pepstock_charba_client_impl_plugins_SelectionTrack_ = starting;
 }
 /** @return {number} */
 m_getStarting___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_starting__org_pepstock_charba_client_impl_plugins_SelectionTrack_;
 }
 /** @return {number} */
 m_getStart___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_start__org_pepstock_charba_client_impl_plugins_SelectionTrack_;
 }
 /** @return {number} */
 m_getEnd___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_end__org_pepstock_charba_client_impl_plugins_SelectionTrack_;
 }
 
 m_setStartValue__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ startValue) {
  this.f_startValue__org_pepstock_charba_client_impl_plugins_SelectionTrack_ = startValue;
 }
 /** @return {number} */
 m_getStartValue___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_startValue__org_pepstock_charba_client_impl_plugins_SelectionTrack_;
 }
 
 m_setEndValue__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ endValue) {
  this.f_endValue__org_pepstock_charba_client_impl_plugins_SelectionTrack_ = endValue;
 }
 /** @return {number} */
 m_getEndValue___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_endValue__org_pepstock_charba_client_impl_plugins_SelectionTrack_;
 }
 
 m_setCurrent__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ position) {
  if (position < this.f_starting__org_pepstock_charba_client_impl_plugins_SelectionTrack_) {
   this.f_start__org_pepstock_charba_client_impl_plugins_SelectionTrack_ = position;
   this.f_end__org_pepstock_charba_client_impl_plugins_SelectionTrack_ = this.f_starting__org_pepstock_charba_client_impl_plugins_SelectionTrack_;
  } else {
   this.f_start__org_pepstock_charba_client_impl_plugins_SelectionTrack_ = this.f_starting__org_pepstock_charba_client_impl_plugins_SelectionTrack_;
   this.f_end__org_pepstock_charba_client_impl_plugins_SelectionTrack_ = position;
  }
 }
 /** @return {boolean} */
 m_isValid___$pp_org_pepstock_charba_client_impl_plugins() {
  return Undefined.m_isNot__double(this.f_start__org_pepstock_charba_client_impl_plugins_SelectionTrack_) && Undefined.m_isNot__double(this.f_end__org_pepstock_charba_client_impl_plugins_SelectionTrack_);
 }
 /** @override @return {?string} */
 toString() {
  return "SelectionTrack [starting=" + this.f_starting__org_pepstock_charba_client_impl_plugins_SelectionTrack_ + ", start=" + this.f_start__org_pepstock_charba_client_impl_plugins_SelectionTrack_ + ", end=" + this.f_end__org_pepstock_charba_client_impl_plugins_SelectionTrack_ + "]";
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_plugins_SelectionTrack() {
  this.f_start__org_pepstock_charba_client_impl_plugins_SelectionTrack_ = Double.f_NaN__java_lang_Double;
  this.f_end__org_pepstock_charba_client_impl_plugins_SelectionTrack_ = Double.f_NaN__java_lang_Double;
  this.f_startValue__org_pepstock_charba_client_impl_plugins_SelectionTrack_ = Double.f_NaN__java_lang_Double;
  this.f_endValue__org_pepstock_charba_client_impl_plugins_SelectionTrack_ = Double.f_NaN__java_lang_Double;
 }
 
 static $clinit() {
  SelectionTrack.$clinit = () =>{};
  SelectionTrack.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SelectionTrack;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
$Util.$setClassMetadata(SelectionTrack, "org.pepstock.charba.client.impl.plugins.SelectionTrack");

exports = SelectionTrack;

//# sourceMappingURL=SelectionTrack.js.map
