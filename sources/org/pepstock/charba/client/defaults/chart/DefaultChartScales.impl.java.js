goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartScales$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScales = goog.require('org.pepstock.charba.client.defaults.IsDefaultScales$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultScale = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScale$impl');
let DefaultChartScale = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartScale$impl');
let DefaultsBuilder = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');
let Scales = goog.forwardDeclare('org.pepstock.charba.client.options.Scales$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {IsDefaultScales}
 */
class DefaultChartScales extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Scales}*/
  this.f_scales__org_pepstock_charba_client_defaults_chart_DefaultChartScales_;
 }
 /** @return {!DefaultChartScales} */
 static $create__org_pepstock_charba_client_options_Scales(/** Scales */ scales) {
  DefaultChartScales.$clinit();
  let $instance = new DefaultChartScales();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartScales__org_pepstock_charba_client_options_Scales(scales);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartScales__org_pepstock_charba_client_options_Scales(/** Scales */ scales) {
  this.$ctor__java_lang_Object__();
  this.f_scales__org_pepstock_charba_client_defaults_chart_DefaultChartScales_ = /**@type {Scales}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(scales, "Scales instance"), Scales));
 }
 /** @override @return {IsDefaultScale} */
 m_getAxis__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(/** IsScaleId */ scaleId, /** AxisKind */ kind) {
  if (IsScaleId.m_isValid__org_pepstock_charba_client_options_IsScaleId(scaleId)) {
   if (this.f_scales__org_pepstock_charba_client_defaults_chart_DefaultChartScales_.m_hasAxis__org_pepstock_charba_client_options_IsScaleId(scaleId)) {
    return DefaultChartScale.$create__org_pepstock_charba_client_options_Scale(this.f_scales__org_pepstock_charba_client_defaults_chart_DefaultChartScales_.m_getAxis__org_pepstock_charba_client_options_IsScaleId(scaleId));
   } else {
    let result = this.m_searchByDefaultScaleId__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind_$p_org_pepstock_charba_client_defaults_chart_DefaultChartScales(scaleId, kind);
    if (!$Equality.$same(result, null)) {
     return result;
    }
   }
  }
  return DefaultsBuilder.m_get__().m_getScale__();
 }
 /** @return {DefaultChartScale} */
 m_searchByDefaultScaleId__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind_$p_org_pepstock_charba_client_defaults_chart_DefaultChartScales(/** IsScaleId */ scaleId, /** AxisKind */ kind) {
  for (let $array = DefaultScaleId.m_values__(), $index = 0; $index < $array.length; $index++) {
   let defScaleId = $array[$index];
   {
    if (defScaleId.m_is__org_pepstock_charba_client_options_IsScaleId(scaleId) && this.f_scales__org_pepstock_charba_client_defaults_chart_DefaultChartScales_.m_hasAxis__org_pepstock_charba_client_options_IsScaleId(defScaleId)) {
     return DefaultChartScale.$create__org_pepstock_charba_client_options_Scale(this.f_scales__org_pepstock_charba_client_defaults_chart_DefaultChartScales_.m_getAxis__org_pepstock_charba_client_options_IsScaleId(defScaleId));
    }
   }
  }
  return this.m_searchByAxisKind__org_pepstock_charba_client_enums_AxisKind_$p_org_pepstock_charba_client_defaults_chart_DefaultChartScales(kind);
 }
 /** @return {DefaultChartScale} */
 m_searchByAxisKind__org_pepstock_charba_client_enums_AxisKind_$p_org_pepstock_charba_client_defaults_chart_DefaultChartScales(/** AxisKind */ kind) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(kind)) {
   let defScaleId = DefaultScaleId.m_getByAxisKind__org_pepstock_charba_client_enums_AxisKind__org_pepstock_charba_client_enums_DefaultScaleId(kind, DefaultScaleId.f_UNKNOWN__org_pepstock_charba_client_enums_DefaultScaleId);
   if (!$Objects.m_equals__java_lang_Object__java_lang_Object(DefaultScaleId.f_UNKNOWN__org_pepstock_charba_client_enums_DefaultScaleId, defScaleId) && this.f_scales__org_pepstock_charba_client_defaults_chart_DefaultChartScales_.m_hasAxis__org_pepstock_charba_client_options_IsScaleId(defScaleId)) {
    return DefaultChartScale.$create__org_pepstock_charba_client_options_Scale(this.f_scales__org_pepstock_charba_client_defaults_chart_DefaultChartScales_.m_getAxis__org_pepstock_charba_client_options_IsScaleId(defScaleId));
   }
   if (this.f_scales__org_pepstock_charba_client_defaults_chart_DefaultChartScales_.m_hasAxis__java_lang_String(DefaultScaleId.f_DEFAULT_X_FOR_BAR_AND_LINE_OPTIONS__org_pepstock_charba_client_enums_DefaultScaleId) && $Objects.m_equals__java_lang_Object__java_lang_Object(AxisKind.f_X__org_pepstock_charba_client_enums_AxisKind, kind)) {
    return DefaultChartScale.$create__org_pepstock_charba_client_options_Scale(this.f_scales__org_pepstock_charba_client_defaults_chart_DefaultChartScales_.m_getAxis__java_lang_String(DefaultScaleId.f_DEFAULT_X_FOR_BAR_AND_LINE_OPTIONS__org_pepstock_charba_client_enums_DefaultScaleId));
   } else if (this.f_scales__org_pepstock_charba_client_defaults_chart_DefaultChartScales_.m_hasAxis__java_lang_String(DefaultScaleId.f_DEFAULT_Y_FOR_BAR_AND_LINE_OPTIONS__org_pepstock_charba_client_enums_DefaultScaleId) && $Objects.m_equals__java_lang_Object__java_lang_Object(AxisKind.f_Y__org_pepstock_charba_client_enums_AxisKind, kind)) {
    return DefaultChartScale.$create__org_pepstock_charba_client_options_Scale(this.f_scales__org_pepstock_charba_client_defaults_chart_DefaultChartScales_.m_getAxis__java_lang_String(DefaultScaleId.f_DEFAULT_Y_FOR_BAR_AND_LINE_OPTIONS__org_pepstock_charba_client_enums_DefaultScaleId));
   }
  }
  return null;
 }
 
 static $clinit() {
  DefaultChartScales.$clinit = () =>{};
  DefaultChartScales.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartScales;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  DefaultChartScale = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartScale$impl');
  DefaultsBuilder = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  IsScaleId = goog.module.get('org.pepstock.charba.client.options.IsScaleId$impl');
  Scales = goog.module.get('org.pepstock.charba.client.options.Scales$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
IsDefaultScales.$markImplementor(DefaultChartScales);
$Util.$setClassMetadata(DefaultChartScales, "org.pepstock.charba.client.defaults.chart.DefaultChartScales");

exports = DefaultChartScales;

//# sourceMappingURL=DefaultChartScales.js.map
