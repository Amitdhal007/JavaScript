// how javaScript file executes
// the execution done in two phase
// when we executes javaScript file first of all
// 1. global execution context gets created and it is stored in this variable and this helps in the exection of js file
// 2. memory creation phase --- >>>
// in this all the variable and function gets declared variable contain undefined and functions contains body
// 3. exection phase --- >>>>>
// in this values are assigned to the variable and also operations are done and if a function call is there in that case a new execution context gets created 
// which basically contains two thing (new variable environment + exection thread) and this exection context also has to follow the two steps 
// (memory creation phase and exection phase) and once the function complets its body and if has to return a value that value is received by the (global exection context)

// call stack
// in call stack all the function call are present and once the function completes its body then the call gets removed from the stack