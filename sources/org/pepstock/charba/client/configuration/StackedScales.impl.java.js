goog.module('org.pepstock.charba.client.configuration.StackedScales$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scales = goog.require('org.pepstock.charba.client.configuration.Scales$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianAxis$impl');
let CartesianTick = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTick$impl');
let ScalesOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ScalesOptions$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class StackedScales extends Scales {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_isOnlyYAxis__org_pepstock_charba_client_configuration_StackedScales_ = false;
 }
 /** @return {!StackedScales} */
 static $create__org_pepstock_charba_client_configuration_ScalesOptions(/** ScalesOptions */ options) {
  StackedScales.$clinit();
  let $instance = new StackedScales();
  $instance.$ctor__org_pepstock_charba_client_configuration_StackedScales__org_pepstock_charba_client_configuration_ScalesOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_StackedScales__org_pepstock_charba_client_configuration_ScalesOptions(/** ScalesOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_Scales__org_pepstock_charba_client_configuration_ScalesOptions(options);
  this.$init___$p_org_pepstock_charba_client_configuration_StackedScales();
 }
 /** @return {boolean} */
 m_isOnlyYAxis__() {
  return this.f_isOnlyYAxis__org_pepstock_charba_client_configuration_StackedScales_;
 }
 
 m_setOnlyYAxis__boolean(/** boolean */ isOnlyYAxis) {
  this.f_isOnlyYAxis__org_pepstock_charba_client_configuration_StackedScales_ = isOnlyYAxis;
 }
 /** @override */
 m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/** Array<Axis> */ axes) {
  if (!$Equality.$same(axes, null) && axes.length > 0) {
   if (!this.f_isOnlyYAxis__org_pepstock_charba_client_configuration_StackedScales_) {
    this.m_setStackedProperty__arrayOf_org_pepstock_charba_client_configuration_Axis_$p_org_pepstock_charba_client_configuration_StackedScales(axes);
   } else {
    for (let $array = axes, $index = 0; $index < $array.length; $index++) {
     let axis = $array[$index];
     {
      if (CartesianAxis.$isInstance(axis) && $Objects.m_equals__java_lang_Object__java_lang_Object(AxisKind.f_Y__org_pepstock_charba_client_enums_AxisKind, axis.m_getAxis__())) {
       this.m_setStackedProperty__arrayOf_org_pepstock_charba_client_configuration_Axis_$p_org_pepstock_charba_client_configuration_StackedScales(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis], Axis)));
      }
     }
    }
   }
   super.m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(axes);
  }
 }
 
 m_setStackedProperty__arrayOf_org_pepstock_charba_client_configuration_Axis_$p_org_pepstock_charba_client_configuration_StackedScales(/** Array<Axis> */ axes) {
  for (let $array = axes, $index = 0; $index < $array.length; $index++) {
   let ax = $array[$index];
   {
    if (CartesianAxis.$isInstance(ax)) {
     let cax = /**@type {CartesianAxis<CartesianTick>}*/ ($Casts.$to(ax, CartesianAxis));
     cax.m_setStacked__boolean(true);
    }
   }
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_StackedScales() {
  this.f_isOnlyYAxis__org_pepstock_charba_client_configuration_StackedScales_ = false;
 }
 
 static $clinit() {
  StackedScales.$clinit = () =>{};
  StackedScales.$loadModules();
  Scales.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StackedScales;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianAxis$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(StackedScales, "org.pepstock.charba.client.configuration.StackedScales");

exports = StackedScales;

//# sourceMappingURL=StackedScales.js.map
