goog.module('org.pepstock.charba.client.impl.plugins.SelectionArea$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class SelectionArea extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_top__org_pepstock_charba_client_impl_plugins_SelectionArea_ = 0;
  /**@type {number}*/
  this.f_left__org_pepstock_charba_client_impl_plugins_SelectionArea_ = 0;
  /**@type {number}*/
  this.f_right__org_pepstock_charba_client_impl_plugins_SelectionArea_ = 0;
  /**@type {number}*/
  this.f_bottom__org_pepstock_charba_client_impl_plugins_SelectionArea_ = 0;
 }
 /** @return {!SelectionArea} */
 static $create__() {
  SelectionArea.$clinit();
  let $instance = new SelectionArea();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_SelectionArea__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_SelectionArea__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_impl_plugins_SelectionArea();
 }
 /** @return {number} */
 m_getTop___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_top__org_pepstock_charba_client_impl_plugins_SelectionArea_;
 }
 
 m_setTop__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ top) {
  this.f_top__org_pepstock_charba_client_impl_plugins_SelectionArea_ = top;
 }
 /** @return {number} */
 m_getLeft___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_left__org_pepstock_charba_client_impl_plugins_SelectionArea_;
 }
 
 m_setLeft__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ left) {
  this.f_left__org_pepstock_charba_client_impl_plugins_SelectionArea_ = left;
 }
 /** @return {number} */
 m_getRight___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_right__org_pepstock_charba_client_impl_plugins_SelectionArea_;
 }
 
 m_setRight__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ right) {
  this.f_right__org_pepstock_charba_client_impl_plugins_SelectionArea_ = right;
 }
 /** @return {number} */
 m_getBottom___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_bottom__org_pepstock_charba_client_impl_plugins_SelectionArea_;
 }
 
 m_setBottom__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ bottom) {
  this.f_bottom__org_pepstock_charba_client_impl_plugins_SelectionArea_ = bottom;
 }
 /** @override @return {?string} */
 toString() {
  return "SelectionArea [top=" + this.f_top__org_pepstock_charba_client_impl_plugins_SelectionArea_ + ", left=" + this.f_left__org_pepstock_charba_client_impl_plugins_SelectionArea_ + ", right=" + this.f_right__org_pepstock_charba_client_impl_plugins_SelectionArea_ + ", bottom=" + this.f_bottom__org_pepstock_charba_client_impl_plugins_SelectionArea_ + "]";
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_plugins_SelectionArea() {
  this.f_top__org_pepstock_charba_client_impl_plugins_SelectionArea_ = 0;
  this.f_left__org_pepstock_charba_client_impl_plugins_SelectionArea_ = 0;
  this.f_right__org_pepstock_charba_client_impl_plugins_SelectionArea_ = 0;
  this.f_bottom__org_pepstock_charba_client_impl_plugins_SelectionArea_ = 0;
 }
 
 static $clinit() {
  SelectionArea.$clinit = () =>{};
  SelectionArea.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SelectionArea;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(SelectionArea, "org.pepstock.charba.client.impl.plugins.SelectionArea");

exports = SelectionArea;

//# sourceMappingURL=SelectionArea.js.map
