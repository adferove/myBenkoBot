const sumSomething = (a,b)=>{
  console.log("Doing it...");
  return a + b;
}

//Welcome to BenkoBot! Here's the documentation:
//http://docs.trellinator.com/
console.log("Welcome to BenkoBot "+new Trellinator().username());

// ------------ Scheduled Actions ------------ //
//
// To schedule an Action to run in the future:
//
// Step 1: Make an Action and save it.
//
// You can use the following arguments in your Action:
//
//    ___queue.args().params
//    ___queue.args().signature
//    ___queue.args().original_date
//
// Step 2: In another Action, or in a Listener, schedule the Action:
//
//.   ___queue.put("youGotScheduled",{id: cr8d.id()},Trellinator.now().addMinutes(1));
//
// Step 3: There is no step 3 - unless you want your action to run again**
//
// There is no repeat. You need to schedule your saved Action again in your saved Action. You know, like Inception.
//
// ------------ / Scheduled Actions ------------ //

