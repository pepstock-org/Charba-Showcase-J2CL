goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.ColorSchemeBarCase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let MarginRightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let HTMLOptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionElement.$Overlay$impl');
let HTMLSelectElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLSelectElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let BarChart = goog.forwardDeclare('org.pepstock.charba.client.BarChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let BarBorderWidth = goog.forwardDeclare('org.pepstock.charba.client.data.BarBorderWidth$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let ColorSchemes = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemes$impl');
let ColorSchemesOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');
let BrewerScheme = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.BrewerScheme$impl');
let GoogleChartScheme = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.GoogleChartScheme$impl');
let GwtMaterialScheme = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.GwtMaterialScheme$impl');
let OfficeScheme = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.OfficeScheme$impl');
let SchemeScope = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.SchemeScope$impl');
let TableauScheme = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.TableauScheme$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class ColorSchemeBarCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_;
  /**@type {BarChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_;
  /**@type {HTMLInputElement}*/
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_;
  /**@type {HTMLSelectElement}*/
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_;
  /**@type {HTMLSelectElement}*/
  this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_;
  /**@type {HTMLInputElement}*/
  this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_;
 }
 /** @return {!ColorSchemeBarCase} */
 static $create__() {
  ColorSchemeBarCase.$clinit();
  let $instance = new ColorSchemeBarCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  let category1 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  category1.text = "Brewer";
  category1.value = "brewer";
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.add(category1);
  let category2 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  category2.text = "MS Office";
  category2.value = "office";
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.add(category2);
  let category3 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  category3.text = "Tableau";
  category3.value = "tableau";
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.add(category3);
  let category4 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  category4.text = "GWT material";
  category4.value = "gwtmaterial";
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.add(category4);
  let category5 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  category5.text = "Google Chart";
  category5.value = "googlechart";
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.add(category5);
  let index = 0;
  for (let $array = BrewerScheme.m_values__(), $index = 0; $index < $array.length; $index++) {
   let scheme = $array[$index];
   {
    let schemeN = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
    schemeN.text = scheme.m_value__();
    schemeN.value = scheme.m_value__();
    this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.add(schemeN);
    if ($Objects.m_equals__java_lang_Object__java_lang_Object(BrewerScheme.f_PAIRED12__org_pepstock_charba_client_impl_plugins_enums_BrewerScheme, scheme)) {
     this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.selectedIndex = index;
    }
    index = index + 1 | 0;
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Coloring bar chart"], j_l_String)));
  let dataset1 = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_newDataset__(), BarDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let color1 = GoogleChartColor.m_values__()[0];
  let border = BarBorderWidth.$create__();
  border.m_setTop__int(2);
  border.m_setLeft__int(2);
  border.m_setRight__int(2);
  dataset1.m_setBorderWidth__arrayOf_org_pepstock_charba_client_data_BarBorderWidth(/**@type {!Array<BarBorderWidth>}*/ ($Arrays.$init([border], BarBorderWidth)));
  dataset1.m_setBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([color1], IsColor)));
  dataset1.m_setData__arrayOf_double(this.m_getFixedDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  let options = ColorSchemesOptions.$create__();
  options.m_setSchemeScope__org_pepstock_charba_client_impl_plugins_enums_SchemeScope(SchemeScope.f_DATASET__org_pepstock_charba_client_impl_plugins_enums_SchemeScope);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes, options);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_getPlugins__().m_add__org_pepstock_charba_client_Plugin(ColorSchemes.m_get__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.appendChild(actionsRow);
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
  let dataColorsID = "dataColors" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForDataColors = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForDataColors.htmlFor = dataColorsID;
  labelForDataColors.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Data colors "));
  actionsCol.appendChild(labelForDataColors);
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.id = dataColorsID;
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.onclick = (/** Event */ p0_5) =>{
   this.m_handleScope__();
   return null;
  };
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.type = "checkbox";
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.className = "gwt-CheckBox";
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_);
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.onchange = (/** Event */ p0_6) =>{
   this.m_handleCategory__();
   return null;
  };
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.className = "gwt-ListBox";
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_);
  this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.onchange = (/** Event */ p0_7) =>{
   this.m_handleName__();
   return null;
  };
  this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.className = "gwt-ListBox";
  this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_);
  let reverseID = "reverse" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForReverse = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForReverse.htmlFor = reverseID;
  labelForReverse.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Reverse "));
  actionsCol.appendChild(labelForReverse);
  this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.id = reverseID;
  this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.onclick = (/** Event */ p0_8) =>{
   this.m_handleReverse__();
   return null;
  };
  this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.type = "checkbox";
  this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.className = "gwt-CheckBox";
  this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_9) =>{
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_update__();
 }
 
 m_handleAddDataset__() {
  let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_getData__().m_getDatasets__();
  let dataset = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_newDataset__(), BarDataset));
  dataset.m_setLabel__java_lang_String("dataset " + (datasets.size() + 1 | 0));
  let color = GoogleChartColor.m_values__()[datasets.size()];
  dataset.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([color.m_alpha__double(0.2)], IsColor)));
  dataset.m_setBorderColor__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([color.m_toHex__()], j_l_String)));
  let border = BarBorderWidth.$create__();
  border.m_setTop__int(2);
  border.m_setLeft__int(2);
  border.m_setRight__int(2);
  dataset.m_setBorderWidth__arrayOf_org_pepstock_charba_client_data_BarBorderWidth(/**@type {!Array<BarBorderWidth>}*/ ($Arrays.$init([border], BarBorderWidth)));
  dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  datasets.add(dataset);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_update__();
 }
 
 m_handleRemoveDataset__() {
  this.m_removeDataset__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_);
 }
 
 m_handleAddData__() {
  this.m_addData__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_);
 }
 
 m_handleRemoveData__() {
  this.m_removeData__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_);
 }
 
 m_handleScope__() {
  let options = /**@type {ColorSchemesOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_getOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes, ColorSchemes.f_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes), ColorSchemesOptions));
  if (this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.checked) {
   options.m_setSchemeScope__org_pepstock_charba_client_impl_plugins_enums_SchemeScope(SchemeScope.f_DATA__org_pepstock_charba_client_impl_plugins_enums_SchemeScope);
  } else {
   options.m_setSchemeScope__org_pepstock_charba_client_impl_plugins_enums_SchemeScope(SchemeScope.f_DATASET__org_pepstock_charba_client_impl_plugins_enums_SchemeScope);
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_update__();
 }
 
 m_handleReverse__() {
  let options = /**@type {ColorSchemesOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_getOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes, ColorSchemes.f_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes), ColorSchemesOptions));
  options.m_setReverse__boolean(this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.checked);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes, options);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_update__();
 }
 
 m_handleCategory__() {
  let selected = /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.options, this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("brewer", selected)) {
   this.m_clearNames___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase();
   let index = 0;
   for (let $array = BrewerScheme.m_values__(), $index = 0; $index < $array.length; $index++) {
    let scheme = $array[$index];
    {
     let schemeN = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
     schemeN.text = scheme.m_value__();
     schemeN.value = scheme.m_value__();
     this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.add(schemeN);
     if ($Objects.m_equals__java_lang_Object__java_lang_Object(BrewerScheme.f_PAIRED12__org_pepstock_charba_client_impl_plugins_enums_BrewerScheme, scheme)) {
      this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.selectedIndex = index;
     }
     index = index + 1 | 0;
    }
   }
  } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("office", selected)) {
   this.m_clearNames___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase();
   for (let $array_1 = OfficeScheme.m_values__(), $index_1 = 0; $index_1 < $array_1.length; $index_1++) {
    let scheme_1 = $array_1[$index_1];
    {
     let schemeN_1 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
     schemeN_1.text = scheme_1.m_value__();
     schemeN_1.value = scheme_1.m_value__();
     this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.add(schemeN_1);
    }
   }
   this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.selectedIndex = 0;
  } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("tableau", selected)) {
   this.m_clearNames___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase();
   for (let $array_2 = TableauScheme.m_values__(), $index_2 = 0; $index_2 < $array_2.length; $index_2++) {
    let scheme_2 = $array_2[$index_2];
    {
     let schemeN_2 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
     schemeN_2.text = scheme_2.m_value__();
     schemeN_2.value = scheme_2.m_value__();
     this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.add(schemeN_2);
    }
   }
   this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.selectedIndex = 0;
  } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("gwtmaterial", selected)) {
   this.m_clearNames___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase();
   for (let $array_3 = GwtMaterialScheme.m_values__(), $index_3 = 0; $index_3 < $array_3.length; $index_3++) {
    let scheme_3 = $array_3[$index_3];
    {
     let schemeN_3 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
     schemeN_3.text = scheme_3.m_value__();
     schemeN_3.value = scheme_3.m_value__();
     this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.add(schemeN_3);
    }
   }
   this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.selectedIndex = 0;
  } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("googlechart", selected)) {
   this.m_clearNames___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase();
   for (let $array_4 = GoogleChartScheme.m_values__(), $index_4 = 0; $index_4 < $array_4.length; $index_4++) {
    let scheme_4 = $array_4[$index_4];
    {
     let schemeN_4 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
     schemeN_4.text = scheme_4.m_value__();
     schemeN_4.value = scheme_4.m_value__();
     this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.add(schemeN_4);
    }
   }
   this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.selectedIndex = 0;
  }
  this.m_handleName__();
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_update__();
 }
 
 m_clearNames___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase() {
  while (!$Equality.$same(this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.firstChild, null)) {
   this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.removeChild(this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.firstChild);
  }
 }
 
 m_handleName__() {
  let options = /**@type {ColorSchemesOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_getOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes, ColorSchemes.f_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes), ColorSchemesOptions));
  let selected = /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.options, this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("brewer", selected)) {
   options.m_setScheme__org_pepstock_charba_client_impl_plugins_ColorScheme(/**@type {BrewerScheme}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(BrewerScheme.m_values__(), /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.options, this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.selectedIndex), HTMLOptionElement_$Overlay)).value), BrewerScheme)));
   options.m_setBackgroundColorAlpha__double(0.5);
  } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("office", selected)) {
   options.m_setScheme__org_pepstock_charba_client_impl_plugins_ColorScheme(/**@type {OfficeScheme}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(OfficeScheme.m_values__(), /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.options, this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.selectedIndex), HTMLOptionElement_$Overlay)).value), OfficeScheme)));
   options.m_setBackgroundColorAlpha__double(0.5);
  } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("tableau", selected)) {
   options.m_setScheme__org_pepstock_charba_client_impl_plugins_ColorScheme(/**@type {TableauScheme}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(TableauScheme.m_values__(), /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.options, this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.selectedIndex), HTMLOptionElement_$Overlay)).value), TableauScheme)));
   options.m_setBackgroundColorAlpha__double(0.5);
  } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("gwtmaterial", selected)) {
   options.m_setScheme__org_pepstock_charba_client_impl_plugins_ColorScheme(/**@type {GwtMaterialScheme}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(GwtMaterialScheme.m_values__(), /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.options, this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.selectedIndex), HTMLOptionElement_$Overlay)).value), GwtMaterialScheme)));
   options.m_setBackgroundColorAlpha__double(0.95);
  } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("googlechart", selected)) {
   options.m_setScheme__org_pepstock_charba_client_impl_plugins_ColorScheme(/**@type {GoogleChartScheme}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(GoogleChartScheme.m_values__(), /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.options, this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.selectedIndex), HTMLOptionElement_$Overlay)).value), GoogleChartScheme)));
   options.m_setBackgroundColorAlpha__double(0.5);
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_ = BarChart.$create__();
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
  this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
  this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBarCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
 }
 
 static $clinit() {
  ColorSchemeBarCase.$clinit = () =>{};
  ColorSchemeBarCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColorSchemeBarCase;
 }
 
 static $loadModules() {
  MarginRightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  Document_$Overlay = goog.module.get('elemental2.dom.Document.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  HTMLOptionElement_$Overlay = goog.module.get('elemental2.dom.HTMLOptionElement.$Overlay$impl');
  HTMLSelectElement_$Overlay = goog.module.get('elemental2.dom.HTMLSelectElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  BarChart = goog.module.get('org.pepstock.charba.client.BarChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  BarBorderWidth = goog.module.get('org.pepstock.charba.client.data.BarBorderWidth$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  ColorSchemes = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemes$impl');
  ColorSchemesOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');
  BrewerScheme = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.BrewerScheme$impl');
  GoogleChartScheme = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.GoogleChartScheme$impl');
  GwtMaterialScheme = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.GwtMaterialScheme$impl');
  OfficeScheme = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.OfficeScheme$impl');
  SchemeScope = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.SchemeScope$impl');
  TableauScheme = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.TableauScheme$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(ColorSchemeBarCase, "org.pepstock.charba.showcase.j2cl.cases.plugins.ColorSchemeBarCase");

exports = ColorSchemeBarCase;

//# sourceMappingURL=ColorSchemeBarCase.js.map
