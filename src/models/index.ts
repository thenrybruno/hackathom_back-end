import { Service } from "./Service";
import { User } from "./User";

User.hasMany(Service)

Service.belongsTo(User)

export {
    User,
    Service
}