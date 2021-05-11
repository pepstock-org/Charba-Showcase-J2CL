goog.module('org.pepstock.charba.client.defaults.globals.DefaultGrid$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultGrid = goog.require('org.pepstock.charba.client.defaults.IsDefaultGrid$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');

/**
 * @implements {IsDefaultGrid}
 */
class DefaultGrid extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultGrid} */
 static $create__() {
  DefaultGrid.$clinit();
  let $instance = new DefaultGrid();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultGrid__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultGrid__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return DefaultGrid.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_DefaultGrid_;
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return Defaults.m_get__().m_getGlobal__().m_getBorderColorAsString__();
 }
 /** @override @return {number} */
 m_getBorderDashOffset__() {
  return DefaultGrid.f_DEFAULT_BORDER_DASH_OFFSET__org_pepstock_charba_client_defaults_globals_DefaultGrid_;
 }
 /** @override @return {number} */
 m_getBorderWidth__() {
  return DefaultGrid.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultGrid_;
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return Defaults.m_get__().m_getGlobal__().m_getBorderColorAsString__();
 }
 /** @override @return {number} */
 m_getLineWidth__() {
  return DefaultGrid.f_DEFAULT_LINE_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultGrid_;
 }
 /** @override @return {boolean} */
 m_isDrawBorder__() {
  return DefaultGrid.f_DEFAULT_DRAW_BORDER__org_pepstock_charba_client_defaults_globals_DefaultGrid_;
 }
 /** @override @return {boolean} */
 m_isDrawOnChartArea__() {
  return DefaultGrid.f_DEFAULT_DRAW_ON_CHART_AREA__org_pepstock_charba_client_defaults_globals_DefaultGrid_;
 }
 /** @override @return {boolean} */
 m_isDrawTicks__() {
  return DefaultGrid.f_DEFAULT_DRAW_TICKS__org_pepstock_charba_client_defaults_globals_DefaultGrid_;
 }
 /** @override @return {number} */
 m_getTickLength__() {
  return DefaultGrid.f_DEFAULT_TICK_MARK_LENGTH__org_pepstock_charba_client_defaults_globals_DefaultGrid_;
 }
 /** @override @return {boolean} */
 m_isOffset__() {
  return DefaultGrid.f_DEFAULT_OFFSET__org_pepstock_charba_client_defaults_globals_DefaultGrid_;
 }
 /** @override @return {boolean} */
 m_isCircular__() {
  return DefaultGrid.f_DEFAULT_CIRCULAR__org_pepstock_charba_client_defaults_globals_DefaultGrid_;
 }
 /** @override @return {number} */
 m_getZ__() {
  return DefaultGrid.f_DEFAULT_Z__org_pepstock_charba_client_defaults_globals_DefaultGrid_;
 }
 /** @override @return {number} */
 m_getTickBorderDashOffset__() {
  return this.m_getBorderDashOffset__();
 }
 /** @override @return {?string} */
 m_getTickColorAsString__() {
  return this.m_getColorAsString__();
 }
 /** @override @return {number} */
 m_getTickWidth__() {
  return this.m_getLineWidth__();
 }
 /** @override @return {List<Integer>} */
 m_getBorderDash__() {
  return /**@type {List<Integer>}*/ (Collections.m_emptyList__());
 }
 
 static $clinit() {
  DefaultGrid.$clinit = () =>{};
  DefaultGrid.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultGrid;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
 }
}
/**@const {boolean}*/
DefaultGrid.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_DefaultGrid_ = true;
/**@const {number}*/
DefaultGrid.f_DEFAULT_BORDER_DASH_OFFSET__org_pepstock_charba_client_defaults_globals_DefaultGrid_ = 0;
/**@const {number}*/
DefaultGrid.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultGrid_ = 1;
/**@const {number}*/
DefaultGrid.f_DEFAULT_LINE_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultGrid_ = 1;
/**@const {boolean}*/
DefaultGrid.f_DEFAULT_DRAW_BORDER__org_pepstock_charba_client_defaults_globals_DefaultGrid_ = true;
/**@const {boolean}*/
DefaultGrid.f_DEFAULT_DRAW_ON_CHART_AREA__org_pepstock_charba_client_defaults_globals_DefaultGrid_ = true;
/**@const {boolean}*/
DefaultGrid.f_DEFAULT_DRAW_TICKS__org_pepstock_charba_client_defaults_globals_DefaultGrid_ = true;
/**@const {number}*/
DefaultGrid.f_DEFAULT_TICK_MARK_LENGTH__org_pepstock_charba_client_defaults_globals_DefaultGrid_ = 8;
/**@const {boolean}*/
DefaultGrid.f_DEFAULT_OFFSET__org_pepstock_charba_client_defaults_globals_DefaultGrid_ = false;
/**@const {boolean}*/
DefaultGrid.f_DEFAULT_CIRCULAR__org_pepstock_charba_client_defaults_globals_DefaultGrid_ = false;
/**@const {number}*/
DefaultGrid.f_DEFAULT_Z__org_pepstock_charba_client_defaults_globals_DefaultGrid_ = 0;
IsDefaultGrid.$markImplementor(DefaultGrid);
$Util.$setClassMetadata(DefaultGrid, "org.pepstock.charba.client.defaults.globals.DefaultGrid");

exports = DefaultGrid;

//# sourceMappingURL=DefaultGrid.js.map
