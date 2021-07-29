goog.module('org.pepstock.charba.client.geo.ChoroplethBar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasCommonOptionsElement = goog.require('org.pepstock.charba.client.geo.HasCommonOptionsElement$impl');
const Bar = goog.require('org.pepstock.charba.client.options.Bar$impl');

let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultBar = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultBar$impl');
let CommonOptionsElementHandler = goog.forwardDeclare('org.pepstock.charba.client.geo.CommonOptionsElementHandler$impl');
let Elements = goog.forwardDeclare('org.pepstock.charba.client.options.Elements$impl');

/**
 * @implements {HasCommonOptionsElement}
 */
class ChoroplethBar extends Bar {
 /** @protected */
 constructor() {
  super();
  /**@type {CommonOptionsElementHandler}*/
  this.f_optionsHandler__org_pepstock_charba_client_geo_ChoroplethBar_;
 }
 /** @return {!ChoroplethBar} */
 static $create__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultBar__org_pepstock_charba_client_commons_NativeObject(/** Elements */ elements, /** Key */ childKey, /** IsDefaultBar */ defaultValues, /** ? */ nativeObject) {
  ChoroplethBar.$clinit();
  let $instance = new ChoroplethBar();
  $instance.$ctor__org_pepstock_charba_client_geo_ChoroplethBar__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultBar__org_pepstock_charba_client_commons_NativeObject(elements, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_ChoroplethBar__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultBar__org_pepstock_charba_client_commons_NativeObject(/** Elements */ elements, /** Key */ childKey, /** IsDefaultBar */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_Bar__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultBar__org_pepstock_charba_client_commons_NativeObject(elements, childKey, defaultValues, nativeObject);
  this.f_optionsHandler__org_pepstock_charba_client_geo_ChoroplethBar_ = CommonOptionsElementHandler.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(elements, childKey, this.m_getNativeObject__());
 }
 /** @override @return {CommonOptionsElementHandler} */
 m_getCommonElementHandler__() {
  return this.f_optionsHandler__org_pepstock_charba_client_geo_ChoroplethBar_;
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_getGraticuleBorderColor__() {
  return HasCommonOptionsElement.m_getGraticuleBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getGraticuleBorderColorAsString__() {
  return HasCommonOptionsElement.m_getGraticuleBorderColorAsString__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getGraticuleBorderWidth__() {
  return HasCommonOptionsElement.m_getGraticuleBorderWidth__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_getOutlineBackgroundColor__() {
  return HasCommonOptionsElement.m_getOutlineBackgroundColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getOutlineBackgroundColorAsString__() {
  return HasCommonOptionsElement.m_getOutlineBackgroundColorAsString__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_getOutlineBorderColor__() {
  return HasCommonOptionsElement.m_getOutlineBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getOutlineBorderColorAsString__() {
  return HasCommonOptionsElement.m_getOutlineBorderColorAsString__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getOutlineBorderWidth__() {
  return HasCommonOptionsElement.m_getOutlineBorderWidth__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setGraticuleBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ arg0) {
  HasCommonOptionsElement.m_setGraticuleBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__org_pepstock_charba_client_colors_IsColor(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setGraticuleBorderColor__java_lang_String(/** ?string */ arg0) {
  HasCommonOptionsElement.m_setGraticuleBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setGraticuleBorderWidth__int(/** number */ arg0) {
  HasCommonOptionsElement.m_setGraticuleBorderWidth__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setOutlineBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ arg0) {
  HasCommonOptionsElement.m_setOutlineBackgroundColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__org_pepstock_charba_client_colors_IsColor(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setOutlineBackgroundColor__java_lang_String(/** ?string */ arg0) {
  HasCommonOptionsElement.m_setOutlineBackgroundColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setOutlineBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ arg0) {
  HasCommonOptionsElement.m_setOutlineBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__org_pepstock_charba_client_colors_IsColor(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setOutlineBorderColor__java_lang_String(/** ?string */ arg0) {
  HasCommonOptionsElement.m_setOutlineBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setOutlineBorderWidth__int(/** number */ arg0) {
  HasCommonOptionsElement.m_setOutlineBorderWidth__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__int(this, arg0);
 }
 
 static $clinit() {
  ChoroplethBar.$clinit = () =>{};
  ChoroplethBar.$loadModules();
  Bar.$clinit();
  HasCommonOptionsElement.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChoroplethBar;
 }
 
 static $loadModules() {
  CommonOptionsElementHandler = goog.module.get('org.pepstock.charba.client.geo.CommonOptionsElementHandler$impl');
 }
}
HasCommonOptionsElement.$markImplementor(ChoroplethBar);
$Util.$setClassMetadata(ChoroplethBar, "org.pepstock.charba.client.geo.ChoroplethBar");

exports = ChoroplethBar;

//# sourceMappingURL=ChoroplethBar.js.map
