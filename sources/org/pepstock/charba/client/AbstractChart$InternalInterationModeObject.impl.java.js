goog.module('org.pepstock.charba.client.AbstractChart.InternalInterationModeObject$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Property = goog.forwardDeclare('org.pepstock.charba.client.AbstractChart.InternalInterationModeObject.Property$impl');
let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class InternalInterationModeObject extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!InternalInterationModeObject} */
 static $create__boolean(/** boolean */ intersect) {
  InternalInterationModeObject.$clinit();
  let $instance = new InternalInterationModeObject();
  $instance.$ctor__org_pepstock_charba_client_AbstractChart_InternalInterationModeObject__boolean(intersect);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_AbstractChart_InternalInterationModeObject__boolean(/** boolean */ intersect) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__();
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_INTERSECT__org_pepstock_charba_client_AbstractChart_InternalInterationModeObject_Property, intersect);
 }
 
 m_setAxis__org_pepstock_charba_client_enums_InteractionAxis_$pp_org_pepstock_charba_client(/** InteractionAxis */ axis) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_AXIS__org_pepstock_charba_client_AbstractChart_InternalInterationModeObject_Property, axis);
 }
 /** @return {InteractionAxis} */
 m_getAxis___$pp_org_pepstock_charba_client() {
  return /**@type {InteractionAxis}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_AXIS__org_pepstock_charba_client_AbstractChart_InternalInterationModeObject_Property, InteractionAxis.m_values__(), InteractionAxis.f_X__org_pepstock_charba_client_enums_InteractionAxis), InteractionAxis));
 }
 
 m_setIntersect__boolean_$pp_org_pepstock_charba_client(/** boolean */ intersect) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_INTERSECT__org_pepstock_charba_client_AbstractChart_InternalInterationModeObject_Property, intersect);
 }
 /** @return {boolean} */
 m_isIntersect___$pp_org_pepstock_charba_client() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_INTERSECT__org_pepstock_charba_client_AbstractChart_InternalInterationModeObject_Property, true);
 }
 /** @return {?} */
 m_nativeObject___$p_org_pepstock_charba_client_AbstractChart_InternalInterationModeObject() {
  return super.m_getNativeObject__();
 }
 
 static $clinit() {
  InternalInterationModeObject.$clinit = () =>{};
  InternalInterationModeObject.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalInterationModeObject;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.AbstractChart.InternalInterationModeObject.Property$impl');
  InteractionAxis = goog.module.get('org.pepstock.charba.client.enums.InteractionAxis$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(InternalInterationModeObject, "org.pepstock.charba.client.AbstractChart$InternalInterationModeObject");

exports = InternalInterationModeObject;

//# sourceMappingURL=AbstractChart$InternalInterationModeObject.js.map
