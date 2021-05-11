goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.SteppedLineOnLineCase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let MarginRightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let Stepped = goog.forwardDeclare('org.pepstock.charba.client.enums.Stepped$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class SteppedLineOnLineCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_;
  /**@type {LineChart}*/
  this.f_chartNoStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_;
  /**@type {LineChart}*/
  this.f_chartStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_;
  /**@type {LineChart}*/
  this.f_chartBeforeStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_;
  /**@type {LineChart}*/
  this.f_chartAfterStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_;
 }
 /** @return {!SteppedLineOnLineCase} */
 static $create__() {
  SteppedLineOnLineCase.$clinit();
  let $instance = new SteppedLineOnLineCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.cellPadding = "12";
  let chartRow1 = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow1.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.appendChild(chartRow1);
  let chartCol11 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol11.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("50%");
  chartRow1.appendChild(chartCol11);
  let chartCol12 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol12.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("50%");
  chartRow1.appendChild(chartCol12);
  let chartRow2 = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow2.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.appendChild(chartRow2);
  let chartCol21 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol21.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("50%");
  chartRow2.appendChild(chartCol21);
  let chartCol22 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol22.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("50%");
  chartRow2.appendChild(chartCol22);
  this.f_chartNoStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chartNoStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chartNoStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chartNoStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["NO Stepped line"], j_l_String)));
  let dataset1 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chartNoStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_newDataset__(), LineDataset));
  dataset1.m_setLabel__java_lang_String("No stepped");
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBorderColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  dataset1.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  dataset1.m_setStepped__org_pepstock_charba_client_enums_Stepped(Stepped.f_FALSE__org_pepstock_charba_client_enums_Stepped);
  this.f_chartNoStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chartNoStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1], Dataset)));
  this.f_chartStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chartStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chartStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chartStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Stepped line"], j_l_String)));
  let dataset2 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chartStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_newDataset__(), LineDataset));
  dataset2.m_setLabel__java_lang_String("Stepped");
  let color2 = GoogleChartColor.m_values__()[1];
  dataset2.m_setBorderColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  dataset2.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  dataset2.m_setStepped__org_pepstock_charba_client_enums_Stepped(Stepped.f_BEFORE__org_pepstock_charba_client_enums_Stepped);
  this.f_chartStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chartStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset2], Dataset)));
  this.f_chartBeforeStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chartBeforeStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chartBeforeStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chartBeforeStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["BEFORE stepped line"], j_l_String)));
  let dataset3 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chartBeforeStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_newDataset__(), LineDataset));
  dataset3.m_setLabel__java_lang_String("Before Stepped");
  let color3 = GoogleChartColor.m_values__()[2];
  dataset3.m_setBorderColor__java_lang_String(color3.m_toHex__());
  dataset3.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  dataset3.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  dataset3.m_setStepped__org_pepstock_charba_client_enums_Stepped(Stepped.f_BEFORE__org_pepstock_charba_client_enums_Stepped);
  this.f_chartBeforeStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chartBeforeStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset3], Dataset)));
  this.f_chartAfterStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chartAfterStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chartAfterStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chartAfterStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["AFTER stepped line"], j_l_String)));
  let dataset4 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chartAfterStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_newDataset__(), LineDataset));
  dataset4.m_setLabel__java_lang_String("After Stepped");
  let color4 = GoogleChartColor.m_values__()[3];
  dataset4.m_setBorderColor__java_lang_String(color4.m_toHex__());
  dataset4.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  dataset4.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  dataset4.m_setStepped__org_pepstock_charba_client_enums_Stepped(Stepped.f_AFTER__org_pepstock_charba_client_enums_Stepped);
  this.f_chartAfterStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chartAfterStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset4], Dataset)));
  chartCol11.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chartStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getChartElement__()), Node_$Overlay)));
  chartCol12.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chartNoStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getChartElement__()), Node_$Overlay)));
  chartCol21.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chartBeforeStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getChartElement__()), Node_$Overlay)));
  chartCol22.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chartAfterStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_.appendChild(actionsRow);
  let actionsCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  actionsCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  actionsCol.style.textAlign = "center";
  actionsCol.vAlign = "middle";
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(actionsCol, "colspan", "2");
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
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_1) =>{
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_;
 }
 
 m_handleRandomize__() {
  this.m_newData__org_pepstock_charba_client_LineChart_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase(this.f_chartNoStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_);
  this.m_newData__org_pepstock_charba_client_LineChart_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase(this.f_chartStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_);
  this.m_newData__org_pepstock_charba_client_LineChart_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase(this.f_chartBeforeStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_);
  this.m_newData__org_pepstock_charba_client_LineChart_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase(this.f_chartAfterStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_);
 }
 
 m_newData__org_pepstock_charba_client_LineChart_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase(/** LineChart */ chart) {
  for (let $iterator = chart.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
   }
  }
  chart.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase() {
  this.f_chartNoStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_ = LineChart.$create__();
  this.f_chartStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_ = LineChart.$create__();
  this.f_chartBeforeStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_ = LineChart.$create__();
  this.f_chartAfterStepped__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SteppedLineOnLineCase_ = LineChart.$create__();
 }
 
 static $clinit() {
  SteppedLineOnLineCase.$clinit = () =>{};
  SteppedLineOnLineCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SteppedLineOnLineCase;
 }
 
 static $loadModules() {
  MarginRightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  Stepped = goog.module.get('org.pepstock.charba.client.enums.Stepped$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(SteppedLineOnLineCase, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.SteppedLineOnLineCase");

exports = SteppedLineOnLineCase;

//# sourceMappingURL=SteppedLineOnLineCase.js.map
