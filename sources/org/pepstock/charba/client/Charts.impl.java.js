goog.module('org.pepstock.charba.client.Charts$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.Chart.$Overlay$impl');
let ChartsLifecycleListener = goog.forwardDeclare('org.pepstock.charba.client.ChartsLifecycleListener$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Charts extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Charts} */
 static $create__() {
  let $instance = new Charts();
  $instance.$ctor__org_pepstock_charba_client_Charts__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_Charts__() {
  this.$ctor__java_lang_Object__();
 }
 
 static m_addLifecycleListener__org_pepstock_charba_client_ChartsLifecycleListener(/** ChartsLifecycleListener */ listener) {
  Charts.$clinit();
  Charts.f_LISTENERS__org_pepstock_charba_client_Charts_.add(/**@type {ChartsLifecycleListener}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(listener, "Chart lifecycle listener"), ChartsLifecycleListener)));
 }
 
 static m_removeLifecycleListener__org_pepstock_charba_client_ChartsLifecycleListener(/** ChartsLifecycleListener */ listener) {
  Charts.$clinit();
  if (!$Equality.$same(listener, null)) {
   Charts.f_LISTENERS__org_pepstock_charba_client_Charts_.remove(listener);
  }
 }
 
 static m_add__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  Charts.$clinit();
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   let prevChart = /**@type {IsChart}*/ ($Casts.$to(Charts.f_CHARTS_INSTANCES__org_pepstock_charba_client_Charts_.put(chart.m_getId__(), chart), IsChart));
   if ($Equality.$same(prevChart, null)) {
    for (let $iterator = Charts.f_LISTENERS__org_pepstock_charba_client_Charts_.m_iterator__(); $iterator.m_hasNext__(); ) {
     let listener = /**@type {ChartsLifecycleListener}*/ ($Casts.$to($iterator.m_next__(), ChartsLifecycleListener));
     {
      listener.m_onBeforeInit__org_pepstock_charba_client_IsChart(chart);
     }
    }
   }
  }
 }
 
 static m_addNative__org_pepstock_charba_client_Chart(/** Chart */ chart) {
  Charts.$clinit();
  if (!$Equality.$same(chart, null) && !$Equality.$same($Overlay.m_getCharbaId__$devirt__org_pepstock_charba_client_Chart(chart), null)) {
   Charts.f_NATIVE_CHARTS_INSTANCES__org_pepstock_charba_client_Charts_.put($Overlay.m_getCharbaId__$devirt__org_pepstock_charba_client_Chart(chart), chart);
  }
 }
 
 static m_fireAfterInit__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  Charts.$clinit();
  for (let $iterator = Charts.f_LISTENERS__org_pepstock_charba_client_Charts_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let listener = /**@type {ChartsLifecycleListener}*/ ($Casts.$to($iterator.m_next__(), ChartsLifecycleListener));
   {
    listener.m_onAfterInit__org_pepstock_charba_client_IsChart(chart);
   }
  }
 }
 
 static m_fireBeforeConfigure__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  Charts.$clinit();
  for (let $iterator = Charts.f_LISTENERS__org_pepstock_charba_client_Charts_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let listener = /**@type {ChartsLifecycleListener}*/ ($Casts.$to($iterator.m_next__(), ChartsLifecycleListener));
   {
    listener.m_onBeforeConfigure__org_pepstock_charba_client_IsChart(chart);
   }
  }
 }
 
 static m_fireAfterConfigure__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  Charts.$clinit();
  for (let $iterator = Charts.f_LISTENERS__org_pepstock_charba_client_Charts_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let listener = /**@type {ChartsLifecycleListener}*/ ($Casts.$to($iterator.m_next__(), ChartsLifecycleListener));
   {
    listener.m_onAfterConfigure__org_pepstock_charba_client_IsChart(chart);
   }
  }
 }
 
 static m_fireBeforeDestory__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  Charts.$clinit();
  for (let $iterator = Charts.f_LISTENERS__org_pepstock_charba_client_Charts_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let listener = /**@type {ChartsLifecycleListener}*/ ($Casts.$to($iterator.m_next__(), ChartsLifecycleListener));
   {
    listener.m_onBeforeDestroy__org_pepstock_charba_client_IsChart(chart);
   }
  }
 }
 /** @return {IsChart} */
 static m_get__java_lang_String(/** ?string */ chartId) {
  Charts.$clinit();
  if (!$Equality.$same(chartId, null)) {
   return /**@type {IsChart}*/ ($Casts.$to(Charts.f_CHARTS_INSTANCES__org_pepstock_charba_client_Charts_.get(chartId), IsChart));
  }
  return null;
 }
 /** @return {boolean} */
 static m_hasNative__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  Charts.$clinit();
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return Charts.m_hasNative__java_lang_String(chart.m_getId__());
  }
  return false;
 }
 /** @return {boolean} */
 static m_hasNative__java_lang_String(/** ?string */ chartId) {
  Charts.$clinit();
  if (!$Equality.$same(chartId, null)) {
   return Charts.f_NATIVE_CHARTS_INSTANCES__org_pepstock_charba_client_Charts_.containsKey(chartId);
  }
  return false;
 }
 /** @return {Chart} */
 static m_getNative__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  Charts.$clinit();
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return Charts.m_getNative__java_lang_String(chart.m_getId__());
  }
  return null;
 }
 /** @return {Chart} */
 static m_getNative__java_lang_String(/** ?string */ chartId) {
  Charts.$clinit();
  if (!$Equality.$same(chartId, null)) {
   return /**@type {Chart}*/ ($Casts.$to(Charts.f_NATIVE_CHARTS_INSTANCES__org_pepstock_charba_client_Charts_.get(chartId), $Overlay));
  }
  return null;
 }
 
 static m_removeNative__java_lang_String(/** ?string */ chartId) {
  Charts.$clinit();
  if (!$Equality.$same(chartId, null)) {
   Charts.f_NATIVE_CHARTS_INSTANCES__org_pepstock_charba_client_Charts_.remove(chartId);
  }
 }
 
 static m_remove__java_lang_String(/** ?string */ chartId) {
  Charts.$clinit();
  if (!$Equality.$same(chartId, null)) {
   let chart = /**@type {IsChart}*/ ($Casts.$to(Charts.f_CHARTS_INSTANCES__org_pepstock_charba_client_Charts_.remove(chartId), IsChart));
   if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
    for (let $iterator = Charts.f_LISTENERS__org_pepstock_charba_client_Charts_.m_iterator__(); $iterator.m_hasNext__(); ) {
     let listener = /**@type {ChartsLifecycleListener}*/ ($Casts.$to($iterator.m_next__(), ChartsLifecycleListener));
     {
      listener.m_onAfterDestroy__org_pepstock_charba_client_IsChart(chart);
     }
    }
   }
   Charts.m_removeNative__java_lang_String(chartId);
  }
 }
 
 static $clinit() {
  Charts.$clinit = () =>{};
  Charts.$loadModules();
  j_l_Object.$clinit();
  Charts.f_CHARTS_INSTANCES__org_pepstock_charba_client_Charts_ = /**@type {!HashMap<?string, IsChart>}*/ (HashMap.$create__());
  Charts.f_NATIVE_CHARTS_INSTANCES__org_pepstock_charba_client_Charts_ = /**@type {!HashMap<?string, Chart>}*/ (HashMap.$create__());
  Charts.f_LISTENERS__org_pepstock_charba_client_Charts_ = /**@type {!LinkedList<ChartsLifecycleListener>}*/ (LinkedList.$create__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Charts;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.Chart.$Overlay$impl');
  ChartsLifecycleListener = goog.module.get('org.pepstock.charba.client.ChartsLifecycleListener$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Map<?string, IsChart>}*/
Charts.f_CHARTS_INSTANCES__org_pepstock_charba_client_Charts_;
/**@type {Map<?string, Chart>}*/
Charts.f_NATIVE_CHARTS_INSTANCES__org_pepstock_charba_client_Charts_;
/**@type {List<ChartsLifecycleListener>}*/
Charts.f_LISTENERS__org_pepstock_charba_client_Charts_;
$Util.$setClassMetadata(Charts, "org.pepstock.charba.client.Charts");

exports = Charts;

//# sourceMappingURL=Charts.js.map
