(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{h54W:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return b}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},s=c("AnchorLinks"),l=c("AnchorLink"),p={_frontmatter:r},m=i.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(m,o({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"AnchorLinks"},Object(n.b)(l,{mdxType:"AnchorLink"},"Overview"),Object(n.b)(l,{mdxType:"AnchorLink"},"Build"),Object(n.b)(l,{mdxType:"AnchorLink"},"Run locally"),Object(n.b)(l,{mdxType:"AnchorLink"},"Deploy to OpenShift"),Object(n.b)(l,{mdxType:"AnchorLink"},"Usage Details")),Object(n.b)("h2",null,"Overview"),Object(n.b)("p",null,"This service is exposing a send order and optimize API to build a shipment plan for all the vaccine lots given a new order. The implementation use CPLEX and an event driven solution to get a continuous streams of information coming frm the manufacturing, the refrigerator inventory and the available transportation capacity and cost."),Object(n.b)("p",null,"The following diagram illustrates all the components working together to support and event-driven shipment plan real time optimization:"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAACAklEQVQoz2WSS08TURTH+Sp+A12Y+AU0cSFrSEzUjYmGhexM3GgiLIxpdOMrhGAMPghgUAFpxQcMKdRiyxRqpKIkraZS7XTamem8f54ZBJp4Jydncs+5v/u/55yusNXENw0sTdu3dqOB09RxmxIzWvv/tq7Hsb14IOdCywC7TSA+aLXoCtsWThjQuS4lpui5MsrZa8843veA7WqdUL65zDrJjxvMLBdYVDdxfZeGaaFulcWb+I4dAU0cz+PRdJbE6AK3nixysu8+I1NpUukNxpKrWLaDKznjb1eYfJfhaSrNbDqP5zrUWwbzq8XYBxEQUWh7LhcGx+juH6Ln8kOOnbnNm0yJyo5OqfyblmWLGo+XyideKTmef8gyn13HFaAuCrNftmO/q9Ay42QI/hmcHxjjcG+CU/3DHOoeZCG3Fe9HoMn3WcZF5evltRioGSaKWooV+k77AOgH/n4Nz119zNHTCU5cvMuR3puslX7G+9NLeaYWV2NwKlMQoI0moKieluOA5xwAPXl2BA2kQROpLNfvTHBj6AUD9yZRiyV2ajukVlSSomxmKYeS/0xTJiSjFvn24xdfK1W0urbb5UhbBI2tQ+nesmUsTEOeFPp4gVwelyhEt9qMzCrS/QLDMwqFze8ClFsilZ3mR4f3zLKgWoVK+b+8QGbU+CNNq9VicxsafwGCFYROYHR+HwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Components",title:"Components",src:"/vaccine-solution-main/static/c2c7d437f38708884e457041dbee89be/3cbba/voro-components.png",srcSet:["/vaccine-solution-main/static/c2c7d437f38708884e457041dbee89be/7fc1e/voro-components.png 288w","/vaccine-solution-main/static/c2c7d437f38708884e457041dbee89be/a5df1/voro-components.png 576w","/vaccine-solution-main/static/c2c7d437f38708884e457041dbee89be/3cbba/voro-components.png 1152w","/vaccine-solution-main/static/c2c7d437f38708884e457041dbee89be/0b124/voro-components.png 1728w","/vaccine-solution-main/static/c2c7d437f38708884e457041dbee89be/382d6/voro-components.png 1798w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"The app is done in python with Flask and Gunicorn WSGI server to run in a container deployable on Openshift. The ",Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/vaccine-order-optimizer/blob/master/Dockerfile"}),"Dockerfile is here")),Object(n.b)("li",{parentName:"ol"},"A set of ",Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/vaccine-order-optimizer/tree/master/server/api"}),"Resource classes")," expose REST API for orders and optimization. For demonstration purpose other resoources are implemented."),Object(n.b)("li",{parentName:"ol"},"The optimization component transforms the data to pandas structure for CPLEX to run. As the domain was very limited, it can run internally to the python app, but a remote client is also implemented to access the decision optimization service when the problem is becoming more complex."),Object(n.b)("li",{parentName:"ol"},"A set of Kafka consumers, using AVRO schema are used to get real time data.")),Object(n.b)("p",null,"See the code in this ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-order-optimizer"}),"Vaccine order optimizer github repository.")),Object(n.b)("p",null,"The application is deployed on OpenShift and participates with other components to demonstrate the vaccine order processing, as illustrated below:"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACf0lEQVQoz12TyW4TQRRF/RP8Bgv2rPkJ1kjsQCxAsAJ+ACkCgZCYgswgBgEJJiFABIkNOLFjE5PEJDgJjp320HOX2z348FwoWVDS7arud+u9e/tVZaZml7g1+YG7j+e5fv89y6UNiAckngfDALPZpTCzzmrhN19n19lc2SV2XFTfRvVshpajualg5Dpkjp2c4MiJqxw/dZPM0XNcmHjLeHj+kDhOaRsuj7MlctM/efm8ytSrVR7cGb9v8PRRlZVyi4OR9rpksu+K3H72hRezy1zLfiRf2dLBJE0YBENGpGMqKhjo2ep7rK/tsVzc5qkUWvy8Re2HQccQR7ZJxnOVTjAKE3nIFpkDL0SJQrsXoGTtOyFuX0mBCN8eaH652OT8mRy3b3zj7Ok3zOTkVw3E8uWLn3iSrWglSZwQqojhMJLkI8Kx7SQm9IZa7TgeSMIoium1HHZ3DNrtPnt7XVwvALNP5sqlOR7eXSIIAwqrm5TWGySSpLK5y+JKHdv3yeWrtDom5fo2i+U6jXaHtwsVbM//507EDGMp3u2Q2WkaKKVwAkV27juv8xVNmivWeLVQpu943MvlafYsPlfqTBcq1BpNJmcK9CSmmzFKiUSETuiI1CSO2d/vkC/V+NVoS3djWobYMbp4QUBjt8mfVovW/j7tThfbdelbNlEcaX1jxAcJgzDFtBV1sWgYFo47EJsDUTzAdHzaXZONrQara3UptiMxhatCjTHnkOspoq4cG182BbYnDVAEsvYsF1/gysH9Xd/S2Nncpl7bkK5bmuuZjuYdYMx3TJfIEIWpY5NaJolp6jm1rEOMJLZdrVKan8dtNsGRW/EfR8MWrnwfdQz+AmhlI1dyRoQnAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"End to end scenario",title:"End to end scenario",src:"/vaccine-solution-main/static/38d319ff54fc4d42ae520aa48ce575cb/3cbba/order-simulated.png",srcSet:["/vaccine-solution-main/static/38d319ff54fc4d42ae520aa48ce575cb/7fc1e/order-simulated.png 288w","/vaccine-solution-main/static/38d319ff54fc4d42ae520aa48ce575cb/a5df1/order-simulated.png 576w","/vaccine-solution-main/static/38d319ff54fc4d42ae520aa48ce575cb/3cbba/order-simulated.png 1152w","/vaccine-solution-main/static/38d319ff54fc4d42ae520aa48ce575cb/4dbac/order-simulated.png 1560w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"An external app is managing the order life cycle and can be accessible from the ",Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/vaccine-order-mgr"}),"Vaccine Order manager")," git repository.\n1.This Vaccine Order Reefer Optimization component."),Object(n.b)("li",{parentName:"ol"},"Manufacturer simulator to be send a vaccine lot inventory to the ",Object(n.b)("inlineCode",{parentName:"li"},"vaccine-inventory")," Kafka topic."),Object(n.b)("li",{parentName:"ol"},"Refrigerator manager to manage the availability of refrigerator container to carry the vaccine lots"),Object(n.b)("li",{parentName:"ol"},"Transportation simulator to send updated itinerary update.")),Object(n.b)("h2",null,"Build"),Object(n.b)("p",null,"Simply build the docker image and push it to your registry. Here is an example of commands:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"docker build -t ibmcase/vaccine-order-optimizer .\n\ndocker push ibmcase/vaccine-order-optimizer\n")),Object(n.b)("p",null,"The repository include a ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-order-optimizer/blob/master/.github/workflows/dockerbuild.yaml"}),"github action workflow")," to build and push the image automatically to the ",Object(n.b)("a",o({parentName:"p"},{href:"https://hub.docker.com/repository/docker/ibmcase/vaccine-order-optimizer"}),"public docker registry.")),Object(n.b)("p",null,"The flow uses a set of secrets in the git repo:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"DOCKER_IMAGE_NAME = vaccine-order-optimizer"),Object(n.b)("li",{parentName:"ul"},"DOCKER_REPOSITORY = ibmcase"),Object(n.b)("li",{parentName:"ul"},"DOCKER_USERNAME and DOCKER_PASSWORD")),Object(n.b)("h2",null,"Run locally"),Object(n.b)("p",null,"It is possible to run the code on your laptop or server but connected to Event Streams deployed on OpenShift. Some pre-requisites need to be done:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Get the Kafka URL, schema registry URL, the user and password and any pem file containing the server certificate."),Object(n.b)("li",{parentName:"ul"},"The certificate needs to be under certs folder."),Object(n.b)("li",{parentName:"ul"},"Copy the script/setenv-tmpl.sh  to script/setenv.sh"),Object(n.b)("li",{parentName:"ul"},"modify the environment variables.")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"source ./script/setenv.sh\n\ndocker run -ti -e KAFKA_BROKERS=$KAFKA_BROKERS -e SCHEMA_REGISTRY_URL=$SCHEMA_REGISTRY_URL -e REEFER_TOPIC=$REEFER_TOPIC -e INVENTORY_TOPIC=$INVENTORY_TOPIC -e TRANSPORTATION_TOPIC=$TRANSPORTATION_TOPIC -e KAFKA_USER=$KAFKA_USER -e KAFKA_PASSWORD=$KAFKA_PASSWORD -e KAFKA_CERT=$KAFKA_CERT -p 5000:5000  ibmcase/vaccine-order-optimizer\n")),Object(n.b)("p",null,"The swagger looks like:"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.69444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABjUlEQVQoz43Sy06DQBQGYN7Sy6J168qY9CGMD+ADGOPGJ1ATrVW36k5bpaXVoTAg4My0ZWCmvwc0jbeoJF8OgZk/58A4K0urWG+tYbO1gUajiWazgb39XbQ7J+hcnOH8stKh+zZO6Vm7c/oBrTk/w87BNlpb61hZXoUDuuI4w2jE4I8DMBZg4I1qbt+r64M7gDd8hJQSs9kM0+n0E50XKAuD+XwOpyw0eCLQG0Xwg5jCn2tSKig1qUml6o1FUfxIU4bWGnmew7HWQMgJkhdFLwystTDEfmGMRVmWxPygXHCqNpUUkC8p5rZq21L9yPxL1ZgxhgJNgYdA4aqfIkolxrFAmCgiwVOFVGkkMv9TpvJ6bAdW48Y3OO7mcFmCu8cEXXLPMrhjiWE0BUuLXz0RLqrvuQjUOOoqCoxwO4zQe3qmwIQCMwpU8DNN8vf6HSNc6PcOae6riOPQ8+CFnMYP4VLtR/TXhXgjf8doDaeTsAi85jEOB3Tu/AA9P0RvHMKLE1pM3Qn5J0Y4Ha8q8BX+DujAygDjwAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"openAPI",title:"openAPI",src:"/vaccine-solution-main/static/f9c712a282163582f4b5c5c98bbd6a25/3cbba/oro-swagger.png",srcSet:["/vaccine-solution-main/static/f9c712a282163582f4b5c5c98bbd6a25/7fc1e/oro-swagger.png 288w","/vaccine-solution-main/static/f9c712a282163582f4b5c5c98bbd6a25/a5df1/oro-swagger.png 576w","/vaccine-solution-main/static/f9c712a282163582f4b5c5c98bbd6a25/3cbba/oro-swagger.png 1152w","/vaccine-solution-main/static/f9c712a282163582f4b5c5c98bbd6a25/0b124/oro-swagger.png 1728w","/vaccine-solution-main/static/f9c712a282163582f4b5c5c98bbd6a25/358dd/oro-swagger.png 2198w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h2",null,"Deploy to OpenShift"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Connect to the vaccine project using: ",Object(n.b)("inlineCode",{parentName:"p"},"oc project vaccine"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Modify the kubernetes/configmap.yaml with the Kafka Broker URL you are using, and if you changed the topic names too. Then do:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"oc apply -f kubernetes/configmap.yaml\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Get pem certificate from eventstreams or the Kafka cluster project to the local vaccine project with a command like:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"oc get secret light-es-cluster-cert-pem  -n eventstreams --export -o yaml | oc apply -f - \n")),Object(n.b)("p",{parentName:"li"},"This pem file is mounted to the pod via the secret as:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"volumeMounts:\n- mountPath: /certs\n name: eventstreams-cert-pem\nvolumes:\n- name: eventstreams-cert-pem\n secret:\n   secretName: light-es-cluster-cert-pem\n")),Object(n.b)("p",{parentName:"li"},"and the path for the python code to access this pem file is defined in the environment variable: "),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-yaml"})," - name: KAFKA_CERT\n   value: /certs/es-cert.pem\n")),Object(n.b)("p",{parentName:"li"},"the name of the file is equal to the name of the {.data.es-cert.pem} field in the secret."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"Name:         eventstreams-cert-pem\nNamespace:    vaccine\nLabels:       <none>\nAnnotations:  <none>\n\nType:  Opaque\n\nData\n====\nes-cert.pem:  1164 bytes\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Copy the Kafka user’s secret from the e",Object(n.b)("inlineCode",{parentName:"p"},"ventstreams")," or Kafka project to the current vaccine project. This secret has two data fields: username and password"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"oc get secret eventstreams-cred -n eventstreams --export -o yaml | oc apply -f - \n")))),Object(n.b)("p",null,"They are used in the Deployment configuration as:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"- name: KAFKA_USER\n   valueFrom:\n     secretKeyRef:\n       key: username\n       name: eventstreams-cred\n - name: KAFKA_PASSWORD\n   valueFrom:\n     secretKeyRef:\n       key: password\n       name: eventstreams-cred\n")),Object(n.b)("h2",null,"Usage Details"),Object(n.b)("p",null,"This section address a simple validation of this component as standalone. "),Object(n.b)("p",null,"TBD"))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-solution-orderms-voro-solution-mdx-4e3a739f46e7865d1b93.js.map