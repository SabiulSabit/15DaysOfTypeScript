//import all classes
import { User } from './User'
import { Company } from './Company'
import { CustomeMap } from './CustomMap'

//create user and company
const user = new User();
const company = new Company()


//create map
const customMap = new CustomeMap('map');
customMap.addMarker(user);
customMap.addMarker(company)






