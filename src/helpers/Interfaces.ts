export * from "../appBase/interfaces";

export interface CampusInterface { id?: string, name?: string }
export interface ContactInfoInterface { address1?: string, address2?: string, city?: string, state?: string, zip?: string, homePhone?: string, mobilePhone?: string, workPhone?: string, email?: string }
export interface GroupInterface { id?: string, name?: string, categoryName?: string, memberCount?: number, trackAttendance?: boolean, parentPickup?: boolean }
export interface GroupServiceTimeInterface { id?: string, groupId?: string, serviceTimeId?: string, serviceTime?: ServiceTimeInterface }
export interface HouseholdInterface { id?: string, name?: string }
export interface FundInterface { id?: string, name?: string }
export interface NameInterface { first?: string, middle?: string, last?: string, nick?: string, display?: string }
export interface PersonInterface { id?: string, name: NameInterface, contactInfo: ContactInfoInterface, membershipStatus?: string, gender?: string, birthDate?: Date, maritalStatus?: string, anniversary?: Date, photo?: string, photoUpdated?: Date, householdId?: string, householdRole?: string, userId?: string }
export interface ServiceInterface { id?: string, campusId?: string, name?: string }
export interface ServiceTimeInterface { id?: string, name?: string, longName?: string, serviceId?: string }