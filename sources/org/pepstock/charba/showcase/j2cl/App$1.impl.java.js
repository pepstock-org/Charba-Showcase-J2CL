goog.module('org.pepstock.charba.showcase.j2cl.App.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Runnable = goog.require('java.lang.Runnable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let GeoUtils = goog.forwardDeclare('org.pepstock.charba.client.geo.GeoUtils$impl');
let App = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.App$impl');
let Earthmap = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.topojson.Earthmap$impl');
let Europemap = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.topojson.Europemap$impl');
let Germanymap = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.topojson.Germanymap$impl');
let Italymap = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.topojson.Italymap$impl');
let USmap = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.topojson.USmap$impl');

/**
 * @implements {Runnable}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {App}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_App_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_App(/** App */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_App_1__org_pepstock_charba_showcase_j2cl_App($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_App_1__org_pepstock_charba_showcase_j2cl_App(/** App */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_App_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_run__() {
  let us = USmap.$create__();
  let earth = Earthmap.$create__();
  let europe = Europemap.$create__();
  let germany = Germanymap.$create__();
  let italy = Italymap.$create__();
  App.f_EARTH_FEATURES__org_pepstock_charba_showcase_j2cl_App = GeoUtils.m_features__java_lang_String__java_lang_String(earth.m_getContent__(), "countries");
  App.f_US__org_pepstock_charba_showcase_j2cl_App = GeoUtils.m_createTopoJson__java_lang_String(us.m_getContent__());
  App.f_EUROPE__org_pepstock_charba_showcase_j2cl_App = GeoUtils.m_createTopoJson__java_lang_String(europe.m_getContent__());
  App.f_ITALY__org_pepstock_charba_showcase_j2cl_App = GeoUtils.m_createTopoJson__java_lang_String(italy.m_getContent__());
  App.f_GERMANY__org_pepstock_charba_showcase_j2cl_App = GeoUtils.m_createTopoJson__java_lang_String(germany.m_getContent__());
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
  GeoUtils = goog.module.get('org.pepstock.charba.client.geo.GeoUtils$impl');
  App = goog.module.get('org.pepstock.charba.showcase.j2cl.App$impl');
  Earthmap = goog.module.get('org.pepstock.charba.showcase.j2cl.topojson.Earthmap$impl');
  Europemap = goog.module.get('org.pepstock.charba.showcase.j2cl.topojson.Europemap$impl');
  Germanymap = goog.module.get('org.pepstock.charba.showcase.j2cl.topojson.Germanymap$impl');
  Italymap = goog.module.get('org.pepstock.charba.showcase.j2cl.topojson.Italymap$impl');
  USmap = goog.module.get('org.pepstock.charba.showcase.j2cl.topojson.USmap$impl');
 }
}
Runnable.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.App$1");

exports = $1;

//# sourceMappingURL=App$1.js.map
