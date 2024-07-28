import { User } from "firebase/auth";

export interface Params {
    item: any;
    idx: number;
    user: User | null | undefined;
}