import { IsInt, IsString, IsNotEmpty } from "class-validator";

export default class CreateCustomerDto {
    @IsString()
    @IsNotEmpty({ message: "Name is required" })
    name: string;
    @IsInt()
    @IsNotEmpty({ message: "Age is required" })
    age: number;
    @IsNotEmpty({ message: "Description is required" })
    @IsString()
    Description: string;
}
