goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.TooltipHTMLlineCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TooltipExternalCallback = goog.require('org.pepstock.charba.client.callbacks.TooltipExternalCallback$impl');

let BorderWidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.BorderWidthUnionType.$Overlay$impl');
let FontSizeUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.FontSizeUnionType.$Overlay$impl');
let HeightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.HeightUnionType.$Overlay$impl');
let MarginRightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
let OpacityUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.OpacityUnionType.$Overlay$impl');
let PaddingLeftUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.PaddingLeftUnionType.$Overlay$impl');
let PaddingTopUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.PaddingTopUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let CastHelper = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.CastHelper$impl');
let Unit = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.Unit$impl');
let TooltipAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TooltipAlign$impl');
let TooltipBodyItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipBodyItem$impl');
let TooltipLabelColor = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelColor$impl');
let TooltipModel = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipModel$impl');
let TooltipHTMLlineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.TooltipHTMLlineCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {TooltipExternalCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TooltipHTMLlineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1;
  /**@type {HTMLDivElement}*/
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase(/** TooltipHTMLlineCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase(/** TooltipHTMLlineCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1();
 }
 /** @override */
 m_onExternal__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipModel(/** IsChart */ chart, /** TooltipModel */ model) {
  if ($Equality.$same(this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_, null)) {
   this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_ = /**@type {HTMLDivElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), $Overlay));
   chart.m_getChartElement__().appendChild(CastHelper.m_toDiv__java_lang_Object(this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_));
  }
  if (model.m_getOpacity__() == 0) {
   this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.style.opacity = OpacityUnionType_$Overlay.m_of__java_lang_Object(0);
   return;
  }
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(TooltipAlign.f_AUTO__org_pepstock_charba_client_enums_TooltipAlign, model.m_getYAlign__())) {
   this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.className = model.m_getYAlign__().m_value__();
  } else {
   this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.className = "no-transform";
  }
  let innerHTML = StringBuilder.$create__java_lang_String("<table cellpadding=2>");
  if (!$Equality.$same(model.m_getBody__(), null) && !model.m_getBody__().isEmpty()) {
   innerHTML.m_append__java_lang_String("<thead>");
   if (!$Equality.$same(model.m_getTitle__(), null) && !model.m_getTitle__().isEmpty()) {
    for (let $iterator = model.m_getTitle__().m_iterator__(); $iterator.m_hasNext__(); ) {
     let title = /**@type {?string}*/ ($Casts.$to($iterator.m_next__(), j_l_String));
     {
      innerHTML.m_append__java_lang_String("<tr><th style='font-size: 18px;'>").m_append__java_lang_String(title).m_append__java_lang_String("</th></tr>");
     }
    }
   }
   innerHTML.m_append__java_lang_String("</thead><tbody>");
   let colors = model.m_getLabelColors__();
   let index = 0;
   for (let $iterator_1 = model.m_getBody__().m_iterator__(); $iterator_1.m_hasNext__(); ) {
    let item = /**@type {TooltipBodyItem}*/ ($Casts.$to($iterator_1.m_next__(), TooltipBodyItem));
    {
     let lines = item.m_getLines__();
     for (let i = 0; i < lines.size(); i = i + 1 | 0) {
      let color = /**@type {TooltipLabelColor}*/ ($Casts.$to(colors.getAtIndex(index), TooltipLabelColor));
      let wrapper = /**@type {HTMLDivElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), $Overlay));
      let span = /**@type {HTMLElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("span"), HTMLElement_$Overlay));
      span.style.display = "inline-block";
      span.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("10px");
      span.style.height = HeightUnionType_$Overlay.m_of__java_lang_Object("10px");
      span.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("10px");
      span.style.backgroundColor = color.m_getBackgroundColor__().m_toRGBA__();
      span.style.borderColor = color.m_getBorderColor__().m_toRGBA__();
      span.style.borderStyle = "solid";
      span.style.borderWidth = BorderWidthUnionType_$Overlay.m_of__java_lang_Object("2px");
      wrapper.appendChild(span);
      innerHTML.m_append__java_lang_String("<tr><td style='white-space: nowrap;'>").m_append__java_lang_String(wrapper.innerHTML).m_append__java_lang_String(/**@type {?string}*/ ($Casts.$to(lines.getAtIndex(i), j_l_String))).m_append__java_lang_String("</td></tr>");
     }
     index = index + 1 | 0;
    }
   }
   innerHTML.m_append__java_lang_String("</tbody>");
  }
  innerHTML.m_append__java_lang_String("</table>");
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.innerHTML = innerHTML.toString();
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.style.left = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(model.m_getCaretX__());
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.style.top = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(model.m_getCaretY__());
  let tooltips = chart.m_getOptions__().m_getTooltips__();
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.style.fontSize = FontSizeUnionType_$Overlay.m_of__java_lang_Object(tooltips.m_getBodyFont__().m_getSize__() + "px");
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.style.paddingLeft = PaddingLeftUnionType_$Overlay.m_of__java_lang_Object(tooltips.m_getPadding__().m_getLeft__() + "px");
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.style.paddingTop = PaddingTopUnionType_$Overlay.m_of__java_lang_Object(tooltips.m_getPadding__().m_getTop__() + "px");
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.style.opacity = OpacityUnionType_$Overlay.m_of__java_lang_Object(1);
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.style.backgroundColor = "rgba(0, 0, 0, .7)";
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.style.position = "absolute";
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.style.color = "white";
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.style.setProperty("borderRadius", "3px");
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.style.setProperty("WebkitTransition", "all .1s ease");
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.style.setProperty("transition", "all .1s ease");
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.style.setProperty("pointerEvents", "none");
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.style.setProperty("WebkitTransform", "translate(-50%, 0)");
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_.style.setProperty("transform", "translate(-50%, 0)");
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1() {
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipHTMLlineCase_1_ = null;
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  BorderWidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.BorderWidthUnionType.$Overlay$impl');
  FontSizeUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.FontSizeUnionType.$Overlay$impl');
  HeightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.HeightUnionType.$Overlay$impl');
  MarginRightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
  OpacityUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.OpacityUnionType.$Overlay$impl');
  PaddingLeftUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.PaddingLeftUnionType.$Overlay$impl');
  PaddingTopUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.PaddingTopUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CastHelper = goog.module.get('org.pepstock.charba.client.dom.elements.CastHelper$impl');
  Unit = goog.module.get('org.pepstock.charba.client.dom.enums.Unit$impl');
  TooltipAlign = goog.module.get('org.pepstock.charba.client.enums.TooltipAlign$impl');
  TooltipBodyItem = goog.module.get('org.pepstock.charba.client.items.TooltipBodyItem$impl');
  TooltipLabelColor = goog.module.get('org.pepstock.charba.client.items.TooltipLabelColor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
TooltipExternalCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.elements.TooltipHTMLlineCase$1");

exports = $1;

//# sourceMappingURL=TooltipHTMLlineCase$1.js.map
