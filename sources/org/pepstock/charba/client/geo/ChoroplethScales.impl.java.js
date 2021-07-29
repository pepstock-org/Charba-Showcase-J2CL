goog.module('org.pepstock.charba.client.geo.ChoroplethScales$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scales = goog.require('org.pepstock.charba.client.configuration.Scales$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let BaseGeoOptions = goog.forwardDeclare('org.pepstock.charba.client.geo.BaseGeoOptions$impl');
let IsColorAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.IsColorAxis$impl');
let ProjectionAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.ProjectionAxis$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class ChoroplethScales extends Scales {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ChoroplethScales} */
 static $create__org_pepstock_charba_client_geo_BaseGeoOptions(/** BaseGeoOptions */ options) {
  ChoroplethScales.$clinit();
  let $instance = new ChoroplethScales();
  $instance.$ctor__org_pepstock_charba_client_geo_ChoroplethScales__org_pepstock_charba_client_geo_BaseGeoOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_ChoroplethScales__org_pepstock_charba_client_geo_BaseGeoOptions(/** BaseGeoOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_Scales__org_pepstock_charba_client_configuration_ScalesOptions(options);
 }
 /** @override */
 m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/** Array<Axis> */ axes) {
  if (!$Equality.$same(axes, null)) {
   let color = false;
   let projection = false;
   for (let $array = axes, $index = 0; $index < $array.length; $index++) {
    let axis = $array[$index];
    {
     if (ProjectionAxis.$isInstance(axis) && !projection) {
      projection = true;
     } else if (IsColorAxis.$isInstance(axis) && !color) {
      color = true;
     } else {
      throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Axes argument is not consistent: Choropleth can have only 1 projection and 1 color axes"));
     }
    }
   }
   super.m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(axes);
  }
 }
 
 static $clinit() {
  ChoroplethScales.$clinit = () =>{};
  ChoroplethScales.$loadModules();
  Scales.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChoroplethScales;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsColorAxis = goog.module.get('org.pepstock.charba.client.geo.IsColorAxis$impl');
  ProjectionAxis = goog.module.get('org.pepstock.charba.client.geo.ProjectionAxis$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(ChoroplethScales, "org.pepstock.charba.client.geo.ChoroplethScales");

exports = ChoroplethScales;

//# sourceMappingURL=ChoroplethScales.js.map
