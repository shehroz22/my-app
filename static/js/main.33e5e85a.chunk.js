(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(13),a(1));var s=function(e){return e.Alert&&l.a.createElement("div",{className:"alert alert-".concat(e.Alert.typ," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.Alert.typ)),e.Alert.msg)};function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{onClick:e.togglemode,className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"enable dark mode")))))}function i(e){var t=Object(n.useState)("Enter text here"),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{color:"dark"===e.mode?"white":"black"},className:"container"},l.a.createElement("h1",null," ",e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},value:r,onChange:function(e){c(e.target.value)},id:"mybox",className:"form-control",rows:"8"})),l.a.createElement("button",{onClick:function(){var t=r.toUpperCase();e.ShowAlert("converted to uppercase","success"),c(t)}},"click to uppercase"),l.a.createElement("button",{className:"mx-2",onClick:function(){var t=r.toLowerCase();e.ShowAlert("converted to lowercase","success"),c(t)}},"click to lowercase")),l.a.createElement("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null,"text summary"),l.a.createElement("p",null,r.split(" ").length," are words and ",r.length," are characters"),l.a.createElement("p",null,.008*r.split(" ").length," minutes it take to read "),l.a.createElement("h2",null,"preview"),l.a.createElement("p",null,r.length>0?r:"Enter text")))}m.defaultProps={title:"this is default prop"};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],h=function(e,t){b({msg:e,typ:t}),setTimeout(function(){b(null)},1500)};return l.a.createElement(l.a.Fragment,null," ",l.a.createElement(m,{title:"Navbar",mode:a,togglemode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#212559",h("dark mode has been alert","success")):(r("light"),document.body.style.backgroundColor="white",h("dark mode has been disabled","success"))}}),l.a.createElement(s,{Alert:d}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(i,{ShowAlert:h,heading:"enter the text",mode:a})))},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(14)}},[[4,1,2]]]);
//# sourceMappingURL=main.33e5e85a.chunk.js.map