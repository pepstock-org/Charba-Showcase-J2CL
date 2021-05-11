goog.module('org.pepstock.charba.client.colors.Radius$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class Radius extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_inner__org_pepstock_charba_client_colors_Radius_ = 0;
  /**@type {number}*/
  this.f_outer__org_pepstock_charba_client_colors_Radius_ = 0;
 }
 /** @return {!Radius} */
 static $create__() {
  Radius.$clinit();
  let $instance = new Radius();
  $instance.$ctor__org_pepstock_charba_client_colors_Radius__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_Radius__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_colors_Radius();
 }
 /** @return {number} */
 m_getInner__() {
  return this.f_inner__org_pepstock_charba_client_colors_Radius_;
 }
 
 m_setInner__double(/** number */ inner) {
  this.f_inner__org_pepstock_charba_client_colors_Radius_ = inner;
 }
 /** @return {number} */
 m_getOuter__() {
  return this.f_outer__org_pepstock_charba_client_colors_Radius_;
 }
 
 m_setOuter__double(/** number */ outer) {
  this.f_outer__org_pepstock_charba_client_colors_Radius_ = outer;
 }
 /** @override @return {?string} */
 toString() {
  return "Radius [inner=" + this.f_inner__org_pepstock_charba_client_colors_Radius_ + ", outer=" + this.f_outer__org_pepstock_charba_client_colors_Radius_ + "]";
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_colors_Radius() {
  this.f_inner__org_pepstock_charba_client_colors_Radius_ = 0;
  this.f_outer__org_pepstock_charba_client_colors_Radius_ = 0;
 }
 
 static $clinit() {
  Radius.$clinit = () =>{};
  Radius.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Radius;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Radius, "org.pepstock.charba.client.colors.Radius");

exports = Radius;

//# sourceMappingURL=Radius.js.map
