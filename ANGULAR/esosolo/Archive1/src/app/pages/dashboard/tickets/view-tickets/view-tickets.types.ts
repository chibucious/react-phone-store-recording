// Here assignes data types
export interface TicketUsersInterface {
    icon: string;
    name: string;
    userid: number | string;
    subject: string;
    assinees1: string;
    assinees2: string;
    assinees3: string;
    activity: string;
    priority: string;
    status: boolean;
    [key: string]: any;
}