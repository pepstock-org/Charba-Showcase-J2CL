goog.module('org.pepstock.charba.client.colors.Center$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class Center extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_x__org_pepstock_charba_client_colors_Center_ = 0;
  /**@type {number}*/
  this.f_y__org_pepstock_charba_client_colors_Center_ = 0;
 }
 /** @return {!Center} */
 static $create__() {
  Center.$clinit();
  let $instance = new Center();
  $instance.$ctor__org_pepstock_charba_client_colors_Center__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_Center__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_colors_Center();
 }
 /** @return {number} */
 m_getX__() {
  return this.f_x__org_pepstock_charba_client_colors_Center_;
 }
 
 m_setX__double(/** number */ x) {
  this.f_x__org_pepstock_charba_client_colors_Center_ = x;
 }
 /** @return {number} */
 m_getY__() {
  return this.f_y__org_pepstock_charba_client_colors_Center_;
 }
 
 m_setY__double(/** number */ y) {
  this.f_y__org_pepstock_charba_client_colors_Center_ = y;
 }
 /** @override @return {?string} */
 toString() {
  return "Center [x=" + this.f_x__org_pepstock_charba_client_colors_Center_ + ", y=" + this.f_y__org_pepstock_charba_client_colors_Center_ + "]";
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_colors_Center() {
  this.f_x__org_pepstock_charba_client_colors_Center_ = 0;
  this.f_y__org_pepstock_charba_client_colors_Center_ = 0;
 }
 
 static $clinit() {
  Center.$clinit = () =>{};
  Center.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Center;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Center, "org.pepstock.charba.client.colors.Center");

exports = Center;

//# sourceMappingURL=Center.js.map
