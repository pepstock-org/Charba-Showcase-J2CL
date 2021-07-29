goog.module('org.pepstock.charba.client.data.HasDataPointStyle.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasDataPointStyle = goog.require('org.pepstock.charba.client.data.HasDataPointStyle$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let PointStyleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PointStyleCallback$impl');
let DataPointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.data.DataPointStyleHandler$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let PointStyleType = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyleType$impl');

/**
 * @implements {HasDataPointStyle}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():DataPointStyleHandler */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():DataPointStyleHandler}*/
  this.f_fn__org_pepstock_charba_client_data_HasDataPointStyle_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_data_HasDataPointStyle_$LambdaAdaptor__org_pepstock_charba_client_data_HasDataPointStyle_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_data_HasDataPointStyle_$LambdaAdaptor__org_pepstock_charba_client_data_HasDataPointStyle_$JsFunction(/** ?function():DataPointStyleHandler */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_data_HasDataPointStyle_$LambdaAdaptor = fn;
 }
 /** @override @return {DataPointStyleHandler} */
 m_getPointStyleHandler__() {
  let /** ?function():DataPointStyleHandler */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_data_HasDataPointStyle_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {List<PointStyle>} */
 m_getPointStyle__() {
  return HasDataPointStyle.m_getPointStyle__$default__org_pepstock_charba_client_data_HasDataPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<HTMLCanvasElement>} */
 m_getPointStyleAsCanvas__() {
  return HasDataPointStyle.m_getPointStyleAsCanvas__$default__org_pepstock_charba_client_data_HasDataPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<HTMLImageElement>} */
 m_getPointStyleAsImages__() {
  return HasDataPointStyle.m_getPointStyleAsImages__$default__org_pepstock_charba_client_data_HasDataPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {PointStyleCallback} */
 m_getPointStyleCallback__() {
  return HasDataPointStyle.m_getPointStyleCallback__$default__org_pepstock_charba_client_data_HasDataPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {PointStyleType} */
 m_getPointStyleType__() {
  return HasDataPointStyle.m_getPointStyleType__$default__org_pepstock_charba_client_data_HasDataPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__arrayOf_org_pepstock_charba_client_enums_PointStyle(/** Array<PointStyle> */ arg0) {
  HasDataPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_data_HasDataPointStyle__arrayOf_org_pepstock_charba_client_enums_PointStyle(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__arrayOf_org_pepstock_charba_client_dom_elements_Img(/** Array<HTMLImageElement> */ arg0) {
  HasDataPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_data_HasDataPointStyle__arrayOf_org_pepstock_charba_client_dom_elements_Img(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__arrayOf_org_pepstock_charba_client_dom_elements_Canvas(/** Array<HTMLCanvasElement> */ arg0) {
  HasDataPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_data_HasDataPointStyle__arrayOf_org_pepstock_charba_client_dom_elements_Canvas(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/** PointStyleCallback */ arg0) {
  HasDataPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_data_HasDataPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasDataPointStyle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasDataPointStyle.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.data.HasDataPointStyle$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasDataPointStyle$$LambdaAdaptor.js.map
