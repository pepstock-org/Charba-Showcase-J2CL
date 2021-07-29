goog.module('org.pepstock.charba.client.geo.IsSizeAxis.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsSizeAxis = goog.require('org.pepstock.charba.client.geo.IsSizeAxis$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let IsLegendAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.IsLegendAxis$impl');
let Legend = goog.forwardDeclare('org.pepstock.charba.client.geo.Legend$impl');
let SizeAxisMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.SizeAxisMapper$impl');
let Mode = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Mode$impl');

/**
 * @implements {IsSizeAxis}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():SizeAxisMapper */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():SizeAxisMapper}*/
  this.f_fn__org_pepstock_charba_client_geo_IsSizeAxis_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_geo_IsSizeAxis_$LambdaAdaptor__org_pepstock_charba_client_geo_IsSizeAxis_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_geo_IsSizeAxis_$LambdaAdaptor__org_pepstock_charba_client_geo_IsSizeAxis_$JsFunction(/** ?function():SizeAxisMapper */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_geo_IsSizeAxis_$LambdaAdaptor = fn;
 }
 /** @override @return {SizeAxisMapper} */
 m_getMapper__() {
  let /** ?function():SizeAxisMapper */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_geo_IsSizeAxis_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {Legend} */
 m_getLegend__() {
  return IsLegendAxis.m_getLegend__$default__org_pepstock_charba_client_geo_IsLegendAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMissingRadius__() {
  return IsSizeAxis.m_getMissingRadius__$default__org_pepstock_charba_client_geo_IsSizeAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {Mode} */
 m_getMode__() {
  return IsSizeAxis.m_getMode__$default__org_pepstock_charba_client_geo_IsSizeAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<Integer>} */
 m_getRange__() {
  return IsSizeAxis.m_getRange__$default__org_pepstock_charba_client_geo_IsSizeAxis(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMissingRadius__double(/** number */ arg0) {
  IsSizeAxis.m_setMissingRadius__$default__org_pepstock_charba_client_geo_IsSizeAxis__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMode__org_pepstock_charba_client_geo_enums_Mode(/** Mode */ arg0) {
  IsSizeAxis.m_setMode__$default__org_pepstock_charba_client_geo_IsSizeAxis__org_pepstock_charba_client_geo_enums_Mode(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setRange__int__int(/** number */ arg0, /** number */ arg1) {
  IsSizeAxis.m_setRange__$default__org_pepstock_charba_client_geo_IsSizeAxis__int__int(this, arg0, arg1);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  IsSizeAxis.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {
  IsLegendAxis = goog.module.get('org.pepstock.charba.client.geo.IsLegendAxis$impl');
 }
}
IsSizeAxis.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.geo.IsSizeAxis$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsSizeAxis$$LambdaAdaptor.js.map
