import { sum } from "../components/sum";

test("check sum of 2 positive number",()=>{
    expect(sum(2,5)).toBe(7); 
})