goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FlagsPluginOnBarCase.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPlugin = goog.require('org.pepstock.charba.client.plugins.AbstractPlugin$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Context2dItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let PluginResizeArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginResizeArgument$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let ScaleTickItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleTickItem$impl');
let Images = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.Images$impl');
let FlagsPluginOnBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FlagsPluginOnBarCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $1 extends AbstractPlugin {
 /** @protected */
 constructor() {
  super();
  /**@type {FlagsPluginOnBarCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase__java_lang_String(/** FlagsPluginOnBarCase */ $outer_this, /** ?string */ $_0) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase__java_lang_String($outer_this, $_0);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase__java_lang_String(/** FlagsPluginOnBarCase */ $outer_this, /** ?string */ $_0) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_1 = $outer_this;
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPlugin__java_lang_String($_0);
 }
 /** @override */
 m_onAfterDatasetsDraw__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  let padding = 4;
  let ctx = $Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(chart.m_getCanvas__());
  let scale = /**@type {ScaleItem}*/ ($Casts.$to(chart.m_getNode__().m_getScales__().m_getItems__().get(DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId.m_value__()), ScaleItem));
  let ticks = scale.m_getTicks__();
  let heightAmongLabels = (scale.m_getBottom__() - scale.m_getTop__()) / ticks.size();
  let height = Math.min(heightAmongLabels - Math.imul(padding, 2), FlagsPluginOnBarCase.f_MIN__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_);
  let width = Math.min(60 * height / 40, this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_1.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_getTitle__().m_getPadding__().m_getTop__() - padding | 0);
  let x = scale.m_getLeft__() + this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_1.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_getTitle__().m_getPadding__().m_getTop__() - width + this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_1.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_getTitle__().m_getFont__().m_getSize__();
  let y = scale.m_getTop__();
  for (let $iterator = ticks.m_iterator__(); $iterator.m_hasNext__(); ) {
   let tick = /**@type {ScaleTickItem}*/ ($Casts.$to($iterator.m_next__(), ScaleTickItem));
   {
    let image = null;
    if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(tick.m_getLabel__(), "br")) {
     image = this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_1.m_getImageElement__elemental2_dom_HTMLImageElement_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase(Images.m_get__().f_flagBR__org_pepstock_charba_showcase_j2cl_cases_commons_Images);
    } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(tick.m_getLabel__(), "de")) {
     image = this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_1.m_getImageElement__elemental2_dom_HTMLImageElement_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase(Images.m_get__().f_flagDE__org_pepstock_charba_showcase_j2cl_cases_commons_Images);
    } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(tick.m_getLabel__(), "fr")) {
     image = this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_1.m_getImageElement__elemental2_dom_HTMLImageElement_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase(Images.m_get__().f_flagFR__org_pepstock_charba_showcase_j2cl_cases_commons_Images);
    } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(tick.m_getLabel__(), "gb")) {
     image = this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_1.m_getImageElement__elemental2_dom_HTMLImageElement_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase(Images.m_get__().f_flagGB__org_pepstock_charba_showcase_j2cl_cases_commons_Images);
    } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(tick.m_getLabel__(), "it")) {
     image = this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_1.m_getImageElement__elemental2_dom_HTMLImageElement_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase(Images.m_get__().f_flagIT__org_pepstock_charba_showcase_j2cl_cases_commons_Images);
    } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(tick.m_getLabel__(), "us")) {
     image = this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_1.m_getImageElement__elemental2_dom_HTMLImageElement_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase(Images.m_get__().f_flagUS__org_pepstock_charba_showcase_j2cl_cases_commons_Images);
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
 m_onResize__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginResizeArgument(/** IsChart */ chart, /** PluginResizeArgument */ argument) {
  let width = argument.m_getSizeItem__().m_getWidth__();
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_1.m_calculateAndSetScaleLabelPadding__double_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase(width);
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  AbstractPlugin.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Context2dItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  ScaleItem = goog.module.get('org.pepstock.charba.client.items.ScaleItem$impl');
  ScaleTickItem = goog.module.get('org.pepstock.charba.client.items.ScaleTickItem$impl');
  Images = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.commons.Images$impl');
  FlagsPluginOnBarCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FlagsPluginOnBarCase$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FlagsPluginOnBarCase$1");

exports = $1;

//# sourceMappingURL=FlagsPluginOnBarCase$1.js.map
