goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.GeoBubbleMapUSCase.Capital$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');

class Capital extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_state__org_pepstock_charba_showcase_j2cl_cases_charts_GeoBubbleMapUSCase_Capital_;
  /**@type {?string}*/
  this.f_capital__org_pepstock_charba_showcase_j2cl_cases_charts_GeoBubbleMapUSCase_Capital_;
  /**@type {number}*/
  this.f_latitude__org_pepstock_charba_showcase_j2cl_cases_charts_GeoBubbleMapUSCase_Capital_ = 0;
  /**@type {number}*/
  this.f_longitude__org_pepstock_charba_showcase_j2cl_cases_charts_GeoBubbleMapUSCase_Capital_ = 0;
 }
 /** @return {!Capital} */
 static $create__java_lang_String(/** ?string */ record) {
  Capital.$clinit();
  let $instance = new Capital();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_GeoBubbleMapUSCase_Capital__java_lang_String(record);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_GeoBubbleMapUSCase_Capital__java_lang_String(/** ?string */ record) {
  this.$ctor__java_lang_Object__();
  let values = j_l_String.m_split__java_lang_String__java_lang_String(record, ",");
  this.f_state__org_pepstock_charba_showcase_j2cl_cases_charts_GeoBubbleMapUSCase_Capital_ = values[0];
  this.f_capital__org_pepstock_charba_showcase_j2cl_cases_charts_GeoBubbleMapUSCase_Capital_ = values[1];
  this.f_latitude__org_pepstock_charba_showcase_j2cl_cases_charts_GeoBubbleMapUSCase_Capital_ = Double.m_parseDouble__java_lang_String(values[2]);
  this.f_longitude__org_pepstock_charba_showcase_j2cl_cases_charts_GeoBubbleMapUSCase_Capital_ = Double.m_parseDouble__java_lang_String(values[3]);
 }
 
 static $clinit() {
  Capital.$clinit = () =>{};
  Capital.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Capital;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
 }
}
$Util.$setClassMetadata(Capital, "org.pepstock.charba.showcase.j2cl.cases.charts.GeoBubbleMapUSCase$Capital");

exports = Capital;

//# sourceMappingURL=GeoBubbleMapUSCase$Capital.js.map
