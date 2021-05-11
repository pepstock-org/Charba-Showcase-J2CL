goog.module('org.pepstock.charba.client.impl.callbacks.AtLeastOneDatasetHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendClickEventHandler = goog.require('org.pepstock.charba.client.events.LegendClickEventHandler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let LegendClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendClickEvent$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

/**
 * @implements {LegendClickEventHandler}
 */
class AtLeastOneDatasetHandler extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AtLeastOneDatasetHandler} */
 static $create__() {
  AtLeastOneDatasetHandler.$clinit();
  let $instance = new AtLeastOneDatasetHandler();
  $instance.$ctor__org_pepstock_charba_client_impl_callbacks_AtLeastOneDatasetHandler__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_callbacks_AtLeastOneDatasetHandler__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_events_LegendClickEvent(/** LegendClickEvent */ event) {
  if (!$Equality.$same(event, null) && IsChart.m_isValid__org_pepstock_charba_client_IsChart(event.m_getChart__())) {
   let chart = event.m_getChart__();
   if (Undefined.m_isNot__int(event.m_getItem__().m_getDatasetIndex__())) {
    if (chart.m_isDatasetVisible__int(event.m_getItem__().m_getDatasetIndex__()) && !this.m_checkByDatasetIndex__org_pepstock_charba_client_IsChart__int_$p_org_pepstock_charba_client_impl_callbacks_AtLeastOneDatasetHandler(chart, event.m_getItem__().m_getDatasetIndex__())) {
     return;
    }
    Defaults.m_get__().m_invokeLegendOnClick__org_pepstock_charba_client_events_LegendClickEvent(event);
   } else if (Undefined.m_isNot__int(event.m_getItem__().m_getIndex__())) {
    if (chart.m_isDataVisible__int(event.m_getItem__().m_getIndex__()) && !this.m_checkByIndex__org_pepstock_charba_client_IsChart__int_$p_org_pepstock_charba_client_impl_callbacks_AtLeastOneDatasetHandler(chart, event.m_getItem__().m_getIndex__())) {
     return;
    }
    Defaults.m_get__().m_invokeLegendOnClick__org_pepstock_charba_client_events_LegendClickEvent(event);
   }
  }
 }
 /** @return {boolean} */
 m_checkByDatasetIndex__org_pepstock_charba_client_IsChart__int_$p_org_pepstock_charba_client_impl_callbacks_AtLeastOneDatasetHandler(/** IsChart */ chart, /** number */ datasetIndex) {
  let dss = chart.m_getData__().m_getDatasets__();
  for (let i = 0; i < dss.size(); i = i + 1 | 0) {
   if (i != datasetIndex && chart.m_isDatasetVisible__int(i)) {
    return true;
   }
  }
  return false;
 }
 /** @return {boolean} */
 m_checkByIndex__org_pepstock_charba_client_IsChart__int_$p_org_pepstock_charba_client_impl_callbacks_AtLeastOneDatasetHandler(/** IsChart */ chart, /** number */ index) {
  let dss = chart.m_getData__().m_getDatasets__();
  for (let i = 0; i < dss.size(); i = i + 1 | 0) {
   if (chart.m_isDatasetVisible__int(i)) {
    let datasetItem = chart.m_getDatasetItem__int(i);
    let items = datasetItem.m_getElements__();
    for (let k = 0; k < items.size(); k = k + 1 | 0) {
     if (k != index && chart.m_isDataVisible__int(k)) {
      return true;
     }
    }
   }
  }
  return false;
 }
 
 static $clinit() {
  AtLeastOneDatasetHandler.$clinit = () =>{};
  AtLeastOneDatasetHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AtLeastOneDatasetHandler;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
LegendClickEventHandler.$markImplementor(AtLeastOneDatasetHandler);
$Util.$setClassMetadata(AtLeastOneDatasetHandler, "org.pepstock.charba.client.impl.callbacks.AtLeastOneDatasetHandler");

exports = AtLeastOneDatasetHandler;

//# sourceMappingURL=AtLeastOneDatasetHandler.js.map
