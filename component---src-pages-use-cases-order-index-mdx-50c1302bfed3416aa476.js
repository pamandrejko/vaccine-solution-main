(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{PI8s:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},i={_frontmatter:o},l=r.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(l,c({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The vaccine order fullfilment is a complex problem to address as we need to optimize the shipment plan according to the demand and the contraints. A deep dive to the O/R problem is described in ",Object(n.b)("a",c({parentName:"p"},{href:"/vaccine-solution-main/solution/orderms/voro-solution/"}),"this note"),". In this scenario we want to demostrate the order entry with an event-driven microservice, and the integration with an event driven linear programming stateful function. The scenario addresses the following features:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create Order(s) using a simple user interface as an order manager will do after interacting with the country health care request."),Object(n.b)("li",{parentName:"ul"},"Validate the ",Object(n.b)("a",c({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-eda/patterns/intro/#transactional-outbox"}),"transactional outbox pattern")," works to get OrderCreated, OrderUpdated or OrderCancelled Events created into a dedicated table in Postgresql"),Object(n.b)("li",{parentName:"ul"},"Validate how ",Object(n.b)("a",c({parentName:"li"},{href:"https://debezium.io/documentation/reference/1.4/connectors/postgresql.html"}),"Debezium Change Data Capture")," for Postgresql as a Kafka connector, produces OrderEvents from the table to Kafka ",Object(n.b)("inlineCode",{parentName:"li"},"orders")," topic."),Object(n.b)("li",{parentName:"ul"},"Integrate with the ",Object(n.b)("a",c({parentName:"li"},{href:""}),"Shipment plan optimization")," to get the updated shipment plan as events.")),Object(n.b)("h2",null,"Components involved in this use case"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",c({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-order-mgr-pg"}),"Vaccine Order Service"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Postgres DB")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Debezium for change data capture on the outbox table")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Kafka or ",Object(n.b)("a",c({parentName:"p"},{href:"https://ibm.github.io/event-streams/"}),"event streams"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",c({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-order-optimizer"}),"Vaccine Order Reefer Optimization Service")),Object(n.b)("span",c({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"777px"}}),"\n      ",Object(n.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACbElEQVQoz2VTS2vUUBTOzj+gO0Hc+wNcuBEENy5cunAngg9ciS6KoCJCEVQqFmlLKa4sVsq0dawbhVYdsdqpTKf0NbXOq5m088jkJrlJ7r35PPd2Kog3fMnNeXw59zsnlgoC+G0PrNndR8uD4iHSmP8DxBHSiEOSD0mE0GMYf/sNoxOfMDb5BaOv59F0WrBCl2FsZAnDgz8w8mIRo0OLcBwGlabgXBCPQKQRJwYsIEJatYaL4+f7cfLSIE5fG8ahU31YLGzBClwPM1NFTE8WkM0sY3amiE47oJQUSSKglIJIJLodz7xrpGTrdAPcePTG4NZABhfvvESlYsOCjChZUZCkSmJIemoIISAl2ekSUoKHCdkkEUr6Vgp7t4sTFx7jyNn7OHruIQ6fuYv1zSqspVUHma8NuJRwsDhpFUcRFBFqYlNlLAxxkiSmgI4X4PbAFPqez+De0DtcfvAK9ZoD6+qzPI5dmcfc8h6cvTYqdtvotF3fRWWnSdUKtLqMfK4hWtmqodzwaC/x36JmWdlcFU+zZRS3m7jeP4GbT6aw/ruO8Y/f8SG/ZuKmcwW8X1gxexZJAgmRUrVSmOZpSKpe0clIw7hHrxDygI4n4DTbyH7Oo1Aqww8Y5hZ+IrdEzXJdQ6RjE5EYrbXGhlT1CCWn2dLCk05+RKNBwnt0ZJf5qNsNrG5sktglVOs7YCHNH42OBuMxVdgj1PdUmTm1FPOQJtRdeuF+CE5kMSVyP4BNJI26jdJGCeurawhZgCjkiChGx+qclAZe6aHXP0Pgw0q9rtkcQPkazIDmyNjsX1toVis9/77vb/xBri6M7H8ACQ8nDVgeUpYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"vaccine order 1",title:"vaccine order 1",src:"/vaccine-solution-main/static/f687ca251b28950f8caa6b410572107d/c53c3/vaccine-order-1.png",srcSet:["/vaccine-solution-main/static/f687ca251b28950f8caa6b410572107d/7fc1e/vaccine-order-1.png 288w","/vaccine-solution-main/static/f687ca251b28950f8caa6b410572107d/a5df1/vaccine-order-1.png 576w","/vaccine-solution-main/static/f687ca251b28950f8caa6b410572107d/c53c3/vaccine-order-1.png 777w"],sizes:"(max-width: 777px) 100vw, 777px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"The blockchain integration is not done yet")),Object(n.b)("p",null,"To have a deeper understanding of the order service read ",Object(n.b)("a",c({parentName:"p"},{href:"/vaccine-solution-main/solution/orderms/#overview"}),"this overview section"),". For the Vaccine order reefer optimization service ",Object(n.b)("a",c({parentName:"p"},{href:"/vaccine-solution-main/design/voro/"}),"the design article")," details the optimization approach, while the ",Object(n.b)("a",c({parentName:"p"},{href:"/vaccine-solution-main/solution/orderms/voro-solution/#overview"}),"solution article")," goes over the service implementation details."),Object(n.b)("h2",null,"Run to OpenShift"),Object(n.b)("h3",null,"Pre-requisites"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You need:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"docker and docker compose on your laptop to run locally or build image"),Object(n.b)("li",{parentName:"ul"},"Java 11"),Object(n.b)("li",{parentName:"ul"},"git client "),Object(n.b)("li",{parentName:"ul"},"Get access to an OpenShift cluster with Cloud Pak for integration and event streams installed.")))),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create the following artifacts in the ",Object(n.b)("inlineCode",{parentName:"p"},"eventstreams")," namespace on your OpenShift cluster:"),Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Create an EventStreams instance ",Object(n.b)("em",{parentName:"li"},"(via the ",Object(n.b)("a",c({parentName:"em"},{href:"https://ibm.github.io/event-streams/installing/installing/#install-an-event-streams-instance"}),"Event Streams Custom Resource"),")"),"."),Object(n.b)("li",{parentName:"ol"},"Create a ",Object(n.b)("a",c({parentName:"li"},{href:"https://ibm.github.io/event-streams/security/managing-access/#managing-access-to-kafka-resources"}),"Kafka User with SCRAM-based credentials"),", as required by the ",Object(n.b)("a",c({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/vaccine-reefer-simulator#application-deployment"}),"Vaccine Reefer Simulator"),"."),Object(n.b)("li",{parentName:"ol"},"Create a ",Object(n.b)("a",c({parentName:"li"},{href:"https://ibm.github.io/event-streams/security/managing-access/#managing-access-to-kafka-resources"}),"Kafka User with TLS-based credentials"),", as required by the ",Object(n.b)("a",c({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/vaccine-monitoring-agent#create-a-tls-user"}),"Vaccine Monitoring Agent"),"."),Object(n.b)("li",{parentName:"ol"},"Create two ",Object(n.b)("a",c({parentName:"li"},{href:"https://ibm.github.io/event-streams/getting-started/creating-topics/"}),"Kafka Topics"),". This tutorial will assume the names of ",Object(n.b)("inlineCode",{parentName:"li"},"vaccine.shipment.plans")," respectively."))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create a new project named ",Object(n.b)("inlineCode",{parentName:"p"},"vaccineorder")," that will be used for the deployment of all other components.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",c({parentName:"p"},{href:"https://cloud.ibm.com/docs/openshift?topic=openshift-openshift-cli"}),"OpenShift CLI")," on your local environment.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",c({parentName:"p"},{href:"https://stedolan.github.io/jq/"}),"jq")," on your local environment.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Use a Terminal and the oc cli. If you want to access the code source you can clone the two main repositories of this solution:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"git clone https://github.com/ibm-cloud-architecture/vaccine-order-mgr-pg\ngit clone https://github.com/ibm-cloud-architecture/vaccine-order-optimization-pg\n")))),Object(n.b)("h3",null,"Deploy the Vaccine Order Service"),Object(n.b)("p",null,"This microservice is built using maven and Quarkus extensions. In this current main project we have\nWe have already pushed the last version of this service on dockerhub, if you do not want to build it. "),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Ensure you are working inside the correct project via the following ",Object(n.b)("inlineCode",{parentName:"p"},"oc")," command:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"export PROJECT_NAME=vaccineorder\noc project ${PROJECT_NAME}\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Export the value of your Event Streams cluster name into an environment variable:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"export CLUSTER_NAME=eda-dev\nexport EVENTSTREAMS_NS=eventstreams\n")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"To check what the name of your Event Streams cluster name is do:",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"$ oc get eventstreams -n ${EVENTSTREAMS_NS}\nNAME           STATUS\ndevelopment    Ready\n"))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Deploy a postgres server. The orders are persisted in an external Postgres instance running on Openshift cluster. To do a simple deployment performs the following commands:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),'# Define environement variables\nSERVICE_ACCOUNT_NAME=postgres-sa\nDEPLOYMENT_NAME=postgres\nSERVICE_NAME=postgres\nDOCKER_IMAGE=docker.io/postgres:11.6-alpine\nPOSTGRES_PASSWORD=adifficultpasswordtoguess\n\noc create serviceaccount ${SERVICE_ACCOUNT_NAME}\noc adm policy add-scc-to-user anyuid -n ${PROJECT_NAME} -z ${SERVICE_ACCOUNT_NAME}\noc create deployment ${DEPLOYMENT_NAME} --image=${DOCKER_IMAGE}\noc set serviceaccount deployment/${DEPLOYMENT_NAME} ${SERVICE_ACCOUNT_NAME}\noc patch deployment ${DEPLOYMENT_NAME} --type="json" -p=\'[{"op":"add", "path":"/spec/template/spec/containers/0/args", "value":[]},{"op":"add", "path":"/spec/template/spec/containers/0/args/-", "value":"-c"},{"op":"add", "path":"/spec/template/spec/containers/0/args/-", "value":"wal_level=logical"} ]\'\noc set env deployment ${DEPLOYMENT_NAME} POSTGRES_PASSWORD=${POSTGRES_PASSWORD}\noc expose deployment ${DEPLOYMENT_NAME} --port 5432 --name ${SERVICE_NAME}\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Get Kafka TLS user name to access Event Streams bootstrap using the external route. export this user name in KAFKA_USER environment variable:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"oc get kafkausers -n $EVENTSTREAMS_NS \n# NAME                                CLUSTER   AUTHENTICATION   AUTHORIZATION\n# app-scram                           eda-dev   scram-sha-512    simple\n# app-tls                             eda-dev   tls              simple\nexport KAFKA_USER=app-tls\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Copy Kafka TLS user certificate to target project:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"oc get secret ${KAFKA_USER} -n ${EVENTSTREAMS_NS} -o json | jq -r '.metadata.namespace=\"'${PROJECT_NAME}'\"' | oc apply -f -\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Get Kafka bootstrap server URL within"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),'export KAFKA_BROKERS=$(oc get route -n ${EVENTSTREAMS_NS} ${CLUSTER_NAME}-kafka-bootstrap -o jsonpath="{.status.ingress[0].host}:443")\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Copy TLS server CA certificate from eventstreams project to local project with the command:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"oc get secret ${CLUSTER_NAME}-cluster-ca-cert -n ${EVENTSTREAMS_NS} -o json | jq -r '.metadata.name=\"kafka-cluster-ca-cert\"' |jq -r '.metadata.namespace=\"'${PROJECT_NAME}'\"' | oc apply -f -\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Define environment variables for the order service with config map and secrets:"))),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"# config map\noc apply -f  https://raw.githubusercontent.com/ibm-cloud-architecture/vaccine-order-mgr-pg/main/src/main/kubernetes/configmap.yaml\n# Secrets\noc apply -f - <<EOF\napiVersion: v1\nkind: Secret\nmetadata:\n  name: vaccine-order-secrets\nstringData:\n  KAFKA_USER: ${KAFKA_USER}\n  KAFKA_BOOTSTRAP_SERVERS: ${KAFKA_USER}\n  QUARKUS_DATASOURCE_PASSWORD: ${POSTGRES_PASSWORD}\n  QUARKUS_DATASOURCE_USERNAME: postgres\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Deploy the app. If you have cloned the repository and have java you can use the following command:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"./mvnw clean package -Dui.deps -Dui.dev -Dquarkus.kubernetes.deploy=true -DskipTests\n")),Object(n.b)("p",{parentName:"li"}," If not, you can deploy the application using the deployment config as we have pushed the ibmcase/vaccineorders image to dockerhub:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"oc apply -f  https://raw.githubusercontent.com/ibm-cloud-architecture/vaccine-order-mgr-pg/main/src/main/kubernetes/deploymentconfig.yaml\n\n")))),Object(n.b)("h3",null,"Deploy Debezium CDC connector"),Object(n.b)("p",null,"The Event Streams product documentation goes over the tasks to be done, but to summarize them, here are the actions done to deploy the postgres debezium connector:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Start a Kafka connector cluster: We use the custom resource called ",Object(n.b)("inlineCode",{parentName:"p"},"KafkaConnectS2I"),", which one instance represents a Kafka connect cluster. Each connector is represented by another custom resource called KafkaConnector. Kafka connect needs a user access to the Brokers. We can use the TLS user as previously done. "),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Event Streams UI has a Toolbox menu with the ",Object(n.b)("inlineCode",{parentName:"p"},"Set up a Kafka Connect environment")," where we can download the ",Object(n.b)("inlineCode",{parentName:"p"},"KafkaConnectS2I")," configuration. The matching configuration is ",Object(n.b)("a",c({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-order-mgr-pg/blob/main/environment/cdc/kafka-connect-s2i.yaml"}),"in this file")," and uses predefined TLS user and cluster certificate. The cluster name is ",Object(n.b)("inlineCode",{parentName:"p"},"connect-cluster"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Modify the bootstrap server and the TLS user to be used. Ensure the user can access any topics.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Deploy the cluster with: ",Object(n.b)("inlineCode",{parentName:"p"},"oc apply -f kafka-connect-s2i.yaml -n eventstreams"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Validate it via: "),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"oc get kafkaconnects2i -n eventstreams\noc describe kafkaconnects2i connect-cluster -n eventstreams\n"))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Download the postgres plugin archive from ",Object(n.b)("a",c({parentName:"p"},{href:"https://repo1.maven.org/maven2/io/debezium/debezium-connector-postgres/1.4.0.Final/debezium-connector-postgres-1.4.0.Final-plugin.tar.gz"}),"debezium maven repository")," and then add the jar files to the ",Object(n.b)("inlineCode",{parentName:"p"},"my-plugins\\debezium-connector")," folder. We need a subfolder as this connector includes multiple jars. "),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",c({parentName:"pre"},{}),"├── my-plugins\n│   └── debezium-connector\n│       ├── CHANGELOG.md\n│       ├── CONTRIBUTE.md\n│       ├── COPYRIGHT.txt\n│       ├── LICENSE-3rd-PARTIES.txt\n│       ├── LICENSE.txt\n│       ├── README.md\n│       ├── README_ZH.md\n│       ├── debezium-api-1.4.0.Final.jar\n│       ├── debezium-connector-postgres-1.4.0.Final.jar\n│       ├── debezium-core-1.4.0.Final.jar\n│       ├── failureaccess-1.0.1.jar\n│       ├── guava-30.0-jre.jar\n│       ├── postgresql-42.2.14.jar\n│       └── protobuf-java-3.8.0.jar\n└── pg-connector.yaml\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Deploy the connector configuration:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"oc start-build connect-cluster-connect --from-dir ./my-plugins/\noc get builds\n# NAME                        TYPE     FROM             STATUS    STARTED          DURATION\n# connect-cluster-connect-3   Source   Binary@f639186   Running   19 seconds ago   \n# once build is completed... wait to get the 3 kafka connect workers ready\noc get pods -w\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Start the connector: ",Object(n.b)("inlineCode",{parentName:"p"},"oc apply -f pg-connector.yaml"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Verify it is running: ",Object(n.b)("inlineCode",{parentName:"p"},"oc describe kafkaconnector pg-connector")," "))),Object(n.b)("h3",null,"Deploy the Optimization Service"),Object(n.b)("h2",null,"Scenario script"),Object(n.b)("p",null,"Once the solution is up and running in your target deployment environment (local or OpenShift) execute the following steps to present an end to end demonstration."),Object(n.b)("h3",null,"Validate existing vaccine lot shipment plan"),Object(n.b)("h3",null,"Create an order from the user interface of the Order Service."),Object(n.b)("h3",null,"See how the shipment plan is modified"),Object(n.b)("h3",null,"Validate the blockchain records"),Object(n.b)("h3",null,"Present the events created"))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-cases-order-index-mdx-50c1302bfed3416aa476.js.map