goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartAnimationCollection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimationCollection = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationCollection$impl');
const AbstractDefaultChartAnimation = goog.require('org.pepstock.charba.client.defaults.chart.AbstractDefaultChartAnimation$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let AnimationType = goog.forwardDeclare('org.pepstock.charba.client.enums.AnimationType$impl');
let IsAnimationPropertyKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsAnimationPropertyKey$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractDefaultChartAnimation<IsDefaultAnimationCollection>}
 * @implements {IsDefaultAnimationCollection}
 */
class DefaultChartAnimationCollection extends AbstractDefaultChartAnimation {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultChartAnimationCollection} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultAnimationCollection(/** IsDefaultAnimationCollection */ collection) {
  DefaultChartAnimationCollection.$clinit();
  let $instance = new DefaultChartAnimationCollection();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartAnimationCollection__org_pepstock_charba_client_defaults_IsDefaultAnimationCollection(collection);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartAnimationCollection__org_pepstock_charba_client_defaults_IsDefaultAnimationCollection(/** IsDefaultAnimationCollection */ collection) {
  this.$ctor__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartAnimation__org_pepstock_charba_client_defaults_IsDefaultBaseAnimation(collection);
 }
 /** @override @return {List<IsAnimationPropertyKey>} */
 m_getProperties__() {
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaults___$pp_org_pepstock_charba_client_defaults_chart(), IsDefaultAnimationCollection)).m_getProperties__();
 }
 /** @override @return {AnimationType} */
 m_getType__() {
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaults___$pp_org_pepstock_charba_client_defaults_chart(), IsDefaultAnimationCollection)).m_getType__();
 }
 /** @override @return {number} */
 m_getFrom__() {
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaults___$pp_org_pepstock_charba_client_defaults_chart(), IsDefaultAnimationCollection)).m_getFrom__();
 }
 /** @override @return {boolean} */
 m_getFromAsBoolean__() {
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaults___$pp_org_pepstock_charba_client_defaults_chart(), IsDefaultAnimationCollection)).m_getFromAsBoolean__();
 }
 /** @override @return {?string} */
 m_getFromAsString__() {
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaults___$pp_org_pepstock_charba_client_defaults_chart(), IsDefaultAnimationCollection)).m_getFromAsString__();
 }
 /** @override @return {number} */
 m_getTo__() {
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaults___$pp_org_pepstock_charba_client_defaults_chart(), IsDefaultAnimationCollection)).m_getTo__();
 }
 /** @override @return {boolean} */
 m_getToAsBoolean__() {
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaults___$pp_org_pepstock_charba_client_defaults_chart(), IsDefaultAnimationCollection)).m_getToAsBoolean__();
 }
 /** @override @return {?string} */
 m_getToAsString__() {
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaults___$pp_org_pepstock_charba_client_defaults_chart(), IsDefaultAnimationCollection)).m_getToAsString__();
 }
 
 static $clinit() {
  DefaultChartAnimationCollection.$clinit = () =>{};
  DefaultChartAnimationCollection.$loadModules();
  AbstractDefaultChartAnimation.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartAnimationCollection;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultAnimationCollection.$markImplementor(DefaultChartAnimationCollection);
$Util.$setClassMetadata(DefaultChartAnimationCollection, "org.pepstock.charba.client.defaults.chart.DefaultChartAnimationCollection");

exports = DefaultChartAnimationCollection;

//# sourceMappingURL=DefaultChartAnimationCollection.js.map
