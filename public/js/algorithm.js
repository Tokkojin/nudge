////////////////////////// Unchanging Variables //////////////////////////////

var netIncome;              // Annual net income or estimated net income
var age;                    // Does not yet paly a factor in saving
var PERCENTAGETOSAVE = .15; // default value is saving 15% of budget

////////////////////////////// Categories ////////////////////////////////////

var housingAndUtilities;    // rent/mortgage, phone, electric, 
                            // gas, internet, water, etc.
var food;                   // groceries, meals, school lunches, etc.
var transportation;         // car payments, bus/cab fare
var insurancesAndHealth;    // life/health insurance, medical/dental/drug bills
var personalCare;           // toiletries, makeup, etc.
var clothing;               // new clothing purchases, landry, dry cleaning
var dependentCare;          // childcare, child support, etc.
var education;              // tuition, books, loans, etc.
var entertainment;          // cable, recreation, vacations, private lessons
var other;                  // church, charity, subscriptions, cigarettes, pets

var categories = [housingAndUtilities, food, transportation, 
    insurancesAndHealth, personalCare, clothing, 
    dependentCare, education, entertainment, other]

//////////////////////////////////////////////////////////////////////////////

function budgetAlgo(netIncome, age, PERCENTAGETOSAVE, categories){
    disposableIncome = netIncome - PERCENTAGETOSAVE;
    for (category in categories){
        disposableIncome -= category;
    }
    return disposableIncome;
}