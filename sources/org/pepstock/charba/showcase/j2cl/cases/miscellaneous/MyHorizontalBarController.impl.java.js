goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarController$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractController = goog.require('org.pepstock.charba.client.controllers.AbstractController$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerContext.$Overlay$impl');
let ControllerProvider = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerProvider$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let BaseHtmlElement_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let CastHelper = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.CastHelper$impl');
let Context2dItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let ScaleTickItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleTickItem$impl');
let IsTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsTransitionKey$impl');
let Scale = goog.forwardDeclare('org.pepstock.charba.client.options.Scale$impl');
let Images = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.Images$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class MyHorizontalBarController extends AbstractController {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!MyHorizontalBarController} */
 static $create__() {
  MyHorizontalBarController.$clinit();
  let $instance = new MyHorizontalBarController();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController__() {
  this.$ctor__org_pepstock_charba_client_controllers_AbstractController__();
 }
 /** @override @return {ControllerType} */
 m_getType__() {
  return MyHorizontalBarController.$static_TYPE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController;
 }
 /** @override */
 m_initialize__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {
  let axis = /**@type {Scale}*/ ($Overlay.m_getNode__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context).m_getOptions__().m_getScales__().m_getAxis__org_pepstock_charba_client_options_IsScaleId(DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId));
  this.m_calculateAndSetScaleLabelPadding__org_pepstock_charba_client_options_Scale__int_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController(axis, BaseHtmlElement_$Overlay.m_getParentHtmlElement__$devirt__org_pepstock_charba_client_dom_BaseHtmlElement(chart.m_getCanvas__()).offsetWidth);
  super.m_initialize__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(context, chart);
 }
 /** @override */
 m_draw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {
  super.m_draw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(context, chart);
  let padding = 4;
  let ctx = Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(chart.m_getCanvas__());
  let scale = /**@type {ScaleItem}*/ ($Casts.$to(chart.m_getNode__().m_getScales__().m_getItems__().get(DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId.m_value__()), ScaleItem));
  let axis = /**@type {Scale}*/ ($Overlay.m_getNode__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context).m_getOptions__().m_getScales__().m_getAxis__org_pepstock_charba_client_options_IsScaleId(DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId));
  let ticks = scale.m_getTicks__();
  let heightAmongLabels = (scale.m_getBottom__() - scale.m_getTop__()) / ticks.size();
  let height = Math.min(heightAmongLabels - Math.imul(padding, 2), MyHorizontalBarController.f_MIN__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController_);
  let width = Math.min(60 * height / 40, axis.m_getTitle__().m_getPadding__().m_getTop__() - padding | 0);
  let x = scale.m_getLeft__() + axis.m_getTitle__().m_getPadding__().m_getTop__() - width + axis.m_getTitle__().m_getFont__().m_getSize__();
  let y = scale.m_getTop__();
  for (let $iterator = ticks.m_iterator__(); $iterator.m_hasNext__(); ) {
   let tick = /**@type {ScaleTickItem}*/ ($Casts.$to($iterator.m_next__(), ScaleTickItem));
   {
    let image = null;
    if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(tick.m_getLabel__(), "br")) {
     image = this.m_getImageElement__elemental2_dom_HTMLImageElement_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController(Images.m_get__().f_flagBR__org_pepstock_charba_showcase_j2cl_cases_commons_Images);
    } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(tick.m_getLabel__(), "de")) {
     image = this.m_getImageElement__elemental2_dom_HTMLImageElement_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController(Images.m_get__().f_flagDE__org_pepstock_charba_showcase_j2cl_cases_commons_Images);
    } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(tick.m_getLabel__(), "fr")) {
     image = this.m_getImageElement__elemental2_dom_HTMLImageElement_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController(Images.m_get__().f_flagFR__org_pepstock_charba_showcase_j2cl_cases_commons_Images);
    } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(tick.m_getLabel__(), "gb")) {
     image = this.m_getImageElement__elemental2_dom_HTMLImageElement_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController(Images.m_get__().f_flagGB__org_pepstock_charba_showcase_j2cl_cases_commons_Images);
    } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(tick.m_getLabel__(), "it")) {
     image = this.m_getImageElement__elemental2_dom_HTMLImageElement_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController(Images.m_get__().f_flagIT__org_pepstock_charba_showcase_j2cl_cases_commons_Images);
    } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(tick.m_getLabel__(), "us")) {
     image = this.m_getImageElement__elemental2_dom_HTMLImageElement_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController(Images.m_get__().f_flagUS__org_pepstock_charba_showcase_j2cl_cases_commons_Images);
    }
    if (!$Equality.$same(image, null)) {
     let yToDraw = y + (heightAmongLabels - height) / 2;
     Context2dItem_$Overlay.m_drawImage__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Img__double__double__double__double(ctx, image, x, yToDraw, width, height);
    }
    y = y + heightAmongLabels;
   }
  }
 }
 /** @override */
 m_update__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsTransitionKey(/** CharbaControllerContext */ context, /** IsChart */ chart, /** IsTransitionKey */ mode) {
  let axis = /**@type {Scale}*/ ($Overlay.m_getNode__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context).m_getOptions__().m_getScales__().m_getAxis__org_pepstock_charba_client_options_IsScaleId(DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId));
  this.m_calculateAndSetScaleLabelPadding__org_pepstock_charba_client_options_Scale__int_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController(axis, BaseHtmlElement_$Overlay.m_getParentHtmlElement__$devirt__org_pepstock_charba_client_dom_BaseHtmlElement(chart.m_getCanvas__()).offsetWidth);
  super.m_update__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsTransitionKey(context, chart, mode);
 }
 
 m_calculateAndSetScaleLabelPadding__org_pepstock_charba_client_options_Scale__int_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController(/** Scale */ axis, /** number */ width) {
  let percent = $Primitives.$coerceDivision(Math.imul(width, MyHorizontalBarController.f_PERCENT__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController_) / 100);
  let padding = Math.min(Math.max(MyHorizontalBarController.f_MIN__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController_, percent), MyHorizontalBarController.f_MAX__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController_);
  axis.m_getTitle__().m_getPadding__().m_setTop__int(padding);
 }
 /** @return {HTMLImageElement} */
 m_getImageElement__elemental2_dom_HTMLImageElement_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController(/** HTMLImageElement */ resource) {
  return CastHelper.m_toImg__java_lang_Object(resource);
 }
 /** @return {ControllerType} */
 static get f_TYPE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController() {
  return (MyHorizontalBarController.$clinit(), MyHorizontalBarController.$static_TYPE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController);
 }
 
 static $clinit() {
  MyHorizontalBarController.$clinit = () =>{};
  MyHorizontalBarController.$loadModules();
  AbstractController.$clinit();
  MyHorizontalBarController.$static_TYPE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController = ControllerType.$create__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider("myHorizontalBar", ChartType.f_BAR__org_pepstock_charba_client_ChartType, ControllerProvider.$adapt((/** ControllerType */ controllerType) =>{
   return MyHorizontalBarController.$create__();
  }));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MyHorizontalBarController;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.controllers.ControllerContext.$Overlay$impl');
  ControllerProvider = goog.module.get('org.pepstock.charba.client.controllers.ControllerProvider$impl');
  ControllerType = goog.module.get('org.pepstock.charba.client.controllers.ControllerType$impl');
  BaseHtmlElement_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  CastHelper = goog.module.get('org.pepstock.charba.client.dom.elements.CastHelper$impl');
  Context2dItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  ScaleItem = goog.module.get('org.pepstock.charba.client.items.ScaleItem$impl');
  ScaleTickItem = goog.module.get('org.pepstock.charba.client.items.ScaleTickItem$impl');
  Images = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.commons.Images$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@private {ControllerType}*/
MyHorizontalBarController.$static_TYPE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController;
/**@const {number}*/
MyHorizontalBarController.f_MIN__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController_ = 50;
/**@const {number}*/
MyHorizontalBarController.f_MAX__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController_ = 100;
/**@const {number}*/
MyHorizontalBarController.f_PERCENT__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController_ = 10;
$Util.$setClassMetadata(MyHorizontalBarController, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarController");

exports = MyHorizontalBarController;

//# sourceMappingURL=MyHorizontalBarController.js.map
