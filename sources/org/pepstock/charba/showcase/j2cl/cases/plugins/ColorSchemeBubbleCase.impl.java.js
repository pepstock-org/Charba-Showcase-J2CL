goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.ColorSchemeBubbleCase$impl');

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
let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Random = goog.forwardDeclare('java.util.Random$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let BubbleChart = goog.forwardDeclare('org.pepstock.charba.client.BubbleChart$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let BubbleDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BubbleDataset$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
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
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class ColorSchemeBubbleCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_;
  /**@type {BubbleChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_;
  /**@type {HTMLInputElement}*/
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_;
  /**@type {HTMLSelectElement}*/
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_;
  /**@type {HTMLSelectElement}*/
  this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_;
  /**@type {HTMLInputElement}*/
  this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_;
 }
 /** @return {!ColorSchemeBubbleCase} */
 static $create__() {
  ColorSchemeBubbleCase.$clinit();
  let $instance = new ColorSchemeBubbleCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  let category1 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  category1.text = "Brewer";
  category1.value = "brewer";
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.add(category1);
  let category2 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  category2.text = "MS Office";
  category2.value = "office";
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.add(category2);
  let category3 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  category3.text = "Tableau";
  category3.value = "tableau";
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.add(category3);
  let category4 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  category4.text = "GWT material";
  category4.value = "gwtmaterial";
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.add(category4);
  let category5 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  category5.text = "Google Chart";
  category5.value = "googlechart";
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.add(category5);
  let index = 0;
  for (let $array = BrewerScheme.m_values__(), $index = 0; $index < $array.length; $index++) {
   let scheme = $array[$index];
   {
    let schemeN = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
    schemeN.text = scheme.m_value__();
    schemeN.value = scheme.m_value__();
    this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.add(schemeN);
    if ($Objects.m_equals__java_lang_Object__java_lang_Object(BrewerScheme.f_PAIRED12__org_pepstock_charba_client_impl_plugins_enums_BrewerScheme, scheme)) {
     this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.selectedIndex = index;
    }
    index = index + 1 | 0;
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_getOptions__().m_getLegend__().m_getLabels__().m_setUsePointStyle__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_getOptions__().m_getLegend__().m_getLabels__().m_getFont__().m_setSize__int(18);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Coloring buble chart"], j_l_String)));
  let dataset1 = /**@type {BubbleDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_newDataset__(), BubbleDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let colors = /**@type {!Array<?string>}*/ ($Arrays.$create([ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_], j_l_String));
  let hcolors = /**@type {!Array<?string>}*/ ($Arrays.$create([ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_], j_l_String));
  let bcolors = /**@type {!Array<?string>}*/ ($Arrays.$create([ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_], j_l_String));
  let bwidth = /**@type {!Array<number>}*/ ($Arrays.$create([ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_], $int));
  let hbwidth = /**@type {!Array<number>}*/ ($Arrays.$create([ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_], $int));
  let dp1 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_], DataPoint));
  for (let i = 0; i < ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_; i = i + 1 | 0) {
   $Arrays.$set(dp1, i, DataPoint.$create__());
   dp1[i].m_setX__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase());
   dp1[i].m_setY__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase());
   dp1[i].m_setR__double(this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase(0, 50));
   $Arrays.$set(colors, i, this.m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase(false, dp1[i]));
   $Arrays.$set(bcolors, i, this.m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase(true, dp1[i]));
   $Arrays.$set(bwidth, i, Math.min(Math.max(1, i + 1 | 0), 5));
   $Arrays.$set(hcolors, i, "transparent");
   $Arrays.$set(hbwidth, i, $Primitives.$narrowLongToInt(j_l_Math.m_round__double(8 * dp1[i].m_getR__() / 1000)));
  }
  dataset1.m_setBackgroundColor__arrayOf_java_lang_String(colors);
  dataset1.m_setBorderColor__arrayOf_java_lang_String(bcolors);
  dataset1.m_setBorderWidth__arrayOf_int(bwidth);
  dataset1.m_setHoverBackgroundColor__arrayOf_java_lang_String(hcolors);
  dataset1.m_setHoverBorderWidth__arrayOf_int(hbwidth);
  dataset1.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dp1);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_getPlugins__().m_add__org_pepstock_charba_client_Plugin(ColorSchemes.m_get__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.appendChild(actionsRow);
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
  let dataColorsID = "dataColors" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForDataColors = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForDataColors.htmlFor = dataColorsID;
  labelForDataColors.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Data colors "));
  actionsCol.appendChild(labelForDataColors);
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.id = dataColorsID;
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.onclick = (/** Event */ p0_3) =>{
   this.m_handleScope__();
   return null;
  };
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.type = "checkbox";
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.className = "gwt-CheckBox";
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_);
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.onchange = (/** Event */ p0_4) =>{
   this.m_handleCategory__();
   return null;
  };
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.className = "gwt-ListBox";
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_);
  this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.onchange = (/** Event */ p0_5) =>{
   this.m_handleName__();
   return null;
  };
  this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.className = "gwt-ListBox";
  this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_);
  let reverseID = "reverse" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForReverse = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForReverse.htmlFor = reverseID;
  labelForReverse.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Reverse "));
  actionsCol.appendChild(labelForReverse);
  this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.id = reverseID;
  this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.onclick = (/** Event */ p0_6) =>{
   this.m_handleReverse__();
   return null;
  };
  this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.type = "checkbox";
  this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.className = "gwt-CheckBox";
  this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_7) =>{
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_;
 }
 /** @return {number} */
 m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase() {
  return this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase(ColorSchemeBubbleCase.f_MIN_XY__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_, ColorSchemeBubbleCase.f_MAX_XY__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_);
 }
 /** @return {number} */
 m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase(/** number */ min, /** number */ max) {
  let random = Random.$create__();
  return random.m_nextInt__int(max + 1 - min | 0) + min | 0;
 }
 /** @return {?string} */
 m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase(/** boolean */ opaque, /** DataPoint */ value) {
  let x = value.m_getX__() / 100;
  let y = value.m_getY__() / 100;
  let r = x < 0 && y < 0 ? 250 : x < 0 ? 150 : y < 0 ? 50 : 0;
  let g = x < 0 && y < 0 ? 0 : x < 0 ? 50 : y < 0 ? 150 : 250;
  let b = x < 0 && y < 0 ? 0 : x > 0 && y > 0 ? 250 : 150;
  let a = opaque ? 1 : 0.2 * value.m_getR__() / 50;
  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
 }
 
 m_handleRandomize__() {
  let colors = /**@type {!Array<?string>}*/ ($Arrays.$create([ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_], j_l_String));
  let bcolors = /**@type {!Array<?string>}*/ ($Arrays.$create([ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_], j_l_String));
  let bwidth = /**@type {!Array<number>}*/ ($Arrays.$create([ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_], $int));
  let hbwidth = /**@type {!Array<number>}*/ ($Arrays.$create([ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_], $int));
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    let bDataset = /**@type {BubbleDataset}*/ ($Casts.$to(dataset, BubbleDataset));
    let i = 0;
    for (let $iterator_1 = bDataset.m_getDataPoints__().m_iterator__(); $iterator_1.m_hasNext__(); ) {
     let dp = /**@type {DataPoint}*/ ($Casts.$to($iterator_1.m_next__(), DataPoint));
     {
      dp.m_setX__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase());
      dp.m_setY__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase());
      dp.m_setR__double(this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase(0, 50));
      $Arrays.$set(colors, i, this.m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase(false, dp));
      $Arrays.$set(bcolors, i, this.m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase(true, dp));
      $Arrays.$set(bwidth, i, Math.min(Math.max(1, i + 1 | 0), 5));
      $Arrays.$set(hbwidth, i, $Primitives.$narrowLongToInt(j_l_Math.m_round__double(8 * dp.m_getR__() / 1000)));
      i = i + 1 | 0;
     }
    }
    bDataset.m_setBackgroundColor__arrayOf_java_lang_String(colors);
    bDataset.m_setBorderColor__arrayOf_java_lang_String(bcolors);
    bDataset.m_setBorderWidth__arrayOf_int(bwidth);
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_update__();
 }
 
 m_handleAddDataset__() {
  let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_getData__().m_getDatasets__();
  let dataset = /**@type {BubbleDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_newDataset__(), BubbleDataset));
  dataset.m_setLabel__java_lang_String("dataset " + (datasets.size() + 1 | 0));
  let colors = /**@type {!Array<?string>}*/ ($Arrays.$create([ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_], j_l_String));
  let hcolors = /**@type {!Array<?string>}*/ ($Arrays.$create([ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_], j_l_String));
  let bcolors = /**@type {!Array<?string>}*/ ($Arrays.$create([ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_], j_l_String));
  let bwidth = /**@type {!Array<number>}*/ ($Arrays.$create([ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_], $int));
  let hbwidth = /**@type {!Array<number>}*/ ($Arrays.$create([ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_], $int));
  let dp1 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_], DataPoint));
  for (let i = 0; i < ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_; i = i + 1 | 0) {
   $Arrays.$set(dp1, i, DataPoint.$create__());
   dp1[i].m_setX__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase());
   dp1[i].m_setY__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase());
   dp1[i].m_setR__double(this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase(0, 50));
   $Arrays.$set(colors, i, this.m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase(false, dp1[i]));
   $Arrays.$set(bcolors, i, this.m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase(true, dp1[i]));
   $Arrays.$set(bwidth, i, Math.min(Math.max(1, i + 1 | 0), 5));
   $Arrays.$set(hcolors, i, "transparent");
   $Arrays.$set(hbwidth, i, $Primitives.$narrowLongToInt(j_l_Math.m_round__double(8 * dp1[i].m_getR__() / 1000)));
  }
  dataset.m_setBackgroundColor__arrayOf_java_lang_String(colors);
  dataset.m_setBorderColor__arrayOf_java_lang_String(bcolors);
  dataset.m_setBorderWidth__arrayOf_int(bwidth);
  dataset.m_setHoverBackgroundColor__arrayOf_java_lang_String(hcolors);
  dataset.m_setHoverBorderWidth__arrayOf_int(hbwidth);
  dataset.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dp1);
  datasets.add(dataset);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_update__();
 }
 
 m_handleRemoveDataset__() {
  this.m_removeDataset__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_);
 }
 
 m_handleScope__() {
  let options = /**@type {ColorSchemesOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_getOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes, ColorSchemes.f_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes), ColorSchemesOptions));
  if (this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.checked) {
   options.m_setSchemeScope__org_pepstock_charba_client_impl_plugins_enums_SchemeScope(SchemeScope.f_DATA__org_pepstock_charba_client_impl_plugins_enums_SchemeScope);
  } else {
   options.m_setSchemeScope__org_pepstock_charba_client_impl_plugins_enums_SchemeScope(SchemeScope.f_DATASET__org_pepstock_charba_client_impl_plugins_enums_SchemeScope);
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes, options);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_update__();
 }
 
 m_handleReverse__() {
  let options = /**@type {ColorSchemesOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_getOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes, ColorSchemes.f_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes), ColorSchemesOptions));
  options.m_setReverse__boolean(this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.checked);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes, options);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_update__();
 }
 
 m_handleCategory__() {
  let selected = /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.options, this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("brewer", selected)) {
   this.m_clearNames___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase();
   let index = 0;
   for (let $array = BrewerScheme.m_values__(), $index = 0; $index < $array.length; $index++) {
    let scheme = $array[$index];
    {
     let schemeN = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
     schemeN.text = scheme.m_value__();
     schemeN.value = scheme.m_value__();
     this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.add(schemeN);
     if ($Objects.m_equals__java_lang_Object__java_lang_Object(BrewerScheme.f_PAIRED12__org_pepstock_charba_client_impl_plugins_enums_BrewerScheme, scheme)) {
      this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.selectedIndex = index;
     }
     index = index + 1 | 0;
    }
   }
  } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("office", selected)) {
   this.m_clearNames___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase();
   for (let $array_1 = OfficeScheme.m_values__(), $index_1 = 0; $index_1 < $array_1.length; $index_1++) {
    let scheme_1 = $array_1[$index_1];
    {
     let schemeN_1 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
     schemeN_1.text = scheme_1.m_value__();
     schemeN_1.value = scheme_1.m_value__();
     this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.add(schemeN_1);
    }
   }
   this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.selectedIndex = 0;
  } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("tableau", selected)) {
   this.m_clearNames___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase();
   for (let $array_2 = TableauScheme.m_values__(), $index_2 = 0; $index_2 < $array_2.length; $index_2++) {
    let scheme_2 = $array_2[$index_2];
    {
     let schemeN_2 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
     schemeN_2.text = scheme_2.m_value__();
     schemeN_2.value = scheme_2.m_value__();
     this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.add(schemeN_2);
    }
   }
   this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.selectedIndex = 0;
  } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("gwtmaterial", selected)) {
   this.m_clearNames___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase();
   for (let $array_3 = GwtMaterialScheme.m_values__(), $index_3 = 0; $index_3 < $array_3.length; $index_3++) {
    let scheme_3 = $array_3[$index_3];
    {
     let schemeN_3 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
     schemeN_3.text = scheme_3.m_value__();
     schemeN_3.value = scheme_3.m_value__();
     this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.add(schemeN_3);
    }
   }
   this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.selectedIndex = 0;
  } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("googlechart", selected)) {
   this.m_clearNames___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase();
   for (let $array_4 = GoogleChartScheme.m_values__(), $index_4 = 0; $index_4 < $array_4.length; $index_4++) {
    let scheme_4 = $array_4[$index_4];
    {
     let schemeN_4 = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
     schemeN_4.text = scheme_4.m_value__();
     schemeN_4.value = scheme_4.m_value__();
     this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.add(schemeN_4);
    }
   }
   this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.selectedIndex = 0;
  }
  this.m_handleName__();
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_update__();
 }
 
 m_clearNames___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase() {
  while (!$Equality.$same(this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.firstChild, null)) {
   this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.removeChild(this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.firstChild);
  }
 }
 
 m_handleName__() {
  let options = /**@type {ColorSchemesOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_getOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes, ColorSchemes.f_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes), ColorSchemesOptions));
  let selected = /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.options, this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("brewer", selected)) {
   options.m_setScheme__org_pepstock_charba_client_impl_plugins_ColorScheme(/**@type {BrewerScheme}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(BrewerScheme.m_values__(), /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.options, this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.selectedIndex), HTMLOptionElement_$Overlay)).value), BrewerScheme)));
   options.m_setBackgroundColorAlpha__double(0.5);
  } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("office", selected)) {
   options.m_setScheme__org_pepstock_charba_client_impl_plugins_ColorScheme(/**@type {OfficeScheme}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(OfficeScheme.m_values__(), /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.options, this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.selectedIndex), HTMLOptionElement_$Overlay)).value), OfficeScheme)));
   options.m_setBackgroundColorAlpha__double(0.5);
  } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("tableau", selected)) {
   options.m_setScheme__org_pepstock_charba_client_impl_plugins_ColorScheme(/**@type {TableauScheme}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(TableauScheme.m_values__(), /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.options, this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.selectedIndex), HTMLOptionElement_$Overlay)).value), TableauScheme)));
   options.m_setBackgroundColorAlpha__double(0.5);
  } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("gwtmaterial", selected)) {
   options.m_setScheme__org_pepstock_charba_client_impl_plugins_ColorScheme(/**@type {GwtMaterialScheme}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(GwtMaterialScheme.m_values__(), /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.options, this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.selectedIndex), HTMLOptionElement_$Overlay)).value), GwtMaterialScheme)));
   options.m_setBackgroundColorAlpha__double(0.95);
  } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("googlechart", selected)) {
   options.m_setScheme__org_pepstock_charba_client_impl_plugins_ColorScheme(/**@type {GoogleChartScheme}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(GoogleChartScheme.m_values__(), /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.options, this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.selectedIndex), HTMLOptionElement_$Overlay)).value), GoogleChartScheme)));
   options.m_setBackgroundColorAlpha__double(0.5);
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_ = BubbleChart.$create__();
  this.f_data__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_category__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
  this.f_name__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
  this.f_reverse__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
 }
 
 static $clinit() {
  ColorSchemeBubbleCase.$clinit = () =>{};
  ColorSchemeBubbleCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColorSchemeBubbleCase;
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
  j_l_Math = goog.module.get('java.lang.Math$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Random = goog.module.get('java.util.Random$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  BubbleChart = goog.module.get('org.pepstock.charba.client.BubbleChart$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  BubbleDataset = goog.module.get('org.pepstock.charba.client.data.BubbleDataset$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
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
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@const {number}*/
ColorSchemeBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_ = 16;
/**@const {number}*/
ColorSchemeBubbleCase.f_MIN_XY__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_ = -150;
/**@const {number}*/
ColorSchemeBubbleCase.f_MAX_XY__org_pepstock_charba_showcase_j2cl_cases_plugins_ColorSchemeBubbleCase_ = 100;
$Util.$setClassMetadata(ColorSchemeBubbleCase, "org.pepstock.charba.showcase.j2cl.cases.plugins.ColorSchemeBubbleCase");

exports = ColorSchemeBubbleCase;

//# sourceMappingURL=ColorSchemeBubbleCase.js.map
