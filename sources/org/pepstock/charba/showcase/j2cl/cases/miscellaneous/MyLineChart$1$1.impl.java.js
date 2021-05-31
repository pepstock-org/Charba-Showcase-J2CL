goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart.$1.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractController = goog.require('org.pepstock.charba.client.controllers.AbstractController$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerContext.$Overlay$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Context2dItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let DatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElement$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart.$1$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $1_$1 extends AbstractController {
 /** @protected */
 constructor() {
  super();
  /**@type {$1}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart_1_1;
 }
 /** @return {!$1_$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart_1__org_pepstock_charba_client_controllers_ControllerType(/** $1 */ $outer_this, /** ControllerType */ $_0) {
  $1_$1.$clinit();
  let $instance = new $1_$1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart_1_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart_1__org_pepstock_charba_client_controllers_ControllerType($outer_this, $_0);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart_1_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart_1__org_pepstock_charba_client_controllers_ControllerType(/** $1 */ $outer_this, /** ControllerType */ $_0) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart_1_1 = $outer_this;
  this.$ctor__org_pepstock_charba_client_controllers_AbstractController__org_pepstock_charba_client_controllers_ControllerType($_0);
 }
 /** @override */
 m_onAfterDraw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {
  let item = chart.m_getDatasetItem__int($Overlay.m_getIndex__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context));
  let elements = item.m_getElements__();
  for (let $iterator = elements.m_iterator__(); $iterator.m_hasNext__(); ) {
   let elem = /**@type {DatasetElement}*/ ($Casts.$to($iterator.m_next__(), DatasetElement));
   {
    let ctx = Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(chart.m_getCanvas__());
    ctx.save();
    Context2dItem_$Overlay.m_setStrokeColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(ctx, elem.m_getOptions__().m_getBorderColorAsString__());
    ctx.lineWidth = 1;
    ctx.strokeRect(elem.m_getX__() - 10, elem.m_getY__() - 10, 20, 20);
    ctx.restore();
   }
  }
 }
 
 static $clinit() {
  $1_$1.$clinit = () =>{};
  $1_$1.$loadModules();
  AbstractController.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1_$1;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.pepstock.charba.client.controllers.ControllerContext.$Overlay$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Context2dItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
  DatasetElement = goog.module.get('org.pepstock.charba.client.items.DatasetElement$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($1_$1, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart$1$1");

exports = $1_$1;

//# sourceMappingURL=MyLineChart$1$1.js.map
