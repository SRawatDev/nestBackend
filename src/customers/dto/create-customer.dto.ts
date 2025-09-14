import { IsInt, IsString } from "class-validator";

export default class createCustomerDto {
    @IsString()
    name: string;
    @IsInt()
    age: number;
}