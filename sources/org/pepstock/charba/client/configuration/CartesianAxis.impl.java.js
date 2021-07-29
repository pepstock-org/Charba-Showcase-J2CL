goog.module('org.pepstock.charba.client.configuration.CartesianAxis$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Axis = goog.require('org.pepstock.charba.client.configuration.Axis$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.configuration.AxisType$impl');
let CartesianScaleTitle = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianScaleTitle$impl');
let CartesianTick = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTick$impl');
let Grid = goog.forwardDeclare('org.pepstock.charba.client.configuration.Grid$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let AxisPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisPosition$impl');
let Bounds = goog.forwardDeclare('org.pepstock.charba.client.enums.Bounds$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
 * @template T
 */
class CartesianAxis extends Axis {
 /** @protected */
 constructor() {
  super();
  /**@type {Grid}*/
  this.f_grid__org_pepstock_charba_client_configuration_CartesianAxis_;
  /**@type {CartesianScaleTitle}*/
  this.f_title__org_pepstock_charba_client_configuration_CartesianAxis_;
 }
 
 $ctor__org_pepstock_charba_client_configuration_CartesianAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ScaleId */ id, /** AxisType */ type, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(chart, id, type, kind);
  Checker.m_assertCheck__boolean__java_lang_String(!DefaultScaleId.f_UNKNOWN__org_pepstock_charba_client_enums_DefaultScaleId.m_is__java_lang_String(id.m_value__()), "The scale id is invalid. It must not be " + j_l_String.m_valueOf__java_lang_Object(id.m_value__()));
  Checker.m_assertCheck__boolean__java_lang_String(!$Objects.m_equals__java_lang_Object__java_lang_Object(AxisKind.f_R__org_pepstock_charba_client_enums_AxisKind, kind), "The axis kind is invalid. It must not be " + j_l_String.m_valueOf__java_lang_Object(AxisKind.f_R__org_pepstock_charba_client_enums_AxisKind.m_value__()));
  this.f_grid__org_pepstock_charba_client_configuration_CartesianAxis_ = Grid.$create__org_pepstock_charba_client_configuration_Axis(this);
  this.f_title__org_pepstock_charba_client_configuration_CartesianAxis_ = CartesianScaleTitle.$create__org_pepstock_charba_client_configuration_Axis(this);
 }
 /** @return {CartesianScaleTitle} */
 m_getTitle__() {
  return this.f_title__org_pepstock_charba_client_configuration_CartesianAxis_;
 }
 /** @abstract @return {T} */
 m_getTicks__() {}
 /** @return {Grid} */
 m_getGrid__() {
  return this.f_grid__org_pepstock_charba_client_configuration_CartesianAxis_;
 }
 
 m_setStacked__boolean(/** boolean */ stacked) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setStacked__boolean(stacked);
 }
 /** @return {boolean} */
 m_isStacked__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_isStacked__();
 }
 
 m_setSingleStacked__boolean(/** boolean */ stacked) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setSingleStacked__boolean(stacked);
 }
 /** @return {boolean} */
 m_isSingleStacked__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_isSingleStacked__();
 }
 
 m_setOffset__boolean(/** boolean */ offset) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setOffset__boolean(offset);
 }
 /** @return {boolean} */
 m_isOffset__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_isOffset__();
 }
 
 m_setPosition__org_pepstock_charba_client_enums_AxisPosition(/** AxisPosition */ position) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setPosition__org_pepstock_charba_client_enums_AxisPosition(position);
 }
 /** @return {AxisPosition} */
 m_getPosition__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getPosition__();
 }
 
 m_setBounds__org_pepstock_charba_client_enums_Bounds(/** Bounds */ bounds) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setBounds__org_pepstock_charba_client_enums_Bounds(bounds);
 }
 /** @return {Bounds} */
 m_getBounds__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getBounds__();
 }
 
 m_setStack__java_lang_String(/** ?string */ stack) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setStack__java_lang_String(stack);
 }
 /** @return {?string} */
 m_getStack__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getStack__();
 }
 
 m_setStackWeight__double(/** number */ stackWeight) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setStackWeight__double(stackWeight);
 }
 /** @return {number} */
 m_getStackWeight__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getStackWeight__();
 }
 
 static $clinit() {
  CartesianAxis.$clinit = () =>{};
  CartesianAxis.$loadModules();
  Axis.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CartesianAxis;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  CartesianScaleTitle = goog.module.get('org.pepstock.charba.client.configuration.CartesianScaleTitle$impl');
  Grid = goog.module.get('org.pepstock.charba.client.configuration.Grid$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(CartesianAxis, "org.pepstock.charba.client.configuration.CartesianAxis");

exports = CartesianAxis;

//# sourceMappingURL=CartesianAxis.js.map
