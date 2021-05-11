goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendMaxItemsCase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let MarginRightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let HTMLOptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionElement.$Overlay$impl');
let HTMLSelectElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLSelectElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let HtmlLegend = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegend$impl');
let HtmlLegendOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class HtmlLegendMaxItemsCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_;
  /**@type {HTMLSelectElement}*/
  this.f_maxItems__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_;
 }
 /** @return {!HtmlLegendMaxItemsCase} */
 static $create__() {
  HtmlLegendMaxItemsCase.$clinit();
  let $instance = new HtmlLegendMaxItemsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  let maxItems1 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  maxItems1.text = "Default";
  maxItems1.value = j_l_String.m_valueOf__int(HtmlLegendOptions.f_DEFAULT_MAXIMUM_LEGEND_COLUMNS__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions);
  this.f_maxItems__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.add(maxItems1);
  let maxItems2 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  maxItems2.text = "8";
  maxItems2.value = j_l_String.m_valueOf__int(8);
  this.f_maxItems__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.add(maxItems2);
  let maxItems3 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  maxItems3.text = "6";
  maxItems3.value = j_l_String.m_valueOf__int(6);
  this.f_maxItems__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.add(maxItems3);
  let maxItems4 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  maxItems4.text = "4";
  maxItems4.value = j_l_String.m_valueOf__int(4);
  this.f_maxItems__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.add(maxItems4);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getOptions__().m_setAspectRatio__double(2.5);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getOptions__().m_setMaintainAspectRatio__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getOptions__().m_getLegend__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getOptions__().m_getLegend__().m_getTitle__().m_setText__java_lang_String("HTML legend setting max items on line chart");
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getOptions__().m_getLegend__().m_getTitle__().m_getPadding__().m_set__int(10);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getOptions__().m_getLegend__().m_getTitle__().m_getFont__().m_setSize__int(Defaults.m_get__().m_getGlobal__().m_getTitle__().m_getFont__().m_getSize__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getOptions__().m_getLegend__().m_getTitle__().m_getFont__().m_setStyle__org_pepstock_charba_client_enums_FontStyle(FontStyle.f_BOLD__org_pepstock_charba_client_enums_FontStyle);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getOptions__().m_getTooltips__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(InteractionMode.f_INDEX__org_pepstock_charba_client_enums_InteractionMode);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getOptions__().m_getTooltips__().m_setIntersect__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getOptions__().m_getHover__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(InteractionMode.f_NEAREST__org_pepstock_charba_client_enums_InteractionMode);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getOptions__().m_getHover__().m_setIntersect__boolean(true);
  let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getData__().m_getDatasets__boolean(true);
  let dataset1 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_newDataset__(), LineDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setBorderColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setFill__boolean(false);
  let values = this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite);
  let data = dataset1.m_getData__boolean(true);
  for (let i = 0; i < values.length; i = i + 1 | 0) {
   data.add(values[i]);
  }
  datasets.add(dataset1);
  let dataset2 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_newDataset__(), LineDataset));
  dataset2.m_setLabel__java_lang_String("dataset 2");
  let color2 = GoogleChartColor.m_values__()[1];
  dataset2.m_setBackgroundColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setBorderColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  dataset2.m_setFill__boolean(false);
  datasets.add(dataset2);
  let axis1 = CartesianCategoryAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_);
  axis1.m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Month"], j_l_String)));
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Value"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getPlugins__().m_add__org_pepstock_charba_client_Plugin(HtmlLegend.m_get__());
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.appendChild(actionsRow);
  let actionsCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  actionsCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  actionsCol.style.textAlign = "center";
  actionsCol.vAlign = "middle";
  actionsRow.appendChild(actionsCol);
  let randomize = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  randomize.onclick = (/** Event */ p0) =>{
   this.m_handleRandomize__();
   return null;
  };
  randomize.className = "gwt-Button";
  randomize.textContent = "Randomize data";
  randomize.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(randomize);
  let addDataset = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  addDataset.onclick = (/** Event */ p0_1) =>{
   this.m_handleAddDataset__();
   return null;
  };
  addDataset.className = "gwt-Button";
  addDataset.textContent = "Add dataset";
  addDataset.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(addDataset);
  let removeDataset = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  removeDataset.onclick = (/** Event */ p0_2) =>{
   this.m_handleRemoveDataset__();
   return null;
  };
  removeDataset.className = "gwt-Button";
  removeDataset.textContent = "Remove dataset";
  removeDataset.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(removeDataset);
  let addData = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  addData.onclick = (/** Event */ p0_3) =>{
   this.m_handleAddData__();
   return null;
  };
  addData.className = "gwt-Button";
  addData.textContent = "Add data";
  addData.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(addData);
  let removeData = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  removeData.onclick = (/** Event */ p0_4) =>{
   this.m_handleRemoveData__();
   return null;
  };
  removeData.className = "gwt-Button";
  removeData.textContent = "Remove data";
  removeData.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(removeData);
  let maxItemsId = "maxItems" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForMaxItems = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForMaxItems.htmlFor = maxItemsId;
  labelForMaxItems.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Max legend items per row "));
  actionsCol.appendChild(labelForMaxItems);
  this.f_maxItems__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.id = maxItemsId;
  this.f_maxItems__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.onchange = (/** Event */ p0_5) =>{
   this.m_handleMaxItems__();
   return null;
  };
  this.f_maxItems__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.className = "gwt-ListBox";
  this.f_maxItems__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_maxItems__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_6) =>{
   goog.global.window.open(this.m_getUrl__(), "_blank", "");
   return null;
  };
  github.className = "gwt-Button";
  let img = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), HTMLImageElement_$Overlay));
  img.src = "images/GitHub-Mark-32px.png";
  github.appendChild(img);
  actionsCol.appendChild(github);
 }
 /** @override @return {HTMLElement} */
 m_getElement__() {
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_update__();
 }
 
 m_handleMaxItems__() {
  let selected = /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_maxItems__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.options, this.f_maxItems__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  let options = /**@type {HtmlLegendOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(HtmlLegend.f_ID__org_pepstock_charba_client_impl_plugins_HtmlLegend, HtmlLegend.f_FACTORY__org_pepstock_charba_client_impl_plugins_HtmlLegend), HtmlLegendOptions));
  options.m_setMaximumLegendColumns__int(Integer.m_parseInt__java_lang_String(selected));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(HtmlLegend.f_ID__org_pepstock_charba_client_impl_plugins_HtmlLegend, options);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_reconfigure__();
 }
 
 m_handleAddDataset__() {
  let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_getData__().m_getDatasets__();
  let dataset = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_newDataset__(), LineDataset));
  dataset.m_setLabel__java_lang_String("dataset " + (datasets.size() + 1 | 0));
  let color = GoogleChartColor.m_values__()[datasets.size()];
  dataset.m_setBackgroundColor__java_lang_String(color.m_toHex__());
  dataset.m_setBorderColor__java_lang_String(color.m_toHex__());
  dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  dataset.m_setFill__boolean(false);
  datasets.add(dataset);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_.m_update__();
 }
 
 m_handleRemoveDataset__() {
  this.m_removeDataset__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_);
 }
 
 m_handleAddData__() {
  this.m_addData__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_);
 }
 
 m_handleRemoveData__() {
  this.m_removeData__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_ = LineChart.$create__();
  this.f_maxItems__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendMaxItemsCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
 }
 
 static $clinit() {
  HtmlLegendMaxItemsCase.$clinit = () =>{};
  HtmlLegendMaxItemsCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlLegendMaxItemsCase;
 }
 
 static $loadModules() {
  MarginRightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  Document_$Overlay = goog.module.get('elemental2.dom.Document.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  HTMLOptionElement_$Overlay = goog.module.get('elemental2.dom.HTMLOptionElement.$Overlay$impl');
  HTMLSelectElement_$Overlay = goog.module.get('elemental2.dom.HTMLSelectElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  FontStyle = goog.module.get('org.pepstock.charba.client.enums.FontStyle$impl');
  InteractionMode = goog.module.get('org.pepstock.charba.client.enums.InteractionMode$impl');
  HtmlLegend = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegend$impl');
  HtmlLegendOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(HtmlLegendMaxItemsCase, "org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendMaxItemsCase");

exports = HtmlLegendMaxItemsCase;

//# sourceMappingURL=HtmlLegendMaxItemsCase.js.map
