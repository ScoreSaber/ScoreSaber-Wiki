import{_ as l,o as c,c as h,a as e,b as t,w as i,e as d,d as o,r as a}from"../app.ffdd4c98.mjs";const u="/assets/modassistant.b36c557c.png",g="/assets/InstallationSuccess.163538f7.png",p="/assets/ScoreSaber_1.d806f21b.png",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADbElEQVRIiY2WwWtdVRDGf3MJIYTweJQgoYQQQnir4EZcuBE3UolBSgmlSClScCMSRReioFAEi6sixaWE/BNpQxaiG7uw6KJ0EQJtiEmNieT5SNOXVr/PxZ37ehsT04HhnnPunG/mzpn5zg2OEUlExAQwDbwOTNkejoi/gTZw1/ZSRNwEViPiOKhnxTa2x2x/Z/tPp0j6x3alT/xUdm3P2x6T9FwOzknakOQa+Lrtd2xv2K7G6zUnlrRh++xJ4HOSDmw/sr2cUW/bbtluSrqX2pTUkrSVNsuSHuXeuSPzbXvW9oGkbUlv2f4+U3EpbZq276U2M6CLafOD7ZkM5kDSbJWuvvQxbvsboD8ibgEv2X4tItrAqO2PgAGgYZuIeM921/ZAROzZfhX4MSJu2Z4BrkfEz8B9JCFpXpKrvJ80fh7NgydsTwC3gT3gakb6CTAIfGl7DyAiBoFP84uvAvs5HrL9eUTsA18D3bQbAl7G9vvp8UrmdcT2X7Z/sT1QK4DeGUhq1tYHbN/OPSN5Xl9kcc0VwBngMXAj95y23QBWIqJbA+ppXdJmNfeM5vJN24+BM33AVER0bO9klK3syh1JzYioQBsRUaSzRuUon3/knknbq7Z3IqIDTIXt3czjb2k0CLwAtG23KwqwXUTE6QTcBHptGxFN282I2LG9l3tGbe/3VVFkdAKKw2lIkF56DvNO3T7fFYkJeXDbkiazQy/kAX2b80rHJK3ZXpM0Xn9n+3qW8YWcT2bTrRXAHaABnCqKog2sZDDDRVG0K82cKrVdfwcM51es5vxUYt4pgGXKDn4zP3HTdsf2pKRemR6Vjpz3224BnYjYzOU3bPcDS33AInAFuCzpQbZ/F2gBc5I6CTQYEUOZ38uS9nN9KCJawL7t85K6wLuUd8ZiVdvzFRWcJIdo/NixpAXbREYxbvsnYARYjIhfgc9st4FrEdF12dUfAEW1BvQDH7tk16+AF4GZiPgdeCUi7vfyans2+XzL9rSf0vVFeJauK6qQ9Lakiq6nc+9BYh0+vvLCccnnDyUtu7wet7LsmpJ6DnKtfuE8TPAP/4tcE0nnJD04RNHrki7lsxqv1W0ykPP/C15L17jtBZcXeiVPfMSlL2lX0oKkCR/FACc4moyIaUrGnQKaLimgDdwFlijLfOW435Z/AXSgepJ0kmMPAAAAAElFTkSuQmCC",_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABgUlEQVRIibVUvUoDQRicL6QQCXKVWEiwEv/KVOIjWFhYWYpP4CvkCVKJDxQLESwsJIiNgiARg8YqhBkLb8Nms95ecjpw3HDsznz77XcD/DOszCKSGYAWgA0AYzN7AnBjZp+VK5B0QPJBAUjeS2pVFW+SfCXpRBXwZ0lrRRq1hMGJma2a/XTSzBDwdUnHCxuY2W7EdPLO+fbCBgDqntDMu4xGPWEwdi0BAJ87SBoXCaROMMpFfMGQj4oEUid4j4kHLRoUCaSmqBuZHP+hmV0niiw0yEg+utl38+/xO0mNhQ1yk/PffjRJZ5XEc4NlSb1IVNxKWkrtT93BCoBDAC/eN0ffABzlQThXxZC0JemC5Eckf6Y4ySHJS5KbwXRNgyRINkl2JA3ClpTAIN/bJDlTdSapTbKfUimYKEf7ktqSMlf5DsleqhXzcpI9SXsmqQtgf66LKo8rkzQE0HAXHAu0oJ2TNSX4V83f6HPN5n4q9KLcSJ6aWV1SLVZNFUgqTNo/wTci+3Dw5gIvKQAAAABJRU5ErkJggg==",A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACMElEQVRIidWVQUuVURCG3/mQuIsWl4tISIRJREREiETU3kW48ge0kIiW0calPyBaSQtpGf2FaBMtrhIFuQk3lqCERgYqWpKk79PinmvHe7+rN3DjwMcZ5sy8M2fmPeeTTrtEt462JakvIgSsFUVxclUAl2zXAWxjexa4fFLgAuq0yyzwf8cAqsAYMApUku2C7QPUXAcGk8+ZFDMGVDuBD9j+mrXhPVADbjRBk/3gA4aTz7vMvtJM3JrgSUkbxm3XbP8p2dsH+myPl+w9beLmPRxsSShJF4uiWI+ImRa7JM1ExJqk8y12SRooS7DQdMrWz2mdlLST2XckTUpSRCzlcUn/Utaia8BudswV2/1prwBeZIN+2WSQ7X5gJYvbBa63JUjOUxnIw6yy28B8NuiPwHCKEfAgI8KzUvDEhqnktAhUbd+y/baVRZn+JiWvAouptimgllddsf0IWM6OOGL7HrBRwpBW2bZ93/ZI1uJl24+BioBpGpRrVjcPDNn+VYZWdumS7xDwKbPvA9MBbEiq8o9mryXtSRpND5sSW47TXyX9bmbfCmBb0tlsHEuSzkmqlA6rs/yWtKrD9+lnAD8k9aZBK+LoFzz36UJfLyRNAJtZi/IL06bnPkfpwJakCQGyfdX2tO1vtve7YE6ppNjvwHMaF7c41A+gV9JNSXckDUu6IqlfUk+HFu1FxKqkBUlzkuqSPqQ3SlIXv0ygR1JNDSIUyeaI2JK0GRF7x2GcbvkL1IOAqZwj/aMAAAAASUVORK5CYII=",m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABVUlEQVRIib2ULW8VURRF155UERQK+XTTP4CpqsMRfgVpwOKRBNVU8PUHUGAIEoOGBPIkoFCQEEKa0MBZNfOaafPuDB/z2OaeK+5eZ985d2CgqtpVP6i7zKRuuEmyDSyAW+pC7dae+lsAsNWv14DX6v2q2v5XyKnUfdWqsqrs61/qM3VP3Zp2GQfctK0f6iv1unpxE4BVItW3VbWvXpjyPPMN1NO1VffrDnDQT9ydqlrMlqCR6EtVHao7npu85hiuup2qkwBcAm4Ad4HLk4Ap8+G1AUfA0yRXgKtJPg291o5d39VorX5N8gQ4BJZJfq7zas71IP6ZGvgMPEjyOMn71vlRQONalkkeAo+SfJ8yHgUMuj1O8ga4B7xI8u13jUcBQKnPkxyoL7uuO/5T47UavIPbsxjSfgdHmwbMpv8OqE0DZlcrwWxJzgNW/5ONAZbqR+DdXIATGsNZ44vEwkkAAAAASUVORK5CYII=",f="/assets/ScoreSaber_2.c19ab7db.png",S="/assets/ScoreSaber_3.b0177a9c.png",y="/assets/ScoreSaber_4.4074a47c.png",w="/assets/ScoreSaber_6.07260be0.png",k="/assets/ScoreSaber_5.08d79a9c.png",v="/assets/badges.f5aa8ea9.jpg",B={},U=d('<h1 id="beginners-guide" tabindex="-1"><a class="header-anchor" href="#beginners-guide" aria-hidden="true">#</a> Beginners Guide</h1><h2 id="installing-scoresaber" tabindex="-1"><a class="header-anchor" href="#installing-scoresaber" aria-hidden="true">#</a> Installing ScoreSaber</h2><h3 id="pc" tabindex="-1"><a class="header-anchor" href="#pc" aria-hidden="true">#</a> PC</h3><p>Installing ScoreSaber on Beat Saber is relatively quick and easy. You need to install the mod onto your game, but before you go and install any mod, make sure to run the game at least once. This applies to reinstalling your game too.</p>',4),I=o("Next, it is strongly recommended to use the ModAssistant installer, available "),E={href:"https://github.com/Assistant/ModAssistant/releases/latest",target:"_blank",rel:"noopener noreferrer"},R=o("here"),x=o(" to get the ScoreSaber mod up and running."),D=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"\u{1F4A1} For safety, only install mods from this application since they are approved and verified mods.")],-1),V=e("p",null,[e("img",{src:u,alt:"Mod Assistant"})],-1),X=e("p",null,"When this is done installing, you can go ahead and launch Beat Saber.",-1),Q={class:"custom-container tip"},P=e("p",{class:"custom-container-title"},"Need help with Plugins/Mods?",-1),C=o("Please head over to the "),K={href:"https://bsmg.wiki/pc-modding.html",target:"_blank",rel:"noopener noreferrer"},N=o("BSMG Wiki"),T=o(" for a detailed guide on Modding."),J=e("hr",null,null,-1),M=e("p",null,[o("After the game is loaded, head over to Solo. If everything went well, you should see a new banner on the top of the leaderboards with the ScoreSaber logo, like so: "),e("img",{src:g,alt:"Logged In"})],-1),q=e("p",null,"Congratulations! You are now fully ready to use the ScoreSaber mod and submit scores onto custom maps!",-1),G=o("Head over to "),W=o("Using ScoreSaber"),O=o(" to learn more about ScoreSaber's website, mod, and all their functions."),Y=e("h3",{id:"scoresaber-for-quest",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#scoresaber-for-quest","aria-hidden":"true"},"#"),o(" ScoreSaber for Quest")],-1),Z={class:"custom-container danger"},z={class:"custom-container-title"},L=o("ScoreSaber for Quest is currently only available for Beat Saber Version "),F=o("The release for newer versions of the Game is "),H=e("strong",null,"currently in development.",-1),j=o(" If you want to currently use ScoreSaber on Quest, you have to downgrade your Beat Saber to "),$=o("."),ee=e("br",null,null,-1),oe=o(" The easiest method to get to the right version, is to open the "),te={href:"https://oculusdb.rui2015.me/guide",target:"_blank",rel:"noopener noreferrer"},se=o("OculusDB Downgrading Guide"),ae=o(", select Quest as the headset, and follow the steps."),re=o("If you still need help with or have issues with "),ne=e("strong",null,"downgrading",-1),ie=o(", please go to the "),de={href:"https://discord.gg/beatsabermods",target:"_blank",rel:"noopener noreferrer"},le=o("BSMG Discord"),ce=o("."),he=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"\u26A0\uFE0F Do not put your Steam/Oculus login information into anything that isn't Steam/Oculus!")],-1),ue=e("hr",null,null,-1),ge=e("h4",{id:"installing-scoresaber-for-quest",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-scoresaber-for-quest","aria-hidden":"true"},"#"),o(" Installing ScoreSaber for Quest")],-1),pe=o("If you are on a supported game version for using ScoreSaber on Quest and your game has BMBF ready, please head over to the "),be={href:"https://scoresaber.com/quest",target:"_blank",rel:"noopener noreferrer"},_e=o("ScoreSaber for Quest Page"),Ae=o(" on how to install ScoreSaber for Quest."),me=o("Your Quest Beat Saber is not modded or first time using Modded Beat Saber for native Quest?"),fe=e("br",null,null,-1),Se=o(" Please head over to the "),ye={href:"https://bsmg.wiki/quest-modding.html",target:"_blank",rel:"noopener noreferrer"},we=o("BSMG Wiki"),ke=o(' for a detailed guide on "Quest Modding"'),ve=e("h2",{id:"using-scoresaber",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-scoresaber","aria-hidden":"true"},"#"),o(" Using ScoreSaber")],-1),Be=e("strong",null,"The ScoreSaber website is available at",-1),Ue=o(),Ie={href:"https://scoresaber.com/",target:"_blank",rel:"noopener noreferrer"},Ee=o("https://scoresaber.com/"),Re=d('<h3 id="in-game-song-leaderboards" tabindex="-1"><a class="header-anchor" href="#in-game-song-leaderboards" aria-hidden="true">#</a> In-Game Song Leaderboards</h3><p><img src="'+p+'" alt="Leaderboard_full"></p><p>With the ScoreSaber mod, you have access to various leaderboards within maps. This is to help players identify with ease how they compete with others around the world. You can use the icons on the left of each leaderboard to filter the scores that are shown:</p><ul><li><img src="'+b+'" alt="Global"> - Global leaderboard of selected map</li><li><img src="'+_+'" alt="Around You"> - The scores around yours</li><li><img src="'+A+'" alt="Friends"> - The scores from your friends</li><li><img src="'+m+'" alt="Country"> - The scores from your local country</li></ul><p>On each leaderboard, you can use the Up and Down arrow on top and bottom of the icon list to scroll through the different shown score pages.</p><p><img src="'+f+'" alt="leaderboard_detail"></p><hr><p>You can also click on an <strong>individual Score</strong>, via the button at the right side to see more information about the score, such as:</p><p><img src="'+S+'" alt="Score_info"></p><hr><p>On the <strong>Top right of the newly opened Window</strong>, you can also <strong>open the Users Profile</strong>, indicated by the card icon:</p><p><img src="'+y+'" alt="Profile"></p><hr><h3 id="in-game-scoresaber-overview" tabindex="-1"><a class="header-anchor" href="#in-game-scoresaber-overview" aria-hidden="true">#</a> In-Game ScoreSaber Overview</h3><p>by pressing on the big yellow ScoreSaber button right at the top of the leaderboard:</p><p><img src="'+w+'" alt="Lb_top"></p><p>You can find our in-game dashboard:</p><p><img src="'+k+'" alt="SS_Info"></p><p>Here you can see a in-game view of our Team Page as well as the Global Leaderboards and links to our socials.</p><h3 id="scoresaber-profile" tabindex="-1"><a class="header-anchor" href="#scoresaber-profile" aria-hidden="true">#</a> ScoreSaber Profile</h3><p>To be able to see and edit your ScoreSaber profile, you must first submit a score on a custom map. Doing so will automatically create your profile based on your Steam or Oculus information, and add you onto the leaderboards.</p><p>On your profile, you should be able to see the following: Your username, profile picture, total amount of pp earned, global &amp; local ranking and various other statistics about the scores you submitted to ScoreSaber.</p>',22),xe=o("If you would like more stats or features added to ScoreSaber and to profiles, make sure to first check if this wasn't already suggested "),De={href:"https://scoresaber.canny.io/feature-requests",target:"_blank",rel:"noopener noreferrer"},Ve=o("here"),Xe=o(", and create a request about said feature."),Qe=e("h3",{id:"badges-and-biography",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#badges-and-biography","aria-hidden":"true"},"#"),o(" Badges and Biography")],-1),Pe=e("p",null,[o("While browsing on various ScoreSaber profiles, you may come across profiles which look like this: "),e("img",{src:v,alt:"Profile badges"})],-1),Ce=e("p",null,"All the icons that are seen on this profile header are badges. You can earn a badge by either achieving a rewarding rank during a community event such as a tournament, or by simply becoming a ScoreSaber supporter on patreon. Doing so will also add the possibility to have and edit a biography in order to personalize your ScoreSaber profile even more.",-1),Ke={class:"custom-container tip"},Ne=e("p",{class:"custom-container-title"},"\u{1F4A1} TIP",-1),Te=o("For more information on the perks given to supporters, please check our "),Je={href:"https://www.patreon.com/scoresaber",target:"_blank",rel:"noopener noreferrer"},Me=o("patreon page"),qe=o("."),Ge=e("h2",{id:"whats-next",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#whats-next","aria-hidden":"true"},"#"),o(" Whats next?")],-1),We=o("Now that you're all set-up and ready to go, you can start using ScoreSaber and compete with everyone else!"),Oe=e("br",null,null,-1),Ye=o(" If you wish to learn more about the ranking process and how are things calculated, there is a more in depth guide from our wiki available "),Ze=o("here"),ze=o(".");function Le(Fe,He){const s=a("ExternalLinkIcon"),r=a("RouterLink"),n=a("Badge");return c(),h("div",null,[U,e("p",null,[I,e("a",E,[R,t(s)]),x]),D,V,X,e("div",Q,[P,e("p",null,[C,e("a",K,[N,t(s)]),T])]),J,M,q,e("p",null,[G,t(r,{to:"/beginners-guide.html#using-scoresaber"},{default:i(()=>[W]),_:1}),O]),Y,e("div",Z,[e("p",z,[L,t(n,{type:"danger",text:"1.17.1",vertical:"middle"})]),e("p",null,[F,H,j,t(n,{type:"danger",text:"1.17.1",vertical:"middle"}),$,ee,oe,e("a",te,[se,t(s)]),ae]),e("p",null,[re,ne,ie,e("a",de,[le,t(s)]),ce])]),he,ue,ge,e("p",null,[pe,e("a",be,[_e,t(s)]),Ae]),e("p",null,[me,fe,Se,e("a",ye,[we,t(s)]),ke]),ve,e("p",null,[Be,Ue,e("a",Ie,[Ee,t(s)])]),Re,e("p",null,[xe,e("a",De,[Ve,t(s)]),Xe]),Qe,Pe,Ce,e("div",Ke,[Ne,e("p",null,[Te,e("a",Je,[Me,t(s)]),qe])]),Ge,e("p",null,[We,Oe,Ye,t(r,{to:"/ranking-system.html"},{default:i(()=>[Ze]),_:1}),ze])])}const $e=l(B,[["render",Le],["__file","beginners-guide.html.vue"]]);export{$e as default};
