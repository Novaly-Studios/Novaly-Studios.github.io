"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[957],{55734:function(e){e.exports=JSON.parse('{"functions":[{"name":"Filter1D","desc":"Turns any size Array into a one dimensional array","params":[{"name":"Array","desc":"","lua_type":"{[key: any]: any}"},{"name":"Condition","desc":"","lua_type":"(Value: any, Key: any) -> boolean"}],"returns":[{"desc":"","lua_type":"{[key: any]: any}"}],"function_type":"static","source":{"line":9,"path":"Libraries/TableUtil/Map/Filter1D.lua"}},{"name":"Keys1D","desc":"Takes an array and returns a set of just the keys","params":[{"name":"Structure","desc":"","lua_type":"{[key: any]: any}"}],"returns":[{"desc":"","lua_type":"{[number]: key}"}],"function_type":"static","source":{"line":9,"path":"Libraries/TableUtil/Map/Keys1D.lua"}},{"name":"Map1D","desc":"Turns a multi-dimensonal map into a one dimensional map","params":[{"name":"Structure","desc":"","lua_type":"{[key: any]: any}"},{"name":"Operation","desc":"","lua_type":"(Value: any, Key: any) -> (any, any | nil)"}],"returns":[{"desc":"","lua_type":"{[key: any]: any}"}],"function_type":"static","source":{"line":9,"path":"Libraries/TableUtil/Map/Map1D.lua"}},{"name":"Merge1D","desc":"Merges X amount of arguments into one list","params":[{"name":"...","desc":"Should be passed as Merge1D(1, 2, 3, 4, 5)","lua_type":"any..."}],"returns":[{"desc":"","lua_type":"{[number]: any}"}],"function_type":"static","source":{"line":8,"path":"Libraries/TableUtil/Map/Merge1D.lua"}},{"name":"MergeDeep","desc":"Performs a deep merge of a table into another table","params":[{"name":"Structure","desc":"","lua_type":"{[any]: any}"},{"name":"Into","desc":"","lua_type":"{[any]: any}"}],"returns":[{"desc":"","lua_type":"Structure + Into"}],"function_type":"static","tags":["Recursive"],"source":{"line":11,"path":"Libraries/TableUtil/Map/MergeDeep.lua"}},{"name":"Values1D","desc":"Takes in a map, returns only it\'s values in a numerical array","params":[{"name":"Structure","desc":"","lua_type":"{[any]: any}"}],"returns":[{"desc":"","lua_type":"{[number]: any}"}],"function_type":"static","source":{"line":8,"path":"Libraries/TableUtil/Map/Values1D.lua"}}],"properties":[],"types":[],"name":"Map","desc":"Field of TableUtil, should be accessed via TableUtil.Map\\nA collection of functions to work with Maps, which are Key Value pair table objects","source":{"line":6,"path":"Libraries/TableUtil/Map/init.lua"}}')}}]);