"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../utils/User");
var Company_1 = require("./Company");
var CustomMap_1 = require("./CustomMap");
var user = new User_1.User();
var company = new Company_1.Company();
var customMap = new CustomMap_1.CustomMap('map');
console.log('user', user);
console.log('company', company);
console.log('customMap', customMap);
customMap.addMarker(user);
customMap.addMarker(company);
console.log('customMap after markers', customMap);