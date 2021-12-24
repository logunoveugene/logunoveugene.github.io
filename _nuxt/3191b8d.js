(window.webpackJsonp=window.webpackJsonp||[]).push([[14,5],{508:function(e,n,t){e.exports=t.p+"img/welcome.03b8662.png"},518:function(e,n,t){var content=t(532);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(37).default)("7a582f6d",content,!0,{sourceMap:!1})},528:function(e,n,t){"use strict";t.r(n);var r,o=t(51),l=t(12),d=(t(58),t(71),t(43),t(27)),f={props:{profession:""},computed:{professionString:{get:function(){return this.profession},set:function(e){this.$emit("update:profession",e)}}},methods:{selectItem:function(e){this.$emit("selectItem",e)},querySearch:function(e,n){var t=this;return Object(l.a)(regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:t.$apollo.query({query:Object(d.a)(r||(r=Object(o.a)(["\n            query SearchProfesion($query: String!) {\n              professions(where: { name: { _ilike: $query } }, limit: 10) {\n                id\n                name\n              }\n            }\n          "]))),variables:{query:"%".concat(e,"%")}}).then((function(e){var t=e.data.professions.map((function(e){return{name:e.name,id:e.id}}));n(t)}));case 1:case"end":return l.stop()}}),l)})))()}}},m=t(17),component=Object(m.a)(f,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{},[t("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":e.querySearch,placeholder:"Профессия"},on:{select:e.selectItem},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.item;return[t("div",{staticClass:"value"},[e._v(e._s(r.name))])]}}]),model:{value:e.professionString,callback:function(n){e.professionString=n},expression:"professionString"}})],1)}),[],!1,null,null,null);n.default=component.exports},531:function(e,n,t){"use strict";t(518)},532:function(e,n,t){var r=t(36)(!1);r.push([e.i,'.profile{width:100%}.profile__form{max-width:340px}.profile__title{font-family:"Raleway",sans-serif;font-size:55px;line-height:65px;margin-bottom:24px}',""]),e.exports=r},554:function(e,n,t){"use strict";t.r(n);var r,o,l,d=t(12),f=t(51),m=(t(58),t(71),t(43),t(27)),c=t(305),_=t(528),h={components:{professionGradeTree:c.default,ProfessionSearch:_.default},layout:"default",nhostAuth:!0,data:function(){return{teamId:this.$nhost.auth.getClaim("x-hasura-team-id"),gradeLavelSync:[{id:"1",name:"Junior"},{id:"2",name:"Middle"},{id:"3",name:"Senior"},{id:"4",name:""}],isLoading:!1,professionSearchValue:"",ruleForm:{team:"",profession:"",professionGradeList:[]},rules:{team:[{required:!0,message:"Укажите название команды",trigger:"blur"}],profession:[{required:!0,message:"Выберите профессию",trigger:"change"}]}}},methods:{gradeListUpdateHandler:function(e){this.professionGradeList=e},gradeListWithProfession:function(){var e=this;return this.professionGradeList.map((function(element){return element.profession_id=e.ruleForm.profession.id,element}))},info:function(){console.log(this.$nhost.auth.getClaim("x-hasura-user-id")),console.log(this.$nhost.auth.getClaim("x-hasura-team-id"))},handleSelect:function(e){console.log(e),this.ruleForm.profession=e,this.professionSearchValue=e.name},submitForm:function(e){var n=this;this.$refs[e].validate((function(e){var t=n.ruleForm;if(!e)return console.log("error submit!!"),!1;n.isLoading=!0,"null"!==n.$nhost.auth.getClaim("x-hasura-team-id")?(console.log({user_id:n.$nhost.auth.getClaim("x-hasura-user-id"),team_id:n.$nhost.auth.getClaim("x-hasura-default-team-id"),profession_id:t.profession.id,team_name:t.team,gradelist:n.gradeListWithProfession()}),n.$apollo.mutate({mutation:Object(m.a)(r||(r=Object(f.a)(["\n                    mutation MyMutation(\n                    $profession_id: String!\n                    $team_name: String!\n                    $user_id: uuid!\n                    $team_id: String!\n                    $gradelist: [profession_grades_insert_input!]!\n                  ) {\n                    insert_users(\n                      on_conflict: {\n                        constraint: users_pkey\n                        update_columns: [default_team_id, profession_id]\n                      }\n                      objects: {\n                        team: {\n                          data: {\n                            id: $team_id\n                            name: $team_name\n                            profession_id: $profession_id\n                            profession_grades: {\n                              data: $gradelist\n                              on_conflict: {\n                                constraint: profession_grades_pkey\n                                update_columns:[name,profession_id]\n                              }\n                            }\n                          }\n                          on_conflict: {\n                            constraint: teams_pkey\n                            update_columns: [name, profession_id]\n                          }\n                        }\n                        id: $user_id\n                        profession_id: $profession_id\n                      }\n                    ) {\n                      affected_rows\n                      returning {\n                        team {\n                          profession_grades {\n                            id\n                            name\n                          }\n                        }\n                      }\n                    }\n                  }\n                "]))),variables:{user_id:n.$nhost.auth.getClaim("x-hasura-user-id"),team_id:n.$nhost.auth.getClaim("x-hasura-default-team-id"),profession_id:t.profession.id,team_name:t.team,gradelist:n.gradeListWithProfession()}}).then((function(){n.isLoading=!1,n.$router.push({path:"/skill-map"})})).catch((function(e){n.isLoading=!1,console.error(e)}))):(console.log({user_id:n.$nhost.auth.getClaim("x-hasura-user-id"),profession_id:t.profession.id,team_name:t.team,gradelist:n.gradeListWithProfession()}),n.$apollo.mutate({mutation:Object(m.a)(o||(o=Object(f.a)(["\n                  mutation MyMutation(\n                    $profession_id: uuid!\n                    $team_name: String!\n                    $user_id: uuid!\n                    $gradelist: [profession_grade_insert_input!]!\n                  ) {\n                    insert_users(\n                      on_conflict: {\n                        constraint: users_pkey\n                        update_columns: [team_id, profession_id]\n                      }\n                      objects: {\n                        team: {\n                          data: {\n                            name: $team_name\n                            profession_id: $profession_id\n                            profession_grades: { data: $gradelist }\n                          }\n                        }\n                        id: $user_id\n                        profession_id: $profession_id\n                      }\n                    ) {\n                      affected_rows\n                    }\n                  }\n                "]))),variables:{user_id:n.$nhost.auth.getClaim("x-hasura-user-id"),profession_id:t.profession.id,team_name:t.team,gradelist:n.gradeListWithProfession()}}).then((function(){n.isLoading=!1,window.location.href="https://rondi-71d9b.web.app/skill-map"})).catch((function(e){n.isLoading=!1,console.error(e)})))}))}},fetch:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isLoading=!0,n.next=3,e.$apollo.query({query:Object(m.a)(l||(l=Object(f.a)(["\n          query professionPreset($userId: uuid!) {\n            users(where: { id: { _eq: $userId } }) {\n              profession {\n                id\n                name\n              }\n              team {\n                id\n                name\n                profession_grades {\n                  id\n                  name\n                  sort_number\n                }\n              }\n            }\n          }\n        "]))),variables:{userId:e.$nhost.auth.currentUser.id}}).then((function(n){var data=n.data;e.isLoading=!1,console.log(data),data.users[0].profession&&(e.handleSelect({id:data.users[0].profession.id,name:data.users[0].profession.name}),e.professionSearchValue=data.users[0].profession.name,console.log("передал в проп"+e.professionSearchValue)),data.users[0].team&&(e.ruleForm.team=data.users[0].team.name,data.users[0].team.profession_grades.length>0&&(e.gradeLavelSync=data.users[0].team.profession_grades,""!==e.gradeLavelSync[e.gradeLavelSync.length-1].name&&e.gradeLavelSync.push({id:Date.now(),name:""})))}));case 3:case"end":return n.stop()}}),n)})))()}},v=(t(531),t(17)),component=Object(v.a)(h,(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"profile"},[r("welcomelayoutPlate",{scopedSlots:e._u([{key:"formside",fn:function(){return[r("div",{staticClass:"profile__title"},[e._v("Ваша команда")]),e._v(" "),r("div",{staticClass:"profile__form"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"label-position":"top",model:e.ruleForm,rules:e.rules}},[r("el-form-item",{attrs:{prop:"team"}},[r("el-input",{attrs:{placeholder:"Название команды"},model:{value:e.ruleForm.team,callback:function(n){e.$set(e.ruleForm,"team",n)},expression:"ruleForm.team"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"profession"}},[r("profession-search",{attrs:{profession:e.professionSearchValue},on:{"update:profession":function(n){e.professionSearchValue=n},selectItem:e.handleSelect}})],1),e._v(" "),r("el-form-item",[r("div",{},[e._v("Уровни")]),e._v(" "),r("profession-grade-tree",{attrs:{gradeLavel:e.gradeLavelSync},on:{gradeListUpdate:e.gradeListUpdateHandler}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(n){return e.submitForm("ruleForm")}}},[e._v("\n              Сохранить\n            ")])],1)],1)],1)]},proxy:!0},{key:"imageside",fn:function(){return[r("img",{attrs:{src:t(508),alt:""}}),e._v(" "),r("button",{on:{click:e.info}},[e._v("Инфо")]),e._v("\n      "+e._s(e.teamId)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);n.default=component.exports}}]);