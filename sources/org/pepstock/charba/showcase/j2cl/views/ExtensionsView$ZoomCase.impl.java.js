goog.module('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$1$impl');
let $10 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$10$impl');
let $11 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$11$impl');
let $12 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$12$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$5$impl');
let $6 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$6$impl');
let $7 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$7$impl');
let $8 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$8$impl');
let $9 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$9$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ZoomCase>}
 * @implements {CaseItem}
 */
class ZoomCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase_;
 }
 /** @return {!ZoomCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new ZoomCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase_;
 }
 /** @return {!ZoomCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ZoomCase.$clinit();
  if ($Equality.$same(ZoomCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase_, null)) {
   ZoomCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase_ = $Enums.createMapFromValues(ZoomCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ZoomCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase_);
 }
 /** @return {!Array<!ZoomCase>} */
 static m_values__() {
  ZoomCase.$clinit();
  return /**@type {!Array<ZoomCase>}*/ ($Arrays.$init([ZoomCase.$static_BASIC__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, ZoomCase.$static_ZOOM_CATEGORY__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, ZoomCase.$static_ZOOM_TIME__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, ZoomCase.$static_ZOOM_OVER_AXES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, ZoomCase.$static_ZOOM_DRAG_CATEGORY__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, ZoomCase.$static_ZOOM_DRAG_LINEAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, ZoomCase.$static_ZOOM_DRAG_TIME__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, ZoomCase.$static_PAN_REGION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, ZoomCase.$static_ZOOM_API_SCATTER__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, ZoomCase.$static_ZOOM_API_LINEAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, ZoomCase.$static_PAN_API_SCATTER__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, ZoomCase.$static_ZOOM_CALLBACK__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase], ZoomCase));
 }
 /** @return {!ZoomCase} */
 static get f_BASIC__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase() {
  return (ZoomCase.$clinit(), ZoomCase.$static_BASIC__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase);
 }
 /** @return {!ZoomCase} */
 static get f_ZOOM_CATEGORY__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase() {
  return (ZoomCase.$clinit(), ZoomCase.$static_ZOOM_CATEGORY__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase);
 }
 /** @return {!ZoomCase} */
 static get f_ZOOM_TIME__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase() {
  return (ZoomCase.$clinit(), ZoomCase.$static_ZOOM_TIME__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase);
 }
 /** @return {!ZoomCase} */
 static get f_ZOOM_OVER_AXES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase() {
  return (ZoomCase.$clinit(), ZoomCase.$static_ZOOM_OVER_AXES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase);
 }
 /** @return {!ZoomCase} */
 static get f_ZOOM_DRAG_CATEGORY__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase() {
  return (ZoomCase.$clinit(), ZoomCase.$static_ZOOM_DRAG_CATEGORY__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase);
 }
 /** @return {!ZoomCase} */
 static get f_ZOOM_DRAG_LINEAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase() {
  return (ZoomCase.$clinit(), ZoomCase.$static_ZOOM_DRAG_LINEAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase);
 }
 /** @return {!ZoomCase} */
 static get f_ZOOM_DRAG_TIME__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase() {
  return (ZoomCase.$clinit(), ZoomCase.$static_ZOOM_DRAG_TIME__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase);
 }
 /** @return {!ZoomCase} */
 static get f_PAN_REGION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase() {
  return (ZoomCase.$clinit(), ZoomCase.$static_PAN_REGION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase);
 }
 /** @return {!ZoomCase} */
 static get f_ZOOM_API_SCATTER__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase() {
  return (ZoomCase.$clinit(), ZoomCase.$static_ZOOM_API_SCATTER__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase);
 }
 /** @return {!ZoomCase} */
 static get f_ZOOM_API_LINEAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase() {
  return (ZoomCase.$clinit(), ZoomCase.$static_ZOOM_API_LINEAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase);
 }
 /** @return {!ZoomCase} */
 static get f_PAN_API_SCATTER__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase() {
  return (ZoomCase.$clinit(), ZoomCase.$static_PAN_API_SCATTER__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase);
 }
 /** @return {!ZoomCase} */
 static get f_ZOOM_CALLBACK__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase() {
  return (ZoomCase.$clinit(), ZoomCase.$static_ZOOM_CALLBACK__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase);
 }
 
 static $clinit() {
  ZoomCase.$clinit = () =>{};
  ZoomCase.$loadModules();
  Enum.$clinit();
  ZoomCase.$static_BASIC__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = ZoomCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("BASIC"), ZoomCase.$ordinal_BASIC__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, "Pan and zoom on scatter chart", $1.$create__());
  ZoomCase.$static_ZOOM_CATEGORY__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = ZoomCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("ZOOM_CATEGORY"), ZoomCase.$ordinal_ZOOM_CATEGORY__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, "Zooming on category axis", $2.$create__());
  ZoomCase.$static_ZOOM_TIME__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = ZoomCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("ZOOM_TIME"), ZoomCase.$ordinal_ZOOM_TIME__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, "Zooming on time axis", $3.$create__());
  ZoomCase.$static_ZOOM_OVER_AXES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = ZoomCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("ZOOM_OVER_AXES"), ZoomCase.$ordinal_ZOOM_OVER_AXES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, "Zooming over axes", $4.$create__());
  ZoomCase.$static_ZOOM_DRAG_CATEGORY__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = ZoomCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("ZOOM_DRAG_CATEGORY"), ZoomCase.$ordinal_ZOOM_DRAG_CATEGORY__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, "Drag to zoom on category axis", $5.$create__());
  ZoomCase.$static_ZOOM_DRAG_LINEAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = ZoomCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("ZOOM_DRAG_LINEAR"), ZoomCase.$ordinal_ZOOM_DRAG_LINEAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, "Drag to zoom on linear axis", $6.$create__());
  ZoomCase.$static_ZOOM_DRAG_TIME__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = ZoomCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("ZOOM_DRAG_TIME"), ZoomCase.$ordinal_ZOOM_DRAG_TIME__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, "Drag to zoom on time axis", $7.$create__());
  ZoomCase.$static_PAN_REGION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = ZoomCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("PAN_REGION"), ZoomCase.$ordinal_PAN_REGION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, "Pan region on scatter chart", $8.$create__());
  ZoomCase.$static_ZOOM_API_SCATTER__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = ZoomCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("ZOOM_API_SCATTER"), ZoomCase.$ordinal_ZOOM_API_SCATTER__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, "Programmatically zoom on scatter chart", $9.$create__());
  ZoomCase.$static_ZOOM_API_LINEAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = ZoomCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("ZOOM_API_LINEAR"), ZoomCase.$ordinal_ZOOM_API_LINEAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, "Programmatically zoom on linear scale", $10.$create__());
  ZoomCase.$static_PAN_API_SCATTER__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = ZoomCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("PAN_API_SCATTER"), ZoomCase.$ordinal_PAN_API_SCATTER__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, "Programmatically pan on scatter char", $11.$create__());
  ZoomCase.$static_ZOOM_CALLBACK__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = ZoomCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("ZOOM_CALLBACK"), ZoomCase.$ordinal_ZOOM_CALLBACK__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase, "Zoom callbacks on timeseries line chart", $12.$create__());
  ZoomCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ZoomCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$1$impl');
  $10 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$10$impl');
  $11 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$11$impl');
  $12 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$12$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$5$impl');
  $6 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$6$impl');
  $7 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$7$impl');
  $8 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$8$impl');
  $9 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$9$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ZoomCase}*/
