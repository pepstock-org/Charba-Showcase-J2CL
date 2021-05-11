goog.module('org.pepstock.charba.client.impl.plugins.ChartBackgroundGradientFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CanvasObjectFactory = goog.require('org.pepstock.charba.client.colors.CanvasObjectFactory$impl');

let AbstractChart = goog.forwardDeclare('org.pepstock.charba.client.AbstractChart$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Area = goog.forwardDeclare('org.pepstock.charba.client.colors.Area$impl');
let Center = goog.forwardDeclare('org.pepstock.charba.client.colors.Center$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let Radius = goog.forwardDeclare('org.pepstock.charba.client.colors.Radius$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ChartBackgroundColor = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ChartBackgroundGradientFactory extends CanvasObjectFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ChartBackgroundGradientFactory} */
 static $create__() {
  let $instance = new ChartBackgroundGradientFactory();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundGradientFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundGradientFactory__() {
  this.$ctor__org_pepstock_charba_client_colors_CanvasObjectFactory__org_pepstock_charba_client_commons_Key(Key.m_create__java_lang_String(ChartBackgroundColor.f_ID__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor));
 }
 /** @return {ChartBackgroundGradientFactory} */
 static m_get__() {
  ChartBackgroundGradientFactory.$clinit();
  return ChartBackgroundGradientFactory.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartBackgroundGradientFactory_;
 }
 /** @override @return {Area} */
 m_getArea__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient(/** IsChart */ chart, /** Gradient */ gradient) {
  let area = Area.$create__();
  area.m_setTop__double(0);
  area.m_setLeft__double(0);
  if (IsChart.m_isAbstractChart__org_pepstock_charba_client_IsChart(chart)) {
   let abstractChart = /**@type {AbstractChart}*/ ($Casts.$to(chart, AbstractChart));
   let element = abstractChart.m_getChartElement__();
   area.m_setRight__double(element.offsetWidth);
   area.m_setBottom__double(element.offsetHeight);
  } else if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   let canvas = chart.m_getCanvas__();
   area.m_setRight__double(canvas.offsetWidth);
   area.m_setBottom__double(canvas.offsetHeight);
  }
  return area;
 }
 /** @override @return {Center} */
 m_getCenter__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient__int__int(/** IsChart */ chart, /** Gradient */ gradient, /** number */ datasetIndex, /** number */ index) {
  let center = Center.$create__();
  if (IsChart.m_isAbstractChart__org_pepstock_charba_client_IsChart(chart)) {
   let abstractChart = /**@type {AbstractChart}*/ ($Casts.$to(chart, AbstractChart));
   let element = abstractChart.m_getChartElement__();
   center.m_setX__double(element.offsetWidth / 2);
   center.m_setY__double(element.offsetHeight / 2);
  } else if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   let canvas = chart.m_getCanvas__();
   center.m_setX__double(canvas.offsetWidth / 2);
   center.m_setY__double(canvas.offsetHeight / 2);
  }
  return center;
 }
 /** @override @return {Radius} */
 m_getRadius__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient__int__int(/** IsChart */ chart, /** Gradient */ gradient, /** number */ datasetIndex, /** number */ index) {
  let radius = Radius.$create__();
  radius.m_setInner__double(0);
  if (IsChart.m_isAbstractChart__org_pepstock_charba_client_IsChart(chart)) {
   let abstractChart = /**@type {AbstractChart}*/ ($Casts.$to(chart, AbstractChart));
   let element = abstractChart.m_getChartElement__();
   radius.m_setOuter__double(Math.max(element.offsetWidth, element.offsetHeight) / 2);
  } else if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   let canvas = chart.m_getCanvas__();
   radius.m_setOuter__double(Math.max(canvas.offsetWidth, canvas.offsetHeight) / 2);
  }
  return radius;
 }
 
 static $clinit() {
  ChartBackgroundGradientFactory.$clinit = () =>{};
  ChartBackgroundGradientFactory.$loadModules();
  CanvasObjectFactory.$clinit();
  ChartBackgroundGradientFactory.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartBackgroundGradientFactory_ = ChartBackgroundGradientFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartBackgroundGradientFactory;
 }
 
 static $loadModules() {
  AbstractChart = goog.module.get('org.pepstock.charba.client.AbstractChart$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Area = goog.module.get('org.pepstock.charba.client.colors.Area$impl');
  Center = goog.module.get('org.pepstock.charba.client.colors.Center$impl');
  Radius = goog.module.get('org.pepstock.charba.client.colors.Radius$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ChartBackgroundColor = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {ChartBackgroundGradientFactory}*/
ChartBackgroundGradientFactory.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartBackgroundGradientFactory_;
$Util.$setClassMetadata(ChartBackgroundGradientFactory, "org.pepstock.charba.client.impl.plugins.ChartBackgroundGradientFactory");

exports = ChartBackgroundGradientFactory;

//# sourceMappingURL=ChartBackgroundGradientFactory.js.map
