/**
 * Created with IntelliJ IDEA.
 * User: Drew
 * Date: 3/26/13
 * Time: 8:11 AM
 * To change this template use File | Settings | File Templates.
 */

//The pre-compiled 404 template page
var template404 = _.template(
    "<div class=\"span12 text-center\">" +
        "<h1><b><span class=\"bigger\">404.</span> Page Not Found!</b></h1>" +
        "<br>" +
        "The resource \"<em><%= path %></em>\" is not available." +
    "</div>"
);

//A basic welcome to the application template
var templateBasicWelcome = _.template(
    "<div class=\"span8 offset2 text-center\">" +
        "<span class=\"bigger\"><strong>Welcome</strong> to <span class=\"underline\"><%= appName %></span></span>" +
        "<p><%= desc %></p>" +
    "</div>",
    {appName:_appProps.name, desc:_appProps.description}
);

//A simple about template page
var templateSimpleAbout = _.template(
    "<div class=\"span8 \">" +
        "<span class=\"bigger\"><span class=\"underline\"><%= appName %></span></span>" +
        "<br>" +
        "<br>" +
        "<b>Description: </b>" +
        "<p><%= desc %></p>" +
        "<b>Author: </b>" +
        "<p><%= author %></p>" +
        "<b>Technologies Used:</b>" +
        "<ul>" +
            "<li><a href='http://twitter.github.com/bootstrap/index.html' target='_blank'>Twitter Bootstrap</a></li>" +
            "<li><a href='http://underscorejs.org/' target='_blank'>Underscore.js</a></li>" +
            "<li><a href='http://backbonejs.org/' target='_blank'>Backbone.js</a></li>" +
            "<li><a href='http://jquery.com/' target='_blank'>JQuery</a></li>" +
            //add additional technologies here
        "</ul>" +
    "</div>",
    {appName:_appProps.name, desc:_appProps.description, author:_appProps.author}
);