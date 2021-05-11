goog.module('org.pepstock.charba.client.zoom.ScaleRange$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
const IsDefaultScaleRange = goog.require('org.pepstock.charba.client.zoom.IsDefaultScaleRange$impl');

let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let DefaultScaleRange = goog.forwardDeclare('org.pepstock.charba.client.zoom.DefaultScaleRange$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.zoom.ScaleRange.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultScaleRange}
 */
class ScaleRange extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultScaleRange}*/
  this.f_defaultOptions__org_pepstock_charba_client_zoom_ScaleRange_;
 }
 //Factory method corresponding to constructor 'ScaleRange()'.
 /** @return {!ScaleRange} */
 static $create__() {
  ScaleRange.$clinit();
  let $instance = new ScaleRange();
  $instance.$ctor__org_pepstock_charba_client_zoom_ScaleRange__();
  return $instance;
 }
 //Initialization from constructor 'ScaleRange()'.
 
 $ctor__org_pepstock_charba_client_zoom_ScaleRange__() {
  this.$ctor__org_pepstock_charba_client_zoom_ScaleRange__double(Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 //Factory method corresponding to constructor 'ScaleRange(double)'.
 /** @return {!ScaleRange} */
 static $create__double(/** number */ min) {
  ScaleRange.$clinit();
  let $instance = new ScaleRange();
  $instance.$ctor__org_pepstock_charba_client_zoom_ScaleRange__double(min);
  return $instance;
 }
 //Initialization from constructor 'ScaleRange(double)'.
 
 $ctor__org_pepstock_charba_client_zoom_ScaleRange__double(/** number */ min) {
  this.$ctor__org_pepstock_charba_client_zoom_ScaleRange__double__double(min, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 //Factory method corresponding to constructor 'ScaleRange(double, double)'.
 /** @return {!ScaleRange} */
 static $create__double__double(/** number */ min, /** number */ max) {
  ScaleRange.$clinit();
  let $instance = new ScaleRange();
  $instance.$ctor__org_pepstock_charba_client_zoom_ScaleRange__double__double(min, max);
  return $instance;
 }
 //Initialization from constructor 'ScaleRange(double, double)'.
 
 $ctor__org_pepstock_charba_client_zoom_ScaleRange__double__double(/** number */ min, /** number */ max) {
  this.$ctor__org_pepstock_charba_client_zoom_ScaleRange__org_pepstock_charba_client_zoom_IsDefaultScaleRange__org_pepstock_charba_client_commons_NativeObject(DefaultScaleRange.f_INSTANCE__org_pepstock_charba_client_zoom_DefaultScaleRange, null);
  if (Undefined.m_isNot__double(min)) {
   this.m_setMin__double(min);
  }
  if (Undefined.m_isNot__double(max)) {
   this.m_setMax__double(max);
  }
 }
 //Factory method corresponding to constructor 'ScaleRange(IsDefaultScaleRange, NativeObject)'.
 /** @return {!ScaleRange} */
 static $create__org_pepstock_charba_client_zoom_IsDefaultScaleRange__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultScaleRange */ defaultOptions, /** ? */ nativeObject) {
  ScaleRange.$clinit();
  let $instance = new ScaleRange();
  $instance.$ctor__org_pepstock_charba_client_zoom_ScaleRange__org_pepstock_charba_client_zoom_IsDefaultScaleRange__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'ScaleRange(IsDefaultScaleRange, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_zoom_ScaleRange__org_pepstock_charba_client_zoom_IsDefaultScaleRange__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultScaleRange */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_defaultOptions__org_pepstock_charba_client_zoom_ScaleRange_ = /**@type {IsDefaultScaleRange}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultOptions), IsDefaultScaleRange));
 }
 
 m_setMin__double(/** number */ min) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_MIN__org_pepstock_charba_client_zoom_ScaleRange_Property, min);
 }
 /** @override @return {number} */
 m_getMin__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_MIN__org_pepstock_charba_client_zoom_ScaleRange_Property, this.f_defaultOptions__org_pepstock_charba_client_zoom_ScaleRange_.m_getMin__());
 }
 
 m_setMax__double(/** number */ max) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_MAX__org_pepstock_charba_client_zoom_ScaleRange_Property, max);
 }
 /** @override @return {number} */
 m_getMax__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_MAX__org_pepstock_charba_client_zoom_ScaleRange_Property, this.f_defaultOptions__org_pepstock_charba_client_zoom_ScaleRange_.m_getMax__());
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_zoom() {
  return this.m_getNativeObject__();
 }
 
 static $clinit() {
  ScaleRange.$clinit = () =>{};
  ScaleRange.$loadModules();
  NativeObjectContainer.$clinit();
  IsDefaultScaleRange.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScaleRange;
 }
 
 static $loadModules() {
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  DefaultScaleRange = goog.module.get('org.pepstock.charba.client.zoom.DefaultScaleRange$impl');
  Property = goog.module.get('org.pepstock.charba.client.zoom.ScaleRange.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultScaleRange.$markImplementor(ScaleRange);
$Util.$setClassMetadata(ScaleRange, "org.pepstock.charba.client.zoom.ScaleRange");

exports = ScaleRange;

//# sourceMappingURL=ScaleRange.js.map
