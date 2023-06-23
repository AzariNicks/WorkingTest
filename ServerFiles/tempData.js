// okay so this for now is gonna be our data , this should come from a database server instead not this 
// sad replacement 

class ConsumerData   {
    constructor(medicadeID,fullName,homeAddress,arrivalPoint,userId){
        this.medicadeID = medicadeID
        this.fullName = fullName
        this.homeAddress = homeAddress
        this.arrivalPoint = arrivalPoint
        
        this.userId = userId // this needs to be a uniqueID 
    }
}
class Users {
    constructor(userId, userName, firstName, password,homeBase) {
        this.userId = userId;
        this.userName = userName;
        this.firstName = firstName;
        this.password = password;
        this.homeBase = homeBase
    }
}
const fakeUser1 = new Users(1,"AzariSells","Azari","ThisNeedsToBeHashed", "25-35 Beechwood Ave, Mt.Vernon NY 10553")
const fakeUser2 = new Users(2,"AzariBuys","James","starwars9321", "25-35 Beechwood Ave, Mt.Vernon NY 10553")
const fakeUser3 = new Users(3,"UserNotFound","Read","starwars2193", "25-35 Beechwood Ave, Mt.Vernon NY 10553")
const fakeUser4 = new Users(4,"MrDirector","Read","starwars2193", "25-35 Beechwood Ave, Mt.Vernon NY 10553")

let ConsumersList = []
let UsersList = [] 

const consumer1 = new ConsumerData("ROAD456789", "Greg James", "100 Livingston Ave", "25-35 Beechwood Ave, Mt.Vernon NY 10553")
const consumer2 = new ConsumerData("ROA323233", "James Greg", "Some Address Ave", "25-35 Beechwood Ave, Mt.Vernon NY 10553")
const consumer3 = new ConsumerData("ROA987654", "Emily Smith", "42 Main St", "25-35 Beechwood Ave, Mt.Vernon NY 10553");
const consumer4 = new ConsumerData("ROA789012", "Sarah Johnson", "700 Oak Lane", "25-35 Beechwood Ave, Mt.Vernon NY 10553");
const consumer5 = new ConsumerData("ROA345678", "Michael Davis", "123 Broadway", "25-35 Beechwood Ave, Mt.Vernon NY 10553");
const consumer6 = new ConsumerData("ROA567890", "Jennifer Brown", "55 Park Road", "30-35 Elmwood Drive, Miami, FL 43210");
const consumer7 = new ConsumerData("ROA123456", "David Thompson", "8 Willow Lane", "25-35 Beechwood Ave, Mt.Vernon NY 10553");
const consumer8 = new ConsumerData("ROA901234", "Jessica Anderson", "99 Pine Street", "25-35 Beechwood Ave, Mt.Vernon NY 10553");
const consumer9 = new ConsumerData("ROA234567", "Daniel Wilson", "60 Elmwood Avenue", "25-35 Beechwood Ave, Mt.Vernon NY 10553");
const consumer10 = new ConsumerData("ROA456789", "Michelle Roberts", "15 Maple Drive", "25-35 Beechwood Ave, Mt.Vernon NY 10553");

ConsumersList.push(consumer1)
ConsumersList.push(consumer2,consumer3,consumer4)
ConsumersList.push(consumer5,consumer6,consumer7)
ConsumersList.push(consumer8,consumer9,consumer10)
UsersList.push(fakeUser1,fakeUser2,fakeUser3,fakeUser4)
module.exports = {
    UsersList,
    ConsumersList

}