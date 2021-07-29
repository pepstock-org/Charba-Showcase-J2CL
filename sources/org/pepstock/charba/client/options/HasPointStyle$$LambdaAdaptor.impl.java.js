goog.module('org.pepstock.charba.client.options.HasPointStyle.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasPointStyle = goog.require('org.pepstock.charba.client.options.HasPointStyle$impl');

let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let PointStyleType = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyleType$impl');
let PointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.options.PointStyleHandler$impl');

/**
 * @implements {HasPointStyle}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():PointStyleHandler */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():PointStyleHandler}*/
  this.f_fn__org_pepstock_charba_client_options_HasPointStyle_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_options_HasPointStyle_$LambdaAdaptor__org_pepstock_charba_client_options_HasPointStyle_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_options_HasPointStyle_$LambdaAdaptor__org_pepstock_charba_client_options_HasPointStyle_$JsFunction(/** ?function():PointStyleHandler */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_options_HasPointStyle_$LambdaAdaptor = fn;
 }
 /** @override @return {PointStyleHandler} */
 m_getPointStyleHandler__() {
  let /** ?function():PointStyleHandler */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_options_HasPointStyle_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {PointStyle} */
 m_getPointStyle__() {
  return HasPointStyle.m_getPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {HTMLCanvasElement} */
 m_getPointStyleAsCanvas__() {
  return HasPointStyle.m_getPointStyleAsCanvas__$default__org_pepstock_charba_client_options_HasPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  return HasPointStyle.m_getPointStyleAsImage__$default__org_pepstock_charba_client_options_HasPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {PointStyleType} */
 m_getPointStyleType__() {
  return HasPointStyle.m_getPointStyleType__$default__org_pepstock_charba_client_options_HasPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(/** PointStyle */ arg0) {
  HasPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle__org_pepstock_charba_client_enums_PointStyle(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ arg0) {
  HasPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle__org_pepstock_charba_client_dom_elements_Img(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Canvas(/** HTMLCanvasElement */ arg0) {
  HasPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle__org_pepstock_charba_client_dom_elements_Canvas(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasPointStyle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasPointStyle.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.options.HasPointStyle$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasPointStyle$$LambdaAdaptor.js.map
