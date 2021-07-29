goog.module('org.pepstock.charba.client.commons.Merger$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let ChartOptions = goog.forwardDeclare('org.pepstock.charba.client.ChartOptions$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Helpers = goog.forwardDeclare('org.pepstock.charba.client.Helpers$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ScaleType = goog.forwardDeclare('org.pepstock.charba.client.ScaleType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.commons.Merger.Property$impl');
let NativeObjectContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
let NativeObjectUtils = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectUtils$impl');
let Scale = goog.forwardDeclare('org.pepstock.charba.client.options.Scale$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class Merger extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Merger} */
 static $create__() {
  let $instance = new Merger();
  $instance.$ctor__org_pepstock_charba_client_commons_Merger__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_Merger__() {
  this.$ctor__java_lang_Object__();
  ResourcesType.m_getResources__().m_inject__();
 }
 /** @return {Merger} */
 static m_get__() {
  Merger.$clinit();
  return Merger.f_INSTANCE__org_pepstock_charba_client_commons_Merger_;
 }
 
 m_load__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_ChartEnvelop(/** NativeObjectContainer */ options, /** ChartEnvelop<?> */ envelop) {
  if (Envelop.m_isValid__org_pepstock_charba_client_commons_Envelop(envelop)) {
   this.m_mergeNativeObjects__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_commons_Merger(options.m_getNativeObject__(), /**@type {?}*/ (envelop.m_getContent__()));
  }
 }
 
 m_load__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_ChartEnvelop(/** IsChart */ chart, /** NativeObjectContainer */ options, /** ChartEnvelop<?> */ envelop) {
  IsChart.m_checkIfConsistent__org_pepstock_charba_client_IsChart(chart);
  if (!$Equality.$same(envelop, null)) {
   let defaults = this.m_get__org_pepstock_charba_client_Type__org_pepstock_charba_client_ChartOptions_$p_org_pepstock_charba_client_commons_Merger(chart.m_getType__(), Defaults.m_get__().m_getOptions__org_pepstock_charba_client_Type(chart.m_getType__()));
   let chartOptions = Helpers.m_get__().m_clone__org_pepstock_charba_client_commons_NativeObject(options.m_getNativeObject__());
   let wholeOptions = this.m_mergeNativeObjects__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_commons_Merger(chartOptions, defaults);
   envelop.m_setContent__java_lang_Object(wholeOptions);
  }
 }
 
 m_load__org_pepstock_charba_client_Type__org_pepstock_charba_client_ChartEnvelop(/** Type */ type, /** ChartEnvelop<?> */ envelop) {
  if (!$Equality.$same(envelop, null)) {
   let defaults = this.m_get__org_pepstock_charba_client_Type__org_pepstock_charba_client_ChartOptions_$p_org_pepstock_charba_client_commons_Merger(type, Defaults.m_get__().m_getOptions__org_pepstock_charba_client_Type(type));
   envelop.m_setContent__java_lang_Object(defaults);
  }
 }
 
 m_load__org_pepstock_charba_client_Type__org_pepstock_charba_client_ChartEnvelop__org_pepstock_charba_client_ChartEnvelop(/** Type */ type, /** ChartEnvelop<ChartOptions> */ options, /** ChartEnvelop<?> */ envelop) {
  if (!$Equality.$same(envelop, null) && !$Equality.$same(options, null) && !$Equality.$same(options.m_getContent__(), null)) {
   let defaults = this.m_get__org_pepstock_charba_client_Type__org_pepstock_charba_client_ChartOptions_$p_org_pepstock_charba_client_commons_Merger(type, /**@type {ChartOptions}*/ ($Casts.$to(options.m_getContent__(), ChartOptions)));
   envelop.m_setContent__java_lang_Object(defaults);
  }
 }
 /** @return {?} */
 m_get__org_pepstock_charba_client_Type__org_pepstock_charba_client_ChartOptions_$p_org_pepstock_charba_client_commons_Merger(/** Type */ type, /** ChartOptions */ base) {
  Type.m_checkIfValid__org_pepstock_charba_client_Type(type);
  let scale = Defaults.m_get__().m_getScale__();
  let global = Defaults.m_get__().m_getGlobal__();
  let chartOptions = Helpers.m_get__().m_clone__org_pepstock_charba_client_commons_NativeObject(base.m_getNativeObject__());
  let scaleOptions = Helpers.m_get__().m_clone__org_pepstock_charba_client_commons_NativeObject(scale.m_getNativeObject__());
  let globalOptions = Helpers.m_get__().m_clone__org_pepstock_charba_client_commons_NativeObject(global.m_getNativeObject__());
  if (!$Objects.m_equals__java_lang_Object__java_lang_Object(ScaleType.f_NONE__org_pepstock_charba_client_ScaleType, type.m_scaleType__())) {
   this.m_handleMultiScalesType__org_pepstock_charba_client_ChartOptions__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_commons_Merger(base, chartOptions, scaleOptions);
  }
  return this.m_mergeNativeObjects__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_commons_Merger(chartOptions, globalOptions);
 }
 
 m_handleMultiScalesType__org_pepstock_charba_client_ChartOptions__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_commons_Merger(/** ChartOptions */ base, /** ? */ chartOptions, /** ? */ scaleOptions) {
  if (NativeObjectUtils.m_hasProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(chartOptions, Property.f_SCALES__org_pepstock_charba_client_commons_Merger_Property.m_value__())) {
   let scales = NativeObjectUtils.m_getObjectProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(chartOptions, Property.f_SCALES__org_pepstock_charba_client_commons_Merger_Property.m_value__());
   this.m_applyDefaultsOnScales__java_util_List__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_commons_Merger(base.m_getScales__().m_getAxes__(), scales, scaleOptions);
  }
 }
 
 m_applyDefaultsOnScales__java_util_List__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_commons_Merger(/** List<Scale> */ storedScales, /** ? */ scales, /** ? */ scaleOptions) {
  for (let $iterator = storedScales.m_iterator__(); $iterator.m_hasNext__(); ) {
   let storedScale = /**@type {Scale}*/ ($Casts.$to($iterator.m_next__(), Scale));
   {
    let scaleObject = NativeObjectUtils.m_getObjectProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(scales, storedScale.m_getId__().m_value__());
    let type = storedScale.m_getType__();
    if (Key.m_isValid__org_pepstock_charba_client_commons_Key(type)) {
     let axisDefault = Defaults.m_get__().m_getScale__org_pepstock_charba_client_configuration_AxisType(type);
     let tempObject = this.m_mergeNativeObjects__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_commons_Merger(scaleObject, axisDefault.m_getNativeObject__());
     NativeObjectUtils.m_defineObjectProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_commons_NativeObject(scales, storedScale.m_getId__().m_value__(), this.m_mergeNativeObjects__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_commons_Merger(tempObject, scaleOptions));
    } else {
     NativeObjectUtils.m_defineObjectProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_commons_NativeObject(scales, storedScale.m_getId__().m_value__(), this.m_mergeNativeObjects__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_commons_Merger(scaleObject, scaleOptions));
    }
   }
  }
 }
 /** @return {?} */
 m_merge__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String(/** NativeObjectContainer */ target, /** NativeObjectContainer */ source, /** ?string */ property) {
  this.m_checkArgumentsConsistency__java_lang_Object__java_lang_Object__java_lang_String_$p_org_pepstock_charba_client_commons_Merger(target, source, property);
  return this.m_merge__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject__java_lang_String(target.m_getNativeObject__(), source.m_getNativeObject__(), property);
 }
 /** @return {?} */
 m_merge__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String(/** ? */ target, /** NativeObjectContainer */ source, /** ?string */ property) {
  this.m_checkArgumentsConsistency__java_lang_Object__java_lang_Object__java_lang_String_$p_org_pepstock_charba_client_commons_Merger(target, source, property);
  return this.m_merge__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject__java_lang_String(target, source.m_getNativeObject__(), property);
 }
 /** @return {?} */
 m_merge__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** NativeObjectContainer */ target, /** ? */ source, /** ?string */ property) {
  this.m_checkArgumentsConsistency__java_lang_Object__java_lang_Object__java_lang_String_$p_org_pepstock_charba_client_commons_Merger(target, source, property);
  return this.m_merge__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject__java_lang_String(target.m_getNativeObject__(), source, property);
 }
 /** @return {?} */
 m_merge__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** ? */ target, /** ? */ source, /** ?string */ property) {
  this.m_checkArgumentsConsistency__java_lang_Object__java_lang_Object__java_lang_String_$p_org_pepstock_charba_client_commons_Merger(target, source, property);
  return this.m_internalMerge__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject__java_lang_String_$p_org_pepstock_charba_client_commons_Merger(target, source, property);
 }
 /** @return {?} */
 m_internalMerge__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject__java_lang_String_$p_org_pepstock_charba_client_commons_Merger(/** ? */ target, /** ? */ source, /** ?string */ property) {
  let newObject = NativeObjectUtils.m_create__();
  NativeObjectUtils.m_defineObjectProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_commons_NativeObject(newObject, property, source);
  return this.m_mergeNativeObjects__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_commons_Merger(target, newObject);
 }
 /** @return {?} */
 m_mergeNativeObjects__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_commons_Merger(/** ? */ target, /** ? */ source) {
  let newObject = Helpers.m_get__().m_mergeIf__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject(target, source);
  return $Equality.$same(newObject, null) ? NativeObjectUtils.m_create__() : newObject;
 }
 
 m_checkArgumentsConsistency__java_lang_Object__java_lang_Object__java_lang_String_$p_org_pepstock_charba_client_commons_Merger(/** * */ target, /** * */ source, /** ?string */ property) {
  Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(target, "Target argument");
  Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(source, "Source argument");
  Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(property, "Property argument");
  Checker.m_checkIfNotEqualTo__int__int__java_lang_String(j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(property)), 0, "Property argument size");
 }
 
 static $clinit() {
  Merger.$clinit = () =>{};
  Merger.$loadModules();
  j_l_Object.$clinit();
  Merger.f_INSTANCE__org_pepstock_charba_client_commons_Merger_ = Merger.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Merger;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartOptions = goog.module.get('org.pepstock.charba.client.ChartOptions$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Helpers = goog.module.get('org.pepstock.charba.client.Helpers$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  ScaleType = goog.module.get('org.pepstock.charba.client.ScaleType$impl');
  Type = goog.module.get('org.pepstock.charba.client.Type$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Property = goog.module.get('org.pepstock.charba.client.commons.Merger.Property$impl');
  NativeObjectUtils = goog.module.get('org.pepstock.charba.client.commons.NativeObjectUtils$impl');
  Scale = goog.module.get('org.pepstock.charba.client.options.Scale$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@type {Merger}*/
Merger.f_INSTANCE__org_pepstock_charba_client_commons_Merger_;
$Util.$setClassMetadata(Merger, "org.pepstock.charba.client.commons.Merger");

exports = Merger;

//# sourceMappingURL=Merger.js.map
