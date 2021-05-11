goog.module('org.pepstock.charba.showcase.j2cl.cases.commons.AbstractComposite$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let GradientBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientBuilder$impl');
let GradientScope = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientScope$impl');
let GradientType = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientType$impl');
let GwtMaterialColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GwtMaterialColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

/**
 * @abstract
 */
class AbstractComposite extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite = 0;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite();
 }
 /** @abstract @return {HTMLElement} */
 m_getElement__() {}
 /** @return {Array<?string>} */
 m_getLabels__() {
  return this.m_getLabels__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite);
 }
 /** @return {Array<?string>} */
 m_getLabels__int(/** number */ size) {
  let values = /**@type {!Array<?string>}*/ ($Arrays.$create([size], j_l_String));
  for (let i = 0; i < size; i = i + 1 | 0) {
   $Arrays.$set(values, i, AbstractComposite.$static_MONTHS__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite[i]);
  }
  return values;
 }
 /** @return {?string} */
 m_getLabel__() {
  return AbstractComposite.$static_MONTHS__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite[this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite];
 }
 /** @return {Array<number>} */
 m_getRandomDigits__int(/** number */ length) {
  return this.m_getRandomDigits__int__boolean(length, true);
 }
 /** @return {Array<number>} */
 m_getRandomDigits__int__boolean(/** number */ length, /** boolean */ negative) {
  let values = /**@type {!Array<number>}*/ ($Arrays.$create([length], $double));
  for (let i = 0; i < length; i = i + 1 | 0) {
   if (negative) {
    let neg = Math.random() < 0.2 ? true : false;
    $Arrays.$set(values, i, $Primitives.$widenLongToDouble(neg ? j_l_Math.m_round__double(Math.random() * (-100 | 0)) : j_l_Math.m_round__double(Math.random() * 100)));
   } else {
    $Arrays.$set(values, i, $Primitives.$widenLongToDouble(j_l_Math.m_round__double(Math.random() * 100)));
   }
  }
  return values;
 }
 /** @return {number} */
 m_getRandomDigit__double__double(/** number */ min, /** number */ max) {
  return $Primitives.$narrowDoubleToInt(Math.random() * (max - min)) + min;
 }
 /** @return {number} */
 m_getRandomDigit__() {
  return this.m_getRandomDigit__boolean(true);
 }
 /** @return {number} */
 m_getRandomDigit__boolean(/** boolean */ negative) {
  if (negative) {
   let neg = Math.random() < 0.2 ? true : false;
   return $Primitives.$widenLongToDouble(neg ? j_l_Math.m_round__double(Math.random() * (-100 | 0)) : j_l_Math.m_round__double(Math.random() * 100));
  } else {
   return $Primitives.$widenLongToDouble(j_l_Math.m_round__double(Math.random() * 100));
  }
 }
 /** @return {Array<number>} */
 m_getRandomDigits__int__double__double(/** number */ length, /** number */ min, /** number */ max) {
  let values = /**@type {!Array<number>}*/ ($Arrays.$create([length], $double));
  for (let i = 0; i < length; i = i + 1 | 0) {
   $Arrays.$set(values, i, $Primitives.$narrowDoubleToInt(Math.random() * (max - min)) + min);
  }
  return values;
 }
 /** @return {Array<number>} */
 m_getRandomDigitsLog__int(/** number */ length) {
  let values = /**@type {!Array<number>}*/ ($Arrays.$create([length], $double));
  for (let i = 0; i < length; i = i + 1 | 0) {
   $Arrays.$set(values, i, Math.ceil(Math.random() * 10) * Math.pow(10, Math.ceil(Math.random() * 5)));
  }
  return values;
 }
 /** @return {Array<IsColor>} */
 m_getSequenceColors__int__double(/** number */ length, /** number */ alpha) {
  let values = /**@type {!Array<IsColor>}*/ ($Arrays.$create([length], IsColor));
  for (let i = 0; i < length; i = i + 1 | 0) {
   $Arrays.$set(values, i, GoogleChartColor.m_values__()[i].m_alpha__double(alpha));
  }
  return values;
 }
 /** @return {Array<Gradient>} */
 m_getRadialGradients__int(/** number */ length) {
  let colors = GwtMaterialColor.m_values__();
  let gradients = /**@type {!Array<Gradient>}*/ ($Arrays.$create([length], Gradient));
  for (let i = 0; i < length; i = i + 1 | 0) {
   let index = Math.imul(i, 14);
   let gradient = GradientBuilder.m_create__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientScope(GradientType.f_RADIAL__org_pepstock_charba_client_colors_GradientType, GradientScope.f_CHART__org_pepstock_charba_client_colors_GradientScope).m_addColorsStartStop__org_pepstock_charba_client_colors_IsColor__org_pepstock_charba_client_colors_IsColor(colors[index + 7 | 0], colors[index + 2 | 0]).m_build__();
   $Arrays.$set(gradients, i, gradient);
  }
  return gradients;
 }
 /** @return {Array<number>} */
 m_getFixedDigits__int(/** number */ length) {
  let values = /**@type {!Array<number>}*/ ($Arrays.$create([length], $double));
  for (let i = 0; i < length; i = i + 1 | 0) {
   $Arrays.$set(values, i, AbstractComposite.$static_FIXED__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite[i]);
  }
  return values;
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite() {
  this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite = 7;
 }
 /** @return {Array<?string>} */
 static get f_MONTHS__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite() {
  return (AbstractComposite.$clinit(), AbstractComposite.$static_MONTHS__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite);
 }
 /** @return {Array<number>} */
 static get f_FIXED__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite() {
  return (AbstractComposite.$clinit(), AbstractComposite.$static_FIXED__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite);
 }
 
 static $clinit() {
  AbstractComposite.$clinit = () =>{};
  AbstractComposite.$loadModules();
  j_l_Object.$clinit();
  AbstractComposite.$static_MONTHS__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite = /**@type {!Array<?string>}*/ ($Arrays.$init(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], j_l_String));
  AbstractComposite.$static_FIXED__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite = /**@type {!Array<number>}*/ ($Arrays.$init([20, 10, 40, 35, 50, 70, 80, 30, 55, 15, 100, 90], $double));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractComposite;
 }
 
 static $loadModules() {
  j_l_Math = goog.module.get('java.lang.Math$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Gradient = goog.module.get('org.pepstock.charba.client.colors.Gradient$impl');
  GradientBuilder = goog.module.get('org.pepstock.charba.client.colors.GradientBuilder$impl');
  GradientScope = goog.module.get('org.pepstock.charba.client.colors.GradientScope$impl');
  GradientType = goog.module.get('org.pepstock.charba.client.colors.GradientType$impl');
  GwtMaterialColor = goog.module.get('org.pepstock.charba.client.colors.GwtMaterialColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
/**@private {Array<?string>}*/
AbstractComposite.$static_MONTHS__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite;
/**@private {Array<number>}*/
AbstractComposite.$static_FIXED__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite;
$Util.$setClassMetadata(AbstractComposite, "org.pepstock.charba.showcase.j2cl.cases.commons.AbstractComposite");

exports = AbstractComposite;

//# sourceMappingURL=AbstractComposite.js.map
