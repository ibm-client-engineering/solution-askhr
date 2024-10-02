"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[978],{5777:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=s(4848),i=s(8453);const t={title:"Oracle HCM",description:'Documentation and assets for the "Update an employee manager" usecase in Oracle HCM',custom_edit_url:null},a=void 0,l={id:"Use Cases/UpdateManager/OracleHCM",title:"Oracle HCM",description:'Documentation and assets for the "Update an employee manager" usecase in Oracle HCM',source:"@site/docs/02-Use Cases/02-UpdateManager/01-OracleHCM.mdx",sourceDirName:"02-Use Cases/02-UpdateManager",slug:"/Use Cases/UpdateManager/OracleHCM",permalink:"/solution-askhr/Use Cases/UpdateManager/OracleHCM",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Oracle HCM",description:'Documentation and assets for the "Update an employee manager" usecase in Oracle HCM',custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Update a Manager",permalink:"/solution-askhr/02-UpdateManager"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Overview",id:"overview",level:3},{value:"Download and Import the prebuilt watsonx Orchestrate AI Assistant",id:"download-and-import-the-prebuilt-watsonx-orchestrate-ai-assistant",level:4},{value:"Download and Import the OracleHCM Skill/Custom Extensions into watsonx Orchestrate AI Assistant",id:"download-and-import-the-oraclehcm-skillcustom-extensions-into-watsonx-orchestrate-ai-assistant",level:4},{value:"Stage the &quot;Apply Manager Update Patch&quot; Custom Code Environment",id:"stage-the-apply-manager-update-patch-custom-code-environment",level:4},{value:"Stage Oracle HCM and the watsonx Orchestrate AI Assistant",id:"stage-oracle-hcm-and-the-watsonx-orchestrate-ai-assistant",level:4},{value:"Configure Action Steps Extensions",id:"configure-action-steps-extensions",level:4},{value:"Further Documentation",id:"further-documentation",level:2},{value:"Oracle Documentation",id:"oracle-documentation",level:3},{value:"Oracle HCM API Flow Overview",id:"oracle-hcm-api-flow-overview",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"IBM Technologies"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'IBM watsonx Orchestrate with the "Builder" role'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"External Technologies"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Oracle HCM Instance"}),"\n",(0,r.jsx)(n.p,{children:"Including an Oracle HCM user account with:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Username/Password"}),"\n",(0,r.jsx)(n.li,{children:'API access with ability to perform GET and PATCH calls to "workers" API, and GET calls to "publicWorkers" API'}),"\n",(0,r.jsx)(n.li,{children:"The ability to create Workers"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Custom code engine to perform the patch function"}),"\n",(0,r.jsxs)(n.admonition,{title:"Custom Code Required",type:"warning",children:[(0,r.jsx)(n.p,{children:"Custom code is required to update a manager via a PATCH call due to Oracle HCM's specific PATCH parameter requirements and JSON response structure. watsonx Orchestrate cannot natively parse these unique IDs from the Oracle HCM JSON response, as they are embedded within the string of the returned URL property, rather than being returned as individual properties."}),(0,r.jsxs)(n.p,{children:['Two unique IDs are required as input parameters for the "Update a Manager" PATCH call: ',(0,r.jsx)(n.code,{children:"workersUniqID"})," and ",(0,r.jsx)(n.code,{children:"assignmentsUniqID"}),". Refer to the supporting ",(0,r.jsx)(n.a,{href:"https://docs.oracle.com/en/cloud/saas/human-resources/24b/farws/Update_a_Worker_Manager.html",children:"Oracle documentation"})," for more details. In the Oracle HCM response, the URL properties contain these unique IDs as part of the string, but only the unique ID portion is needed for the PATCH call to function correctly. Since watsonx Orchestrate cannot isolate portions of string properties to pass as output variables, it cannot directly use them as input parameters for the PATCH call."]}),(0,r.jsx)(n.p,{children:"To resolve this, custom code is used. This code takes user input via watsonx Orchestrate's AI assistant, parses the Oracle HCM JSON response, and extracts the necessary unique IDs. These IDs are then retained as variables to be passed as parameters in the PATCH call, enabling the proper update of a manager."})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,r.jsx)(n.p,{children:'This "Quickstart" provides an importable watsonx assistant with two custom extensions to provide this functionality within watsonx Orchestrate AI Assistant and/or watsonx Assistant for Oracle HCM. The below guide is how to build and configure the assistant.'}),"\n",(0,r.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Download and Import the prebuilt watsonx Orchestrate AI Assistant"}),"\n",(0,r.jsx)(n.li,{children:"Download and Import the OracleHCM Skill/Custom Extensions into watsonx Orchestrate AI Assistant"}),"\n",(0,r.jsx)(n.li,{children:'Stage the "Apply Manager Update Patch" Custom Code Environment'}),"\n",(0,r.jsx)(n.li,{children:"Stage Oracle HCM and the watsonx Orchestrate AI Assistant"}),"\n",(0,r.jsx)(n.li,{children:"Configure Action Step Extensions"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"download-and-import-the-prebuilt-watsonx-orchestrate-ai-assistant",children:"Download and Import the prebuilt watsonx Orchestrate AI Assistant"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Download the ",(0,r.jsx)(n.a,{href:"https://github.com/ibm-client-engineering/solution-askhr/raw/refs/heads/main/assets/usecases/updatemanager/OracleHCM/Assistants/Oracle%20HCM%20Update%20Manager%20Assistant.zip",children:"zip file for the Assistant"})]}),"\n",(0,r.jsxs)(n.li,{children:['Upload the zip file to your watsonx Orchestrate Assistant (If no assistant exists, create one. Feel free to name it anything such as "AskHR Bot")',"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Go to Assistant settings"}),"\n",(0,r.jsx)(n.li,{children:'Click the "Download/Upload" box'}),"\n",(0,r.jsx)(n.li,{children:"Click Upload"}),"\n",(0,r.jsx)(n.li,{children:"Navigate to the downloaded zip file from the previous step"}),"\n",(0,r.jsx)(n.li,{children:'Click "Upload"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"download-and-import-the-oraclehcm-skillcustom-extensions-into-watsonx-orchestrate-ai-assistant",children:"Download and Import the OracleHCM Skill/Custom Extensions into watsonx Orchestrate AI Assistant"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Download the watsonx Orchestrate custom extension ",(0,r.jsx)(n.a,{href:"https://github.com/ibm-client-engineering/solution-askhr/raw/refs/heads/main/assets/usecases/updatemanager/OracleHCM/Skills/Oracle%20-%20Get%20Managers%20and%20Employees.json",children:"Oracle - Get Managers and Employees"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Modify the API spec for ",(0,r.jsx)(n.code,{children:"Oracle HCM"}),' custom extension and replace "YOUR_INSTANCE_HERE" with your Oracle HCM instance name']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"servers": [\n    {\n      "url": "https://YOUR_INSTANCE_HERE.oraclecloud.com/",\n      "description": "HCM API server"\n    }\n]\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Upload the "Oracle - Get Managers and Employees" custom extension'}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Go to integrations"}),"\n",(0,r.jsx)(n.li,{children:'Click "Build Custom Extension"'}),"\n",(0,r.jsx)(n.li,{children:'Click "Next"'}),"\n",(0,r.jsx)(n.li,{children:'Name the extension "Oracle - Get Managers and Employees"'}),"\n",(0,r.jsx)(n.li,{children:"Navigate to the downloaded json file from the previous step"}),"\n",(0,r.jsx)(n.li,{children:'Click "Finish"'}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Add and Authenticate the "Oracle - Get Managers and Employees" custom extension'}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'From your list of extensions under "Integrations, select the created custom extension from above'}),"\n",(0,r.jsx)(n.li,{children:'Click "Add"'}),"\n",(0,r.jsx)(n.li,{children:'Click "Add"'}),"\n",(0,r.jsx)(n.li,{children:'Click "Next"'}),"\n",(0,r.jsx)(n.li,{children:'Under "Authentication Type," select "Basic Auth"'}),"\n",(0,r.jsx)(n.li,{children:'Enter your Oracle HCM username and password\n7 .Click "Next"'}),"\n",(0,r.jsx)(n.li,{children:'Click "Finish"'}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Download the watsonx Orchestrate custom extension ",(0,r.jsx)(n.a,{href:"https://github.com/ibm-client-engineering/solution-askhr/raw/refs/heads/main/assets/usecases/updatemanager/OracleHCM/Skills/Apply%20Manager%20Update%20Patch.json",children:"Apply Manager Update Patch"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Modify the API spec for ",(0,r.jsx)(n.code,{children:"Apply Manager Update Patch"}),' and replace "YOUR_INSTANCE_HERE" with your custom code endpoint URL']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'servers": [\n  {\n    "url": "https://YOUR_INSTANCE_HERE/updateManager"\n  }\n]  \n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Upload the "Apply Manager Update Patch" custom extension'}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Go to integrations"}),"\n",(0,r.jsx)(n.li,{children:'Click "Build Custom Extension"'}),"\n",(0,r.jsx)(n.li,{children:'Click "Next"'}),"\n",(0,r.jsx)(n.li,{children:'Name the extension "Apply Manager Update Patch"'}),"\n",(0,r.jsx)(n.li,{children:"Navigate to the downloaded json file from the previous step"}),"\n",(0,r.jsx)(n.li,{children:'Click "Finish"'}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Add the "Apply Manager Update Patch" custom extension'}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'From your list of extensions under "Integrations, select the created custom extension from above'}),"\n",(0,r.jsx)(n.li,{children:'Click "Add"'}),"\n",(0,r.jsx)(n.li,{children:'Click "Add"'}),"\n",(0,r.jsx)(n.li,{children:'Click "Next"'}),"\n",(0,r.jsx)(n.li,{children:'Click "Finish"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"stage-the-apply-manager-update-patch-custom-code-environment",children:'Stage the "Apply Manager Update Patch" Custom Code Environment'}),"\n",(0,r.jsx)(n.p,{children:"TBD"}),"\n",(0,r.jsx)(n.h4,{id:"stage-oracle-hcm-and-the-watsonx-orchestrate-ai-assistant",children:"Stage Oracle HCM and the watsonx Orchestrate AI Assistant"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"In Oracle HCM, create managers and their direct reports"}),"\n",(0,r.jsxs)(n.li,{children:["For each manager, retain their respective PersonID. This documentation will refer to them as ",(0,r.jsx)(n.code,{children:"Manager 1"})," and ",(0,r.jsx)(n.code,{children:"Manager 2"})]}),"\n",(0,r.jsx)(n.li,{children:"Ensure each manager has at least one direct report."}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{title:"Example",type:"tip",children:[(0,r.jsx)(n.p,{children:"Our assistant assumed the following users and reports in Oracle HCM:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["John Doe (",(0,r.jsx)(n.code,{children:"Manager 1"}),", PersonID 300000009897423), with direct reports Tom Smith and Alice Brown"]}),"\n",(0,r.jsxs)(n.li,{children:["Taylor Jones (",(0,r.jsx)(n.code,{children:"Manager 2"}),", PersonID 300000009928463), with direct report Sam Wiliams"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["In the watsonx Orchestrate AI assistant, set the manager context variables. The ",(0,r.jsx)(n.code,{children:"ContextManager"})," variable represents the PersonID of the manager as the Assistant user. This will allow you to switch the context of the user between ",(0,r.jsx)(n.code,{children:"Manager 1"})," and ",(0,r.jsx)(n.code,{children:"Manager 2"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'Go to "Actions"'}),"\n",(0,r.jsx)(n.li,{children:'Under "Variables" select "Created by you"'}),"\n",(0,r.jsx)(n.li,{children:'Click the "ContextManager" variable'}),"\n",(0,r.jsxs)(n.li,{children:["Set the initial value to the PersonID of your ",(0,r.jsx)(n.code,{children:"Manager 1"})]}),"\n",(0,r.jsx)(n.li,{children:'Click "Save"'}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Update the Names and PersonID's for each manager variable","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'Go to "Actions"'}),"\n",(0,r.jsx)(n.li,{children:'Under "Variables" select "Created by you"'}),"\n",(0,r.jsx)(n.li,{children:'Click the "Manager1" variable'}),"\n",(0,r.jsxs)(n.li,{children:["Set the initial value to the PersonID of your ",(0,r.jsx)(n.code,{children:"Manager 1"})]}),"\n",(0,r.jsx)(n.li,{children:'Click "Save"'}),"\n",(0,r.jsx)(n.li,{children:'Click the "Manager2" variable'}),"\n",(0,r.jsxs)(n.li,{children:["Set the initial value to the PersonID of your ",(0,r.jsx)(n.code,{children:"Manager 2"})]}),"\n",(0,r.jsx)(n.li,{children:'Click "Save"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"configure-action-steps-extensions",children:"Configure Action Steps Extensions"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Navigate to the Assistant actions"}),"\n",(0,r.jsx)(n.li,{children:'Click "Created by you"'}),"\n",(0,r.jsx)(n.li,{children:'Click action "Update Manager"'}),"\n",(0,r.jsx)(n.li,{children:"Select Action Step 5"}),"\n",(0,r.jsx)(n.li,{children:'Click "Edit Extension"'}),"\n",(0,r.jsx)(n.li,{children:'Under "Extension," select "Oracle - Get Managers and Employees" from the dropdown'}),"\n",(0,r.jsx)(n.li,{children:'Under "Operations," select "Get Direct Reports of PersonID"'}),"\n",(0,r.jsx)(n.li,{children:'Under "Parameters," set "PersonID" to Session Variables > "ContextManager".'}),"\n",(0,r.jsx)(n.li,{children:'Under "Optional Parameters," set "fields" to an expression'}),"\n",(0,r.jsxs)(n.li,{children:["In the expression, type the following:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"assignments.directReports:PersonId,DisplayName\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"There is a bug in watsonx Orchestrate where you must click and set the optional parameter even if it appears to be set by default in the json. Make sure you do the above step and hit apply anyway."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:['Under "Optional Paremeters," set "onlyData" to "True".',"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"This parameter will appear to be set. Click and apply anyway."})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:'Click "Save"'}),"\n",(0,r.jsx)(n.li,{children:"Select Action Step 8"}),"\n",(0,r.jsx)(n.li,{children:'Click "Edit Extension"'}),"\n",(0,r.jsx)(n.li,{children:'Under "Extension," select "Oracle - Get Managers and Employees" from the dropdown'}),"\n",(0,r.jsx)(n.li,{children:'Under "Operations," select "Get New Manager\'s Assignment Number"'}),"\n",(0,r.jsx)(n.li,{children:'Under "Optional Paremeters," set "q" to an expression'}),"\n",(0,r.jsxs)(n.li,{children:["In the expression, type the following:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"DisplayName=\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:['After "DisplayName= press the spacebar then type the ',(0,r.jsx)(n.code,{children:"$"}),' character. Select "Session Variables"']}),"\n",(0,r.jsx)(n.li,{children:'Select Session Variable "selectedEmployee"'}),"\n",(0,r.jsxs)(n.li,{children:["Type the ",(0,r.jsx)(n.code,{children:'"'})," character"]}),"\n",(0,r.jsx)(n.li,{children:'Press the left arrow key three times to direct the text cursor before the "selectedEmployee" variable in Builder'}),"\n",(0,r.jsx)(n.li,{children:'Press backspace to delete the space between the "selectedEmployee" variable and ""Direct Reports="'}),"\n",(0,r.jsxs)(n.li,{children:["The expression should look like the following (including quotations):","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"DisplayName=selectedEmployee"\n'})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:'Click "Apply"'}),"\n",(0,r.jsxs)(n.li,{children:['Under "Optional Paremeters," set "fields" to expression "PersonID" (replace "assignments',":AssignmentNumber",'" with "PersonID", without quotes)',"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"PersonID\n"})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:'Click "Apply"'}),"\n",(0,r.jsxs)(n.li,{children:['Under "Optional Paremeters," set "onlyData" to "True".',"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"This parameter will appear to be set. Click and apply anyway."})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Click Apply"}),"\n",(0,r.jsx)(n.li,{children:"Select Action Step 11"}),"\n",(0,r.jsx)(n.li,{children:'Click "Edit Extension"'}),"\n",(0,r.jsx)(n.li,{children:'Under "Extension," select "Oracle - Get Managers and Employees" from the dropdown'}),"\n",(0,r.jsx)(n.li,{children:'Under "Operations," select "Get New Manager\'s Assignment Number"'}),"\n",(0,r.jsx)(n.li,{children:'Under "Optional Paremeters," set "q" to an expression'}),"\n",(0,r.jsxs)(n.li,{children:["In the expression, type the following:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"DisplayName=\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:['After "DisplayName= press the spacebar then type the ',(0,r.jsx)(n.code,{children:"$"}),' character. Select "Action Steps"']}),"\n",(0,r.jsx)(n.li,{children:'Select Action Step Variable "10. Who is the new manager..."'}),"\n",(0,r.jsxs)(n.li,{children:["Type the ",(0,r.jsx)(n.code,{children:'"'})," character"]}),"\n",(0,r.jsx)(n.li,{children:'Press the left arrow key three times to direct the text cursor before the "selectedEmployee" variable'}),"\n",(0,r.jsx)(n.li,{children:'Press backspace to delete the space between the "selectedEmployee" variable and ""Direct Reports="'}),"\n",(0,r.jsxs)(n.li,{children:["The expression should look like the following (including quotations):","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"DisplayName=10. Who is the new manager..."\n'})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:'Click "Apply"'}),"\n",(0,r.jsxs)(n.li,{children:['Under "Optional Paremeters," set "fields" to expression "assignments',":AssignmentNumber",'"',"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"This parameter will appear to be set. Click and apply anyway."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:['Under "Optional Paremeters," set "onlyData" to "True".',"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"This parameter will appear to be set. Click and apply anyway."})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Select Action Step 17"}),"\n",(0,r.jsx)(n.li,{children:'Click "Edit Extension"'}),"\n",(0,r.jsx)(n.li,{children:'Under "Extension," select "Apply Manager Update Patch" from the dropdown'}),"\n",(0,r.jsx)(n.li,{children:'Under "Operations," select "Patch manager details using a dynamic path"'}),"\n",(0,r.jsx)(n.li,{children:'Under "Optional Paremeters," set "path" to an expression'}),"\n",(0,r.jsxs)(n.li,{children:["In the expression, type the following:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"PersonId/\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:['After "PersonId/ press the spacebar then type the ',(0,r.jsx)(n.code,{children:"$"}),' character. Select "Session Variables"']}),"\n",(0,r.jsx)(n.li,{children:'Select Session Variable "selectedPersonId"'}),"\n",(0,r.jsxs)(n.li,{children:["Press the left arrow key ",(0,r.jsx)(n.strong,{children:"two"}),' times to direct the text cursor before the "selectedPersonId" variable']}),"\n",(0,r.jsx)(n.li,{children:'Press backspace to delete the space between the ""PersonId/" and "selectedPersonId" variable'}),"\n",(0,r.jsx)(n.li,{children:'Click the open space after the "selectedPersonId" variable to move the text curser after the "selectedPersonId" variable'}),"\n",(0,r.jsxs)(n.li,{children:["Type the following:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/managerAssignmentNumber/\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["After /managerAssignmentNumber/ press the spacebar then type the ",(0,r.jsx)(n.code,{children:"$"}),' character. Select "Session Variables"']}),"\n",(0,r.jsx)(n.li,{children:'Select Session Variable "newManagerAssignmentNumber"'}),"\n",(0,r.jsxs)(n.li,{children:["Press the left arrow key ",(0,r.jsx)(n.strong,{children:"two"}),' times to direct the text cursor before the "newManagerAssignmentNumber" variable']}),"\n",(0,r.jsx)(n.li,{children:'Press backspace to delete the space between the "managerAssignmentNumber/" and "newManagerAssignmentNumber" variable'}),"\n",(0,r.jsxs)(n.li,{children:["3The expression should look like the following (including quotations):","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"PersonId/selectedPersonId/managerAssignmentNumber/newManagerAssignmentNumber"\n'})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Click Apply"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You are now ready to test the Assistant."}),"\n",(0,r.jsxs)(n.p,{children:["To assume the role of ",(0,r.jsx)(n.code,{children:"Manager 1"}),', type in the assistant "Context switch to manager 1"\nTo assume the role of ',(0,r.jsx)(n.code,{children:"Manager 2"}),', type in the assistant "Context switch to manager 2"']}),"\n",(0,r.jsx)(n.h2,{id:"further-documentation",children:"Further Documentation"}),"\n",(0,r.jsx)(n.h3,{id:"oracle-documentation",children:"Oracle Documentation"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://docs.oracle.com/en/cloud/saas/human-resources/24b/farws/Update_a_Worker_Manager.html",children:'"Update a Worker Manager" documentation'})}),"\n",(0,r.jsx)(n.h3,{id:"oracle-hcm-api-flow-overview",children:"Oracle HCM API Flow Overview"}),"\n",(0,r.jsx)(n.p,{children:'Each PATCH for "Update an Employee Manager" requires following parameters:'}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"EmployeeID"}),' (Parsed from GET worker call - ID located in the "self" child URL, and returns multiple workers unless a query parameter is used)']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"PeriodOfServiceId"})," (Using the workersUniqID parameter above, property is directly returned by the GET worker workRelationships call, in the workRelationships child)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Worker Assignment"}),' (Using the above 2 parameters, parsed from GET worker workRelationships call - ID located in the in the "assignments" child URL). These requirements accomplish "Transfer an Employee" with ',(0,r.jsx)(n.code,{children:"PATCH Update a Worker Assignment"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Worker Manager"}),' (Using the above 3 parameters returns the workerManagers child). These requirements accomplish "Update a Worker Manager" with ',(0,r.jsx)(n.code,{children:"PATCH Update a Worker Manager"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'Per the documentation, you must follow the chain of returns from the GET worker call, GET worker workRelationships call, and GET worker assignments call and retain the "uniqId" in the URL to pass to the required parameters for the PATCH calls (Update a Worker Assignment and Update a Worker Manager) API.'}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart\n    A(Call GET Worker queried to a single worker to retain workersUniqID from self child URL)--\x3e B(Call GET workRelationships to retain parameter PeriodOfServiceId property)--\x3eC(Call GET workerAssignments to retain parameter assignmentsUniqID from assignment child URL)--\x3eD(Call GET workerManagers to retain parameter managersUniqID from manager child URL)--\x3eE(Call PATCH on above path with required inputs)"}),"\n",(0,r.jsx)(n.p,{children:"Via Manual Curls:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Retrieve (GET) the worker details and obtain the manager item link."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# Used to GET worker info and child IDs (workersUniqID, PeriodOfServiceId, assignmentsUniqID)\n/hcmRestApi/resources/11.13.18.05/publicWorkers/{PersonId}\n# or\n/hcmRestApi/resources/11.13.18.05/workers/{PersonId}\n"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"Example Output"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "items": [\n    {\n      "PersonId": 300000009681193,\n      "PersonNumber": "19",\n      "CorrespondenceLanguage": null,\n      "BloodType": null,\n      "DateOfBirth": null,\n      "DateOfDeath": null,\n      "CountryOfBirth": null,\n      "RegionOfBirth": null,\n      "TownOfBirth": null,\n      "ApplicantNumber": null,\n      "CreatedBy": "rkswain@in.ibm.com",\n      "CreationDate": "2024-08-18T08:19:18+00:00",\n      "LastUpdatedBy": "rkswain@in.ibm.com",\n      "LastUpdateDate": "2024-08-18T08:25:52.593+00:00",\n      "links": [\n        {\n          "rel": "self",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078",\n          "name": "workers",\n          "kind": "item",\n          "properties": {\n            "changeIndicator": "ACED0005737200136A6176612E7574696C2E41727261794C6973747881D21D99C7619D03000149000473697A65787000000002770400000002737200116A6176612E6C616E672E496E746567657212E2A0A4F781873802000149000576616C7565787200106A6176612E6C616E672E4E756D62657286AC951D0B94E08B0200007870000000027371007E00020000000178"\n          }\n        },\n        {\n          "rel": "canonical",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078",\n          "name": "workers",\n          "kind": "item"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/addresses",\n          "name": "addresses",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/citizenships",\n          "name": "citizenships",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/disabilities",\n          "name": "disabilities",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/driverLicenses",\n          "name": "driverLicenses",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/emails",\n          "name": "emails",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/ethnicities",\n          "name": "ethnicities",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/externalIdentifiers",\n          "name": "externalIdentifiers",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/legislativeInfo",\n          "name": "legislativeInfo",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/messages",\n          "name": "messages",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/names",\n          "name": "names",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/nationalIdentifiers",\n          "name": "nationalIdentifiers",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/otherCommunicationAccounts",\n          "name": "otherCommunicationAccounts",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/passports",\n          "name": "passports",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/phones",\n          "name": "phones",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/photos",\n          "name": "photos",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/religions",\n          "name": "religions",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/visasPermits",\n          "name": "visasPermits",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/workRelationships",\n          "name": "workRelationships",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/workersDFF",\n          "name": "workersDFF",\n          "kind": "collection"\n        },\n        {\n          "rel": "child",\n          "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers/00020000000EACED00057708000110D9320279290000004AACED00057372000D6A6176612E73716C2E4461746514FA46683F3566970200007872000E6A6176612E7574696C2E44617465686A81014B5974190300007870770800000191E387980078/child/workersEFF",\n          "name": "workersEFF",\n          "kind": "collection"\n        }\n      ]\n    }\n  ],\n  "count": 1,\n  "hasMore": false,\n  "limit": 25,\n  "offset": 0,\n  "links": [\n    {\n      "rel": "self",\n      "href": "https://iavnqy-dev1.fa.ocs.oraclecloud.com:443/hcmRestApi/resources/11.13.18.05/workers",\n      "name": "workers",\n      "kind": "collection"\n    }\n  ]\n}\n'})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Perform a PATCH operation on this URL by providing the new manager information in the request body."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"/hcmRestApi/resources/11.13.18.05/workers/{workersUniqID}/child/workRelationships/{PeriodOfServiceId}/child/assignments/{assignmentsUniqID}/child/managers/{managersUniqID}\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example PATCH request body to change an employee's manager:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"ActionCode": "MANAGER_CHANGE",\n"ManagerAssignmentNumber": "E955160008191552",\n"ManagerType": "LINE_MANAGER"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Example Response from OracleHCM:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"AssignmentSupervisorId": 598504,\n"EffectiveStartDate": "2019-06-11",\n"EffectiveEndDate": "4712-12-31",\n"ManagerAssignmentId": 300100180052435,\n"ManagerAssignmentNumber": "E955160008191552",\n"ManagerType": "LINE_MANAGER",\n"ActionCode": "MANAGER_CHANGE",\n"ReasonCode": null,\n"CreatedBy": "HCM_INTEGRATION_SPEC",\n"CreationDate": "2019-06-07T15:36:27.784+00:00",\n"LastUpdatedBy": "HCM_INTEGRATION_SPEC",\n"LastUpdateDate": "2019-06-11T18:34:58.437+00:00",\n"links": [...]\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);