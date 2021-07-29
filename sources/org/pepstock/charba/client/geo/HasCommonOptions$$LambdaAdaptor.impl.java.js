goog.module('org.pepstock.charba.client.geo.HasCommonOptions.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCommonOptions = goog.require('org.pepstock.charba.client.geo.HasCommonOptions$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let CommonOptionsHandler = goog.forwardDeclare('org.pepstock.charba.client.geo.CommonOptionsHandler$impl');
let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');
let Graticule = goog.forwardDeclare('org.pepstock.charba.client.geo.Graticule$impl');
let ClipMap = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.ClipMap$impl');

/**
 * @implements {HasCommonOptions}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():CommonOptionsHandler */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():CommonOptionsHandler}*/
  this.f_fn__org_pepstock_charba_client_geo_HasCommonOptions_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_geo_HasCommonOptions_$LambdaAdaptor__org_pepstock_charba_client_geo_HasCommonOptions_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_geo_HasCommonOptions_$LambdaAdaptor__org_pepstock_charba_client_geo_HasCommonOptions_$JsFunction(/** ?function():CommonOptionsHandler */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_geo_HasCommonOptions_$LambdaAdaptor = fn;
 }
 /** @override @return {CommonOptionsHandler} */
 m_getHandler__() {
  let /** ?function():CommonOptionsHandler */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_geo_HasCommonOptions_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {ClipMap} */
 m_getClipMap__() {
  return HasCommonOptions.m_getClipMap__$default__org_pepstock_charba_client_geo_HasCommonOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<Feature>} */
 m_getOutline__() {
  return HasCommonOptions.m_getOutline__$default__org_pepstock_charba_client_geo_HasCommonOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {Graticule} */
 m_getShowGraticule__() {
  return HasCommonOptions.m_getShowGraticule__$default__org_pepstock_charba_client_geo_HasCommonOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isClipMap__() {
  return HasCommonOptions.m_isClipMap__$default__org_pepstock_charba_client_geo_HasCommonOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isShowGraticule__() {
  return HasCommonOptions.m_isShowGraticule__$default__org_pepstock_charba_client_geo_HasCommonOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isShowOutline__() {
  return HasCommonOptions.m_isShowOutline__$default__org_pepstock_charba_client_geo_HasCommonOptions(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setClipMap__org_pepstock_charba_client_geo_enums_ClipMap(/** ClipMap */ arg0) {
  HasCommonOptions.m_setClipMap__$default__org_pepstock_charba_client_geo_HasCommonOptions__org_pepstock_charba_client_geo_enums_ClipMap(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setClipMap__boolean(/** boolean */ arg0) {
  HasCommonOptions.m_setClipMap__$default__org_pepstock_charba_client_geo_HasCommonOptions__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setOutline__arrayOf_org_pepstock_charba_client_geo_Feature(/** Array<Feature> */ arg0) {
  HasCommonOptions.m_setOutline__$default__org_pepstock_charba_client_geo_HasCommonOptions__arrayOf_org_pepstock_charba_client_geo_Feature(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setOutline__java_util_List(/** List<Feature> */ arg0) {
  HasCommonOptions.m_setOutline__$default__org_pepstock_charba_client_geo_HasCommonOptions__java_util_List(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setShowGraticule__boolean(/** boolean */ arg0) {
  HasCommonOptions.m_setShowGraticule__$default__org_pepstock_charba_client_geo_HasCommonOptions__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setShowGraticule__org_pepstock_charba_client_geo_Graticule(/** Graticule */ arg0) {
  HasCommonOptions.m_setShowGraticule__$default__org_pepstock_charba_client_geo_HasCommonOptions__org_pepstock_charba_client_geo_Graticule(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setShowOutline__boolean(/** boolean */ arg0) {
  HasCommonOptions.m_setShowOutline__$default__org_pepstock_charba_client_geo_HasCommonOptions__boolean(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasCommonOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasCommonOptions.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.geo.HasCommonOptions$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasCommonOptions$$LambdaAdaptor.js.map
