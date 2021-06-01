goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ActiveElementsOnBarCase$impl');

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
let BarChart = goog.forwardDeclare('org.pepstock.charba.client.BarChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let ChartHoverEvent = goog.forwardDeclare('org.pepstock.charba.client.events.ChartHoverEvent$impl');
let LegendClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendClickEvent$impl');
let ActiveDatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.ActiveDatasetElement$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ActiveElementsOnBarCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ActiveElementsOnBarCase.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class ActiveElementsOnBarCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_;
  /**@type {BarChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_;
  /**@type {Array<?string>}*/
  this.f_labels__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_;
  /**@type {HTMLSelectElement}*/
  this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_;
  /**@type {HTMLSelectElement}*/
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_;
 }
 /** @return {!ActiveElementsOnBarCase} */
 static $create__() {
  ActiveElementsOnBarCase.$clinit();
  let $instance = new ActiveElementsOnBarCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_labels__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_ = this.m_getLabels__();
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Bar chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_getOptions__().m_getHover__().m_setIntersect__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType($1.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase(this), LegendClickEvent.f_TYPE__org_pepstock_charba_client_events_LegendClickEvent);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType($2.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase(this), ChartHoverEvent.f_TYPE__org_pepstock_charba_client_events_ChartHoverEvent);
  let dataset1 = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_newDataset__(), BarDataset));
  dataset1.m_setLabel__java_lang_String("dataset 0");
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([color1.m_alpha__double(0.2)], IsColor)));
  dataset1.m_setBorderColor__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([color1.m_toHex__()], j_l_String)));
  dataset1.m_setBorderWidth__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([1], $int)));
  dataset1.m_setHoverBorderWidth__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([5], $int)));
  dataset1.m_setHoverBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([color1.m_darker__()], IsColor)));
  dataset1.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  let dataset2 = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_newDataset__(), BarDataset));
  dataset2.m_setLabel__java_lang_String("dataset 1");
  let color2 = GoogleChartColor.m_values__()[1];
  dataset2.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([color2.m_alpha__double(0.2)], IsColor)));
  dataset2.m_setBorderColor__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([color2.m_toHex__()], j_l_String)));
  dataset2.m_setBorderWidth__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([1], $int)));
  dataset2.m_setHoverBorderWidth__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([5], $int)));
  dataset2.m_setHoverBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([color2.m_darker__()], IsColor)));
  dataset2.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.f_labels__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1, dataset2], Dataset)));
  let styleN = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  styleN.text = "none";
  styleN.value = j_l_String.m_valueOf__java_lang_Object("-1");
  this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.add(styleN);
  let style1 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  style1.text = dataset1.m_getLabel__();
  style1.value = j_l_String.m_valueOf__java_lang_Object("0");
  this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.add(style1);
  let style2 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  style2.text = dataset2.m_getLabel__();
  style2.value = j_l_String.m_valueOf__java_lang_Object("1");
  this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.add(style2);
  this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.size = 3;
  let styleD = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  styleD.text = "none";
  styleD.value = j_l_String.m_valueOf__java_lang_Object("-1");
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.add(styleD);
  for (let i = 0; i < this.f_labels__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.length; i = i + 1 | 0) {
   let styleL = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
   styleL.text = this.f_labels__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_[i];
   styleL.value = j_l_String.m_valueOf__int(i);
   this.f_data__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.add(styleL);
  }
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.size = this.f_labels__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.length + 1 | 0;
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.appendChild(actionsRow);
  let actionsCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  actionsCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  actionsCol.style.textAlign = "center";
  actionsCol.vAlign = "middle";
  actionsCol.style.verticalAlign = "middle";
  actionsRow.appendChild(actionsCol);
  let randomize = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  randomize.onclick = (/** Event */ p0) =>{
   for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
    let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
    {
     dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
    }
   }
   this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_update__();
   this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.selectedIndex = 0;
   this.f_data__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.selectedIndex = 0;
   return null;
  };
  randomize.className = "gwt-Button";
  randomize.textContent = "Randomize data";
  randomize.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(randomize);
  let datasetsId = "datasets" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForDatasets = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForDatasets.htmlFor = datasetsId;
  labelForDatasets.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Dataset "));
  actionsCol.appendChild(labelForDatasets);
  this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.id = datasetsId;
  this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.onchange = (/** Event */ p0_1) =>{
   this.m_handleDatasetsList___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase();
   return null;
  };
  this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.className = "gwt-ListBox";
  this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.style.verticalAlign = "middle";
  actionsCol.appendChild(this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_);
  let dataId = "data" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForData = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForData.htmlFor = dataId;
  labelForData.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Dataset "));
  actionsCol.appendChild(labelForData);
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.id = datasetsId;
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.onchange = (/** Event */ p0_2) =>{
   this.m_handleDatasetsList___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase();
   return null;
  };
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.className = "gwt-ListBox";
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.style.verticalAlign = "middle";
  actionsCol.appendChild(this.f_data__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_3) =>{
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_;
 }
 
 m_handleDatasetsList___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase() {
  let datasetValue = Integer.m_parseInt__java_lang_String(/**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.options, this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.selectedIndex), HTMLOptionElement_$Overlay)).value);
  let dataValue = Integer.m_parseInt__java_lang_String(/**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_data__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.options, this.f_data__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.selectedIndex), HTMLOptionElement_$Overlay)).value);
  if (datasetValue >= 0) {
   if (dataValue >= 0) {
    let active = ActiveDatasetElement.$create__int__int(datasetValue, dataValue);
    this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_setActiveElements__arrayOf_org_pepstock_charba_client_items_ActiveDatasetElement(/**@type {!Array<ActiveDatasetElement>}*/ ($Arrays.$init([active], ActiveDatasetElement)));
    this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_setTooltipActiveElements__arrayOf_org_pepstock_charba_client_items_ActiveDatasetElement(/**@type {!Array<ActiveDatasetElement>}*/ ($Arrays.$init([active], ActiveDatasetElement)));
   } else {
    let active_1 = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_getData__().m_createActiveElementsByDatasetIndex__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([datasetValue], $int)));
    this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_setActiveElements__java_util_List(active_1);
    this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_setTooltipActiveElements__java_util_List(active_1);
   }
  } else if (dataValue >= 0) {
   let active_2 = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_getData__().m_createActiveElementsByDataIndex__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([dataValue], $int)));
   this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_setActiveElements__java_util_List(active_2);
   this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_setTooltipActiveElements__java_util_List(active_2);
  } else {
   this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_resetActiveElements__();
   this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_resetTooltipActiveElements__();
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_ = BarChart.$create__();
  this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
 }
 
 static $clinit() {
  ActiveElementsOnBarCase.$clinit = () =>{};
  ActiveElementsOnBarCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ActiveElementsOnBarCase;
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
  BarChart = goog.module.get('org.pepstock.charba.client.BarChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  ChartHoverEvent = goog.module.get('org.pepstock.charba.client.events.ChartHoverEvent$impl');
  LegendClickEvent = goog.module.get('org.pepstock.charba.client.events.LegendClickEvent$impl');
  ActiveDatasetElement = goog.module.get('org.pepstock.charba.client.items.ActiveDatasetElement$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ActiveElementsOnBarCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ActiveElementsOnBarCase.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
$Util.$setClassMetadata(ActiveElementsOnBarCase, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ActiveElementsOnBarCase");

exports = ActiveElementsOnBarCase;

//# sourceMappingURL=ActiveElementsOnBarCase.js.map
