goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointStylesAsCanvasOnLineCase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let MarginRightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let DOMBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.DOMBuilder$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Context2dItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointStylesAsCanvasOnLineCase.$1$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

class ApplyingPointStylesAsCanvasOnLineCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_;
  /**@type {LineDataset}*/
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_;
 }
 /** @return {!ApplyingPointStylesAsCanvasOnLineCase} */
 static $create__() {
  ApplyingPointStylesAsCanvasOnLineCase.$clinit();
  let $instance = new ApplyingPointStylesAsCanvasOnLineCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  if ($Equality.$same(ApplyingPointStylesAsCanvasOnLineCase.$static_imageCanvas__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_, null)) {
   ApplyingPointStylesAsCanvasOnLineCase.$static_imageCanvas__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_ = this.m_initCanvas___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase();
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_getOptions__().m_setMaintainAspectRatio__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_getOptions__().m_getLegend__().m_getLabels__().m_setUsePointStyle__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Using canvas as point style on line chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_getOptions__().m_getTooltips__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(InteractionMode.f_INDEX__org_pepstock_charba_client_enums_InteractionMode);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_getOptions__().m_getTooltips__().m_setIntersect__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_getOptions__().m_getHover__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(InteractionMode.f_NEAREST__org_pepstock_charba_client_enums_InteractionMode);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_getOptions__().m_getHover__().m_setIntersect__boolean(true);
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_ = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_newDataset__(), LineDataset));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_setLabel__java_lang_String("dataset 1");
  let color1 = GoogleChartColor.m_values__()[0];
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_setBorderColor__java_lang_String(color1.m_toHex__());
  let values = this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite);
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_setData__arrayOf_double(values);
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_setClip__double(40);
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase(this));
  this.m_setRotations___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase();
  let axis1 = CartesianCategoryAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_);
  axis1.m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Month"], j_l_String)));
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Value"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.appendChild(actionsRow);
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
  let addData = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  addData.onclick = (/** Event */ p0_1) =>{
   this.m_handleAddData__();
   return null;
  };
  addData.className = "gwt-Button";
  addData.textContent = "Add data";
  addData.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(addData);
  let removeData = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  removeData.onclick = (/** Event */ p0_2) =>{
   this.m_handleRemoveData__();
   return null;
  };
  removeData.className = "gwt-Button";
  removeData.textContent = "Remove data";
  removeData.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(removeData);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
   }
  }
  this.m_setRotations___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase();
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_update__();
 }
 
 m_handleAddData__() {
  this.m_addData__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_);
 }
 
 m_handleRemoveData__() {
  this.m_removeData__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_);
 }
 
 m_setRotations___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase() {
  let rotations = /**@type {!Array<number>}*/ ($Arrays.$create([this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite], $double));
  $Arrays.$set(rotations, 0, 0);
  for (let i = 0; i < (this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite - 1 | 0); i = i + 1 | 0) {
   $Arrays.$set(rotations, i + 1 | 0, this.m_getRandomDigit__double__double(0, 360));
  }
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_.m_setPointRotation__arrayOf_double(rotations);
 }
 /** @return {HTMLCanvasElement} */
 m_initCanvas___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase() {
  let imageCanvas = DOMBuilder.m_get__().m_createCanvasElement__();
  imageCanvas.width = 40;
  imageCanvas.height = 40;
  let imageContext = Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(imageCanvas);
  Context2dItem_$Overlay.m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(imageContext, "#f00");
  imageContext.beginPath();
  imageContext.moveTo(20, 0);
  imageContext.lineTo(10, 40);
  imageContext.lineTo(20, 30);
  imageContext.closePath();
  imageContext.fill();
  Context2dItem_$Overlay.m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(imageContext, "#a00");
  imageContext.beginPath();
  imageContext.moveTo(20, 0);
  imageContext.lineTo(30, 40);
  imageContext.lineTo(20, 30);
  imageContext.closePath();
  imageContext.fill();
  return imageCanvas;
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_ = LineChart.$create__();
 }
 /** @return {HTMLCanvasElement} */
 static get f_imageCanvas__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_() {
  return (ApplyingPointStylesAsCanvasOnLineCase.$clinit(), ApplyingPointStylesAsCanvasOnLineCase.$static_imageCanvas__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_);
 }
 
 static set f_imageCanvas__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_(/** HTMLCanvasElement */ value) {
  (ApplyingPointStylesAsCanvasOnLineCase.$clinit(), ApplyingPointStylesAsCanvasOnLineCase.$static_imageCanvas__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_ = value);
 }
 
 static $clinit() {
  ApplyingPointStylesAsCanvasOnLineCase.$clinit = () =>{};
  ApplyingPointStylesAsCanvasOnLineCase.$loadModules();
  BaseComposite.$clinit();
  ApplyingPointStylesAsCanvasOnLineCase.$static_imageCanvas__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ApplyingPointStylesAsCanvasOnLineCase;
 }
 
 static $loadModules() {
  MarginRightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Context2dItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  InteractionMode = goog.module.get('org.pepstock.charba.client.enums.InteractionMode$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointStylesAsCanvasOnLineCase.$1$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
/**@private {HTMLCanvasElement}*/
ApplyingPointStylesAsCanvasOnLineCase.$static_imageCanvas__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesAsCanvasOnLineCase_;
$Util.$setClassMetadata(ApplyingPointStylesAsCanvasOnLineCase, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointStylesAsCanvasOnLineCase");

exports = ApplyingPointStylesAsCanvasOnLineCase;

//# sourceMappingURL=ApplyingPointStylesAsCanvasOnLineCase.js.map