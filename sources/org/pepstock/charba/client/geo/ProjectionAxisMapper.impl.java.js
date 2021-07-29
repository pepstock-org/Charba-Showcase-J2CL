goog.module('org.pepstock.charba.client.geo.ProjectionAxisMapper$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let ArrayDouble_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.geo.ProjectionAxisMapper.Property$impl');
let Projection = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Projection$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

class ProjectionAxisMapper extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ProjectionAxisMapper} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  ProjectionAxisMapper.$clinit();
  let $instance = new ProjectionAxisMapper();
  $instance.$ctor__org_pepstock_charba_client_geo_ProjectionAxisMapper__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_ProjectionAxisMapper__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_setProjection__org_pepstock_charba_client_geo_enums_Projection_$pp_org_pepstock_charba_client_geo(/** Projection */ projection) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_PROJECTION__org_pepstock_charba_client_geo_ProjectionAxisMapper_Property, projection);
 }
 /** @return {Projection} */
 m_getProjection___$pp_org_pepstock_charba_client_geo() {
  return /**@type {Projection}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_PROJECTION__org_pepstock_charba_client_geo_ProjectionAxisMapper_Property, Projection.m_values__(), Projection.f_ALBERS_USA__org_pepstock_charba_client_geo_enums_Projection), Projection));
 }
 
 m_setProjectionScale__double_$pp_org_pepstock_charba_client_geo(/** number */ projectionScale) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_PROJECTION_SCALE__org_pepstock_charba_client_geo_ProjectionAxisMapper_Property, projectionScale);
 }
 /** @return {number} */
 m_getProjectionScale___$pp_org_pepstock_charba_client_geo() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_PROJECTION_SCALE__org_pepstock_charba_client_geo_ProjectionAxisMapper_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 
 m_setProjectionOffset__double__double_$pp_org_pepstock_charba_client_geo(/** number */ x, /** number */ y) {
  if (Undefined.m_isNot__double(x) && Undefined.m_isNot__double(y)) {
   this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_double(Property.f_PROJECTION_OFFSET__org_pepstock_charba_client_geo_ProjectionAxisMapper_Property, /**@type {!Array<number>}*/ ($Arrays.$init([x, y], $double)));
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_PROJECTION_OFFSET__org_pepstock_charba_client_geo_ProjectionAxisMapper_Property);
  }
 }
 /** @return {List<?number>} */
 m_getProjectionOffset___$pp_org_pepstock_charba_client_geo() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_PROJECTION_OFFSET__org_pepstock_charba_client_geo_ProjectionAxisMapper_Property), ArrayDouble_$Overlay));
  return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayDouble(array);
 }
 
 static $clinit() {
  ProjectionAxisMapper.$clinit = () =>{};
  ProjectionAxisMapper.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ProjectionAxisMapper;
 }
 
 static $loadModules() {
  ArrayDouble_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.geo.ProjectionAxisMapper.Property$impl');
  Projection = goog.module.get('org.pepstock.charba.client.geo.enums.Projection$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
$Util.$setClassMetadata(ProjectionAxisMapper, "org.pepstock.charba.client.geo.ProjectionAxisMapper");

exports = ProjectionAxisMapper;

//# sourceMappingURL=ProjectionAxisMapper.js.map
