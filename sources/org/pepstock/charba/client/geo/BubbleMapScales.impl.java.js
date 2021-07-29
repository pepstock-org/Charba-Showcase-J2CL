goog.module('org.pepstock.charba.client.geo.BubbleMapScales$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scales = goog.require('org.pepstock.charba.client.configuration.Scales$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let BaseGeoOptions = goog.forwardDeclare('org.pepstock.charba.client.geo.BaseGeoOptions$impl');
let IsSizeAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.IsSizeAxis$impl');
let ProjectionAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.ProjectionAxis$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class BubbleMapScales extends Scales {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BubbleMapScales} */
 static $create__org_pepstock_charba_client_geo_BaseGeoOptions(/** BaseGeoOptions */ options) {
  BubbleMapScales.$clinit();
  let $instance = new BubbleMapScales();
  $instance.$ctor__org_pepstock_charba_client_geo_BubbleMapScales__org_pepstock_charba_client_geo_BaseGeoOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_BubbleMapScales__org_pepstock_charba_client_geo_BaseGeoOptions(/** BaseGeoOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_Scales__org_pepstock_charba_client_configuration_ScalesOptions(options);
 }
 /** @override */
 m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/** Array<Axis> */ axes) {
  if (!$Equality.$same(axes, null)) {
   let size = false;
   let projection = false;
   for (let $array = axes, $index = 0; $index < $array.length; $index++) {
    let axis = $array[$index];
    {
     if (ProjectionAxis.$isInstance(axis) && !projection) {
      projection = true;
     } else if (IsSizeAxis.$isInstance(axis) && !size) {
      size = true;
     } else {
      throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Axes argument is not consistent: BubbleMap can have only 1 projection and 1 size axes"));
     }
    }
   }
   super.m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(axes);
  }
 }
 
 static $clinit() {
  BubbleMapScales.$clinit = () =>{};
  BubbleMapScales.$loadModules();
  Scales.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BubbleMapScales;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsSizeAxis = goog.module.get('org.pepstock.charba.client.geo.IsSizeAxis$impl');
  ProjectionAxis = goog.module.get('org.pepstock.charba.client.geo.ProjectionAxis$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(BubbleMapScales, "org.pepstock.charba.client.geo.BubbleMapScales");

exports = BubbleMapScales;

//# sourceMappingURL=BubbleMapScales.js.map
