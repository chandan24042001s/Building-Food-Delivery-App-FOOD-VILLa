import Header from "../components/Header"
import { render } from "@testing-library/react";

test("logo should load on rendering header",()=>{
    //load header
    const header=render(<Header/>)
    console.log(header);
})