ZoomCase.$static_BASIC__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase;
/**@private {!ZoomCase}*/
ZoomCase.$static_ZOOM_CATEGORY__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase;
/**@private {!ZoomCase}*/
ZoomCase.$static_ZOOM_TIME__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase;
/**@private {!ZoomCase}*/
ZoomCase.$static_ZOOM_OVER_AXES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase;
/**@private {!ZoomCase}*/
ZoomCase.$static_ZOOM_DRAG_CATEGORY__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase;
/**@private {!ZoomCase}*/
ZoomCase.$static_ZOOM_DRAG_LINEAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase;
/**@private {!ZoomCase}*/
ZoomCase.$static_ZOOM_DRAG_TIME__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase;
/**@private {!ZoomCase}*/
ZoomCase.$static_PAN_REGION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase;
/**@private {!ZoomCase}*/
ZoomCase.$static_ZOOM_API_SCATTER__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase;
/**@private {!ZoomCase}*/
ZoomCase.$static_ZOOM_API_LINEAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase;
/**@private {!ZoomCase}*/
ZoomCase.$static_PAN_API_SCATTER__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase;
/**@private {!ZoomCase}*/
ZoomCase.$static_ZOOM_CALLBACK__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase;
/**@type {Map<?string, !ZoomCase>}*/
ZoomCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase_;
/**@const {number}*/
ZoomCase.$ordinal_BASIC__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = 0;
/**@const {number}*/
ZoomCase.$ordinal_ZOOM_CATEGORY__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = 1;
/**@const {number}*/
ZoomCase.$ordinal_ZOOM_TIME__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = 2;
/**@const {number}*/
ZoomCase.$ordinal_ZOOM_OVER_AXES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = 3;
/**@const {number}*/
ZoomCase.$ordinal_ZOOM_DRAG_CATEGORY__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = 4;
/**@const {number}*/
ZoomCase.$ordinal_ZOOM_DRAG_LINEAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = 5;
/**@const {number}*/
ZoomCase.$ordinal_ZOOM_DRAG_TIME__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = 6;
/**@const {number}*/
ZoomCase.$ordinal_PAN_REGION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = 7;
/**@const {number}*/
ZoomCase.$ordinal_ZOOM_API_SCATTER__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = 8;
/**@const {number}*/
ZoomCase.$ordinal_ZOOM_API_LINEAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = 9;
/**@const {number}*/
ZoomCase.$ordinal_PAN_API_SCATTER__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = 10;
/**@const {number}*/
ZoomCase.$ordinal_ZOOM_CALLBACK__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase = 11;
CaseItem.$markImplementor(ZoomCase);
$Util.$setClassMetadataForEnum(ZoomCase, "org.pepstock.charba.showcase.j2cl.views.ExtensionsView$ZoomCase");

exports = ZoomCase;

//# sourceMappingURL=ExtensionsView$ZoomCase.js.map
