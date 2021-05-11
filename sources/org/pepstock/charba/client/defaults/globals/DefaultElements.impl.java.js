goog.module('org.pepstock.charba.client.defaults.globals.DefaultElements$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultElements = goog.require('org.pepstock.charba.client.defaults.IsDefaultElements$impl');

let IsDefaultArc = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultArc$impl');
let IsDefaultBar = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultBar$impl');
let IsDefaultLine = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultLine$impl');
let IsDefaultPoint = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPoint$impl');
let DefaultArc = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultArc$impl');
let DefaultBar = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultBar$impl');
let DefaultLine = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultLine$impl');
let DefaultPoint = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultPoint$impl');

/**
 * @implements {IsDefaultElements}
 */
class DefaultElements extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultArc}*/
  this.f_arc__org_pepstock_charba_client_defaults_globals_DefaultElements_;
  /**@type {IsDefaultLine}*/
  this.f_line__org_pepstock_charba_client_defaults_globals_DefaultElements_;
  /**@type {IsDefaultPoint}*/
  this.f_point__org_pepstock_charba_client_defaults_globals_DefaultElements_;
  /**@type {IsDefaultBar}*/
  this.f_bar__org_pepstock_charba_client_defaults_globals_DefaultElements_;
 }
 //Factory method corresponding to constructor 'DefaultElements()'.
 /** @return {!DefaultElements} */
 static $create__() {
  DefaultElements.$clinit();
  let $instance = new DefaultElements();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultElements__();
  return $instance;
 }
 //Initialization from constructor 'DefaultElements()'.
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultElements__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultElements__org_pepstock_charba_client_defaults_IsDefaultArc__org_pepstock_charba_client_defaults_IsDefaultLine__org_pepstock_charba_client_defaults_IsDefaultPoint__org_pepstock_charba_client_defaults_IsDefaultBar(DefaultArc.$create__(), DefaultLine.$create__(), DefaultPoint.$create__(), DefaultBar.$create__());
 }
 //Factory method corresponding to constructor 'DefaultElements(IsDefaultArc, IsDefaultLine, IsDefaultPoint, IsDefaultBar)'.
 /** @return {!DefaultElements} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultArc__org_pepstock_charba_client_defaults_IsDefaultLine__org_pepstock_charba_client_defaults_IsDefaultPoint__org_pepstock_charba_client_defaults_IsDefaultBar(/** IsDefaultArc */ arc, /** IsDefaultLine */ line, /** IsDefaultPoint */ point, /** IsDefaultBar */ bar) {
  DefaultElements.$clinit();
  let $instance = new DefaultElements();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultElements__org_pepstock_charba_client_defaults_IsDefaultArc__org_pepstock_charba_client_defaults_IsDefaultLine__org_pepstock_charba_client_defaults_IsDefaultPoint__org_pepstock_charba_client_defaults_IsDefaultBar(arc, line, point, bar);
  return $instance;
 }
 //Initialization from constructor 'DefaultElements(IsDefaultArc, IsDefaultLine, IsDefaultPoint, IsDefaultBar)'.
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultElements__org_pepstock_charba_client_defaults_IsDefaultArc__org_pepstock_charba_client_defaults_IsDefaultLine__org_pepstock_charba_client_defaults_IsDefaultPoint__org_pepstock_charba_client_defaults_IsDefaultBar(/** IsDefaultArc */ arc, /** IsDefaultLine */ line, /** IsDefaultPoint */ point, /** IsDefaultBar */ bar) {
  this.$ctor__java_lang_Object__();
  this.f_arc__org_pepstock_charba_client_defaults_globals_DefaultElements_ = arc;
  this.f_line__org_pepstock_charba_client_defaults_globals_DefaultElements_ = line;
  this.f_point__org_pepstock_charba_client_defaults_globals_DefaultElements_ = point;
  this.f_bar__org_pepstock_charba_client_defaults_globals_DefaultElements_ = bar;
 }
 /** @override @return {IsDefaultArc} */
 m_getArc__() {
  return this.f_arc__org_pepstock_charba_client_defaults_globals_DefaultElements_;
 }
 /** @override @return {IsDefaultLine} */
 m_getLine__() {
  return this.f_line__org_pepstock_charba_client_defaults_globals_DefaultElements_;
 }
 /** @override @return {IsDefaultPoint} */
 m_getPoint__() {
  return this.f_point__org_pepstock_charba_client_defaults_globals_DefaultElements_;
 }
 /** @override @return {IsDefaultBar} */
 m_getBar__() {
  return this.f_bar__org_pepstock_charba_client_defaults_globals_DefaultElements_;
 }
 
 static $clinit() {
  DefaultElements.$clinit = () =>{};
  DefaultElements.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultElements;
 }
 
 static $loadModules() {
  DefaultArc = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultArc$impl');
  DefaultBar = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultBar$impl');
  DefaultLine = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultLine$impl');
  DefaultPoint = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultPoint$impl');
 }
}
IsDefaultElements.$markImplementor(DefaultElements);
$Util.$setClassMetadata(DefaultElements, "org.pepstock.charba.client.defaults.globals.DefaultElements");

exports = DefaultElements;

//# sourceMappingURL=DefaultElements.js.map
