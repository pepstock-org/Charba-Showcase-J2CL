goog.module('org.pepstock.charba.client.zoom.ScaleLimit$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScaleLimit = goog.require('org.pepstock.charba.client.zoom.IsDefaultScaleLimit$impl');
const ScaleRange = goog.require('org.pepstock.charba.client.zoom.ScaleRange$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let ScaleLimit_Property = goog.forwardDeclare('org.pepstock.charba.client.zoom.ScaleLimit.Property$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.zoom.ScaleRange.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultScaleLimit}
 */
class ScaleLimit extends ScaleRange {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultScaleLimit}*/
  this.f_defaultOptions__org_pepstock_charba_client_zoom_ScaleLimit_;
 }
 /** @return {!ScaleLimit} */
 static $create__org_pepstock_charba_client_zoom_IsDefaultScaleLimit__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultScaleLimit */ defaultOptions, /** ? */ nativeObject) {
  ScaleLimit.$clinit();
  let $instance = new ScaleLimit();
  $instance.$ctor__org_pepstock_charba_client_zoom_ScaleLimit__org_pepstock_charba_client_zoom_IsDefaultScaleLimit__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_ScaleLimit__org_pepstock_charba_client_zoom_IsDefaultScaleLimit__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultScaleLimit */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_zoom_ScaleRange__org_pepstock_charba_client_zoom_IsDefaultScaleRange__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  this.f_defaultOptions__org_pepstock_charba_client_zoom_ScaleLimit_ = /**@type {IsDefaultScaleLimit}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultOptions), IsDefaultScaleLimit));
 }
 
 m_setOriginalMin__boolean(/** boolean */ enable) {
  this.m_setOringinal__org_pepstock_charba_client_commons_Key__boolean_$p_org_pepstock_charba_client_zoom_ScaleLimit(Property.f_MIN__org_pepstock_charba_client_zoom_ScaleRange_Property, enable);
 }
 /** @override @return {boolean} */
 m_isOriginalMin__() {
  return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_MIN__org_pepstock_charba_client_zoom_ScaleRange_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType) || !this.m_has__org_pepstock_charba_client_commons_Key(Property.f_MIN__org_pepstock_charba_client_zoom_ScaleRange_Property) && this.f_defaultOptions__org_pepstock_charba_client_zoom_ScaleLimit_.m_isOriginalMin__();
 }
 
 m_setOriginalMax__boolean(/** boolean */ enable) {
  this.m_setOringinal__org_pepstock_charba_client_commons_Key__boolean_$p_org_pepstock_charba_client_zoom_ScaleLimit(Property.f_MAX__org_pepstock_charba_client_zoom_ScaleRange_Property, enable);
 }
 /** @override @return {boolean} */
 m_isOriginalMax__() {
  return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_MAX__org_pepstock_charba_client_zoom_ScaleRange_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType) || !this.m_has__org_pepstock_charba_client_commons_Key(Property.f_MAX__org_pepstock_charba_client_zoom_ScaleRange_Property) && this.f_defaultOptions__org_pepstock_charba_client_zoom_ScaleLimit_.m_isOriginalMax__();
 }
 
 m_setMinRange__double(/** number */ min) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(ScaleLimit_Property.f_MIN_RANGE__org_pepstock_charba_client_zoom_ScaleLimit_Property, min);
 }
 /** @override @return {number} */
 m_getMinRange__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(ScaleLimit_Property.f_MIN_RANGE__org_pepstock_charba_client_zoom_ScaleLimit_Property, this.f_defaultOptions__org_pepstock_charba_client_zoom_ScaleLimit_.m_getMinRange__());
 }
 
 m_setOringinal__org_pepstock_charba_client_commons_Key__boolean_$p_org_pepstock_charba_client_zoom_ScaleLimit(/** Key */ property, /** boolean */ enable) {
  if (enable) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(property, ScaleLimit.f_ORIGINAL_LIMIT__org_pepstock_charba_client_zoom_ScaleLimit_);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(property);
  }
 }
 
 static $clinit() {
  ScaleLimit.$clinit = () =>{};
  ScaleLimit.$loadModules();
  ScaleRange.$clinit();
  IsDefaultScaleLimit.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScaleLimit;
 }
 
 static $loadModules() {
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  ScaleLimit_Property = goog.module.get('org.pepstock.charba.client.zoom.ScaleLimit.Property$impl');
  Property = goog.module.get('org.pepstock.charba.client.zoom.ScaleRange.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {?string}*/
ScaleLimit.f_ORIGINAL_LIMIT__org_pepstock_charba_client_zoom_ScaleLimit_ = "original";
IsDefaultScaleLimit.$markImplementor(ScaleLimit);
$Util.$setClassMetadata(ScaleLimit, "org.pepstock.charba.client.zoom.ScaleLimit");

exports = ScaleLimit;

//# sourceMappingURL=ScaleLimit.js.map
