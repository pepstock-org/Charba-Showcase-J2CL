goog.module('org.pepstock.charba.client.impl.charts.BaseMeterChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChart = goog.require('org.pepstock.charba.client.AbstractChart$impl');
const IsDatasetCreator = goog.require('org.pepstock.charba.client.IsDatasetCreator$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let DefaultTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultTransitionKey$impl');
let BaseMeterController = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.BaseMeterController$impl');
let MeterDataset = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterDataset$impl');
let MeterOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
 * @template D
 * @implements {IsDatasetCreator<D>}
 */
class BaseMeterChart extends AbstractChart {
 /** @protected */
 constructor() {
  super();
  /**@type {BaseMeterController}*/
  this.f_meterController__org_pepstock_charba_client_impl_charts_BaseMeterChart_;
 }
 
 $ctor__org_pepstock_charba_client_impl_charts_BaseMeterChart__org_pepstock_charba_client_Type(/** Type */ type) {
  this.$ctor__org_pepstock_charba_client_AbstractChart__org_pepstock_charba_client_Type(type);
  this.$init___$p_org_pepstock_charba_client_impl_charts_BaseMeterChart();
 }
 /** @abstract @return {D} */
 m_newDataset__double(/** number */ max) {}
 /** @abstract @return {ControllerType} */
 m_getControllerType___$pp_org_pepstock_charba_client_impl_charts() {}
 /** @return {BaseMeterController} */
 m_getController___$pp_org_pepstock_charba_client_impl_charts() {
  return this.f_meterController__org_pepstock_charba_client_impl_charts_BaseMeterChart_;
 }
 /** @override */
 m_applyConfiguration__() {
  let type = this.m_getControllerType___$pp_org_pepstock_charba_client_impl_charts();
  if (type.m_register__() && $Equality.$same(this.f_meterController__org_pepstock_charba_client_impl_charts_BaseMeterChart_, null)) {
   let controllerInstance = Defaults.m_get__().m_getControllers__().m_getController__org_pepstock_charba_client_controllers_ControllerType(type);
   Checker.m_assertCheck__boolean__java_lang_String(BaseMeterController.$isInstance(controllerInstance), "Controller stored for " + j_l_String.m_valueOf__java_lang_Object(this.m_getControllerType___$pp_org_pepstock_charba_client_impl_charts().m_value__()) + " is not a " + j_l_String.m_valueOf__java_lang_Object(Class.$get(BaseMeterController).m_getName__()));
   this.f_meterController__org_pepstock_charba_client_impl_charts_BaseMeterChart_ = /**@type {BaseMeterController}*/ ($Casts.$to(controllerInstance, BaseMeterController));
  }
  let /** MeterOptions */ options;
  Checker.m_assertCheck__boolean__java_lang_String(MeterOptions.$isInstance(this.m_getOptions__()), "Chart options are " + j_l_String.m_valueOf__java_lang_Object($Objects.m_getClass__java_lang_Object(this.m_getOptions__()).m_getName__()) + " and not a " + j_l_String.m_valueOf__java_lang_Object(Class.$get(MeterOptions).m_getName__()));
  options = /**@type {MeterOptions}*/ ($Casts.$to(this.m_getOptions__(), MeterOptions));
  options.m_getLegend__().m_setDisplay__boolean(false);
  options.m_getTooltips__().m_setEnabled__boolean(false);
  options.m_getTooltips__().m_setExternalCallback__org_pepstock_charba_client_callbacks_TooltipExternalCallback(null);
  let disabledActiveMode = options.m_getTransitions__().m_create__org_pepstock_charba_client_options_TransitionKey(DefaultTransitionKey.f_ACTIVE__org_pepstock_charba_client_enums_DefaultTransitionKey);
  disabledActiveMode.m_getAnimation__().m_setDuration__int(0);
  let disabledResizeMode = options.m_getTransitions__().m_create__org_pepstock_charba_client_options_TransitionKey(DefaultTransitionKey.f_RESIZE__org_pepstock_charba_client_enums_DefaultTransitionKey);
  disabledResizeMode.m_getAnimation__().m_setDuration__int(0);
  for (let $iterator = this.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_getTransitions__().m_create__org_pepstock_charba_client_options_TransitionKey(DefaultTransitionKey.f_ACTIVE__org_pepstock_charba_client_enums_DefaultTransitionKey).m_getAnimation__().m_setDuration__int(0);
    dataset.m_getTransitions__().m_create__org_pepstock_charba_client_options_TransitionKey(DefaultTransitionKey.f_RESIZE__org_pepstock_charba_client_enums_DefaultTransitionKey).m_getAnimation__().m_setDuration__int(0);
   }
  }
  options.m_resetFontItem___$pp_org_pepstock_charba_client_impl_charts();
 }
 //Default method forwarding stub.
 /** @override @return {D} */
 m_newDataset__() {
  return /**@type {D}*/ ($Casts.$to(IsDatasetCreator.m_newDataset__$default__org_pepstock_charba_client_IsDatasetCreator(this), MeterDataset));
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_charts_BaseMeterChart() {
  this.f_meterController__org_pepstock_charba_client_impl_charts_BaseMeterChart_ = null;
 }
 
 static $clinit() {
  BaseMeterChart.$clinit = () =>{};
  BaseMeterChart.$loadModules();
  AbstractChart.$clinit();
  IsDatasetCreator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseMeterChart;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  DefaultTransitionKey = goog.module.get('org.pepstock.charba.client.enums.DefaultTransitionKey$impl');
  BaseMeterController = goog.module.get('org.pepstock.charba.client.impl.charts.BaseMeterController$impl');
  MeterDataset = goog.module.get('org.pepstock.charba.client.impl.charts.MeterDataset$impl');
  MeterOptions = goog.module.get('org.pepstock.charba.client.impl.charts.MeterOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {number}*/
BaseMeterChart.f_DEFAULT_MAX__org_pepstock_charba_client_impl_charts_BaseMeterChart = 100;
IsDatasetCreator.$markImplementor(BaseMeterChart);
$Util.$setClassMetadata(BaseMeterChart, "org.pepstock.charba.client.impl.charts.BaseMeterChart");

exports = BaseMeterChart;

//# sourceMappingURL=BaseMeterChart.js.map
