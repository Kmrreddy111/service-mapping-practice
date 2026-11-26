window.QUESTIONS = [
  {
    "id": "pat-01",
    "question": "Two products answer HTTP requests on the same host. One embeds the other's web engine. Which pattern design most reliably distinguishes the embedded product?",
    "options": [
      "Choose the first pattern alphabetically and mark it authoritative.",
      "Evaluate the generic web engine first because it handles the HTTP request.",
      "Use the port number as the sole identifying attribute for both products.",
      "Test the more specific product signature before the generic web engine signature."
    ],
    "answer": 3,
    "explanation": "Both products can satisfy the generic HTTP signature. The more specific pattern needs a chance to identify the product before the broad match succeeds.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery-and-service-mapping-patterns/t_CreatePatternPatDef.html",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-02",
    "question": "The entry point resolves to a host listening on TCP 8443. Which Find Process Strategy should identify the local process accepting those connections?",
    "options": [
      "None",
      "A lookup using the application's display name",
      "Target Port and IP",
      "Listening Port"
    ],
    "answer": 3,
    "explanation": "The local listener owns the port reached by the entry point. Target Port and IP addresses the different case of a process communicating with a remote endpoint.",
    "source": "https://www.servicenow.com/community/itom-articles/create-new-or-modify-patterns/ta-p/2295761",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-03",
    "question": "A Match step compares an empty temporary variable with the word “ledger.” A CI form displays that word in a process field. What should you examine first?",
    "options": [
      "The reconciliation priority for the service name",
      "The last update timestamp on the application service",
      "The available runtime variables and the step expected to populate the value",
      "The display label of the CI field on the form"
    ],
    "answer": 2,
    "explanation": "A value on a CI form does not establish that the same value is available at this point in a pattern. Inspect the actual runtime data used in the comparison.",
    "source": "https://www.servicenow.com/community/itom-forum/application-discovery-match-step-predicate-is-not-matched/m-p/947216",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-04",
    "question": "A pattern must stop treating a Java process as the payment application unless its command line contains a distinctive application argument. Which operation expresses this test?",
    "options": [
      "Match",
      "Merge Table",
      "Parse File",
      "Set Parameter Value"
    ],
    "answer": 0,
    "explanation": "Match evaluates a condition against the evidence collected for the candidate process. Merely extracting or assigning the argument does not enforce the identification condition.",
    "source": "https://www.servicenow.com/community/cmdb-forum/pattern-designer-identification-section/m-p/2889400",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-05",
    "question": "A middleware CI appears on a top-down map, but its configured downstream broker is absent. Which section should you debug first to inspect how the broker address is obtained?",
    "options": [
      "The broker pattern's extension section",
      "The host pattern's identification section",
      "The middleware pattern's connection section",
      "The middleware pattern's CI type definition"
    ],
    "answer": 2,
    "explanation": "The middleware is already identified. Start where its outgoing endpoint is derived, then investigate identification of the broker if that endpoint was produced correctly.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery-and-service-mapping-patterns/connection-section-traffic-based.html",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-06",
    "question": "A prior step already stored the full application startup line in a temporary string. Which operation can extract its configuration path without running the command again?",
    "options": [
      "Parse File",
      "WMI Query",
      "Get Process",
      "Parse Variable"
    ],
    "answer": 3,
    "explanation": "Parse Variable works on a value available inside the pattern. Reading another file or querying the host again changes the input and adds unnecessary work.",
    "source": "https://www.servicenow.com/community/cmdb-forum/pattern-designer-identification-section/m-p/2889400",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-07",
    "question": "The application reads its database address from a text file whose path the pattern already knows. Which operation should extract the configured address directly?",
    "options": [
      "Set Parameter Value to the directory name",
      "Match on the path string",
      "Parse Variable on the file path",
      "Parse File"
    ],
    "answer": 3,
    "explanation": "Parse File reads the contents at the path. Parsing the path string itself would reveal directory or filename text, not the database address inside.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery-and-service-mapping-patterns/connection-section-traffic-based.html",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-08",
    "question": "A command returns one line per database, with three fields separated by a semicolon. Field order never changes and values cannot contain semicolons. Which parsing strategy is the simplest fit?",
    "options": [
      "Use the longest digit sequence as a field boundary.",
      "Capture a fixed number of characters from every line.",
      "Split the lines into fields using the delimiter.",
      "Treat each row as an unstructured hostname."
    ],
    "answer": 2,
    "explanation": "A stable separator gives each field a clear boundary even when field lengths change. Fixed-width parsing depends on a different guarantee.",
    "source": "https://www.servicenow.com/community/cmdb-forum/pattern-designer-identification-section/m-p/2889400",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-09",
    "question": "A pattern uses the expression db_port=([0-9]+) against the text tenant=42 db_port=5432. What does capture group 1 contain?",
    "options": [
      "tenant=42 db_port=5432",
      "5432",
      "42",
      "db_port=5432"
    ],
    "answer": 1,
    "explanation": "The literal prefix locates the correct field. Only the digits following that prefix sit inside the parentheses, so the captured value is 5432.",
    "source": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-10",
    "question": "A parser must extract only the hostname from the exact syntax “server=ledger-db-02 port=5432”. Hostnames contain letters, digits and hyphens. Which expression puts that hostname alone in group 1?",
    "options": [
      "server=(.*)",
      "server=[A-Za-z0-9-]+ port=([0-9]+)",
      "server=([A-Za-z0-9-]+)",
      "server=([A-Za-z]+)"
    ],
    "answer": 2,
    "explanation": "The character class includes all permitted hostname characters and stops at the space. The greedy wildcard also takes the port, while letters alone truncate the hostname.",
    "source": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-11",
    "question": "A command must run during a pattern, and selected fields from its output must be captured in that same step. Which operation matches the task?",
    "options": [
      "Library Reference",
      "Parse Command Output",
      "Parse File",
      "Parse URL"
    ],
    "answer": 1,
    "explanation": "Parse Command Output combines execution with extraction from the resulting text. A library reference delegates a sequence of steps and does not itself specify this operation.",
    "source": "https://www.servicenow.com/community/itom-articles/extending-patterns/ta-p/2326816",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-12",
    "question": "In debug mode, a version lookup reports that the executable cannot be found. What is the best use of the Command Line Console on the test host?",
    "options": [
      "Inspect the resolved executable path using the discovery context.",
      "Set the MID Server's own shell path as the application's install path.",
      "Replace the extraction expression before checking the command.",
      "Change the version attribute on the existing CI."
    ],
    "answer": 0,
    "explanation": "If the executable never ran, no version text reached the parser. Checking the path on the target isolates the failure before any parsing change.",
    "source": "https://www.servicenow.com/community/itom-forum/discovery-not-consistently-getting-oracle-instance-version/m-p/940635",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-13",
    "question": "A Unix command works in an administrator's interactive SSH session but fails from a pattern with a permission error. Which comparison is most diagnostic?",
    "options": [
      "Compare the regular expression groups used to extract stdout.",
      "Compare the effective users and allowed commands in the two sessions.",
      "Compare the number of CIs returned by each Discovery schedule.",
      "Compare the order of the pattern's outgoing connections."
    ],
    "answer": 1,
    "explanation": "Authentication can succeed while a particular read operation is denied. Evaluate what the discovery identity is allowed to do on the target.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery/discovery-command-probe-pattern.html",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-14",
    "question": "A Windows pattern needs the running state of the LedgerSvc service from Win32_Service. Which WMI query directly requests that information?",
    "options": [
      "SELECT StartMode FROM Win32_Service WHERE Name='LedgerSvc'",
      "SELECT Name FROM Win32_Service WHERE State='Running'",
      "SELECT State FROM Win32_Service WHERE Name='LedgerSvc'",
      "SELECT State FROM Win32_Process WHERE Name='LedgerSvc'"
    ],
    "answer": 2,
    "explanation": "State describes a service's current condition. StartMode describes startup configuration, and listing running service names does not return the named service's state when it is stopped.",
    "source": "https://learn.microsoft.com/en-us/windows/win32/cimwin32prov/win32-service",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-15",
    "question": "A network appliance exposes the required serial-number object only as a scalar OID through its management agent. Which command type fits that evidence source?",
    "options": [
      "SNMP scalar query",
      "HTTP GET request",
      "WMI method invocation",
      "SSH shell command"
    ],
    "answer": 0,
    "explanation": "A scalar SNMP query retrieves a single managed object. A table-oriented operation would be a better fit for repeated rows such as one per interface.",
    "source": "https://www.servicenow.com/docs/r/yokohama/it-operations-management/discovery/command-validation-reference.html",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-16",
    "question": "An application pattern's process strategy is None. A later step assumes the Process temporary variable was populated by that strategy. What should you expect?",
    "options": [
      "The process with the lowest PID is selected.",
      "The process listening on the default HTTP port is selected.",
      "All processes on the host are assigned to the variable.",
      "That strategy leaves the Process variable unpopulated."
    ],
    "answer": 3,
    "explanation": "None explicitly skips process selection. The later step needs evidence from another operation or a process strategy that suits the entry point.",
    "source": "https://www.servicenow.com/community/itom-articles/create-new-or-modify-patterns/ta-p/2295761",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-17",
    "question": "An existing identification pattern works, but you need to gather one additional local attribute without editing its baseline identification steps. What should you add?",
    "options": [
      "A new entry point for the same application URL",
      "An extension section containing the additional collection steps",
      "A parallel copy of every baseline identification step",
      "A connection section aimed back at the same host"
    ],
    "answer": 1,
    "explanation": "An extension is designed to supplement identification logic. It keeps the local attribute collection separate from the baseline steps.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery-and-service-mapping-patterns/modify-pattern-using-extensions.html",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-18",
    "question": "Three application patterns repeat the same vetted sequence for locating a vendor installation directory. Which design best centralizes future fixes?",
    "options": [
      "Store the path in a single global CI relationship.",
      "Put the sequence in a shared library and reference it from each pattern.",
      "Move the directory value to the service's entry point.",
      "Duplicate the steps and give them the same names."
    ],
    "answer": 1,
    "explanation": "A shared library gives the patterns one reusable sequence. Identical step names in three independent copies do not propagate a correction.",
    "source": "https://www.servicenow.com/community/itom-articles/create-new-or-modify-patterns/ta-p/2295761",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-19",
    "question": "Traffic evidence shows an outbound database connection. You want a pattern to rediscover it after a restart, even before new traffic appears. What is the best additional evidence?",
    "options": [
      "A persistent application setting containing the database endpoint",
      "The MID Server process ID during the discovery run",
      "The current client-side ephemeral port on the connection",
      "The time at which the last event reached the instance"
    ],
    "answer": 0,
    "explanation": "A persistent setting can supply the destination independently of an active session. Parsing that setting makes the configured connection repeatable.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery-and-service-mapping-patterns/connection-section-traffic-based.html",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-20",
    "question": "An application can be reached using two different incoming endpoint types. Identification succeeds for one but never starts for the other. What should you inspect first?",
    "options": [
      "The entry point types accepted by the application's identification sections",
      "The output variables of its database connection section",
      "The number of instances in the MID Server cluster",
      "The class of the service map's owner"
    ],
    "answer": 0,
    "explanation": "Identification logic is selected in the context of the incoming endpoint. A supported endpoint type or appropriate section must exist before its identification steps can run.",
    "source": "https://www.servicenow.com/community/itom-articles/create-new-or-modify-patterns/ta-p/2295761",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-21",
    "question": "A connection step builds an address from a variable populated by an earlier step. Which debug procedure tests the step's normal input most faithfully?",
    "options": [
      "Run the prerequisite steps against the representative target, then inspect the variable.",
      "Move the consumer before the producer and rerun discovery.",
      "Use the value from a different target in the same service group.",
      "Set the variable to the expected value and skip its producer for all tests."
    ],
    "answer": 0,
    "explanation": "A successful test with a hand-filled value only proves that the consumer can process that example. Executing its producer also tests whether the target supplies the expected input.",
    "source": "https://www.servicenow.com/community/itom-articles/create-new-or-modify-patterns/ta-p/2295761",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-22",
    "question": "A pattern tested on Linux uses Unix paths and shell output. The same product also runs on Windows with different commands. Which design decision limits incorrect execution?",
    "options": [
      "Run both command sets on every target and discard any failures.",
      "Specify a single discovery schedule for both operating systems.",
      "Use the product's display name as a substitute for operating-system selection.",
      "Set the supported operating systems to match the pattern's implementation."
    ],
    "answer": 3,
    "explanation": "A pattern's supported operating systems restrict its applicability. Tests against a Linux host do not establish that its commands work on Windows.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery-and-service-mapping-patterns/t_CreatePatternPatDef.html",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-23",
    "question": "A team can view the Discovery Pattern Log but also needs someone to edit and publish a discovery pattern. Which Pattern Designer role supplies those authoring capabilities?",
    "options": [
      "pd_admin",
      "A read-only CMDB reporting role",
      "pde_viewer",
      "pd_user"
    ],
    "answer": 0,
    "explanation": "The Pattern Designer administrator role supports authoring and publication. Log access and command-validation viewing are narrower capabilities.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery-and-service-mapping-patterns/configuring-pattern-designer-plugins.html",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-24",
    "question": "Two applications use the same generic runtime process. You configure specific process classification criteria and want the pattern considered only when they match. Which setting supports this?",
    "options": [
      "A longer pattern debug timeout",
      "An extra connection section",
      "Run Order set to Before",
      "Enforce Process Classification"
    ],
    "answer": 3,
    "explanation": "Enforcing classification makes matching those criteria a condition for execution. Run order controls sequencing among candidates without adding the classification requirement.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery-and-service-mapping-patterns/t_CreatePatternPatDef.html",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-25",
    "question": "You need a pattern for top-down mapping of an application process running on a discovered host. Which pattern type is appropriate?",
    "options": [
      "Application",
      "MID Server behavior",
      "Event field mapping",
      "Infrastructure"
    ],
    "answer": 0,
    "explanation": "Application patterns identify software applications and can participate in Service Mapping. Infrastructure patterns focus on discovering devices.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery-and-service-mapping-patterns/modify-pattern-using-extensions.html",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-26",
    "question": "The same web server receives two incoming connections. Only one path produces the missing database relationship. What evidence should you compare?",
    "options": [
      "The CI icon displayed under each incoming connection",
      "The aggregate count of devices discovered that week",
      "The discovery logs for both incoming connection contexts",
      "The update timestamp of the service owner's user record"
    ],
    "answer": 2,
    "explanation": "The incoming context can influence what a pattern discovers. Comparing both runs reveals where the successful path produces different endpoint or connection data.",
    "source": "https://www.servicenow.com/community/itom-articles/service-mapping-troubleshooting-tips-and-tricks/ta-p/2838291",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-27",
    "question": "Several shell and WMI reads in a pattern fail after a credential change. You want to test command access systematically before changing the pattern. What should you use?",
    "options": [
      "An application service review task with the service owner",
      "A relationship health audit for hosted applications",
      "Command Validation Tool with the target and relevant pattern commands",
      "An IRE simulation using the existing CI payload"
    ],
    "answer": 2,
    "explanation": "Command validation tests access to the underlying commands. IRE simulation starts with a supplied payload and cannot establish whether host commands return the expected data.",
    "source": "https://www.servicenow.com/docs/r/yokohama/it-operations-management/discovery/command-validation-reference.html",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-28",
    "question": "A configuration file contains two backend addresses, but the map follows only the first. What should you inspect before raising discovery frequency?",
    "options": [
      "Whether the front end and both backends use the same CI class",
      "Whether the parse result includes both destinations and both are passed to connection processing",
      "Whether the schedule uses a shorter interval than the backend health check",
      "Whether the service owner belongs to both support groups"
    ],
    "answer": 1,
    "explanation": "Compare the raw file with the extracted destinations. Re-running a parser that loses the second value will reproduce the same incomplete map.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery-and-service-mapping-patterns/connection-section-traffic-based.html",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-29",
    "question": "An application pattern completes an isolated test of one step. Before treating it as ready for Service Mapping, which check offers stronger evidence?",
    "options": [
      "Compare its number of steps with a pattern for a similar product.",
      "Run the full application pattern against a representative entry point and inspect the results.",
      "Rename the successfully tested step to match the CI class label.",
      "Publish immediately because one green step validates all subsequent steps."
    ],
    "answer": 1,
    "explanation": "A complete run exercises the steps together, with actual values flowing between them. It can reveal failures that a single successful step cannot expose.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery-and-service-mapping-patterns/t_FinalizePatternPatDef.html",
    "domain": "Pattern Design"
  },
  {
    "id": "pat-30",
    "question": "An updated pattern is saved in the instance, but a test MID Server is still executing an older definition. Which targeted action distributes the updated pattern set?",
    "options": [
      "Rebuild the CMDB health score for the target class.",
      "Use Pattern Sync to Mid for the relevant MID Server.",
      "Reclassify each CI discovered with the older pattern.",
      "Change the application service entry point to the MID Server's address."
    ],
    "answer": 1,
    "explanation": "Pattern synchronization delivers the updated definitions to the MID Server. Changes to existing CI records cannot update the pattern code used on its next run.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery-and-service-mapping-patterns/t_CreatePatternPatDef.html",
    "domain": "Pattern Design"
  },
  {
    "id": "cfg-01",
    "question": "A banking site sits behind a load balancer and sends users to one of four web servers. Which entry point best represents the production web service?",
    "options": [
      "The loopback URL in the deployment package",
      "The administration URL of the load balancer",
      "The production HTTPS URL used by customers",
      "The SSH endpoint of the first web server"
    ],
    "answer": 2,
    "explanation": "The customer URL identifies the virtual endpoint through which the banking service is consumed. A management port or individual pool member starts discovery from a different perspective.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/service-mapping/r_EntryPointsforBizSvcDef.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-02",
    "question": "Bulk mapping omitted a payments application. You know its production URL and the owner can verify the results. What should you do next?",
    "options": [
      "Define an individual application service with its entry point and run mapping",
      "Create another bulk run that uses the support group as the entry point",
      "Add the URL to a service group and wait for it to discover the map",
      "Modify the business application name to match the URL"
    ],
    "answer": 0,
    "explanation": "Individual mapping lets you supply known service details for an application missed by bulk discovery. The entry point gives the mapping run a concrete starting point.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/service-mapping/t_DefineNewBusinessService.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-03",
    "question": "A validated MID Server reaches the target over SSH, but its configured IP range excludes the target subnet. What should you inspect first?",
    "options": [
      "The reconciliation priority for the Linux Server class",
      "The MID Server selection criteria for the application's target range",
      "The order of the application's identification steps",
      "The refresh interval for the existing service map"
    ],
    "answer": 1,
    "explanation": "Reachability alone does not establish eligibility. Review which applications, capabilities and address ranges the MID Server can serve before debugging the pattern.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/service-mapping/configure-mid-service-mapping.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-04",
    "question": "Two isolated data centers reuse the same private IP address. Top-down discovery sometimes reaches the wrong host. Which design accounts for the ambiguity?",
    "options": [
      "Use network location on entry points with location-aware horizontal Discovery schedules",
      "Increase the frequency of top-down runs for both data centers",
      "Give both MID Servers identical IP ranges and rely on the address alone",
      "Assign both endpoints the same display name in the CMDB"
    ],
    "answer": 0,
    "explanation": "The overlapping address needs additional context. Network location lets Service Mapping distinguish the environment that contains the intended host.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/service-mapping/network-location-mid-affinity-td-discovery.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-05",
    "question": "Host discovery succeeds, but a documented application-specific query fails authentication. What should the administrator check next?",
    "options": [
      "Whether another service group owns the application map",
      "Whether the host should use a different class icon",
      "Whether changing the top-down schedule would change the login identity automatically",
      "Whether the application requires separate applicative credentials and permissions"
    ],
    "answer": 3,
    "explanation": "A successful host login proves host access. Some products require another identity or permissions inside the application to retrieve their details.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/service-mapping/prerequisites-service-mapping.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-06",
    "question": "A team wants to refresh one volatile mapped database more often than other production databases. Which top-down schedule scope is most precise?",
    "options": [
      "Specific CI",
      "CI Type",
      "Service Group Attributes",
      "Service Attributes"
    ],
    "answer": 0,
    "explanation": "A Specific CI schedule targets that individual item. A type-based schedule could include other database instances with a different change rate.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/service-mapping/t_CreateDiscoSchedForCITypes.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-07",
    "question": "A new top-down schedule targets a CI type. The relevant CI belongs only to application services still in development. Which prerequisite should the administrator check?",
    "options": [
      "At least one service containing the relevant CI is operational",
      "Every service using that CI belongs to the same service group",
      "The CI is the entry point of every service that uses it",
      "All CI types in the CMDB share a single discovery interval"
    ],
    "answer": 0,
    "explanation": "For schedules defined by CI type or specific CI, check the operational state of a containing application service. Group membership alone does not meet that prerequisite.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/service-mapping/t_CreateDiscoSchedForCITypes.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-08",
    "question": "The retail operations lead needs to organize three manually populated application services and two discovered services in one hierarchy. What meets the requirement?",
    "options": [
      "Create one application service and replace all five service records",
      "Create one shared entry point through which all five must be discovered",
      "Place the services in a service group, nesting groups if needed",
      "Convert the manually populated services to discovered services before grouping"
    ],
    "answer": 2,
    "explanation": "Service groups can organize both manually populated and discovered services. Nesting groups provides a hierarchy while preserving each service's map.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/service-mapping/organizing_services-into-groups.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-09",
    "question": "The database platform team wants a changing set of similar database CIs associated with a technology management offering. Which configuration fits?",
    "options": [
      "A single HTTP entry point shared by every database",
      "A dynamic CI group based on the membership criteria",
      "A different service group for each database process",
      "A scheduled report that lists every application service owner"
    ],
    "answer": 1,
    "explanation": "A dynamic CI group keeps a criteria-based set of infrastructure items together. That set can support management of the offering as its membership changes.",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-dynamic-ci-groups-by-service.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-10",
    "question": "A custom appliance is correctly classified and related in the CMDB, but its symbol in Dependency Views confuses operators. Which change addresses the presentation issue?",
    "options": [
      "Update the map icon associated with the appliance CI class",
      "Reclassify the appliance into a class with the desired picture",
      "Change the parent-child direction of its hosting relationship",
      "Raise the run order of its identification pattern"
    ],
    "answer": 0,
    "explanation": "A map icon associates a visual representation with a CI type. Changing classification or relationships would alter the underlying model to solve a display problem.",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/dependency-views/t_CreateModifyNGBSMMapIcons.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-11",
    "question": "Operations wants to compare revisions of an application configuration file. Which configuration also addresses the sensitivity of retained file contents?",
    "options": [
      "Increase the discovery frequency and grant read access to all tracked content",
      "Replace the file path with a service group name in the entry point",
      "Retain the file name alone and expect a comparison of its contents",
      "Enable configuration file tracking and restrict access to the tracked file records"
    ],
    "answer": 3,
    "explanation": "Configuration file tracking supplies version evidence. When file contents are retained, access controls on tracked configuration file records help protect those contents.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery/tracked-config-files.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-12",
    "question": "The same application CI is reached through two incoming endpoints. One path shows the expected downstream connection and the other does not. Where should troubleshooting start?",
    "options": [
      "Compare only the CI's most recent update timestamp",
      "Move both services into the same service group",
      "Compare the two incoming connection contexts in the top-down Discovery Log",
      "Assign the downstream CI a different map icon"
    ],
    "answer": 2,
    "explanation": "Different incoming connections can lead to different outgoing results. The log lets you follow the execution associated with the failing path.",
    "source": "https://www.servicenow.com/community/itom-articles/service-mapping-troubleshooting-tips-and-tricks/ta-p/2838291",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-13",
    "question": "A service owner suspects a dependency that the installed patterns do not reveal. Which evidence could suggest an additional connection?",
    "options": [
      "A matching support group on two otherwise unrelated CIs",
      "Observed network communication between the relevant components",
      "The same install date on both server records",
      "A shared service-group label in the dashboard"
    ],
    "answer": 1,
    "explanation": "Traffic-based discovery uses observed communication to identify candidate dependencies. Administrative attributes alone do not show that the components communicate.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/service-mapping/traffic-based-discovery.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-14",
    "question": "Traffic evidence reveals a connection, and the application stores the destination in a configuration file. How can future pattern runs discover it directly?",
    "options": [
      "Increase traffic collection without changing the pattern",
      "Add the file itself as the only service entry point",
      "Give the destination the same display name as the source",
      "Add a connection step that parses the destination from the file"
    ],
    "answer": 3,
    "explanation": "A parsing step can read the configured endpoint during discovery. This provides direct evidence when there is little or no matching network traffic during a later observation window.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery-and-service-mapping-patterns/connection-section-traffic-based.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-15",
    "question": "A classic map stops at an unidentified component. The owner knows the downstream topology and wants discovery to continue beyond the error. Which option addresses that need?",
    "options": [
      "Increase the CMDB source precedence for the service owner",
      "Change the display name of the unidentified item to its expected class",
      "Accept the current map as complete and disable further discovery",
      "Use the supported skip-error workflow with the known downstream details"
    ],
    "answer": 3,
    "explanation": "The skip-error workflow uses known topology to continue beyond an identification failure. Preserve the original error for follow-up so the assumed path can be verified.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/service-mapping/skip-errors-continue-discovery-individual-services.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-16",
    "question": "A custom middleware type needs its own class and should inherit applicable attributes from an existing application class. Where should the team start?",
    "options": [
      "Add the middleware display name to the entry point table as its parent",
      "Select the appropriate parent in the CI class hierarchy when defining the type",
      "Create a service group whose name matches the required class",
      "Add a new connection to an existing map to define the class schema"
    ],
    "answer": 1,
    "explanation": "The parent class determines the new class's position and inherited attributes in the CMDB hierarchy. An endpoint or service group cannot define the middleware schema.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery-and-service-mapping-patterns/t_CreateCITypeForSM.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-17",
    "question": "A developer supplies 127.0.0.1 as the host for a remote service entry point because it worked during local testing. Which correction makes the endpoint usable for mapping?",
    "options": [
      "Retain the address and increase the schedule interval",
      "Set the same loopback address as the target in every MID Server range",
      "Use a resolvable host name, VIP or address for the intended service and its listening port",
      "Replace the port with the application's support group name"
    ],
    "answer": 2,
    "explanation": "A loopback address identifies the machine making the request. A mapping entry point must identify the intended remote service from the discovery environment.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/service-mapping/r_EntryPointsforBizSvcDef.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-18",
    "question": "A subnet scan finds dozens of application CIs. Which evidence explains why only some appear on a particular pattern-based application service map?",
    "options": [
      "They all share the entry point's subnet mask",
      "They are reached through dependencies traced from that service's entry point",
      "They were last scanned by the same MID Server",
      "They were inserted in the same Discovery run"
    ],
    "answer": 1,
    "explanation": "A subnet inventory describes what exists in a network range. Top-down discovery uses the starting endpoint and its dependencies to determine the service-specific topology.",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/populate-app-service-top-down.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-19",
    "question": "A host expected on a map has no CI record at all. Which initial check best narrows the failure?",
    "options": [
      "Link a new service group to the address",
      "Increase reconciliation priority on an existing application service",
      "Run Quick Discovery for its address through the appropriate MID Server",
      "Add the host name as an icon label and rediscover the service"
    ],
    "answer": 2,
    "explanation": "Testing host discovery separates reachability and credential problems from downstream mapping logic. Once the host is discoverable, rerun the service mapping path.",
    "source": "https://www.servicenow.com/community/itom-articles/service-mapping-troubleshooting-tips-and-tricks/ta-p/2838291",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "cfg-20",
    "question": "A network team enabled MID affinity, expecting top-down mapping to reuse the MID Server from horizontal Discovery. No horizontal schedule has ever run for that subnet. What is missing?",
    "options": [
      "A consistent name for every MID Server in the instance",
      "A dedicated icon for the network's MID Server",
      "A service group with the same name as the subnet",
      "Execution history from a horizontal schedule covering the target range"
    ],
    "answer": 3,
    "explanation": "Subnet affinity needs prior horizontal Discovery context for that address range. Enabling the property alone does not create a previous MID assignment.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/service-mapping/network-location-mid-affinity-td-discovery.html",
    "domain": "Service Mapping Configuration"
  },
  {
    "id": "dis-01",
    "question": "A schedule uses patterns for Linux discovery. Which sequence should an administrator expect when following one successful host through the run?",
    "options": [
      "Classification, port scanning, identification, exploration",
      "Port scanning, identification, classification, exploration",
      "Port scanning, classification, identification, exploration",
      "Port scanning, classification, exploration, identification"
    ],
    "answer": 2,
    "explanation": "An open port guides classification. Once the target type is known, pattern operations collect its identifying attributes and explore additional details.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery/disco-process-flow-patterns.html",
    "domain": "Discovery Configuration"
  },
  {
    "id": "dis-02",
    "question": "Discovery receives a response on TCP port 22, but the operating system is still unknown. What should establish the device type next?",
    "options": [
      "A classification probe selected using the port probe results",
      "An identification rule using the port number as a unique identifier",
      "An exploration step that lists installed software",
      "A CI relationship derived from the responding address"
    ],
    "answer": 0,
    "explanation": "The responding port gives Discovery a protocol to try. The classification probe gathers details about the host so Discovery can choose an appropriate classification path.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery/disco-process-flow-patterns.html",
    "domain": "Discovery Configuration"
  },
  {
    "id": "dis-03",
    "question": "The Linux classifier matches and its configured trigger is the Horizontal Pattern probe. Which work does the selected pattern perform?",
    "options": [
      "Initial port scanning and device classification",
      "Identification and exploration of the target",
      "MID Server selection and IP range allocation",
      "Event collection and CI-to-alert matching"
    ],
    "answer": 1,
    "explanation": "After classification, the Horizontal Pattern probe starts the applicable pattern. Its steps gather the information used to identify the CI and describe its components or attributes.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery/disco-process-flow-patterns.html",
    "domain": "Discovery Configuration"
  },
  {
    "id": "dis-04",
    "question": "A switch fleet exposes a supported management protocol on a nonstandard port. Which record specifies the protocol and port that a Discovery port probe uses?",
    "options": [
      "IP range set",
      "Credential affinity",
      "CI classifier",
      "IP Service"
    ],
    "answer": 3,
    "explanation": "A port probe refers to an IP Service for the port associated with its protocol. The IP range set describes the addresses in scope.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery/r_DiscoveryPortsAndProtocols.html",
    "domain": "Discovery Configuration"
  },
  {
    "id": "dis-05",
    "question": "Two MID Servers can reach the same subnet. Windows checks must originate from one MID Server and SNMP checks from the other. What should the schedule use?",
    "options": [
      "A Discovery behavior assigning protocol work to the appropriate MID Servers",
      "A failover cluster with the Windows MID Server ordered first",
      "A credential affinity keyed only to the subnet",
      "A single specific MID Server with two IP range sets"
    ],
    "answer": 0,
    "explanation": "A behavior can assign different kinds of Discovery work to different MID Servers. A cluster selection alone does not express this protocol-specific routing requirement.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery/c_DiscoveryBehaviors.html",
    "domain": "Discovery Configuration"
  },
  {
    "id": "dis-06",
    "question": "A schedule explicitly targets a failover MID cluster. All three members are Up and their Order values are 10, 20, and 30. Which member should Discovery select?",
    "options": [
      "The member with Order 30",
      "The member with the fewest active commands",
      "The member with Order 10",
      "The member that last discovered the target"
    ],
    "answer": 2,
    "explanation": "For a failover cluster, Discovery prefers the available Up member with the lowest Order value. This lets the administrator specify the preferred member.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery/t_CreateADiscoverySchedule.html",
    "domain": "Discovery Configuration"
  },
  {
    "id": "dis-07",
    "question": "A schedule explicitly selects MID-A, which also belongs to a cluster with MID-B. The administrator expects either member to run it. Which change expresses that intent?",
    "options": [
      "Keep Specific MID Server and lower MID-B’s Order",
      "Keep Specific MID Server and validate MID-B again",
      "Keep Specific MID Server and give both members the same IP range",
      "Select Specific MID Cluster and choose the cluster"
    ],
    "answer": 3,
    "explanation": "A schedule that names one specific MID Server uses that member. Selecting the cluster makes cluster selection behavior applicable.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery/discovery-schedule-form.html",
    "domain": "Discovery Configuration"
  },
  {
    "id": "dis-08",
    "question": "An IPv4 schedule should automatically choose a MID Server for a branch subnet. Which configuration makes a candidate eligible for range-based matching?",
    "options": [
      "The candidate has the same display name as the branch schedule",
      "The candidate supports Discovery or ALL applications and covers the target IP range",
      "The candidate belongs to the same support group as the target CIs",
      "The candidate has an affinity with the branch's SSH credential"
    ],
    "answer": 1,
    "explanation": "Automatic selection considers the application a MID Server supports and the IP range it serves. These settings describe where it can perform the scheduled Discovery work.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery/discovery-schedule-form.html",
    "domain": "Discovery Configuration"
  },
  {
    "id": "dis-09",
    "question": "During a Discovery run, an analyst wants to compare the instructions sent to a MID Server with the response it returned. Which ECC queue directions correspond to these records?",
    "options": [
      "Output for the instructions and input for the response",
      "Input for the instructions and output for the response",
      "Output for both records, separated by MID Server name",
      "Input for both records, separated by probe topic"
    ],
    "answer": 0,
    "explanation": "Queue direction is defined from the instance’s perspective. The outbound request carries work for the MID Server, and the inbound message contains the returned payload.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery/r_DiscoveryStatusECCQueue.html",
    "domain": "Discovery Configuration"
  },
  {
    "id": "dis-10",
    "question": "A run covered 200 addresses. You need the final activity and issue details for one target IP from that particular run. Where should you start?",
    "options": [
      "The IP ranges on the schedule that started the run",
      "The target class’s identification rule in CI Class Manager",
      "The credentials list on the MID Server configuration",
      "The Devices related list on the run’s Discovery Status record"
    ],
    "answer": 3,
    "explanation": "Device history records the outcome for each scanned address in the selected run. Its issue details lead to log entries for that device.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery/r_DiscoveryStatusDevices.html",
    "domain": "Discovery Configuration"
  },
  {
    "id": "dis-11",
    "question": "A schedule set to discover IP addresses only reports 25 responsive addresses. The CMDB team sees no new server CIs. What best explains the result?",
    "options": [
      "Each responsive address must first receive an application service entry point",
      "The schedule updates existing CIs but always suppresses new ones",
      "An address-only scan can report devices without updating the CMDB",
      "The MID Server must be placed in a cluster before results can be written"
    ],
    "answer": 2,
    "explanation": "IP address discovery records address-scan results without using CI identifiers to create or update CI records. A CI discovery schedule serves a different objective.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery/r_DiscoveryStatusDevices.html",
    "domain": "Discovery Configuration"
  },
  {
    "id": "dis-12",
    "question": "A Linux host responds, but a Discovery log entry reports authentication failure. Which check most directly tests the likely problem?",
    "options": [
      "Change the reconciliation priority for the server’s support group",
      "Verify the SSH credential available to that run against the affected host",
      "Add the host to a second application service",
      "Increase the frequency of the same schedule"
    ],
    "answer": 1,
    "explanation": "A response establishes reachability, while the log points to a login problem. Checking the target-specific credentials distinguishes an authentication failure from later CI processing.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery/discovery-log.html",
    "domain": "Discovery Configuration"
  },
  {
    "id": "dis-13",
    "question": "After a successful scan, later runs try a previously successful credential for that device. Which association enables this behavior?",
    "options": [
      "Credential affinity between a device and a credential",
      "A reconciliation precedence rule for the Discovery source",
      "A map between the IP Service and an application CI",
      "A classification record linking the host name to a schedule"
    ],
    "answer": 0,
    "explanation": "Discovery records which credential worked for a device and can reuse that association on later runs. If credentials change, a new successful match can establish a new affinity.",
    "source": "https://www.servicenow.com/docs/r/platform-security/connections-and-credentials/c_CredentialAffinity.html",
    "domain": "Discovery Configuration"
  },
  {
    "id": "dis-14",
    "question": "Two sources have produced apparent duplicate CIs for the same server. Before changing the scan frequency, which evidence should the analyst compare?",
    "options": [
      "The order of the schedules and the number of runs per day",
      "The preferred MID Server order and cluster member count",
      "The submitted identifying attributes and the target class’s identification rules",
      "The source priorities for the support group attribute alone"
    ],
    "answer": 2,
    "explanation": "Duplicate investigation starts with whether the two payloads could match the same CI under its class rules. Source precedence for an attribute addresses updates after identity has been established.",
    "source": "https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB3235337",
    "domain": "Discovery Configuration"
  },
  {
    "id": "dis-15",
    "question": "Device history shows that a target was classified but could not be identified. Which interpretation should guide troubleshooting?",
    "options": [
      "The target never responded to the initial port scan",
      "The device type was determined, but a CI could not be created or matched",
      "A matching CI was found and all attributes were updated",
      "The schedule only reached the MID Server selection stage"
    ],
    "answer": 1,
    "explanation": "This status places the failure after classification. Inspect the identification probe or pattern results to understand why the record could not be created or matched.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/discovery/r_DiscoveryStatusDevices.html",
    "domain": "Discovery Configuration"
  },
  {
    "id": "evt-01",
    "question": "Several related monitoring events arrive, yet the operator sees one alert. Which explanation best fits Event Management?",
    "options": [
      "Each inbound event must first become an incident before an alert appears",
      "Multiple observations can contribute to the same actionable alert",
      "Each incoming event must always create a separate alert",
      "Only alerts received directly from a MID Server can be displayed"
    ],
    "answer": 1,
    "explanation": "An event is an incoming observation. Event Management can use related observations to create or update a single alert that an operator can investigate.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/event-management/t_EMViewAlert.html",
    "domain": "Event Management"
  },
  {
    "id": "evt-02",
    "question": "A test monitor sends a harmless heartbeat. The operations team wants to filter this known pattern before it adds noise to the alert queue. Which configuration fits?",
    "options": [
      "An incident task template with a low urgency",
      "A reconciliation rule preventing the monitor from updating CIs",
      "An alert management rule that creates a low-priority incident",
      "An Ignore automation matching the source and heartbeat criteria"
    ],
    "answer": 3,
    "explanation": "An Ignore automation filters matching monitoring data from alert handling. Narrow criteria preserve unrelated events from the same monitoring source.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/event-management/create-ignore-automation-sow-itom.html",
    "domain": "Event Management"
  },
  {
    "id": "evt-03",
    "question": "A monitor reports urgency as Red, Amber, or Green. The team wants defined translations into alert severity values. Which configuration directly represents that translation?",
    "options": [
      "Event field mapping with source and target value pairs",
      "Alert assignment rules keyed on the support group",
      "CI identification rules for the monitored class",
      "Incident task templates for each urgency"
    ],
    "answer": 0,
    "explanation": "Event field mappings translate values from a source field into the target field used to generate an alert. Explicit pairs make each vendor value’s meaning consistent.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/event-management/t_EMCreateEventFieldMapping2.html",
    "domain": "Event Management"
  },
  {
    "id": "evt-04",
    "question": "A host alert fails to bind. Its node value cannot resolve the host, but additional information includes a unique CI attribute under a vendor-specific field name. Which change addresses the mismatch?",
    "options": [
      "Increase alert severity until the binding is retried",
      "Set the incident number as the alert message key",
      "Add a key that matches the CMDB column and populate it from the vendor field for CI matching",
      "Rename the CI class to match the monitoring source"
    ],
    "answer": 2,
    "explanation": "CI field matching needs comparable attribute names and values. An event rule can expose the vendor’s value under the expected column name so the binding process can use it.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/event-management/ci-matching-manual-field.html",
    "domain": "Event Management"
  },
  {
    "id": "evt-05",
    "question": "A synthetic monitor reports checkout availability. Its event contains a reliable service identifier, and the alert should bind to the application service itself. Which design fits?",
    "options": [
      "Keep host-only binding and assign the service owner to the alert",
      "Configure CI field matching against the application service class and identifier",
      "Set the service identifier as severity for all synthetic events",
      "Choose the MID Server host as the CI for every transaction"
    ],
    "answer": 1,
    "explanation": "Set the binding target to the intended non-host class and supply its matching data. Assigning the alert to someone does not establish a CI association.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/event-management/t_EMBindServiceCI.html",
    "domain": "Event Management"
  },
  {
    "id": "evt-06",
    "question": "An actionable database alert already exists. Operations wants a defined condition to trigger an incident-creation subflow. Which rule is designed for this stage?",
    "options": [
      "Alert management rule",
      "Event field mapping rule",
      "Discovery classification rule",
      "CI reconciliation rule"
    ],
    "answer": 0,
    "explanation": "Alert management rules evaluate alerts and initiate responses such as opening a task or invoking a subflow. Event processing rules apply upstream to incoming monitoring data.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/event-management/alert-management-rule.html",
    "domain": "Event Management"
  },
  {
    "id": "evt-07",
    "question": "A legacy Create Task subflow already opens incidents from alerts. Every incident created through this route needs the same category. Which reusable configuration can supply the static field value?",
    "options": [
      "A message key on the inbound event",
      "A CI binding rule for the infrastructure class",
      "A port probe registered as an IP Service",
      "An incident task template used by the subflow"
    ],
    "answer": 3,
    "explanation": "A task template can provide field values when the legacy Create Task subflow creates its task. Binding and event identity govern the alert rather than defaults on the new incident.",
    "source": "https://www.servicenow.com/docs/r/yokohama/it-operations-management/event-management/subflows-provided.html?contentId=ICNLoiwAdRLOVU~~yNyUiA",
    "domain": "Event Management"
  },
  {
    "id": "evt-08",
    "question": "Two monitors emit intermittent spikes. Operations wants an alert only after a defined event rate is reached. What should an administrator configure?",
    "options": [
      "A maintenance window with no end date",
      "A data source precedence rule",
      "An event suppression threshold",
      "A separate CI class for transient events"
    ],
    "answer": 2,
    "explanation": "An event threshold expresses how frequently qualifying events must occur to generate an alert. It lets the team distinguish recurring conditions from isolated spikes.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/event-management/t_EMISetThresholdEvent.html",
    "domain": "Event Management"
  },
  {
    "id": "evt-09",
    "question": "In a shift handover, an operator needs to move from an affected application service to the CIs behind its warning status. Which view supports this investigation?",
    "options": [
      "The MID Server cluster membership list",
      "The Service Operations Workspace dashboard with service impact drill-down",
      "The scheduled Discovery IP range list",
      "The event field mapping value-pair editor"
    ],
    "answer": 1,
    "explanation": "The operator workspace provides service health context and a path into affected CIs. This connects the technical alert with the service whose operation may be affected.",
    "source": "https://www.servicenow.com/docs/r/xanadu/it-operations-management/event-management/operator-user-interfaces.html?contentId=_qdlxjJbWcp6J8fBBTGsVQ",
    "domain": "Event Management"
  },
  {
    "id": "evt-10",
    "question": "A customer already monitors CPU, database availability, and network health. Which outcome best explains the value of Event Management to its incident team?",
    "options": [
      "Replace every monitoring agent with an event rule",
      "Treat every alert as a confirmed outage affecting customers",
      "Use the count of raw events as the sole measure of service impact",
      "Prioritize investigation using actionable alerts and their affected service context"
    ],
    "answer": 3,
    "explanation": "The incident team can use alert and service context to decide where to investigate first. Monitoring measurements alone do not establish how a dependency issue affects a service.",
    "source": "https://www.servicenow.com/docs/r/xanadu/it-operations-management/event-management/operator-user-interfaces.html?contentId=_qdlxjJbWcp6J8fBBTGsVQ",
    "domain": "Event Management"
  },
  {
    "id": "cmdb-01",
    "question": "The Payments map shows two nodes for the same physical server. To find out why two feeds created separate CI records, what should you compare first?",
    "options": [
      "The data source priority for the server's support group",
      "The identifiers in each payload against the server class identification rule",
      "The relationship types between Payments and the server",
      "The last CMDB Health compliance audit for the server"
    ],
    "answer": 1,
    "explanation": "A shared name on a map does not establish identity. Compare the values each feed sent for the active matching criteria to see whether IRE could locate the same CI.",
    "source": "https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB3235337",
    "domain": "Configuration Management Database"
  },
  {
    "id": "cmdb-02",
    "question": "A dashboard flags 40 server CIs because their recommended Support group field is empty. Which CMDB Health KPI captures this failure?",
    "options": [
      "Correctness",
      "Compliance",
      "Completeness",
      "Relationship health"
    ],
    "answer": 2,
    "explanation": "An empty recommended field reduces completeness. A record can identify the right server and still lack the information a support team needs.",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html",
    "domain": "Configuration Management Database"
  },
  {
    "id": "cmdb-03",
    "question": "A CMDB administrator wants to see where Linux Server sits in the class hierarchy and inspect its class definition. Where should she look?",
    "options": [
      "CI Class Manager",
      "CI Relationship Editor",
      "Duplicate CI Remediator",
      "Identification Simulator"
    ],
    "answer": 0,
    "explanation": "CI Class Manager exposes the hierarchy and class metadata. The parent class of Linux Server describes its table structure, whereas a relationship editor deals with links between individual CI records.",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_ViewTableDefinitions.html",
    "domain": "Configuration Management Database"
  },
  {
    "id": "cmdb-04",
    "question": "A device recorded as a generic Server is confirmed to be a Linux Server. The administrator reclassifies it into that descendant class. How is this change categorized?",
    "options": [
      "A class switch",
      "A class downgrade",
      "A duplicate merge",
      "A class upgrade"
    ],
    "answer": 3,
    "explanation": "Moving from an ancestor class to a more specific descendant is an upgrade. The platform retains the CI's sys_id through reclassification.",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_ManuallyReclassifyCI.html",
    "domain": "Configuration Management Database"
  },
  {
    "id": "cmdb-05",
    "question": "A team plans to move a CI from a specialized class into its parent class. One field exists only in the specialized class. What should the team plan for?",
    "options": [
      "The parent automatically gets a new column for the field",
      "The destination record cannot retain the child-only field",
      "The existing sys_id must be replaced on all incidents",
      "The field value automatically moves to the CI relationship record"
    ],
    "answer": 1,
    "explanation": "A downgrade stores the CI in a class with fewer attributes. Capture any child-only values needed for reporting before the change.",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_ManuallyReclassifyCI.html",
    "domain": "Configuration Management Database"
  },
  {
    "id": "cmdb-06",
    "question": "Checkout reads from OrdersDB. For a relationship of type Depends on::Used by, which parent and child express Checkout's dependency?",
    "options": [
      "Parent OrdersDB, child Checkout",
      "Parent Checkout, child the OrdersDB support group",
      "Parent Checkout, child OrdersDB",
      "Parent OrdersDB, child the Checkout service owner"
    ],
    "answer": 2,
    "explanation": "Read the forward descriptor from parent to child. Checkout depends on OrdersDB. Read from the database, that same relationship says OrdersDB is used by Checkout.",
    "source": "https://www.servicenow.com/community/common-service-data-model-forum/cmdb/m-p/3492469",
    "domain": "Configuration Management Database"
  },
  {
    "id": "cmdb-07",
    "question": "An export contains one row per CI and no links. You need the stored parent, child and type for each CI-to-CI dependency. Which table supplies those records?",
    "options": [
      "CI Relationship [cmdb_rel_ci]",
      "Configuration Item [cmdb_ci]",
      "CI Relationship Type [cmdb_rel_type]",
      "Server [cmdb_ci_server]"
    ],
    "answer": 0,
    "explanation": "Each link between two specific CIs is a record in cmdb_rel_ci. A relationship type defines the meaning of that link and can be reused for many pairs.",
    "source": "https://www.servicenow.com/docs/r/api-reference/server-api-reference/c_CMDBUtilAPI.html",
    "domain": "Configuration Management Database"
  },
  {
    "id": "cmdb-08",
    "question": "Two hosts each run an application component called worker-01. Its CI class uses dependent identification through a hosting relationship. What context must the feed supply to distinguish them?",
    "options": [
      "A different severity for each application alert",
      "An earlier discovery timestamp for one component",
      "A different display name for every host on the network",
      "The appropriate identified host and hosting relationship for each component"
    ],
    "answer": 3,
    "explanation": "Dependent identification uses a related CI as part of the match. The host context lets IRE distinguish otherwise similar component instances.",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/best-practices-id-reconcile.html",
    "domain": "Configuration Management Database"
  },
  {
    "id": "cmdb-09",
    "question": "Discovery and a procurement feed already match the same server CI. Procurement should govern its purchase date, while Discovery should govern its OS version. Which configuration addresses this requirement?",
    "options": [
      "A separate identifier entry for purchase date and OS version",
      "Static reconciliation rules authorizing sources by attribute",
      "An orphan rule for each discovery source",
      "A class reclassification restriction for each source"
    ],
    "answer": 1,
    "explanation": "The server's identity is already known. Attribute-level reconciliation can assign update authority and precedence separately for the purchase date and OS version.",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/r_ReconciliationRulesPrinciples.html",
    "domain": "Configuration Management Database"
  },
  {
    "id": "cmdb-10",
    "question": "Two static reconciliation rules for the same class apply to a source. One names the OS version attribute explicitly and the other covers all attributes. Which rule is more specific for OS version?",
    "options": [
      "Whichever rule was created first",
      "The all-attributes rule because it covers the entire class",
      "The rule that explicitly names OS version",
      "Whichever rule processed the most recent import"
    ],
    "answer": 2,
    "explanation": "For a given attribute, an explicit attribute rule takes precedence over an all-attributes rule. Compare the scope of the rules before comparing their numeric priorities.",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/create-reconciliation-rule.html",
    "domain": "Configuration Management Database"
  },
  {
    "id": "cmdb-11",
    "question": "A higher-priority discovery source has stopped refreshing its data. Which configuration defines how long its data stays fresh when reconciliation evaluates another authorized source?",
    "options": [
      "A data refresh rule for the class and source",
      "The general CMDB Health dashboard schedule",
      "The class's first identification entry",
      "The CI relationship type's reverse descriptor"
    ],
    "answer": 0,
    "explanation": "A data refresh rule sets the effective duration for a source's data. Reconciliation considers this freshness when evaluating updates from another authorized source.",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/create-datasource-staleness-rule.html",
    "domain": "Configuration Management Database"
  },
  {
    "id": "cmdb-12",
    "question": "Two confirmed duplicate server CIs each have useful links. One has the application relationship and the other has referenced tickets. What should the analyst do in the de-duplication task?",
    "options": [
      "Retire both CIs and wait for rediscovery",
      "Select the newest CI and discard the older record's links",
      "Create a third server to hold the application relationship",
      "Choose a main CI and review attributes, relationships and related items to merge"
    ],
    "answer": 3,
    "explanation": "Selecting the main CI establishes which record survives. Reviewing links and related items preserves the service map and ticket context from the other record.",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/de-duplication-tasks.html",
    "domain": "Configuration Management Database"
  },
  {
    "id": "cmdb-13",
    "question": "A health rule treats cloud accounts with no required upstream service relationship as orphan CIs. Which KPI contains the orphan CI metric?",
    "options": [
      "Completeness",
      "Correctness",
      "Compliance",
      "Relationship compliance"
    ],
    "answer": 1,
    "explanation": "An orphan CI violates a configured integrity rule, which contributes to correctness. Here the failing object is the account CI itself.",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html",
    "domain": "Configuration Management Database"
  },
  {
    "id": "cmdb-14",
    "question": "An audit compares server CIs with a defined configuration standard. Every required field is filled, but several records fail the audit. Which KPI reports that result?",
    "options": [
      "Completeness",
      "Correctness",
      "Compliance",
      "Relationship health"
    ],
    "answer": 2,
    "explanation": "Compliance uses audit results to measure adherence to the defined standard. A fully populated field can still contain a value that fails the audit.",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/r_CMDBHealthMetrics.html",
    "domain": "Configuration Management Database"
  },
  {
    "id": "cmdb-15",
    "question": "An inventory integration may enrich existing router CIs through IRE. Its payloads must never create a new router when no match exists. Which control fits this requirement?",
    "options": [
      "A data source rule restricting inserts for that class and source",
      "A reconciliation rule giving the source lowest update priority",
      "An identification rule based only on the router display name",
      "A data refresh rule with a short effective duration"
    ],
    "answer": 0,
    "explanation": "An IRE data source rule can restrict a source from inserting CIs of a class. Configure permitted updates to existing records separately through reconciliation.",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/configuring-ire.html",
    "domain": "Configuration Management Database"
  },
  {
    "id": "rdy-01",
    "question": "Which candidate offers the best starting point for a one-service pilot?",
    "options": [
      "The service with the largest incident backlog and no available owner",
      "All services hosted by the largest data center in a single wave",
      "A retired system whose topology can no longer be verified",
      "A critical service with a named owner, reachable entry point and known infrastructure"
    ],
    "answer": 3,
    "explanation": "A bounded, meaningful pilot gives the team a map it can validate and a stakeholder who can judge its value. Complexity alone does not make a strong first candidate.",
    "source": "https://www.servicenow.com/community/itom-articles/quick-start-guide-for-service-mapping/ta-p/3521583",
    "domain": "Engagement Readiness"
  },
  {
    "id": "rdy-02",
    "question": "Several applications depend on one centrally managed authentication service. The owner wants its internal topology maintained once. Which scope decision supports that goal?",
    "options": [
      "Duplicate all authentication CIs into a different CMDB class for each consumer",
      "Remove authentication from every consumer's dependency model",
      "Map authentication as a separate application service and link the consuming services to it",
      "Merge every consuming application and authentication into one service record"
    ],
    "answer": 2,
    "explanation": "A link can represent an outgoing dependency on another application service. This preserves a separately owned shared service and makes the consumers' reliance visible.",
    "source": "https://www.servicenow.com/docs/r/yokohama/it-operations-management/service-mapping/link-services-to-services.html?contentId=N2LjIF_6GqHG7FFzW_r4rQ",
    "domain": "Engagement Readiness"
  },
  {
    "id": "rdy-03",
    "question": "A sponsor assumes a working Discovery schedule proves the organization has the necessary Service Mapping entitlement. What should the engagement lead verify?",
    "options": [
      "Contractual entitlement and activation for the requested Service Mapping capability",
      "That the existing schedule reaches at least one production subnet",
      "That the CMDB contains records in the Application Service class",
      "That an administrator can create a new service group"
    ],
    "answer": 0,
    "explanation": "Operational evidence about Discovery or CMDB tables does not establish contractual coverage. Verify the subscription and activation before committing the rollout scope.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/service-mapping/c_ServiceMappingOverview.html",
    "domain": "Engagement Readiness"
  },
  {
    "id": "rdy-04",
    "question": "A pilot uses a newly introduced middleware version. The project manager asks whether standard pattern coverage can be promised. What evidence should the team obtain?",
    "options": [
      "A list of previous deployments using products from the same vendor",
      "The installed pattern content and its documented product and version coverage",
      "The count of closed incidents for that middleware version",
      "A screenshot showing that the middleware has a CI class"
    ],
    "answer": 1,
    "explanation": "A class describes how a CI can be represented. Actual discovery coverage depends on available pattern content and what it supports, so confirm coverage and validate it in the pilot.",
    "source": "https://www.servicenow.com/docs/r/store-release-notes/store-rn-itom-patterns.html",
    "domain": "Engagement Readiness"
  },
  {
    "id": "rdy-05",
    "question": "Application teams supplied server lists but disagree about how users enter the claims service. Who should resolve the service-access question before mapping?",
    "options": [
      "The credential custodian, using the SSH port of the first server",
      "The application service owner, with evidence of the endpoint clients use",
      "The CMDB analyst, using the most recently updated CI",
      "The network scheduler, using the largest available IP range"
    ],
    "answer": 1,
    "explanation": "The service owner can confirm the consumer-facing entry point and intended scope. An inventory list by itself cannot establish which access path defines the service.",
    "source": "https://www.servicenow.com/docs/r/yokohama/it-operations-management/service-mapping/request-info-entry-points.html",
    "domain": "Engagement Readiness"
  },
  {
    "id": "rdy-06",
    "question": "A pilot spans two restricted network zones. What should the engagement plan establish before promising a delivery date?",
    "options": [
      "A single MID chosen solely because it has the most available memory",
      "MID Server placement and tested reachability to the in-scope targets",
      "An identical discovery interval for every service in both zones",
      "A single IP range covering both zones regardless of routing"
    ],
    "answer": 1,
    "explanation": "The selected MID must be eligible for Service Mapping and able to communicate with the targets. Early network validation exposes routing and access gaps that affect scheduling.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/service-mapping/configure-mid-service-mapping.html",
    "domain": "Engagement Readiness"
  },
  {
    "id": "rdy-07",
    "question": "Security requests a justification for the permissions in the mapping account. Which preparation is most useful?",
    "options": [
      "Request the same unrestricted administrator role on every target",
      "Provide only the MID Server host name and defer target permissions",
      "Document host and application permissions required by the in-scope technologies",
      "Use the service owner's interactive credentials for all environments"
    ],
    "answer": 2,
    "explanation": "Credential requirements vary among target technologies. An explicit list lets security review what the mapping operations need and lets administrators test access before rollout.",
    "source": "https://www.servicenow.com/docs/r/it-operations-management/service-mapping/prerequisites-service-mapping.html",
    "domain": "Engagement Readiness"
  },
  {
    "id": "rdy-08",
    "question": "The desired outcome is faster identification of impacted services during major incidents. Which KPI directly measures progress?",
    "options": [
      "Median minutes from incident declaration to recording the affected services",
      "Number of Discovery credentials installed during onboarding",
      "Total application patterns evaluated during the month",
      "Count of people trained to open the mapping workspace"
    ],
    "answer": 0,
    "explanation": "Elapsed time measures the named operational outcome. Establish a baseline and use comparable incidents after rollout so the comparison is interpretable.",
    "source": "https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/success/playbook/performance-kpi-metrics-guide.pdf",
    "domain": "Engagement Readiness"
  },
  {
    "id": "rdy-09",
    "question": "A shared database is due for maintenance. Which use of service maps gives the change board relevant evidence?",
    "options": [
      "Treat every service with the same support group as a database consumer",
      "Choose the maintenance window solely from the database CI's creation date",
      "Assume every CI in its network range will experience the same impact",
      "Trace dependencies to identify consuming application services and involve their owners"
    ],
    "answer": 3,
    "explanation": "The map supplies dependency context for estimating the change's reach. The change owner can validate the affected services and coordinate the window with their owners.",
    "source": "https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/resource-center/white-paper/application-context-infastructure.pdf",
    "domain": "Engagement Readiness"
  },
  {
    "id": "rdy-10",
    "question": "The team has mapped 40 services. Leadership asks whether the maps are helping operations. Which evaluation best separates delivery volume from operational value?",
    "options": [
      "Compare a defined outcome for mapped services before and after adoption",
      "Count how many additional map layouts can be generated for the same services",
      "Treat the number of mapped services as the improvement in restoration time",
      "Compare map counts between teams without reviewing their service mix"
    ],
    "answer": 0,
    "explanation": "Map count measures delivery coverage. A baseline and follow-up on an agreed outcome, such as time to assess impact, show how operations changed.",
    "source": "https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/success/playbook/performance-kpi-metrics-guide.pdf",
    "domain": "Engagement Readiness"
  }
];
