goog.module('org.pepstock.charba.client.impl.callbacks.NoSelectedDatasetTicksCallback$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TickCallback = goog.require('org.pepstock.charba.client.callbacks.TickCallback$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');

/**
 * @implements {TickCallback}
 */
class NoSelectedDatasetTicksCallback extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_precision__org_pepstock_charba_client_impl_callbacks_NoSelectedDatasetTicksCallback_ = 0;
 }
 //Factory method corresponding to constructor 'NoSelectedDatasetTicksCallback()'.
 /** @return {!NoSelectedDatasetTicksCallback} */
 static $create__() {
  NoSelectedDatasetTicksCallback.$clinit();
  let $instance = new NoSelectedDatasetTicksCallback();
  $instance.$ctor__org_pepstock_charba_client_impl_callbacks_NoSelectedDatasetTicksCallback__();
  return $instance;
 }
 //Initialization from constructor 'NoSelectedDatasetTicksCallback()'.
 
 $ctor__org_pepstock_charba_client_impl_callbacks_NoSelectedDatasetTicksCallback__() {
  this.$ctor__org_pepstock_charba_client_impl_callbacks_NoSelectedDatasetTicksCallback__int(NoSelectedDatasetTicksCallback.f_DEFAULT_PRECISION__org_pepstock_charba_client_impl_callbacks_NoSelectedDatasetTicksCallback);
 }
 //Factory method corresponding to constructor 'NoSelectedDatasetTicksCallback(int)'.
 /** @return {!NoSelectedDatasetTicksCallback} */
 static $create__int(/** number */ precision) {
  NoSelectedDatasetTicksCallback.$clinit();
  let $instance = new NoSelectedDatasetTicksCallback();
  $instance.$ctor__org_pepstock_charba_client_impl_callbacks_NoSelectedDatasetTicksCallback__int(precision);
  return $instance;
 }
 //Initialization from constructor 'NoSelectedDatasetTicksCallback(int)'.
 
 $ctor__org_pepstock_charba_client_impl_callbacks_NoSelectedDatasetTicksCallback__int(/** number */ precision) {
  this.$ctor__java_lang_Object__();
  this.f_precision__org_pepstock_charba_client_impl_callbacks_NoSelectedDatasetTicksCallback_ = precision;
 }
 /** @return {number} */
 m_getPrecision__() {
  return this.f_precision__org_pepstock_charba_client_impl_callbacks_NoSelectedDatasetTicksCallback_;
 }
 /** @override @return {?string} */
 m_onCallback__org_pepstock_charba_client_configuration_Axis__double__int__java_util_List(/** Axis */ axis, /** number */ value, /** number */ index, /** List<?number> */ values) {
  if (!$Equality.$same(axis, null) && IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(axis.m_getChart__())) {
   let chart = axis.m_getChart__();
   let allHidden = false;
   let dss = chart.m_getData__().m_getDatasets__();
   for (let i = 0; i < dss.size(); i = i + 1 | 0) {
    let datasetItem = chart.m_getDatasetItem__int(i);
    if (!$Equality.$same(datasetItem, null)) {
     allHidden = allHidden || datasetItem.m_isHidden__();
    }
   }
   if (allHidden) {
    return Utilities.m_applyPrecision__double__int(value, this.f_precision__org_pepstock_charba_client_impl_callbacks_NoSelectedDatasetTicksCallback_);
   }
  }
  return j_l_String.m_valueOf__double(value);
 }
 
 static $clinit() {
  NoSelectedDatasetTicksCallback.$clinit = () =>{};
  NoSelectedDatasetTicksCallback.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NoSelectedDatasetTicksCallback;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
 }
}
/**@const {number}*/
NoSelectedDatasetTicksCallback.f_DEFAULT_PRECISION__org_pepstock_charba_client_impl_callbacks_NoSelectedDatasetTicksCallback = 1;
TickCallback.$markImplementor(NoSelectedDatasetTicksCallback);
$Util.$setClassMetadata(NoSelectedDatasetTicksCallback, "org.pepstock.charba.client.impl.callbacks.NoSelectedDatasetTicksCallback");

exports = NoSelectedDatasetTicksCallback;

//# sourceMappingURL=NoSelectedDatasetTicksCallback.js.map
