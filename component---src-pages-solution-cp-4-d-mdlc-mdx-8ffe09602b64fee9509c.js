(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{vmLN:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return s})),n.d(a,"default",(function(){return p}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var t=n("7ljp"),i=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var s={},c={_frontmatter:s},l=i.a;function p(e){var a=e.components,n=function(e,a){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(t.b)(l,o({},c,n,{components:a,mdxType:"MDXLayout"}),Object(t.b)("p",null,"This section discusses how various components of Cloud Pak For Data can be used to govern and manage the Model Lifecycle. "),Object(t.b)("p",null,"Managing Model’s lifecycle with a proper Governance workflow is key to reliability of such mission critical solution. The components of Cloud Pak For Data; like OpenPages, Watson Knowledge Catalog, and Wayson OpenScale can be used to achieve the same."),Object(t.b)("p",null,"Model Lifecycle (MDLC) can be defined using OpenPages with gates for manual/Automated approvals at various stages of MDLC. For example - "),Object(t.b)("p",null,"a) Proposal stage - The type of algorithms and data sources to be used can be verified by appropriate SMEs\nb) Development stage - After the Model is developed independent validation of the Model can be done by separate team using OpenScale\nc) Deployment Stage - Before production deployment any additional validation can be added by Business team and appropriate Monitoring measures can be established\nd) Change Management - Based on Monitored metrics upgrading to new version or decommisioing of the Model can be initiated with controlled Change Management"),Object(t.b)("p",null,"All assets related to the Model can be govered in a single Catalog using Watson Knwledge Catalog."),Object(t.b)("p",null,"The diagram below shows how OpenPages can help in managing MDLC of various models those are in different stages of MDLC with appropriate manual intervention."),Object(t.b)("p",null," ",Object(t.b)("span",o({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(t.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABV0lEQVQoz61Sy07DQAzM/38hB8SBA4VCm8e+X5l6nGygFeLESiNnHa/tGXtIKSPnhP86gzEWzgeUWiVxRikFMcbD0tda+xXruip4um/4/Jrwfr7CS1ImIJz3av1umfQRKSXM84xpmhS8E4P1ElDqnzR6Jz87qsLIOa9Faemnb1hswNNpRcpV4VODDU4kKEqBQY9oKk+BdcIoBJVnK1Iw+BBxumYsxuDjYvF69nh+e8E4T4cEBOnwYQdp+1ilcNcS4pcOnbNoJWjlUmQANQtH3A2ItKy1qpmRwppU/tuwwsmCxNwQ0gofMiknTPZ7Ym3Xgth8TRNQJyZj8q7hsswYx3ErLncdyuIqLma9WwcGsDPVS+4M9iEdk2Qh0jN224x+dCjOGuQUd8qbPp0eH9d9P9kdffyu2k1GiOm48/DtQEdfhb4ifdfYXa9sfRHbjjgOw8dyLHiPuwH1Jl/LfvMlgQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/vaccine-solution-main/static/8d98a30c1966973ca65c472f30f538d9/3cbba/OpnPagesOverview.png",srcSet:["/vaccine-solution-main/static/8d98a30c1966973ca65c472f30f538d9/7fc1e/OpnPagesOverview.png 288w","/vaccine-solution-main/static/8d98a30c1966973ca65c472f30f538d9/a5df1/OpnPagesOverview.png 576w","/vaccine-solution-main/static/8d98a30c1966973ca65c472f30f538d9/3cbba/OpnPagesOverview.png 1152w","/vaccine-solution-main/static/8d98a30c1966973ca65c472f30f538d9/0b124/OpnPagesOverview.png 1728w","/vaccine-solution-main/static/8d98a30c1966973ca65c472f30f538d9/4ea69/OpnPagesOverview.png 2304w","/vaccine-solution-main/static/8d98a30c1966973ca65c472f30f538d9/8dc0b/OpnPagesOverview.png 2880w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(t.b)("p",null,"In OpenPages, workflow for MDLC can be configured in a way that alligns to regulatory requirements of an organization. The stages of the MDLC, approval gates, fields for mandatory information and any other specific needs can be configured in OpenPages and can be saved as a template in the Library. The same can be used to create workflows for various Models."),Object(t.b)("p",null,"The diagram below shows a sample MDLC template for a Model with various stages. Custom fields can be created to link the MDLC with respective Catalog (of watson Knowledge Catalog), Model’s Deploymebnt Endpoint, Model Development Project, etc as needed by the organizational requirement."),Object(t.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(t.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABiElEQVQoz6VS227CMAzND2/TYEzsL/a+L9nb/mES4wHGRFtok9CWpDcI7Zkd1Ar2NG2Wjhwp9rGPbXFze4fx5IkwxWg0+hMmkwlGD1Pcjx8hnDvh6Fr8x5oOeHkDnl8BoXQGqTIkUsFag7quCZX3VXX2TdN48NtaC2PM8MexRVlBZRWStIIwxqIoSpxO7RXatvPJDE4uyxKHw4H+SNHxSDkFGiLkd9uSwo7y3AFiK3OsAoWNNFSlHiBTDnY+uOu6wbOxt0QotUS+z6nDAiV1enQOYrPZYjabYR0EiKIIISEIQsRJgv1+7zvsSXrjtyktArVBtNsSYoTkU5tDJJQ4n3/gc7kkogBhGCIKA8Rx7Ml4dizrkpC7rZsaWZ75cfTG4xBSSiwWC9+dUspjtY6h9e5K4pVkmi9L1KmGIRUtEQ2EvDHuojd36vD+VcJdnBIHcowf/g9CrbVfzkDI27sk5C74FPpkX4SGzVtl30uuKMYWdCG28Pn8x16cb6keJP0GHMsFevTnxfgG2AQ2W0G+/1EAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/vaccine-solution-main/static/3d4736871a8a01f4d503d5d2306ca3b6/3cbba/OpenPagesModel.png",srcSet:["/vaccine-solution-main/static/3d4736871a8a01f4d503d5d2306ca3b6/7fc1e/OpenPagesModel.png 288w","/vaccine-solution-main/static/3d4736871a8a01f4d503d5d2306ca3b6/a5df1/OpenPagesModel.png 576w","/vaccine-solution-main/static/3d4736871a8a01f4d503d5d2306ca3b6/3cbba/OpenPagesModel.png 1152w","/vaccine-solution-main/static/3d4736871a8a01f4d503d5d2306ca3b6/0b124/OpenPagesModel.png 1728w","/vaccine-solution-main/static/3d4736871a8a01f4d503d5d2306ca3b6/4ea69/OpenPagesModel.png 2304w","/vaccine-solution-main/static/3d4736871a8a01f4d503d5d2306ca3b6/f6a47/OpenPagesModel.png 2878w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(t.b)("p",null,"For details on how to configure OpenPages for a paerticular MDLC requirement following guidelines can be used ",Object(t.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSQNUZ_3.5.0/svc-welcome/openpages.html"}),"https://www.ibm.com/support/knowledgecenter/SSQNUZ_3.5.0/svc-welcome/openpages.html")," and ",Object(t.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSFUEU_8.2.0/op_grc_user/c_oppm_mrg_about_objects.html"}),"https://www.ibm.com/support/knowledgecenter/SSFUEU_8.2.0/op_grc_user/c_oppm_mrg_about_objects.html")),Object(t.b)("p",null,"The results of monitoring the Model in OpenScale can be sent to OpenPages on periodic basis or on demand. That is to help the Model Owner to take decision about Model’s effectiveness and decide whether the Model needs to be changed or decommisioned. The diagram below shows how to send the monitoring metrics from OpenScale to OpenPages. "),Object(t.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(t.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACPklEQVQoz32SS28SURiG+UH8AMAFDBJDXRhx5cLExEsilkIhGouhhs4wwFyYMa5ILMKwMP4HV14WJmq6ENAEF4DQQKFchuHSung954BVE9PFk+/9Ts48c87MZ7Pb7fD7N3DR54Pb7YbH4wHHcQyaz4MjeDkPLvm82PD7ELh6BTaO8yKdkcDzPISUADEtIpPJIJfLQdf1c9E0HWJWR4LXEU9q4MUcbBdcLqSJJJ/P49P7j3j3+i0OPh+gVqv9l2q1us5VfKlU8ebDVwTjeVy+IWDzQRY2FxHyvID9QgHfDr+j2+1hMpnANE2Mx2OMRiOW6RrNtE6nU7ZmkryYW3j10oAiCVAVInQ6nUjxaRSeF9E8bKHb6zLRfD5Hp9NBq9XCYDAgtYlerwfLspjwN7PZDKWSQT6XiGxWWglps/+ihP5RH512G8PhkAkbjQbapO/3+0T4g9TBP0JzLTQMA6JIhesTimIaxWKJbabQ61BhpVJBvV4nLzhGs9lk4unUOpOZ5t/C1B+hIAjk2CUsl0vGYrFglT44Hk+wXFiYmUc4Xc5ZPllD88+TOcpEmNxLkWkhQofDQa4sIfGERywWQzgcQSSyYns7imhkC1vRx7iuHCOgnOKasmQE5MUKsrYrl6FKIhs/JpSJOZHYRSgUOpNRQpsh3A/eQ3AzjLs7BdyJlwkGbj0q4ebDAqlF3N4xsCdq7A/T+WVCenc6i7IsMzRNY4OrqMqqz6l4qqYIAp7lROgKDzWbhC7zDFnKsH1U+At8wX/+dyI72wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/vaccine-solution-main/static/5f74797e5fc25e5eb76cfecfcfc5ffb5/3cbba/OpenScale2OpenPages.png",srcSet:["/vaccine-solution-main/static/5f74797e5fc25e5eb76cfecfcfc5ffb5/7fc1e/OpenScale2OpenPages.png 288w","/vaccine-solution-main/static/5f74797e5fc25e5eb76cfecfcfc5ffb5/a5df1/OpenScale2OpenPages.png 576w","/vaccine-solution-main/static/5f74797e5fc25e5eb76cfecfcfc5ffb5/3cbba/OpenScale2OpenPages.png 1152w","/vaccine-solution-main/static/5f74797e5fc25e5eb76cfecfcfc5ffb5/0b124/OpenScale2OpenPages.png 1728w","/vaccine-solution-main/static/5f74797e5fc25e5eb76cfecfcfc5ffb5/4ea69/OpenScale2OpenPages.png 2304w","/vaccine-solution-main/static/5f74797e5fc25e5eb76cfecfcfc5ffb5/f6a47/OpenScale2OpenPages.png 2878w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(t.b)("p",null,"For configuration of the same you can check this link - ",Object(t.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSFUEU_8.2.0/op_grc_user/c_oppm_mrg_intr_module_description.html"}),"https://www.ibm.com/support/knowledgecenter/SSFUEU_8.2.0/op_grc_user/c_oppm_mrg_intr_module_description.html")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-solution-cp-4-d-mdlc-mdx-8ffe09602b64fee9509c.js.map