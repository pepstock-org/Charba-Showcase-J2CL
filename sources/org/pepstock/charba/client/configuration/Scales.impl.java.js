goog.module('org.pepstock.charba.client.configuration.Scales$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let ScalesOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ScalesOptions$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');
let Scale = goog.forwardDeclare('org.pepstock.charba.client.options.Scale$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Scales extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<?string, Axis>}*/
  this.f_storedAxes__org_pepstock_charba_client_configuration_Scales_;
 }
 /** @return {!Scales} */
 static $create__org_pepstock_charba_client_configuration_ScalesOptions(/** ScalesOptions */ options) {
  Scales.$clinit();
  let $instance = new Scales();
  $instance.$ctor__org_pepstock_charba_client_configuration_Scales__org_pepstock_charba_client_configuration_ScalesOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Scales__org_pepstock_charba_client_configuration_ScalesOptions(/** ScalesOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.$init___$p_org_pepstock_charba_client_configuration_Scales();
 }
 
 m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/** Array<Axis> */ axes) {
  if (!$Equality.$same(axes, null) && axes.length > 0) {
   let chartId = this.m_getOptions__().m_getChart__().m_getId__();
   this.f_storedAxes__org_pepstock_charba_client_configuration_Scales_.clear();
   let scales = /**@type {!Array<Scale>}*/ ($Arrays.$create([axes.length], Scale));
   for (let i = 0; i < axes.length; i = i + 1 | 0) {
    let axisChartId = axes[i].m_getChart__().m_getId__();
    Checker.m_assertCheck__boolean__java_lang_String(j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(chartId, axisChartId), "Chart id " + j_l_String.m_valueOf__java_lang_Object(chartId) + "' of axis '" + j_l_String.m_valueOf__java_lang_Object(axes[i].m_getId__().m_value__()) + "' is not the same of the options: " + j_l_String.m_valueOf__java_lang_Object(chartId));
    $Arrays.$set(scales, i, axes[i].m_getScale___$pp_org_pepstock_charba_client_configuration());
    this.f_storedAxes__org_pepstock_charba_client_configuration_Scales_.put(axes[i].m_getId__().m_value__(), axes[i]);
   }
   this.m_getConfiguration__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_options_Scale(scales);
  }
 }
 /** @return {Axis} */
 m_getAxisById__java_lang_String(/** ?string */ scaleId) {
  return /**@type {Axis}*/ ($Casts.$to(this.f_storedAxes__org_pepstock_charba_client_configuration_Scales_.get(scaleId), Axis));
 }
 /** @return {Axis} */
 m_getAxisById__org_pepstock_charba_client_options_IsScaleId(/** IsScaleId */ scaleId) {
  IsScaleId.m_checkIfValid__org_pepstock_charba_client_options_IsScaleId(scaleId);
  return /**@type {Axis}*/ ($Casts.$to(this.f_storedAxes__org_pepstock_charba_client_configuration_Scales_.get(scaleId.m_value__()), Axis));
 }
 /** @return {List<Axis>} */
 m_getAxes__() {
  let result = this.f_storedAxes__org_pepstock_charba_client_configuration_Scales_.isEmpty() ? /**@type {List<Axis>}*/ (Collections.m_emptyList__()) : /**@type {!LinkedList<Axis>}*/ (LinkedList.$create__java_util_Collection(this.f_storedAxes__org_pepstock_charba_client_configuration_Scales_.values()));
  return /**@type {List<Axis>}*/ (Collections.m_unmodifiableList__java_util_List(result));
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_Scales() {
  this.f_storedAxes__org_pepstock_charba_client_configuration_Scales_ = /**@type {!HashMap<?string, Axis>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  Scales.$clinit = () =>{};
  Scales.$loadModules();
  ConfigurationOptionsContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Scales;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  IsScaleId = goog.module.get('org.pepstock.charba.client.options.IsScaleId$impl');
  Scale = goog.module.get('org.pepstock.charba.client.options.Scale$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Scales, "org.pepstock.charba.client.configuration.Scales");

exports = Scales;

//# sourceMappingURL=Scales.js.map
