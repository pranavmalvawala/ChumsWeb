export * from "../appBase/interfaces";

export interface CampusInterface { id?: number, name?: string }
export interface ContactInfoInterface { address1?: string, address2?: string, city?: string, state?: string, zip?: string, homePhone?: string, mobilePhone?: string, workPhone?: string, email?: string }
export interface GroupInterface { id?: number, name?: string, categoryName?: string, memberCount?: number, trackAttendance?: boolean, parentPickup?: boolean }
export interface GroupServiceTimeInterface { id?: number, groupId?: number, serviceTimeId?: number, serviceTime?: ServiceTimeInterface }
export interface HouseholdInterface { id?: number, name?: string }
export interface FundInterface { id?: number, name?: string }
export interface NameInterface { first?: string, middle?: string, last?: string, nick?: string, display?: string }
export interface PersonInterface { id?: number, name: NameInterface, contactInfo: ContactInfoInterface, membershipStatus?: string, gender?: string, birthDate?: Date, maritalStatus?: string, anniversary?: Date, photo?: string, photoUpdated?: Date, householdId?: number, householdRole?: string, userId?: number }
export interface ServiceInterface { id?: number, campusId?: number, name?: string }
export interface ServiceTimeInterface { id?: number, name?: string, longName?: string, serviceId?: number }