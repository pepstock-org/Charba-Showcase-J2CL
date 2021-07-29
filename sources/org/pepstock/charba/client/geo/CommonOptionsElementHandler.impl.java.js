goog.module('org.pepstock.charba.client.geo.CommonOptionsElementHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.geo.CommonOptionsElementHandler.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class CommonOptionsElementHandler extends AbstractNode {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!CommonOptionsElementHandler} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** ? */ nativeObject) {
  CommonOptionsElementHandler.$clinit();
  let $instance = new CommonOptionsElementHandler();
  $instance.$ctor__org_pepstock_charba_client_geo_CommonOptionsElementHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(parent, childKey, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_CommonOptionsElementHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(parent, childKey, nativeObject);
 }
 
 m_setOutlineBackgroundColor__java_lang_String_$pp_org_pepstock_charba_client_geo(/** ?string */ backgroundColor) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_OUTLINE_BACKGROUND_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, backgroundColor);
 }
 /** @return {?string} */
 m_getOutlineBackgroundColorAsString___$pp_org_pepstock_charba_client_geo() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_OUTLINE_BACKGROUND_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 
 m_setOutlineBorderWidth__int_$pp_org_pepstock_charba_client_geo(/** number */ borderWidth) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_OUTLINE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, Checker.m_positiveOrZero__int(borderWidth));
 }
 /** @return {number} */
 m_getOutlineBorderWidth___$pp_org_pepstock_charba_client_geo() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_OUTLINE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, CommonOptionsElementHandler.f_DEFAULT_OUTLINE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler);
 }
 
 m_setOutlineBorderColor__java_lang_String_$pp_org_pepstock_charba_client_geo(/** ?string */ borderColor) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_OUTLINE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, borderColor);
 }
 /** @return {?string} */
 m_getOutlineBorderColorAsString___$pp_org_pepstock_charba_client_geo() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_OUTLINE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, Defaults.m_get__().m_getGlobal__().m_getBorderColorAsString__());
 }
 
 m_setGraticuleBorderWidth__int_$pp_org_pepstock_charba_client_geo(/** number */ borderWidth) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_GRATICULE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, Checker.m_positiveOrZero__int(borderWidth));
 }
 /** @return {number} */
 m_getGraticuleBorderWidth___$pp_org_pepstock_charba_client_geo() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_GRATICULE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, CommonOptionsElementHandler.f_DEFAULT_GRATICULE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler);
 }
 
 m_setGraticuleBorderColor__java_lang_String_$pp_org_pepstock_charba_client_geo(/** ?string */ borderColor) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_GRATICULE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, borderColor);
 }
 /** @return {?string} */
 m_getGraticuleBorderColorAsString___$pp_org_pepstock_charba_client_geo() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_GRATICULE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, CommonOptionsElementHandler.f_DEFAULT_GRATICULE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler);
 }
 
 static $clinit() {
  CommonOptionsElementHandler.$clinit = () =>{};
  CommonOptionsElementHandler.$loadModules();
  AbstractNode.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CommonOptionsElementHandler;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Property = goog.module.get('org.pepstock.charba.client.geo.CommonOptionsElementHandler.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@const {number}*/
CommonOptionsElementHandler.f_DEFAULT_OUTLINE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler = 0;
/**@const {?string}*/
CommonOptionsElementHandler.f_DEFAULT_GRATICULE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler = "#CCCCCC";
/**@const {number}*/
CommonOptionsElementHandler.f_DEFAULT_GRATICULE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler = 0;
$Util.$setClassMetadata(CommonOptionsElementHandler, "org.pepstock.charba.client.geo.CommonOptionsElementHandler");

exports = CommonOptionsElementHandler;

//# sourceMappingURL=CommonOptionsElementHandler.js.map
