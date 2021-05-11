goog.module('org.pepstock.charba.client.positioner.PositionerContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Chart_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.Chart.$Overlay$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.positioner.PositionerContext.Property$impl');

class PositionerContext extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PositionerContext} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  PositionerContext.$clinit();
  let $instance = new PositionerContext();
  $instance.$ctor__org_pepstock_charba_client_positioner_PositionerContext__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_positioner_PositionerContext__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {IsChart} */
 m_getChart___$pp_org_pepstock_charba_client_positioner() {
  let chart = this.m_getNativeChart__org_pepstock_charba_client_commons_Key(Property.f_CHART__org_pepstock_charba_client_positioner_PositionerContext_Property);
  if (!$Equality.$same(chart, null)) {
   return Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart);
  }
  return null;
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_positioner() {
  return this.m_getNativeObject__();
 }
 
 static $clinit() {
  PositionerContext.$clinit = () =>{};
  PositionerContext.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PositionerContext;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Chart_$Overlay = goog.module.get('org.pepstock.charba.client.Chart.$Overlay$impl');
  Property = goog.module.get('org.pepstock.charba.client.positioner.PositionerContext.Property$impl');
 }
}
$Util.$setClassMetadata(PositionerContext, "org.pepstock.charba.client.positioner.PositionerContext");

exports = PositionerContext;

//# sourceMappingURL=PositionerContext.js.map
