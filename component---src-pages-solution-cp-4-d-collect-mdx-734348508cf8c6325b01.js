(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"DWH+":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return r}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var i=t("7ljp"),n=t("013z");t("qKvR");function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var c={},o={_frontmatter:c},l=n.a;function r(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["components"]);return Object(i.b)(l,s({},o,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To develop the anomaly detection service we first need to access the data. We have two datasources in this example: the reefer information and the telemetries data coming from the different reefer containers. With the telemetries we should be able to assess anomaly. The Telemetries are saved to DB2 database hosted on Cloud Pak for data. "),Object(i.b)("p",null,"As part of the data governance capability, a user with data engineer role can do the following tasks:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Define one to many connections to the remote different data sources"),Object(i.b)("li",{parentName:"ul"},"Create virtual assets to materialize tables and views from the different data sources"),Object(i.b)("li",{parentName:"ul"},"Assign an asset to an exisint project or a data request (governance object to ask to access data)")),Object(i.b)("h2",null,"Define connection"),Object(i.b)("p",null,"First we need to get the connection information for the DB2 database. "),Object(i.b)("h2",null,"Create a new project"),Object(i.b)("p",null,"Once logged into Cloud Pak for Data, create a new project. A project is a collection of assets the analytics team work on. It can include data assets and Notebooks, RStudio files\nModels, scripts…"),Object(i.b)("p",null,"From the main page select the project view:"),Object(i.b)("p",null,Object(i.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"914px"}}),"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.59722222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAACN0lEQVQ4y3VTPY/aQBD1zwFRoBRJwaULqS4tPXen5E+lS6prIiU6KRehIAUpfDQ0FBGEYBDYxsbf3zYHL57ljNYHN9LT7MLO89s3s8KLVy9Rf1PH5eU7hnr9LS4uXqNWq6FaraJcLqNUKrFcqVQYaP8chNlshul0ivl8DkmSsFwusVqtIIoixuMxJpMJ6AztCfz6HIT9fo8kSfA00jSF67qIoujkP6p5DgKRUeHDwwP7YbfbsRzHMTRNg67rLKuqivV6DUVR4Hkeg+/7JxC22y1b5EqIjIKKW60WRqMRer0eBoMB+v0+hsMhgiBgNTkxD6YwDEMGnpCKSB2pt20bjuMcYZomLMs6q5IRUjEp5QlJMRXyMAyjkHNCPgtkPi3IO95w8pAO0ccC/xFBEbkq3tMjITWFJ4wyQtfPDgZZARUFfoGArMhxopB8yUcnv7JtWBD//MVyKmIx/gdlvoLnHpRQx2VZYXMry/LxQ+S1QFclUl4hRRxGcDJSz3LgmQ7cDLzCo7dW0V/h3MBSJGmCOH068Ic5JVIjmwBjc4CpG6zrpmEeXgpPlOd8wFmDkj3GiwDp9tA4dj1lA2ulMjiqzprkWnZRYUEpt//8bY77rozb71P44RZxFMJab2BKKrPFD4OscY9dPkdGQU+s0+ngd7eLr3c/cPvlHh8/3aH18xc22VN0VIMRWrIGS9Jga8Z5wnwe2+02Go0Gms0mrq6auLm5xof312xNzzHY2NBFCcZCYdkxLUb4H7Ddj8l9QVp7AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Analytic project",title:"Analytic project",src:"/vaccine-solution-main/static/5448e219f6f9f94817f68a3bb66ad698/01161/create-project-0.png",srcSet:["/vaccine-solution-main/static/5448e219f6f9f94817f68a3bb66ad698/7fc1e/create-project-0.png 288w","/vaccine-solution-main/static/5448e219f6f9f94817f68a3bb66ad698/a5df1/create-project-0.png 576w","/vaccine-solution-main/static/5448e219f6f9f94817f68a3bb66ad698/01161/create-project-0.png 914w"],sizes:"(max-width: 914px) 100vw, 914px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\n",Object(i.b)("strong",{parentName:"p"},"Figure 4: Top level navigation menu")),Object(i.b)("p",null,"and then new project, and select ",Object(i.b)("inlineCode",{parentName:"p"},"analytics"),":"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"556px"}},"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAAB6klEQVQ4y42Sy07bQBSG8yp9i74CSVupCSqo9AUggbZSi8SOxIBYgIS6Z8uy2267b1VZqZSL1AbFVxISGcfxZXz7OzOOaRqmIUf6NUfHnu/8Z2YKpbUiNl+uY6uygdflV1xb5Q2BZvWKWG8qm3hReo7Cs2IJ8vcfSIMIvj0FcTwETBM3y+ma50zsH+/O+UeuNaHrFLXtKgolCux2u2DheR48n24KAoQxbRD4IGHIxXJWF0U6025tlwLpyO12m3/QDB3XvWvomo7BYABDN6BpGlRVRa/Xg6IoCCmcQ5IUaZreryxq1VrmMAeG1pR2ShHHMZIk4RI6mgE4MF0EMoedDvc8lH9jNBpxh6Zh0FXjx+A4DgghD2DzUKHDiTuFaZro9/swKFBVVIzHY9i2jWB2fouulgJJQPhG3/e5I5bPj51vXBz/AbDVavHCsjMTORICi/QM54HzI4lA/1MGrK4GXNqEPpt8suqOALhKLI6dxz2w2WzyArsEdhmPKUxiRFQst4c27m4shCT6C5RlmXd0XZff8FLRppYywMS8hWWO8fnpAa6ebEP/9gt7H95nwPzZrDpy7BEkQYjIj9C5/IqfF1/gDx3svXubAfc/7uNIOkL9sI5GvfGoJEnK1JBwenGG00/nOD45wXq5gj+912TPTktILgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Add project",title:"Add project",src:"/vaccine-solution-main/static/64a8fb23c87b140d7efc11dba2a240fb/00cf2/create-project-1.png",srcSet:["/vaccine-solution-main/static/64a8fb23c87b140d7efc11dba2a240fb/7fc1e/create-project-1.png 288w","/vaccine-solution-main/static/64a8fb23c87b140d7efc11dba2a240fb/00cf2/create-project-1.png 556w"],sizes:"(max-width: 556px) 100vw, 556px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Figure 5: Add project")),Object(i.b)("p",null,"Select an empty project:"),Object(i.b)("p",null,Object(i.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABhElEQVQoz31S2UrEQBDM/3+I+OZHKAoKq4greCwsmmOT7OaYHHMlKbtbZ1FYHCh6etJT3VWZaBen+Nx+IMsyxHEMpRSGYUDf94Ku607uuWYcx2MMiIqyRJKm2O0yJEmCPM9RFAVKOm+aBnVd/0E4Y9JA+BuRcw7ee9SNgjEW0zRJPs8zlmU5Cf7mqEZbB+M8LMFYyrVBBFrvmy3Ozi9wdX3LKaqqEhwOB+z3e3SqAze21kozXn5a0HYDVE9TagvjZ2jjEPFEH58J1pf3WD+spTNLZllt24pERVG1SvKBpPKUjgjrtkNe7NFQNG6SiSPuyNpf3rY0TXWUxDGsIPUno6Z82YtcJrKUCyFZFrEMLh5GTf7NQvYfgsfsm5CydySVpxvZw4WK8vKAm7snvLxu5FLwj8HSq6qWPctnL8XDeRH/+tHQhLNAPPRUkO5ylEmB+9UD/WkjXjG01gI+C5EJg4cVvYw0y79JKRfJLIHf1OrxGXGSHT37b3myhj3rBy1/OnjJhF/ZugPv9v9QXwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Select project type",title:"Select project type",src:"/vaccine-solution-main/static/d471e1938fc3e131d418b6713ed7df4e/3cbba/create-project-2.png",srcSet:["/vaccine-solution-main/static/d471e1938fc3e131d418b6713ed7df4e/7fc1e/create-project-2.png 288w","/vaccine-solution-main/static/d471e1938fc3e131d418b6713ed7df4e/a5df1/create-project-2.png 576w","/vaccine-solution-main/static/d471e1938fc3e131d418b6713ed7df4e/3cbba/create-project-2.png 1152w","/vaccine-solution-main/static/d471e1938fc3e131d418b6713ed7df4e/288f4/create-project-2.png 1307w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\n",Object(i.b)("strong",{parentName:"p"},"Figure 6: Select project type")),Object(i.b)("p",null,"Enter basic information about your project"),Object(i.b)("p",null,Object(i.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"755px"}}),"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA4UlEQVQoz6WSi26EIBRE+f9/bEzqI0YF8YUg6qxzG9tks2nD9iZHUGTCDFdN04Q8z1FVlYxt28I5h2VZ3kJxs7UWfd/DGINxHEXwXRR+qfM8k1F8lGWFoigvCrGeZRnWdU0WZanjOMRmjBH7voPvnN8/pJacsGmaK0OLeZ4xDINkQXEKp8A9kiEFtDZyKV3XiSgtp7Jt25dl3jJt/7fO2zJPVde19CDnN1rrb7jG1gohvCSGDQctU9B7L7aZ4atm5fd77VnIB4/tGq1b0Hv3I8gMOP7Fc25udYg+4HMw+Bg1Hrt+WgoZkxfNAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Project metadata",title:"Project metadata",src:"/vaccine-solution-main/static/6895bd1f619647d66c874250f9f81127/d6061/create-project-3.png",srcSet:["/vaccine-solution-main/static/6895bd1f619647d66c874250f9f81127/7fc1e/create-project-3.png 288w","/vaccine-solution-main/static/6895bd1f619647d66c874250f9f81127/a5df1/create-project-3.png 576w","/vaccine-solution-main/static/6895bd1f619647d66c874250f9f81127/d6061/create-project-3.png 755w"],sizes:"(max-width: 755px) 100vw, 755px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\n",Object(i.b)("strong",{parentName:"p"},"Figure 7: Project metadata")),Object(i.b)("p",null,"The result is the access to the main project page:"),Object(i.b)("p",null,Object(i.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.06944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABY0lEQVQoz51TW07DMBD0RbkAl+GX6/DBFyfgC1SVpFGoHTtvJ86w4+CQVkVCWBrZ3uyOd8aOsp8arrIwxkBrjbquL9C2LRrr0FQC2ZvDCc/3j3i6e0D+8oq269A0DWpj0dYNlNUVaudicVVVK4EkJHjvMc8zJsG8R1hjEdO05Shz1jgej8iyDEVRxE47OZXYk3Pdcm7WGL/neb4pK8syxlTf9xiGAWlO61v7Dd06O1HGg6xYYq2NMTWOYzwlhACOZVm2mTYwkZJSbI/rwVjskO3SK5LSi1ggCSQiGGcsXBGmfQg/B6hRJLELSmMxO95Id92m9b74gvw7rkhEL5Ksffu3Cp08Dar6LUdNXjyUW6K5FDp7kTjNcX3tEw/lTZIweZ5Gkq9C8Y42e4MPS/qCZQ6R8KZ3sRts8Q1Jsh96mPM5dqm1kZfvY8XyD8RLGfoBp8MH9KmEk9+nNi7K3j+hvw7mfwGFu6mXnYGClQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Project main page",title:"Project main page",src:"/vaccine-solution-main/static/3552d772ad9f96d382c576f01d11d22d/3cbba/create-project-4.png",srcSet:["/vaccine-solution-main/static/3552d772ad9f96d382c576f01d11d22d/7fc1e/create-project-4.png 288w","/vaccine-solution-main/static/3552d772ad9f96d382c576f01d11d22d/a5df1/create-project-4.png 576w","/vaccine-solution-main/static/3552d772ad9f96d382c576f01d11d22d/3cbba/create-project-4.png 1152w","/vaccine-solution-main/static/3552d772ad9f96d382c576f01d11d22d/4d58d/create-project-4.png 1373w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\n",Object(i.b)("strong",{parentName:"p"},"Figure 8: Project main page")),Object(i.b)("p",null,"Now we need to define data assets into our project…"),Object(i.b)("h2",null,"Data Virtualization"),Object(i.b)("p",null,"As introduced in ",Object(i.b)("a",s({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-data-ai-analytics/architecture/collect-org-data/"}),"this paragraph"),", we want to use data virtualization to access the historical telemetry records: The data engineer uses the ",Object(i.b)("inlineCode",{parentName:"p"},"Data virtualization")," capability to search for existing tables and add the tables he wants in the ",Object(i.b)("inlineCode",{parentName:"p"},"cart"),". For that, he uses the ",Object(i.b)("inlineCode",{parentName:"p"},"Virtualize")," menu "),Object(i.b)("p",null,Object(i.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"686px"}}),"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.23611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAA4ElEQVQoz52Ry26EMAxF+f+PGzbDqpsOj0BJAxQSHnnd1q5AdNGhKtIhlqUcXTvJa/aCe3ZHmqbIsgy3W8o1kec5hBCoqoopyxJFUTwlweqxrAvGccSyLJimidHa4D9fQr/1QyOslhta60M4DAOs/e7HGBFCuCSJLmAQEupdoes61HWNtm0PSE7Jt21j6WXCaD2UaPHIH7wzkmqzp9S8Ckr61sofaX+DRzbGoGkaSCkxzzOLqHc+nXOXskNI41AKpRRLKdV+eT/91364/suj0Ch937P0LDnXzjoE7xHccz4BEpJscCWE99UAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Data Virtualization menu",title:"Data Virtualization menu",src:"/vaccine-solution-main/static/879ae0d7b8fbe404ab3f0b0f7ff64a31/0c1b8/virtualize-1.png",srcSet:["/vaccine-solution-main/static/879ae0d7b8fbe404ab3f0b0f7ff64a31/7fc1e/virtualize-1.png 288w","/vaccine-solution-main/static/879ae0d7b8fbe404ab3f0b0f7ff64a31/a5df1/virtualize-1.png 576w","/vaccine-solution-main/static/879ae0d7b8fbe404ab3f0b0f7ff64a31/0c1b8/virtualize-1.png 686w"],sizes:"(max-width: 686px) 100vw, 686px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\n",Object(i.b)("strong",{parentName:"p"},"Figure 9: Data Virtualization menu")),Object(i.b)("p",null,"and then selects Mongo DB in the ",Object(i.b)("inlineCode",{parentName:"p"},"Filters")," column and may be apply some search on specific database name."),Object(i.b)("p",null,Object(i.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.97222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABAUlEQVQoz51S2XKEMAzj/z+VTiGBHM6FKmXLPjCzD61nBE5iW7KTJR0B2/eGdV3hvEfvHa21P0N5woLrwtU6UkxIKeE/NsZArRWjDyyFzuY8Wqlo9I/zJALMymS+SHib/BvPglZe8Ys+++7egfKdP6ZaQeeVZEp6Fs3ZkHJG0blVXFLY2e627ZMBJM77CUsZvTaMOYqIzLWCK2MC1WtfOA9243+7M7XMGXYyRyrRQDVPC4lBBxyVmhlV5KlSpjlFEtxKn6a9pVK25y0PLtRWWD1iiAghzOQktSKj6S+SO1m+4gSdzYKSvn7tCPF1w0YC59x8Sip4ssVPClVwksb0LvgDYvpztPTOtoYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"virtualization",title:"virtualization",src:"/vaccine-solution-main/static/10ecfe2e034de394c88f4fc11da0029e/3cbba/virtualization.png",srcSet:["/vaccine-solution-main/static/10ecfe2e034de394c88f4fc11da0029e/7fc1e/virtualization.png 288w","/vaccine-solution-main/static/10ecfe2e034de394c88f4fc11da0029e/a5df1/virtualization.png 576w","/vaccine-solution-main/static/10ecfe2e034de394c88f4fc11da0029e/3cbba/virtualization.png 1152w","/vaccine-solution-main/static/10ecfe2e034de394c88f4fc11da0029e/d9278/virtualization.png 1446w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\n",Object(i.b)("strong",{parentName:"p"},"Figure 10: Data Virtualization on Mongo DB")),Object(i.b)("p",null,"Once done, he selects the expected tables and then use ",Object(i.b)("inlineCode",{parentName:"p"},"Add to cart")," link. It is important to note that we have two tables to match the telemetry json document and the sensors sub json document."),Object(i.b)("p",null,"The next step is to assign them to a project:"),Object(i.b)("p",null,Object(i.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.63888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAA90lEQVQoz31RB27EIBDk/y+1ZYyPZpphsoNl5XJKstKI7WVQ2hjs5oDeDdZNI6WE3jtaa7iu60+02lBSQa115rZSkW2EqqLQ+QRyziilTJ0+6p+oTYrDCbsd8DEixRPJR4TVQM0NXxbOWOz7gcBgyvAhzIaUMQZ+yKf9Jiq5gLC/5sR7+veW45/C32L0qUu46AS5IW+Negf6mD5SwncIr1e7bepD4rddZpw1hLJyrvce6TwR5cxDKGjkNBcEH+Csm4VscAodWj7uJG+SzzdI7bMEG6tNayzLIvztiJKwriuiJHtpFmQAf3yeIyCnHE6/c27S8pz64AuoQCO8+LN56wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"virtualize tables",title:"virtualize tables",src:"/vaccine-solution-main/static/9162f7325a2f813410e0bab67ec4471e/3cbba/virtualize-tables.png",srcSet:["/vaccine-solution-main/static/9162f7325a2f813410e0bab67ec4471e/7fc1e/virtualize-tables.png 288w","/vaccine-solution-main/static/9162f7325a2f813410e0bab67ec4471e/a5df1/virtualize-tables.png 576w","/vaccine-solution-main/static/9162f7325a2f813410e0bab67ec4471e/3cbba/virtualize-tables.png 1152w","/vaccine-solution-main/static/9162f7325a2f813410e0bab67ec4471e/1d15a/virtualize-tables.png 1468w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\n",Object(i.b)("strong",{parentName:"p"},"Figure 11: Data Virtualization cart and tables")),Object(i.b)("h2",null,"Create a joined view"),Object(i.b)("p",null,"We need to join the telemetries and the sensors data into the same table, to flatten the records. In the current Mongo document, there is a 1 to 1 relationship between telemetry and telemetry sensor, so it is easy to flatten the model in one table."),Object(i.b)("p",null,"In the Data Virtualization, as a data steward, we select ",Object(i.b)("inlineCode",{parentName:"p"},"My Virtualized data"),", and then\nselect TELEMETRICS and TELEMETRICS_SENSORS tables, then the ",Object(i.b)("inlineCode",{parentName:"p"},"Join view"),". Within this new panel, we create a join key, by dragging the ",Object(i.b)("inlineCode",{parentName:"p"},"TELEMETRICS_ID")," and ",Object(i.b)("inlineCode",{parentName:"p"},"_ID")," together:"),Object(i.b)("p",null,Object(i.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.58333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABwElEQVQ4y31TCXLcMAzz/9/Zpllfui9bNgrS2cSbSasZjmxJBEGQHGLKmJYVj3HCaixqa8il6F5r0/04T5zf7L7uf4NzDsYYNWutmpGd59Y6/Zc33vsXq7Ui5azBj35gTxV7aRiMNerwdEopIYQA79wHuNFzOYsxqjkG2rYN/TjQe1dmx95xHicGP64I1iPSYWOK3nns244UE+y8Is4Xw42py5uaC1qpaGSYfURyAZ1gmWwlwBDeV9SY4YNHIf1MTSkSU8kw04KykB1ZPZ32fdd3wnieZkzUXuRalkVJDO7XpIClFk1DUjoVsMA8ZqTRMlhQIGXRL2AxeS9Fk13uD2X4WNFy/ayeaHjeGZqg4HImzMRJ3sj3T2twvycUZVg1+gvD8WIo1ZQlQE+GT8Dv7TT49wU1UZMo4l76SGPdNYwpsgjtJeU74AtD/zarhgKY6k6xo154FseMC/LMduJdYXWF/b8APxm6B51C0koWsoislAjsCLywKMowJzZvV5D/pawMLcfta1LM1zd7b/wzI1JD6YBcN55JtbeXotwTvhh+TMlPZhhMAkrPWTa8sdc0yQQ1touszkBb5Owzk2YT/gKlyfGI2mtKwgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Joining tables",title:"Joining tables",src:"/vaccine-solution-main/static/52263fa9b016ea6bedf68e9437913ec0/3cbba/join-tables.png",srcSet:["/vaccine-solution-main/static/52263fa9b016ea6bedf68e9437913ec0/7fc1e/join-tables.png 288w","/vaccine-solution-main/static/52263fa9b016ea6bedf68e9437913ec0/a5df1/join-tables.png 576w","/vaccine-solution-main/static/52263fa9b016ea6bedf68e9437913ec0/3cbba/join-tables.png 1152w","/vaccine-solution-main/static/52263fa9b016ea6bedf68e9437913ec0/8c77b/join-tables.png 1474w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\n",Object(i.b)("strong",{parentName:"p"},"Figure 12: Joining tables")),Object(i.b)("p",null,"Once joined, a new view is created:"),Object(i.b)("p",null,Object(i.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAAyUlEQVQY021QCQ6DMAzr/7+6iZZC71AvDjBNGpUsp7kdl3LGtu3IuaD3Dr455x9KKTiO4zH2C1dr1YYbWmsQEYwx/sBBMUbjp/idQ3atdUydrO3PYB+QIeaTMU4I/9P4uCA/fIM5rpaKXSUXlZ52ckHwQe2E9+ttHLxHXCP84pFTtqFNlXVdhmAtY1TpuOqyLPBadN+Q8kIIXx/tGDfjrMW85RDdXJk2GzHXGlImt0gpmWQelkX8r+tqPtpUwu04gE1M8tWQvrv+A/ae1ZGTy9I0AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Joined view",title:"Joined view",src:"/vaccine-solution-main/static/566a8aece65a9dba63f41fba1da758ca/3cbba/join-view.png",srcSet:["/vaccine-solution-main/static/566a8aece65a9dba63f41fba1da758ca/7fc1e/join-view.png 288w","/vaccine-solution-main/static/566a8aece65a9dba63f41fba1da758ca/a5df1/join-view.png 576w","/vaccine-solution-main/static/566a8aece65a9dba63f41fba1da758ca/3cbba/join-view.png 1152w","/vaccine-solution-main/static/566a8aece65a9dba63f41fba1da758ca/a6468/join-view.png 1324w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\n",Object(i.b)("strong",{parentName:"p"},"Figure 13: Join view")),Object(i.b)("p",null,"We see, now, those new assets as part of the project (Use ",Object(i.b)("inlineCode",{parentName:"p"},"Add to project"),"). The figure below show this new asset in the project:"),Object(i.b)("p",null,Object(i.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1136px"}}),"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAA2UlEQVQY011Q2Y7EIAzr/39mn1ftQiEJFOqJ0+nsEcnCuYxhySlhXVds2wZVQa31L6RC5K6Lquc3V+dPPXrOiSWS4sVS0Ft/o6FbC26+qFUiT/s3TBTNDPu2+0797OSUUVxj4U29d2jxpcORBcM6rusKjDHCzTVnODnPE5PcxcQvmmPCB9FcVNWw0Ka5o5Ir7CvB9uMj9ghyZv4XdE5H7HOOQWPhkENNDD3VH4e4g8vmT+QSZx8BcoL9J0IwPtMbORVoOiB+Nv6hNwlyuonTn0lx1h+Hv2fZewEq4tQSR2bd7gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Telemetries asset in the project",title:"Telemetries asset in the project",src:"/vaccine-solution-main/static/69df462140efbaf2af88552d755c3226/0fd57/telemetries-asset.png",srcSet:["/vaccine-solution-main/static/69df462140efbaf2af88552d755c3226/7fc1e/telemetries-asset.png 288w","/vaccine-solution-main/static/69df462140efbaf2af88552d755c3226/a5df1/telemetries-asset.png 576w","/vaccine-solution-main/static/69df462140efbaf2af88552d755c3226/0fd57/telemetries-asset.png 1136w"],sizes:"(max-width: 1136px) 100vw, 1136px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\n",Object(i.b)("strong",{parentName:"p"},"Figure 14: Telemetries asset in the project")),Object(i.b)("p",null,"With some data:\n",Object(i.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.84722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABG0lEQVQoz1WS23KEIBBE+f/fy1ueorsYL+AFRS1vE8+kSBmqKNhmuqd7VhNCkPM8pes62fddz3lZJHZBvj4+Zfh20ve9eO9lXVeZpkngbNsmrnGKzfOsPO6maRqJMYpzTgvbttUdxiDvwopvvRIovq5LxnHUWjA2GE2qqpJhGMQo+RZiA0AAo2NZllKVlSZIa7nd84aJJ0YCcMMFEWI9BfldFIV2Po5DnbBw5Z1XwdQIDNcqCIlLXddC/OSM+WRZJq/XSwXToiEcmidBMPu22twgAEABsZkHdzYFNHk6JB7ucZUEwUilM4QQhvvP8L9zoxiM01qrbp+CcYr6jokkCEZzxmcgIUTRMzInkfM8/yeIEO/pc/uLfOswth9s/WUtH020TAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Telemetry Data",title:"Telemetry Data",src:"/vaccine-solution-main/static/cfefb9b38889a63f6c1f11381de5e9c5/3cbba/telemetry-data.png",srcSet:["/vaccine-solution-main/static/cfefb9b38889a63f6c1f11381de5e9c5/7fc1e/telemetry-data.png 288w","/vaccine-solution-main/static/cfefb9b38889a63f6c1f11381de5e9c5/a5df1/telemetry-data.png 576w","/vaccine-solution-main/static/cfefb9b38889a63f6c1f11381de5e9c5/3cbba/telemetry-data.png 1152w","/vaccine-solution-main/static/cfefb9b38889a63f6c1f11381de5e9c5/0b124/telemetry-data.png 1728w","/vaccine-solution-main/static/cfefb9b38889a63f6c1f11381de5e9c5/9ff81/telemetry-data.png 2108w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\n",Object(i.b)("strong",{parentName:"p"},"Figure 15: Telemetry data")),Object(i.b)("p",null,"Note: It is important to note that building those views will create new connection to the database engine that can be accessed by using external tool."))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-solution-cp-4-d-collect-mdx-734348508cf8c6325b01.js.map