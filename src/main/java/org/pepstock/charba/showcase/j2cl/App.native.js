// Defer this command
setTimeout(function(){
  // Call the java "constructor" method
  var ep = App.$create__();
  // Invoke onModuleLoad to start the app.
  ep.m_onModuleLoad__()
}, 100);

