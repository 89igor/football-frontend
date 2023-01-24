"use strict";(self.webpackChunkangular_client=self.webpackChunkangular_client||[]).push([[825],{1963:(O,x,a)=>{a.d(x,{_:()=>m});var M=a(3900),n=a(2722),v=a(1834),r=a(3025),t=a(1223),_=a(1266),l=a(6404),f=a(6859),c=a(9808),g=a(6987),d=a(5129);function s(i,h){if(1&i){const o=t.EpF();t.TgZ(0,"div",6),t.NdJ("click",function(){const T=t.CHM(o).$implicit;return t.oxw(2).navigateToTeamPage(T.name)}),t.TgZ(1,"div",7),t._uU(2),t._UZ(3,"div",8),t.qZA(),t._UZ(4,"app-team",9),t.TgZ(5,"div"),t._uU(6),t.qZA(),t.TgZ(7,"div"),t._uU(8),t.qZA(),t.TgZ(9,"div"),t._uU(10),t.qZA(),t.TgZ(11,"div"),t._uU(12),t.qZA(),t.TgZ(13,"div"),t._uU(14),t.qZA(),t.TgZ(15,"div"),t._uU(16),t.qZA(),t.TgZ(17,"div"),t._uU(18),t.qZA()()}if(2&i){const o=h.$implicit;t.xp6(2),t.hij(" ",o.rank," "),t.xp6(1),t.Q6J("className","position-color "+o.class),t.xp6(1),t.Q6J("teamEmblem",o.logo_path)("teamName",o.name),t.xp6(2),t.Oqu(o.gamesPlayed),t.xp6(2),t.Oqu(o.points),t.xp6(2),t.Oqu(o.wins),t.xp6(2),t.Oqu(o.draws),t.xp6(2),t.Oqu(o.losses),t.xp6(2),t.Oqu(o.goalsTotal),t.xp6(2),t.Oqu(o.goalsDifference)}}function u(i,h){if(1&i){const o=t.EpF();t.TgZ(0,"app-more",10),t.NdJ("getMore",function(){return t.CHM(o),t.oxw(2).more()}),t.qZA()}if(2&i){const o=t.oxw(2);t.Q6J("loaderState",o.loaderState)}}function e(i,h){if(1&i&&(t.ynx(0),t.TgZ(1,"div",2)(2,"div",3)(3,"div"),t._uU(4,"ID"),t.qZA(),t.TgZ(5,"div"),t._uU(6,"Team"),t.qZA(),t.TgZ(7,"div"),t._uU(8,"GP"),t.qZA(),t.TgZ(9,"div"),t._uU(10,"P"),t.qZA(),t.TgZ(11,"div"),t._uU(12,"W"),t.qZA(),t.TgZ(13,"div"),t._uU(14,"D"),t.qZA(),t.TgZ(15,"div"),t._uU(16,"L"),t.qZA(),t.TgZ(17,"div"),t._uU(18,"G"),t.qZA(),t.TgZ(19,"div"),t._uU(20,"GD"),t.qZA()(),t.YNc(21,s,19,11,"div",4),t.qZA(),t.YNc(22,u,1,1,"app-more",5),t.BQk()),2&i){const o=t.oxw();t.xp6(21),t.Q6J("ngForOf",o.competitionStandings),t.xp6(1),t.Q6J("ngIf",o.lastLength!==o.competitionStandings.length)}}let m=(()=>{class i extends r.B{constructor(o,p){super(o),this.teamService=o,this.router=p,this.competitionStandings=[]}selectSeason(o){this.competitionStandings=[],super.selectSeason(o)}selectLeague(o){this.competitionStandings=[],super.selectLeague(o)}getData(){this.subject$.asObservable().pipe((0,M.w)(()=>this.teamService.getCompetitionStandings(this.count,this.offset,this.curSeason,this.curLeague)),(0,n.R)(this.subscription)).subscribe(o=>{this.lastLength=this.competitionStandings.length,this.competitionStandings=this.competitionStandings.concat(o.map(p=>Object.assign(Object.assign({},p),{class:(0,v.E)(p.name)}))),this.loaderState={val:!1}})}navigateToTeamPage(o){this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>this.router.navigate(["team",o]))}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(_.U),t.Y36(l.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-competition-standing"]],features:[t.qOj],decls:2,vars:8,consts:[["title","Competition Standings",3,"hasSelectLeague","leagues","curLeague","hasSelectRange","seasons","curSeason","leaguestat","selectedLeague","selectedSeason"],[4,"ngIf"],[1,"table-grid","nonepd"],[1,"grid-item","grid-header","nonemg","nonepd","py-3","nonebr"],["class","grid-item pointer",3,"click",4,"ngFor","ngForOf"],[3,"loaderState","getMore",4,"ngIf"],[1,"grid-item","pointer",3,"click"],[1,"position"],[3,"className"],[3,"teamEmblem","teamName"],[3,"loaderState","getMore"]],template:function(o,p){1&o&&(t.TgZ(0,"app-header-component",0),t.NdJ("selectedLeague",function(T){return p.selectLeague(T)})("selectedSeason",function(T){return p.selectSeason(T)}),t.qZA(),t.YNc(1,e,23,2,"ng-container",1)),2&o&&(t.Q6J("hasSelectLeague",!0)("leagues",p.leagues)("curLeague",p.curLeague)("hasSelectRange",!0)("seasons",p.seasons)("curSeason",p.curSeason)("leaguestat",!0),t.xp6(1),t.Q6J("ngIf",p.competitionStandings.length))},directives:[f.N,c.O5,c.sg,g.h,d.c],styles:["app-header-component[_ngcontent-%COMP%]{margin-bottom:16px}@media (max-width: 768px){app-header-component[_ngcontent-%COMP%]{margin-bottom:9px}}.grid-item[_ngcontent-%COMP%]{grid-template-columns:1fr 6fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;padding:11px 16px 12px;font-size:16px}@media (max-width: 768px){.grid-item[_ngcontent-%COMP%]{font-size:8px;padding:7px 7px 6px;grid-template-columns:1.5fr 6fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr}}.grid-header[_ngcontent-%COMP%]{padding:11px 0 10px}@media (max-width: 768px){.grid-header[_ngcontent-%COMP%]{padding:0}}.grid-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{margin-left:16px}@media (max-width: 768px){.grid-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{margin-left:10px}}@media (max-width: 768px){.table-grid[_ngcontent-%COMP%]{padding-bottom:5px}}"]}),i})()},9964:(O,x,a)=>{a.d(x,{U:()=>d});var M=a(7445),n=a(1223),v=a(1266),r=a(6404),t=a(6859),_=a(9808);function l(s,u){1&s&&(n.TgZ(0,"div",23)(1,"div",24)(2,"button",25)(3,"span",26),n._UZ(4,"i",27),n.qZA(),n._uU(5," View Match Prediction "),n.TgZ(6,"span",28),n._UZ(7,"i",29),n.qZA()()()())}function f(s,u){if(1&s&&(n.TgZ(0,"div",30),n._uU(1),n.qZA()),2&s){const e=n.oxw(2);n.xp6(1),n.hij(" ",null!=e.upcomingMatch&&null!=e.upcomingMatch.odds&&e.upcomingMatch.odds.oddFirstTeam?null==e.upcomingMatch||null==e.upcomingMatch.odds?null:e.upcomingMatch.odds.oddFirstTeam:null==e.upcoming.firstTeam?null:e.upcoming.firstTeam.odd,"")}}function c(s,u){if(1&s&&(n.TgZ(0,"div",31),n._uU(1),n.qZA()),2&s){const e=n.oxw(2);n.xp6(1),n.Oqu(null!=e.upcomingMatch&&null!=e.upcomingMatch.odds&&e.upcomingMatch.odds.oddSecondTeam?null==e.upcomingMatch||null==e.upcomingMatch.odds?null:e.upcomingMatch.odds.oddSecondTeam:null==e.upcoming.secondTeam?null:e.upcoming.secondTeam.odd)}}function g(s,u){if(1&s){const e=n.EpF();n.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"span",7),n._uU(6),n.qZA(),n.TgZ(7,"span",8),n._uU(8,"day"),n.qZA()(),n.TgZ(9,"div",6)(10,"span",7),n._uU(11),n.qZA(),n.TgZ(12,"span",8),n._uU(13,"hr"),n.qZA()(),n.TgZ(14,"div",6)(15,"span",7),n._uU(16),n.qZA(),n.TgZ(17,"span",8),n._uU(18,"min"),n.qZA()(),n.TgZ(19,"div",6)(20,"span",7),n._uU(21),n.qZA(),n.TgZ(22,"span",8),n._uU(23,"sec"),n.qZA()()(),n.YNc(24,l,8,0,"div",9),n.qZA(),n.TgZ(25,"div",10)(26,"div",11)(27,"div",12)(28,"div",13),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return null!=i.upcomingMatch&&null!=i.upcomingMatch.firstTeam&&i.upcomingMatch.firstTeam.name?i.navigateToTeam(null==i.upcomingMatch||null==i.upcomingMatch.firstTeam?null:i.upcomingMatch.firstTeam.name):i.navigateToH2h(i.upcoming.firstTeam.id,i.upcoming.secondTeam.id)}),n.TgZ(29,"div",14),n._UZ(30,"img",15),n.qZA(),n.TgZ(31,"span",16),n._uU(32),n.qZA(),n.YNc(33,f,2,1,"div",17),n.qZA(),n.TgZ(34,"div",18),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return null!=i.upcomingMatch&&null!=i.upcomingMatch.league&&i.upcomingMatch.league.name?i.navigateToLeague(null==i.upcomingMatch||null==i.upcomingMatch.league?null:i.upcomingMatch.league.name):i.navigateToH2h(i.upcoming.firstTeam.id,i.upcoming.secondTeam.id)}),n.TgZ(35,"div",14),n._UZ(36,"img",15),n.qZA(),n.TgZ(37,"div",19)(38,"span"),n._uU(39),n.qZA(),n.TgZ(40,"span",20),n._uU(41),n.ALo(42,"date"),n.qZA()()(),n.TgZ(43,"div",21),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return null!=i.upcomingMatch&&null!=i.upcomingMatch.secondTeam&&i.upcomingMatch.secondTeam.name?i.navigateToTeam(null==i.upcomingMatch||null==i.upcomingMatch.secondTeam?null:i.upcomingMatch.secondTeam.name):i.navigateToH2h(i.upcoming.firstTeam.id,i.upcoming.secondTeam.id)}),n.TgZ(44,"div",14),n._UZ(45,"img",15),n.qZA(),n.TgZ(46,"span",16),n._uU(47),n.qZA(),n.YNc(48,c,2,1,"div",22),n.qZA()()()()()()}if(2&s){const e=n.oxw();n.xp6(6),n.hij("",e.daysToDday," "),n.xp6(5),n.hij("",e.hoursToDday," "),n.xp6(5),n.hij("",e.minutesToDday," "),n.xp6(5),n.hij("",e.secondsToDday," "),n.xp6(3),n.Q6J("ngIf",e.showprediction),n.xp6(6),n.Q6J("src",null==e.upcoming.firstTeam?null:e.upcoming.firstTeam.logo_path,n.LSH),n.xp6(2),n.Oqu(null==e.upcoming.firstTeam?null:e.upcoming.firstTeam.name),n.xp6(1),n.Q6J("ngIf",null==e.upcomingMatch||null==e.upcomingMatch.odds?null:e.upcomingMatch.odds.oddFirstTeam),n.xp6(3),n.Q6J("src",null==e.upcoming.league?null:e.upcoming.league.logo_path,n.LSH),n.xp6(3),n.Oqu(null==e.upcoming.league?null:e.upcoming.league.name),n.xp6(2),n.Oqu(n.xi3(42,14,null==e.upcoming?null:e.upcoming.dateTime,"yyyy-MM-dd HH:mm")),n.xp6(4),n.Q6J("src",null==e.upcoming.secondTeam?null:e.upcoming.secondTeam.logo_path,n.LSH),n.xp6(2),n.Oqu(null==e.upcoming.secondTeam?null:e.upcoming.secondTeam.name),n.xp6(1),n.Q6J("ngIf",null==e.upcomingMatch||null==e.upcomingMatch.odds?null:e.upcomingMatch.odds.oddSecondTeam)}}let d=(()=>{class s{constructor(e,m){this.teamService=e,this.router=m,this.title="Upcoming Match",this.milliSecondsInASecond=1e3,this.hoursInADay=24,this.minutesInAnHour=60,this.SecondsInAMinute=60}getTimeDifference(){var e;if(null===(e=this.upcoming)||void 0===e?void 0:e.dateTime){const m=this.upcoming.dateTime.getTime()-(new Date).getTime();this.allocateTimeUnits(m)}}allocateTimeUnits(e){this.secondsToDday=Math.floor(e/this.milliSecondsInASecond%this.SecondsInAMinute),this.minutesToDday=Math.floor(e/(this.milliSecondsInASecond*this.minutesInAnHour)%this.SecondsInAMinute),this.hoursToDday=Math.floor(e/(this.milliSecondsInASecond*this.minutesInAnHour*this.SecondsInAMinute)%this.hoursInADay),this.daysToDday=Math.floor(e/(this.milliSecondsInASecond*this.minutesInAnHour*this.SecondsInAMinute*this.hoursInADay))}ngOnInit(){var e,m;this.teamName?this.teamService.getUpcomingMatch(this.teamName).subscribe(i=>{this.upcoming=i,(null==i?void 0:i.date)&&(null==i?void 0:i.time)&&this.upcoming&&(this.upcoming.dateTime=new Date(`${i.date} ${i.time} UTC`))}):this.upcomingMatch&&(this.upcoming=this.upcomingMatch,this.upcoming.dateTime=new Date(`${null===(e=this.upcomingMatch)||void 0===e?void 0:e.date} ${null===(m=this.upcomingMatch)||void 0===m?void 0:m.time} UTC`)),this.subscription=(0,M.F)(1e3).subscribe(()=>{this.getTimeDifference()})}navigateToH2h(e,m){this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>this.router.navigate(["h2h",e,m]))}navigateToLeague(e){this.router.navigate(["/league",e])}navigateToTeam(e){this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>this.router.navigate(["team",e]))}ngOnDestroy(){var e;null===(e=this.subscription)||void 0===e||e.unsubscribe()}}return s.\u0275fac=function(e){return new(e||s)(n.Y36(v.U),n.Y36(r.F0))},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-upcoming-match"]],inputs:{title:"title",teamName:"teamName",upcomingMatch:"upcomingMatch",showprediction:"showprediction"},decls:2,vars:2,consts:[[3,"title"],["class","container-left br20",4,"ngIf"],[1,"container-left","br20"],[1,"card","w-100","nonepd","br20"],[1,"divflex","F1bg"],[1,"match-left","nonemg","nonepd","upcomdiv","nonebd","nonebr","halfwidth"],[1,"times","divflow"],[1,"number"],[1,"unit"],["class","halfwidth px-4",4,"ngIf"],[1,"card-body","pb-3","br20"],[1,"coming-match"],[1,"teams","pointer"],[1,"home",3,"click"],[1,"emblem"],[3,"src"],[1,"name"],["class","percent percent-green",4,"ngIf"],[1,"league",3,"click"],[1,"date"],[1,"upcomingtime"],[1,"away",3,"click"],["class","percent percent-orange",4,"ngIf"],[1,"halfwidth","px-4"],[1,"px-4","py-3"],[1,"btn","btn-predic","upprebtn","py-2","px-4","divflex"],[1,"right","p-1"],[1,"icon","icon-eye"],[1,"left","p-1"],[1,"icon","icon-out"],[1,"percent","percent-green"],[1,"percent","percent-orange"]],template:function(e,m){1&e&&(n._UZ(0,"app-header-component",0),n.YNc(1,g,49,17,"div",1)),2&e&&(n.Q6J("title",m.title),n.xp6(1),n.Q6J("ngIf",m.upcoming))},directives:[t.N,_.O5],pipes:[_.uU],styles:["app-header-component[_ngcontent-%COMP%]{margin-bottom:0}@media (max-width: 768px){app-header-component[_ngcontent-%COMP%]{margin-bottom:0}}.coming-match[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:500px;margin:18px auto 0}@media (max-width: 768px){.coming-match[_ngcontent-%COMP%]{max-width:253px;margin-top:28px}}.teams[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.emblem[_ngcontent-%COMP%]{max-height:105px;max-width:105px;display:flex;align-items:flex-end}.emblem[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:105px;max-width:105px}@media (max-width: 768px){.emblem[_ngcontent-%COMP%], .emblem[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:46px;max-width:46px}}.home[_ngcontent-%COMP%], .away[_ngcontent-%COMP%], .league[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;font-weight:600}.name[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:20px}@media (max-width: 768px){.name[_ngcontent-%COMP%]{margin-top:6px;margin-bottom:8px;font-size:12px}}.date[_ngcontent-%COMP%]{margin-top:30px;display:flex;flex-direction:column;align-items:center;gap:7px}@media (max-width: 768px){.date[_ngcontent-%COMP%]{margin-top:6px;gap:0;font-size:10px;line-height:14px}}.match-left[_ngcontent-%COMP%]{padding:20px 15px 15px;background:#F1F2F5;border-radius:6px;margin:32px auto 45px;display:flex;gap:20px}@media (max-width: 768px){.match-left[_ngcontent-%COMP%]{padding:6px 14px 7px 15px;margin:16px auto 20px;gap:24px}}.times[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.times[_ngcontent-%COMP%]:first-child{margin-right:5px}.number[_ngcontent-%COMP%]{font-weight:400;font-size:30px;line-height:20px;color:#6dc47f;font-family:Digital Normal,sans-serif}@media (max-width: 768px){.number[_ngcontent-%COMP%]{font-size:13px;line-height:16px;margin-bottom:4px}}.unit[_ngcontent-%COMP%]{font-weight:350}@media (max-width: 768px){.unit[_ngcontent-%COMP%]{font-size:12px}}.btn-primary[_ngcontent-%COMP%]{margin:0 auto;width:256px;font-weight:600}@media (max-width: 768px){.btn-primary[_ngcontent-%COMP%]{width:175px;font-size:13px}}.percent[_ngcontent-%COMP%]{padding:2px 0;width:40px;text-align:center;color:#fff;border:none;font-size:14px;border-radius:6px}@media (max-width: 768px){.percent[_ngcontent-%COMP%]{width:31px;font-size:10px}}.percent-green[_ngcontent-%COMP%]{background:#7CBF7F}.percent-orange[_ngcontent-%COMP%]{background:#C99E57}.upcomdiv[_ngcontent-%COMP%]{height:3.5rem;padding:1.5rem!important}.upcomingtime[_ngcontent-%COMP%]{color:#4c535f}.upprebtn[_ngcontent-%COMP%]{width:100%;font-size:15px}.right[_ngcontent-%COMP%]{font-weight:600;display:flex;align-items:center;text-align:right}.left[_ngcontent-%COMP%]{font-weight:600;display:flex;align-items:center;text-align:left}"]}),s})()},3025:(O,x,a)=>{a.d(x,{B:()=>_});var M=a(6383),n=a(7579),v=a(2722),r=a(1223),t=a(1266);let _=(()=>{class l extends M.G{constructor(c){super(),this.teamService=c,this.seasons=[],this.leagues=[],this.loaderState={val:!1},this.lastLength=0,this.subject$=new n.x,this.count=10,this.offset=1,this.page=1}ngOnInit(){var c,g,d,s;this.curLeague=null!==(c=this.leagueId)&&void 0!==c?c:null===(g=this.teamService.team)||void 0===g?void 0:g.leagueId,this.curSeason=null!==(d=this.seasonId)&&void 0!==d?d:null===(s=this.teamService.team)||void 0===s?void 0:s.seasonId,this.getLeagues(),this.getData(),this.callSubject()}getData(){}getSeasons(){var c;const g=null===(c=this.leagues)||void 0===c?void 0:c.find(d=>d.leagueId===this.curLeague);this.curSeason||(this.curSeason=null==g?void 0:g.seasons[0].seasonId),this.seasons=(null==g?void 0:g.seasons)||[]}selectSeason(c){this.curSeason=c,this.offset=1,this.page=1,this.callSubject()}selectLeague(c){this.curSeason=void 0,this.curLeague=c,this.offset=1,this.page=1,this.getSeasons(),this.callSubject()}more(){this.offset+=this.count,this.page+=1,this.callSubject()}getLeagues(){this.teamService.leagueSeasons.pipe((0,v.R)(this.subscription)).subscribe(c=>{this.leagues=c,this.getSeasons()})}callSubject(){this.subject$.next()}}return l.\u0275fac=function(c){return new(c||l)(r.Y36(t.U))},l.\u0275dir=r.lG2({type:l,selectors:[["","appFilter",""]],inputs:{seasonId:"seasonId",leagueId:"leagueId"},features:[r.qOj]}),l})()}}]);