/**
 * Created with IntelliJ IDEA.
 * User: Drew
 * Date: 3/26/13
 * Time: 7:37 AM
 * To change this template use File | Settings | File Templates.
 */

//setup to happen only on document ready event
$(document).ready(function() {
    //rename the name in the navbar to represent the name of the application as defined in the properties file.
    $("a#appName").text(_appProps.name);

    //rename the title of the page to the name of the application
    document.title = _appProps.name;
});