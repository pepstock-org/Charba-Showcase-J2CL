goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarController');

goog.require('elemental2.dom.HTMLImageElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartType');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.controllers.AbstractController');
goog.require('org.pepstock.charba.client.controllers.ControllerContext.$Overlay');
goog.require('org.pepstock.charba.client.controllers.ControllerProvider');
goog.require('org.pepstock.charba.client.controllers.ControllerType');
goog.require('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Canvas.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.CastHelper');
goog.require('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Img.$Overlay');
goog.require('org.pepstock.charba.client.enums.DefaultScaleId');
goog.require('org.pepstock.charba.client.items.ScaleItem');
goog.require('org.pepstock.charba.client.items.ScaleTickItem');
goog.require('org.pepstock.charba.client.options.Scale');
goog.require('org.pepstock.charba.client.options.TransitionKey');
goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.Images');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Primitives');

const MyHorizontalBarController = goog.require('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarController$impl');
exports = MyHorizontalBarController;

