goog.module('org.pepstock.charba.showcase.j2cl.App$impl');

const EntryPoint = goog.require('com.google.gwt.core.client.EntryPoint$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Charba = goog.forwardDeclare('org.pepstock.charba.client.Charba$impl');
let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let AnnotationPlugin = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
let DataLabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
let DataLabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
let GaugeChart = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.GaugeChart$impl');
let MeterChart = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterChart$impl');
let ChartBackgroundColor = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');
let LabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsPlugin$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.utils.Window.$Overlay$impl');
let ZoomPlugin = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
let Images = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.Images$impl');
let MyHorizontalBarController = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarController$impl');
let MyLineChart = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart$impl');
let MainView = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MainView$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {EntryPoint}
 */
class App extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!App} */
 static $create__() {
  App.$clinit();
  let $instance = new App();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_App__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_App__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onModuleLoad__() {
  Images.m_get__();
  Charba.m_enable__();
  this.m_start___$p_org_pepstock_charba_showcase_j2cl_App();
 }
 
 m_start___$p_org_pepstock_charba_showcase_j2cl_App() {
  $Overlay.m_enableResizeOnBeforePrint__();
  Defaults.m_get__().m_getGlobal__().m_getFont__().m_setFamily__java_lang_String("'Lato', sans-serif");
  Defaults.m_get__().m_getGlobal__().m_getTitle__().m_getFont__().m_setSize__int(16);
  Defaults.m_get__().m_getPlugins__().m_register__org_pepstock_charba_client_Plugin(ChartBackgroundColor.$create__());
  Defaults.m_get__().m_getOptions__org_pepstock_charba_client_Type(ChartType.f_LINE__org_pepstock_charba_client_ChartType).m_getElements__().m_getLine__().m_setTension__double(0.4);
  Defaults.m_get__().m_getOptions__org_pepstock_charba_client_Type(ChartType.f_PIE__org_pepstock_charba_client_ChartType).m_setAspectRatio__double(2);
  Defaults.m_get__().m_getOptions__org_pepstock_charba_client_Type(ChartType.f_POLAR_AREA__org_pepstock_charba_client_ChartType).m_setAspectRatio__double(2);
  Defaults.m_get__().m_getOptions__org_pepstock_charba_client_Type(ChartType.f_RADAR__org_pepstock_charba_client_ChartType).m_setAspectRatio__double(2);
  Defaults.m_get__().m_getOptions__org_pepstock_charba_client_Type(ChartType.f_DOUGHNUT__org_pepstock_charba_client_ChartType).m_setAspectRatio__double(2);
  Defaults.m_get__().m_getOptions__org_pepstock_charba_client_Type(MeterChart.f_CONTROLLER_TYPE__org_pepstock_charba_client_impl_charts_MeterChart).m_setAspectRatio__double(2);
  Defaults.m_get__().m_getOptions__org_pepstock_charba_client_Type(GaugeChart.f_CONTROLLER_TYPE__org_pepstock_charba_client_impl_charts_GaugeChart).m_setAspectRatio__double(2);
  MyHorizontalBarController.f_TYPE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController.m_register__();
  MyLineChart.f_TYPE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart.m_register__();
  LabelsPlugin.m_enable__();
  DataLabelsPlugin.m_enable__();
  ZoomPlugin.m_enable__();
  AnnotationPlugin.m_enable__();
  let dataLabelsOption = DataLabelsOptions.$create__();
  dataLabelsOption.m_getPadding__().m_set__int(4);
  dataLabelsOption.m_store__();
  let div = /**@type {HTMLDivElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), HTMLDivElement_$Overlay));
  DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body.appendChild(div);
  let main = MainView.$create__();
  div.appendChild(main.m_getElement__());
 }
 /** @return {boolean} */
 static get f_isDeferred__org_pepstock_charba_showcase_j2cl_App() {
  return (App.$clinit(), App.$static_isDeferred__org_pepstock_charba_showcase_j2cl_App);
 }
 
 static set f_isDeferred__org_pepstock_charba_showcase_j2cl_App(/** boolean */ value) {
  (App.$clinit(), App.$static_isDeferred__org_pepstock_charba_showcase_j2cl_App = value);
 }
 
 static $clinit() {
  App.$clinit = () =>{};
  App.$loadModules();
  j_l_Object.$clinit();
  App.$static_isDeferred__org_pepstock_charba_showcase_j2cl_App = false;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof App;
 }
 
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Charba = goog.module.get('org.pepstock.charba.client.Charba$impl');
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  AnnotationPlugin = goog.module.get('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
  DataLabelsOptions = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
  DataLabelsPlugin = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
  GaugeChart = goog.module.get('org.pepstock.charba.client.impl.charts.GaugeChart$impl');
  MeterChart = goog.module.get('org.pepstock.charba.client.impl.charts.MeterChart$impl');
  ChartBackgroundColor = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');
  LabelsPlugin = goog.module.get('org.pepstock.charba.client.labels.LabelsPlugin$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.utils.Window.$Overlay$impl');
  ZoomPlugin = goog.module.get('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
  Images = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.commons.Images$impl');
  MyHorizontalBarController = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarController$impl');
  MyLineChart = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart$impl');
  MainView = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MainView$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {?string}*/
App.f_BASE_URL__org_pepstock_charba_showcase_j2cl_App = "https://github.com/pepstock-org/Charba-Showcase-J2CL/blob/3.2/src/main/java/";
/**@private {boolean}*/
App.$static_isDeferred__org_pepstock_charba_showcase_j2cl_App = false;
EntryPoint.$markImplementor(App);
$Util.$setClassMetadata(App, "org.pepstock.charba.showcase.j2cl.App");

/* NATIVE.JS EPILOG */

const org_pepstock_charba_showcase_j2cl_App = App;

// Defer this command
setTimeout(function(){
  // Call the java "constructor" method
  var ep = App.$create__();
  // Invoke onModuleLoad to start the app.
  ep.m_onModuleLoad__()
}, 100);




exports = App;

//# sourceMappingURL=App.js.map
