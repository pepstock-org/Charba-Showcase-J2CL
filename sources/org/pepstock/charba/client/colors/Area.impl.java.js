goog.module('org.pepstock.charba.client.colors.Area$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class Area extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_left__org_pepstock_charba_client_colors_Area_ = 0;
  /**@type {number}*/
  this.f_top__org_pepstock_charba_client_colors_Area_ = 0;
  /**@type {number}*/
  this.f_right__org_pepstock_charba_client_colors_Area_ = 0;
  /**@type {number}*/
  this.f_bottom__org_pepstock_charba_client_colors_Area_ = 0;
 }
 /** @return {!Area} */
 static $create__() {
  Area.$clinit();
  let $instance = new Area();
  $instance.$ctor__org_pepstock_charba_client_colors_Area__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_Area__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_colors_Area();
 }
 /** @return {number} */
 m_getLeft__() {
  return this.f_left__org_pepstock_charba_client_colors_Area_;
 }
 
 m_setLeft__double(/** number */ left) {
  this.f_left__org_pepstock_charba_client_colors_Area_ = left;
 }
 /** @return {number} */
 m_getTop__() {
  return this.f_top__org_pepstock_charba_client_colors_Area_;
 }
 
 m_setTop__double(/** number */ top) {
  this.f_top__org_pepstock_charba_client_colors_Area_ = top;
 }
 /** @return {number} */
 m_getRight__() {
  return this.f_right__org_pepstock_charba_client_colors_Area_;
 }
 
 m_setRight__double(/** number */ right) {
  this.f_right__org_pepstock_charba_client_colors_Area_ = right;
 }
 /** @return {number} */
 m_getBottom__() {
  return this.f_bottom__org_pepstock_charba_client_colors_Area_;
 }
 
 m_setBottom__double(/** number */ bottom) {
  this.f_bottom__org_pepstock_charba_client_colors_Area_ = bottom;
 }
 /** @override @return {?string} */
 toString() {
  return "Area [left=" + this.f_left__org_pepstock_charba_client_colors_Area_ + ", top=" + this.f_top__org_pepstock_charba_client_colors_Area_ + ", right=" + this.f_right__org_pepstock_charba_client_colors_Area_ + ", bottom=" + this.f_bottom__org_pepstock_charba_client_colors_Area_ + "]";
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_colors_Area() {
  this.f_left__org_pepstock_charba_client_colors_Area_ = 0;
  this.f_top__org_pepstock_charba_client_colors_Area_ = 0;
  this.f_right__org_pepstock_charba_client_colors_Area_ = 0;
  this.f_bottom__org_pepstock_charba_client_colors_Area_ = 0;
 }
 
 static $clinit() {
  Area.$clinit = () =>{};
  Area.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Area;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Area, "org.pepstock.charba.client.colors.Area");

exports = Area;

//# sourceMappingURL=Area.js.map
